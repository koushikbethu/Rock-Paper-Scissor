let score= JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  loses : 0,
  ties : 0
}

updateScore();

function PlayGame(PlayerMove){
  const computerMove = pickcompterMove()
  let result ;

  if(PlayerMove == 'rock'){
    if(computerMove == 'rock'){
      result = 'Tie'
    }else if(computerMove == 'paper'){
      result = 'You Lose'
    }else if(computerMove == 'scissor'){
      result = 'You Won'
    }
  }

  if(PlayerMove == 'paper'){
    if(computerMove == 'rock'){
      result = 'You Won'
    }else if(computerMove == 'paper'){
      result = 'Tie'
    }else if(computerMove == 'scissor'){
      result = 'You Lose'
    }
  }

  if(PlayerMove == 'scissor'){
    if(computerMove == 'rock'){
      result = 'You Lose'
    }else if(computerMove == 'paper'){
      result = 'You Won'
    }else if(computerMove == 'scissor'){
      result = 'Tie'
    }
  }

 // console.log(" ",result)


  if(result == 'You Won'){
    score.wins +=1
  }
  if(result == 'You Lose'){
    score.loses +=1
  }
  if(result == 'Tie'){
    score.ties +=1
  }

  localStorage.setItem('score',JSON.stringify(score))

  updateScore()

  document.querySelector('.js-result')
  .innerHTML=`Result : ${result}`

  document.querySelector('.js-moves')
  .innerHTML = `Your choice is ${PlayerMove} -- Computer choice is ${computerMove}..`
}

function updateScore(){
  document.querySelector('.js-score')
  .innerHTML= `Wins : ${score.wins}, Loses : ${score.loses}, Ties : ${score.ties}`
}





function pickcompterMove(){
  const randomNumber= Math.random()
  if(randomNumber>0 && randomNumber<1/3){
    computerMove = 'rock'
  }else if(randomNumber >=1/3 && randomNumber <2/3){
    computerMove = 'paper'
  }else if (randomNumber >=2/3 && randomNumber <1){
    computerMove = 'scissor'
  }
  return computerMove
}