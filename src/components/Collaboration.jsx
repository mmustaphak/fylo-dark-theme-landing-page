import collabImg from "../assets/illustration-stay-productive.png"
import arrow from "../assets/icon-arrow.svg"

const Collaboration = () => {
    return (
        <section className="">
            <img src={collabImg} alt="Collaboration" />
            <h1>Stay productive, wherever you are</h1>
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            <div>
                <a href="#">See how Fylo works</a>
                <img src={arrow} alt="" />
            </div>

        </section>
    )
}

export default Collaboration