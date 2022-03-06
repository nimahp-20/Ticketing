<template>
  <div>
    <div class="q-pa-md q-gutter-sm row">
      <q-btn label="Tickets" color="green" @click="alert = true" />
      <q-dialog
        v-model="alert"
        class="col"
        style="font-size: 14px"
        no-backdrop-dismiss
        no-esc-dismiss
      >
        <q-card style="min-width: 600px">
          <q-card-section align="center">
            <div class="text-h6">Tickets</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-form @submit="onSubmit" class="row">
              <q-card-section class="col-6">
                <q-input
                  filled
                  v-model="Subject"
                  label="Subject *"
                  hint="Enter Subject"
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
                  label="Priority *"
                  hint="Select Priority"
                  :rules="[
                    (value) =>
                      (value !== null && value !== '') ||
                      'Please Select something',
                  ]"
                >
                </q-select>
              </q-card-section>
              <q-card-section class="col-12">
                <q-input
                  style="max-height: 200px"
                  v-model="text"
                  filled
                  clearable
                  type="textarea"
                  color="red-12"
                  label="Enter Text *"
                  hint="Pleas Enter You Text"
                  :shadow-text="textareaShadowText"
                  @keydown="processTextareaFill"
                  @focus="processTextareaFill"
                  :rules="[
                    (value) =>
                      (value !== null && value !== '') ||
                      'Please Enter Your text',
                  ]"
                ></q-input>
              </q-card-section>

              <q-card-actions class="col-7">
                <div class="q-px-sm">Status Notification Via * :</div>
                <q-checkbox
                  dense
                  v-model="email"
                  label="Email"
                  color="teal"
                  :rules="[
                    (value) =>
                      (value !== null && value !== '') ||
                      'Please Select Options',
                  ]"
                />
              </q-card-actions>
              <q-card-section class="col-4">
                <q-file
                  color="teal"
                  filled
                  hint="Atach Your Files"
                  v-model="atach"
                  label="Atachment"
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
                  label="SubmitTicket"
                  type="submit"
                  color="primary"
                  @click="checkSubmit"
                  v-close-popup="false"
                ></q-btn>
                <q-btn
                  class="col-3"
                  label="close"
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
export default {
  name: "Tickets",
  setup() {
    const $q = useQuasar();
    const Subject = ref(null);
    const model = ref(null);
    const text = ref(null);
    const email = ref(null);
    const phone = ref(null);
    const alert = ref(false);
    return {
      alert,
      Subject,
      text,
      options: ["First", "Second", "Thard"],
      model,
      phone,
      email,
      onSubmit() {
        if (email.value == null) {
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
          text.value !== null
        ) {
          $q.notify({
            color: "green",
            textColor: "white",
            icon: "cloud-done",
            message: "TicketSubmited",
          });
          $q.notify({
            color: "blue",
            textColor: "white",
            icon: "cloud-done",
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