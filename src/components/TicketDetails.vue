<template>
  <div>
    <div class="q-pa-md row justify-center">
      <q-card class="q-pa-md col-9">
        <q-card class="q-pa-md statusbar">Ticket Status </q-card>
        <hr />
        <q-card-section class="row">
          <q-card-section class="col-12 col-md">
            <div>
              <span class="spantxt">ID :</span>
              <span class="statusborder">{{ GetTicketDetails.id }}</span>
            </div>
            <br />
            <div>
              <span class="spantxt">Status :</span>
              <span class="statusborder">{{ GetTicketDetails.statusId }}</span>
            </div>
            <br />
            <div>
              <span class="spantxt">Priority :</span>
              <span class="statusborder">{{ GetTicketDetails.priority }}</span>
            </div>
            <br />
          </q-card-section>
          <q-card-section class="col-12 col-md">
            <div class="col-12">
              <span class="spantxt">Subject :</span>
              <span class="statusborder">{{ GetTicketDetails.subject }}</span>
            </div>
            <br />
            <div class="col-12">
              <span class="spantxt">LastReply :</span>
              <span class="statusborder"
                >{{ GetTicketDetails.lastReplyByEnglish }}
              </span>
            </div>
            <br />
            <div class="col-12">
              <span class="spantxt"> CreatedDate :</span>
              <span class="statusborder">
                {{ GetTicketDetails.createdDate }}</span
              >
              <br />
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
    <div class="q-pa-md row justify-center">
      <q-card class="q-pa-md col-9">
        <q-card-section>
          <q-card-section>
            <div class="text-h6 statusbar">Conversation</div>
            <div class="text-subtitle2">by User</div>
          </q-card-section>
          <div style="min-height: 20vh">
            <div class="q-pa-md justify-center">
              <div style="width: 100%">
                <q-chat-message
                  name="Admin"
                  :text="['Tell me Your Details']"
                  sent
                  bg-color="blue"
                  stamp="7 minutes ago"
                ></q-chat-message>
                <q-chat-message
                  name="User"
                  :text="[GetTicketDetails.id]"
                  stamp="7 minutes ago"
                ></q-chat-message>
                <q-chat-message
                  name="User"
                  :text="[GetTicketDetails.priority]"
                  stamp="7 minutes ago"
                ></q-chat-message>
                <q-chat-message
                  name="User"
                  :text="[GetTicketDetails.statusId]"
                  stamp="7 minutes ago"
                ></q-chat-message>
                <q-chat-message
                  name="User"
                  :text="[GetTicketDetails.messages]"
                  stamp="8 minutes ago"
                ></q-chat-message>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
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
  font-size: 15px;
  color: #1976d2;
  font-family: sans-serif;
}
.statusbar {
  color: #47474b;
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
  font-size: 15px;
  padding: 0px;
}
</style>
