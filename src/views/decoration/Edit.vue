<template>
  <div class="decoration__edit">
    <Components />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Components from "./components/Components.vue";

@Component({
  components: {
    Components,
  },
})
export default class Edit extends Vue {}
</script>
  
<style lang="scss">
@import "../../assets/styles/decoration-edit";
</style>
