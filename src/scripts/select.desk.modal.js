import {getDesksModels} from './desk'

//finds pin's id to open modal for exactly this pin, which is clicked on
export const showSelectBoardModal = (pinId) => {
    const modalWrapper = document.getElementById('select_board_modal')
    modalWrapper.classList.add('visible')
    
    const modalPinIdInput = document.getElementById('select_board_modal_pin_id')
    modalPinIdInput.value = pinId

    cleanSelectOptions()
    renderSelectOptions()
}

//
export function selectBoardModalFormSubmitHandler(event) {
    event.preventDefault()

    const modalPinIdInput = document.getElementById('select_board_modal_pin_id')
    const pinId = modalPinIdInput.value

    const select = document.getElementById("select_board_modal_selector")
    const deskId = select.value

    //finds pin's id in local storage
    const deskPinsJsonData = localStorage.getItem(`desk-pins-${deskId}`)
    let deskPins;
    //if there are none, create a new set of pins
    if(!deskPinsJsonData) {
        deskPins = new Set()
    //if there are saved pins in local storage, get the set from the local storage
    } else {
        deskPins = new Set(JSON.parse(deskPinsJsonData))
    }
    //adds pin's id to local storage
    deskPins.add(pinId)
    localStorage.setItem(`desk-pins-${deskId}`, JSON.stringify(Array.from(deskPins)))
    hideSelectBoardModal()
}

//closes modal
export function hideSelectBoardModal() {
    const modalWrapper = document.getElementById('select_board_modal')
    modalWrapper.classList.remove('visible')
}

//cleans select options
export function cleanSelectOptions() {
    const select = document.getElementById("select_board_modal_selector")
    select.innerHTML = ''
}

//renders select options
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