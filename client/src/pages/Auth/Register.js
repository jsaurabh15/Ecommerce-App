import React, {useState} from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/AuthStyle.css";

const Register = () => {
    const [name, setName]  = useState("");
    const [email, setEmail]  = useState("");
    const [password, setPassword]  = useState("");
    const [phone, setPhone]  = useState("");
    const [address, setAddress]  = useState("");
    const [answer, setAnswer]  = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, 
            {name, email, password, phone, address, answer});

            if(response && response.data.success) {
                toast.success(response.data.message);
                navigate('/login');
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
            <h4 className='title'>Register Page</h4>
            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder='Name'
                    value = {name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
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
            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="phone" 
                    placeholder='Phone'
                    value = {phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control"
                    id="address" 
                    placeholder='Address'
                    value = {address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control"
                    id="answer" 
                    placeholder='What is your favorite sports?'
                    value = {answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    required
                />
            </div>
            
            <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
      </div>
    </Layout>
  )
}

export default Register
