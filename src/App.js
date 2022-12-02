import "./App.css"
import { Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts"
//import Home from "./components/Home"
import Signup from "./components/Signup"
import Profile from "./components/Profile"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          {/* <Route index element={<Home />} /> */}
          <Route index element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
