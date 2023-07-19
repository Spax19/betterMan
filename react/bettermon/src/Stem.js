import React from 'react';
//import './stem.css';
//import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
function Stem(){
return(
  <div>

<header>
<NavBar />
</header>


<h1> Stem Fields </h1> 

<Image src="teacher.png/171x180"/>

<Stack direction="vertical" gap={1}>
  <Button href="" variant="primary" size="md" style={{color:'teal'}}>
    Science
  </Button>

  <Button href="" variant="primary" size="md" style={{color:'teal'}}>
    Engineering
  </Button>

  <Button href="" variant="primary" size="md" style={{color:'teal'}}>
    Math
  </Button>

</Stack>


<footer> 
   <Footer />
</footer>

</div>
)
}

export default Stem;
