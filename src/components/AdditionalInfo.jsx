import access from "../assets/icon-access-anywhere.svg"
import security from "../assets/icon-security.svg"
import collaboration from "../assets/icon-collaboration.svg"
import file from "../assets/icon-any-file.svg"

const AdditionalInfo = () => {
    return (
        <section className="grid justify-center text-center gap-y-16 pt-32 px-4 text-white bg-main">
            <div className="">
                <img src={access} className="mx-auto" alt="" />
                <h2 className="mt-8 text-xl font-raleway font-bold">Access your files, anywhere</h2>
                <p className="mt-2">The ability to use a smartphone, tablet, or computer to access your account mean your files follow you everywhere</p>
            </div>

            <div className="">
                <img src={security} className="mx-auto" alt="" />
                <h2 className="mt-8 text-xl font-raleway font-bold">Security you can trust</h2>
                <p className="mt-2">2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure you files.</p>
            </div>

            <div className="">
                <img src={collaboration} className="mx-auto" alt="" />
                <h2 className="mt-8 text-xl font-raleway font-bold">Security you can trust</h2>
                <p className="mt-2">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            </div>

            <div className="">
                <img src={file} className="mx-auto" alt="" />
                <h2 className="mt-8 text-xl font-raleway font-bold">Store any type of file</h2>
                <p className="mt-2">Whether you&#39;re sharing holidays photos or work documents, Fylo has covered allowing for all file types to be securely stored and shared.</p>
            </div>
        </section>
    )
}

export default AdditionalInfo