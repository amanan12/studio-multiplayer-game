import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import firebase from 'firebase';
import Paper from 'material-ui/Paper';

const sentences = ["Whats that sound?", "I'm sorry Professor. I couldn't complete my homework because of ______.", "What is batman guilty pleasure?", "Whats my secret power?", "What gets better with age?", "What never fails to liven up the party?", "BILLY MAYS HERE FOR ______!", "Why can't I sleep at night?", "Whats the next Happy Meal Toy?", "The meaning of life."];
const a = Math.floor(Math.random() * sentences.length);
const answers = ["Kanye West.", "President Donald Trump.", "Science.", "Religion.", "Scientology.", "Judge Judy.", "The Pope.", "The United States Airforce.", "John Cena.", "Peace on Earth", "Dead memes.", "Barney.", "New York City Transit", "The Internet.", "Elon Musk", "Crash Royale", "Dwayne 'The Rock' Johnson.", "Tim Cooks." ];

var random;

var currentUser;

const style = {
  margin: 12,
  height: 200,
  width: 200,
  borderRadius: 10,
  textAlign: "center",
  paddingTop: 50
};

export default class CardsAgainstHumanity extends Component {
    constructor(props){
        super(props);
        this.state = {
          choice: "",
          opponent: "",
          user1: "",
          user2: ""
        };
    }
    
    componentWillMount() {
      
      var id = this.props.match.params.id;
      var sessionDatabaseRef = firebase.database().ref("/session/" + id);
      
      currentUser = firebase.auth().currentUser.uid;
      
      console.log("ID: " + currentUser);
      
      var sessionRef = firebase.database().ref(sessionDatabaseRef);
      console.log(sessionRef);
      
      var valu = (sessionDatabaseRef + "/" + currentUser);
      
    }
    
    clicker(b){
      
      if(currentUser === "u9NXXkdWkRNUqtnk200csqurSB93"){
        console.log(true);
        this.setState({
          choice: b
        });
      } else if(currentUser === "Kw5pj7nHWBQ6DalhqF0TPXvi0s13") {
        console.log(false);
        this.setState({
          opponent: b
        });
      }
      
      
      // u9NXXkdWkRNUqtnk200csqurSB93
      // Kw5pj7nHWBQ6DalhqF0TPXvi0s13
    }
    
    checker(){
      
      if(currentUser === "u9NXXkdWkRNUqtnk200csqurSB93"){
        this.setState({
          user1: 0
        });
      } else if(currentUser === "Kw5pj7nHWBQ6DalhqF0TPXvi0s13"){
        this.setState({
          user2: 1
        });
      }
      
    }
    
    
    
    render() {
      
      console.log(this.state.choice);
      console.log(this.state.opponent);
      console.log(this.state.user1);
      console.log(this.state.user2);
      
      return (<div>
        
        <div>
          
          <div className="cardShow">
            <Paper className="ab" style={style} zDepth={3}>{this.state.choice}</Paper>
            <Paper className="ba" style={style} zDepth={3}>{this.state.opponent}</Paper>
          </div> 
          
          <div className="card">{sentences[a]}</div>
          
        </div>
        
        <button className="btn" onClick={ () => this.checker() } >Confirm Selection</button>
        
        <div className="cards">
        
          <Paper className="a" onClick={ () => this.clicker( answers[4]  ) } style={style} zDepth={3} >{answers[4]}</Paper>
          <Paper className="b" onClick={ () => this.clicker( answers[6] ) } style={style} zDepth={3} >{answers[6]}</Paper>
          <Paper className="c" onClick={ () => this.clicker( answers[8] ) } style={style} zDepth={3} >{answers[8]}</Paper>
          <Paper className="d" onClick={ () => this.clicker( answers[3] ) } style={style} zDepth={3} >{answers[3]}</Paper>
          <Paper className="e" onClick={ () => this.clicker( answers[7] ) } style={style} zDepth={3} >{answers[7]}</Paper>
          
        </div> 
        
      </div>);
  }
}

