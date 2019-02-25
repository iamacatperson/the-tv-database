import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter } from 'react-router-dom';

const App = () => {
	return (
		<HashRouter>
			<Routes />
		</HashRouter>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));