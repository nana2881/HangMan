const app = function(){
// variables
const gameValues = {cur:'',solution:''};
const domEle = {};
const myWords = ['javascript','html','css'];


function init(){
    
    // select the DOM objects
    domEle.gameArea = document.querySelector('.gameArea');
    domEle.score = createElements('div',domEle.gameArea,'score');
    domEle.btn = createElements('button',domEle.gameArea,'Start Game');
    domEle.hiddenWord = createElements('div',domEle.gameArea,'secret words');
    domEle.letters = createElements('div',domEle.gameArea,'letters');


    domEle.score.style.display ='none';
    domEle.letters.style.display = 'none';
    domEle.hiddenWord.textContent = 'Click the button to start the hangman';
    console.log(domEle);
    domEle.btn.addEventListener('click',startGame);

}


function startGame(){
    domEle.btn.style.display = 'none';
    if(myWords.length > 0 ){
        myWords.sort(()=>{
            return.5 - Math.random();
        })
        
        gameValues.cur = myWords.shift();
        gameValues.solution = gameValues.cur.split('');
        domEle.score.style.display = 'block';
        domEle.letters.style.display = 'block';
        domEle.hiddenWord.textContent = gameValues.cur;
        buildBoard();
    }
    // next step to game
}


function buildBoard(){
    // gameValues.cur
    console.log(gameValues);
    domEle.letters.innerHtml = '';
    for(let i = 0;i<26;i++){
        let temp = String.fromCharCode(65 + i);
        let div = createElements('div',domEle.letters, temp);
        div.classList.add('box');
    }
}

    function createElements(val,parentEle,output){
        let temp = document.createElement(val);
        parentEle.append(temp);
        temp.textContent = output;
        return temp;
    }
    return {
        init:init
    }

}();
