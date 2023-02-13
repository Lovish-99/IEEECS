import React from 'react'
import {
    MDBCard,
} from 'mdb-react-ui-kit';
import './nav.css';

const Footer = () => {
    return (
        <div className='footer'>
            <MDBCard className='innercard' style={{backgroundColor: "grey", borderRadius: "0px"}}>
                <p className='para' style={{backgroundColor: "grey", color:"white"}}>
                    ©IEEE — All rights reserved. Use of this website signifies your agreement to the IEEE Terms and Conditions.
                    <br />A not-for-profit organization, the Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical
                    professional organization dedicated to advancing technology for the benefit of humanity.
                </p>
            </MDBCard>
        </div>
    )
}

export default Footer
