import profile1 from "../assets/profile-1.jpg"
const Testimonials = ()=>{
    return(
        <section className="bg-main text-white px-6 pt-32">
            <div className="px-6 py-8 bg-testimonial rounded-md">
                <p className="text-sm">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className="flex items-center mt-4 text-xs">
                    <img className="w-8 h-8 rounded-full" src={profile1} alt="" />
                    <div className="ml-3">
                        <h3 className="font-bold text-base">Satish Patel</h3>
                        <span className="text-[0.7rem]">Founder & CEO, Huddle</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials