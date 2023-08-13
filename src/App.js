import { useEffect, useState } from 'react';
import { AppLayout } from './App-layout';
import { store } from './store';

function App() {
	const [appState, setAppState] = useState(false);

	useEffect(() => {
		return store.subscribe(() => {
			setAppState((prev) => !prev);
		});
	}, []);

	return <AppLayout />;
}

export default App;
