import { activateDesk, getDesksModels, renderActiveDesk } from './desk';

// cleans inner html
export const cleanSelect = () => {
  const select = document.getElementById("desk_selector")
  select.innerHTML = '';
}

export const renderSelectOptions = () => {
  const select = document.getElementById("desk_selector")

  //получаем все доски, 
  const boardModels = getDesksModels()
  for (let boardId of Object.keys(boardModels)) {
    //  {
    //   "id": "main",
    //   "title": "Homepage",
    //   "active": true
    // },
    const boardModel = boardModels[boardId]

//создаем элемент селектора досок с названием доски
    const optionEl = document.createElement('option')
    optionEl.setAttribute('value', boardId)
    optionEl.innerHTML = boardModel.title
    if (boardModel.active) {
      select.value = boardModel.id
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

