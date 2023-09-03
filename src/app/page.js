import NavBar from "./NavBar"
export default function Home() {
    return (
        <div>
            <NavBar />
            <section className="heading-section">
                <h1>Unlock the Future of Conversational AI with <span className="gradient">LamChat</span></h1>
                <p className="mt-20">Welcome to LamChat, where the power of AI-driven conversations meets your curiosity and interests.</p>
                <div className="flex g-10 mt-35">
                    <button>Get Started</button>
                    <button>See More</button>
                </div>
            </section>
            <section className="main-section mt-20">
                <h2>Introducing LamChat</h2>
                <div>LamChat is your intelligent chat companion, designed to engage, inform, and entertain. Whether you're seeking answers, looking for interesting discussions, or just want to chat, LamChat is here to make your conversations enjoyable and informative.</div>
            </section>
            <section className="main-section">
                <h2>Why LamChat</h2>
                <div><b>Great Conversations:</b> LamChat is here for fun and informative chats. It's really good at making conversations interesting.</div>
                <div className="mt-10"><b>Quick Answers:</b> No more waiting! LamChat gives you fast responses, so you don't have to wait long.</div>
                <div className="mt-10"><b>Tailored for You:</b> LamChat talks to you in a way that you like. It's like having a friend who knows what you like to talk about.</div>
            </section>
            
        </div>
    )
}