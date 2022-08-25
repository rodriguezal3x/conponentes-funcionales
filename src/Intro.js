const impura = () => new Date().toLocaleString()

console.log(impura())

// funcion pura nunca cambia el valor de retotno
 const MiComponete = ({miProp}) => {
  return (
    <div>
      nombre: {miProp}
    </div>
  )
}

const App= () => {
  return (
    <MiComponete miProp={'chanchito'} />
  )
}

export default App;
