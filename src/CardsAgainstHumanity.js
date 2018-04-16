import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import firebase from 'firebase';
import Paper from 'material-ui/Paper';

const sentences = ["1. ________.", "2. ________?", "3. ________?", "4. ________?", "5. ________?", "6. ________?", "7. ________?", "8. ________?", "9. ________?", "10. ________?"];
const a = Math.floor(Math.random() * sentences.length);



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
          label: "",
          choice: "",
          opponent: ""
        };
    }
    
    componentWillMount() {
      var id = this.props.match.params.id;
      var sessionDatabaseRef = firebase.database().ref("/session/" + id);
      var currentUser = firebase.auth().currentUser.uid;
      console.log("ID: " + currentUser);
      var a = this.state.label;
      
      const answers = ["a", "b", "c", "d", "e"];
      const som = Math.floor(Math.random() * answers.length);
      
    }
    
    answer(){
      const answers = ["a", "b", "c", "d", "e"];
      const som = Math.floor(Math.random() * answers.length);
      return answers[som];
    }
    
    clicker(b){
      
      this.setState({
        label: b
      });
      
      console.log(b);
      
      // var userChoice = {};
      // userChoice[firebase.auth().currentUser.uid] = b;
      // var sessionId = this.props.match.params.id;
      // var sessionDatabaseRef = firebase.database().ref("/session/" + sessionId);
      // sessionDatabaseRef.set(userChoice, (error) => {
      //   if (error) {
      //     console.error("Error storing session metadata", error);
      //   }
      // });
      // this.setState({choice: b});
      
      // console.log(this.state.choice);
      
    }
    
    render() {
      return (<div>
        
        <div>
          
          <div className="cardShow">
            <h1>{this.state.label}</h1>
          </div> 
          
          <div className="card">{sentences[a] + ", " + (a+1)}</div>
          
        </div>
        
        <div className="cards">
        
          <Paper className="a" onClick={ () => this.clicker("First Card") } style={style} zDepth={3} >{this.answer()}</Paper>
          <Paper className="b" onClick={ () => this.clicker("Second Card") } style={style} zDepth={3} >{this.answer()}</Paper>
          <Paper className="c" onClick={ () => this.clicker("Third Card") } style={style} zDepth={3} >{this.answer()}</Paper>
          <Paper className="d" onClick={ () => this.clicker("Forth Card") } style={style} zDepth={3} >{this.answer()}</Paper>
          <Paper className="e" onClick={ () => this.clicker("Fifth Card") } style={style} zDepth={3} >{this.answer()}</Paper>
          
        </div> 
        
      </div>);
  }
}

