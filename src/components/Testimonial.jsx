import profile1 from "../assets/profile-1.jpg"
const Testimonial = ()=>{
    return(
        <section>
            <div>
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div>
                    <img src={profile1} alt="" />
                    <div>
                        <h3>Satish Patel</h3>
                        <span>Founder & CEO, Huddle</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial