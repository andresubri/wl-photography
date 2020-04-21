import CMS from "netlify-cms-app";
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

// import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import styles from "!css-loader!sass-loader!../style/all.scss";
// import IndexPagePreview from './preview-templates/IndexPagePreview'

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

// CMS.registerPreviewTemplate('index', IndexPagePreview)
// CMS.registerPreviewTemplate('about', AboutPagePreview)

CMS.registerPreviewStyle(styles.toString(), { raw: true });
CMS.registerPreviewTemplate("blog", BlogPostPreview);

CMS.init();
