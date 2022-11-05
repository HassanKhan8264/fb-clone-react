import moment from "moment";
import person1 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";
import person3 from "../images/person3.jpg";
import live from "../images/live.gif";
import addImg from "../images/addImg.png";
import smily from "../images/smily.png";
import { useState, useEffect } from "react";
import profile from "../images/profile.jpg";
import './App.css'



import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    query,
    onSnapshot,
    serverTimestamp,
    orderBy,
    deleteDoc, updateDoc
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBqv0Mz6hn-o0nV-6KPATosyp-xnj5FZ7Q",
    authDomain: "helloworldfirebase-8264.firebaseapp.com",
    projectId: "helloworldfirebase-8264",
    storageBucket: "helloworldfirebase-8264.appspot.com",
    messagingSenderId: "671755468734",
    appId: "1:671755468734:web:b1800130ff5db74d6543ef",
    measurementId: "G-PW56CGPZN4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


function Story({ className }) {
    const [postText, setPostsText] = useState("");
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [editing, setEditing] = useState({
        editingId: null,
        editing: ''
    })

    useEffect(() => {
        //     const getData = async () => {

        //       const querySnapshot = await getDocs(collection(db, "posts"));
        // querySnapshot.forEach((doc) => {
        //   console.log(`${doc.id} => `, doc.data());
        //   setPosts((prev) => {
        //     const newArray = [...prev, doc.data()];
        //     return newArray

        //   })
        // });
        // }
        // getData()
        let unsubscribe = null;
        const getRealTimeData = () => {
            const q = query(collection(db, "posts"), orderBy("createdOn", "desc"));
            unsubscribe = onSnapshot(q, (querySnapshot) => {
                const posts = [];
                querySnapshot.forEach((doc) => {
                    // let data = doc.data();
                    // data.id = doc.id;
                    posts.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
                setPosts(posts);
                console.log("posts: ", posts);
            });
        };
        getRealTimeData();
        return () => {
            console.log("cleanup function");
            unsubscribe();
        };
    }, []);

    const savePost = async (e) => {
        e.preventDefault();
        console.log("postText:", postText);
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                text: postText,
                createdOn: serverTimestamp()
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const deletePost = async (postId) => {
        console.log('postId', postId)
        await deleteDoc(doc(db, 'posts', postId));
    }
    const updatePost = async (e) => {
      e.preventDefault()
        await deleteDoc(doc(db, 'posts', editing.editingId), {
            text: editing.editingText
        });
        setEditing({
            editingId:null,
            editingText: ''
        })
    }

    // const edit = (postId, text) => {

    //     // const updatedState = 
    //     // posts.map(eachItem => {
    //     //     if(eachItem.id === postId?.id){
    //     //         return {...eachItem, isEditing: !eachItem.isEditing}

    //     //     }else{
    //     //         return eachItem
    //     //     }
    //     // })

    //     // setPosts(updatedState)
    // }

    return (
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
                        <form onSubmit={savePost}>
                            <input
                                type="text"
                                className={`comment-type ${className}`}
                                placeholder="What's on your mind, Hassan?"
                                onChange={(e) => {
                                    setPostsText(e.target.value);
                                }}
                            />
                            <button className='bg-black' type="submit">post</button>
                        </form>
                    </div>
                </div>
                <hr />
                <div className="reactions">
                    <div className="icons">
                        <img src={live} alt="like " />
                        Live Video
                    </div>

                    <div className="icons">
                        <img src={addImg} alt="comment" />
                        Photo/Video
                    </div>

                    <div className="icons">
                        <img src={smily} alt="share" />
                        Feeling/Activity
                    </div>
                </div>
                {posts.map((eachPost, i) => (
                    <div className="post" key={i}>
                        <h3>{(eachPost.id === editing.editingId) ?
                            <form onSubmit={updatePost}>
                                <input type="text"
                                    value={editing.editingText}
                                    onChange={(e) => {
                                        setEditing({
                                            ...editing,
                                            editingText:
                                                e.target.value
                                        })
                                    }}
                                    placeholder="Please enter updated value"
                                />
                                <button type="submit">Update</button>
                            </form>
                            : eachPost?.text}
                        </h3>

                        <span>
                            {moment((eachPost?.createdOn?.seconds * 1000) ?
                                eachPost?.createdOn?.seconds * 1000
                                : undefined)
                                .format("Do MMMM, h:mm a")}
                        </span><br />
                        <button onClick={() => {
                            deletePost(eachPost.id)
                        }} className='bg-red'>delete</button>

                        {(editing.editingId === eachPost?.id) ? null
                            :
                            <button onClick={() => {


                                setEditing({
                                    isEditing: eachPost?.postId,
                                    editingText: eachPost?.text
                                })

                            }}>Edit</button>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Story;