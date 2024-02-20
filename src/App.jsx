import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {

  return (
    <div className="App container text-center">
        <NavBar />
        <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  )
}

export default App
