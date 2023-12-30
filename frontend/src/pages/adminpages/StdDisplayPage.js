import React, { useState,useEffect } from 'react'
import SideBarComp from '../../components/admin/adminhome/SideBarComp'
import NavbarComp from '../../components/admin/adminhome/NavbarComp'
import { Col, Container, Row, Table } from 'react-bootstrap'
import FooterComp from '../../components/admin/adminhome/FooterComp'
import axios from "axios";


const StdDisplayPage = () => {
  const [user, setdata] = useState([])
  const getData=async ()=>{
     
    
      const data =await axios.get("http://localhost:8080/api/v1/user/display");
      setdata(data.data.user)
      // const re=await fetch("http://localhost:8080/api/v1/user/display")
      // const res=await re.json()
      // console.log(res)

  }
  useEffect(()=>{
      getData()
  },[])
  return (
    <>
    <Container>
    <Row>
        <Col><NavbarComp/></Col>
      </Row>
      <Row>
      <Col><SideBarComp/></Col>
      <Col>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Email</th>
          <th>password</th>
        </tr>
      </thead>
      <tbody>
      {user.map((dt,i)=>
      <>
        <tr>
          <th scope='row'>{i}</th>
          <td>{dt.userName}</td>
          <td>{dt.userEmail}</td>
          <td>{dt.userPass}</td>
         

        </tr>
      </>)}
        
      </tbody>
    </Table>
      </Col>
      </Row>
      <Row>
        <Col><FooterComp/></Col>
      </Row>
    
    </Container>
    
     
    </>
  )
}

export default StdDisplayPage
