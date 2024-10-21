import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ]);

    let [title, setTitle] = useState<string>('')

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
   }

   const callBackButtonHandler = () => {
        addMessage(title)
       setTitle('')
   }


    return (
        <div className="App">

            {/*<FullInput addMessage={addMessage} />*/}

            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
