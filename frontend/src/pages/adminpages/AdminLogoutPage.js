import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogoutPage = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        navigate('/adminlogin')

    },[])
  return (
    <div>
      
    </div>
  )
}

export default AdminLogoutPage
