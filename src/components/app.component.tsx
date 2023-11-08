import {ItemsProvider} from './contexts/items/items.provider.tsx';

export function App() {
	return (
		<ItemsProvider>
			<div></div>
		</ItemsProvider>
	);
}
