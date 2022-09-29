import { renderActiveDesk, activateDesk } from './desk';
import { sendComplaint, closeComplaintModal } from "./complaint.modal";
import { onDeskSelectorChanged, renderSelectOptions } from "./desk.selector";
import {
  openModal as openCreateBoardModal,
  closeModal as closeCreateBoardModal, onCreateDeskSubmit
} from './create.board.modal';
import { hideSelectBoardModal, selectBoardModalFormSubmitHandler } from './select.desk.modal'

// init
document.addEventListener('DOMContentLoaded', () => {
  renderSelectOptions();
  renderActiveDesk().catch(error => {console.log(error)});

  document.getElementById('complaint_modal_cancel').addEventListener('click', () => {closeComplaintModal()});
  document.getElementById('complaint_modal_form').addEventListener('submit', (event) => {sendComplaint(event)});
  document.getElementById('create_desk_btn').addEventListener('click', () => {openCreateBoardModal()})
  document.getElementById('close_create_board_modal').addEventListener('click', () => {closeCreateBoardModal()})
  document.getElementById('crete_board_modal__form').addEventListener('submit', event => {onCreateDeskSubmit(event)})
  document.getElementById('desk_selector').addEventListener('change', event => {onDeskSelectorChanged(event.target.value)})
  document.getElementById('close_select_board_modal').addEventListener('click', () => {hideSelectBoardModal()})
  document.getElementById('select_board_modal__form').addEventListener('submit', event => {selectBoardModalFormSubmitHandler(event)})
  document.getElementById('search_top').addEventListener('input', () => {renderActiveDesk()})

  //homepage anchor
  document.getElementById('logo').addEventListener('click', event => {
    event.preventDefault();

    activateDesk('main');
    renderActiveDesk();
    document.getElementById('desk_selector').value = 'main'
  })
});