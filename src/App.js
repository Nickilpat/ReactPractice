import logo from './logo.svg';
import './App.scss';
import Cake from './components/Cake/Cake';
import Greeting from './components/Greeting/Greeting';
import Message from './components/Message/Message';

function App() {
  return (
    <div className="App">
      <Greeting></Greeting>
      <Cake></Cake>
      <Message></Message>
    </div>
  );
}

export default App;
