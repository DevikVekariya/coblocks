/**
 * Internal dependencies
 */
import metadata from './block.json';

/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'raw',
			selector: 'div.wp-block-coblocks-author',
			schema: {
				div: {
					classes: [ 'wp-block-coblocks-author' ],
				},
			},
		},
		{
			type: 'prefix',
			prefix: ':author',
			transform: function( content ) {
				return createBlock( metadata.name, {
					content,
				} );
			},
		},
	],
};

export default transforms;
