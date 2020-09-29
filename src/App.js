import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      number: "",
      school: "",
      gradDate: "",
      experience: [],
      showForm: false
    }
  }

  render() {
    return (
      <div className="grid-container">
        <div className="cv-container">
          <Header  />
          <Education />
          <Experience />
        </div>
      </div>
    );
  }
}

export default App;
