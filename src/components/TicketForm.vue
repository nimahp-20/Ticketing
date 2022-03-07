<template>
  <div>
    <div class="q-pa-md q-gutter-sm row">
      <q-btn
        :label="$t('tickets.sendTicket')"
        color="green"
        @click="alert = true"
      />
      <q-dialog
        v-model="alert"
        style="font-size: 14px"
        no-backdrop-dismiss
        no-esc-dismiss
      >
        <q-card style="min-width: 600px" class="q-pa-md q-gutter-sm">
          <q-card-section align="center" class="row">
            <div class="text-h6 col-6">{{ $t("tickets.title") }}</div>
            <div class="col-6">
              <app-language></app-language>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-form @submit="onSubmit" class="row">
              <q-card-section class="col-6">
                <q-input
                  filled
                  v-model="Subject"
                  :label="$t('tickets.subject')"
                  :hint="$t('tickets.subjectHint')"
                  lazy-rules
                  :rules="[
                    (value) =>
                      (value && value.length > 0) || 'Please type something',
                  ]"
                ></q-input>
              </q-card-section>
              <q-card-section class="col-6">
                <q-select
                  filled
                  v-model="items"
                  :options="localItems"
                  :label="$t('tickets.Priority')"
                  :hint="$t('tickets.PriorityHint')"
                  borderless
                  emit-value
                  :rules="[
                    (value) =>
                      (value !== null && value !== '') ||
                      'Please Select Your Priotity',
                  ]"
                >
                </q-select>
              </q-card-section>
              <q-card-section class="col-12"> </q-card-section>

              <q-card-actions class="col-7">
                <div class="q-px-sm">{{ $t("tickets.status") }} :</div>
                <q-checkbox
                  dense
                  v-model="email"
                  :label="$t('tickets.Email')"
                  color="teal"
                  :rules="[
                    (value) =>
                      (value == null && value == '') || 'Please Select Options',
                  ]"
                />
              </q-card-actions>
              <q-card-section class="col-4">
                <q-file
                  color="teal"
                  filled
                  :hint="$t('tickets.AtachHint')"
                  v-model="atach"
                  :label="$t('tickets.Atach')"
                >
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" />
                  </template>
                </q-file>
              </q-card-section>
              <q-card-section align="center" class="col-11">
                <q-btn
                  style="margin-right: 20px"
                  class="col-1"
                  :label="$t('tickets.SubmitTicket')"
                  type="submit"
                  color="primary"
                  @click="checkSubmit"
                ></q-btn>
                <q-btn
                  class="col-3"
                  :label="$t('tickets.close')"
                  type="close"
                  color="primary"
                  v-close-popup
                ></q-btn>
              </q-card-section>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import Language from "./LanguageSwitcher.vue";
import "@morioh/v-quill-editor/dist/editor.css";
import Editor from "@morioh/v-quill-editor";
import { useI18n } from "vue-i18n";
export default {
  name: "Tickets",
  components: {
    appLanguage: Language,
  },
  watch: {
    "$i18n.locale": function () {
      this.localItems = [
        { label: this.$i18n.t("options.high") },
        { label: this.$i18n.t("options.medium") },
        { label: this.$i18n.t("options.low") },
      ];
    },
  },
  data() {
    return {
      localItems: [
        { label: this.$i18n.t("options.high") },
        { label: this.$i18n.t("options.medium") },
        { label: this.$i18n.t("options.low") },
      ],
    };
  },
  setup() {
    const { t } = useI18n({
      useScope: "global",
    });
    const $q = useQuasar();
    const Subject = ref(null);
    const model = ref(null);
    const items = ref(null);
    const email = ref(null);
    const phone = ref(null);
    const alert = ref(false);
    const title = ref(null);
    const status = ref(null);
    const subjectHint = ref(null);

    return {
      alert,
      status,
      subjectHint,
      Editor,
      Subject,
      title,
      t,
      items,
      model,
      phone,
      email,
      onSubmit() {
        if (email.value == null || email.value == "") {
          $q.notify({
            color: "red",
            textColor: "white",
            icon: "warning",
            message: t("tickets.failed"),
          });
        }
      },
      checkSubmit() {
        if (
          email.value !== null &&
          Subject.value !== null &&
          email.value !== ""
        ) {
          $q.notify({
            color: "green",
            textColor: "white",
            icon: "done",
            message: t("tickets.message"),
          });
          $q.notify({
            color: "blue",
            textColor: "white",
            icon: "done",
            message: t("tickets.successClose"),
          });
        }
      },
    };
  },
};
</script>
<style scoped>
</style>
