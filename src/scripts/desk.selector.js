import { renderDesk } from "./desk";

export const fetchDesksFromLocalStorage = () => {
    //TODO fetch desks from localstorage. Return signature: Array<{id: number, name: string}> + hardcoded main (for home "page")
}

export const renderDescSelectorItems = (selectorElId) => {
    // TODO find parent(SELECT elem) by id
    // TODO iterate desks arr, render elem (OPTION) into parent, set OPTION attributes (selected for current active desk, value: desk.id, innerHTML: desk.name)
};

export const onDeskSelectorChanged = (deskId) => {
    console.log(deskId);
    //TODO save deskId into localStorage as currentActiveDesk
    //TODO invoke renderDesk()
}