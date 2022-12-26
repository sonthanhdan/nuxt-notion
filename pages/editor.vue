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
    <div class="max-w-4xl mx-auto relative">
      <button
        type="button"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-0.5 mr-2 mb-2 mt-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Add emoji
      </button>
      <button
        type="button"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-0.5 mr-2 mb-2 mt-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Add header image
      </button>
      <button
        type="button"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-0.5 mr-2 mb-2 mt-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        @click="preview"
      >
        Preview
      </button>
      <button
        type="button"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-0.5 mr-2 mb-2 mt-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        @click="save"
      >
        Save
      </button>
    </div>
    <div class="max-w-4xl mx-auto relative">
      <textarea
        class="h-9 w-full shadow-none m-auto text-3xl font-bold whitespace-pre-wrap box-border overflow-hidden border-none pt-1 resize-none border-transparent focus:outline-none"
        placeholder="Give me a title"
        rows="1"
      ></textarea>
    </div>
    <div class="max-w-4xl mx-auto relative">
      <div id="editor" class="w-full h-2/6"></div>
      <div id="preview" v-html="parsedHTML"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EditorJS from "@editorjs/editorjs";
const EditorHtmlParser = require("editorjs-html")();

declare global {
  interface Window {
    editor: any;
  }
}

import Header from "@editorjs/header";
import Image from "@editorjs/image";
import Quote from "@editorjs/quote";
import Paragraph from "@editorjs/paragraph";
import CodeTool from "@editorjs/code";
import List from "@editorjs/list";
import Delimiter from "@editorjs/delimiter";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import Checklist from "@editorjs/checklist";
import LinkTool from "@editorjs/link";
import RawTool from "@editorjs/raw";
import Embed from "@editorjs/embed";
import InlineCode from "@editorjs/inline-code";
import Marker from "@editorjs/marker";
import Mention from '@groupher/editor-mention';
import AlignmentBlockTune from "editorjs-text-alignment-blocktune";
import FontFamily from "editorjs-inline-font-family-tool";
import FontSize from "editorjs-inline-font-size-tool";
// import SlashCommand from "~/modules/editor-slash-command";

// import { MDParser, MDImporter } from "~/modules/editorjs-markdown-parser";

export default Vue.extend({
  name: "Editor",
  head() {
    return {
      // script: [
      //   {
      //     src: 'https://cdn.jsdelivr.net/npm/editorjs-html@3.4.0/build/edjsHTML.browser.js'
      //   }
      // ],
    };
  },
  data() {
    return {
      value: null,
      editor: {} as any,
      parsedHTML: "",
    };
  },
  methods: {
    async preview() {
      await this.save();
      this.parsedHTML = await EditorHtmlParser.parse(this.value).join("");
    },
    async save() {
      const saved: any = await this.editor.saver.save();
      this.value = saved;
    },
    myEditor() {
      if (Object.keys(this.editor).length) {
        return;
      }
      this.editor = new EditorJS({
        holder: "editor",
        autofocus: true,
        initialBlock: "paragraph",
        placeholder: "Let`s write an awesome story!",
        tools: {
          header: {
            class: Header,
            inlineToolbar: ["marker", "inlineCode"],
            config: {
              placeholder: "",
            },
          },

          image: {
            class: Image,
            inlineToolbar: true,
            config: {
              types: "image/*, video/mp4",
              endpoints: {
                byFile: "/api/transport/image",
                byUrl: "/api/transport/fetch",
              },
            },
          },
          paragraph: {
            class: Paragraph,
          },
          alignmentSetting: {
            class: AlignmentBlockTune,
            config: {
              default: "right",
              blocks: {
                header: "center",
                list: "right",
              },
            },
          },
          linkTool: {
            class: LinkTool,
            config: {
              endpoint: "/api/fetchUrl",
            },
          },
          quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+O",
            config: {
              quotePlaceholder: "Цитата",
              captionPlaceholder: "Автор",
            },
          },
          code: {
            class: CodeTool,
            shortcut: "CMD+SHIFT+D",
          },

          list: {
            class: List,
            inlineToolbar: true,
          },

          delimiter: Delimiter,
          // mention: Mention,
          // slashCommand: SlashCommand,

          table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3,
            },
          },

          warning: {
            class: Warning,
            inlineToolbar: true,
          },

          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },
          fontFamily: FontFamily,
          fontSize: FontSize,
          /**
           * Inline Tools
           */
          inlineCode: {
            class: InlineCode,
            shortcut: "CMD+SHIFT+C",
          },

          marker: {
            class: Marker,
            shortcut: "CMD+SHIFT+M",
          },

          raw: RawTool,
          // markdownParser: MDParser,
          // markdownImporter: MDImporter,
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true,
              },
            },
          },
        },
        // Previously saved data that should be rendered
        data: {} as any,

        onReady: () => {
          console.log("Editor.js is ready to work!");
        },
        onChange: (api, event) => {
          console.log("Now I know that Editor's content changed!", event);
        },
        i18n: {
          messages: {
            ui: {
              // Translations of internal UI components of the editor.js core
            },
            toolNames: {
              // Section for translation Tool Names: both block and inline tools
            },
            tools: {
              // Section for passing translations to the external tools classes
              // The first-level keys of this object should be equal of keys ot the 'tools' property of EditorConfig
            },
            blockTunes: {
              // Section allows to translate Block Tunes
            },
          },
        },
      });
    },
  },
  mounted: function () {
    this.myEditor();
  },
});
</script>

<style lang="css">
.ce-block__content,
.ce-toolbar__content {
  max-width: 100%;
}
.cdx-block {
  max-width: 100% !important;
}
</style>
