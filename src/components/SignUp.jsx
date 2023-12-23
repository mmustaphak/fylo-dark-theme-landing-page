const SignUp = ()=>{
    return(
        <form className="absolute min-w-[320px] w-3/4 max-w-[850px] left-1/2 translate-x-[-50%] translate-y-[-50%] bottom-[-22rem] shadow-[2px_7px_10px_black] bg-intro text-center rounded-lg px-4 py-8">
            <h1 className="font-bold font-raleway text-lg">Get early access today</h1>
            <p className="mt-4 w-fit max-w-[680px] mx-auto">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would happy to help you.</p>
            <div className="flex items-center justify-around flex-wrap">
                <input className="block w-full max-w-lg mt-8 py-4 rounded-full pl-9 text-black" placeholder="email@example.com"></input>
                <button className="mt-6 py-4 px-4 rounded-full bg-gradient-to-r from-call-to-action-gradient1 to-call-to-action-gradient2">Get Started For Free</button>
            </div>
        </form>
    )
}

export default SignUp