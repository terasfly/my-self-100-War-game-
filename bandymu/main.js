const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')
const image = document.querySelector('.image')
const check = document.querySelector('.check')
const score1 = document.querySelector('.score1')
const score2 = document.querySelector('.score2')
const finalScore1 = document.querySelector('.finalScore1')
const finalScore2 = document.querySelector('.finalScore2')




// const zaidimasBandymas = {
//         playeR1: {
//             cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10"]
//         },
//         playeR2: {
//             cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10"]
//         }
//     }
// function randomCards() {
//     let randomCards = ['cards/2.jpg', 'cards/3.jpg', 'cards/4.jpg', 'cards/5.jpg']
//     for (let i = 0; i < randomCards.length; i++) {

//         let randomCards1 = Math.floor(Math.random() * 3) + 1;



//     }
// }

let player1Score = '';
let player2Score = '';

let finalScore11 = 0;
let finalScore22 = 0;


let changeCard = ['cards/2.jpg', 'cards/3.jpg', 'cards/4.jpg', 'cards/5.jpg', 'cards/6.jpg', 'cards/7.jpg'];


player1.addEventListener('click', () => {

    let random = Math.floor(Math.random() * 9) + 2;
    player1Score = random;
    document.getElementById('image').src = `cards/${random}.jpg`
        // alert('dd')
        // showCard(random)
    let img = document.createElement('img')
    img.src = `cards/${random}.jpg`
    document.querySelector('.p1').appendChild(img)
    img.width = 90;
    img.height = 90;
    randomCards()




})

player2.addEventListener('click', () => {

    // alert('dd')
    let random2 = Math.floor(Math.random() * 9) + 2;
    player2Score = random2;
    document.getElementById('imagePlayer2').src = `cards/${random2}.jpg`
        // player2OpenCards()
    let img1 = document.createElement('img')
    img1.src = `cards/${random2}.jpg`
    document.querySelector('.p2').appendChild(img1)
    img1.width = 90;
    img1.height = 90;



})

function whoWins() {

    if (player1Score > player2Score) {

        score1.textContent = 'WIN'
        score1.style.color = 'yellow'
        score2.textContent = 'LOST'
        score2.style.color = 'red'
        finalScore11++;
        finalScore1.textContent = finalScore11;
        if (finalScore11 === 3) {
            score1.textContent = 'WINNERRRRRRRRRRRRRRRRRRRR'
            score2.textContent = 'LOOSERRRRRRRRR'
        }

    } else if (player2Score > player1Score) {
        score2.textContent = 'WIN'
        score2.style.color = 'yellow'
        score1.textContent = 'LOST'
        score1.style.color = 'red'
        finalScore22++;
        finalScore2.textContent = finalScore22;
        if (finalScore22 === 3) {
            score2.textContent = 'WINNERRRRRRRRRRRRRRRRRRRR'
            score1.textContent = 'LOOSERRRRRRRRR'
        }
    } else {
        score2.textContent = '===='
        score2.style.color = '#fff684'
        score1.textContent = '===='
        score1.style.color = '#fff684'

    }
}
check.addEventListener('click', () => {
    whoWins()
})