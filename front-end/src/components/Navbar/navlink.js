import React from 'react';
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBBtn,
} from "mdb-react-ui-kit";
import './nav.css';
import { Link, useNavigate } from 'react-router-dom';

const Navlink = () => {
    const auth = localStorage.getItem("userdata");
    console.warn(auth);
    const shoot = () => {
        if (auth) {
            const val = JSON.parse(localStorage.getItem("userdata")).designation;
            const name = JSON.parse(localStorage.getItem("userdata")).firstName;
            if (val != "Admin") {
                return <ul>
                    <li><Link className='linkclass' to="/">Home</Link></li>
                    <li><Link className='linkclass' to="/teams">Team</Link></li>
                    <li><Link className='linkclass' to="/events">Events</Link></li>
                    <li><Link className='linkclass' to="/gallery">Gallery</Link></li>
                </ul>;
            }
            else {
                return <ul>
                    <li><Link className='linkclass' to="/">Home</Link></li>
                    <li><Link className='linkclass' to="/admin">Hi {val}</Link></li>
                </ul>
            }
        }
    }
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/');
    }
    return (
        <div className='navlink'>
            <MDBCard>
                {
                    auth ?
                        <MDBRow>
                            <MDBCol md={5}>
                                <img alt='ieeecs-logo' src='./images/Capture.PNG' />
                            </MDBCol>
                            <MDBCol md={5}>
                                {shoot()}
                            </MDBCol>
                            <MDBCol md={1}><MDBBtn onClick={() => logout()} style={{marginTop: "10px"}}>Logout</MDBBtn></MDBCol>
                        </MDBRow>
                        :
                        <MDBRow>
                            <MDBCol md={5}>
                                <img alt='ieeecs-logo' src='./images/Capture.PNG' />
                            </MDBCol>
                            <MDBCol md={5}>
                                <ul>
                                    <li><Link className='linkclass' to="/">Home</Link></li>
                                    <li><Link className='linkclass' to="/teams">Team</Link></li>
                                    <li><Link className='linkclass' to="/events">Events</Link></li>
                                    <li><Link className='linkclass' to="/gallery">Gallery</Link></li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                }

            </MDBCard>
        </div>
    )
}

export default Navlink
