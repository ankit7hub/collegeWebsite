import React from 'react'
import SideBarComp from '../../components/admin/adminhome/SideBarComp'
import NavbarComp from '../../components/admin/adminhome/NavbarComp'
import { Col, Container, Row } from 'react-bootstrap'
import FooterComp from '../../components/admin/adminhome/FooterComp'
import UserRegComp from '../../components/users/UserRegComp'

const AdminHomePage = () => {
  return (
    <>
    <Container>
    <Row>
        <Col><NavbarComp/></Col>
      </Row>
      <Row>
      <Col><SideBarComp/></Col>
      <Col><UserRegComp/></Col>
      </Row>
      <Row>
        <Col><FooterComp/></Col>
      </Row>
    
    </Container>
    
     
    </>
  )
}

export default AdminHomePage
