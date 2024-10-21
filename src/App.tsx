import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ]);

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
   }

    return (
        <div className="App">
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}

            <FullInput
                addMessage={addMessage}
            />

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
