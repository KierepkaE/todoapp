import React, { Component } from "react";
import AddTask from "./AddTask";
// import Task from "./Task";
import TaskList from "./TaskList";

import "./App.css";

class App extends Component {
  counter = 4;

  state = {
    tasks: [
      {
        id: 0,
        text: "Clean my flat",
        date: "2019-05-12",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "Gain 5kg",
        date: "2019-03-05",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "Drink 2L of water daily",
        date: "2019-02-12",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "Buy a new car",
        date: "2019-12-31",
        important: true,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTask = id => {
    const tasks = [...this.state.tasks];

    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);

    this.setState({
      tasks
    });
  };

  changeTaskStatus = id => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    };
    this.counter++;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));

    return true;
  };

  render() {
    return (
      <>
        <AddTask add={this.addTask} />
        <TaskList
          delete={this.deleteTask}
          change={this.changeTaskStatus}
          tasks={this.state.tasks}
        />
      </>
    );
  }
}

export default App;
