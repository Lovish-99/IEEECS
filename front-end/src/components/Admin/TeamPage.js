import React from 'react';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBBtn,
} from 'mdb-react-ui-kit';

const TeamPage = () => {
  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBCard className='text-black m-5' style={{ borderRadius: '20px' }}>
        <MDBCardBody>
          <form>
            <MDBRow>
              <MDBCol md={2}>
                <label className="required" htmlFor="details">
                  Name :
                </label>
              </MDBCol>
              <MDBCol>
                <input
                  className="form-control"
                  type="text"
                  name="details"
                  id="details"
                  placeholder='Name of the Member'
                  required
                />
              </MDBCol>
            </MDBRow>
            
            <MDBRow style={{height: "30px"}}/>
            <MDBRow>
              <MDBCol md={2}>
                <label htmlFor="street">Designation :</label>
              </MDBCol>
              <MDBCol>
                <input
                  className="form-control"
                  type="text"
                  name="street"
                  id="street"
                  placeholder='Member Position in Club'
                  required
                />
              </MDBCol>
            </MDBRow>
            
            <MDBRow style={{height: "30px"}}/>
            <MDBRow>
              <MDBCol md={2}>
                <label htmlFor="street">Image :</label>
              </MDBCol>
              <MDBCol>
                <input
                  className="form-control"
                  type="file"
                  name="image"
                  id="image"
                />
              </MDBCol>
            </MDBRow>

            <MDBRow style={{height: "30px"}}/>
            <MDBRow>
              <MDBBtn>SAVE</MDBBtn>
            </MDBRow>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default TeamPage
