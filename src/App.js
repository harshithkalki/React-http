import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import UseState from './components/UseState';
import Login from './components/Login';
import UseEffect from './components/UseEffect';
import Hookname from './components/Hookname';
import UseRef from './components/UseRef';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <div className="App">
      {/* <UseRef /> */}
      <Login />
      {/* <UseEffect /> */}
      {/* <Hookname /> */}

      {/* <PostList /> */}
      {/* <UseState /> */}


    </div>
  );
}

export default App;
