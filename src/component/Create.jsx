import { useState } from 'react';
import React from "react";
import '../CSS/Create.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    // const [name, setName] = useState("")// no need to create seprate usestate
    // const [email, setEmail] = useState("")
    //usestate with an object
    const[input,setInput]=useState({
      name:'',
      email:''
    })
    const history=useNavigate();

   const handlesubmit= (e) =>{
    e.preventDefault();
    axios.post('https://64fdd12b596493f7af7ea049.mockapi.io/react-crud',input)
     .then(()=>{
       history("/read");  
    }) 
    };


  return (
    <>
      <div className="container shadow-sm">
        <div>
          <h2 className="mb-4">Create</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control border-black"
                value={input.name} onChange={(e)=>setInput({...input,name:e.target.value})}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control border-black"
              value={input.email} onChange={(e)=>setInput({...input,email:e.target.value})} />
            </div>  
            <button onClick={handlesubmit} type="submit" className="btn btn-primary mt-4">
              Save
            </button>
            <Link to="/read">
          <button  id="show" className='btn btn-warning'>Show Data</button>
          </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
