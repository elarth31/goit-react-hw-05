import AppRoutes from 'routes/AppRoutes';
import './App.css';

import Navigation from 'components/Navigation/Navigation';

function App() {
	return (
		<>
			<header>
				<Navigation />
			</header>
			<main>
				<AppRoutes />
			</main>
		</>
	);
}

export default App;