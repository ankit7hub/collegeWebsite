import React from 'react'
import SideBarComp from '../../components/admin/adminhome/SideBarComp'
import NavbarComp from '../../components/admin/adminhome/NavbarComp'
import { Col, Container, Row, Table } from 'react-bootstrap'
import FooterComp from '../../components/admin/adminhome/FooterComp'
import UserRegComp from '../../components/users/UserRegComp'

const CourseDisplayPage = () => {
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
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
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

export default CourseDisplayPage
