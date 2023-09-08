import Image from "next/image"
import Llama from "./assets/icons/lama-svg-0.svg"
import Screenshot from "./assets/lamchat_screeenshot.jpg"

export default function IntroSection() {
    return (
        <section className="intro-group">
            
            <div className="intro-section" style={{height: "fit-content"}}>
                <div className="content">
                    { "LamChat is your intelligent chat companion, designed to engage, inform, and entertain. Whether you're seeking answers, looking for interesting discussions, or just want to chat, LamChat is here to make your conversations enjoyable and informative."}
                </div>
            </div>
            <div className="image-section">
            <Image   src={Screenshot} alt="screenshot" />
            </div>
            
        </section>
    )
}