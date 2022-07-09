import  firebase from 'firebase'
import React, { useEffect, useState } from 'react'
import '../styles/feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import InputOption from './InputOption';
import FeedPost from './FeedPost';
import { db } from '../firebase/firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const Feed = () => {
   
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState("")
  const user = useSelector(selectUser);
    
    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data:doc.data(),
                }))
            )
        })
    },[])

    const onsubmit = (e) => {
        e.preventDefault()
        db.collection("posts").add({
            name:user.displayName,
            description:input,
            workAt:"VGEC",
            photoUrl:user.photoUrl,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()

        });
        setInput("");
    };
    return (
        <div className='feed'>
            <div className="fedd_postCreator">
                <div className="feddInput">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={(e) => setInput(e.target.value)}  type="text" placeholder='Start a post' />
                        <button onClick={onsubmit} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed_inputOption">
                    <InputOption Icon={ImageIcon} title="Photo" color="#378FE9" />
                    <InputOption Icon={YouTubeIcon} title="Video" color="#5F9B41" />
                    <InputOption Icon={EventIcon} title="Event" color="#C37D16" />
                    <InputOption Icon={ArticleIcon} title="Event" color="#E16745" />
                </div>
            </div>
            <FlipMove>

            {
                posts.map(({id, data:{name, description, workAt,photoUrl}})=> (
                    <FeedPost 
                        key={id}
                        name={name}
                        description={description}
                        workAt={workAt}
                        photoUrl={photoUrl}
                        // timestamp={timestamp}
                    />
                ))
            }
            </FlipMove>

            {/* <FeedPost
                name="Google"
                description="Were keeping our #LifeAtGoogle Tips & Tricks series going with excellent advice from Googler, Dhwani Kachru: Don’t be afraid to ask your teammates for guidance! Get info on applications, the hiring process, and more →"
                workAt="Student at Vishwakarma Goverment Engineering College"
                timestamp="3h ago"
            />
            <FeedPost
                name="Google"
                description="Were keeping our #LifeAtGoogle Tips & Tricks series going with excellent advice from Googler, Dhwani Kachru: Don’t be afraid to ask your teammates for guidance! Get info on applications, the hiring process, and more →"
                workAt="Student at Vishwakarma Goverment Engineering College"
                timestamp="3h ago"
            />
            <FeedPost
                name="Google"
                description="Were keeping our #LifeAtGoogle Tips & Tricks series going with excellent advice from Googler, Dhwani Kachru: Don’t be afraid to ask your teammates for guidance! Get info on applications, the hiring process, and more →"
                workAt="Student at Vishwakarma Goverment Engineering College"
                timestamp="3h ago"
            /> */}
        </div>
    )
}

export default Feed