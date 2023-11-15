<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>

    <app-alert />
  </v-app>
</template>

<script setup>
import AppAlert from '@/components/AppAlert';

</script>
