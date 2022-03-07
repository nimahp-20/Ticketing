<template>
  <div class="row justify-center q-gutter-sm">
    <q-select
      v-model="locale"
      :options="localeOptions"
      label="Laguages"
      dense
      borderless
      emit-value
      map-options
      options-dense
      style="min-width: 100px"
    />
  </div>
</template>
<script>
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { locale } = useI18n({ useScope: "global" });
    return {
      locale,
      localeOptions: [
        { value: "en-US", label: "English" },
        { value: "fa", label: "Farsi" },
      ],
    };
  },
};
</script>
