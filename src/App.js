import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state={
    persons:[
      {
        name:"Neel",
        age:20
      },
      {
        name:"Demo",
        age:15
      },
      {
        name:"Test",
        age:20
      }
    ],
    isVisible:true
  }

  switchNameHandler=(Name)=>{
    // console.log("Was Called");
    this.setState({
      persons:[
        {name:Name,age:12},
        {name:"Demo",age:14},
        {name:"Mungra",age:13},
      ]
    })
  }

  nameChangeHandler=(event)=>{
    this.setState({
      persons:[
        {name:event.target.value,age:12},
        {name:"Demo",age:14},
        {name:"Mungra",age:13},
      ]
    })
  }

  togglePersonHandler=(event)=>{
    console.log(event.target);
    const doesShow=this.state.isVisible;
    this.setState({isVisible:!doesShow});
  }
  render() {
    const style={
      backgroundColor:'#ff406f',
      font:'inherit',
      border:'1px solid teal',
      padding:'16px',
      cursor:'pointer',
      color:'#fff'
    };

  

    return (
      <div className="App">
        <h1>This is React app</h1>
        <button 
        onClick={this.togglePersonHandler}
        style={style}>Give Me Name!!</button>
        {
          this.state.persons.map(person => {
            return <Person 
                    name={person.name}
                    roll={person.roll} />
          })    
        }
      </div>
      
    );
  }
}

export default App;
