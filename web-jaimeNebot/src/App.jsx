import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import { HomePage } from './pages/home/HomePage'
import { WorkPage } from './pages/work/WorkPage'
import { AboutPage } from './pages/about/AboutPage'





function App() {
  return (
        <BrowserRouter>
          <>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/work' element={<WorkPage />} />
              <Route path='/about' element={<AboutPage />} />
            </Routes>
            </>
        </BrowserRouter>
      
          );
}
export default App;