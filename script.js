const container = document.getElementById('game');
class Card {
  openCard = false;
  successCard = false;

  constructor(container, number, action) {
    this.card = document.createElement('div');
    this.card.classList.add('card');
    this.number = number;

    this.card.addEventListener('click', () => {
    this.card.innerHTML = number;
      if(this.open === false && this.success === false) {
        this.open = true;
        action(this)
      }
    })
    container.append(this.card);
  }

  set open(value) {
    this.openCard = value;
    value ? this.card.classList.add('open') : this.card.classList.remove('open');
  }

  get open() {
    return this.openCard
  }

  set success(value) {
    this.successCard = value;
    value ? this.card.classList.add('success') : this.card.classList.remove('success');
  }

  get success() {
    return this.successCard
  }
}

function newGame(container) {
  let cardsArray ;
  const natureBtn = document.createElement('button');
  const transportBtn = document.createElement('button');
  const animalsBtn = document.createElement('button');

  natureBtn.classList.add('btn');
  transportBtn.classList.add('btn');
  animalsBtn.classList.add('btn');

  animalsBtn.textContent = 'Կենդանիներ';
  transportBtn.textContent = 'Տրանսպորտ';
  natureBtn.textContent = 'Բնություն';

  document.querySelector('.container').append(animalsBtn);
  document.querySelector('.container').append(transportBtn);
  document.querySelector('.container').append(natureBtn);


  natureBtn.addEventListener('click',() => {
    container.innerHTML = ''
    cardsArray =  ['Արև', 'Արև', '<Լուսին', 'Ամպ', 'Ծառ',  'Աստղ', 'Երկինք', 'Ծով', 'Գետ','Լուսին', 'Ամպ', 'Ծառ', 'Աստղ', 'Երկինք', 'Ծով', 'Գետ' ];
    const cardsNewArray = [];
    cardsArray = cardsArray.sort(() => Math.random() - .5)
  
    for(let number of cardsArray) {
      cardsNewArray.push(new Card(container, number, flipCard))
    }
  })

  transportBtn.addEventListener('click', ()=> {
    container.innerHTML = ''
    cardsArray =  ['Օդանավ', 'Օդանավ', 'Գնացք', 'Գնացք', 'Ավտոմեքենա', 'Ավտոմեքենա', 'Ավտոբուս', 'Ավտոբուս', 'Հեծանիվ','Հեծանիվ', 'Նավ', 'Նավ', 'Բեռնատար', 'Բեռնատար', 'Ինքնաթիռ', 'Ինքնաթիռ'];
    const cardsNewArray = [];
    cardsArray = cardsArray.sort(() => Math.random() - .5)
  
    for(let number of cardsArray) {
      cardsNewArray.push(new Card(container, number, flipCard))
    }
  });

  animalsBtn.addEventListener('click', ()=> {
    container.innerHTML = ''
    cardsArray =  ['Շուն', 'Շուն', 'Կատու', 'Կատու', 'Վիշապ', 'Վիշապ','Ձի', 'Ձի', 'Ձուկ','Ձուկ', 'Աղավնի', 'Աղավնի', 'Գորտ', 'Գորտ', 'Սարդ', 'Սարդ'];
    const cardsNewArray = [];
    cardsArray = cardsArray.sort(() => Math.random() - .5)
  
    for(let number of cardsArray) {
      cardsNewArray.push(new Card(container, number, flipCard))
    }
  });

  let  firstCard = null,
    secondCard = null;
  
  function flipCard(card){
    if(firstCard !== null && secondCard !== null) {
      if(firstCard.number !== secondCard.number) {
        firstCard.open = false;
        secondCard.open = false;
        firstCard = null;
        secondCard = null;
      }
    }

    if(firstCard === null) {
      firstCard = card
    }else{
      if(secondCard === null){
        secondCard = card
      }
    }

    if(firstCard !== null && secondCard !== null) {
      if(firstCard.number === secondCard.number) {
        firstCard.success = true;
        secondCard.success = true;
        firstCard = null;
        secondCard = null;
      }
    }
  }
}

newGame(container,8)

