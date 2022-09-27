export const showComplaintModal = (pinId) => {
    const complaintModalEl = document.getElementById('complaint_modal');
    complaintModalEl.style.display = 'flex';
    
    const hiddenInputEl = document.getElementById('complaint_modal_hidden_pin_id');
    hiddenInputEl.value = pinId
}

export const closeComplaintModal = () => {
    const complaintModalEl = document.getElementById('complaint_modal');
    complaintModalEl.style.display = 'none';
}


export const closeComplaintModalWindow = () => {
    const hiddenModalEl = document.getElementById('complaint_modal');
    window.onclick = function (e) {
        if (e.target == hiddenModalEl) {
            closeComplaintModal();
        }
    }
}






/**
 * Отправляем данные по нажатию кнопки "Отправить" на бекенд
 */
export const sendComplaint = async(event) => {
    event.preventDefault();
    
    // const form = document.getElementById('complaint_modal_form');
    // const formData = new FormData(form);

    // const pinId = formData.get('pin_id');
    // const complaint = formData.get('complaint_variant');

    // console.log(pinId, complaint)

    // const getPinResp = await fetch(`https://63052f15697408f7edc32802.mockapi.io/api/v1/card/${pinId}`, {
    //     method: 'get'
    // });
    // const pinData = await getPinResp.json();

    // const updatePinResp = await fetch(`https://63052f15697408f7edc32802.mockapi.io/api/v1/card/${pinId}`, {
    //     method: 'put',
    //     body: JSON.stringify({...pinData, complaint})
    // })

    closeComplaintModal()
}