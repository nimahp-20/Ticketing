<template>
  <div>
    <div class="q-pa-md q-gutter-sm row">
      <q-btn label="Tickets" color="green" @click="alert = true" />
      <q-dialog
        v-model="alert"
        style="font-size: 14px"
        no-backdrop-dismiss
        no-esc-dismiss
      >
        <q-card style="min-width: 600px" class="q-pa-md q-gutter-sm">
          <q-card-section align="center" class="row">
            <div class="text-h6 col-6">{{ $t("title") }}</div>
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
                  :label="$t('subject')"
                  :hint="$t('subjectHint')"
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
                  v-model="model"
                  :options="options"
                  :label="$t('Priority')"
                  :hint="$t('PriorityHint')"
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
                <div class="q-px-sm">{{ $t("status") }} :</div>
                <q-checkbox
                  dense
                  v-model="email"
                  :label="$t('Email')"
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
                  :hint="$t('AtachHint')"
                  v-model="atach"
                  :label="$t('Atach')"
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
                  :label="$t('SubmitTicket')"
                  type="submit"
                  color="primary"
                  @click="checkSubmit"
                ></q-btn>
                <q-btn
                  class="col-3"
                  :label="$t('close')"
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
export default {
  name: "Tickets",
  components: {
    appLanguage: Language,
  },
  setup() {
    const $q = useQuasar();
    const Subject = ref(null);
    const model = ref(null);
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
      options: ["First", "Second", "Thard"],
      model,
      phone,
      email,
      onSubmit() {
        if (email.value == null || email.value == "") {
          $q.notify({
            color: "red",
            textColor: "white",
            icon: "warning",
            message: "Please Select Email",
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
            message: "TicketSubmited",
          });
          $q.notify({
            color: "blue",
            textColor: "white",
            icon: "done",
            message: "Your Request Send Please Click on Close button",
          });
        }
      },
    };
  },
};
</script>
<style scoped>
</style>
