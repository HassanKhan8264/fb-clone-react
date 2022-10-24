import "./index.css"

import likereaction from "./../../images/likereaction.png";
import lovereaction from "./../../images/lovereaction.png";
import hahareaction from "./../../images/hahareaction.png";
import like from "./../../images/like.jpg";
import comment from "./../../images/comment.png";
import share from "./../../images/share.png";
import smile from "./../../images/commenticon0.png";
import camera from "./../../images/commenticon1.png";
import profile from "./../../images/profile.jpg";

function Videos({className,name,postImage}){
    return (
        <div className="Postbody">
          {/* <div className="post"> */}
          {/* </div> */}  
          <div className={`post ${className}`}>
            <div className="postheader">
              <img className="profilepic" src={profile} alt="profilepic" />
              <div>
                {name}
                <br />
               
              </div>
            </div>
    
            
    
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
                <img className="profilepic" src={profile} alt="profilepic" />
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
          <div className={`post ${className}`}>
            <div className="postheader">
              <img className="profilepic" src={profile} alt="profilepic" />
              <div>
                {name}
                <br />
               
              </div>
            </div>
    
            
    
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
                <img className="profilepic" src={profile} alt="profilepic" />
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
          <div className={`post ${className}`}>
            <div className="postheader">
              <img className="profilepic" src={profile} alt="profilepic" />
              <div>
                {name}
                <br />
               
              </div>
            </div>
    
            
    
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
                <img className="profilepic" src={profile} alt="profilepic" />
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
          <div className={`post ${className}`}>
            <div className="postheader">
              <img className="profilepic" src={profile} alt="profilepic" />
              <div>
                {name}
                <br />
               
              </div>
            </div>
    
            
    
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
                <img className="profilepic" src={profile} alt="profilepic" />
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
    
    export default Videos;