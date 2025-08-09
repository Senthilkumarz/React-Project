import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
const Register = () => {

     const [name,setName] = useState('')
     const [password,setpassword] = useState('')
     const [cpassword,setcpassword] = useState('')
     const [data,setData] = useState([])

     const [open,setopen] =useState(false);

      console.log(data)

      const handleapi = async() => {
        try {
           const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
           console.log('jhedfgjdsfhgdsh')
           setData(response.data)
        } catch (error) {
             console.log(error)
        }
      }

      useEffect(()=>{
        handleapi();
      },[])

    return (
      <div>
        {
            data.map((item,index)=> (
<div className="flex flex-col min-h-screen items-center  bg-gray-100 px-4">
              <p>{item.id}</p>
              <p>{item.title}</p>
              <p>{item.body}</p>
    </div>
            ))
        }
             
    <button onClick={()=>setopen(!open)}>open</button>
    {
        open && (<p>test</p>)
    }
        </div>
    )
}

export default Register