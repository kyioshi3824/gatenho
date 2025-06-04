const pet = document.querySelector("#pet");
const display = document.querySelector("#pontos");

const alimentarBtn = document.querySelector("#alimentar");
const brincarBtn = document.querySelector("#alimentar");
const dormirBtn = document.querySelector("#alimentar");

const historico = document.querySelector('#historico')

function addHistorico(texto){
    const li = document.createElement('li');
    li.textContent = texto;
    historico.appendChild(li)
}

let pontos = 0;


alimentarBtn.addEventListener('click', function(){
    pet.innerText = '👌';
    pontos +=1;
    display.textContent = pontos;
    addHistorico('comeu!');
});


brincarBtn.addEventListener('click', function(){
    pet.innerText = '😜';
    pontos +=1;
    display.textContent = pontos;
    addHistorico('comeu!');
});


dormirBtn.addEventListener('click', function(){
    pet.innerText = '💤';
    pontos +=1;
    display.textContent = pontos;
    addHistorico('comeu!');
});
