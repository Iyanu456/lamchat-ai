"use client";
import { useChat } from 'ai/react';
import React from "react";
import { useState  } from "react";
import '../styles/main.css'
import PromptField from "../components/PromptField"
import Header from "../components/Header";
import Image from 'next/image';
import lamLogo from "../assets/icons/lamlogo.png"



function App() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    var [banner, setBanner] = useState(true)


    function parse(inputString) {
        let isCodeTagOpen = false;
        
        // Use a regular expression with a replace callback function
        const outputString = inputString.replace(/```/g, function (match) {
            if (isCodeTagOpen) {
            isCodeTagOpen = false;
            return '</code></pre>';
            } else {
            isCodeTagOpen = true;
            return '<pre><code>';
            }
        });
        
        // Replace newline characters with <br> tags
        const withLineBreaks = outputString.replace(/\n/g, '<br>');
        
        // Close any open code tag if needed
        if (isCodeTagOpen) {
            return withLineBreaks + '</code></pre>';
        }
        
        return withLineBreaks;
        }
        
      
    
    return (

        <>
        <Header />
        <aside><button>New chat</button></aside>
                <section className="chat-section">
                    <div>
                    {banner && 
                    <div className="banner">
                        <div className="main-chat-section"style={{display: "flex", marginTop: "1em", margin: "auto", height: "fit-content"}}>

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

                                {m.role === 'user' ? 'u' : 'ai'}

                            </div>
                            <div className='content' dangerouslySetInnerHTML={{ __html: parse(m.content) }}>
                            </div>
                        
                        </div>
                    ))}
                    </div>
                </section>

                <PromptField 
                    onSubmit={handleSubmit}
                    placeholder="Ask me anything"
                    value={input} 
                    onChange={handleInputChange}
                    onClick={() => {
                        console.log(messages)
                        setBanner(false)
                    }}
                />
        </>
    )
}

export default App