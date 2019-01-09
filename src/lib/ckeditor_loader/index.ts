/* index.js */

import './loader.ts';
import 'ckeditor/ckeditor';

declare global {
  interface Window {
    CKEDITOR: any;
    CKEDITOR_BASEPATH: any;
  }
}

// You can replace this with you own init script, e.g.:
// - jQuery(document).ready()
// window.onload = () => {
//   window.CKEDITOR.replaceAll();
// };
