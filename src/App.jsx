import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import CaseDetail from './pages/CaseDetail'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:categorySlug" element={<Category />} />
          <Route path="/categoria/:categorySlug/:caseType/:caseIndex" element={<CaseDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
