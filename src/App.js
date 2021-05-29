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

  nameChangeHandler=(event)=>{
    this.setState({
      persons:[
        {name:event.target.value,age:12},
        {name:"Demo",age:14},
        {name:"Mungra",age:13},
      ]
    })
  }

  deletePersonHandler=(idx)=>{
      // console.log("Hi I am being Deleted and My id is "+idx)
      const persons=this.state.persons;
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
      backgroundColor:'green',
      font:'inherit',
      border:'1px solid teal',
      padding:'16px',
      cursor:'pointer',
      color:'#fff'
    };

    let person=null;

    if(this.state.isVisible){
      person=this.state.persons.map( (person,idx) => {
        return <Person 
                name={person.name}
                roll={person.roll}
                key={idx} 
                change={this.nameChangeHandler}
                click={(event)=>this.deletePersonHandler(idx)}/>
      })
    } else{
      style.backgroundColor='red';
    }

    return (
      <div className="App">
        <h1>This is React app</h1>
        <button 
        onClick={this.togglePersonHandler}
        style={style}>Give Me Name!!</button>
        {
          person    
        }
      </div>
      
    );
  }
}

export default App;
