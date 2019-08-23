<template>
  <div id="app">
    <m-layout></m-layout>
    <!-- <router-view /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import "@/assets/styles/main.scss";

@Component
export default class App extends Vue {}
</script>

