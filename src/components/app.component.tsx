import {ThemeProvider} from 'styled-components';

import {ItemsProvider} from './contexts/items/items.provider.tsx';
import {Dashboard} from './layout/dashboard.component.tsx';
import {GlobalStyle} from '../styles/global.style.ts';
import {THEME} from '../constants/theme.constant.ts';

export function App() {
	return (
		<ThemeProvider theme={THEME}>
			<ItemsProvider>
				<GlobalStyle />
				<Dashboard />
			</ItemsProvider>
		</ThemeProvider>
	);
}
