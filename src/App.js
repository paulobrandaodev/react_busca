import React, {Component} from 'react';
import './App.css';

import Header from './components/Header/Header'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      termo : ""
    }

  }

  // Ciclo de vida responsável por receber as props do nosso Header
  UNSAFE_componentWillReceiveProps(){
    this.setState({
      termo : this.props.location.state.termo
    })
    console.log("Termo", this.props.location.state.termo)
  }

  render(){
    return (
      <>
        <Header {...this.props} />
        <div>
          Termo : {this.state.termo}
        </div>
      </>
    );
  }
}

export default App;
