import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/contacts/store.jsx';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
