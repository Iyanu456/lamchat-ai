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
        <>
            <NavBar />
            <section className="heading-section">
                <h1>Welcome to <b>LamChat ai</b> Where Conversations come to Life</h1>
                <div className="flex g-10 mt-40">
                    <button>Sign up</button>
                    <button>Login</button>
                </div>
            </section>
            <main className="main-group">
                <IntroSection />
                <section className="how-section">
                    <h2 style={largeHeading} className="mb-5">How Does LamChat Work?</h2>
                    <div>
                        LamChat is powered by state-of-the-art AI technology. It understands your questions and provides relevant, accurate information in real-time. Our ever-evolving chatbot adapts to your needs, ensuring each interaction is meaningful and productive.
                    </div>
                </section>
                <section className="samples-section">
                    <h2 style={largeHeading} className="mb-5">Samples</h2>
                    <div>
                        LamChat is powered by state-of-the-art AI technology. It understands your questions and provides relevant, accurate information in real-time. Our ever-evolving chatbot adapts to your needs, ensuring each interaction is meaningful and productive.
                    </div>
                </section>
                <section className="why-section mb-30">
                    <h2 style={largeHeading} className="mb-5">Why LamChat?</h2>
                    <div>
                        <div className="card" >
                            <h1>Great Conversations</h1>
                            <div>
                                <div className="line"></div>
                                <div className="content">{"LamChat is here for fun and informative chats. It's really good at making conversations interesting"}.</div>
                            </div>
                        </div>
                        <div className="card" >
                            <h1>Great Conversations</h1>
                            <div>
                                <div className="line"></div>
                                <div className="content">{"LamChat is here for fun and informative chats. It's really good at making conversations interesting."}</div>
                            </div>
                        </div>
                        <div className="card" >
                            <h1>Great Conversations</h1>
                            <div>
                                <div className="line"></div>
                                <div className="content">{"LamChat is here for fun and informative chats. It's really good at making conversations interesting."}</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
        </>
    )
}