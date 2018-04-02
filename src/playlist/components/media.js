import React,{ Component } from 'react';

class Media extends Component {
  render(){
    const styles = {
      container: {
        fontSize: 50,
        backgroundColor: 'red',
        color: '#44546b',
        cursor: 'pointer', 
      }
    }
    return (
      <div style = {styles.container}>
        <div>
          <img
            src = "./images/covers/bitcoin.jpg"
            alt = ""
            width = {260}
            height = {160}
          />
          <h3>Por que aprende React?</h3>
          <p>Cesar Farfan</p>
        </div>
      </div>
    )
  }
}

export default Media;
