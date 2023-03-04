import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import TodoPage from './pages/TodoPage';

function App() {
  return (
      <ChakraProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={TodoPage} />
          </Switch>
        </Router>
      </ChakraProvider>
  );
}

export default App;
