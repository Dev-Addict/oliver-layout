import {ThemeProvider} from 'styled-components';

import {ItemsProvider} from './contexts/items/items.provider.tsx';
import {THEME} from '../constants/theme.constant.ts';

export function App() {
	return (
		<ThemeProvider theme={THEME}>
			<ItemsProvider>
				<div></div>
			</ItemsProvider>
		</ThemeProvider>
	);
}
