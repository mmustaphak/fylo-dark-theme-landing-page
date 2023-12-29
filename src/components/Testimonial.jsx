import profile1 from "../assets/profile-1.jpg"
import profile2 from "../assets/profile-2.jpg"
import profile3 from "../assets/profile-3.jpg"

const Testimonial = ()=>{
    return(
        <section>
            <div>
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch  our team has become a well-oiled collaboration machine.</p>
                <div>
                    <img src={profile1} alt="Founder and Ceo of Huddle Satish Patel" />
                    <div>
                        <h3>Satish Patel</h3>
                        <span>Founder and CEO, Huddle</span>
                    </div>
                </div>
            </div>

            <div>
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch  our team has become a well-oiled collaboration machine.</p>
                <div>
                    <img src={profile2} alt="Founder and Ceo of Huddle Satish Patel" />
                    <div>
                        <h3>Satish Patel</h3>
                        <span>Founder and CEO, Huddle</span>
                    </div>
                </div>
            </div>

            <div>
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch  our team has become a well-oiled collaboration machine.</p>
                <div>
                    <img src={profile3} alt="Founder and Ceo of Huddle Satish Patel" />
                    <div>
                        <h3>Satish Patel</h3>
                        <span>Founder and CEO, Huddle</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial