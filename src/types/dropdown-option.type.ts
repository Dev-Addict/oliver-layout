import {Key} from 'react';

export interface DropdownOption<T> {
	label: string;
	value: T;
	key: Key | null | undefined;
}
