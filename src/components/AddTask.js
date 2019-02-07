import React, { Component } from "react";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    text: "",
    checked: false,
    date: this.minDate
  };

  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleCheckbox = e => {
    this.setState({
      checked: e.target.checked
    });
  };

  handleDate = e => {
    this.setState({
      date: e.target.value
    });
  };

  handleClick = props => {
    const { text, checked, date } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate
        });
      }
    } else {
      alert("Type your task. ");
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 24) * 1 + 1;
    maxDate = maxDate + "-12-31";

    return (
      <>
        <h1
          style={{
            color: "#FFA5A5",
            letterSpacing: "2px",
            marginTop: "0",
            paddingTop: "55px",
            paddingBottom: "20px",
            fontSize: "23px"
          }}
        >
          ~ to do app ~
        </h1>
        <h3>add new :</h3>
        <input
          type="text"
          placeholder="add new task"
          value={this.state.text}
          onChange={this.handleText}
        />
        <label htmlFor="important">
          important
          <input
            type="checkbox"
            id="important"
            checked={this.state.checked}
            onChange={this.handleCheckbox}
          />
        </label>
        <br />
        <label htmlFor="date">until:</label>
        <input
          type="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDate}
        />
        <button onClick={this.handleClick}>add</button>

        <hr />
      </>
    );
  }
}

export default AddTask;
