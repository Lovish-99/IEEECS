import React from 'react';
import { MDBCard, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import Slider from '../Slideshow/slide';
import './main.css';

const Home = () => {
  return (
    <div>
      <MDBContainer>
        <MDBRow><Slider /></MDBRow>
        
        <MDBRow style={{ height: "20px" }}></MDBRow>
        <MDBRow>
          <h1>About Us</h1>
          <p style={{ textAlign: "justify" }}>
            IEEE – Institute of Electrical and Electronics Engineers, as defined by the official website ieee.org is the professional home for the engineering and technology community worldwide.
            <br />
            Being the largest-technical professional organization, IEEE and its members inspire a global community to innovate for a better tomorrow through highly cited publications, conferences, technology standards, and professional and educational activities. IEEE defines its mission as fostering technological innovation and excellence for the benefit of humanity. IEEE is the trusted “voice” for engineering, computing, and technology information around the globe.
            <br />
            Having over 4 lakh members from more than 160 countries worldwide, IEEE houses more than 1 lakh student members, providing them with a professional shelter. With 39 technical societies, ten geographic regions that host over 10,000 local meetings annually, several affinities and special interest groups, humanitarian opportunities, and virtual communities and private groups through IEEE IEEE collaborate®, IEEE offers ample opportunity to network and grow professionally through communities
          </p>
        </MDBRow>
        
        <MDBRow style={{ height: "20px" }}></MDBRow>
        <MDBRow>
          <h1>Our Mission & Vision</h1>
          <p style={{ textAlign: "justify" }}>
            IEEE – Institute of Electrical and Electronics Engineers, as defined by the official website ieee.org is the professional home for the engineering and technology community worldwide.
            <br />
            Being the largest-technical professional organization, IEEE and its members inspire a global community to innovate for a better tomorrow through highly cited publications, conferences, technology standards, and professional and educational activities. IEEE defines its mission as fostering technological innovation and excellence for the benefit of humanity. IEEE is the trusted “voice” for engineering, computing, and technology information around the globe.
            <br />
            Having over 4 lakh members from more than 160 countries worldwide, IEEE houses more than 1 lakh student members, providing them with a professional shelter. With 39 technical societies, ten geographic regions that host over 10,000 local meetings annually, several affinities and special interest groups, humanitarian opportunities, and virtual communities and private groups through IEEE IEEE collaborate®, IEEE offers ample opportunity to network and grow professionally through communities
          </p>
        </MDBRow>

        <MDBRow style={{ height: "40px" }}></MDBRow>
        <MDBRow>
          <MDBCol md={3} style={{textAlign: "center"}}>
            <img className='idimage' src='./images/Image.PNG' alt='guideimg' />
          </MDBCol>
          <MDBCol md={9}>
            <MDBCard style={{borderRadius: "0px"}}>
              <h1 className='cardmess'>Message from Person</h1>
            </MDBCard>
            <p style={{ textAlign: "justify",marginTop: "10px" }}>
              IEEE – Institute of Electrical and Electronics Engineers, as defined by the official website ieee.org is the professional home for the engineering and technology community worldwide.
              <br />
              Being the largest-technical professional organization, IEEE and its members inspire a global community to innovate for a better tomorrow through highly cited publications, conferences, technology standards, and professional and educational activities. IEEE defines its mission as fostering technological innovation and excellence for the benefit of humanity. IEEE is the trusted “voice” for engineering, computing, and technology information around the globe.
              <br />
              Having over 4 lakh members from more than 160 countries worldwide, IEEE houses more than 1 lakh student members, providing them with a professional shelter. With 39 technical societies, ten geographic regions that host over 10,000 local meetings annually, several affinities and special interest groups, humanitarian opportunities, and virtual communities and private groups through IEEE IEEE collaborate®, IEEE offers ample opportunity to network and grow professionally through communities
            </p>
          </MDBCol>
        </MDBRow>

        <MDBRow style={{ height: "40px" }}></MDBRow>
        <MDBRow>
          <MDBCol md={9}>
            <MDBCard style={{borderRadius: "0px"}}>
              <h1 className='cardmess'>Message from Person</h1>
            </MDBCard>
            <p style={{ textAlign: "justify",marginTop: "10px" }}>
              IEEE – Institute of Electrical and Electronics Engineers, as defined by the official website ieee.org is the professional home for the engineering and technology community worldwide.
              <br />
              Being the largest-technical professional organization, IEEE and its members inspire a global community to innovate for a better tomorrow through highly cited publications, conferences, technology standards, and professional and educational activities. IEEE defines its mission as fostering technological innovation and excellence for the benefit of humanity. IEEE is the trusted “voice” for engineering, computing, and technology information around the globe.
              <br />
              Having over 4 lakh members from more than 160 countries worldwide, IEEE houses more than 1 lakh student members, providing them with a professional shelter. With 39 technical societies, ten geographic regions that host over 10,000 local meetings annually, several affinities and special interest groups, humanitarian opportunities, and virtual communities and private groups through IEEE IEEE collaborate®, IEEE offers ample opportunity to network and grow professionally through communities
            </p>
          </MDBCol>
          <MDBCol md={3} style={{textAlign: "center"}}>
            <img className='idimage' src='./images/Image.PNG' alt='guideimg' />
          </MDBCol>
        </MDBRow>

        <MDBRow style={{ height: "40px" }}></MDBRow>
        <MDBRow>
          <MDBCol md={3} style={{textAlign: "center"}}>
            <img className='idimage' src='./images/Image.PNG' alt='guideimg' />
          </MDBCol>
          <MDBCol md={9}>
            <MDBCard style={{borderRadius: "0px"}}>
              <h1 className='cardmess'>Message from Person</h1>
            </MDBCard>
            <p style={{ textAlign: "justify",marginTop: "10px" }}>
              IEEE – Institute of Electrical and Electronics Engineers, as defined by the official website ieee.org is the professional home for the engineering and technology community worldwide.
              <br />
              Being the largest-technical professional organization, IEEE and its members inspire a global community to innovate for a better tomorrow through highly cited publications, conferences, technology standards, and professional and educational activities. IEEE defines its mission as fostering technological innovation and excellence for the benefit of humanity. IEEE is the trusted “voice” for engineering, computing, and technology information around the globe.
              <br />
              Having over 4 lakh members from more than 160 countries worldwide, IEEE houses more than 1 lakh student members, providing them with a professional shelter. With 39 technical societies, ten geographic regions that host over 10,000 local meetings annually, several affinities and special interest groups, humanitarian opportunities, and virtual communities and private groups through IEEE IEEE collaborate®, IEEE offers ample opportunity to network and grow professionally through communities
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className='extra'></MDBRow>
      </MDBContainer>
    </div>
  )
}

export default Home
