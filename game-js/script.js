// --------------Dom-----------------
// --------------Player 1--------------------
let playerOne           =document.querySelector('.playerOne')
let playerOneInput      =document.querySelector('.playerOneInput')
let playerOneButton     =document.querySelector('.playerOneButton')
// --------------palyer 2------------------------
let playerTwo           =document.querySelector('.playerTwo')
let playerTwoInput      =document.querySelector('.playerTwoInput')
let playerTwoButton     =document.querySelector('.playerTwoButton')
// ------------------player 3----------------------
let playerThree         =document.querySelector('.playerThree')
let playerThreeInput    =document.querySelector('.playerThreeInput')
let playerThreeButton   =document.querySelector('.playerThreeButton')
// -------------------common dom------------------
let playerName          =document.querySelector('.playerName')
let error               =document.querySelector('.error')
let winner              =document.querySelector('.winner')
let winner_result       =document.querySelector('.winner_result')
let chanceCount         =document.querySelector('.chanceCount')
let chance              =0
let chance2             =0

let chanceCount2         =document.querySelector('.chanceCount2')

// --------------------Function part---------------------------------
chanceCount.innerHTML=chance
// ----------------------------Player one--------------------------------------
let POneClick = ()=>{
    if(playerOneInput.value ==''){
        error.innerHTML='Please Enter a Number'
    }
    else{
        if(playerOneInput.value<0 || playerOneInput.value>10){
            error.innerHTML='Make sure to keep your number between 1 and 10!'
            playerOneInput.value=''
        }
        else{
            playerOne.style='display:none'
            error.innerHTML=''
            playerTwo.style='display:block'
            playerName.innerHTML='Palyer Number-2'
        }
    }
}
// -------------------------------------------player2--------------------------------------------
let PtowClick =()=>{
    if(playerTwoInput.value==''){
        error.innerHTML='Please Enter a Number'
    }
    else{
        if(playerTwoInput.value<0 || playerTwoInput.value>10){
            error.innerHTML='Make sure to keep your number between 1 and 10!'
            playerTwoInput.value=''
        }
        else{
            if(playerOneInput.value==playerTwoInput.value){
                winner.style='display:block'
                winner_result.innerHTML='You are Win !'
                playerTwo.style='display:none'
                error.innerHTML=''
            }
            else{
               
                let chances =chance++
                let totalChances =chanceCount.innerHTML=chance
                if(totalChances==5){

                    playerTwo.style='display:none'
                    playerThree.style='display:block'
                }
            }
        }
    }
}
// -----------------------player three-------------------------
chanceCount2.innerHTML=chance2

let PthreeCilck =()=>{
    if(playerThreeInput.value==''){
        error.innerHTML='Please Enter a Number'
    }
    else{
        if(playerThreeInput.value<0 || playerThreeInput.value>10 ){
            error.innerHTML='Make sure to keep your number between 1 and 10!'
            playerThreeInput.value=''
        }
        else{
           if(playerOneInput.value==playerThreeInput.value){
            winner.style='display:block'
            winner_result.innerHTML='Hey You are Win !'
            playerThree.style='display:none'
            error.innerHTML=''
           }
           else{
            let chance =chance2++
            let totalChances2 =chanceCount2.innerHTML=chance2
            if(totalChances2==5){
                playerThree.style='display:none'
                winner.style='display:block'
                winner_result.innerHTML='player 1 is win'
            }
           }
        }
    }
}
// ---------------enter key function----------------------
let OneEnter =(item)=>{
    if(item.key=='Enter'){
        POneClick()
    }
}
let TowEnter=(item)=>{
    if(item.key=='Enter'){
        PtowClick()
    }
}
let ThreeEnter=(item)=>{
    if(item.key=='Enter'){
        PthreeCilck()
    }
}