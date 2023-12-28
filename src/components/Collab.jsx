import productivity from "../assets/illustration-stay-productive.png"
import arrow from "../assets/icon-arrow.svg"

const Collab = () => {
    return (
        <section>
            <img src={productivity} alt="Productive people" />
            <div>
                <h2>Stay productive, wherever you are</h2>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>

                <p>Securely share files and folders with friends, family and colleagues file live collaboration. No email attachments required.</p>

                <a target="_blank">
                    <span>See how Fylo works</span>
                    <img src={arrow} alt=""/>
                </a>
            </div>
        </section>
    )
}

export default Collab