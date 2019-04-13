import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marginLeft: 0,
      marginTop: 0
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKey.bind(this));
  }

  componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKey.bind(this));
  }   

  updateMargin() {
    let margin = this.state.marginLeft
    this.setState({
      ...this.state,
      marginLeft: margin += 1
    })
  }

  handleKey(e) {
    console.log(e.keyCode);
    if (e.keyCode === 39) {    // saga git
      let margin = this.state.marginLeft
      this.setState({
        ...this.state,
        marginLeft: margin += 1
      })
    } else if (e.keyCode === 37) {  // sola git
      let margin = this.state.marginLeft
      this.setState({
        ...this.state,
        marginLeft: margin -= 1
      })
    } else if (e.keyCode === 40) {  // yukari git
      let margin = this.state.marginTop
      this.setState({
        ...this.state,
        marginTop: margin += 1
      })
    } else if (e.keyCode === 38) {
      let margin = this.state.marginTop
      this.setState({
        ...this.state,
        marginTop: margin -= 1
      })
    }
    
   
  }

  render() {

    const divStyle= {
      background: 'orange',
      height: '100px',
      width: '100px',
      marginLeft: this.state.marginLeft + "px",
      marginTop: this.state.marginTop + "px",

      content: "url('https://timedotcom.files.wordpress.com/2017/06/pikachu-most-influential-game-characters.jpg?quality=85')"
    }

    return (
      <div onKeyDown={this.handleKey.bind(this)}>
        <div style={divStyle}></div>
      </div>
    );
  }
}




export default App;
