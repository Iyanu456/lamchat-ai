"use client";
import { useChat } from 'ai/react';
import React from "react";
import { useState } from "react";
import '../styles/main.css'
import PromptField from "../components/PromptField"
import Header from "../components/Header";
import runReplicate from "../run_replicate";
import Image from 'next/image';
import lamLogo from "../assets/icons/lamlogo.png"



function App() {

    const { messages, input, handleInputChange, handleSubmit } = useChat();
    var obj;
    //var [count, setCount] = useState(0)
    var [items, setItems] = useState([])
    var [value, setValue] = useState("")
    var [banner, setBanner] = useState(true)

    /*function update(prompt) {
        obj = {
            id: count,
            user: 'user',
            message: prompt
        }
        //setItems(oldItems => [...oldItems, obj])
        setBanner(false)

    }*/

    /*function handleClick(event) {
        event.preventDefault()
        if (value === "") { return }
        setCount(count + 1)
        setValue(event.target.value)
        obj = {
            id: count,
            user: 'user',
            message: value
        }
        setItems(oldItems => [...oldItems, obj])
        setBanner(false)
        setValue('')

        runReplicate(prompt)
        .then(outputText => {
            setCount(count + 1)
            setValue(event.target.value)
            obj = {
                id: count,
                user: 'ai',
                message: outputText
            }
        setItems(oldItems => [...oldItems, obj])
        })
        .catch(error => {
            console.error(error);
        });
        event.preventDefault()
    }*/
    
    return (
        <div className="main-container">
            <aside><button>New chat</button></aside>
            <div style={{overflowY: "scroll"}}>
            <Header />
            <main>
                <section className="chat-section">
                    {banner && 
                    <div className="banner">
                        <div style={{display: "flex", marginTop: "1em", margin: "auto", height: "fit-content"}}>

                            <h1 style={{ 
                                margin: "auto"}}><b>LamChat</b></h1>

                            <Image src={lamLogo}  
                                style={{height: "100px", 
                                width: "100px", 
                                marginTop: "auto", 
                                marginBottom: "auto"}} 
                                alt="llama logo" />
                            </div>
                        
                        <p className="ml-30">Examples</p>
                        <div className="example-group">
                            <div>write an email from bullet lists</div>
                            <div>code a snake game</div>
                            <div>Assist in a task</div>
                        </div>
                            </div>}
                    {messages.map(m => (
                        <div className={m.role === 'user' ? 'user ' : 'ai '} key={m.id}>
                            <div className={m.role === 'user' ? 'user-icon ' : 'ai-icon '}>
                                {m.role === 'user' ? 'T' : 'AI'}
                            </div>
                            <p>
                                {m.content}
                            </p>
                        
                        </div>
                    ))}
                </section>
            </main>
            </div>
                <PromptField 
                    onSubmit={handleSubmit}
                    placeholder="Ask me anything"
                    value={input} 
                    onChange={handleInputChange}
                    onClick={() => {
                        setBanner(false)
                    }}
                />
           
        </div>
    )
}

export default App