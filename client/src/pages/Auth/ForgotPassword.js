import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/AuthStyle.css";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, newPassword, answer });

      if (response && response.data.success) {
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
    <Layout title='Forgot Password - Ecommerce App'>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className='title'>Reset Password</h4>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder='Enter Your Favourite Sports Name'
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder='Password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Reset</button>
        </form>
      </div>
    </Layout>
  )
}

export default ForgotPassword;
