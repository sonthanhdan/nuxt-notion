<template>
  <div class="mt-20">
    <nav class="text-base article mx-auto">
      <ol class="list-reset flex">
        <li><a href="#" class="text-blue-600 hover:text-blue-700">Home</a></li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li>
          <a href="#" class="text-blue-600 hover:text-blue-700">Library</a>
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li class="text-gray-500">Data</li>
      </ol>
    </nav>
    <h1
      class="text-4xl text-black font-semibold py-6 article mx-auto text-center"
    >
      {{ article.title }}
    </h1>
    <div
      class="flex flex-row items-center justify-start pb-10 pt-5 text-base article mx-auto"
    >
      <img
        src="https://icotar.com/initials/Dan%20Son.svg?bg=2d00ff"
        alt="avatar"
        class="rounded-full h-10 w-10 shadow"
      />
      <span class="font-semibold ml-4 text-gray-700">{{ article.author }}</span>
      <span class="text-base text-muted ml-2 mr-2">|</span>
      <div class="text-muted">
        <time datetime="2022-12-20">{{ formatDate(article.updatedAt) }}</time
        >&nbsp;·
        <span class="italic">7 min read</span>
      </div>
    </div>

    <article
      class="article mx-auto tracking-wide leading-loose text-xl px-5 md:px-0 mb-10"
    >
      <!-- {{ article.description }} -->
      <div v-if="article.table_of_contents" class="my-5">
        <div class="t-heading w-100 bg-black rounded text-white text-center">
          <h3>Table of contents</h3>
        </div>
        <nav class="p-5 bg-gray-200 rounded">
          <div>
            <ul>
              <li v-for="(link, i) of article.toc" :key="link.id">
                <NuxtLink
                  :to="`#${link.id}`"
                  :class="{
                    'py-2': link.depth === 2,
                    'ml-2 pb-2': link.depth === 3,
                  }"
                  >{{ i + 1 }}. {{ link.text }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <nuxt-content :document="article" />
      <symbol viewBox="0 0 16 16" id="icon-heart">
        <path
          d="M7.606 3.799L8 4.302l.394-.503.106-.14c.048-.065.08-.108.129-.159a3.284 3.284 0 0 1 4.72 0c.424.434.655 1.245.65 2.278-.006 1.578-.685 2.931-1.728 4.159-1.05 1.234-2.439 2.308-3.814 3.328a.763.763 0 0 1-.914 0c-1.375-1.02-2.764-2.094-3.814-3.328C2.686 8.709 2.007 7.357 2 5.778c-.004-1.033.227-1.844.651-2.278a3.284 3.284 0 0 1 4.72 0c.05.05.081.094.129.158.028.038.061.083.106.14z"
          stroke="#192734"
        ></path>
      </symbol>

      <symbol viewBox="0 0 16 16" id="icon-heart-active">
        <path
          d="M13.706 3.15a3.784 3.784 0 0 0-5.434 0c-.104.106-.183.227-.272.34-.089-.113-.168-.234-.272-.34a3.784 3.784 0 0 0-5.434 0c-.563.576-.799 1.553-.794 2.63.015 3.468 3 5.85 5.745 7.886.45.334 1.06.334 1.51 0 2.746-2.035 5.73-4.418 5.745-7.886.005-1.077-.231-2.054-.794-2.63z"
          fill="#E24C4C"
          stroke="none"
        ></path>
      </symbol>
      <symbol viewBox="0 0 20 20" id="icon-small-message">
        <path
          d="M6.00007 3.00001H12.0001L15.5001 3C16.6046 3 17.5001 3.89543 17.5001 5V9.78889V12.2556C17.5001 13.3601 16.6046 14.2556 15.5001 14.2556H14.5001C14.2239 14.2556 14.0001 14.4794 14.0001 14.7556V16.4507C14.0001 16.8715 13.5119 17.1041 13.1851 16.839L10.2754 14.4789C10.0973 14.3344 9.87489 14.2556 9.6455 14.2556H4.50003C3.39545 14.2556 2.50001 13.3601 2.50003 12.2555L2.50007 9.78889V5.00001C2.50007 3.89544 3.3955 3.00001 4.50007 3.00001L6.00007 3.00001Z"
          stroke="#192734"
          stroke-miterlimit="10"
          stroke-linecap="square"
        />
        <path
          d="M6 6.5H13"
          stroke="#192734"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        <path
          d="M6 9H10"
          stroke="#192734"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
      </symbol>
      <div
        class="flex justify-between align-middle items-center text-muted mt-10"
      >
        <div class="flex">
          <div id="likes" class="feedback-item likes mr-3">
            <span class="like-icon"
              ><svg class="icon icon-md" style="">
                <use class="" href="#icon-heart"></use></svg
            ></span>
            <span class="text-muted text-[16px]">6</span>
          </div>
          <div class="feedback-item comments">
            <span class="comment-icon">
              <svg class="icon icon-md" style="">
                <use class="" href="#icon-small-message"></use>
              </svg>
            </span>
            <span class="text-muted text-[16px]">4</span>
          </div>
        </div>

        <div class="text-base text-muted">
          Published on <time datetime="2022-12-20">December 20, 2022</time>
        </div>
      </div>
      <hr class="mt-1 mb-5" />

      <span
        class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
        >Default</span
      >
      <span
        class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
        >Dark</span
      >
      <span
        class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900"
        >Red</span
      >
      <span
        class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
        >Green</span
      >
      <span
        class="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900"
        >Yellow</span
      >
      <span
        class="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900"
        >Indigo</span
      >
      <span
        class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900"
        >Purple</span
      >
      <span
        class="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900"
        >Pink</span
      >
    </article>
    <prev-next :prev="prev" :next="next" />
    <div class="flex items-start mx-auto article mb-5">
      <span class="avatar avatar-large" title="Umair Sayed" style="">
        <img
          class="avatar-frame standard-image"
          src="https://icotar.com/initials/Dan%20Son.svg?bg=2d00ff"
          title="Umair Sayed"
        />
      </span>
      <div class="flex-1 ml-3">
        <h5 class="mt-0">
          <a href="/" class="text-dark">Dan Son</a>
        </h5>

        <p class="text-muted leading-7">Fullstack developer</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Post",
  data() {
    return {
      scrollPosition: null as any,
      social: false,
    };
  },
  head() {
    return {
      // title: this.article?.title,
      // meta: [
      //   { hid: 'description', name: 'description', content: this.article.description },
      //   // Open Graph
      //   { hid: 'og:title', property: 'og:title', content: this.article.title },
      //   { hid: 'og:description', property: 'og:description', content: this.article.description },
      //   // Twitter Card
      //   { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
      //   { hid: 'twitter:description', name: 'twitter:description', content: this.article.description }
      // ]
    };
  },
  async asyncData({ $content, params }: any) {
    const article: any = await $content(params.slug).fetch();
    console.log("🚀 ~ file: _slug.vue:75 ~ asyncData ~ article", article);
    const [prev, next] = await $content()
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
    return {
      article,
      prev,
      next,
    };
  },
  methods: {
    formatDate(date: any) {
      const options = { year: "numeric", month: "long", day: "numeric" } as any;
      return new Date(date).toLocaleDateString("en", options);
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 340) {
        this.social = true;
      } else {
        this.social = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
});
</script>

<style lang="css" scoped>
html {
  scroll-behavior: smooth;
}
.article {
  max-width: 768px !important;
  position: relative;
}
.share {
  position: fixed;
  top: 10rem;
  right: 10rem;
}
.table-of-content {
  position: fixed;
  top: 0;
  right: -10%;
  background-color: black;
  color: #fff;
  z-index: 2;
  padding: 10px 20px;
  width: 300px;
}
pre {
  border-radius: 8px;
}
/* Table */
table {
  width: 100% !important;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
}
thead {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content h1 {
  font-size: 2.25rem;
  font-weight: 600;
}

/* blog footer */
.blog-container .blog-footer {
  display: flex;
  justify-content: space-between;
  color: #74808b;
  margin-top: 3rem;
}

.icon {
  display: inline-block;
  font-size: 0;
  width: 20px;
  height: 20px;
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  fill: transparent;
  stroke: #192734;
}
.icon-md {
  width: 20px;
  height: 20px;
}

.avatar-large {
  width: 64px;
  height: 64px;
}

.avatar {
  display: inline-block;
  vertical-align: middle;
}

.avatar .standard-image {
  border-radius: 50%;
  border: none;
}
.avatar-large .standard-image {
  font-size: 20px;
}

.avatar img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
}

.standard-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f5f6;
  color: #a1b1b9;
  border: 1px solid #f4f5f6;
  font-weight: normal;
}

.avatar-frame {
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 50%;
}
</style>
