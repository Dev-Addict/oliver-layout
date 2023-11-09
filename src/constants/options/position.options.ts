import {DropdownOption} from '../../types/dropdown-option.type.ts';

export const POSITION_OPTIONS: DropdownOption<string>[] = [
	{label: 'Static', value: 'static', key: 'static'},
	{label: 'Relative', value: 'relative', key: 'relative'},
	{label: 'Absolute', value: 'absolute', key: 'absolute'},
	{label: 'Fixed', value: 'fixed', key: 'fixed'},
	{label: 'Sticky', value: 'sticky', key: 'sticky'},
	{label: 'Inherit', value: 'inherit', key: 'inherit'},
	{label: 'Initial', value: 'initial', key: 'initial'},
	{label: 'Revert', value: 'revert', key: 'revert'},
	{label: 'Revert Layer', value: 'revert-layer', key: 'revert-layer'},
	{label: 'Unset', value: 'unset', key: 'unset'},
];
