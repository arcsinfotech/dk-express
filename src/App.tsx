import './App.css'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'

import Layout from '@/pages/Layout'
import Home from '@/pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
