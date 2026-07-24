import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import "./login.scss";
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

   const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await handleLogin({ email, password });

    if (success) {
        navigate("/dashboard");
    }
};

    if(loading){
        return (<main><h1>Loading.......</h1></main>)
    }


   return (
    <section className="auth-page">

            
            <div className="auth-card">
            <div className="form-container">

                <h1>Login</h1>

                <form onSubmit={handleSubmit}>

                  <div className="input-group">
                 <label htmlFor="email">Email</label>

                 <input
                id="email"
                type="email"
                placeholder="Enter email address"
                onChange={(e) => setEmail(e.target.value)}
               />
             </div>

                    <div className="input-group">

                        <label htmlFor="password">Password</label>

                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            placeholder="Enter password"
                        />

                    </div>

                    <button className="button primary-button">
                        Login
                    </button>

                </form>

                <p>
                    Don't have an account?
                    <Link to="/register"> Register</Link>
                </p>

            </div>

        </div>

        

    </section>
   );

}

export default Login