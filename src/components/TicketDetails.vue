<template>
  <div>
    <div class="q-pa-md row justify-center">
      <q-card style="width: 800px">
        <q-card class="q-pa-md row justify-center" style="color: blue"
          >Status</q-card
        >
        <q-card-section class="q-pa-md row justify-center">
          <p>ID :</p>
          <p class="statusborder">{{ GetTicketDetails.id }}</p>
          <p>StautsId :</p>
          <p class="statusborder">{{ GetTicketDetails.statusId }}</p>
          <p>Priority :</p>
          <p class="statusborder">{{ GetTicketDetails.priority }}</p>
          <p>ClosedDate :</p>
          <p class="statusborder">{{ GetTicketDetails.closedDate }}</p>
          <p>LastReplyByEnglish :</p>
          <p class="statusborder">{{ GetTicketDetails.lastReplyByEnglish }}</p>
          <p>LastReplyByLocal :</p>
          <p class="statusborder">{{ GetTicketDetails.lastReplyByLocal }}</p>
        </q-card-section>
      </q-card>
      <div class="q-pa-md q-gutter-md justify-center" style="width: 900px">
        <q-card>
          <q-card-section>
            <q-card-section>
              <div class="text-h6">Ticket Chat</div>
              <div class="text-subtitle2">by User</div>
            </q-card-section>
            <div style="min-height: 20vh">
              <div class="q-pa-md justify-center">
                <div style="width: 100%; max-width: 900px">
                  <q-chat-message
                    name="Admin"
                    :text="['Tell me Your Details']"
                    sent
                  ></q-chat-message>
                  <q-chat-message
                    name="User"
                    :text="[GetTicketDetails.id]"
                  ></q-chat-message>
                  <q-chat-message
                    name="User"
                    :text="[GetTicketDetails.priority]"
                  ></q-chat-message>
                  <q-chat-message
                    name="User"
                    :text="[GetTicketDetails.statusId]"
                  ></q-chat-message>
                  <q-chat-message
                    name="User"
                    :text="[GetTicketDetails.messages]"
                  ></q-chat-message>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
import { GetTicketDetails } from "src/services/Tickets";
export default {
  name: "Details",
  data() {
    return {
      GetTicketDetails: "",
    };
  },
  mounted() {
    this.GetTicketDetails = GetTicketDetails();
  },
};
</script>
<style scoped>
.statusborder {
  width: 120px;
  color: rebeccapurple;
}
.statusbar {
  color: blue;
  border: 1px solid black;
}
</style>
