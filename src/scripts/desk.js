import { rerenderSelect as rerenderDesksSelector } from './desk.selector';
import {showSelectBoardModal} from './select.desk.modal'

export function activateDesk(deskId) {
  const desksModels = getDesksModels()
  for (let _deskId of Object.keys(desksModels)) {
    desksModels[_deskId].active = deskId === _deskId;
  }
  localStorage.setItem('desks', JSON.stringify(desksModels))
}

export function addDesksModel(deskId, deskTitle, active) {
  const desksModels= getDesksModels()

  desksModels[deskId] = {
    id: deskId,
    title: deskTitle,
    active
  }

  localStorage.setItem('desks', JSON.stringify(desksModels))

  rerenderDesksSelector()

  return desksModels
}

export function getDesksModels() {
  const desksJson = localStorage.getItem('desks')
  if(!desksJson) {
    return {}
  } else {
    return JSON.parse(desksJson)
  }
}

export async function fetchPinsByDeskId(deskId) {
  let pinsData = [];

  if (deskId === 'main') {
    const response = await fetch('https://63052f15697408f7edc32802.mockapi.io/api/v1/card', {method: 'get'})
    pinsData = await response.json()
  } else {
    const pinIdsJsonData = localStorage.getItem(`desk-pins-${deskId}`)

    if (pinIdsJsonData) {
      pinIds = JSON.parse(pinIdsJsonData)

      const promises = pinIds.map(pinId => {
        return fetch(`https://63052f15697408f7edc32802.mockapi.io/api/v1/card/${pinId}`, {method: 'get'})
          .then(response => {
            return response.json()
          })
      })

      pinsData = await Promise.all(promises)
    }
  }

  const searchInput = document.getElementById('search_top')
  const keyword = searchInput.value

  if(keyword) {
    return pinsData.filter(pinData => {
      return pinData.hashtag.startsWith(keyword)
    })
  } else {
    return pinsData
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
  const pinsData = await fetchPinsByDeskId(activeDesk.id)
  pinsData.map(pinData => {
    const pinElement = createPinElement(pinData)
    deskElement.appendChild(pinElement)
  })
}

export function createPinElement(pinData) {
  const pinWrapper = document.createElement('div');
  pinWrapper.classList.add('board-list__pin--wrap')

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

  const addBtn = document.createElement('button')
  addBtn.classList.add('pin-btn', 'add-pin')
  addBtn.textContent = 'Добавить'
  pinActions.appendChild(addBtn)
  addBtn.onclick = () => {
    showSelectBoardModal(pinData.id)
  }

  const complaintBtn = document.createElement('button')
  complaintBtn.classList.add('pin-btn', 'complaint-pin')
  complaintBtn.textContent = 'Пожаловаться'
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

export function getActiveDesk() {
  const desksModels = getDesksModels()
  const activeDeskId = Object.keys(desksModels)
    .find(deskId => (desksModels[deskId].active))
  if (activeDeskId) {
    return desksModels[activeDeskId]
  }
}