import React ,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import {Card,Col} from 'react-bootstrap';
import "./home.css";
export default function StudentDetails() {

    const {id}= useParams();
    const [student,setStudent] = useState({})
    const oneIdPrev = parseInt(id) > 1 ? parseInt(id)-1 : 1;
    const oneIdNext = parseInt(id)+1;
    useEffect(()=>{
        fetch(`http://608c1a829f42b20017c3d70f.mockapi.io/students/${id}`).then(res => res.json()).then(data =>setStudent(data))
    },[id])
    return (
        <div>
        <nav className="navbar navbar-light">
                <div className="container" >
                    <Link to="/students"><h4 className="btn btn-dark btn-lg btn-block">HOME </h4></Link>
                </div>
            </nav>
       
        <div>
            {student ? 
                <div className="studentcardWrapper">
                    <div className="studentcard">
                        <div className="detailHeader">
                            <div className="imageOuterWrapper">
                                <div className="imageWrapper">
                                    <img className="image" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt={student.name} />
                                </div>
                            </div>
                        </div>
                        <div className="card-body detailPaddingTop">
                            <div className="name">{`${student.firstname} ${student.lastname}`}</div>
                            <div className="department">
                                STUDENT OF CSE
                            </div>
                            <div className="font-bold text-center age">{`+91 ${student.phone}`}</div>
                            <div className="font-bold text-center age">{student.address}</div>
                        </div>
                        <div className="buttonsWrapper">
                            <div>
                                <Link to ={`/student/${oneIdPrev}`} style={{textDecoration:"none"}}><button className=" btn btn-warning"> Previous</button> </Link>
                            </div>
                            <div>
                                <Link to ={`/student/${oneIdNext}`} style={{textDecoration:"none"}}><button className=" btn btn-success"> Next</button> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                    
                    :<h2>Oops!!!.Details Notfound !!!</h2>}
        </div>
        </div>
    )
    
}
