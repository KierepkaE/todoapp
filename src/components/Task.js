import React from "react";
const Task = props => {
  const { text, date, id, active, important, finishDate } = props.task;

  const style = {
    color: "pink"
  };

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> until{" "}
          <span>{date}</span>
          <button onClick={() => props.change(id)}>done</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finished = new Date(finishDate).toLocaleString();

    return (
      <div>
        <p>
          <strong>{text}</strong> <em> until {date}</em>
          <button onClick={() => props.delete(id)}>X</button>
          <br />
          <span> task completed: {finished}</span>
        </p>
      </div>
    );
  }
};

export default Task;
