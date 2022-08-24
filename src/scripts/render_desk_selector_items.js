//TODO fetch real data from local storage
const desks = [
    {
        id: 1,
        name: 'desk1'
    },
    {
        id: 2,
        name: 'desk2'
    },
    {
        id: 3,
        name: 'desk3'
    }
];

const renderDeskSelectorOptions = () => {
    const deskSelector = document.getElementById('desk_selector');
    
    desks.map(desk => {
        const option = document.createElement('OPTION');
        option.value = desk.id;
        option.innerHTML = desk.name; // <Option>{desk.name}</Option>

        deskSelector.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderDeskSelectorOptions();
});