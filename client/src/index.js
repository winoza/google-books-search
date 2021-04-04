import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();