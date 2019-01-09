// window.CKEDITOR_BASEPATH = `/node_modules/ckeditor/`;

// Include somewhere in your webpack loader file:
import '@/lib/ckeditor_loader/index';

export default {
  data() {
    return {
      editor: null,
    };
  },
  methods: {
    showContents(this: any) {
      // tslint:disable-next-line:no-console
      console.log(this.editor.getData());
    },
  },
  mounted(this: any) {
    this.editor = window.CKEDITOR.replace('editor1');
  },
};
