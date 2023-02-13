import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCol
} from 'mdb-react-ui-kit';
import './main.css';
import {Link} from 'react-router-dom';

const Team = () => {
  return (
    <MDBContainer>
      <MDBRow style={{ textAlign: "center" }}>
        <h2 className='teamh2'>Our Team Members</h2>
        <div style={{height: "5px", width: "338px", backgroundColor: "black", marginLeft:"37%"}}></div>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <MDBCard className="text-black m-5">
            <MDBCardBody>
              <MDBRow style={{ height: "260px" }}>
                <img className='idimage2' src='./images/Image.PNG' alt='photo' />
              </MDBRow>
              <MDBRow style={{ textAlign: "center" }}>
                <h4>Web Co-ordinator</h4>
                <h5>IEEE CS-Society</h5>
                <MDBCol>
                  <Link to=''><i class="fa-brands fa-facebook"></i></Link>
                  <Link to=''><i class="fa-brands fa-linkedin"></i></Link>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol>
          <MDBCard className="text-black m-5">
            <MDBCardBody>
              <MDBRow style={{ height: "260px" }}>
                <img className='idimage2' src='./images/Image.PNG' alt='photo' />
              </MDBRow>
              <MDBRow style={{ textAlign: "center" }}>
                <h4>Web Co-ordinator</h4>
                <h5>IEEE CS-Society</h5>
                <MDBCol>
                  <Link to=''><i class="fa-brands fa-facebook"></i></Link>
                  <Link to=''><i class="fa-brands fa-linkedin"></i></Link>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol>
          <MDBCard className="text-black m-5">
            <MDBCardBody>
              <MDBRow style={{ height: "260px" }}>
                <img className='idimage2' src='./images/Image.PNG' alt='photo' />
              </MDBRow>
              <MDBRow style={{ textAlign: "center" }}>
                <h4>Web Co-ordinator</h4>
                <h5>IEEE CS-Society</h5>
                <MDBCol>
                  <Link to=''><i class="fa-brands fa-facebook"></i></Link>
                  <Link to=''><i class="fa-brands fa-linkedin"></i></Link>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  )
}

export default Team
