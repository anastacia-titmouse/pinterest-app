import {getDesksModels} from './desk'

export const showSelectBoardModal = (pinId) => {
    const modalWrapper = document.getElementById('select_board_modal')
    modalWrapper.classList.add('visible')
    
    const modalPinIdInput = document.getElementById('select_board_modal_pin_id')
    modalPinIdInput.value = pinId

    cleanSelectOptions()
    renderSelectOptions()
}

export function selectBoardModalFormSubmitHandler(event) {
    event.preventDefault()

    const modalPinIdInput = document.getElementById('select_board_modal_pin_id')
    const pinId = modalPinIdInput.value

    const select = document.getElementById("select_board_modal_selector")
    const deskId = select.value

    const deskPinsJsonData = localStorage.getItem(`desk-pins-${deskId}`)
    let deskPins;
    if(!deskPinsJsonData) {
        deskPins = new Set()
    } else {
        deskPins = new Set(JSON.parse(deskPinsJsonData))
    }

    deskPins.add(pinId)
    localStorage.setItem(`desk-pins-${deskId}`, JSON.stringify(Array.from(deskPins)))
    hideSelectBoardModal()
}

export function hideSelectBoardModal() {
    const modalWrapper = document.getElementById('select_board_modal')
    modalWrapper.classList.remove('visible')
}

export function cleanSelectOptions() {
    const select = document.getElementById("select_board_modal_selector")
    select.innerHTML = ''
}

export function renderSelectOptions() {
    const select = document.getElementById("select_board_modal_selector")

    const boardModels = getDesksModels()
    for (let boardId of Object.keys(boardModels)) {
        if(boardId === 'main') {
            continue
        }
        
        const boardModel = boardModels[boardId]
        const optionEl = document.createElement('option')
        optionEl.setAttribute('value', boardId)
        optionEl.innerHTML = boardModel.title
        select.appendChild(optionEl)
    }
}