<template>
  <div>
    <app-ticket></app-ticket>
  </div>
</template>
<script>
import Ticket from "../components/TicketForm.vue";

export default {
  components: {
    appTicket: Ticket,
  },
};
</script>