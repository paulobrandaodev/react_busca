import React, { Component } from 'react';

class Header extends Component{

    constructor(props){

        super(props);
        this.state = {
            termo: ""
        };
    
      }

      inputSetState = (input) => {
          
          this.setState({
              [input.target.name] : input.target.value
          })

          console.log(this.state.termo)
          console.log(this.props)

          setTimeout(() => {              
            this.props.history.push({
                pathname: '/',
                state: { termo: this.state.termo }
            })
          }, 1000);


      }

      render(){
        return(
            <div>
                <h1>Busca</h1>
                <input type="text" name="termo" value={this.state.termo} onChange={this.inputSetState} />
            </div>
        )
      }

}

export default Header;