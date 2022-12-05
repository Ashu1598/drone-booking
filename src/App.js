import "./App.css"
import { Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Profile from "./components/Profile"
import Owner from "./components/Owner"
import OwnerDashboard from "./components/Owner/Dashboard"
import Pilot from "./components/Pilot"
import PilotDashboard from "./components/Pilot/Dashboard"
import User from "./components/User"
import UserDashboard from "./components/User/Dashboard"
import Admin from "./components/Admin"
import AdminDashboard from "./components/Admin/Dashboard"
import OwnerList from "./components/Admin/OwnerList"
import PilotList from "./components/Admin/PilotList"
import UserList from "./components/Admin/UserList"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          {/* Owner */}
          <Route path='owner' element={<Owner />}>
            <Route path='dashboard' element={<OwnerDashboard />} />
          </Route>
          {/* Pilot */}
          <Route path='pilot' element={<Pilot />}>
            <Route path='dashboard' element={<PilotDashboard />} />
          </Route>
          {/* User */}
          <Route path='user' element={<User />}>
            <Route path='dashboard' element={<UserDashboard />} />
          </Route>
          {/* Admin */}
          <Route path='admin' element={<Admin />}>
            <Route path='dashboard' element={<AdminDashboard />} />
            <Route path='ownerlist' element={<OwnerList />} />
            <Route path='pilotlist' element={<PilotList />} />
            <Route path='userlist' element={<UserList />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
