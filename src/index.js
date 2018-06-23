import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ThemeSwitcher from "./ThemeSwitcher";

ReactDOM.render(<ThemeSwitcher />, document.getElementById('root'));
registerServiceWorker();
