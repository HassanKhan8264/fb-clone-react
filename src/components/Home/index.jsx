import {useState , useEffect} from 'react'
import "./index.css";
import  Post from "./../post"
import axios from 'axios'
import Navbar from './../navbar'
import Stories from './../Stories'


function Home() {
  const[posts, setPosts] = useState([]);
      useEffect(() => {

        axios.get("https://my-json-server.typicode.com/minzamammalik/jsonplaceholder/posts")
        .then(response =>{
          console.log(response)
          setPosts(response.data)
        })
        .catch(error =>{
          console.log(error)

        })
      }, [])

    const [isLit, setLit] = useState("dark");
    
    const toggleThemeMode = () =>{
      if(isLit === "dark"){
          setLit("Lit")
      }else{
        setLit("dark")
      }

    }

  return (
    <div className = {`room ${(isLit === "dark" ? "dark": "Lit")}`}>
    {/* Room is {(isLit === "DARK" ? "dARK": "lIT")} */}

    <Navbar toggleThemeMode={toggleThemeMode} Mode={isLit} />

    <Stories />
    {
      posts.map((eachPost, i) =>(
        <>
        <Post
        profilepic={eachPost.profilePhoto} 
        name={eachPost.name}
        postText={eachPost.postText} 
        postImage={"https://wallpapercave.com/wp/wp2162760.jpg"}></Post>
        </>
      ))

  
    }

    </div>
  );
}

 
export default Home;