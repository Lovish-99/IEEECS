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
            The IEEE Computer Society is the premier source for information, inspiration and collaboration in computer science and engineering.
            <br />
            Connecting memebers worldwide, the Computer Society empowers and acknowledges the people who advance technology by delivering tools for individuals at all stages of their professional careers.
            <br />
            Our trusted resource includes international conferences, peer-reviewed publications, a robust digital library, globally recognised standards , and continouus learning opportunities.
          </p>
        </MDBRow>
        
        <MDBRow style={{ height: "20px" }}></MDBRow>
        <MDBRow>
          <h1>Our Mission & Vision</h1>
          <ul style={{ textAlign: "justify" }}>
           <li>IEEE Computer Society of ZHCET encourages the creation of spaces for the advancement of upcoming technologies, serving as a bridge between cutting-edge research and realities of industry and society  
            </li>
            <li>
             Technical fields related to machine learing, artificial intelligence, cryptography, blockchain technology, software-based websites and application development will be promoted through the induction of supervised projects.
            </li>
            <li>
             Engaging and promoting student activities through the conduction of various hands-on workshops followed by competitions to enhance student knowledge.
          </li>
          <li>
            Scope for craft and ideas is to be promoted among students so they are well-equipped in solving real-world technical problems.
          </li>
          </ul>
        </MDBRow>

        <MDBRow style={{ height: "40px" }}></MDBRow>
        <MDBRow>
          <MDBCol md={3} style={{textAlign: "center"}}>
            <img className='idimage' src='./images/Image.PNG' alt='guideimg' />
          </MDBCol>
          <MDBCol md={9}>
            <MDBCard style={{borderRadius: "0px"}}>
              <h1 className='cardmess'>Message from the Vice-Chancellor</h1>
            </MDBCard>
            <p style={{ textAlign: "justify",marginTop: "10px" }}>
              I am happy to learn that the students of Zakir Hussain College of Engineering and Technology have instituted a Student Chpater of IEEE computer society and that they are ublishing a Newsletter. 
              <br />
              Newsletters play a vital role in disseminating inofrmation, motivating and promoting camaraderie amongst the students. It also reflects the cultural and ethical vlaues that are being practiced on campus.I am confident that this Newsletter will provide a platform for the promotion of scientific and literary activities and endeavours of the students. It will also include exhaustive information of latest technoligical developments in the field.
              <br />
              I commend the efforts of the editorial team of the Newsletter, the members of the Student Chapter of IEEE Computer Society and the teachers who are the guiding force for our talented students and wish you all success in your endeavours.
            </p>
          </MDBCol>
        </MDBRow>

        <MDBRow style={{ height: "40px" }}></MDBRow>
        <MDBRow>
          <MDBCol md={9}>
            <MDBCard style={{borderRadius: "0px"}}>
              <h1 className='cardmess'>Message from the Principal</h1>
            </MDBCard>
            <p style={{ textAlign: "justify",marginTop: "10px" }}>
              It overwhelms me to know that the IEEE Computer Society (IEEE-CS)Chapter under the IEEE Students' branch is bringing out their Newsletter. I got personally attached to the club's activities as it is very much connected to my personal discipline. Although there are numerous clubs grinding hard in th ecollege; this extension is cut above and has its own identity. 
              <br />
              The pupils' ingenuity to bring out this newsletter is highly credible as it shows their sincerity, dedication and hard work. This is not only going to help our students showcase their ideas but will also cater the people from non-tech bachgrounds to think in the same direction.This is not only going to favour their future but will also add another feature in the institution's hat, as it will reflect the dynamism of the students here.
              <br />
               I commend all of the IEEE Computer Society members for bringing out this newsletter and sending them my best wishes for the future.
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
              <h1 className='cardmess'>Message from Vice-Chair</h1>
            </MDBCard>
            <p style={{ textAlign: "justify",marginTop: "10px" }}>
             I am delighted to bring greetings in this issue of Vol.1 of the IEEE Computer Society ZHCET Newsletter 2022. IEEE is the world's largest proffessional body working twords the advancement of technology for humanity. IEEE and its members inspire a global community through IEEE's highly cited publications, conferences, technology standards, and professional and educational activities.The IEEE Uttar Pradesh Section was established on May 11th, 1992, and is the controlling body of 
             all types of IEEE- related activities in the state of Uttar Pradesh, India.
              <br />
            Today's technical world is expanding at the speed of thought and has numerous options for excellence. Professional societies provide a forum for like-minded people to exchange ideas, views and information. It gives us ample opportunities to keep ourselves abreast of emerging technologies and create networks with other students with whom we can share experiences, share common goals, concerns and prespectives.Our IEEE Computer Society at AMU does just that. I'd like to thank the incredible team of faculty advisors and student members who worked tirelessly to bring innovation and dexterity 
            to anyone with an inquisitive mind through the IEEE Computer Society. Indeed, making itself a valuable asset to the IEEE Student Branch at AMU.A platform like this one fosters innovation, creativity and excellence in our students by bringing various technical workshops, research projects, seminars, and application of knowledge in real-world situations to the table.
              <br />
            I would like to extend my sincere congratulations to the IEEE Computer Society on release of this bulletin. I wish for the success and bright future of the IEEE Computer Society.
            </p>
          </MDBCol>
        </MDBRow>

        <MDBRow style={{ height: "40px" }}></MDBRow>
        <MDBRow>
          <MDBCol md={9}>
            <MDBCard style={{borderRadius: "0px"}}>
              <h1 className='cardmess'>Message from the Chapter-Advisor </h1>
            </MDBCard>
            <p style={{ textAlign: "justify",marginTop: "10px" }}>
             The IEEE Computer Society is the premier source of information, inspiration, and collaboration in computer science and engineering.
              <br />
            The IEEE Uttar Pradesh Section is expanding. I am delighted to present the IEEE Computer Society Student Branch Chapter at Zakir Husain College of Engineering and Technology (ZHCET), AMU. I am optimistic that this chapter at ZHCET will thrive under our enthusiastic and stuanch members in the upcoming years.
            <br />
              This chapter at ZHCET encompasses enthusiastic members from academia. Th emission of IEEE Computer Society Student Branch ZHCET is to promote the use of technology to influence the quality of life in society. The goal is to drive an undestanding of technology impacts that are of societal importance and benefit humanity. We look forward to learning, networking, collaborating and sharing ideas regarding the theroy and practice sof all aspects of somputer science and engineering while promoting professional development through student-led talks and outreach activities.
           <br />
            I am exceedingly joyful to introduce this inaugral issue of the IEEE Compyer Society ZHCET newsletter to all our students, adherent members,and faculty members. Through this newsletter,we have made a modest attempt to disseminate teh inception of this chapter an alert all eager to our vison and mission. We plan to achieve the goal of keeping you well-informed about all our pursuits and venture sin this newly commenced addition to our broad IEEE community. I believe this enterprise will thrive under our dynamic student member sand achieve all the expectations in both industrial and academic research domains. I wish IEEE CS SBC-ZHCET the best of luck in its future endeavours 
            </p>
          </MDBCol>
          <MDBCol md={3} style={{textAlign: "center"}}>
            <img className='idimage' src='./images/Image.PNG' alt='guideimg' />
          </MDBCol>
        </MDBRow>

        <MDBRow className='extra'></MDBRow>
      </MDBContainer>
    </div>
  )
}

export default Home
