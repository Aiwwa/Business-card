const body = document.querySelector('body')

const inputName = document.querySelector('.name input');
const inputEmail = document.querySelector('.email input');
const inputPhone = document.querySelector('.phone input');
const inputAddress = document.querySelector('.address input');
const inputJob = document.querySelector('.job-services input');

const generateNewCardBtn = document.querySelector('.create-new-card')

generateNewCardBtn.addEventListener('click', () => {
  generateNewCardElement()
})

// Create new card element
function generateNewCardElement() {

  const newCardWrap = document.createElement('div');
  newCardWrap.classList.add('new-card-wrap');
  body.appendChild(newCardWrap);

  //info-1 div
  const info1 = document.createElement('div');
  info1.classList.add('info-1');
  newCardWrap.appendChild(info1);

  const img = document.createElement('img');
  img.classList.add('img');
  info1.appendChild(img);

  const icon = document.createElement('i');
  icon.classList.add('img-icon'); //Cant add fas fa-user-plus fa-2x 
  img.appendChild(icon);

  const personeName = document.createElement('p');
  personeName.classList.add('new-card-persone-name');
  // ----------------------!
  info1.innerText = inputName.value;
  // ----------------------!
  info1.appendChild(personeName)

  const jobTitle = document.createElement('p');
  jobTitle.classList.add('info-1-title');
  // ----------------------!
  jobTitle.innerText = inputJob.value;
  // ----------------------!
  info1.appendChild(jobTitle)

  //info-2 div
  const info2 = document.createElement('div');
  info2.classList.add('info-2');
  newCardWrap.appendChild(info2);

  const info = document.createElement('div');
  info.classList.add('info');
  info2.appendChild(info);

  // Same name div 1 div
  const info2ContentDiv1 = document.createElement('div');
  info2ContentDiv1.classList.add('info-2-content');
  info.appendChild(info2ContentDiv1);

  const iconDiv1 = document.createElement('div');
  iconDiv1.classList.add('pa-1');
  info2ContentDiv1.appendChild(iconDiv1);

  const iconDiv1Icon = document.createElement('i');
  iconDiv1Icon.classList.add('new-card-icons'); // Cant add fontawesome
  iconDiv1.appendChild(iconDiv1Icon);

  // Named icon but inside p
  const iconDiv2 = document.createElement('div');
  iconDiv2.classList.add('pa-1');
  info2ContentDiv1.appendChild(iconDiv2);

  const iconDiv2P = document.createElement('p');
  iconDiv2P.classList.add('new-card-email', 'ma-1');
  // ----------------------!
  iconDiv2P.innerText = inputEmail.value;
  // ----------------------!
  iconDiv2.appendChild(iconDiv2P)


  // Same name div 2 div
  const info2ContentDiv2 = document.createElement('div');
  info2ContentDiv2.classList.add('info-2-content');
  info.appendChild(info2ContentDiv2);

  const info2Div1 = document.createElement('div');
  info2Div1.classList.add('pa-1');
  info2ContentDiv2.appendChild(info2Div1);

  const info2Div1Icon = document.createElement('i');
  info2Div1Icon.classList.add('new-card-icons'); //Fontawesome 
  info2Div1.appendChild(info2Div1Icon);

  const info2Div2 = document.createElement('div');
  info2Div2.classList.add('pa-1');
  info2ContentDiv2.appendChild(info2Div2);

  const info2Div2Paragraph = document.createElement('p');
  info2Div2Paragraph.classList.add('new-card-phone', 'ma-1');
  // ----------------------!
  info2Div2Paragraph.innerText = inputPhone.value;
  // ----------------------!
  info2Div2.appendChild(info2Div2Paragraph);


  // Same name div 3 div
  const info3ContentDiv3 = document.createElement('div');
  info3ContentDiv3.classList.add('info-2-content');
  info.appendChild(info3ContentDiv3);

  const info3Div1 = document.createElement('div');
  info3Div1.classList.add('pa-1');
  info3ContentDiv3.appendChild(info3Div1);

  const info3Div1Icon = document.createElement('p');
  info3Div1Icon.classList.add('new-card-icons'); //Fontawesome
  info3Div1.appendChild(info3Div1Icon);

  const info3Div2 = document.createElement('div');
  info3Div2.classList.add('pa-1');
  info3ContentDiv3.appendChild(info3Div2);

  const info3Div2Paragraph = document.createElement('p');
  info3Div2Paragraph.classList.add('new-card-address', 'ma-1');
  // ----------------------!
  info3Div2Paragraph.innerText = inputAddress.value;
  // ----------------------!
  info3Div2.appendChild(info3Div2Paragraph);

}


