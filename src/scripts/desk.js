import { rerenderSelect as rerenderDesksSelector } from './desk.selector';
import {showSelectBoardModal} from './select.desk.modal'
import {showComplaintModal} from './complaint.modal'

export function toggleBodyScroll(visible) {
  const bodyEl = document.querySelector('body');
  if (visible) {
    bodyEl.style.overflow = 'inherit';
    
  } else {
    bodyEl.style.overflow = 'hidden';
  }
}

export function deletePin(deskId, pinId) {
  const pin = document.getElementById(`pin_${pinId}`)
  const pinParent = pin.parentElement
  pinParent.removeChild(pin)

  deletePinModelFromDesk(deskId, pinId)
}

export function deletePinModelFromDesk(deskId, pinId) {
  const deskPinsJsonData = localStorage.getItem(`desk-pins-${deskId}`)
  let deskPins;
  if(deskPinsJsonData) {
    deskPins = new Set(JSON.parse(deskPinsJsonData))
  } else {
    deskPins = new Set()
  }

  deskPins.delete(pinId)
  console.log(deskPins)

  localStorage.setItem(`desk-pins-${deskId}`, JSON.stringify(Array.from(deskPins)))
}

export function activateDesk(deskId) {
   //активирует выбранную доску по id
  const desksModels = getDesksModels()
  for (let currentDeskId of Object.keys(desksModels)) {
    //deskModels.7603d172-a09c-4c26-a2b1-9f06b40de803.active may be true or false
    desksModels[currentDeskId].active = deskId === currentDeskId;  //compare deskId with current desk. If true -> the desk is active
    console.log(deskId === currentDeskId)
  }
  localStorage.setItem('desks', JSON.stringify(desksModels))
}

//adds model of desk
export function addDesksModel(deskId, deskTitle, active) {
  const desksModels= getDesksModels()

  desksModels[deskId] = {
    id: deskId,
    title: deskTitle,
    active
  }

  localStorage.setItem('desks', JSON.stringify(desksModels)) //saves desk model to local storage in JSON

  rerenderDesksSelector()  //
  return desksModels //returns object of desk 
}

export function getDesksModels() {
  const desksJson = localStorage.getItem('desks')  //gets desk in JSON format from the local storage
  if(!desksJson) {   //if there's no json, returns an empty object
    return {}
  } else {
    return JSON.parse(desksJson)  //if in JSON - parses it into object
  }
}

export async function fetchPinsByDeskId(deskId) {  //function to fetch pins from mock.api
  let pinsData = [];

  if (deskId === 'main') {
    const response = await fetch('https://63052f15697408f7edc32802.mockapi.io/api/v1/card', {method: 'get'}) //when in main desk, waits for the fetch from mock.api.
    pinsData = await response.json() // then waits for the response in json format
  } else {
    // if not in main, gets pins from the desk fron the local storage
    const pinIdsJsonData = localStorage.getItem(`desk-pins-${deskId}`)

    //if such note exists in local storage - makes object from json and gets all the pins
    if (pinIdsJsonData) {
      pinIds = JSON.parse(pinIdsJsonData) 

        //gets only pins with id from the the chosen desk
      const promises = pinIds.map(pinId => {
        return fetch(`https://63052f15697408f7edc32802.mockapi.io/api/v1/card/${pinId}`, {method: 'get'})
          .then(response => {
            return response.json()
          })
      })

      pinsData = await Promise.all(promises) 
    }
  }

  const searchInput = document.getElementById('search_top') //finds search input
  const keyword = searchInput.value //gets its value

  if(keyword) {
    return pinsData.filter(pinData => {
      return pinData.hashtag.startsWith(keyword) //a hashtag starts with a keyword from search
    })
  } else {
    return pinsData //shows all the pins
  }
}

export async function renderActiveDesk() {
  const deskElement = document.getElementById('board_list')
  //Clean desk list
  deskElement.innerHTML = ''

  //Init desk models if needed
  let desksModels = getDesksModels()
  if(Object.keys(desksModels).length === 0) {
    desksModels = addDesksModel('main', 'Homepage', true) 
  }

  //Check active desk
  const activeDesk = getActiveDesk()
  if (!activeDesk) {
    throw new Error('Active desk not found') 
  }

  //render pins
   // gets active desk id and pins on it. Pins data - array of pins objects
  const pinsData = await fetchPinsByDeskId(activeDesk.id)
  //for each pin from pinsData creates pin with information from mock.api and active desk id. 
  //Then adds pin on deskElement(our desk)
  pinsData.map(pinData => {
    const pinElement = createPinElement(pinData, activeDesk.id)
    deskElement.appendChild(pinElement)
  })
}

export function createPinElement(pinData, deskId) {         //creates pins
  const pinWrapper = document.createElement('div');
  pinWrapper.classList.add('board-list__pin--wrap')
  pinWrapper.setAttribute('id', `pin_${pinData.id}`);

  const pin = document.createElement('div');
  pin.classList.add('board-list__pin')
  pinWrapper.appendChild(pin);

  const image = document.createElement('img')
  image.classList.add('board-list__pin-img')
  image.setAttribute('src', pinData.imageUrl);
  image.setAttribute('alt', pinData.imageUrl)
  pin.appendChild(image)

  const pinActionsWrapper = document.createElement('div')
  pinActionsWrapper.classList.add('pin-actions-wrapper')
  pin.appendChild(pinActionsWrapper)

  const pinActions = document.createElement('div')
  pinActions.classList.add('pin-actions')
  pinActionsWrapper.appendChild(pinActions)

  if(deskId === 'main') {
    const addBtn = document.createElement('button')
    addBtn.classList.add('pin-btn', 'add-pin')
    addBtn.textContent = 'Добавить'
    pinActions.appendChild(addBtn)
    addBtn.onclick = () => {
      showSelectBoardModal(pinData.id)
    }
  } else {  
    const btnClose = document.createElement('button')
    btnClose.classList.add('pin-btn', 'delete-pin')
    btnClose.innerHTML = "Удалить"
    btnClose.onclick = () => {
      deletePin(deskId, pinData.id)
    }
    pinActions.appendChild(btnClose)
  }

  const complaintBtn = document.createElement('button')
  complaintBtn.classList.add('pin-btn', 'complaint-pin')
  complaintBtn.textContent = 'Пожаловаться'
  complaintBtn.onclick = () => {showComplaintModal(pinData.id)}
  pinActions.appendChild(complaintBtn)
  
  const descrWrapper = document.createElement('div');
  descrWrapper.classList.add('board-list__description--wrapper');
  pinWrapper.appendChild(descrWrapper);

  const avatarWrapper = document.createElement('div');
  avatarWrapper.classList.add('board-list__avatar-wrapper');
  descrWrapper.appendChild(avatarWrapper);

  const avatar = document.createElement('img')
  avatar.setAttribute('src', pinData.authorAvatar);
  avatar.classList.add('board-list__avatar')
  avatarWrapper.appendChild(avatar)

  const description = document.createElement('p')
  description.classList.add('board-list__description')
  description.textContent = pinData.description
  descrWrapper.appendChild(description)

  return pinWrapper
}

export function getActiveDesk() {   //finds active desk
  const desksModels = getDesksModels()
  const activeDeskId = Object.keys(desksModels)
    .find(deskId => (desksModels[deskId].active))
  if (activeDeskId) {
    return desksModels[activeDeskId]
  }
}