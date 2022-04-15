import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contador : 0
    }; 
  }
  sumar(){
    this.setState ({
       contador : this.state.contador+1,
       
    });
  }
  restar(){
    this.setState({
       contador : this.state.contador-1
    });
  }
  reset(){
    this.setState({
       contador : 0,
    });
  }
  render(){
    return (
      <body>
      <div class="contenedor">
        <p class="titulo">Contador</p>
        <p class="contar" id="contar"><Contador valor={this.state.contador}/></p>
    
        <div class="botones">
          <button class="incr" id="incr" onClick={()=>this.sumar()}>
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front text"> INCREASE 
            </span>
          </button>
          <button class="decr" id="decr" onClick={()=>this.restar()}> 
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front text"> DECREASE
            </span>
          </button>
          <button class="reset" id="reset" onClick={()=>this.reset()}>
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front text"> RESET
            </span>
          </button>
        </div>
      </div>
    </body>
    )
  }
}
//Functional Component
const Contador = props => {
  if (props.valor > 0) 
  return(
    <div class={props.valor > 0 ? "positivo" : "negativo"}>{props.valor}</div>
  );
  else if (props.valor < 0)
  return(
    <div class={props.valor > 0 ? "positivo" : "negativo"}>{props.valor}</div>
  );
  else if (props.valor === 0)
  return(
    <div class={props.valor === 0 ? "reset" : "reset"}>{props.valor}</div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

export default App;
