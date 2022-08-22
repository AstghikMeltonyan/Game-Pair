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
    cardsArray =  ['<i class="fa-solid fa-sun"></i>. Արև', '<i class="fa-solid fa-sun"></i>. Արև', '<i class="fa-solid fa-moon"></i>. Լուսին', '<i class="fa-solid fa-cloud"></i>. Ամպ', '<i class="fa-solid fa-tree"></i>. Ծառ',  '<i class="fa-solid fa-star"></i>. Աստղ', '<i class="fa-brands fa-skyatlas"></i>. Երկինք', '<i class="fa-solid fa-water"></i>. Ծով', '<i class="fa-solid fa-person-swimming"></i>... Գետ','<i class="fa-solid fa-moon"></i>. Լուսին', '<i class="fa-solid fa-cloud"></i>. Ամպ', '<i class="fa-solid fa-tree"></i>. Ծառ', '<i class="fa-solid fa-star"></i>. Աստղ', '<i class="fa-brands fa-skyatlas"></i>. Երկինք', '<i class="fa-solid fa-water"></i>. Ծով', '<i class="fa-solid fa-person-swimming"></i>... Գետ' ];
    const cardsNewArray = [];
    cardsArray = cardsArray.sort(() => Math.random() - .5)
  
    for(let number of cardsArray) {
      cardsNewArray.push(new Card(container, number, flipCard))
    }
  })

  transportBtn.addEventListener('click', ()=> {
    container.innerHTML = ''
    cardsArray =  ['|<i class="fa-solid fa-plane-up"></i>| Օդանավ', '|<i class="fa-solid fa-plane-up"></i>| Օդանավ', '-<i class="fa-solid fa-train-subway"></i>- Գնացք', '-<i class="fa-solid fa-train-subway"></i>- Գնացք', '<i class="fa-solid fa-car-side"></i> Ավտոմեքենա', '<i class="fa-solid fa-car-side"></i> Ավտոմեքենա', '<i class="fa-solid fa-bus"></i>~ Ավտոբուս', '<i class="fa-solid fa-bus"></i>~ Ավտոբուս', '<i class="fa-solid fa-bicycle"></i>... Հեծանիվ','<i class="fa-solid fa-bicycle"></i>... Հեծանիվ', '~<i class="fa-solid fa-ship"></i>~ Նավ', '~<i class="fa-solid fa-ship"></i>~ Նավ', '<i class="fa-solid fa-truck"></i>~ Բեռնատար', '<i class="fa-solid fa-truck"></i>~ Բեռնատար', '<i class="fa-solid fa-helicopter"></i>~ Ինքնաթիռ', '<i class="fa-solid fa-helicopter"></i>~ Ինքնաթիռ' ];
    const cardsNewArray = [];
    cardsArray = cardsArray.sort(() => Math.random() - .5)
  
    for(let number of cardsArray) {
      cardsNewArray.push(new Card(container, number, flipCard))
    }
  });

  animalsBtn.addEventListener('click', ()=> {
    container.innerHTML = ''
    cardsArray =  ['<i class="fa-solid fa-dog"></i>. Շուն', '<i class="fa-solid fa-dog"></i>. Շուն', '<i class="fa-solid fa-cat"></i>. Կատու', '<i class="fa-solid fa-cat"></i>. Կատու', '<i class="fa-solid fa-dragon"></i>. Վիշապ', '<i class="fa-solid fa-dragon"></i>. Վիշապ','<i class="fa-solid fa-horse"></i>. Ձի', '<i class="fa-solid fa-horse"></i>. Ձի', '<i class="fa-solid fa-fish-fins"></i>. Ձուկ','<i class="fa-solid fa-fish-fins"></i>. Ձուկ', '<i class="fa-solid fa-dove"></i>. Աղավնի', '<i class="fa-solid fa-dove"></i>. Աղավնի', '<i class="fa-solid fa-frog"></i>. Գորտ', '<i class="fa-solid fa-frog"></i>. Գորտ', '<i class="fa-solid fa-spider"></i>. Սարդ', '<i class="fa-solid fa-spider"></i>. Սարդ' ];
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

