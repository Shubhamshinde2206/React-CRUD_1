import React, { useEffect, useState } from 'react'
import './Update.css'
import { Link , useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const Update = () => {
  const {id}=useParams();
 
  const [inputdata, setInputdata] = useState({
    name:'',
    email:''
  });
  

  // In Update function first you GET the data and then PUT
  //Below code to GET Data with the help of id
    function getdata()
    {
      axios.get(`http://localhost:3000/posts/`+id)
      .then((res)=>{
        setInputdata(res.data)
      })
    }
     
    useEffect(()=>{
      getdata();
  
    },[])


   //Below code to Update data in field
  const history=useNavigate();
  
  function postdata(e)
  {
    e.preventDefault();
    axios.put(`http://localhost:3000/posts/`+id,inputdata)
    .then((res)=>
    {
      alert('Data Update Sucessfully')
      history('/');
      
    })
  }

  return (
    <>
      <div className="container">
        <h1 className="mb-3">Update</h1>
        <form onSubmit={postdata}>
          <div className="mb-3 ">
            <label className="form-label">Name</label>
            <input value={inputdata.name} onChange={(e)=> setInputdata({...inputdata,name:e.target.value})} type="text" className="form-control border-black" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input value={inputdata.email}  onChange={(e)=> setInputdata({...inputdata,email:e.target.value})} type="email" className="form-control border-black" />
          </div>

          <button type="submit" className="btn btn-primary m-4 btn-lg">
            Update
          </button>
          <Link to="/">
            <button type="button" className="btn btn-warning m-4 btn-lg">
            Back
            </button>
          </Link>
          
        </form>
      </div>
    </>
  )
}

export default Update
