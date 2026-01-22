import React, { useState } from "react";

export default function Form(props) {
  const onHandleClick = () => {
    console.log("hy gurya");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const onHandleChange = (event) => {
    console.log("hy jerry");
    setText(event.target.value);
  };
  const HandleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const HandleRemoveExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const onHandlelowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const [text, setText] = useState("hello gurya");
  return (
    <>
      <h4 style={{ color: props.mode === "light" ? "black" : "white" }}>
        {props.heading}
      </h4>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={onHandleChange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            color: props.mode === "light" ? "black" : "white",
          }}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={onHandleClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={onHandlelowercase}>
        Convert to lowercase
      </button>

      <button className="btn btn-primary mx-1" onClick={HandleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={HandleRemoveExtraSpace}>
        Remove Extra spaces
      </button>
      <div
        style={{ color: props.mode === "light" ? "black" : "white" }}
        className="container"
      >
        <h4>Total words</h4>
        {/* <p>{text.split(" ").length} words & {text.length} characters</p> */}
        <p>
          {
            text
              .trim()
              .split(" ")
              .filter(function (element) {
                return element != "";
              }).length
          }{" "}
          words and {text.length} characters{" "}
        </p>
        <h4>Minutes read</h4>
        <p>{0.008 * text.split(" ").length} </p>
        <h4>Preview</h4>

        <p>
          {text.length > 0
            ? text
            : "Enter something  in the text box above to preview it here"}
        </p>
      </div>
    </>
  );
}
