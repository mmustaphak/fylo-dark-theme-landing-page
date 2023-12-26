import introImg from "../assets/illustration-intro.png"

const Main = ()=>{
    return(
        <main>
            <img src={introImg} className="w-2/3" alt="Organising folder" />
            <h1>All your files and location, accessible in one secure location anywhere</h1>
            <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            <button>Get started</button>
        </main>
    )
}

export default Main