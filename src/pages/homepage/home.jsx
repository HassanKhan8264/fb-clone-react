import Post from '../../components/post'
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../../components/navbar'
import RightSide from '../../components/RightSide'
import Left from '../../components/left'
import Story from '../../components/story'


const Home = () => {
    const [isLit, setLit] = useState(false);
    const [posts, setPosts] = useState([]);
    const toggleThemeMode = () => {
        setLit(!isLit);
    };

    useEffect(() => {
        axios
            .get(
                "https://my-json-server.typicode.com/minzamammalik/jsonplaceholder/posts"
            )
            .then((response) => {
                console.log(response);
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className='text-black'>
           
            <div>
            <Navbar mode={isLit} toggle={toggleThemeMode} />
            </div>
            <div>
            <RightSide mode={`${isLit ? "darkpost" : "Litpost"}`} />
            </div>
            <div>
            <Story className={isLit ? "darkpost" : "Litpost"} />
            </div>
        
            {posts.map((eachPost, i) => (
                <Post
                    className={isLit ? "darkpost" : "Litpost"}
                    profilepic={eachPost.profilePhoto}
                    name={eachPost.name}
                    postText={eachPost.postText}
                    postImage={"https://wallpapercave.com/wp/wp2162760.jpg"}
                ></Post>
            ))}
               <div>
            <Left  mode={`${isLit ? "darkpost" : "Litpost"}`} />
            </div>
            </div>
    )
}

export default Home