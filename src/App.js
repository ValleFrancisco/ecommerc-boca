import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <div className="App">
      <main>
        <ItemListContainer greeting={"Hola Mundo"}/>
      </main>
    </div>
  );
}

export default App; 
