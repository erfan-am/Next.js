import Layout from '../Components/Layout';
import Error from './_error'
import { useEffect, useState } from 'react'
const About= ()=> {
   const [user,setUser]=useState(null)
   const [error,setErro]=useState(false)
   useEffect(()=>{
       let get=true
       if(get){
       fetch('https://api.github.com/users/erfan-am')
       .then((res)=>res.json())
       .then(data=>{
           setUser(data)
       })
       .catch(()=>{setErro(true)})
       }
     return  ()=>{
          get=false
      }
   },[])
  if(error){
      return <Error error={error}/>
  }
   return(
      <div>
            <Layout title="About">
                <h3>{user && user.name} </h3>
                <p>{user && user.bio}</p>
                <img src={user && user.avatar_url} style={{width:'200px'}} />
            </Layout>
      </div>
)}

export default About