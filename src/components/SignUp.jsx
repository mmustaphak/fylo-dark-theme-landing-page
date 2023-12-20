const SignUp = ()=>{
    return(
        <form className="bg-main text-center border px-4 py-8">
            <h1 className="font-bold font-raleway text-lg">Get early access today</h1>
            <p className="mt-4 w-fit">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would happy to help you.</p>
            <input className="block min-w-full mt-8 py-4 rounded-full pl-9 text-black" placeholder="email@example.com"></input>
            <button className="w-full mt-6 py-2 rounded-full bg-gradient-to-r from-call-to-action-gradient1 to-call-to-action-gradient2">Get Started For Free</button>
        </form>
    )
}

export default SignUp