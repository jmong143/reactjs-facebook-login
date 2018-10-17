import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
