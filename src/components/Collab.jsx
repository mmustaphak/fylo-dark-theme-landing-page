import productivity from "../assets/illustration-stay-productive.png"
import arrow from "../assets/icon-arrow.svg"

const Collab = () => {
    return (
        <section className="flex flex-wrap justify-evenly px-6 pt-36 text-white bg-main">
            <img className="w-full max-w-[440px]" src={productivity} alt="Productive people" />
            <div className="max-w-[485px] mt-11 text-sm">
                <h2 className="text-lg font-raleway font-bold min-[973px]:text-3xl min-[973px]:max-w-[340px]">Stay productive, wherever you are</h2>
                <p className="mt-4">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p className="mt-4">Securely share files and folders with friends, family and colleagues file live collaboration. No email attachments required.</p>
                <a className="flex items-center justify-between max-w-[9.5rem] mt-4 pb-1 border-b-[1.4px] border-gradient1 text-gradient1" target="_blank">
                    <span className="w-max">See how Fylo works</span>
                    <img src={arrow} alt=""/>
                </a>
            </div>
        </section>
    )
}

export default Collab