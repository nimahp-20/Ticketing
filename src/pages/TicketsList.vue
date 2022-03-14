<template>
  <div>
    <app-ticketlist></app-ticketlist>
  </div>
</template>

<script>
import TicketListVue from "../components/TicketList.vue";

export default {
  name: "App",
  components: { appTicketlist: TicketListVue },
  data() {
    return {};
  },
};
</script>
