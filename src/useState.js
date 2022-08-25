import { useState } from "react";

// class App extends Component {
//   state = { contador: 0};
//   incrementar = () => {
//     this.setState({ contador: this.state.contador + 1 });
//   }
//     render() {
//     return (
//       <div>
//         contador: {this.state.contador}
//         <button onClick={this.incrementar}>
//             Incrementar
//         </button>
//       </div>
//     );
//   }
// }

// reyglas de los hooks
// no se llama en loops ni en condicionales, ni while, ni nada
//  siempre en el nivel superior mas alto

//solo se llaman en 2  partes:
//  componentes de react
// custom hooks

const useContador = (inicial) =>{
    const [contador, setContador] = useState(inicial);
    const incrementar = () => {
        setContador(contador + 1);
    }
    return [contador, incrementar];

}
const App = () => {
    const [contador, incrementar] = useContador(0);
    return (
        <div>
            contador: {contador}
            <button onClick={incrementar} > Incrementar </button>
        </div>
    )
}

export default App