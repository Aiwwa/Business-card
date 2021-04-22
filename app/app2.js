const DATA_KEY = 'cardData';
let cardData = {};

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(DATA_KEY);

  if (savedData) {
    cardData = JSON.parse(savedData);
    render();
  }

});


function getInputValue(selector) {
  const input = document.querySelector(selector);

  return input ? input.value : null;
}

function render() {
  const output = document.querySelector('#output');
  const container = document.createElement('div');
  container.classList.add('card');

  [cardData.name, cardData.email, cardData.phone, cardData.address, cardData.job].forEach(text => {
    const element = document.createElement('p');
    element.textContent = text;
    container.appendChild(element);
  })

  // const name = document.createElement('p');
  // const email = document.createElement('p');
  // const phone = document.createElement('p');
  // const address = document.createElement('p');
  // const job = document.createElement('p');

  // name.textContent = cardData.name;
  // email.textContent = cardData.email;
  // phone.textContent = cardData.phone;
  // address.textContent = cardData.address;
  // job.textContent = cardData.job;

  // container.appendChild(name);
  // container.appendChild(email);
  // container.appendChild(phone);
  // container.appendChild(address);
  // container.appendChild(job);

  output.innerHTML = '';
  output.appendChild(container);
}

document.querySelector('#form').addEventListener('submit', event => {
  event.preventDefault();

  cardData = {
    name: getInputValue('#name'),
    email: getInputValue('#email'),
    phone: getInputValue('#phone-number'),
    address: getInputValue('#address'),
    job: getInputValue('#job-services'),
  };

  localStorage.setItem(DATA_KEY, JSON.stringify(cardData));

  render();
});




