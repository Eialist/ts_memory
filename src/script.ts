//connecting variables with the corresponding class in html
const gameStartBtn = document.querySelector('.game-start-btn') as HTMLButtonElement;
const playerOneInput = document.querySelector('.playerone-name-field') as HTMLInputElement;
const playerTwoInput = document.querySelector('.playertwo-name-field') as HTMLInputElement;
const playerTurnLbl = document.querySelector('.player-turn-lbl') as HTMLLabelElement;
const playerOneScorePara = document.querySelector('.player-one-score') as HTMLParagraphElement;
const playerTwoScorePara = document.querySelector('.player-two-score')as HTMLParagraphElement;
const removeInputs = document.querySelector('.start-container') as HTMLDivElement;
const section = document.querySelector('section');
const rematchBtn = document.querySelector('.rematch-btn') as HTMLButtonElement;
const winner = document.querySelector('.game-info > h3') as HTMLHeadingElement;
const gameInfo = document.querySelector('.game-info') as HTMLDivElement;
const cardContainer = document.querySelector('.card-container');

type player = {
    name: string, 
    score: number
}