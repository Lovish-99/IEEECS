import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCol
} from 'mdb-react-ui-kit';
import './main.css';
import { Link } from 'react-router-dom';

const Event = () => {
  return (
    <MDBContainer>
      <MDBRow style={{ textAlign: "center" }}>
        <h2 className='teamh2'>Our Past Events</h2>
        <div style={{height: "5px", width: "330px", backgroundColor: "black", marginLeft:"37%"}}></div>
      </MDBRow>
      <MDBRow style={{height: "30px"}}></MDBRow>
      <MDBRow>
        <MDBCard>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md={3}><img src='./images/IEEE-CS_Logo.png' alt='tag'/></MDBCol>
              <MDBCol md={9}>
                <h6>Event DATE: <i class="fa-solid fa-calendar-check"></i></h6>
                <h3>Event Name</h3>
                <p>Event Tag Line</p>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
    </MDBRow>

    <MDBRow style={{height: "30px"}}></MDBRow>
      <MDBRow>
        <MDBCard>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md={3}><img src='./images/IEEE-CS_Logo.png' alt='tag'/></MDBCol>
              <MDBCol md={9}>
                <h6>Event DATE: <i class="fa-solid fa-calendar-check"></i></h6>
                <h3>Event Name</h3>
                <p>Event Tag Line</p>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
    </MDBRow>

    <MDBRow style={{height: "30px"}}></MDBRow>
      <MDBRow>
        <MDBCard>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md={3}><img src='./images/IEEE-CS_Logo.png' alt='tag'/></MDBCol>
              <MDBCol md={9}>
                <h6>Event DATE: <i class="fa-solid fa-calendar-check"></i></h6>
                <h3>Event Name</h3>
                <p>Event Tag Line</p>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
    </MDBRow>
    </MDBContainer >
  )
}

export default Event
