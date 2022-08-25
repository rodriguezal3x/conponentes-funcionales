import { useReducer, useState } from "react";

//  const state ={contador: 0}
// action ={type:String, payload: any }

const inicial = { contador: 0}

const reducer = (state, action) => {
    switch (action.type){
        case 'incrementar':
            return{ contador: state.contador + 1}
            
         case "decrementar":
            return { contador : state.contador -1}
         case 'set':
            return{ contador: action.payload}
        default :
            return state
        }
}

  

const App = () => {
    const  [state, dispatch] =  useReducer(reducer, inicial)
    const [valor, setValor] = useState(0);

    return(
        <div>
            Contador:{state.contador}
            <input value={valor} onChange={e => setValor(e.target.value)}/>
            <button onClick={() => dispatch({ type: 'incrementar' })}>Mas</button>
            <button onClick={() => dispatch({ type: 'decrementar' })}>Menos</button>
            <button onClick={() => dispatch({ type: 'set', payload: valor })}>set</button>
        </div>
    )
}

export default App;