// src/App.jsx
import NavBar from "./components/navbar";
import ItemListContainer from "./components/itemlistcontainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a MiTienda!" />
    </>
  );
}

export default App;
