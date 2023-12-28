import access from "../assets/icon-access-anywhere.svg"
import security from "../assets/icon-security.svg"
import collaboration from "../assets/icon-collaboration.svg"
import file from "../assets/icon-any-file.svg"

const AdditionalInfo = () => {
    const content = [
        {
            key: 1,
            img: access,
            title: "Access your files, anywhere",
            content: "The ability to use a smartphone, tablet, or computer to access your account mean your files follow you everywhere."
        },
        {
            key: 2,
            img: security,
            title: "Security you can trust",
            content: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        },
        {
            key: 3,
            img: collaboration,
            title: "Real-time collaboration",
            content: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure you files."
        },
        {
            key: 4,
            img: file,
            title: "Store any type of file",
            content: "Whether you're sharing holidays photos or work documents, Fylo has covered allowing for all file types to be securely stored and shared."
        },
    ]

    const renderedContent = content.map(item => {
        return (
            <div key={item.key} className="mx-auto max-w-[410px]">
                <img src={item.img} className="mx-auto" alt="" />
                <h2 className="mt-8 text-xl font-raleway font-bold">{item.title}</h2>
                <p className="mt-2">{item.content}</p>
            </div>

        )
    })

    return (
        <section className="pt-32 px-4 text-white bg-main">
            <div className="grid gap-y-24 items-center text-center max-w-[990px] mx-auto min-[900px]:grid-cols-2">
                {renderedContent}
            </div>
        </section>
    )
}

export default AdditionalInfo