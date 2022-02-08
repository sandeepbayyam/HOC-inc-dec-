import React from "react";
import "./style.css";
import Button from './Button';
import H1 from './H1';
class App extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div className="betterview">
        <h1>Hello StackBlitz!</h1>
        <Button></Button>
        <H1></H1>
      </div>
    );
  }  
}

export default App;