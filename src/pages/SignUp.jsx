function SignUp (){
    return(
        <form>
            <label>Name: <input placeholder='Your Name'></input></label>
            <br/>
            <label>Email: <input type='email' placeholder='Your Email'></input></label>
            <br/>
            <label>Password: <input type='password' placeholder='Password'></input></label>
            <br>
            </br><button>Sign Up</button>
        </form>
    )
}

export default SignUp