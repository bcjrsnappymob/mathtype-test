<template>
  <div id="app">
    <editor v-model="selectedQuestionText" :init="config"></editor>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Editor from "@tinymce/tinymce-vue";
// Import TinyMCE
import "tinymce/tinymce";

import "tinymce/icons/default";

// A theme is also required
import "tinymce/themes/silver";
import "tinymce/skins/ui/oxide/skin.css";

// Any plugins you want to use has to be imported
import "tinymce/plugins/advlist";
import "tinymce/plugins/autolink";
import "tinymce/plugins/lists";
import "tinymce/plugins/link";
import "tinymce/plugins/image";
import "tinymce/plugins/charmap";
import "tinymce/plugins/print";
import "tinymce/plugins/preview";
import "tinymce/plugins/anchor";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/code";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/media";
import "tinymce/plugins/table";
import "tinymce/plugins/paste";
import "tinymce/plugins/help";
import "tinymce/plugins/wordcount";
import "@wiris/mathtype-tinymce5";
// require("@wiris/mathtype-tinymce5");

@Component({
  components: {
    Editor,
  },
})
/* eslint-disable */
export default class App extends Vue {
  selectedQuestionText = ``;

  beforeCreate() {
    const script = document.createElement(`script`);
    script.src = "https://www.wiris.net/demo/plugins/app/WIRISplugins.js?viewer=image";
    document.head.appendChild(script);
  }

  mounted() {
    
  }

  get config() {
    return {
        height: 700,
        menubar: false,
        external_plugins: {
          tiny_mce_wiris: `node_modules/@wiris/mathtype-tinymce5/plugin.min.js`,
        },
        toolbar: 'tiny_mce_wiris_formulaEditor | tiny_mce_wiris_formulaEditorChemistry',
        htmlAllowedTags: ['.*'],
        htmlAllowedAttrs: ['.*'],
        draggable_modal: true,
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
