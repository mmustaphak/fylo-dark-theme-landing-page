import collabImg from "../assets/illustration-stay-productive.png"
import arrow from "../assets/icon-arrow.svg"

const Collaboration = () => {
    return (
        <section className="bg-main pt-32 text-white px-3.5">
            <div>
                <img  src={collabImg} alt="Collaboration" />
                <h1 className="mt-10 font-bold text-xl text-center">Stay productive, wherever you are</h1>
                <p className="mt-4 text-left">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p className="mt-4 text-left">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                <div className="flex items-center justify-between max-w-[10.5rem] mt-4 pb-1 text-call-to-action-gradient1 border-b-[1px] border-call-to-action-gradient1">
                    <a href="#">See how Fylo works</a>
                    <img src={arrow} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Collaboration