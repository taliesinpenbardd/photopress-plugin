const xmpLabels = {
	
	"aux:Lens" 							: "Lens",
	
	"dc:contributor" 					: "Other Contributor(s)",
	"dc:coverage" 						: "Coverage (scope)",
	"dc:creator" 						: "Creator/Author",
	"dc:date" 							: "Date",
	"dc:description"			 		: "Caption",
	"dc:format" 						: "MIME Data Format",
	"dc:identifier" 					: "Unique Resource Identifer",
	"dc:language" 						: "Language(s)",
	"dc:publisher" 						: "Publisher(s)",
	"dc:relation" 						: "Relations to other documents",
	"dc:rights" 						: "Rights Statement",
	"dc:source" 						: "Source (from which this Resource is derived)",
	"dc:subject" 						: "Keywords",
	"dc:title" 							: "Title",
	"dc:type" 							: "Resource Type",
	
	
	
	"xmp:Advisory" 						: "Externally Editied Properties",
	"xmp:BaseURL" 						: "Base URL for relative URL's",
	"xmp:CreateDate"			 		: "Original Creation Date",
	"xmp:CreatorTool" 					: "Creator Tool",
	"xmp:Identifier" 					: "Identifier(s)",
	
	"xmpidq:Scheme" 					: "Identification Scheme",
	
	// These are not in spec but Photoshop CS seems to use them
	"xap:Advisory" 						: "Externally Editied Properties",
	"xap:BaseURL" 						: "Base URL for relative URL's",
	"xap:CreateDate" 					: "Original Creation Date",
	"xap:CreatorTool" 					: "Creator Tool",
	"xap:Identifier" 					: "Identifier(s)",
	"xap:MetadataDate" 					: "Metadata Last Modify Date",
	"xap:ModifyDate" 					: "Resource Last Modify Date",
	"xap:Nickname" 						: "Nickname",
	"xap:Thumbnails" 					: "Thumbnails",
	"xapidq:Scheme" 					: "Identification Scheme",
	
	"xapRights:Certificate"			 	: "Certificate",
	"xapRights:Copyright" 				: "Copyright",
	"xapRights:Marked" 					: "Marked",
	"xapRights:Owner" 					: "Owner",
	"xapRights:UsageTerms" 				: "Legal Terms of Usage",
	"xapRights:WebStatement" 			: "Web Page describing rights statement (Owner URL)",
	
	"xapMM:ContainedResources" 			: "Contained Resources",
	"xapMM:ContributorResources" 		: "Contributor Resources",
	"xapMM:DerivedFrom" 				: "Derived From",
	"xapMM:DocumentID" 					: "Document ID",
	"xapMM:History" 					: "History",
	"xapMM:LastURL" 					: "Last Written URL",
	"xapMM:ManagedFrom"		 			: "Managed From",
	"xapMM:Manager" 					: "Asset Management System",
	"xapMM:ManageTo" 					: "Manage To",
	"xapMM:xmpMM:ManageUI" 				: "Managed Resource URI",
	"xapMM:ManagerVariant" 				: "Particular Variant of Asset Management System",
	"xapMM:RenditionClass" 				: "Rendition Class",
	"xapMM:RenditionParams"		 		: "Rendition Parameters",
	"xapMM:RenditionOf" 				: "Rendition Of",
	"xapMM:SaveID" 						: "Save ID",
	"xapMM:VersionID" 					: "Version ID",
	"xapMM:Versions" 					: "Versions",
	
	"xapBJ:JobRef" 						: "Job Reference",
	
	"xmpTPg:MaxPageSize"	 			: "Largest Page Size",
	"xmpTPg:NPages" 					: "Number of pages",
	
	"photoshop:AuthorsPosition" 		: "Authors Position",
	"photoshop:CaptionWriter"			: "Caption Writer",
	"photoshop:Category" 				: "Category",
	"photoshop:City" 					: "City",
	"photoshop:Country" 				: "Country",
	"photoshop:Credit" 					: "Credit",
	"photoshop:DateCreated" 			: "Creation Date",
	"photoshop:Headline" 				: "Headline",
	"photoshop:History" 				: "History", // Not in XMP spec
	"photoshop:Instructions" 			: "Instructions",
	"photoshop:Source" 					: "Source",
	"photoshop:State" 					: "State",
	"photoshop:SupplementalCategories" 	: "Supplemental Categories",
	"photoshop:TransmissionReference" 	: "Technical (Transmission) Reference",
	"photoshop:Urgency" : "Urgency",
	
	"tiff:ImageWidth" 					: "Image Width",
	"tiff:ImageLength" 					: "Image Height",
	"tiff:BitsPerSample" 				: "Bits Per Sample",
	"tiff:Compression" 					: "Compression",
	"tiff:PhotometricInterpretation" 	: "Photometric Interpretation",
	"tiff:Orientation" 					: "Orientation",
	"tiff:SamplesPerPixel" 				: "Samples Per Pixel",
	"tiff:PlanarConfiguration" 			: "Planar Configuration",
	"tiff:YCbCrSubSampling" 			: "YCbCr Sub-Sampling",
	"tiff:YCbCrPositioning" 			: "YCbCr Positioning",
	"tiff:XResolution" 					: "X Resolution",
	"tiff:YResolution" 					: "Y Resolution",
	"tiff:ResolutionUnit" 				: "Resolution Unit",
	"tiff:TransferFunction" 			: "Transfer Function",
	"tiff:WhitePoint" 					: "White Point",
	"tiff:PrimaryChromaticities" 		: "Primary Chromaticities",
	"tiff:YCbCrCoefficients" 			: "YCbCr Coefficients",
	"tiff:ReferenceBlackWhite" 			: "Black & White Reference",
	"tiff:DateTime" 					: "Date & Time",
	"tiff:ImageDescription" 			: "Image Description",
	"tiff:Make" 						: "Make",
	"tiff:Model" 						: "Camera",
	"tiff:Software" 					: "Software",
	"tiff:Artist" 						: "Artist",
	"tiff:Copyright" 					: "Copyright",
	
	"exif:ExifVersion" 					: "Exif Version",
	"exif:FlashpixVersion" 				: "Flash pix Version",
	"exif:ColorSpace" 					: "Color Space",
	"exif:ComponentsConfiguration" 		: "Components Configuration",
	"exif:CompressedBitsPerPixel" 		: "Compressed Bits Per Pixel",
	"exif:PixelXDimension" 				: "Pixel X Dimension",
	"exif:PixelYDimension" 				: "Pixel Y Dimension",
	"exif:MakerNote" 					: "Maker Note",
	"exif:UserComment"					: "User Comment",
	"exif:RelatedSoundFile" 			: "Related Sound File",
	"exif:DateTimeOriginal" 			: "Date & Time of Original",
	"exif:DateTimeDigitized" 			: "Taken On",
	"exif:ExposureTime" 				: "Shutter Speed",
	"exif:FNumber" 						: "Aperture",
	"exif:ExposureProgram" 				: "Exposure Program",
	"exif:SpectralSensitivity" 			: "Spectral Sensitivity",
	"exif:ISOSpeedRatings" 				: "ISO Speed",
	"exif:OECF" 						: "Opto-Electronic Conversion Function",
	"exif:ShutterSpeedValue" 			: "Shutter Speed Value",
	"exif:ApertureValue" 				: "Aperture Value",
	"exif:BrightnessValue" 				: "Brightness Value",
	"exif:ExposureBiasValue" 			: "Exposure Bias Value",
	"exif:MaxApertureValue" 			: "Max Aperture Value",
	"exif:SubjectDistance" 				: "Subject Distance",
	"exif:MeteringMode" 				: "Metering Mode",
	"exif:LightSource" 					: "Light Source",
	"exif:Flash" 						: "Flash",
	"exif:FocalLength" 					: "Focal Length",
	"exif:SubjectArea" 					: "Subject Area",
	"exif:FlashEnergy" 					: "Flash Energy",
	"exif:SpatialFrequencyResponse" 	: "Spatial Frequency Response",
	"exif:FocalPlaneXResolution" 		: "Focal Plane X Resolution",
	"exif:FocalPlaneYResolution" 		: "Focal Plane Y Resolution",
	"exif:FocalPlaneResolutionUnit" 	: "Focal Plane Resolution Unit",
	"exif:SubjectLocation" 				: "Subject Location",
	"exif:SensingMethod" 				: "Sensing Method",
	"exif:FileSource" 					: "File Source",
	"exif:SceneType" 					: "Scene Type",
	"exif:CFAPattern" 					: "Colour Filter Array Pattern",
	"exif:CustomRendered"				: "Custom Rendered",
	"exif:ExposureMode" 				: "Exposure Mode",
	"exif:WhiteBalance" 				: "White Balance",
	"exif:DigitalZoomRatio" 			: "Digital Zoom Ratio",
	"exif:FocalLengthIn35mmFilm" 		: "Focal Length In 35mm Film",
	"exif:SceneCaptureType" 			: "Scene Capture Type",
	"exif:GainControl" 					: "Gain Control",
	"exif:Contrast" 					: "Contrast",
	"exif:Saturation" 					: "Saturation",
	"exif:Sharpness" 					: "Sharpness",
	"exif:DeviceSettingDescription" 	: "Device Setting Description",
	"exif:SubjectDistanceRange" 		: "Subject Distance Range",
	"exif:ImageUniqueID" 				: "Image Unique ID",
	"exif:GPSVersionID" 				: "GPS Version ID",
	"exif:GPSLatitude" 					: "GPS Latitude",
	"exif:GPSLongitude" 				: "GPS Longitude",
	"exif:GPSAltitudeRef" 				: "GPS Altitude Reference",
	"exif:GPSAltitude" 					: "GPS Altitude",
	"exif:GPSTimeStamp" 				: "GPS Time Stamp",
	"exif:GPSSatellites" 				: "GPS Satellites",
	"exif:GPSStatus" 					: "GPS Status",
	"exif:GPSMeasureMode" 				: "GPS Measure Mode",
	"exif:GPSDOP" 						: "GPS Degree Of Precision",
	"exif:GPSSpeedRef" 					: "GPS Speed Reference",
	"exif:GPSSpeed" 					: "GPS Speed",
	"exif:GPSTrackRef" 					: "GPS Track Reference",
	"exif:GPSTrack" 					: "GPS Track",
	"exif:GPSImgDirectionRef" 			: "GPS Image Direction Reference",
	"exif:GPSImgDirection" 				: "GPS Image Direction",
	"exif:GPSMapDatum" 					: "GPS Map Datum",
	"exif:GPSDestLatitude" 				: "GPS Destination Latitude",
	"exif:GPSDestLongitude" 			: "GPS Destination Longitude",
	"exif:GPSDestBearingRef" 			: "GPS Destination Bearing Reference",
	"exif:GPSDestBearing" 				: "GPS Destination Bearing",
	"exif:GPSDestDistanceRef" 			: "GPS Destination Distance Reference",
	"exif:GPSDestDistance" 				: "GPS Destination Distance",
	"exif:GPSProcessingMethod" 			: "GPS Processing Method",
	"exif:GPSAreaInformation" 			: "GPS Area Information",
	"exif:GPSDifferential" 				: "GPS Differential",
	// Exif Flash
	"exif:Fired" 						: "Fired",
	"exif:Return" 						: "Return",
	"exif:Mode" 						: "Mode",
	"exif:Function" 					: "Function",
	"exif:RedEyeMode" 					: "Red Eye Mode",
	// Exif OECF/SFR
	"exif:Columns" 						: "Columns",
	"exif:Rows" 						: "Rows",
	"exif:Names" 						: "Names",
	"exif:Values" 						: "Values",
	"exif:Settings" 					: "Settings",
	
	"stDim:w" 							: "Width",
	"stDim:h" 							: "Height",
	"stDim:unit" 						: "Units",
	
	"xapGImg:height"	 				: "Height",
	"xapGImg:width" 					: "Width",
	"xapGImg:format" 					: "Format",
	"xapGImg:image" 					: "Image",
	
	"stEvt:action" 						: "Action",
	"stEvt:instanceID" 					: "Instance ID",
	"stEvt:parameters" 					: "Parameters",
	"stEvt:softwareAgent" 				: "Software Agent",
	"stEvt:when" 						: "When",
	
	"stRef:instanceID" 					: "Instance ID",
	"stRef:documentID" 					: "Document ID",
	"stRef:versionID" 					: "Version ID",
	"stRef:renditionClass" 				: "Rendition Class",
	"stRef:renditionParams" 			: "Rendition Parameters",
	"stRef:manager" 					: "Asset Management System",
	"stRef:managerVariant" 				: "Particular Variant of Asset Management System",
	"stRef:manageTo" 					: "Manage To",
	"stRef:manageUI" 					: "Managed Resource URI",
	
	"stVer:comments" 					: "",
	"stVer:event" 						: "",
	"stVer:modifyDate" 					: "",
	"stVer:modifier" 					: "",
	"stVer:version" 					: "",
	
	"stJob:name" 						: "Job Name",
	"stJob:id" 							: "Unique Job ID",
	"stJob:url" 						: "URL for External Job Management File"
			
}

export default xmpLabels;