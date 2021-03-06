/**
 * Dependancies
 */
import {
	every,
	filter,
	find,
	forEach,
	get,
	isEmpty,
	map,
	reduce,
	some,
	toString,
} from 'lodash';

/**
 * WordPress dependancies
 */
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, QueryControls, RadioControl, ToggleControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';


	const linkOptions = [
	
			{ value: 'attachment', label: __( 'Attachment Page' ) },
			{ value: 'media', label: __( 'Media File' ) },
			{ value: 'none', label: __( 'None' ) },
		];
		
		const styleOptions = [
			
			{ value: 'columns', label: __( 'Columns' ) },
			{ value: 'masonry', label: __( 'Masonry' ) },
			{ value: 'rows', label: __( 'Justified' ) },
			{ value: 'mosaic', label: __( 'Mosaic' ) }
		];
		
class Inspector extends Component {
	
	constructor() {
		
		super( ...arguments );
		
		this.setLinkTo = this.setLinkTo.bind( this );
		this.setGalleryStyle = this.setGalleryStyle.bind( this );
		this.toggleImageCrop = this.toggleImageCrop.bind( this );
		this.updateImagesSize = this.updateImagesSize.bind( this );
		this.setColumns = this.setColumns.bind( this );
		this.setColumnWidth = this.setColumnWidth.bind( this );
		this.setGutter = this.setGutter.bind( this );
	}
	
	setLinkTo( value ) {
		this.setAttributes( { linkTo: value } );
	}
	
	setGalleryStyle( value ) {
		
		this.setAttributes( { galleryStyle: value } );
	}
	
	setColumns( value ) {
	
		this.setAttributes( { columns: value } );
	}
	
	setColumnWidth( value ) {
	
		this.setAttributes( { columnWidth: value } );
	}
	
	setGutter ( value ) {
		
		var bottom = value;
		
		this.setAttributes( { gutter: value } );
		this.setAttributes( { bottomGutter: bottom } );
		
	}
	
	toggleImageCrop() {
		this.setAttributes( { imageCrop: ! this.props.attributes.imageCrop } );
	}

	getImageCropHelp( checked ) {
		return checked
			? __( 'Thumbnails are cropped to align.' )
			: __( 'Thumbnails are not cropped.' );
	}
	
	updateImagesSize( sizeSlug ) {
		const {
			attributes: { images },
			resizedImages,
		} = this.props;

		const updatedImages = map( images, ( image ) => {
			if ( ! image.id ) {
				return image;
			}
			const url = get( resizedImages, [
				parseInt( image.id, 10 ),
				sizeSlug, 'src'
			] );
			
			return {
				...image,
				...( url && { url } ),
			};
		} );

		this.setAttributes( { images: updatedImages, sizeSlug } );
	}
	
	getImagesSizeOptions() {
		
		const { imageSizes, resizedImages } = this.props;
		return map(
			filter( imageSizes, ( { slug } ) =>
				some( resizedImages, ( sizes ) => sizes[ slug ] )
			),
			( { name, slug } ) => ( { value: slug, label: name } )
		);
	}
	
	setAttributes( attributes ) {
		
		this.props.setAttributes( attributes );
	}
	
		
	render() {
		
		const {
			attributes,
			className,
			isSelected,
			noticeUI,
			insertBlocksAfter,
		} = this.props;
		
		const {
			imageCrop,
			images,
			linkTo,
			sizeSlug,
			galleryStyle,
			gutter,
			columns,
			columnWidth,
			showCaptions,
			rowHeight,
			linkToSlideshow
		} = attributes;
		
		
		const hasImages = !! images.length;
		
		const imageSizeOptions = this.getImagesSizeOptions();
		
		const shouldShowColumnStyleOptions = hasImages && galleryStyle === 'columns';
		const shouldShowMasonryStyleOptions = hasImages && galleryStyle === 'masonry';
		
		return (
			
			<InspectorControls>
			
				<PanelBody title={ __( 'Gallery settings' ) }>
				
				<Fragment>
				
					
					<SelectControl
						label={ __( 'Style' ) }
						value={ galleryStyle }
						onChange={ ( value ) => { this.setGalleryStyle( value ) } }
						options={ styleOptions }
					/>
					
					{ /*
						shouldShowColumnStyleOptions && (
						<SelectControl
							label={ __( 'Images size' ) }
							value={ sizeSlug }
							options={ imageSizeOptions }
							onChange={ this.updateImagesSize }
						/>
					) 
					*/}
					
					{galleryStyle === 'columns' && images.length > 1 &&
						
						<RangeControl
							label={ __( 'Columns' ) }
							value={ columns }
							onChange={ ( value ) => { this.setColumns( value ) } }
							min={ 1 }
							max={ 8 }
							step={ 1 }		
						/>
					}
					
					{galleryStyle === 'rows' &&
						
						<RangeControl
							label={ __( 'Row Height' ) }
							value={ rowHeight }
							onChange={ ( value ) => { this.setAttributes( {rowHeight: value} ) } }
							min={ 100 }
							max={ 500 }
							step={ 10 }		
						/>
					}
					
					{galleryStyle === 'mosaic' &&
						
						<RangeControl
							label={ __( 'Row Height' ) }
							value={ rowHeight }
							onChange={ ( value ) => { this.setAttributes( {rowHeight: value} ) } }
							min={ 100 }
							max={ 500 }
							step={ 10 }		
						/>
					}
					
					{ shouldShowMasonryStyleOptions && images.length > 1 && 
					

						<RangeControl
							label={ __( 'Column Width' ) }
							value={ columnWidth }
							onChange={ ( value ) => { this.setColumnWidth( value ) } }
							min={ 100 }
							max={ 500 }
							step={ 10 }		
						/>				
					}
					
					<RangeControl
							label={ __( 'Gutter' ) }
							value={ gutter }
							onChange={ ( value ) => { 
								
								this.setGutter( value )
								
								}  
							}
							min={ 0 }
							max={ 100 }
							step={ 10 }		
						/>
					
					{galleryStyle === 'columns' &&
						
						<ToggleControl
								label={ __( 'Crop images' ) }
								checked={ !! imageCrop }
								onChange={ this.toggleImageCrop }
								help={ "Crop images to create a uniform display." }
						/>
					}

					<ToggleControl
						label={ __( 'Show Captions' ) }
						checked={ !! showCaptions }
						onChange={ ( value ) => { this.setAttributes( {showCaptions: value} ) } }
						help={ "Display image captions." }
					/>

					
					<SelectControl
						label={ __( 'Link to' ) }
						value={ linkTo }
						onChange={ this.setLinkTo }
						options={ linkOptions }
					/>
					
					<ToggleControl
						label={ __( 'Slideshow' ) }
						checked={ !! linkToSlideshow }
						onChange={ ( value ) => { this.setAttributes( {linkToSlideshow: value} ) } }
						help={ "Display a slideshow when images are clicked." }
					/>
					
				</Fragment>	
				
				</PanelBody>
				
			</InspectorControls>
		)
	}
}

export default Inspector;