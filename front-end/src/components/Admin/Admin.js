import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBBtnGroup
} from 'mdb-react-ui-kit';
import { Link, Outlet } from 'react-router-dom';

function Admin() {
  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <h2 className='text-center bg-success text-bg-dark p-2'>ADMIN PANEL</h2>
        <MDBRow>
          <h2 style={{height:"40px"}}></h2>
          <MDBBtnGroup horizontal style={{padding: "10px"}}>
            <MDBCol md={4} style={{textAlign: "center"}}><Link to="/admin/editteam" ><MDBBtn>IEEE-CS Team</MDBBtn></Link></MDBCol>
            <MDBCol md={4} style={{textAlign: "center"}}><Link to="/admin/editevent"><MDBBtn>IEEE-CS Events</MDBBtn></Link></MDBCol>
            <MDBCol md={4} style={{textAlign: "center"}}><Link to="/admin/editgallery"><MDBBtn>IEEE-CS Gallery</MDBBtn></Link></MDBCol>
          </MDBBtnGroup>
        </MDBRow>
        
        <MDBRow>
          <Outlet/>
        </MDBRow>
      </MDBRow>
    </MDBContainer>
  )
}

export default Admin
