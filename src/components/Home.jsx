import React from 'react';
import {useState,useEffect} from 'react'
import {Card,Button, Container ,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './home.css'
export default function Home() {
    const[studentList,setStudentList]=useState([])
    useEffect(() => {
      async function fetchList()
      {
         try
         {
             const apiurl='https://608c1a829f42b20017c3d70f.mockapi.io/students';
             const response=await fetch(apiurl);
             const responseJSON=await response.json();
             console.log(responseJSON);
             setStudentList(responseJSON);
         }
         catch
         {
  
         }
      }
      fetchList();
    }, [])
    
    return (
        <div>
              
            
               <Container>
               <Row>
                   {studentList.map(
                    student => <Col md={4} > <Card style={{ width: '18rem',marginBottom:'10px' }} >
                    <Card.Body className="d-flex justify-content-center">
                        <div className="front-content">
                            <div className="name">{student.name}</div>
                            <div className="department">
                                STUDENT OF CSE
                            </div>
                            <div className="mb-2 text-muted age">{student.age}</div>
                            <div className="mb-2 text-muted dob">{student.dob}</div>
                            <div className="morebutton">
                                <Link to={`/student/${student.id}`} className="button" > View Details</Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>  
                </Col>                
                )}
                </Row >
                </Container > 
            
            
        </div>
    )
}
