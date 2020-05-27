//You are writing the game rock-paper-scissors.
/* 
RULES:
Scissors defeat Paper
Paper defeats Rock
Rock defeats Scissors 
*/

class RPS {
  //YOUR CODE HERE
  constructor(player1, player2){
    this.players = [player1, player2]
    this.winners = {}
  }
  play(move1, move2){
     const options = {
       Rock:'Paper',
       Paper:'Scissors',
       Scissors:'Rock'
     } 
     if (move1 === move2) return
     let winner = options[move1] === move2 ? move2:move1;
     let loser = winner === move1 ? move2: move1;
     let winningPlayer = winner === move1 ? this.players[0]:this.players[1]
     if(!this.winners[winningPlayer]) this.winners[winningPlayer]=1
     else this.winners[winningPlayer]++
     return `${winner} defeats ${loser}, ${winningPlayer} wins this round.`
  }
  winner(){
    let score = 0
    let winner;
    for (let key in this.winners){
      if (this.winners[key] > score) {
        score = this.winners[key]
        winner = key
      }
    }
    return `The victor is ${winner} with ${score} points.`
  }
}

module.exports = { RPS };
