import React from "react";
import "../CSS/Read.css";
import axios from "axios";
import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
    const [idata, setIdata] = useState([])
    const[dark,setDark]=useState('') //for dark theme
    const [search, setsearch] = useState('') //for search bar
    const[loading,setLoading]=useState(false)
    

     //GET data From the API

    function getdata(){
        axios.get("https://64fdd12b596493f7af7ea049.mockapi.io/react-crud")
        .then((res)=>{
              setIdata(res.data)
              setLoading(true)
              
        })
    };
     useEffect(()=>{
      getdata();

     },[])
    
    //Delete  into APi 
    function handleDelete(id){
        axios.delete(`https://64fdd12b596493f7af7ea049.mockapi.io/react-crud/${id}`)
        .then(()=>{
            getdata();
        })
    }

    // const setlocalstorage=(id,name,email)=>
    // {
    //   localStorage.setItem("id",id);
    //   localStorage.setItem("name",name);
    //   localStorage.setItem("email",email);
    // }

    function handlesearch(e){
      setsearch(e.target.value.toLowerCase())
    }
  return (
    <>
      <div className="container" id="read">

      <div className="form-check form-switch">
       <input className="form-check-input" type="checkbox"
       onClick={()=>{
            if(dark===`table-dark`){
              setDark("")
            }else{
              setDark(`table-dark`)
            }
       }} />
  
        </div>
        <div>
        <div className="d-flex" id="hed">
           <h2>Read</h2>
            <input onChange={handlesearch} type="Search" placeholder="Search here" className="m-2" id="search"/>
            <Link to='/'>
            <button className="btn btn-primary" id="createlink">Add User</button>
          </Link>
          </div>
          <hr/>

          {loading?<table className={`table ${dark}`}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col"> Action</th>
                <th scope="col">  Action</th>
              </tr>
            </thead>
            {   idata.filter((ele)=>{
               if(ele===""){
                return ele;
               }
               else
               {
                return (
                  ele.name.toLowerCase().includes(search) ||
                  ele.email.toLowerCase().includes(search))
               }
               }).map((item,i)=>{
                    return (
                        <>
                        
                     <tbody>
                     <tr>
                     <th key={i} scope="row">{item.id}</th>
                     <td>{item.name}</td>
                     <td>{item.email}</td>
                      <td>
                      <Link to={`/update/${item.id}`}>
                      <button   
                      className="btn btn-warning">Edit
                      </button>
                      </Link>
                      </td>
                      <td>
                     <button onClick={()=>handleDelete(item.id)} className="btn btn-danger">Delete</button>
                      </td>
                     </tr>
              
                     </tbody>
                        </>
                    )
                })
            }
            
          </table>:<h2 className="text-center">Loading...</h2>}
          
        </div>
      </div>
    </>
  );
};

export default Read;
