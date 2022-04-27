import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'Teste';
  const newName = name.toUpperCase();
  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Projeto inicial</h1>
      <img src={url} alt="Imagem" />
      <HelloWorld/>
    </div>
  );
}


export default App;
