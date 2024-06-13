import {useState} from 'react';
import { userSignup } from '../utilities/apis';


function SignUp (props){
    const {setUser} = props
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: ''
    })


    async function handleSubmit(evt) {
        evt.preventDefault(); 
        try {
          const response = await userSignup(userInfo)
          const { token, user } = response;
          setUser(user)
        } catch (error) {  
          console.log(error)
        }
      }


      return (
        <form onSubmit={handleSubmit}>
          <label>
            Name: <input value={userInfo.name} onChange={(event) => setUserInfo({...userInfo, name: event.target.value})} placeholder="Your Name" />
          </label>
          <br />
          <label>
            Email: <input type="email" value={userInfo.email} onChange={(event) => setUserInfo({...userInfo, email: event.target.value})} placeholder="Your Email" />
          </label>
          <br />
          <label>
            Password: <input type="password" value={userInfo.password} onChange={(event) => setUserInfo({...userInfo, password: event.target.value})} placeholder="Password" />
          </label>
          <br />
          <button type="submit">Sign Up</button>
        </form>
      );
}

export default SignUp