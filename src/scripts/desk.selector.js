import { activateDesk, getDesksModels, renderActiveDesk } from './desk';

export const cleanSelect = () => {
  const select = document.getElementById("desk_selector")
  select.innerHTML = '';
}

export const renderSelectOptions = () => {
  const select = document.getElementById("desk_selector")

  const boardModels = getDesksModels()
  for (let boardId of Object.keys(boardModels)) {
    const boardModel = boardModels[boardId]

    const optionEl = document.createElement('option')
    optionEl.setAttribute('value', boardId)
    optionEl.innerHTML = boardModel.title
    if (boardModel.active) {
      optionEl.setAttribute('selected', 'selected')
    }

    select.appendChild(optionEl)
  }
}

export const rerenderSelect = () => {
  cleanSelect()
  renderSelectOptions()
}

export function onDeskSelectorChanged(deskId) {
  activateDesk(deskId)
  renderActiveDesk().catch(error => {console.log(error)})
}

renderSelectOptions()