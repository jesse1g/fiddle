import React from 'react';
import ReactDOM from 'react-dom';
import Fiddle from './Fiddle';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Fiddle />, document.getElementById('app'));
registerServiceWorker();
