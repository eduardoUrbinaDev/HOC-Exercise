import React from 'react';
import styles from './App.module.css';
import Button from './components/Button';
/** 
  * Description: App container with buttons
  * State users type:
  * admin
  * user
*/

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: 'admin'
    };
  }
  render() {
    const { app } = styles;
    return (
      <div className={app}>
        <Button />
        <Button />
        <Button />
      </div>
    );
  }
}

export default App;
