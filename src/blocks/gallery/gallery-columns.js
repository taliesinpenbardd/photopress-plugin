/**
 * External dependencies
 */
import classnames from 'classnames';
import Masonry from 'react-masonry-component';

/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { VisuallyHidden } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';
import { Component, Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import GalleryImage from '../../shared/gallery/gallery-image.js';
import { defaultColumnsNumber } from '../../shared/shared.js';

/**
 * Main Gallery Class
 */
class ColumnsGallery extends Component {
	
	constructor() {
		
		
		super( ...arguments );
		this.determinBreak = this.determinBreak.bind(this);
		
	}
	
	determinBreak( index ) {
			
		const columns = this.props.attributes.columns;
		
		let num = index + 1;
		
		console.log('num:');
		console.log( num );
		console.log('columns:');
		console.log(columns);
		
		
		if ( num >= columns && num % columns === 0 ) {
			
			return true;
		} else {
			
			return false;
		}			
	}
	
	render() {
	
		const {
			attributes,
			className,
			isSelected,
			setAttributes,
			selectedImage,
			mediaPlaceholder,
			onMoveBackward,
			onMoveForward,
			onRemoveImage,
			onSelectImage,
			onDeselectImage,
			onSetImageAttributes,
			onFocusGalleryCaption,
			insertBlocksAfter,
		} = this.props;
	
		const {
			align,
			columns = defaultColumnsNumber( attributes ),
			caption,
			imageCrop,
			images,
			gridSize,
			gutter,
			gutterMobile
		} = attributes;
		
		return (
			
			<div>
			
				<ul className="photopress-gallery photopress-gallery-columns columns-4" style={ {padding: '0', margin: '0'} } >
					
					
					{ images.map( ( img, index ) => {
						
								const ariaLabel = sprintf(
									/* translators: 1: the order number of the image. 2: the total number of images. */
									__( 'image %1$d of %2$d in gallery' ),
									index + 1,
									images.length
								);
							
								const needsBreak = this.determinBreak( index );
								console.log(needsBreak);
								let rowBreak;
								
								rowBreak = needsBreak ? <div key={ index + '_break'} className="flex-row-break"></div> : '';

								const galleryImage = (
									
													
										<GalleryImage
											{ ...this.props }
											url={ img.url }
											alt={ img.alt }
											id={ img.id }
											isFirstItem={ index === 0 }
											isLastItem={ index + 1 === images.length }
											isSelected={
												isSelected && selectedImage === index
											}
											onMoveBackward={ onMoveBackward( index ) }
											onMoveForward={ onMoveForward( index ) }
											onRemove={ onRemoveImage( index ) }
											onSelect={ onSelectImage( index ) }
											onDeselect={ onDeselectImage( index ) }
											setAttributes={ ( attrs ) =>
												onSetImageAttributes( index, attrs )
											}
											caption={ img.caption }
											aria-label={ ariaLabel }
										/>
										
									
									
									
								);
							
								
								return (
										
										
										<li
											className="photopress-gallery-item"
											key={ img.id || img.url }
											
										>
										
										<GalleryImage
											{ ...this.props }
											url={ img.url }
											alt={ img.alt }
											id={ img.id }
											isFirstItem={ index === 0 }
											isLastItem={ index + 1 === images.length }
											isSelected={
												isSelected && selectedImage === index
											}
											onMoveBackward={ onMoveBackward( index ) }
											onMoveForward={ onMoveForward( index ) }
											onRemove={ onRemoveImage( index ) }
											onSelect={ onSelectImage( index ) }
											onDeselect={ onDeselectImage( index ) }
											setAttributes={ ( attrs ) =>
												onSetImageAttributes( index, attrs )
											}
											caption={ img.caption }
											aria-label={ ariaLabel }
										/>
										
										</li>
										
								);
					} ) }
		
								
				</ul>
				
				<div>
			
					{ mediaPlaceholder }
			
				</div>	
				
			</div>	
		);
	}
}

export default ColumnsGallery;
