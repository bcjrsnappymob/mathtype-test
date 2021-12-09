<template>
  <div id="app">
    <editor
      v-model="text"
      :init="QuestionTextConfig"
    />
    <b-loading :active="isLoaderActive"></b-loading>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { axios } from './configs/axios';
import Editor from "@tinymce/tinymce-vue";
// We explicitly declare like this to enable tinymce to work
(window.globalThis as any).tinymce = require('tinymce'); 
require(`@wiris/mathtype-tinymce5`);
@Component({
  components: { Editor },
})
export default class App extends Vue {
  requestCount = 0;
  text = ``;

  get isLoaderActive() {
    return this.requestCount > 0;
  }

  get QuestionTextConfig() {
        return {
            height: 300,
            menubar: false,
            external_plugins: {
                tiny_mce_wiris: `node_modules/@wiris/mathtype-tinymce5/plugin.min.js`,
            },
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
                'undo redo | formatselect | bold italic backcolor |\
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help |\
                tiny_mce_wiris_formulaEditor | tiny_mce_wiris_formulaEditorChemistry',
            htmlAllowedTags: ['.*'],
            htmlAllowedAttrs: ['.*'],
            draggable_modal: true,
        };
    }

  created() {
    axios.interceptors.request.use((config) => {
      this.requestCount++;
      return config;
    });
    axios.interceptors.response.use(
      (response) => {
        this.requestCount--;
        return response;
      },
      (error) => {
        this.requestCount--;
        return error;
      }
    );
  }
}
</script>
