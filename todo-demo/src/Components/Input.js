import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import db from "../firebase";
import firebase from "firebase/app";
const Input = ({ todos, setTodos }) => {
  const [input, setInput] = useState("");
  const inputHandler = (event) => {
    setInput(event.target.value);
  };
  const submitHandler = () => {
    if (input) {
      db.collection("todos").add({
        text: input,
        completed: false,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
      //   setTodos([
      //     ...todos,
      //     {
      //       text: input,
      //       completed: false,
      //     },
      //   ]);
    }
    setInput("");
  };
  return (
    <div>
      <InputGroup>
        <Form.Control type="text" onChange={inputHandler} value={input} />

        <InputGroup.Append>
          <InputGroup.Text onClick={submitHandler}>
            <BsPlus />
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default Input;
