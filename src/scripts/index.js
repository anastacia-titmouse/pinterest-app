import { renderDesk } from "./desk";
import { cancelComplaint } from "./complaint.modal";
import { onDeskSelectorChanged, renderDescSelectorItems } from "./desk.selector";
import { 
    openModal as openCreateBoardModal,
    closeModal as closeCreateBoardModal
} from "./create.board.modal"

// init
document.addEventListener('DOMContentLoaded', () => {
    renderDescSelectorItems();
    renderDesk();

    // document.getElementById('complaint_modal_cancel').addEventListener('click', cancelComplaint);
    // document.getElementById('desk_selector').addEventListener('change', event => (onDeskSelectorChanged(event.target.value)))
    // TODO event listeners
    document.getElementById('create_desk_btn').addEventListener('click', () => {openCreateBoardModal()})
    document.getElementById('close_create_board_modal').addEventListener('click', () => {closeCreateBoardModal()})
});