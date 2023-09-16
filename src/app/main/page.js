"use client";
import { useChat } from "ai/react";
import React from "react";
import { useState } from "react";
import "../styles/main.css";
import Header from "../components/Header";
import Image from "next/image";
import lamLogo from "../assets/icons/lamlogo.png";
import Chat from "./Chat";
import PromptField from "../components/PromptField";
import sendIcon from "../assets/icons/send-2.svg";

function App() {
	const { messages, input, handleInputChange, handleSubmit } = useChat();
	var [banner, setBanner] = useState(true);

	return (
		<>
			<Header />
			<aside>
				<button>New chat</button>
			</aside>
			<section className="chat-section">
				<div>
					{banner && (
						<div className="banner">
							<div
								className="main-chat-section"
								style={{
									display: "flex",
									marginTop: "1em",
									margin: "auto",
									height: "fit-content",
								}}>
								<h1
									style={{
										margin: "auto",
									}}>
									<b>LamChat</b>
								</h1>

								<Image
									src={lamLogo}
									style={{
										height: "100px",
										width: "100px",
										marginTop: "auto",
										marginBottom: "auto",
									}}
									alt="llama logo"
								/>
							</div>

							<p>Examples</p>
							<div className="example-group">
								<div>write an email from bullet lists</div>
								<div>code a snake game</div>
								<div>Assist in a task</div>
							</div>
						</div>
					)}
					{messages.map((item) => {
						return (
							<Chat
								className={
									item.role === "user" ? "user " : "ai "
								}
								profileClass={
									item.role === "user"
										? "user-icon "
										: "ai-icon "
								}
								profileContent={
									item.role === "user" ? "u" : "ai"
								}
								key={item.id}
								content={item.content}
							/>
						);
					})}
				</div>
			</section>
			<PromptField
				value={input}
				placeholder="Ask me anything"
				onChange={handleInputChange}
				onSubmit={(e) => {
					e.preventDefault();
					banner === true ? setBanner(false) : null
					handleSubmit(e);
				}}
			/>
		</>
	);
}

export default App;
