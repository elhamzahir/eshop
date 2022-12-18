import React , {useState} from "react";
import "./Login.css";
import {Link , useHistory} from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';

export default function Login (){
    const history = useHistory();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const signIn = e => {
        history.push('/');     // go to the home page
    }

    const register = e => {
        history.push('/');     // go to the home page
    }

    return(
        <div className="login">
            <Link to='/' style={{textDecoration: "none"}}>
                <div className="loginLogo">
                    <StorefrontIcon className="loginLogoImage" fontSize="large" />
                    <h2 className="loginLogoTitle">ESHOP</h2>
                </div>
            </Link>

            <div className="loginContainer">
                <h1>sign in</h1>
                <form>
                    <h5>email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" className="loginSignInButton" onClick={signIn}>Sign In</button>
                </form>
                <p>Note that the development build is not optimized.
                    To create a production build, use yarn build.</p>

                <button className="loginRegisterButton" onClick={register}>create your eSHOP account</button>
            </div>
        </div>
    )
}
