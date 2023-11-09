import {LegacyRef, MutableRefObject, RefCallback} from 'react';

export const mergeRefs =
	<T>(
		...refs: (MutableRefObject<T> | LegacyRef<T> | ((node: T | null) => void))[]
	): RefCallback<T> =>
		(value) =>
			refs.forEach((ref) =>
				typeof ref === 'function'
					? ref(value)
					: ref !== null && ((ref as MutableRefObject<T | null>).current = value),
			);
