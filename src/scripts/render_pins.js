function renderCards (cards) {
    const parent = document.getElementById('board-1');
    console.log(cards);
    cards.map(cardData => {
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

        parent.appendChild(cardWrapper);
    });
}



window.fetch('https://63052f15697408f7edc32802.mockapi.io/api/v1/card', {method: 'get'})
.then(response => response.json())
.then(cards => renderCards(cards));