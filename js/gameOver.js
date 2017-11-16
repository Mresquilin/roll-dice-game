function gameOver(winner){
  
     let circlePosition = circle.getBoundingClientRect()
     winner.style.top = circlePosition.top + 'px'
     winner.style.left = circlePosition.left + 'px'
    winner.classList.add('winner')
    winner.classList.add('alter-ego')
   
    
    
}

// function changeChar(winnerChange){
   
//     let change = tile.getBoundingClientRect()
//     winnerChange.style.top = change.top + 'px'
//     winnerChange.style.left = change.left + 'px'
//     winnerChange.classList.add('winnerChange')
//     winnerChange.classList.add('alter-ego2')
   
   

// }
// function changeChar2(winnerChange2){
//     let change2 = tilesPosition.getBoundingClientRect()
//     winnerChange2.style.top = change.top + '160px'
//     winnerChange2.style.left = change.left + '10px'
//     winnerChange2.classList.add('winnerChange')
//     winnerChange2.classList.add('alter-ego2')

// }