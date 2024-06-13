import {useState} from 'react';
import { userLogin } from '../utilities/apis';

function Login (props){
    const {setUser} = props
    const [userInfo, setUserInfo] = useState ({
        email: '',
        password: '',
    })

    async function handleSubmit(evt) {
        evt.preventDefault(); 
        try {
          const response = await userLogin(userInfo)
          const { token, user } = response;
          setUser(user)
        } catch (error) {  
          console.log(error)
        }
      }


    return(
        <form onSubmit={handleSubmit}> 
            <label>
            Email: <input type="email" value={userInfo.email} onChange={(event) => setUserInfo({...userInfo, email: event.target.value})} placeholder="Your Email" />
          </label>
          <br />
          <label>
            Password: <input type="password" value={userInfo.password} onChange={(event) => setUserInfo({...userInfo, password: event.target.value})} placeholder="Password" />
          </label>
          <br />
          <button type="submit">Log In</button>
        </form>
    )
}

export default Login