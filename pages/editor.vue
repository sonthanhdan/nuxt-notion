<template>
  <main>
    <div id="editor"></div>
    <button style="margin-left: 30%;" type="button" name="button" @click="save()">save</button>
    <div class="editorx_body">
      <pre>{{ value }}</pre>
    </div>
    <h2>preview</h2>
    <div v-html="parsedHTML"></div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import EditorJS from '@editorjs/editorjs';
const EditorHtmlParser = require("editorjs-html")()
declare global {
  interface Window { editor: any; }
}

// import Image from '@editorjs/image'

const requiredTools = {
  image: {
    class: Image,
    config: {
      field: "files.image",
      additionalRequestData: {
        data: JSON.stringify({})
      },
      additionalRequestHeaders: {
        "Authorization": `Bearer `
      },
      endpoints: {
        byUrl: `/api/image/byUrl`,
      },
      uploader: {
        async uploadByFile(file: any) {
          const formData = new FormData();
          formData.append("data", JSON.stringify({}));
          formData.append("files.image", file);

          // const {data} = await axios.post(`/api/${PluginId}/image/byFile`, formData, {
          //   headers: {
          //     "Authorization": `Bearer ${auth.getToken()}`
          //   }
          // });

          // return data
        },
      }
    }
  }
}

// import EditorJS from '@editorjs/editorjs';

// /**
//  * Block Tools for the Editor
//  */
// import Header from '@editorjs/header';
// import Image from '@editorjs/image';
// import CodeTool from '@editorjs/code';
// import List from '@editorjs/list';
// import Delimiter from '@editorjs/delimiter';
// import Table from '@editorjs/table';
// import Warning from '@editorjs/warning';
// import Checklist from '@editorjs/checklist';
// import LinkTool from '@editorjs/link';
// import RawTool from '@editorjs/raw';
// import Embed from '@editorjs/embed';

// /**
//  * Inline Tools for the Editor
//  */
// import InlineCode from '@editorjs/inline-code';
// import Marker from '@editorjs/marker';

// /**
//  * Class for working with Editor.js
//  */
// export default class Editor {
//   /**
//    * Creates Editor instance
//    *
//    * @param {object} editorConfig - configuration object for Editor.js
//    * @param {object} data.blocks - data to start with
//    * @param {object} options
//    * @param {string} options.headerPlaceholder - placeholder for Header tool
//    */
//   constructor(editorConfig = {}, options = {}) {
//     const defaultConfig = {
//       tools: {
//         header: {
//           class: Header,
//           inlineToolbar: ['marker', 'inlineCode'],
//           config: {
//             placeholder: options.headerPlaceholder || '',
//           },
//         },

//         image: {
//           class: Image,
//           inlineToolbar: true,
//           config: {
//             types: 'image/*, video/mp4',
//             endpoints: {
//               byFile: '/api/transport/image',
//               byUrl: '/api/transport/fetch',
//             },
//           },
//         },

//         linkTool: {
//           class: LinkTool,
//           config: {
//             endpoint: '/api/fetchUrl',
//           },
//         },

//         code: {
//           class: CodeTool,
//           shortcut: 'CMD+SHIFT+D',
//         },

//         list: {
//           class: List,
//           inlineToolbar: true,
//         },

//         delimiter: Delimiter,

//         table: {
//           class: Table,
//           inlineToolbar: true,
//         },

//         warning: {
//           class: Warning,
//           inlineToolbar: true,
//         },

//         checklist: {
//           class: Checklist,
//           inlineToolbar: true,
//         },

//         /**
//          * Inline Tools
//          */
//         inlineCode: {
//           class: InlineCode,
//           shortcut: 'CMD+SHIFT+C',
//         },

//         marker: {
//           class: Marker,
//           shortcut: 'CMD+SHIFT+M',
//         },

//         raw: RawTool,

//         embed: Embed,
//       },
//       data: {
//         blocks: [
//           {
//             type: 'header',
//             data: {
//               text: '',
//               level: 2,
//             },
//           },
//         ],
//       },
//     };

//     this.editor = new EditorJS(Object.assign(defaultConfig, editorConfig));
//   }

//   /**
//    * Return Editor data
//    *
//    * @returns {Promise.<{}>}
//    */
//   save() {
//     return this.editor.saver.save();
//   }
// }

// const loadEditor = () => Promise<Editor>
// const { default: Editor } = await import(/* webpackChunkName: "editor" */ './../classes/editor');


export default Vue.extend({
  name: 'Editor',
  head() {
      return {
        // script: [
        //   {
        //     src: 'https://cdn.jsdelivr.net/npm/editorjs-html@3.4.0/build/edjsHTML.browser.js'
        //   }
        // ],
      }
  },
  data() {
    return {
     value: null,
     editor: {} as any,
     parsedHTML: ''
    };
  },
  methods: {
    save: function() {
      this.editor.save().then((savedData: any) => {
        console.log(savedData);
        this.value = savedData;
        this.parsedHTML = EditorHtmlParser.parse(savedData).join('')
        console.log(this.parsedHTML)
      });
    },
    myEditor: function() {
      if (Object.keys(this.editor).length) {
        return
      }
      this.editor = new EditorJS({
        holder: "editor",
        autofocus: true,
        initialBlock: "paragraph",
        placeholder: 'Let`s write an awesome story!',
        tools: {
          // header: {
          //   class: Header,
          //   inlineToolbar : true
          // },
          // ...
        },
        // Previously saved data that should be rendered
        data: {} as any,
        
        onReady: () => {
          console.log('Editor.js is ready to work!')
        },
        onChange: (api, event) => {
          console.log('Now I know that Editor\'s content changed!', event)
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
          }
      });
    }
  },
  mounted: function() {
    this.myEditor()
  },
})
</script>

<style lang="css" scoped >
.editorx_body {
  /* width: 62%;
  margin-left: 15%; */
  width: 60%;
  margin-left: 20%;
  border: 2px solid #f1f3f5;
  box-sizing: border-box;
}
.ce-block--focused {
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 0.5438550420168067) 35%,
    rgba(0, 212, 255, 1) 100%
  );
}
</style>