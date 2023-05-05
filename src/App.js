import logo from './logo.svg';
import './App.css';
import { socket } from './socket';
import { useEffect, useState} from 'react';

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {

    function onConnect() {
      setIsConnected(true);

      console.log("connected")
    }

    function onDisconnect() {
      setIsConnected(false);
      console.log("disconnected")
    }





    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);





    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p
        onClick={  () =>{

          const payload = {

            user: "0x690B4cBEF361ccD9F2f4eAf0a47BE649b9910b7d",  // This is the user field gotten from the qrdata
            response: 0 // emit 0 for failure and 1 for success
          }
          socket.emit("make_payment" , payload) ; 

          // socket.emit("subscribe_membership" , payload) ; 

          // socket.emit("make_payment" , {user: "0x690B4cBEF361ccD9F2f4eAf0a47BE649b9910b7d", response:0}) ; 
        }}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacts
        </p>
      </header>
    </div>
  );
}

export default App;
