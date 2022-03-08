<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-tabs>
        <q-route-tab to="/Ticket" replace label="Ticket" />
        <q-route-tab to="/Lists" replace label="Tickets List" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
};
</script>
