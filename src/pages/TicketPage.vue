<template>
  <div class="row">
    <app-ticket></app-ticket>
    <app-language class="q-pa-md"></app-language>
  </div>
</template>
<script>
import Ticket from "../components/TicketForm.vue";
import Language from "../components/LanguageSwitcher.vue";

export default {
  components: {
    appTicket: Ticket,
    appLanguage: Language,
  },
};
</script>
