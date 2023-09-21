import React , {useState, useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth'
import axios from 'axios';
import toast  from 'react-hot-toast';

const Profile = () => {

  const [auth, setAuth] = useAuth();

  const [name, setName]  = useState("");
  const [email, setEmail]  = useState("");
  const [password, setPassword]  = useState("");
  const [phone, setPhone]  = useState("");
  const [address, setAddress]  = useState("");


  //get use data
  useEffect(() => {
    const {email, phone, address,name} = auth?.user;
    setName(name);
    setAddress(address);
    setPhone(phone);
    setEmail(email);
  },[auth?.user])


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const {data} = await axios.put(`${process.env.REACT_APP_API}/api/v1/auth/profile`, 
        {name, email, password, phone, address});

        if(data?.error) {
          toast.error(data?.error)
        }
        else {
         setAuth({...auth,  user: data?.updatedUser})
         let userDetails = localStorage.getItem("auth");
         userDetails = JSON.parse(userDetails);
         userDetails.user = data.updatedUser;
         localStorage.setItem("auth", JSON.stringify(userDetails));
         toast.success("Profile updated successfully");
        }

    } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
    }
}

  return (
    <Layout title=" My Profile">
      <div className="container-fluid m-3 p-3">
        <div className="row">
            <div className="col-md-3">
                <UserMenu />
            </div>
            <div className="col-md-9">
            <div className="form-container">
        <form onSubmit={handleSubmit}>
            <h4 className='title'>User Profile</h4>
            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder='Name'
                    value = {name}
                    onChange={(e) => setName(e.target.value)}
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
                    disabled
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
                />
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
    </form>
      </div>
            </div>

        </div>
      </div>
    </Layout>
  )
}

export default Profile
