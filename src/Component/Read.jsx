import React from "react";
import './Read.css'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";



const Read = () => {

  const [inputdata, setInputdata] = useState([])
  const [search, setSearch] = useState('')


// get data from the server
  function getdata()
  {
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
      setInputdata(res.data)
    })
  }
   
  useEffect(()=>{
    getdata();

  },[])
  
  // delete data and call get data
  const handleDelete=(id)=>{
    axios.delete(`http://localhost:3000/posts/${id}`)
    .then(()=>{
      getdata();
      alert('Data Delete Sucessfully')
    })
    
  }
  const handlesearch=(e)=>{
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <>
      <div className="container" id="update">
        <div id="heading">
       <h1 className="">Read</h1>
       <input onChange={handlesearch} class="form" type="search" placeholder="Search here"/>
        <Link to="/create">
              <button className="btn btn-primary btn-lg">Add Data</button>
        </Link>
        </div>
        <hr/>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {
               inputdata.filter((ele)=>{
                if(ele===""){
                  return ele;
                }else{
                  return(
                    ele.name.toLowerCase().includes(search)||
                    ele.email.toLowerCase().includes(search)
                  )
                }
               }).map((item,i)=>{
                return(
                 <tbody>
                     <tr>
                     <th key={i} scope="row">{item.id}</th>
                     <td>{item.name}</td>
                     <td>{item.email}</td>
                     <td>
                       <Link to={`/update/${item.id}`}>
                       <button className="btn btn-warning m-1">Edit</button>
                       </Link>
                       <button onClick={()=>handleDelete(item.id)} className="btn btn-danger">Delete</button>
                     </td>
                     </tr>
                 </tbody>
            )
             })
          }
        </table>
      </div>
    </>
  );
};

export default Read;
