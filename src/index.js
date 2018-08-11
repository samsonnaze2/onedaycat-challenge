import React from 'react';
import ReactDOM from 'react-dom';
import { RouterList } from './Route/index';
import './Assets/css/index.css';
import { initDataLocalStorage } from './Global/system';
import registerServiceWorker from './registerServiceWorker';

initDataLocalStorage();
ReactDOM.render(<RouterList />, document.getElementById('root'));
registerServiceWorker();
