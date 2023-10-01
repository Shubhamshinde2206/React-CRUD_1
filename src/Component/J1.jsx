import React, { useState } from "react";
import './J1.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";




const J1 = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [input, setInput] = useState({
    name:'', 
    email:''
  })

  const history=useNavigate();
  
function postdata(e)
{
  e.preventDefault();
  // let data={name,email}
  axios.post("http://localhost:3000/posts",input)
  .then((res)=>{
    // console.log(res);
    alert('Data Added Sucessfully')
    history('/')
  })
}

  return (
    <>
      <div className="container">
        <h1 className="mb-3">Create</h1>
        <form onSubmit={postdata}>
          <div className="mb-3 ">
            <label className="form-label">Name</label>
            <input value={input.name} onChange={(e)=> setInput({...input,name:e.target.value})} type="text" className="form-control border-black" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input value={input.email} onChange={(e)=>setInput({...input,email:e.target.value})} type="email" className="form-control border-black" />
          </div>
             
          <button type="submit" className="btn btn-primary m-4 btn-lg">
            Save
          </button>
          <Link to="/">
          <button  type="button" className="btn btn-warning m-4 btn-lg">
            Back
          </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default J1;
