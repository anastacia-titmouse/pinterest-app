import { renderDesk } from "./desk";
import { cancelComplaint } from "./complaint.modal";
import { onDeskSelectorChanged, renderDescSelectorItems } from "./desk.selector";

// init
document.addEventListener('DOMContentLoaded', () => {
    renderDescSelectorItems();
    renderDesk();

    document.getElementById('complaint_modal_cancel').addEventListener('click', cancelComplaint);
    document.getElementById('desk_selector').addEventListener('change', event => (onDeskSelectorChanged(event.target.value)))
    // TODO event listeners
});