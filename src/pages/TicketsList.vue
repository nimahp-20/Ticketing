<template>
  <div>
    <q-card-section class="col-12">
      <QuillEditor
        :options="options"
        ref="myEditor"
        v-model:content="modelname"
        contentType="delta"
      />
      <div v-html="modelname"></div>
      <q-btn @click="getHtml()">changer</q-btn>
    </q-card-section>
  </div>
</template>
<script>
import { Quill, QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  components: {
    QuillEditor,
  },
  data() {
    return {
      modelname: "",
      options: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],

            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],

            ["clean"],
          ],
        },
        placeholder: "Compose an epic...",
        readOnly: false,
        theme: "snow",
      },
    };
  },
  methods: {
    getHtml() {
      console.log(QuillEditor.root.innerHTML);
    },
  },
};
</script>
<style scoped>
</style>
