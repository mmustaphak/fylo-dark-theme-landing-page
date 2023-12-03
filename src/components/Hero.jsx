import illustrationIntro from "../assets/illustration-intro.png"

const Hero = () => {
    return (
        <main className={"bg-intro bg-mobile-curve bg-no-repeat bg-[center_60%] bg-contain pt-6"}>
            <img src={illustrationIntro} className="max-w-[20rem] mx-auto" alt="" />
            <h1 className="max-w-[20rem] mx-auto text-center font-raleway text-white text-2xl font-bold">All your files in one secure locations, accessible anywhere.</h1>
            <div className="mt-4 text-white text-center bg-main">
                <p className="max-w-[21rem] mx-auto">Fylo stores all your most important files in one secure locations. Access them wherever you need, share and collaborate wit friends family, anc co-workers</p>
                <button className="mt-8  px-20 py-2 rounded-full font-raleway font-bold bg-gradient-to-r from-call-to-action-gradient1 to-call-to-action-gradient2">Get Started</button>
            </div>
        </main>
    )
}

export default Hero