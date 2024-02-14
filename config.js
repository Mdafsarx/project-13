const Display=document.getElementById('display');
const DisplayColor=document.getElementById('displayColor')


function submit(){

    const input=document.getElementById('input').value;

    if(isNaN(input)){
        return alert`Invalid Input`
        }
        if(input===''){
            return alert ('Enter The Number')
        }
        if(input>10){
            return alert('only 0 to 10 allowed ')
        }

    const Input=parseInt(input);
   const Number=randomNumber()

    if(Input===Number){
        Display.style.color='white'
        Display.style.textAlign='center'
        Display.style.paddingTop='8px'
        Display.innerText=`Win Answer Is: ${Number}`
        DisplayColor.classList.add('bg-slate-950');
        document.body.style.background='black'
    }
    else{

        Display.style.color='white'
        Display.style.textAlign='center'
        Display.style.paddingTop='8px'
        Display.innerText=`Lose Answer Is: ${Number}`
        DisplayColor.style.background='red'
        document.body.style.background='red'


    }
    




};

function randomNumber(){

let random=Math.round(Math.random()*10);
return random


}