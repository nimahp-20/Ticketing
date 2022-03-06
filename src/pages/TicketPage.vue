<template>
  <div class="row">
    <app-language></app-language>
    <app-ticket> </app-ticket>
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