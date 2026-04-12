

import { Routes, Route } from "react-router"
import { Login, Dashboard, AddStudent } from "./pages"
import Layout from "./components/Layout"

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Layout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/addStudent' element={<AddStudent />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
