import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';
import { store, persistor } from './store/configureStore';
import App from './App';

import { createRoot } from "react-dom/client";
const rootElement = document.getElementById('root') ?? document.body;
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ChakraProvider>
                    <App />
                </ChakraProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);