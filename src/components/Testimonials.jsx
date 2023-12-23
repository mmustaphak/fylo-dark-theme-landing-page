import profile1 from "../assets/profile-1.jpg"
import profile2 from "../assets/profile-2.jpg"
import profile3 from "../assets/profile-3.jpg"
import quotes from "../assets/bg-quotes.png"
import SignUp  from "./SignUp.jsx"
const Testimonials = () => {

    const data = [
        {name: "Satish Patel", image: profile1},
        {name: "Bruce McKenzie", image: profile2},
        {name: "Iva Boyd", image: profile3}
    ]

    const testimonials = data.map((person) => {
        return(
            <div key={person} className="relative max-w-[450px] px-6 py-8 bg-testimonial rounded-md mt-6 md:px-10">
                <p className="text-sm max-w-[20rem]">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className="flex items-center mt-4 text-xs">
                    <img className="w-8 h-8 rounded-full" src={person.image} alt="" />
                    <div className="ml-3">
                        <h3 className="font-bold text-base">{person.name}</h3>
                        <span className="text-[0.7rem]">Founder & CEO, Huddle</span>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section className="relative bg-main text-white pt-32 pb-80">
            <div className="relative flex flex-wrap justify-around max-w-[1286px]">
                <img src={quotes} className="absolute w-8 left-2 md:top-[2%] md:left-[5%] md:z-[0]" alt="background quotes" />
                {testimonials}
            </div>
            <SignUp/>
        </section>
    )
}

export default Testimonials