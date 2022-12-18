<template>
  <NotionRenderer
    :blockMap="blockMap"
    :pageLinkOptions="pageLinkOptions"
    fullPage
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      pageLinkOptions: { component: "NuxtLink", href: "to" },
    };
  },
  async asyncData({ $notion, params, error, $config }: any) {
    // console.log($config.notionPageId)
    // const blockMap = await $notion.getPageBlocks($config.notionPageId);
    // console.log(blockMap)
    return { blockMap: null };
  },
})
</script>

<style>
@import "vue-notion/src/styles.css";
</style>