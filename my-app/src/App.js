import logo from './logo.svg';
import './App.css';
import { Box, Button, ButtonGroup, Heading, Text, Stack } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import bgImage from "../src/Payload/bg.jpg"
import Footer from './components/footer';
import LandingPage from './pages/landingPage';
import AllRoutes from './components/AllRoutes';
function App() {

  return (


    <Box bgImage={bgImage} >
      <Navbar />
      <Box >
        <AllRoutes />
      </Box>
      <Footer />
    </Box>




  );
}

export default App;
