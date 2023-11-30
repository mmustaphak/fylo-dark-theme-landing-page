import illustrationIntro from "../assets/illustration-intro.png"

const Hero = ()=>{
    return(
        <main className={"bg-[#1C2431]"}>
            <div className="p-8">
                <img src={illustrationIntro} className="" alt="" />
            </div>
            <div className="p-8  text-white text-center bg-[#181F2A]">
                <h1 className="my-4 text-2xl font-bold">All your files in one secure locations, accessible anywhere.</h1>
                <p>Fylo stores all your most important files in one secure locations. Access them wherever you need, share and collaborate wit friends family, anc co-workers</p>
                <button className="bg-gradient-to-r">Get Started</button>
            </div>
        </main>
    )
}

export default Hero