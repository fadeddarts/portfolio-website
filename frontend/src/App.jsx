import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import Technologies from './components/Technologies'
import { Container } from '@chakra-ui/react'
import Projects from './components/projects/Projects' 
import Star from './components/StarParticles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog/Blog'
// import Resume from './components/Resume'

function App() {
  return (
    <>
      <Router>
        <Star />
        <Routes>
          <Route path="/" element={
            <Container minH="100vh" maxW="100%" p={0} position="relative" zIndex="1">
              <Navbar />
              <Content />
              <Technologies />
              <Projects />
              <Footer />
            </Container>
          } />
          <Route path="/home" element={
            <Container minH="100vh" maxW="100%" p={0} position="relative" zIndex="1">
              <Navbar />
              <Content />
              <Technologies />
              <Projects />
              <Footer />
            </Container>
          } />
          <Route path="/blog" element={<><Blog /></>} />
          {/* <Route path="/resume" element={<><Resume /></>} /> */}
        </Routes>
      </Router>
    </>
  )
}


export default App
