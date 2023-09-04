import NavBar from "./NavBar"
import IntroSection from "./IntroductionSection"
export default function Home() {
    const largeHeading = {
        height: "fit-content",
        fontSize: "2.4em",
        fontfamily: "Poppins",
        fontWeight: "550"
    }
    const firstCard = {
        backgroundColor: "rgb(258, 248, 10)",
        color: "rgb(27, 44, 155)"
    }
    return (
        <div>
            <NavBar />
            <section className="heading-section">
                <h1>Welcome to <span className="gradient">LamChat</span> Where Conversations come to Life</h1>
                <p className="mt-20">Welcome to LamChat, where the power of AI-driven conversations meets your curiosity and interests.</p>
                <div className="flex g-10 mt-35">
                    <button>Get Started</button>
                    <button>See More</button>
                </div>
            </section>
            <main className="main-group">
                <IntroSection />
                <section className="how-section">
                    <h2 style={largeHeading}>How Does LamChat Work?</h2>
                    <div>
                        LamChat is powered by state-of-the-art AI technology. It understands your questions and provides relevant, accurate information in real-time. Our ever-evolving chatbot adapts to your needs, ensuring each interaction is meaningful and productive.
                    </div>
                </section>
                <section className="samples-section">
                    <h2 style={largeHeading}>Samples</h2>
                    <div>
                        LamChat is powered by state-of-the-art AI technology. It understands your questions and provides relevant, accurate information in real-time. Our ever-evolving chatbot adapts to your needs, ensuring each interaction is meaningful and productive.
                    </div>
                </section>
                <section className="why-section mb-30">
                    <h2 style={largeHeading}>Why LamChat?</h2>
                    <div>
                        <div className="card" style={firstCard}>
                            <h1>Great Conversations</h1>
                            <div>
                                <div className="line"></div>
                                <div className="content">{"LamChat is here for fun and informative chats. It's really good at making conversations interesting"}.</div>
                            </div>
                        </div>
                        <div className="card" style={firstCard}>
                            <h1>Great Conversations</h1>
                            <div>
                                <div className="line"></div>
                                <div className="content">{"LamChat is here for fun and informative chats. It's really good at making conversations interesting."}</div>
                            </div>
                        </div>
                        <div className="card" style={firstCard}>
                            <h1>Great Conversations</h1>
                            <div>
                                <div className="line"></div>
                                <div className="content">{"LamChat is here for fun and informative chats. It's really good at making conversations interesting."}</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
        </div>
    )
}