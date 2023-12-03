import security from "../assets/icon-security.svg"
import collaboration from "../assets/icon-collaboration.svg"
import access from "../assets/icon-access-anywhere.svg"
import file from "../assets/icon-any-file.svg"

const AdditionalInfo = () => {
    return (
        <section>
            
            <div>
                <img src={access} alt="Acess anywhere" />
                <h3>Access your files, anywhere</h3>
                <p>The ability to use a smartphone, tablet, or computer to access your account mean your files follow you everywhere.</p>
            </div>

            <div>
                <img src={security} alt="Shield" />
                <h3>Security you can trust</h3>
                <p>The ability  to use a smartphone, tablet, or computer to acess your account mean your files follow you everywhere. </p>
            </div>

            <div>
                <img src={collaboration} alt="Efficient Collaboration" />
                <h3>Real-time collaboration</h3>
                <p>SEcurely share files and folders with friends, family and colleagues for live collaboration. No email attachments required
                </p>
            </div>


            <div>
                <img src={file} alt="Folder" />
                <h3>Store any type of file</h3>
                <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to securely stored and shared.</p>
            </div>
        </section>
    )
}

export default AdditionalInfo