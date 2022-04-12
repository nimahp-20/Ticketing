<template>
  <div>
    <div class="q-pa-md row justify-center">
      <q-card class="bgc col-12 q-pa-md justify-center" style="width: 850px">
        <q-card class="q-pa-xs justify-center bgc statusbar"
          >Ticket Status</q-card
        >
        <q-card-section class="row justify-center col-12">
          <q-card-section class="col-6 justify-center">
            <div class="col-2">
              <span class="spantxt"> ID :</span>
              <span class="statusborder">{{ GetTicketDetails.id }}</span>
            </div>
            <div class="col-2">
              <span class="spantxt"> StatusID :</span>
              <span class="statusborder">{{ GetTicketDetails.statusId }}</span>
            </div>
            <div class="col-2">
              <span class="spantxt"> Priority :</span>
              <span class="statusborder">{{ GetTicketDetails.priority }}</span>
            </div>
          </q-card-section>
          <q-card-section class="col-6 justify-center">
            <div class="col-2">
              <span class="spantxt"> ClosedDate :</span>
              <span class="statusborder">{{
                GetTicketDetails.closedDate
              }}</span>
            </div>
            <div class="col-2">
              <span class="spantxt"> lastReplyByEnglish :</span>
              <span class="statusborder">{{
                GetTicketDetails.lastReplyByEnglish
              }}</span>
            </div>
            <div class="col-2">
              <span class="spantxt"> lastReplyByLocal :</span>
              <span class="statusborder">
                {{ GetTicketDetails.lastReplyByLocal }}</span
              >
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
      <div class="q-pa-md q-gutter-md justify-center" style="width: 800px">
        <q-card>
          <q-card-section>
            <q-card-section>
              <div class="text-h6 statusbar">Ticket Chat</div>
              <div class="text-subtitle2">by User</div>
            </q-card-section>
            <div style="min-height: 20vh">
              <div class="q-pa-md justify-center">
                <div style="width: 100%; max-width: 800px">
                  <q-chat-message
                    class=""
                    name="Admin"
                    :text="['Tell me Your Details']"
                    sent
                    bg-color="blue"
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
  font-size: 16px;
  color: #1100ff;
}
.statusbar {
  color: #9f33ca;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: bold;
}
.bgc {
  background-color: #f0efef;
}
.spantxt {
  color: #000000cb;
  font-size: 16px;
}
</style>
