import "./index.css";

import profile from './profile.jpg'
import person1 from './person1.jpg'
import person2 from './person2.jpg'
import person3 from './person3.jpg'
import like from './like.jpg'
import comment from './comment.png'
import share from './share.png'
import smile from "./commenticon0.png"
import camera from "./commenticon1.png"

function Stories() {
    return <div className="body">
    <div className="StoriesMain">
    <div className="StoriesDiv">
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
    <div className="addImgMain">
         <div className="comment-main">
              <div className="profile">
              <img className="profilepic" src={profile} alt="profilepic"/> 
              </div>
              <div className="comment-div">
                  <div className="comment-type">
                      What's on your mind, Hassan?
                  </div>
                  <div className="comment-icons">
                      <img src={smile} alt="icon"/>
                      <img src={camera} alt="icon"/>
                      <img src={smile} alt="icon"/>
                      <img src={camera} alt="icon"/>


                      {/* <img src={} alt="icon"> */}
                      {/* <img src={} alt="icon"> */}
                      {/* <img src={} alt="icon"> */}
                  </div>
              </div>
          </div>
        <hr/>
        <div className="reactions">
              <div className="icons">
            <img src={like} alt="like "/>Live Video
              </div>

              <div className="icons">
            <img src={comment} alt="comment"/>Photo/Video
              </div>

              <div className="icons">
            <img src={share} alt="share"/>Feeling/Activity
              </div>
        </div>
            
         
    </div>
    </div>
  }
  
export default Stories
