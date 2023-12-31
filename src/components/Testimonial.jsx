import profile1 from "../assets/profile-1.jpg"
import profile2 from "../assets/profile-2.jpg"
import profile3 from "../assets/profile-3.jpg"

const Testimonial = () => {

    const testimonialData = ["Satish Patel", "Bruce Mckenzie", "Iva Boyd"]

    const renderedTestimonials = testimonialData.map((person,index) => {
        return (
            <div key={person} className="mt-8 mx-3 min-w-[320px] max-w-[340px] py-10 px-6 rounded-md bg-testimonial">
                <p className="text-xs sm:max-w-[245px]">Fylo has improved our team productivity by an order of magnitude. Since making the switch  our team has become a well-oiled collaboration machine.</p>
                <div className="flex justify-between max-w-[11.8rem] items-center mt-4">
                    <img className="max-w-[2.2rem] rounded-full" src={eval(`profile${index+1}`)} alt={`Founder and Ceo of Huddle ${person}`} />
                    <div>
                        <h3 className="text-sm font-bold">{person}</h3>
                        <span className="text-xs">Founder and CEO, Huddle</span>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section className="pt-48 px-4 bg-main text-white">
            <div className="flex flex-wrap justify-evenly content-between max-w-[1120px] mx-auto">
                {renderedTestimonials}
            </div>
        </section>
    )
}

export default Testimonial