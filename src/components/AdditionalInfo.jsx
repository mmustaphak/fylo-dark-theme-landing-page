import security from "../assets/icon-security.svg"
import collaboration from "../assets/icon-collaboration.svg"
import access from "../assets/icon-access-anywhere.svg"
import file from "../assets/icon-any-file.svg"

const AdditionalInfo = () => {
    return (
        <section className="text-center text-white bg-main">
            <div className="grid gap-16 mx-auto px-4 pt-32 max-w-sm">
                <div>
                    <img src={access} className="mx-auto mb-10" alt="Acesss anywhere" />
                    <h3 className="mb-3 text-lg font-bold font-raleway">Access your files, anywhere</h3>
                    <p>The ability to use a smartphone, tablet, or computer to access your account mean your files follow you everywhere.</p>
                </div>

                <div>
                    <img src={security} className="mx-auto mb-10" alt="Shield" />
                    <h3 className="mb-3 text-lg font-bold font-raleway">Security you can trust</h3>
                    <p>The ability  to use a smartphone, tablet, or computer to acess your account mean your files follow you everywhere. </p>
                </div>

                <div>
                    <img src={collaboration} className="mx-auto mb-10" alt="Efficient Collaboration" />
                    <h3 className="mb-3 text-lg font-bold font-raleway">Real-time collaboration</h3>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required
                    </p>
                </div>


                <div>
                    <img src={file} className="mx-auto mb-10" alt="Folder" />
                    <h3 className="mb-3 text-lg font-bold font-raleway">Store any type of file</h3>
                    <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to securely stored and shared.</p>
                </div>

            </div>
        </section>
    )
}

export default AdditionalInfo