<template>
  <div class="mt-20">
    <nav class="text-base max-w-4xl mx-auto relative">
      <ol class="list-reset flex">
        <li><a href="#" class="text-blue-600 hover:text-blue-700">Space</a></li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li>
          <a href="#" class="text-blue-600 hover:text-blue-700">X</a>
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li class="text-gray-500">me</li>
      </ol>
    </nav>
    <div class="max-w-4xl mx-auto relative h-full ">
      <v-md-editor
        ref="editor"
        class="w-full h-full mt-3"
        v-model="value"
        height="600px"
        placeholder="Write something awesome!"
        :autofocus="true"
        @change="onEditorChange"
        @save="onEditorSave"
        @upload-image="onUploadImage"
        @copy-code-success="onCopyCodeSuccess"
        :toolbar="toolbar"
        left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code emoji | tip todo-list"
        right-toolbar="preview toc sync-scroll fullscreen save"
        :disabled-menus="disabledMenus"
      />
      <v-md-preview-html
        :html="parsedHTML"
        preview-class="vuepress-markdown-body"
      ></v-md-preview-html>
      <!-- <div id="preview" v-html="parsedHTML"></div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VMdEditor from "@kangc/v-md-editor";

// @ts-ignore
import VMdPreviewHtml from "@kangc/v-md-editor/lib/preview-html";
// @ts-ignore
import EnUS from "@kangc/v-md-editor/lib/lang/en-US";
// @ts-ignore
import createTipPlugin from "@kangc/v-md-editor/lib/plugins/tip/index";
// @ts-ignore
import createEmojiPlugin from "@kangc/v-md-editor/lib/plugins/emoji/index";
// @ts-ignore
import createTodoListPlugin from "@kangc/v-md-editor/lib/plugins/todo-list/index";
// @ts-ignore
import createCopyCodePlugin from "@kangc/v-md-editor/lib/plugins/copy-code/index";
// @ts-ignore
import createCopyCodePreview from "@kangc/v-md-editor/lib/plugins/copy-code/preview";
// @ts-ignore
import createAlignPlugin from "@kangc/v-md-editor/lib/plugins/align";
import "@kangc/v-md-editor/lib/style/preview-html.css";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import "@kangc/v-md-editor/lib/theme/style/github.css";
import "@kangc/v-md-editor/lib/plugins/tip/tip.css";
import "@kangc/v-md-editor/lib/plugins/emoji/emoji.css";
import "@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css";
import "@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css";
import "@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css";

// @ts-ignore
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
import hljs from "highlight.js";

VMdEditor.lang.use("en-US", EnUS);
VMdEditor.lang.add({
  "en-US": {
    h1: {
      toolbar: "Heading 1"
    }
  }
});
VMdEditor.use(githubTheme, {
  Hljs: hljs
});
VMdEditor.use(createAlignPlugin());
VMdEditor.use(createEmojiPlugin());
VMdEditor.use(createTipPlugin());
VMdEditor.use(createTodoListPlugin());
VMdEditor.use(createCopyCodePlugin());
VMdPreviewHtml.use(createCopyCodePreview());
Vue.use(VMdPreviewHtml);
Vue.use(VMdEditor);

export default Vue.extend({
  name: "MarkdownEditor",
  head() {
    return {
      script: [],
    };
  },
  data() {
    return {
      value: "",
      parsedHTML: "",
      disabledMenus: []
    };
  },
  computed: {
    toolbar() {
      return {
        customToolbar: {
          icon: "icon class",
          title: "title",
          action(editor: any) {}
        }
      };
    }
  },
  methods: {
    onEditorChange(text: string, html: string) {
        console.log('onEditorChange', text, html);
    },
    onEditorSave(text: string, html: string) {
       console.log('onEditorSave', text, html);
    },
    onImageClick(images: any[], currentIndex: number) {
        console.log('onImageClick', images, currentIndex);
    },
    onCopyCodeSuccess(code: string) {
      console.log('onCopyCodeSuccess', code);
    },
    onUploadImage(event: any, insertImage: any, files: any) {
      // Get the files and upload them to the file server, then insert the corresponding content into the editor
      console.log('onUploadImage', insertImage, files);
    }
  }
});
</script>

<style lang="css"></style>
