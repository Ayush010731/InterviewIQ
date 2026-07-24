import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const navigate = useNavigate()
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const {loading,handleRegister} = useAuth()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({username,email,password})
        navigate("/login")
    }

    if(loading){
    return (
        <section className="auth-page">
            <h1>Loading...</h1>
        </section>
    )
}
return (
    <section className="auth-page">

        <div className="auth-card">

            <div className="form-container">

                <h1>Create Account</h1>

                <p className="subtitle">
                    Join InterviewIQ and start your AI-powered interview preparation.
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">

                        <label htmlFor="username">Username</label>

                        <input
                            onChange={(e)=>setUsername(e.target.value)}
                            type="text"
                            id="username"
                            placeholder="Enter username"
                        />

                    </div>

                    <div className="input-group">

                        <label htmlFor="email">Email</label>

                        <input
                            onChange={(e)=>setEmail(e.target.value)}
                            type="email"
                            id="email"
                            placeholder="Enter email address"
                        />

                    </div>

                    <div className="input-group">

                        <label htmlFor="password">Password</label>

                        <input
                            onChange={(e)=>setPassword(e.target.value)}
                            type="password"
                            id="password"
                            placeholder="Enter password"
                        />

                    </div>

                    <button className="button primary-button">
                        Register
                    </button>

                </form>

                <p>
                    Already have an account?
                    <Link to="/login"> Login</Link>
                </p>

            </div>

        </div>

    </section>
)
}

export default Register