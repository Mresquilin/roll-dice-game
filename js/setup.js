//create variables
let player1 = document.querySelector('#player1')
let player2 = document.querySelector('#player2')
const dieContainer = document.querySelector('.die-container')
const boardContainer = document.querySelector('.board-container')
let die = document.querySelector('.die')
const roll = document.querySelector('.roll')
const tiles = document.querySelectorAll('.tile')
const circle = document.querySelector('.winner')
const change = document.querySelector('#changeToTile')
const change2 = document.querySelector('#changeToTile2')




//create game states
let player1Position = 0
let player2Position = 0
let turn = player1 
