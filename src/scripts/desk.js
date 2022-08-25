import { showComplaintModal } from "./complaint.modal";
import { showSelectBoardModal } from "./select.desk.modal";

export const fetchPinsByDeskId = (deskId) => {
    // TODO return Array<Pin> (only items with pin.deskId === deskId) from local storage
    // TODO return Array<Pin> from mock.api if deskId === 0 (home "page")
    // return window.fetch('https://63052f15697408f7edc32802.mockapi.io/api/v1/card', {method: 'get'})
    // .then(response => response.json())
    // .then(cards => renderCards(cards));
}

export const renderDesk = () => {
    // TODO fetch current active desk id
    // TODO fetch cards (use fetchPinsByDeskId(deskId))
    // TODO iterate card, render it into parentElId (use renderCard())
}

export const renderCard = (card) => {
    const cardWrapper = document.createElement('div');
    
    const image = document.createElement('img');
    image.setAttribute('src', cardData.imageUrl);

    const avatar = document.createElement('img');
    avatar.setAttribute('src', cardData.authorAvatar);
    avatar.setAttribute('width', '60');
    avatar.setAttribute('height', '60');
    parent.appendChild(avatar);

    const description = document.createElement('p');
    description.innerHTML = cardData.description;
    parent.appendChild(description);
    
    cardWrapper.appendChild(image);

    // TODO pin action buttons
    // TODO use showComplaintModal(pinId)
    // TODO use showSelectBoardModal(pinId)

    parent.appendChild(cardWrapper);
}