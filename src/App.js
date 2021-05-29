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
    const classes=[];
    // classes.push("hello");
    if(this.state.persons.length<=2){
      classes.push('red');
    } 
    if(this.state.persons.length<=1)
      classes.push('bold')
      console.log(classes);

    return (
      <div className="App">
        <h1>This is React app</h1>
        <p className={classes.join(' ')}>This is working! But I don't have a friking idea why?</p>
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
