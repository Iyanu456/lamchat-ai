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
        </div>
    )
}