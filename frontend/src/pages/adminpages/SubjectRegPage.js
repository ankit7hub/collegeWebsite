import React from 'react'
import SideBarComp from '../../components/admin/adminhome/SideBarComp'
import NavbarComp from '../../components/admin/adminhome/NavbarComp'
import { Col, Container, Row } from 'react-bootstrap'
import FooterComp from '../../components/admin/adminhome/FooterComp'
import UserRegComp from '../../components/users/UserRegComp'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

const SubjectRegPage = () => {
  return (
    <>
    <Container>
    <Row>
        <Col><NavbarComp/></Col>
      </Row>
      <Row>
      <Col><SideBarComp/></Col>
      <Col>
      <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Course Register</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Course Name' id='form1' type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Sem' id='form2' type='number' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Subject Name' id='form2' type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Subject Type' id='form2' type='text'/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Subject Max Marks' id='form2' type='number'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Subject Desc' id='form4' type='text'/>
              </div>

              <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

            </MDBCol>


          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
      </Col>
      </Row>
      <Row>
        <Col><FooterComp/></Col>
      </Row>
    
    </Container>
    
     
    </>
  )
}

export default SubjectRegPage
