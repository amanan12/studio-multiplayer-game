import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import firebase from 'firebase';
import Paper from 'material-ui/Paper';

const sentences = ["Whats that sound?", "I'm sorry Professor. I couldn't complete my homework because of ______.", "What is batman guilty pleasure?", "Whats my secret power?", "What gets better with age?", "What never fails to liven up the party?", "BILLY MAYS HERE FOR ______!", "Why can't I sleep at night?", "Whats the next Happy Meal Toy?", "The meaning of life."];
const a = Math.floor(Math.random() * sentences.length);
const answers = ["Kanye West.", "President Donald Trump.", "Science.", "Religion.", "Scientology.", "Judge Judy.", "The Pope.", "The United States Airforce.", "John Cena.", "Peace on Earth", "Dead memes.", "Barney.", "New York City Transit", "The Internet.", "Elon Musk", "Crash Royale", "Dwayne 'The Rock' Johnson.", "Tim Cooks." ];

var random;
var czar;
var currentUser;

const style = {
  margin: 12,
  height: 200,
  width: 200,
  borderRadius: 10,
  textAlign: "center",
  paddingTop: 50
};

const style1 = {
  
}

export default class CardsAgainstHumanity extends Component {
    constructor(props){
        super(props);
        this.state = {
          choice: "",
          opponent: "",
          user1: "",
          user2: "",
          num: "",
          score1: 0,
          score2: 0,
          totalUsers: 0
        };
    }
    
    componentWillMount() {
      
      var id = this.props.match.params.id;
      var sessionDatabaseRef = firebase.database().ref("/session/" + id);
      
      currentUser = firebase.auth().currentUser.uid;
      
      var user = firebase.database().ref(currentUser);
      
      var valu = (sessionDatabaseRef + "/" + currentUser);
      
      var choice = firebase.database().ref("/user/" + currentUser);
      choice.update({Pick: ""});
      
      var users = firebase.database().ref("/session-metadata/" + id + "/users/");
      
      var th = this;
      
      users.on("value", function(snapshot){
        var user = snapshot.val();
        
        th.setState({
          totalUsers: user.length
        })
        
        for(var i = 0; i < user.length; i++){
          var st = firebase.database().ref("/user/" + user[i]);
          
          st.on("value", function(snapshot){
            var pick = snapshot.val();
            console.log(user[i] + ": " + pick.name);
            if(user[i] != currentUser){
              th.setState({
                user2: pick.name
              })
            } else {
              th.setState({
                user1: pick.name
              })
            }
          });
          
        }
        
      });
      
      
      
      var th = this;
      
      var a = Math.floor(Math.random() * sentences.length);
      
      var randNum = firebase.database().ref("/session-metadata/" + id);
      randNum.update({randomNum: a});
      
      randNum.on("value", function(snapshot){
        var pick = snapshot.val();
        console.log(pick.randomNum);
        th.setState({
          num: pick.randomNum
        })
      });
      
      for(var i = 0; i < answers.length; i++){
  
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = answers[randomIndex];
        
        answers[randomIndex] = answers[i];
        answers[i] = itemAtIndex;
        
      }
      
    }
    
