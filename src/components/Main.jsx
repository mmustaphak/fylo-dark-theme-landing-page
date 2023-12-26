import introImg from "../assets/illustration-intro.png"

const Main = ()=>{
    return(
        <main className="bg-intro flex flex-col items-center">
            <img src={introImg} className="w-[80%] max-w-[550px] mt-8" alt="Organising folder" />
            <div className="w-full flex flex-col items-center bg-main px-9 text-center text-white">
                <h1 className="font-raleway text-2xl font-bold">All your files in one secure location, accessible anywhere.</h1>
                <p className="max-w-[437px] mt-4 text-sm">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                <button className="w-3/4 max-w-[220px] mt-8 py-3 px-16 rounded-full bg-gradient-to-r from-gradient1 to-gradient2">Get started</button>
            </div>
        </main>
    )
}

export default Main