export const showComplaintModal = () => {
    // TODO how to share added pinId? save pinId to localStorage discussed?


}

export const cancelComplaint = () => {
    // TODO just close(hide) modal
}

// Modal open + closed
let modal = document.querySelector('.complaint-modal');
let modalBtn = document.querySelector('#modalBtn');


modalBtn.onclick = function() {
    modal.style.display = "block";
}



window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }

}



// Modal confirm menu 
let confirmBtn = document.querySelector('.btn--next');
let confirmMenu = document.querySelector('.confirm-menu');


confirmBtn.onclick = function () {
    confirmMenu.style.display = 'block';
    modal.style.display = 'none';
}



// Close confirm menu
let backBtn = document.querySelector('.btn--back');
let closeRedBtn = document.querySelector('.btn--red');
let closeBtn = document.querySelector('.btn--close');


closeRedBtn.onclick = function () {
    confirmMenu.style.display = 'none';
}
closeBtn.onclick = function () {
    modal.style.display = 'none';
}

backBtn.onclick = function () {
    modal.style.display = 'block';
    confirmMenu.style.display = 'none';
}