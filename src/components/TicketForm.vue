<template>
  <div>
    <div class="q-pa-md q-gutter-sm row">
      <q-btn
        :label="$t('tickets.sendTicket')"
        color="green"
        @click="alert = true"
      />
      <div class="row">
        <q-dialog
          v-model="alert"
          style="font-size: 14px"
          no-backdrop-dismiss
          no-esc-dismiss
        >
          <q-card class="q-pa-md col mh">
            <q-card-section align="center" class="row">
              <div class="text-h6 col-6">{{ $t("tickets.title") }}</div>
              <div class="col-6 q-pa q-gutter">
                <app-language></app-language>
              </div>
            </q-card-section>

            <q-card-section>
              <q-form @submit="onSubmit" class="row">
                <q-card-section class="col-12 col-md">
                  <q-input
                    filled
                    dense
                    v-model="Subject"
                    :label="$t('tickets.subject')"
                    lazy-rules
                    :rules="[
                      (value) =>
                        (value && value.length > 0) ||
                        $t('tickets.subjectHint'),
                    ]"
                  ></q-input>
                </q-card-section>
                <q-card-section class="col-12 col-md">
                  <q-select
                    filled
                    dense
                    v-model="items"
                    :options="localItems"
                    :label="$t('tickets.Priority')"
                    borderless
                    emit-value
                    :rules="[
                      (value) =>
                        value.items == false ||
                        value.items == null ||
                        value.items == '',
                      'Please Select Options',
                      $t('tickets.PriorityHint'),
                    ]"
                  >
                  </q-select>
                </q-card-section>
                <q-card-section class="col-12">
                  <QuillEditor
                    style="height: 120px"
                    dir="rtl"
                    align="right"
                    :options="options"
                    contentType="delta"
                    v-model:content="textEditor"
                  />
                </q-card-section>

                <q-card-actions class="col-12 col-md">
                  <div class="q-px-sm">{{ $t("tickets.status") }} :</div>
                  <q-checkbox
                    v-model="email"
                    dense
                    :label="$t('tickets.Email')"
                    color="blue-10"
                    :rules="[
                      (value) => value == null || value == '' || value == false,
                      'Please Select Options',
                      $t('tickets.status'),
                    ]"
                  />
                </q-card-actions>
                <q-card-section class="col-12 col-md">
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
                <q-card-section align="center" class="col-12 col-md">
                  <q-btn
                    style="margin-right: 20px"
                    class="col-3"
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
  </div>
</template>
<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import Language from "./LanguageSwitcher.vue";
import { useI18n } from "vue-i18n";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
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
          toolbar: [["bold"], [{ size: ["small", false, "large", "huge"] }]],
        },
        placeholder: "Type Something",
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
      this.items = this.localItems.value;
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
    const textEditor = ref("");
    const title = ref(null);
    const status = ref(null);
    const subjectHint = ref(null);

    return {
      alert,
      textEditor,
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
          email.value !== false &&
          textEditor.value !== null &&
          textEditor.value !== "" &&
          textEditor.value !== false
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
          console.log(textEditor);
        } else if (Subject.value == null || Subject.value == "") {
          $q.notify({
            color: "red",
            textColor: "white",
            icon: "warning",
            message: t("tickets.subjectHint"),
          });
        } else if (
          items.value == null ||
          items.value == "" ||
          items.value == false
        ) {
          $q.notify({
            color: "red",
            textColor: "white",
            icon: "warning",
            message: t("tickets.PriorityHint"),
          });
        } else if (textEditor.value == null || textEditor.value == "") {
          $q.notify({
            color: "red",
            textColor: "white",
            icon: "warning",
            message: t("tickets.textEditor"),
          });
        } else if (
          email.value == false ||
          email.value == "" ||
          email.value == null
        ) {
          $q.notify({
            color: "red",
            textColor: "white",
            icon: "warning",
            message: t("tickets.status"),
          });
        }
      },
    };
  },
};
</script>
<style scoped>
.mh {
  max-width: 95%;
}
</style>
