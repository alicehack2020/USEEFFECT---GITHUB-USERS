import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
 function App() {
const [data,setData]=useState([])
const [search,setSearch]=useState("react")
const [order,setOrder]=useState("asc")




useEffect(()=>{
  loadingData();
},[])

useEffect(()=>{
  loadingData();
},[order])

const loadingData=async ()=>{
 return await axios.get(`https://api.github.com/search/repositories?q=${search}&sort=${order}`).then((res)=>setData(res.data)).catch((err)=>console.log(err))
}

const submitHanddle=()=>{
  loadingData();
  //console.log(order);
}


const handleChange = (e) => {
  setOrder(e.target.value);
};




 console.log(data);
  return (
     <>
     <div>
        <input type="text" name="" id="" value={search} onChange={(e)=>setSearch(e.target.value)} />
        <button onClick={submitHanddle}>search</button>
        <select name="" id="" value={order} onChange={handleChange}>
          <option value="asc">asc</option>
          <option value="dec">dec</option>
         </select>     
    </div>

    <div>
      {
        <table>
            <tr>
              <td>name</td>
              <td>language</td>
              <td>size</td>
              <td>visibility</td>
              <td>watchers count</td>
              <td>description</td>
            </tr>
            <tbody>
              {
              data?.items?.map((res)=>{
              return( 
              <>
                <tr>
                  <td>{res.name}</td>
                  <td>{res.language}</td>
                  <td>{res.size}</td>
                  <td>{res.visibility}</td>
                  <td>{res.watchers_count}</td>
                  <td>{res.description}</td>
                </tr>
              </>
              )
              })
              }
            </tbody>
          </table>
        
       
      
      
      }
    </div>
     </>
  );
}

export default App;
