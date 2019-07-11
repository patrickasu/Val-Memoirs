import React, { Component } from 'react';
import './style/mystyle.css';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import Navbar from './components/navbar';
import Heading from './components/heading';
import Slidershow from './components/slideshow';
import Header from './posts/header';
import Posts from './posts/posts';
import Createpost from './posts/createpost';
import Footer from './components/footer';





class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Heading />
          <Slidershow />
          <Header />
          <Posts />
          <Container>
            <Createpost />
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
