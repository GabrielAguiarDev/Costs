import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-hight">
        <Routes>
          <Route path="/" exact="true" element={<Home />}></Route>
          <Route path="/contact" exact="true" element={<Contact />}></Route>
          <Route path="/projects" exact="true" element={<Projects />}></Route>
          <Route path="/company" exact="true" element={<Company />}></Route>
          <Route path="/newproject" exact="true" element={<NewProject />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;