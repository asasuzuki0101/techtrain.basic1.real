import { useState } from "react" 
import gomiyoshi from "./gomiyoshi.jsx"
function func(){
     const [api,setApi] =useState([]);
     const [email,setEmail] = useState("")
     const [title, setTitle] = useState("")
    const FetchData = () =>{
        fetcf("https://railway.bulletinboard.techtrain.dev/threads/123/posts?offset=10")
        .then(res => res.json())
        .then(data =>setApi(data.title)) 
        .catch(error => {error} );
    const buttonclick = () =>{
        
    } 
        return(
        <> 
        <button onClick={buttonclick} id="a1"> 確定する</button>
        </>
            

        ) 
    } 
} 
        
        export default func