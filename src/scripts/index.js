import { renderActiveDesk } from './desk';
import { cancelComplaint } from "./complaint.modal";
import { onDeskSelectorChanged } from "./desk.selector";
import {
  openModal as openCreateBoardModal,
  closeModal as closeCreateBoardModal, onCreateDeskSubmit,
} from './create.board.modal';

// init
document.addEventListener('DOMContentLoaded', () => {
  renderActiveDesk().catch(error => {console.log(error)})

  // document.getElementById('complaint_modal_cancel').addEventListener('click', cancelComplaint);
  // document.getElementById('desk_selector').addEventListener('change', event => (onDeskSelectorChanged(event.target.value)))
  // TODO event listeners
  document.getElementById('create_desk_btn').addEventListener('click', () => {openCreateBoardModal()})
  document.getElementById('close_create_board_modal').addEventListener('click', () => {closeCreateBoardModal()})
  document.getElementById('crete_board_modal_form').addEventListener('submit', event => {onCreateDeskSubmit(event)})
  document.getElementById('desk_selector').addEventListener('change', event => {onDeskSelectorChanged(event.target.value)})
});