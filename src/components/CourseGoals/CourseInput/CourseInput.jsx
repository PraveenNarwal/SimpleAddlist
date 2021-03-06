import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

// this in use app onAddGoal={addGoalHandler}setCourseGoals((prevGoals) => {
// const updatedGoals = [...prevGoals];
// updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
// return updatedGoals;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
