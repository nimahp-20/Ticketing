<template>
  <div>
    <div class="q-pa-md q-gutter-sm row">
      <q-btn label="Tickets" color="green" @click="alert = true" />
      <q-dialog v-model="alert" class="col">
        <q-card style="min-width: 600px">
          <q-card-section align="center">
            <div class="text-h6">Tickets</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-form @submit="onSubmit" @reset="onReset" class="row">
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

              <q-card-actions class="col-12">
                <div class="q-px-sm">
                  Status Notification Via Email Or Phone* :
                </div>
                <q-checkbox dense v-model="email" label="Email" color="teal" />

                <q-checkbox
                  dense
                  v-model="phone"
                  label="Phone"
                  color="orange"
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
                  style="max-width: 200px"
                >
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" />
                  </template>
                </q-file>
              </q-card-section>
              <q-card-section align="center" class="col-12">
                <q-btn
                  label="SubmitTicket"
                  type="submit"
                  color="primary"
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
    return {
      alert: ref(false),
      Subject,
      text,
      options: ["First", "Second", "Thard"],
      model,
      phone,
      email,
      onSubmit() {
        if (phone.value == null && email.value == null) {
          $q.notify({
            color: "red",
            textColor: "white",
            icon: "warning",
            message: "Please Select Phone or Email",
          });
        } else {
          $q.notify({
            color: "green",
            textColor: "white",
            icon: "cloud-done",
            message: "TicketSubmited",
          });
        }
      },
    };
  },
};
</script>