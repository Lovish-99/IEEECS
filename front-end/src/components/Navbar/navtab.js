import React from 'react';
import {
    MDBRow,
    MDBCol,
} from "mdb-react-ui-kit";
import './nav.css';
import { Link } from 'react-router-dom';

const Navtab = () => {
    return (
        <div className='navdiv'>
            <MDBRow>
                <MDBCol md={1}>
                    <Link className='linkclass' to="https://www.ieee.org/">IEEE.org</Link>
                </MDBCol>
                <MDBCol md={1}>
                    <Link className='linkclass' to="https://www.computer.org/volunteering/boards-and-committees/standards-activities/home">Standards</Link>
                </MDBCol>
                <MDBCol md={1}>
                    <Link to="https://jobs.computer.org/" className='linkclass'>Jobs Board</Link>
                </MDBCol>
                <MDBCol md={1}>
                    <Link to="https://www.computer.org/about" className='linkclass'>About US</Link>
                </MDBCol>
                <MDBCol md={6}></MDBCol>
                <MDBCol md={2}>
                    <Link to="/login"><img src='./images/ieee-logo.png' alt='logo' /></Link>
                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default Navtab
