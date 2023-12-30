import profile1 from "../assets/profile-1.jpg"
import profile2 from "../assets/profile-2.jpg"
import profile3 from "../assets/profile-3.jpg"

const Testimonial = ()=>{
    return(
        <section className="flex flex-wrap justify-center pt-48 px-4 bg-main text-white">
            <div className="w-[90%] min-w-[320px] py-10 px-6 rounded-md bg-testimonial">
                <p className="text-xs">Fylo has improved our team productivity by an order of magnitude. Since making the switch  our team has become a well-oiled collaboration machine.</p>
                <div className="flex justify-between max-w-[11.8rem] items-center mt-4">
                    <img className="max-w-[2.2rem] rounded-full" src={profile1} alt="Founder and Ceo of Huddle Satish Patel" />
                    <div>
                        <h3 className="text-sm font-bold">Satish Patel</h3>
                        <span className="text-xs">Founder and CEO, Huddle</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 w-[90%] min-w-[320px] py-10 px-6 rounded-md bg-testimonial">
                <p className="text-xs">Fylo has improved our team productivity by an order of magnitude. Since making the switch  our team has become a well-oiled collaboration machine.</p>
                <div className="flex justify-between max-w-[11.8rem] items-center mt-4">
                    <img className="max-w-[2.2rem] rounded-full" src={profile2} alt="Founder and Ceo of Huddle Bruce Mckenzie" />
                    <div>
                        <h3 className="text-sm font-bold">Bruce Mckenzie</h3>
                        <span className="text-xs">Founder and CEO, Huddle</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 w-[90%] min-w-[320px] py-10 px-6 rounded-md bg-testimonial">
                <p className="text-xs">Fylo has improved our team productivity by an order of magnitude. Since making the switch  our team has become a well-oiled collaboration machine.</p>
                <div className="flex justify-between max-w-[11.8rem] items-center mt-4">
                    <img className="max-w-[2.2rem] rounded-full" src={profile3} alt="Founder and Ceo of Huddle Iva Boyd" />
                    <div>
                        <h3 className="text-sm font-bold">Iva Boyd</h3>
                        <span className="text-xs">Founder and CEO, Huddle</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial