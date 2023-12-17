import React from 'react';
import './Temp2.css';

const Temp1 = () => {

  const resumeData = {
      studentDetails: JSON.parse(sessionStorage.getItem('studentDetails')),
      educationDetails: JSON.parse(sessionStorage.getItem('educationDetails')),
      additionalDetails: JSON.parse(sessionStorage.getItem('additionalDetails')),
      personalDetails: JSON.parse(sessionStorage.getItem('personalDetails')),
    }
      const { studentDetails, educationDetails, additionalDetails, personalDetails } = resumeData;
  console.log(resumeData)
  
  return (
    <div>
      <div className="name">
        <b>VISHNU D</b>
      </div>
      <div className="content">
        <div className="left">
          <img src="/images/CV-Template-01.jpg" width="150px" height="200px" alt="Profile" />
          <br />
          <br />
          <b>Mail Id : </b>
          <a href="mailto:vishnuduraisamy2002@gmail.com">vishnuduraisamy2002@gmail.com</a>
          <br />
          <b>Contact :</b>
          <a href="">8778847843</a>
          <div>
            <b id="ad">Address :</b>
            <address className="is">8/160-1, EB office North side, Mallasamudram(PO),Thiruchengode(TK), Namakkal (DT) - 637 503.</address>
          </div>
          <b>LinkedIn ID :</b>
          <br />
          <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit">https://www.linkedin.com/</a>
          <br />
          <b>Objective :</b>
          <p className="is">To pursue a career in the field of electronics and communication engineering by being a part of progressive organization where I can work towards the growth of the organization and harness the best of my career.</p>
          <b>Personal Details :</b>
          <p>Date of Birth : 26/03/2002</p>
          <p>Gender : Male</p>
          {/* Add the rest of the personal details */}
          <b>Skills :</b>
          <ul>
            <li>c programming</li>
            <li>c++ basics</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVA Script</li>
          </ul>
          <b>Interests :</b>
          <ul>
            <li>IoT</li>
            <li>Software Development</li>
            <li>Embedded System</li>
            <li>Problem Solving</li>
            <li>Fast Learner</li>
          </ul>
        </div>

        <div className="right">
          <b>Education :</b><br />
          <h2> Bachelor Of Engineering (ECE):</h2>
          <h3> AVS Engineering College - 87% -  2023</h3>
          <h2> HSC :</h2>
          <h3>AKV Matric Hr.sec School - 84% - 2019</h3>
          <h2> SSLC :</h2>
          <h3>AKV Matric Hr.sec School - 96% - 2017</h3>
          <b>Projects :</b>
          <h2>Smart solution for Railways</h2>
          <p>A Web page is designed for the public where they can book tickets by seeing the available seats. After booking the train, the person will get a QR code which has to be shown to the Ticket Collector while boarding the train. The ticket collectors can scan the QR code to identify the personal details.</p>
          <h3>tools used :</h3>
          <p>Python IDLE, NODE-RED Service, IBM Watson IoT Platform, Cloudant DB.</p>
          <b>Certification :</b>
          <h3>Certification on java programming (basics) at Great Learning Academy on July 2022.</h3>
          <b>Webinar :</b>
          <p>
            <ul>
              <li>Webinar on “Reliability Science & Technology” on 06.03.2022 at Educare Taiwan.</li>
              <li>Webinar on “ Real Time Information” on 11.09.2022 at Educare Taiwan.</li>
            </ul>
          </p>
          <b>Internship Trainings :</b>
          <p>
            <ul>
              <li>Internship Training on “IoT” on 15.02.2022 at Odunga Tech Pvt.Ltd.</li>
              <li>Internship Training on “Embedded System” on 24.02.2022 to 26.02.2022 at Tripple Tech Pvt.Ltd.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Temp1;
