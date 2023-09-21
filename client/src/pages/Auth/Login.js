import React, {useState} from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/AuthStyle.css";
import { useAuth } from '../../context/auth';

const Login = () => {
    const [email, setEmail]  = useState("");
    const [password, setPassword]  = useState("");
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    const location = useLocation();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, 
            {email, password});

            if(response && response.data.success) {
                toast.success(response.data.message);
                setAuth({
                    ...auth,
                    user: response.data.user,
                    token: response.data.token
                })
                localStorage.setItem('auth', JSON.stringify(response.data));
                navigate(location.state || '/');
            }
            else {
                toast.error(response.data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }

  return (
    <Layout title="Register - Ecommerce App" >
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h4 className='title'>Login Page</h4>
            
          <div className="mb-3">
              <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder='Email'
                  value = {email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
          </div>
          <div className="mb-3">
              <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  placeholder='Password'
                  value = {password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
          </div>  
          <div className='mb-3'>
            <button 
                type="button" 
                className="btn btn-primary" 
                onClick={() => {navigate('/forgot-password')}}
                >
                Forget Password
            </button>
          </div>
          <button type="submit" className="btn btn-primary">Log In</button>
  </form>
    </div>
  </Layout>
  )
}

export default Login
