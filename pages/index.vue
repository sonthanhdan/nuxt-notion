<template>
  <div>
    <div class="overflow-x-hidden">
      <div
        class="top-20 m-0"
        style="
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 30vh;
          cursor: default;
        "
      >
        <div style="width: 100%; cursor: inherit">
          <div>
            <div
              style="grid-area: 1 / 1 / auto / auto; width: 100%; height: 100%"
            >
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=4800"
                referrerpolicy="same-origin"
                style="
                  display: block;
                  object-fit: cover;
                  border-radius: 0px;
                  width: 100%;
                  height: 30vh;
                  opacity: 1;
                  object-position: center 50%;
                "
              />
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          style="
            background: rgba(0, 0, 0, 0.4);
            border-radius: 3px;
            color: white;
            font-size: 12px;
            font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont,
              'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif,
              'Segoe UI Emoji', 'Segoe UI Symbol';
            width: 180px;
            left: calc(50% - 90px);
            padding: 0.3em 1.5em;
            pointer-events: none;
            position: absolute;
            top: calc(50% - 10px);
            text-align: center;
            opacity: 0;
          "
        ></div>
      </div>
      <!-- <div class="" >
    <div class="flex font-poppins justify-between wrapper items-center py-10 lg:py-0" >
      
      <img class="md:inline-flex h-64 lg:h-[1/2] w-full" src="https://www.notion.so/image/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1519681393784-d120267933ba%3Fixlib%3Drb-4.0.3%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb?table=block&id=7b5afc64-e848-4277-aadd-d95c04131065&cache=v2" alt="">
    </div>
  </div> -->

      <div class="mb-28">
        <h2>Latest posts</h2>
        <div
          class="wrapper translate-x-[0] opacity-1 duration-500 mt-28 grid font-poppins grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6"
        >
          <div
            class="group translate-x-[0] opacity-1 duration-500 border rounded-lg shadow-md cursor-pointer overflow-hidden"
            href="/post/5-new-killer-features-of-next-js-12"
          >
            <nuxt-link to="/medium">
              <img
                class="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src="https://cdn.sanity.io/images/gyc4tcpa/production/ebc21e1c5833172b2d0b7d9dbc2cf047924c646d-1200x674.png"
                alt="image"
              />
              <div class="flex justify-between p-5 bg-white">
                <div>
                  <p class="text-lg font-bold">
                    5 New Killer Features of Next.js 12
                  </p>
                  <p class="text-sm">
                    Top highlights of a game-changing release by
                    <span class="font-medium uppercase"> Dan Son</span>
                  </p>
                </div>
                <img
                  class="h-12 ml-6 rounded-full"
                  src="https://cdn.sanity.io/images/gyc4tcpa/production/ad62f7a815fd2aebade9b399a124eefd80ce0e67-1000x1000.png"
                  alt=""
                />
              </div>
            </nuxt-link>
          </div>
          <div
            class="group translate-x-[0] opacity-1 duration-500 border rounded-lg shadow-md cursor-pointer overflow-hidden"
            href="/post/11-useful-modern-javascript-tips"
          >
            <nuxt-link to="/medium">
              <img
                class="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src="https://cdn.sanity.io/images/gyc4tcpa/production/b5949bc8cd131c6e61f449340be97f26d9ba348e-1920x1080.png"
                alt="image"
              />
              <div class="flex justify-between p-5 bg-white">
                <div>
                  <p class="text-lg font-bold">
                    11 Useful Modern JavaScript Tips
                  </p>
                  <p class="text-sm">
                    by <span class="font-medium uppercase"> Dan Son</span>
                  </p>
                </div>
                <img
                  class="h-12 ml-6 rounded-full"
                  src="https://cdn.sanity.io/images/gyc4tcpa/production/ad62f7a815fd2aebade9b399a124eefd80ce0e67-1000x1000.png"
                  alt=""
                />
              </div>
            </nuxt-link>
          </div>
          <div
            class="group translate-x-[0] opacity-1 duration-500 border rounded-lg shadow-md cursor-pointer overflow-hidden"
            href="/post/next-js-the-next-big-thing"
          >
            <nuxt-link to="/medium">
              <img
                class="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src="https://cdn.sanity.io/images/gyc4tcpa/production/4d1a6db90cec35063c29e64b4abd3ac3bca39daa-1000x582.jpg"
                alt="image"
              />
              <div class="flex justify-between p-5 bg-white">
                <div>
                  <p class="text-lg font-bold">Next.js -The next big thing</p>
                  <p class="text-sm">
                    My first Post EVER! by
                    <span class="font-medium uppercase"> Dan Son</span>
                  </p>
                </div>
                <img
                  class="h-12 ml-6 rounded-full"
                  src="https://cdn.sanity.io/images/gyc4tcpa/production/ad62f7a815fd2aebade9b399a124eefd80ce0e67-1000x1000.png"
                  alt=""
                />
              </div>
            </nuxt-link>
          </div>
          <div
            class="group translate-x-[0] opacity-1 duration-500 border rounded-lg shadow-md cursor-pointer overflow-hidden"
            href="/post/why-is-nextjs-so-fast-as-compere-to-reactjs"
          >
            <nuxt-link to="/medium">
              <img
                class="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src="https://cdn.sanity.io/images/gyc4tcpa/production/649b09050940bec8aba09cbc8c1c455cb093978f-1920x1080.png"
                alt="image"
              />
              <div class="flex justify-between p-5 bg-white">
                <div>
                  <p class="text-lg font-bold">
                    Why is Nextjs so fast as compere to Reactjs?
                  </p>
                  <p class="text-sm">
                    I'll tell you why nextjs is so fast. by
                    <span class="font-medium uppercase"> Dan Son</span>
                  </p>
                </div>
                <img
                  class="h-12 ml-6 rounded-full"
                  src="https://cdn.sanity.io/images/gyc4tcpa/production/ad62f7a815fd2aebade9b399a124eefd80ce0e67-1000x1000.png"
                  alt=""
                />
              </div>
            </nuxt-link>
          </div>
          <div
            class="group translate-x-[0] opacity-1 duration-500 border rounded-lg shadow-md cursor-pointer overflow-hidden"
            href="/post/how-i-code-for-8-hours-without-feeling-tired"
          >
            <nuxt-link to="/medium">
              <img
                class="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src="https://cdn.sanity.io/images/gyc4tcpa/production/91349ded9a5e22ae646e70be5235c1664f10131a-950x553.jpg"
                alt="image"
              />
              <div class="flex justify-between p-5 bg-white">
                <div>
                  <p class="text-lg font-bold">
                    How I code for 8 hours without feeling tired.
                  </p>
                  <p class="text-sm">
                    by <span class="font-medium uppercase"> Dan Son</span>
                  </p>
                </div>
                <img
                  class="h-12 ml-6 rounded-full"
                  src="https://cdn.sanity.io/images/gyc4tcpa/production/ad62f7a815fd2aebade9b399a124eefd80ce0e67-1000x1000.png"
                  alt=""
                />
              </div>
            </nuxt-link>
          </div>
          <div
            class="group translate-x-[0] opacity-1 duration-500 border rounded-lg shadow-md cursor-pointer overflow-hidden"
            href="/post/getting-started-with-react-and-next-js"
          >
            <nuxt-link to="/medium">
              <img
                class="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src="https://cdn.sanity.io/images/gyc4tcpa/production/f7ac0e380930fb1b5ef0df2cb413382662236c13-1200x682.webp"
                alt="image"
              />
              <div class="flex justify-between p-5 bg-white">
                <div>
                  <p class="text-lg font-bold">
                    Getting Started with React and Next.JS
                  </p>
                  <p class="text-sm">
                    by <span class="font-medium uppercase"> Dan Son</span>
                  </p>
                </div>
                <img
                  class="h-12 ml-6 rounded-full"
                  src="https://cdn.sanity.io/images/gyc4tcpa/production/ad62f7a815fd2aebade9b399a124eefd80ce0e67-1000x1000.png"
                  alt=""
                />
              </div>
            </nuxt-link>
          </div>
          <div
            class="group translate-x-[0] opacity-1 duration-500 border rounded-lg shadow-md cursor-pointer overflow-hidden"
            href="/post/top-10-react-icon-libraries"
          >
            <nuxt-link to="/medium">
              <img
                class="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src="https://cdn.sanity.io/images/gyc4tcpa/production/84c703bff50c9ab81a3738456c8d8682f38ef57d-1400x933.jpg"
                alt="image"
              />
              <div class="flex justify-between p-5 bg-white">
                <div>
                  <p class="text-lg font-bold">Top 10 React Icon Libraries</p>
                  <p class="text-sm">
                    Compiling the top 10 most used icons library in React by
                    <span class="font-medium uppercase"> Dan Son</span>
                  </p>
                </div>
                <img
                  class="h-12 ml-6 rounded-full"
                  src="https://cdn.sanity.io/images/gyc4tcpa/production/ad62f7a815fd2aebade9b399a124eefd80ce0e67-1000x1000.png"
                  alt=""
                />
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div
        class="w-full z-50 block sm:hidden px-[30px] py-[20px] fixed bg-gray-100 shadow-md bottom-0"
      >
        <div class="flex justify-between">
          <div>
            <svg
              class="cursor-pointer text-gray-800 hover:text-black duration-100"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-label="home"
            >
              <path
                d="M4.5 21.25V10.87c0-.07.04-.15.1-.2l7.25-5.43a.25.25 0 0 1 .3 0l7.25 5.44c.06.04.1.12.1.2v10.37c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v5.5c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25z"
                fill="currentColor"
                stroke="currentColor"
                stroke-linejoin="round"
              ></path>
              <path
                d="M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              class="cursor-pointer text-gray-800 hover:text-black duration-100"
              width="25"
              height="24"
              fill="none"
              aria-label="search"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.8 10.69a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73a8.05 8.05 0 0 0-5.94-13.5z"
                fill="#A8A8A8"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              class="cursor-not-allowed text-gray-800 hover:text-black duration-100"
              width="25"
              height="24"
              viewBox="0 0 25 25"
              fill="none"
              aria-label="Reading list"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 3a2 2 0 0 0-2 2v1H6a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4V8a2 2 0 0 0-2-2H9V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v12a.5.5 0 1 0 1 0V5a2 2 0 0 0-2-2h-9zM5 8a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v12.98l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V8z"
                fill="#757575"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="py-12">
        <h1 class="text-4xl font-semibold py-5 px-12 text-left">
          Latest Article
        </h1>
        <div class="border-b-[1px] border-gray-200 my-10 mx-10"></div>
        <div class="w-full px-12">
          <div v-for="article of articles" :key="article.slug">
            <nuxt-link :to="article.slug">
              <div class="flex space-y-4 justify-between items-center">
                <div class="space-y-2 flex flex-col cursor-pointer">
                  <div>
                    <p class="text-sm text-gray-500">Mon Apr 18 2022</p>
                    <p class="sm:text-[21px] text-[18px] font-semibold">
                      Top 10 React Icon Libraries
                    </p>
                  </div>
                  <div
                    class="sm:line-clamp-3 line-clamp-2 text-[13px] sm:text-[15px] text-gray-900"
                  >
                    <div class="capitalize text-[16px]">
                      <p>
                        React is a JavaScript library that lets you develop a
                        top UI for both web and mobile applications. It
                        conveniently integrates with
                        <a
                          href="https://www.lambdatest.com/blog/best-javascript-framework-2020/"
                          >other JavaScript frameworks</a
                        >
                        and libraries and includes small, reusable bits of code
                        called the components. React component libraries not
                        only optimize your UI development process but also
                        provide extreme flexibility due to their high
                        modularity.
                      </p>
                      <h2>
                        1.
                        <a
                          href="https://react-icons.github.io/react-icons/search"
                        >
                          React Icons</a
                        >
                      </h2>
                    </div>
                  </div>
                </div>
                <img
                  class="object-cover cursor-pointer w-24 h-24 sm:w-36 ml-10 sm:h-36"
                  src="https://cdn.sanity.io/images/gyc4tcpa/production/84c703bff50c9ab81a3738456c8d8682f38ef57d-1400x933.jpg"
                  alt="image"
                />
              </div>
            </nuxt-link>
            <div class="border-b-[1px] border-gray-200 my-10"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Medium",
  data() {
    return {};
  },
  async asyncData({ $content, params }: any) {
    const articles = await $content(params.slug)
      .only(["title", "slug", "description"])
      .where({ featured: { $eq: true } })
      .sortBy("createdAt", "asc")
      .fetch();

    const featured = await $content(params.slug)
      .only(["title", "slug", "description"])
      .where({ featured: { $eq: false } })
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles,
      featured,
    };
  },
  mounted() {},
});
</script>

<style></style>
