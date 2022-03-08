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
        <q-card class="q-pa q-gutter height-width">
          <q-card-section align="center" class="row">
            <div class="text-h6 col-6">{{ $t("tickets.title") }}</div>
            <div class="col-6 q-pa q-gutter">
              <app-language></app-language>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-form @submit="onSubmit" class="row">
              <q-card-section class="col-6">
                <q-input
                  filled
                  dense
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
                  dense
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
              <q-card-section class="col-12">
                <QuillEditor :options="options" />
              </q-card-section>

              <q-card-actions class="col-7" style="margin-top: 80px">
                <div class="q-px-sm">{{ $t("tickets.status") }} :</div>
                <q-checkbox
                  v-model="email"
                  dense
                  :label="$t('tickets.Email')"
                  color="blue-10"
                  :rules="[
                    (value) => (value == null && value == '') || value == false,
                    'Please Select Options',
                    $t('tickets.status'),
                  ]"
                />
              </q-card-actions>
              <q-card-section class="col-4" style="margin-top: 80px">
                <q-file
                  color="blue-10-4"
                  dense
                  filled
                  :hint="$t('tickets.AtachHint')"
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
                  @click="checkSubmit()"
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
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { useI18n } from "vue-i18n";
export default {
  name: "Tickets",
  components: {
    appLanguage: Language,
    QuillEditor,
  },

  data() {
    return {
      localItems: [
        { label: this.$i18n.t("options.high") },
        { label: this.$i18n.t("options.medium") },
        { label: this.$i18n.t("options.low") },
      ],
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
        readOnly: false,
        theme: "snow",
      },
    };
  },
  watch: {
    "$i18n.locale": function () {
      this.localItems = [
        { label: this.$i18n.t("options.high") },
        { label: this.$i18n.t("options.medium") },
        { label: this.$i18n.t("options.low") },
      ];
      // this.items = this.localItems.value;
    },
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
          email.value !== "" &&
          items.value !== "" &&
          items.value !== false &&
          items.value !== null &&
          Subject.value !== null &&
          Subject.value !== "" &&
          email.value !== false
        ) {
          $q.notify({
            color: "amber-9",
            spinner: true,
            message: t("tickets.waiting"),
            timeout: 30,
          });
          setTimeout(() => {
            $q.notify({
              color: "green-8",
              textColor: "white",
              icon: "done",
              message: t("tickets.message"),
            });
          }, 700);
          setTimeout(() => {
            this.alert = false;
          }, 700);
        } else if (Subject.value == null || Subject.value == "") {
          $q.notify({
            color: "red",
            textColor: "white",
            icon: "warning",
            message: t("tickets.subjectHint"),
          });
        } else if (items.value == null || items.value == "") {
          $q.notify({
            color: "red",
            textColor: "white",
            icon: "warning",
            message: t("tickets.PriorityHint"),
          });
        }
      },
    };
  },
};
</script>
<style scoped>
.height-width {
  min-width: 600px;
  min-height: 600px;
}
</style>
