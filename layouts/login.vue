<template>
  <main class="main-layout overflow-x-hidden">
    <div class="bg-white w-full fixed top-0 block z-10">
      <nav
        class="flex justify-between font-poppins items-center p-2 wrapper mx-10"
      >
        <div></div>
        <div class="flex items-center space-x-0 sm:space-x-5 ">
          <nuxt-link to="/">
            <span
              role="img"
              aria-label="💻"
              class="notion-emoji notion-page-icon-offset notion-page-icon-cover text-xl"
              >💻</span
            >
            <span
              class="notion-emoji font-extrabold text-xl font-serif brand-link"
              >Dan's Blog</span
            >
          </nuxt-link>
          <div class="md:inline-flex items-center space-x-5 cursor-default">| notes</div>
        </div>
        <div class="text-[14px] flex items-center space-x-5 text-green-500">
          <div class="flex justify-center items-center space-x-5">
            <ul class="flex items-center justify-center">
              <li class="relative group px-3 py-2">
                <button class="hover:opacity-50 cursor-pointer">topics</button>
                <div
                  class="absolute top-0 right-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform"
                >
                  <div
                    class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full"
                  >
                    <div
                      class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"
                    ></div>

                    <div class="relative z-10">
                      <div class="grid grid-cols-2 gap-6">
                        <div>
                          <p
                            class="uppercase tracking-wider text-gray-500 font-medium text-[13px]"
                          >
                            The Suite
                          </p>
                          <ul class="mt-3 text-[15px]">
                            <li>
                              <a
                                href="#"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Course Editor
                                <p class="text-gray-500 font-normal">
                                  All-in-one editor
                                </p>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Accept payments
                                <p class="text-gray-500 font-normal">
                                  Pre-build payments page
                                </p>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Closed Captioning
                                <p class="text-gray-500 font-normal">
                                  Use AI to generate captions
                                </p>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p
                            class="uppercase tracking-wider text-gray-500 font-medium text-[13px]"
                          >
                            Extensions
                          </p>
                          <ul class="mt-3 text-[15px]">
                            <li>
                              <a
                                href="#"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Plugins
                                <p class="text-gray-500 font-normal">
                                  Tweak existing functionality
                                </p>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Batch uploads
                                <p class="text-gray-500 font-normal">
                                  Get your time back
                                </p>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Social sharing
                                <p class="text-gray-500 font-normal">
                                  Generate content for socials
                                </p>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            
              <li class="relative group px-3 py-2">
                <button class="hover:opacity-50 cursor-pointer">
                  login
                </button>
                <div
                  class="absolute top-0 right-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform"
                >
                  <div
                    class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full"
                  >
                    <div
                      class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"
                    ></div>
                    <div class="relative z-10">
                      <ul class="text-[15px]">
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Get Support
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Blog
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Case Studies
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Guides
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            News &amp; Events
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <!-- <li class="relative group px-3 py-2">
                <a href="#" class="hover:opacity-50 cursor-pointer">login </a>
              </li> -->
            </ul>
          </div>
        </div>
      </nav>
      <div class="text-center">
        <div
          class="fixed inset-0 backdrop-blur-0 pointer-events-none duration-500 bg-opacity-0 ease-in-out transition-all overflow-y-hidden"
        ></div>
        <div
          class="scale-0 ease-in-out duration-500 h-[600px] w-[500px] rounded-lg fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white shadow-xl"
        ></div>
      </div>
    </div>
    <Nuxt class="min-h-screen" />
    <footer
      class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6"
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2022
        <a href="https://flowbite.com/" class="hover:underline">Dan's Blog™</a>.
        All Rights Reserved.
      </span>
      <ul
        class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
      >
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
          <a href="#" class="hover:underline">Contact</a>
        </li>
      </ul>
    </footer>
  </main>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "default",
  data() {
    return {};
  },
});
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  margin: 0.25em;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  margin: 0.25em;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 90%;
  padding: 4em 0.5em;
  display: block;
  text-align: center;
}

.logo {
  max-width: 100%;
  padding: 0.5em;
}

.nav a {
  color: #333 !important;
}

.links {
  padding: 1em 0 1.5em 0;
}

.container h2 {
  margin-top: 1.5em;
}

.container ul {
  margin: 1em auto;
  list-style: none;
}

.container p {
  margin: 0.75em 0;
}

.container a {
  max-width: 75%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
