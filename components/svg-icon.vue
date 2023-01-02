<template>
  <span v-bind="$attrs" class="base-icon">
    <component v-bind:is="asyncIcon" v-bind:class="svgClass"/>
  </span>
</template>

<script>
export default {
  name: "svg-icon",
  props: {
    name: {
      require: true,
      type: String,
    },
    svgClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    async asyncIcon() {
        const icon = await import(`@/components/icons/${this.name}`);
        this.svgClass = `${icon.default.name.replace('Icons', '').toLowerCase()}`;
      return icon
    },
  },
};
</script>
