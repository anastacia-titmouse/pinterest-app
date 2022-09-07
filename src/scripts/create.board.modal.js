export const openModal = () => {
    const modalEl = document.getElementById("create_board_modal")

    if (modalEl) {
        modalEl.style.display = 'block'
    }
}

export const closeModal = () => {
    const modalEl = document.getElementById("create_board_modal")

    if (modalEl) {
        modalEl.style.display = 'none'
    }
}

export const onCreateDeskSubmin = () => {
    const form = document.getElementById("crete_board_modal_form")

    //TODO getDataFrom input
    //TODO generate id for desk (uuid for instance)
    //TODO save desk to localstorage
    //TODO clean form
    //TODO prevent default form.onSubmit action
    //TODO close modal
}