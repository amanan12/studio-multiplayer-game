import ChatRoom from './ChatRoom.js';
import TicTacToe from './TicTacToe.js';
import RockPaperScissors from './RockPaperScissors.js';
import CardsAgainstHumanity from './CardsAgainstHumanity.js';

const gameData = {

  chatroom: {
    title: "Chat Room",
    authors: "Joe Tessler",
    description: "A place to chat with a group of friends",
    minUsers: 1,
    maxUsers: 10,
    component: ChatRoom,
  },

  tictactoe: {
    title: "Tic Tac Toe",
    authors: "Joe Tessler",
    description: "The classic two-player game with Xs and Os",
    minUsers: 2,
    maxUsers: 2,
    component: TicTacToe,
  },

  rockpaperscissors: {
    title: "Rock Paper Scissors",
    authors: "Devraj Mehta",
    description: "Class 2-player rock paper scissors",
    minUsers: 2,
    maxUsers: 2,
    component: RockPaperScissors,
  },
  
  cardsagainsthumanity: {
    title: "Cards Against Humanity",
    authors: "Ryan Wealleans, Abdul Manan",
    description: "Card game",
    minUsers: 2,
    maxUsers: 8,
    component: CardsAgainstHumanity,
  }


}

export default gameData;
