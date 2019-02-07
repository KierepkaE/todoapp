import React from "react";
import Task from "./Task";
const TaskList = props => {
  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  // done.sort((a, b) => b.finishDate - a.finishDate);

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1;
      }
      if (a.finishDate > b.finishDate) {
        return -1;
      }
      return 0;
    });
  }

  // alphabetical sorting of active tasks
  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  const activeTasks = active.map(task => (
    <Task key={task.id} task={task} delete={props.delete} change={props.change}>
      {task.text}
    </Task>
  ));
  const doneTasks = done.map(task => (
    <Task key={task.id} task={task} delete={props.delete} change={props.change}>
      {task.text}
    </Task>
  ));

  /* App will display only last 10 tasks */

  return (
    <>
      <div className="active">
        <h1>to do:</h1>
        {activeTasks.length > 0 ? (
          activeTasks
        ) : (
          <p className="message">
            you've done everything! enjoy your day :) !!
          </p>
        )}
      </div>
      <div className="done">
        <h1>done ( {done.length} ):</h1>
        {done.length > 10 && <span>see your last 10 tasks:</span>}
        {doneTasks.slice(0, 10)}
      </div>
    </>
  );
};

export default TaskList;
