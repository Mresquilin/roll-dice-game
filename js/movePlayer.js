function movePlayer(player, position){

    if(position > 10){
        //game over
        
        gameOver(player)
        
       
         
        
             
            //   setTimeout(function(){

            
       
    //changeChar(player)

      if(player1Position > 10) {         
        player.setAttribute('src', './img/hillary.png')
        // die.setAttribute('src', './img/winner.jpg')
         player1.style = 'top:500px; left: 50%;'
         player2.style = 'top:250px; left: 15px;'
        
        //  die = document.querySelector('#changeToTile2')
        //  die.setAttribute('src', './img/winner.jpg') 
         roll.textContent = '?' 
          
          

        //  gameOver(player1 )
    }else if(player2Position > 10){
         player.setAttribute('src', './img/trump.png')
        //  die.setAttribute('src', './img/winner.jpg')
         player1.style = 'top:160px; left: 15px;'
        player2.style = 'top:500px; left: 50%;'
        
        
        // die = document.querySelector('#changeToTile2')
        // die.setAttribute('src', './img/winner.jpg') 
         roll.textContent = '?' 
       
        
        // gameOver(player2 )
    }
       
    

        
        
           
         
         // return false
        //player.style.top = tilePosition.top ='171.8px'
        //  player.style.left = tilePosition.left + '10.8px'
        //  },2000)
       
         
         
         
            
         
        //  return false
        
         
        

          if(player1Position> 10){
            
              die.setAttribute('src', './img/dodecahedron_360.png')
             //roll.textContent = 10
             setTimeout(function(){
             alert("Player 1 is the Winner")
             player1.style = 'top:150px; left: 15px; width:70px; height: 70px;'
             player2.style = 'top:250px; left: 15px; width:70px; height: 70px;'
            //  player1.setAttribute('src', 'hillary.png')
            player1.classList.remove('winner');
            //  player2.setAttribute('src', 'Trump.png')
            player1.classList.remove('alter-ego');
             },1000)
             roll.textContent = ''
// 
//         
        player1Position = 0
        player2Position = 0
         }else if(player2Position > 10){
             
            //roll.textContent = 10
             
             die.setAttribute('src', './img/dodecahedron_360.png')
             setTimeout(function(){
             alert("Player 2 is the Winner")
             player1.style = 'top:150px; left: 15px; width:70px; height: 70px;'
             player2.style = 'top:250px; left: 15px; width:70px; height: 70px;'

             player1.setAttribute('src', 'hillary.png')
             player2.setAttribute('src', 'Trump.png')
             player2.classList.remove('winner');
             
             player2.classList.remove('alter-ego');
            },1000)
             roll.textContent = ''
    // 
    //     
        player1Position = 0
        player2Position = 0

        
         }

 
          

         
        
          
        
         
       
   
        
}else{
    let alert1 = false
    let alert2 = false
    let tilePosition = tiles[position - 1].getBoundingClientRect()
    

    player.style.top = tilePosition.top + 'px'
    
    player.style.left = tilePosition.left + 'px'

   
    
}
}



