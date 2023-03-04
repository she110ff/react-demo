import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import TodoPage from './pages/TodoPage';

function App() {
  return (
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoPage/>} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
  );
}

export default App;
