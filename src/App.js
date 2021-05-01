import React,{useEffect,useState} from 'react'
import './App.css'

import Students from './components/Home.jsx'
import Login from './components/Login'
import Signup from './components/Signup'
import StudentDetails from './components/studentDetails'
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
function App() {
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
    <div className="App">
      <div className="outer">
        <div >
        <Router>
          <Switch>
          <Route path="/" exact>
              <Signup/>
            </Route>
          
            
            <Route path ="/login" exact>
              <Login/>
            </Route>
            <Route path="/students" exact>
              <Students/>
            </Route>
            <Route path ="/student/:id" exact>
              <StudentDetails/>
            </Route>
          </Switch>
        </Router>
        </div>
      </div>
     
    </div>
  );
}

export default App;
