/**
 * External dependencies
 */
import * as Ariakit from '@ariakit/react';

/**
 * WordPress dependencies
 */
import { forwardRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
import type { WordPressComponentProps } from '../context';
import { useCompositeContext } from './context';
import type { CompositeHoverProps } from './types';

export const CompositeHover = forwardRef<
	HTMLDivElement,
	WordPressComponentProps< CompositeHoverProps, 'div', false >
>( function CompositeHover( props, ref ) {
	const context = useCompositeContext();

	// @ts-expect-error The store prop is undocumented and only used by the
	// legacy compat layer. The `store` prop is documented, but its type is
	// obfuscated to discourage its use outside of the component's internals.
	const store = ( props.store ?? context.store ) as Ariakit.CompositeStore;

	return <Ariakit.CompositeHover store={ store } { ...props } ref={ ref } />;
} );
