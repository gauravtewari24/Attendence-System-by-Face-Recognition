import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import GoogleFontLoader from 'react-google-font-loader';
import store from './redux files/store'
import tachyons from 'tachyons'
import App from './new1/App/App';
import { Provider } from 'react-redux';
ReactDOM.render(
  <React.StrictMode>
        <Provider store={store}>

     <GoogleFontLoader
      fonts={[
        {
          font: 'Raleway',
        },
        {
          font: 'Sanchez',
        },
        {
          font: 'Roboto',
        },
        {
          font: 'Poppins'
        },
        {
          font: 'Roboto Slab'
        }
      ]}
    />
        <App/>
        </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
