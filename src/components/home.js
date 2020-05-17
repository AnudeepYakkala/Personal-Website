import React from 'react';

import Header from './header.js';
import Image from './image.js';
import AboutMe from './aboutMe.js';
import Projects from './projects.js';

function Home() {
    return (
        <div className="App">
          <Header></Header>
          <Image></Image>
          <AboutMe></AboutMe>
          <Projects></Projects>
        </div>
      );
}

export default Home;