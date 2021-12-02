<template>
  <div id="app">
    <editor v-model="selectedQuestionText" :init="config"></editor>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Editor from "@tinymce/tinymce-vue";
window.globalThis.tinymce = require('tinymce'); 
require(`@wiris/mathtype-tinymce5`);
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
