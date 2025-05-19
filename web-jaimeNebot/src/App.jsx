import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import { WorkPage } from './pages/work/WorkPage'
import { AboutPage } from './pages/about/AboutPage'





function App() {
  return (
        <BrowserRouter>
          <>
            <Routes>
              <Route path='/' element={<WorkPage />} />
              <Route path='/work' element={<WorkPage />} />
              <Route path='/about' element={<AboutPage />} />
            </Routes>
            </>
        </BrowserRouter>
      
          );
}
export default App;