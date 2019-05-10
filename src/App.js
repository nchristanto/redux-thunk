import React from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Provider } from "react-redux";
import store from './store'; // setelah store.js created

function App() {
  return (
     <Provider store={store}> 
      <Form /> 
      <List />
    </Provider>
  )
}

export default App;
