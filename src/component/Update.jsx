import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, } from 'react-router-dom'


const Update = () => {

   const {id}=useParams();
   

    // useEffect(()=>{
    //   setId(localStorage.getItem("id"))
    //   setName(localStorage.getItem("name"))
    //   setEmail(localStorage.getItem("email"))
    // },[])

    const [idata, setIdata] = useState({
      name:'',
      email:''
    })
    useEffect(()=>{
      getdata();
  
     },[])
     
    function getdata(){
      axios.get(`https://64fdd12b596493f7af7ea049.mockapi.io/react-crud/`+id)
      .then((res)=>{
            setIdata(res.data)
            console.log(res);
      })
  };
 
    const history=useNavigate();

    function handleupdate(e){
      e.preventDefault();
      axios.put(`https://64fdd12b596493f7af7ea049.mockapi.io/react-crud/`+id,idata)
      .then(()=>{
        history('/read')
      })
    }

  return (
    <>
    <div className='container'>
    <div>
    <h2 className="mb-4">Update</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control border-black"
                value={idata.name} onChange={(e)=>setIdata({...idata,name:e.target.value})}  
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control border-black"
               value={idata.email} onChange={(e)=>setIdata({...idata,email:e.target.value})}
                />
            </div>
                
            <button onClick={handleupdate}
             type="submit" className="btn btn-primary mt-4">
              Update
            </button>
            <Link to="/Read">
                <button className='btn btn-secondary mx-4 mt-4'>Back</button>
            </Link>
          </form>
    </div>
    </div>  
    </>
  )
}

export default Update