    clicker(b){
      
      // if(currentUser === "u9NXXkdWkRNUqtnk200csqurSB93"){
      //   this.setState({
      //     choice: b
      //   });
      // } else if(currentUser === "Kw5pj7nHWBQ6DalhqF0TPXvi0s13") {
      //   this.setState({
      //     opponent: b
      //   });
      // }
      
      var th = this;
      
      var id = this.props.match.params.id;
      
      var a = firebase.database().ref("/user/" + currentUser);
      a.update({Pick: b});
      
      var getting = firebase.database().ref("/user/" + currentUser);
      
      var valPick;
      
      getting.once("value", function(snapshot){
        var pick = snapshot.val();
        console.log(currentUser + ": " + pick.Pick);
        valPick = pick.Pick;
      });
      
      var users = firebase.database().ref("/session-metadata/" + id + "/users/");
      
      console.log(users);
      
      var userID;
      
      users.once("value", function(snapshot){
        var user = snapshot.val();
        
        for(var i = 0; i < user.length; i++){
          var st = firebase.database().ref("/user/" + user[i]);
          
          st.on("value", function(snapshot){
            var pick = snapshot.val();
            console.log(user[i] + ": " + pick.name);
            if(user[i] != currentUser){
              th.setState({
                opponent: pick.Pick
              })
            } else {
              th.setState({
                choice: pick.Pick
              })
            }
          });
          
        }
        
      });
      
      //console.log(userID[0]);
      
      // for(var i = 0; i < userID.length; i++){
      //   console.log(userID[i]);
      // }
      
      
      
      // if(currentUser === currentUser){
      //   this.setState({
      //     choice: valPick
      //   });
      // } else {
      //   this.setState({
      //     opponent: valPick
      //   });
      // }
      
      // tzUTLnAYDES10D3kc9gV1YPRd983 --- amanan070
      
      // u9NXXkdWkRNUqtnk200csqurSB93 --- amanan

      // Kw5pj7nHWBQ6DalhqF0TPXvi0s13 --- ryan
    }
    
    // checker(){
      
    //   var th = this;
      
    //   var id = this.props.match.params.id;
      
    //   var users = firebase.database().ref("/session-metadata/" + id + "/users/");
      
    //   users.on("value", function(snapshot){
    //     var user = snapshot.val();
        
    //     czar = user[ Math.floor( Math.random() * user.length ) ];
        
    //     if(czar == currentUser){
    //       console.log(true);       
    //       th.setState({
    //         czar: <div className="cards"><p className="czar">You are the card Czar!</p></div>
    //       })
    //     } else {
    //       th.setState({
    //         czar: <div className="cards"><Paper className="a" onClick={ () => this.clicker( answers[4] ) } style={style} zDepth={3} >{answers[4]}</Paper>
    //             <Paper className="b" onClick={ () => this.clicker( answers[6] ) } style={style} zDepth={3} >{answers[6]}</Paper>
    //             <Paper className="c" onClick={ () => this.clicker( answers[8] ) } style={style} zDepth={3} >{answers[8]}</Paper>
    //             <Paper className="d" onClick={ () => this.clicker( answers[3] ) } style={style} zDepth={3} >{answers[3]}</Paper>
    //             <Paper className="e" onClick={ () => this.clicker( answers[7] ) } style={style} zDepth={3} >{answers[7]}</Paper></div>
    //       })
    //     }
        
    //   });
      
    // }
    
    
    confirmClick(e){
      console.log(e.target.className);
    }
    
    scorer(a){
      this.setState({
        score1: a++
      });      
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
            
            <p className="names"> {this.state.totalUsers} people are currently playing <br /><br /> {this.state.user1}: 0 <br /> {this.state.user2}: 0 </p>
            
          </div> 
          
        <div className="help">
          <center><h1>How to play</h1></center>
          <p>Each player is given 5 random white cards and 1 random question is picked. Players will then select which card they think matches the best and the czar will choose which one matches the best.</p>
          <p><strong>Goal: </strong>Be funny enough so the czar picks your card. The winner will recieve one point!</p>
        </div>
          
          <div className="card">{sentences[this.state.num]}</div>
          
        </div>
        
        
        <div>
        
                <div className="cards">
                <Paper className="a" onClick={ () => this.clicker( answers[4] ) } style={style} zDepth={3} >{answers[4]}</Paper>
                <Paper className="b" onClick={ () => this.clicker( answers[6] ) } style={style} zDepth={3} >{answers[6]}</Paper>
                <Paper className="c" onClick={ () => this.clicker( answers[8] ) } style={style} zDepth={3} >{answers[8]}</Paper>
                <Paper className="d" onClick={ () => this.clicker( answers[3] ) } style={style} zDepth={3} >{answers[3]}</Paper>
                <Paper className="e" onClick={ () => this.clicker( answers[7] ) } style={style} zDepth={3} >{answers[7]}</Paper>
                </div>
        
        </div> 
        
        
        
      </div>);
  }
}

