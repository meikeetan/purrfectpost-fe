import {useState} from 'react';
import { signUp } from '../../utilities/users-service';


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
          const user = await signUp(userInfo)
          setUser(user)
          console.log(user)
        } catch (error) {  
          alert(error)
        }
      }


      return (
        <form onSubmit={handleSubmit}>
          <label>
            Name: <input required='true' value={userInfo.name} onChange={(event) => setUserInfo({...userInfo, name: event.target.value})} placeholder="Your Name" />
          </label>
          <br />
          <label>
            Email: <input required='true' type="email" value={userInfo.email} onChange={(event) => setUserInfo({...userInfo, email: event.target.value})} placeholder="Your Email" />
          </label>
          <br />
          <label>
            Password: <input required='true' type="password" value={userInfo.password} onChange={(event) => setUserInfo({...userInfo, password: event.target.value})} placeholder="Password" />
          </label>
          <br />
          <button type="submit">Sign Up</button>
        </form>
      );
}

export default SignUp