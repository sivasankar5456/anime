import { useEffect, useState } from "react";




const UseFetch = (request) => 
{
   let [data,setData]=useState(null);
   let [pending,setPending]=useState(true);
   let [error,setError]=useState(null);


   useEffect(()=>{

setTimeout(()=>{

    fetch(request)
    .then((response)=>{
        
        if(response.ok===false)
        {
            throw Error("data not found !");
        }
        
        return response.json()})
    .then((recieveData)=>{setData(recieveData.data); setPending(false)})
    .catch((error)=>{setError(error.message); setPending(false)})
},100)

   },[])


   return {data, pending, error}

}
export default UseFetch;










