import React, { useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function AdminLoginComp() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const naviagte = useNavigate();
  const ChkLogin=()=>{
    if(email==="admin"&&password==="12345")
      naviagte('/adminhome')
    else
      alert("ID or Password Not Matched...") 
  }

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <br/>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign In Form<br/></p>
          </div>
          <br/>

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e)=>setEmail(e.target.value)} />
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"  onChange={(e)=>setPassword(e.target.value)}  />


          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg' onClick={()=>ChkLogin()} >Login</MDBBtn>
          </div>
        
        </MDBCol>

      </MDBRow>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0">
          Copyright © 2023. All rights reserved. PIMRG Students
        </div>

        <div>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='twitter' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='google' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='linkedin-in' size="md"/>
          </MDBBtn>

        </div>

      </div>

    </MDBContainer>
  );
}

export default AdminLoginComp;