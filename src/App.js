import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
 function App() {
const [data,setData]=useState([])
const [search,setSearch]=useState("react")
const [order,setOrder]=useState("asc")
const [page,setPage]=useState(1)

useEffect(()=>{
  loadingData();
},[])

useEffect(()=>{
  loadingData();
},[order,page])

const loadingData= ()=>{
    axios.get(`https://api.github.com/search/repositories?q=${search}&order=${order}&page=${page}&per_page=10`).then((res)=>setData(res.data)).catch((err)=>console.log(err))
}

const submitHanddle=()=>{
  loadingData();
}


const handleChange = (e) => {
  setOrder(e.target.value);
  console.log(order);
};


const increase = () => {
  setPage(page+1);
  console.log(page);
};

const descrease = () => {
  setPage(page-1);
};

console.log(page);
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
        <thead>
        <tr>
              <td>name</td>
              <td>language</td>
              <td>size</td>
              <td>visibility</td>
              <td>watchers count</td>
              <td>description</td>
            </tr>
        </thead>
            
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
      <div>
        <button value={page} onClick={descrease}>prev</button>
        <p>{page}</p>
        <button value={page} onClick={increase}>next</button>
      </div>
    </div>
     </>
  );
}

export default App;
