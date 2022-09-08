import {getDesksModels, addDesksModel} from './desk'
import { v4 as uuidv4 } from 'uuid';

export const openModal = () => {
    const modalEl = document.getElementById("create_board_modal")

    if (modalEl) {
        modalEl.style.display = 'block'
    }
}

export const closeModal = () => {
  const modalEl = document.getElementById("create_board_modal")
  modalEl.style.display = 'none'
  setModalError('')
}

export const setModalError = (errorText) => {
  const errorBlock = document.querySelector("#crete_board_modal_form_error")

  if (!errorText) {
    errorBlock.classList.contains('visible') && errorBlock.classList.remove('visible')
  } else {
    errorBlock.textContent = errorText
    errorBlock.classList.add('visible')
  }
}

export const cleanForm = () => {
  const input = document.querySelector("#create_board_modal_desk_title_input")
  input.value = ''
  setModalError('')
}

export const onCreateDeskSubmit = (event) => {
  event.preventDefault()
  const form = document.getElementById("crete_board_modal_form")
  const input = form.querySelector("#create_board_modal_desk_title_input")
  const deskTitle = input.value

  if (!deskTitle) {
    setModalError('Missing desk title')
    return
  }

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