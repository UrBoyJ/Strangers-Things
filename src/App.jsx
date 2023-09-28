import { useState } from 'react'
import './App.css'
import { APIURL } from './fetchHelpers'
import AllPosts from './allPosts'
import { Routes, Route, Link } from 'react-router-dom'
import LogIn from './login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome To The General Store!</h1>
      <nav>
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/post'>Posts</Link></div>
        <div><Link to='/LogIn'>Log In</Link></div>
      </nav>
      {/* <AllPosts/>  */}
        <Routes>
        <Route path='/' element={<p>Home</p>}></Route>
        <Route path='/post' element={<AllPosts></AllPosts>}></Route>
        <Route path='/LogIn' element={<LogIn></LogIn>}></Route>
        </Routes>
    </>
  )
}

export default App