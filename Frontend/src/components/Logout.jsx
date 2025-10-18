import React from 'react'
import User from '../../../Backend/model/user.model';
import { useAuth } from '../context/AuthProvider.jsx';
import { toast } from 'react-hot-toast';

const Logout = () => {
    const [authUser,setAuthUser]=useAuth();
    const handleLogout=()=>{
        try{
            setAuthUser({
                ...authUser,
                User:null
            })
            localStorage.removeItem("Users");
            toast.success("Logout successful");
            
             
      setTimeout(() => {
        
        window.location.reload();
   
        
      }, 1500);
           
        }
        catch(err){
            toast.error("Error: " + err);
            setTimeout(() => {},1500);
        }
    }
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-whtie rounded-md cursor-pointer' 
        onClick={handleLogout}
        >Logout</button>
    </div>
  )
}

export default Logout