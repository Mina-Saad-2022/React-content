import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { Dates } from './Dates';

const Projects = () => {
  return (
    <header className="App-header ">
    <div className="container">
     <div className="row">
       <div className="col-12">
       <h2 className="p-2 fw-bold myText">Simple projects :</h2>
 
       <Tab.Container id="left-tabs-example" defaultActiveKey="Dates">
         <Row>
           <Col md={3} sm={12}>
             <Nav variant="pills" className="flex-column fw-bold text-center border p-2">
               <Nav.Item>
                 <Nav.Link eventKey="Dates">Dates Reminder</Nav.Link>
               </Nav.Item>
            
             </Nav>
           </Col>
 
           <Col md={9} sm={12}>
             <Tab.Content  className="border p-2">
               <Tab.Pane eventKey="Dates">{Dates()}</Tab.Pane>
         
             </Tab.Content>
           </Col>
         </Row>
       </Tab.Container>
       </div>
     </div>
    </div>
     </header>
  );
};

export { Projects };