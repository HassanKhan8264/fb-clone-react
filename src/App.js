import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import logo from "./images/logo.png";
import profile from "./images/profile.jpg";
import moment from "moment";
import likereaction from "./images/likereaction.png";
import lovereaction from "./images/lovereaction.png";
import hahareaction from "./images/hahareaction.png";
import like from "./images/like.jpg";
import comment from "./images/comment.png";
import share from "./images/share.png";
import smile from "./images/commenticon0.png";
import camera from "./images/commenticon1.png";
import person1 from "./images/person1.jpg";
import person2 from "./images/person2.jpg";
import person3 from "./images/person3.jpg";

import Profile from './components/profile';
import Videos from './components/videos';
// import Story from './components/App.js';
// import Post from './components/App.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function Post({ profilepic, name, postDate, postText, postImage , className}) {

  return (
    
    <div className="Postbody">
      {/* <div className="post"> */}
      {/* </div> */}  
      <div className={`post ${className}`}>
        <div className="postheader">
          <img className="profilepic" src={profilepic} alt="profilepic" />
          <div>
            {name}
            <br />
            {moment(postDate).fromNow()}
          </div>
        </div>

        <div className="postText">{postText}</div>

        <img className="postImage" src={postImage} alt="postimage"></img>
        <div className="reaction">
          <img src={likereaction} alt="reaction"></img>
          <img src={lovereaction} alt="reaction"></img>
          <img src={hahareaction} alt="reaction"></img>
        </div>
        <hr />
        <div className="postfooter">
          <div className="icons">
            <img src={like} alt="like " />
            like
          </div>

          <div className="icons">
            <img src={comment} alt="comment" />
            comment
          </div>

          <div className="icons">
            <img src={share} alt="share" />
            share
          </div>
        </div>
        <hr />
        <div className="comment-main">
          <div>
            <img className="profilepic" src={profilepic} alt="profilepic" />
          </div>
          <div className={`comment-div ${className}`}>
            <div className={`comment-type  ${className}`}>Write a comment?</div>
            <div className={`comment-icons ${className}`}>
              <img src={smile} alt="icon" />
              <img src={camera} alt="icon" />
              <img src={smile} alt="icon" />
              <img src={camera} alt="icon" />

              {/* <img src={} alt="icon"> */}
              {/* <img src={} alt="icon"> */}
              {/* <img src={} alt="icon"> */}
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
function Story({className})  {
  return(
    <div className="Storybody">
    <div className="StoriesMain">
      <div className={`StoriesDiv ${className}`}>
        <div className="StoriesHeader">
          <div className="vCat">Stories</div>
          <div className="vCat">Stories</div>
          <div className="vCat">Stories</div>
        </div>
        <div className="StoriesImg">
          <div className="Stories">
            <img src={profile} alt="addstory"></img>
          </div>
          <div className="Stories">
            <img src={person1} alt="addstory"></img>
          </div>
          <div className="Stories">
            <img src={person2} alt="addstory"></img>
          </div>
          <div className="Stories">
            <img src={person3} alt="addstory"></img>
          </div>
        </div>
      </div>
    </div>
    <div className={`addImgMain ${className}`}>
      <div className="comment-main">
        <div className="profile">
          <img className="profilepic" src={profile} alt="profilepic" />
        </div>
        <div className={`comment-div ${className}`}>
          <div className={`comment-type ${className}`}>What's on your mind, Hassan?</div>
          <div className={`comment-icons ${className}`}>
            <img src={smile} alt="icon" />
            <img src={camera} alt="icon" />
            <img src={smile} alt="icon" />
            <img src={camera} alt="icon" />

            {/* <img src={} alt="icon"> */}
            {/* <img src={} alt="icon"> */}
            {/* <img src={} alt="icon"> */}
          </div>
        </div>
      </div>
      <hr />
      <div className="reactions">
        <div className="icons">
          <img src={like} alt="like " />
          Live Video
        </div>

        <div className="icons">
          <img src={comment} alt="comment" />
          Photo/Video
        </div>

        <div className="icons">
          <img src={share} alt="share" />
          Feeling/Activity
        </div>
      </div>
    </div>
  </div>
  );
}

function Exam({mode, posts}){
  return(
    <div>
  <>
              <Story  className={mode ? "darkpost" : "Litpost"}/>
              {posts.map((eachPost, i) => (
            <Post 
            className={mode ? "darkpost" : "Litpost"}
              profilepic={eachPost.profilePhoto}
              name={eachPost.name}
              postText={eachPost.postText}
              postImage={"https://wallpapercave.com/wp/wp2162760.jpg"}
            ></Post>
            ))}
            </>
    </div>
  )
}

function Navbar({mode, toggle}){
  return (
    <div>
  <div className={`navbar ${mode ? "darkpost" : "Litpost"}`}>
        <div className="logo">
          <img src={logo} alt="logo"></img>
          {/* <svg aria-label="Facebook logo" class="x1ujvgzy" role="img" viewBox="0 0 120 24" width="120"><path d="m109.202 14.864 4.404-7.03h4.746l-4.622 7.278 4.808 7.463h-4.746l-4.59-7.215v7.215h-4.467V.433l4.467-.402v14.833ZM98.596 14.524c0-1.951-.807-3.5-2.885-3.5s-2.885 1.549-2.885 3.5v1.363c0 1.95.807 3.499 2.885 3.499s2.885-1.549 2.885-3.5v-1.362ZM88.36 15.577v-.743c0-4.243 2.42-7.309 7.351-7.309s7.351 3.066 7.351 7.309v.743c0 4.242-2.42 7.308-7.351 7.308-4.932 0-7.351-3.066-7.351-7.308ZM82.406 14.524c0-1.951-.807-3.5-2.884-3.5-2.079 0-2.885 1.549-2.885 3.5v1.363c0 1.95.806 3.499 2.885 3.499 2.077 0 2.884-1.549 2.884-3.5v-1.362Zm-10.235 1.053v-.743c0-4.243 2.419-7.309 7.35-7.309 4.932 0 7.352 3.066 7.352 7.309v.743c0 4.242-2.42 7.308-7.352 7.308-4.931 0-7.35-3.066-7.35-7.308ZM66.216 14.648c0-2.075-.806-3.623-2.946-3.623-1.83 0-2.823 1.3-2.823 3.406v1.548c0 2.106.993 3.407 2.823 3.407 2.14 0 2.946-1.549 2.946-3.623v-1.115Zm4.467 1.022c0 4.118-1.985 7.215-6.08 7.215-2.233 0-3.783-1.115-4.404-2.539v2.23h-4.218V.434L60.447.03v9.848c.651-1.3 2.078-2.354 4.157-2.354 4.094 0 6.079 3.097 6.079 7.216v.929ZM44.723 13.843h5.397v-.372c0-1.61-.651-2.88-2.606-2.88-2.016 0-2.791 1.27-2.791 3.252m-4.466 1.92v-1.301c0-4.18 2.388-6.937 7.257-6.937 4.59 0 6.607 2.787 6.607 6.875v2.353h-9.398c.093 2.014.992 2.912 3.474 2.912 1.675 0 3.443-.341 4.745-.898l.807 3.065c-1.179.62-3.598 1.084-5.738 1.084-5.645 0-7.754-2.818-7.754-7.153M35.388 7.525c1.737 0 3.38.372 4.28.991l-.992 3.159c-.683-.34-1.8-.682-2.978-.682-2.42 0-3.474 1.394-3.474 3.778v.868c0 2.384 1.055 3.778 3.474 3.778 1.179 0 2.295-.34 2.978-.682l.992 3.16c-.9.618-2.543.99-4.28.99-5.242 0-7.63-2.818-7.63-7.34v-.68c0-4.522 2.388-7.34 7.63-7.34M15.973 15.732c0 2.198.806 3.654 2.884 3.654 1.83 0 2.76-1.332 2.76-3.438v-1.486c0-2.106-.93-3.437-2.76-3.437-2.078 0-2.884 1.455-2.884 3.654v1.053Zm-4.467-.991c0-4.119 1.954-7.216 6.049-7.216 2.233 0 3.598 1.146 4.249 2.57v-2.26h4.28v14.74h-4.28v-2.23c-.62 1.425-2.016 2.54-4.25 2.54-4.094 0-6.048-3.097-6.048-7.215v-.93ZM9.274 3.592c-1.396 0-1.8.62-1.8 1.982v2.26h3.723l-.372 3.655h-3.35v11.086H3.009V11.49H0V7.835h3.009V5.636C3.009 1.951 4.497 0 8.654 0c.9 0 1.954.062 2.605.155v3.437H9.274Z"></path></svg> */}
        </div>
        <div className={`searchbar ${mode ? "darkpost" : "Litpost"}`}>
          <div className="search-icon">
            <FiSearch />
          </div>
          <input type="search" placeholder="Search here"className={mode ? "darkpost" : "Litpost"}></input>
        </div>
        <div className="profilePage">
          <div className="icon">
            <button type="button" onClick={toggle}>
              {mode ? <BsMoon /> : <BsSun />}
            </button>
          </div>
          <div className="icon">
            <img src={profile} alt="profilePage" to="/profilePage"></img>
          </div>
        </div>
      </div>
    </div>
  );

}

function App() {
  const [posts, setPosts] = useState([]);
  const [isLit, setLit] = useState("dark");
  const toggleThemeMode = () => {
    // if(isLit === "dark"){
      setLit(!isLit)
    
      // document.body.style.Color = "white";
    // }
    // else{
      // document.body.style.backgroundColor =  "black";
    // }
  }
  useEffect(() => {
    axios.get(
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
    <div className={`room ${isLit ?  "dark" : "Lit"}`}>
      <Router>
  
<Navbar mode={isLit} toggle={toggleThemeMode}/>
   
    <div className="leftSideMain">
    <ul>
      <li>
        <Link to="/">Home Page</Link>
      </li>
      <li>
        <Link to="/components/videos">Videos Page</Link>
      </li>
      <li>
        <Link to="/components/profile">Profile Page</Link>
      </li>
    </ul>
  </div>
      <Routes>
         
          <Route path="/" element={<Exam mode={isLit} posts={posts}/>} />
          <Route path="/components/videos" element={<Videos />} />
          <Route path="/components/profile" element={<Profile />} />
          
       
        </Routes>
    </Router>
  
    </div>
  );
}

export default App;


