import illustrationIntro from "../assets/illustration-intro.png"

const Hero = ()=>{
    return(
        <main>
            <img src={illustrationIntro} alt="" />
            <h1>All your files in one secure locations, accessible anywhere.</h1>
            <p>Fylo stores all your most important files in one secure locations. Access them wherever you need, share and collaborate wit friends family, anc co-workers</p>
            <button>Get Started</button>
        </main>
    )
}

export default Hero