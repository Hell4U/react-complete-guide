import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state={
    persons:[
      {
        id:"1",
        name:"Neel",
        age:20
      },
      {
        id:"2",
        name:"Demo",
        age:15
      },
      {
        id:"3",
        name:"Test",
        age:20
      }
    ],
    isVisible:true
  }

  nameChangeHandler=(event,idx)=>{
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===idx;
    })
    
    const person={
      ...this.state.persons[personIndex]
    };

    person.name=event.target.value;

    const persons=[...this.state.persons];
    persons[personIndex]=person;

    this.setState({
      persons:persons
    })
  }

  deletePersonHandler=(idx)=>{
      // console.log("Hi I am being Deleted and My id is "+idx)
      const persons=[...this.state.persons];
      persons.splice(idx,1);
      this.setState({persons:persons})
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
          this.state.persons.map( (person,idx) => {
            return <Person 
                    name={person.name}
                    roll={person.roll} 
                    click={this.deletePersonHandler.bind(this,idx)}
                    key={person.id}
                    change={(event)=>this.nameChangeHandler(event,person.id)}/>
          })    
        }
      </div>
      
    );
  }
}

export default App;
