import {FormikErrors} from 'formik';

import {ItemFields} from './item.fields.ts';

export const validateItem =
	({
		name,
		width,
		height,
		color,
		display,
		position,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,
		marginTop,
		marginRight,
		marginLeft,
		marginBottom,
	}: ItemFields) => {
		const errors: FormikErrors<ItemFields> = {};

		if (!name)
			errors.name = 'Required';
		else if (name.length > 100)
			errors.name = 'Must be 100 characters or less';

		if (!width)
			errors.width = 'Required';
		else if (isNaN(Number(width)))
			errors.width = 'Must be a number';

		if (!height)
			errors.height = 'Required';
		else if (isNaN(Number(height)))
			errors.height = 'Must be a number';

		if (color && !CSS.supports('color', color))
			errors.color = 'Must be a valid color';

		if (display && !CSS.supports('display', display))
			errors.display = 'Must be a valid display value';

		if (position && !CSS.supports('position', position))
			errors.position = 'Must be a valid position value';

		if (paddingTop && isNaN(Number(paddingTop)))
			errors.paddingTop = 'Must be a number';

		if (paddingRight && isNaN(Number(paddingRight)))
			errors.paddingRight = 'Must be a number';

		if (paddingBottom && isNaN(Number(paddingBottom)))
			errors.paddingBottom = 'Must be a number';

		if (paddingLeft && isNaN(Number(paddingLeft)))
			errors.paddingLeft = 'Must be a number';

		if (marginTop && isNaN(Number(marginTop)))
			errors.marginTop = 'Must be a number';

		if (marginRight && isNaN(Number(marginRight)))
			errors.marginRight = 'Must be a number';

		if (marginBottom && isNaN(Number(marginBottom)))
			errors.marginBottom = 'Must be a number';

		if (marginLeft && isNaN(Number(marginLeft)))
			errors.marginLeft = 'Must be a number';

		return errors;
	};
