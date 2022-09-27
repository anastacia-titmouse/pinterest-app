import {getDesksModels, addDesksModel} from './desk'
import { v4 as uuidv4 } from 'uuid'; // export v4 as uudv4(псевдоним)


export const openModal = () => {
    const modalEl = document.getElementById("create_board_modal") //finds button that creates board modal

    if (modalEl) {
        modalEl.style.display = 'block' 
    }

}

export const closeModal = () => {
  const modalEl = document.getElementById("create_board_modal")
  modalEl.style.display = 'none'
  setModalError('') //обнуляет ошибку
  cleanForm()
}

//closes modal woindow when clicked somewhere around it
export const closeCreateModalWindow = () => {
  const hiddenModalEl = document.getElementById("create-board-modal-close");
  window.onclick = function (e) {
      if (e.target == hiddenModalEl) {
          closeModal();
      }
  }
}

//adds or removes error block
export const setModalError = (errorText) => {
  const errorBlock = document.querySelector("#crete_board_modal__form-error")

  if (!errorText) {
    errorBlock.classList.contains('visible') && errorBlock.classList.remove('visible') //works as another if block. If on the left is true -> do what's on the right
  } else {
    errorBlock.textContent = errorText
    errorBlock.classList.add('visible')
  }
}

export const cleanForm = () => {
  const input = document.querySelector("#create_board_modal__desk-title-input")
  input.value = ''
  setModalError('')
}

// form submit
export const onCreateDeskSubmit = (event) => {
  event.preventDefault()
  const form = document.getElementById("crete_board_modal__form")
  const input = form.querySelector("#create_board_modal__desk-title-input")
  const deskTitle = input.value

  if (!deskTitle) {
    setModalError('Missing desk title')
    return
  }

  //finds existing desks with the same title
  const desksModels = getDesksModels()
  const isDeskTitleAlreadyExists = Object.keys(desksModels).some(deskId => {
    return deskTitle === desksModels[deskId].title
  })

  if (isDeskTitleAlreadyExists) {
    setModalError('Desk with same title already exists')
    return
  }

  addDesksModel(uuidv4(), deskTitle, false)
  cleanForm()
  closeModal()
}