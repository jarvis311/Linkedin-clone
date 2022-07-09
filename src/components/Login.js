import React, { useState } from 'react'
import '../styles/login.css'
import img from '../components/Linkedin.png'
import { auth } from '../firebase/firebase'
import { login } from '../features/userSlice'
import { useDispatch  } from 'react-redux'
const Login = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [profileUrl, setProfileUrl] = useState('')
  const dispatch = useDispatch();


  const handleLogin = (e) => {
    e.preventDefault();   
    auth.signInWithEmailAndPassword(email,password)
    .then(userAuth=>{
      dispatch(login({
        email: userAuth.user.email,
        displayName:userAuth.user.displayName,
        uid: userAuth.user.uid,
        photoUrl: userAuth.user.profileUrl

      }))
    }).catch(error => alert(error))
  }

  const handleRegister = () => {
    if (!name) {
      alert("enter name")

    }
      auth.createUserWithEmailAndPassword(email, password).then(userAuth => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profileUrl
        }).then(() => {
          dispatch(login({
            email: userAuth.user.email,
            displayName: name,
            uid: userAuth.user.uid,
            photoUrl: profileUrl
          }))
        })
      }).catch(error => alert(error))
    
  }
  return (
    <div className='loginPage'>
      <img src={img} alt="" />
      <form>
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Full name' required />
        <input value={profileUrl} onChange={e => setProfileUrl(e.target.value)} type="text" placeholder='Profile Pic' />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' required />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' required />
        <button onClick={handleLogin} type="submit" className='loginPage_submit'>Login</button>
        <p className='loginPage_register'>Not a member? <span onClick={handleRegister}>Register Now</span> </p>
      </form>
    </div>
  )
}

export default Login