let rate = null;

const buttons = document.getElementsByClassName('btn__rate');
const card = document.querySelector('div.card');
const modal = document.querySelector('div.dialog');
const submitBtn = document.querySelector('button.btn--submit')

const subText = document.querySelector('p.card--icon__sub')

for (let i = 0; i < buttons.length; i++) {
    buttons.item(i).addEventListener('click', (e) => {
        rate = i + 1;
    })
}

submitBtn.addEventListener('click', (e) => {
    if (rate > 0) {
        modal.style.display = 'grid';
        card.style.display = 'none'
        subText.innerHTML = `You selected ${rate} out of 5`
    }
})