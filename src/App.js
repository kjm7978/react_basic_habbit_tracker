
import './app.css';

import Navbar from "./components/navbar";
import {Component} from 'react';
import Habits from "./components/habits";

class App extends Component {

  state ={
    habits: [
        {id:1, name:'reading', count:0},
        {id:2, name: 'Running', count:0},
        {id:3, name: "Coding", count:0}
    ]
  }

  handleIncrement = (habit)=>{
      //const habits = [...this.state.habits]
      //const index = habits.indexOf(habit)
      //habits[index].count++
      const habits = this.state.habits.map(item=>{
        if(item.name===habit.name){
          return {...habit, count:habit.count+1}
        }
        return item;
      })
      this.setState({habits})
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item=>{
        if(item.name===habit.name){
          const count = habit.count-1;
          return {...habit, count:count<0? 0:count};
        }
        return item;
    })
    this.setState({habits})
  };

    handleDelete = (habit)=>{
        const habits = this.state.habits.filter(item=>item.name !== habit.name)
        this.setState({habits})
    };

    handleAdd = name =>{
      const habits = [...this.state.habits, {id:this.state.habits.length+1, name:name, count:0}]
      this.setState({habits})
    }

    handleReset = ()=>{
      const habits = this.state.habits.map(habit=>{
        if(habit.count!==0){
          return {...habit, count:0}
        }
        return habit;
      })
      this.setState({habits})
    }
 

  render(){
    return (
      <>
          <Navbar totalCount={this.state.habits.filter(item=>item.count>0).length}/>
          <Habits  
              habits ={this.state.habits}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onAdd={this.handleAdd}
              onReset={this.handleReset}
          />
        </>
    )
  }
}

export default App;
