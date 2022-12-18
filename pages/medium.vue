<template>
  <main class="font-poppins grid grid-cols-7">
    <div class="xl:flex justify-end h-full hidden relative">
      <div
        class="fixed justify-between h-full px-6 py-12 col-span-1 flex flex-col"
      >
        <div class="flex cursor-pointer">
          <!-- <span role="img" aria-label="💻" class="notion-emoji notion-page-icon-offset notion-page-icon-cover">💻</span>
        <span class="notion-emoji font-extrabold text-xl font-serif ml-1">Dan's Blog</span> -->
        </div>
        <div class="flex flex-col justify-end items-end space-y-8">
          <div>
            <div
              class=""
              data-tooltipped=""
              aria-describedby="tippy-tooltip-1"
              data-original-title="Home"
              style="display: inline"
            >
              <svg
                class="cursor-pointer text-gray-800 hover:text-black duration-100"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-label="Home"
              >
                <path
                  d="M4.5 10.75v10.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-5.5c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v5.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-10.5M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div
            class=""
            data-tooltipped=""
            aria-describedby="tippy-tooltip-2"
            data-original-title="Notifications"
            style="display: inline"
          >
            <svg
              class="cursor-not-allowed text-gray-800 hover:text-black duration-100"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-label="Notifications"
            >
              <path
                d="M15 18.5a3 3 0 1 1-6 0"
                stroke="currentColor"
                stroke-linecap="round"
              ></path>
              <path
                d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
                stroke="currentColor"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div
            class=""
            data-tooltipped=""
            aria-describedby="tippy-tooltip-3"
            data-original-title="Lists"
            style="display: inline"
          >
            <svg
              class="cursor-not-allowed text-gray-800 hover:text-black duration-100"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-label="Lists"
            >
              <path
                d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z"
                stroke="currentColor"
                stroke-linecap="round"
              ></path>
              <path
                d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5"
                stroke="currentColor"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
          <div
            class=""
            data-tooltipped=""
            aria-describedby="tippy-tooltip-4"
            data-original-title="Stories"
            style="display: inline"
          >
            <svg
              class="cursor-not-allowed text-gray-800 hover:text-black duration-100"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-label="Stories"
            >
              <path
                d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z"
                stroke="currentColor"
              ></path>
              <path
                d="M8 8.5h8M8 15.5h5M8 12h8"
                stroke="currentColor"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div class="absolute">
      <div
        class="fixed p-8 flex flex-col justify-center items-center text-center top-1/2 z-50 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 md:z-10 ease-in-out duration-500 min-h-full md:min-h-[600px] w-full md:w-auto md:h-auto md:m-auto rounded-lg bg-white shadow-xl"
      >
        <div class="p-4 cursor-pointer z-50 absolute top-0 pt-10 pr-10 right-0">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            class="h-8 w-8 text-gray-400 hover:text-gray-700 duration-100 text-2xl cursor-pointer"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"
            ></path>
          </svg>
        </div>
        <div>
          <span
            style="
              box-sizing: border-box;
              display: inline-block;
              overflow: hidden;
              width: initial;
              height: initial;
              background: none;
              opacity: 1;
              border: 0px;
              margin: 0px;
              padding: 0px;
              position: relative;
              max-width: 100%;
            "
          >
            <span
              style="
                box-sizing: border-box;
                display: block;
                width: initial;
                height: initial;
                background: none;
                opacity: 1;
                border: 0px;
                margin: 0px;
                padding: 0px;
                max-width: 100%;
              "
            >
              <img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20
								xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27260%27%20height=%27260%27/%3e"
                style="
                  display: block;
                  max-width: 100%;
                  width: initial;
                  height: initial;
                  background: none;
                  opacity: 1;
                  border: 0px;
                  margin: 0px;
                  padding: 0px;
                "
              />
            </span>
            <img
              alt=""
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNew%20message.64233199.gif&amp;w=640&amp;q=75"
              decoding="async"
              data-nimg="intrinsic"
              srcset="
                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNew%20message.64233199.gif&amp;w=384&amp;q=75 1x,
                /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNew%20message.64233199.gif&amp;w=640&amp;q=75 2x
              "
              style="
                position: absolute;
                inset: 0px;
                box-sizing: border-box;
                padding: 0px;
                border: none;
                margin: auto;
                display: block;
                width: 0px;
                height: 0px;
                min-width: 100%;
                max-width: 100%;
                min-height: 100%;
                max-height: 100%;
              "
            />
            <noscript></noscript>
          </span>
        </div>
        <div>
          <h1 class="text-2xl font-bold">Thank You For Your Subscription</h1>
          <h2>You will be getting daily news about Dan Son posts</h2>
          <div class="mt-8">
            <span class="text-white px-8 py-2 rounded-md bg-green-600"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="border-gray-200 w-full h-full col-span-7 xl:col-span-4">
      <!-- border-x-[1px] -->
      <div class="block">
        <div class="bg-white fixed inset-x-0 top-0 z-10">
          <header
            class="flex justify-between font-poppins items-center p-3 sm:p-5 wrapper"
          >
            <div></div>
            <div class="flex items-center space-x-0 sm:space-x-5">
              <div class="hidden md:inline-flex items-center space-x-5">
                <nuxt-link to="/">
                <span
                  role="img"
                  aria-label="💻"
                  class="notion-emoji notion-page-icon-offset notion-page-icon-cover"
                  >💻</span
                >
                <span
                  class="notion-emoji font-extrabold text-xl font-serif brand-link"
                  >Dan's Blog</span
                >
                </nuxt-link>
                <!-- <h3 class="cursor-pointer">About</h3>
              <h3 class="cursor-pointer">Contact</h3> -->
                <!-- <h3 class="bg-green-600 cursor-pointer rounded-full hover:bg-green-700 duration-500  px-4 py-2 text-white">Follow</h3> -->
              </div>
            </div>
            <div class="flex items-center space-x-5 text-green-600">
              <div class="flex justify-center items-center space-x-5">
                <!-- <h3 class="border px-4 py-1 cursor-pointer hover:bg-green-600 hover:text-white duration-200 rounded-full border-green-600">Get Started</h3> -->
              </div>
            </div>
          </header>
          <div class="text-center">
            <div
              class="fixed inset-0 backdrop-blur-0 pointer-events-none duration-500 bg-opacity-0 ease-in-out transition-all overflow-y-hidden"
            ></div>
            <div
              class="scale-0 ease-in-out duration-500 h-[600px] w-[500px] rounded-lg fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white shadow-xl"
            ></div>
          </div>
        </div>
      </div>
      <div
        class="w-full z-50 block sm:hidden px-[30px] py-[20px] fixed bg-gray-100 shadow-md bottom-0 top-20"
      >
        <div class="flex justify-between">
          <div>
            <svg
              class="cursor-pointer text-gray-800 hover:text-black duration-100"
              width="24"
              height="24"
              fill="none"
              aria-label="home"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.72 2.93a.45.45 0 0 1 .56 0l.34-.43-.34.43 9.37 7.5a.56.56 0 1 0 .7-.86l-9.38-7.5a1.55 1.55 0 0 0-1.94 0l-9.38 7.5a.56.56 0 0 0 .7.86l9.37-7.5zm7.17 9.13v-1.4l.91.69a.5.5 0 0 1 .2.4V20a2 2 0 0 1-2 2h-4a.5.5 0 0 1-.5-.5V17a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4.5a.5.5 0 0 1-.5.5H6a2 2 0 0 1-2-2v-8.25a.5.5 0 0 1 .2-.4l.91-.68V20c0 .5.4.89.89.89h3.39V17a2.11 2.11 0 0 1 2.11-2.11h1A2.11 2.11 0 0 1 14.61 17v3.89H18a.89.89 0 0 0 .89-.89v-7.95z"
                fill="#A8A8A8"
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
          <div
            class=""
            data-tooltipped=""
            aria-describedby="tippy-tooltip-5"
            data-original-title="Not working yet"
            style="display: inline"
          >
            <div>
              <svg
                class="cursor-not-allowed text-gray-800 hover:text-black duration-100"
                width="25"
                height="25"
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
      </div>
      <div
        class="wrapper z-0 mt-24 flex flex-col justify-center max-w-[800px] xl:px-6"
      >
        <div
          class="md:flex space-y-8 md:space-y-0 justify-between items-center space-x-4 py-10 font-extralight text-sm"
        >
          <div class="flex">
            <div>
              <img
                class="h-12 w-12 object-cover rounded-full"
                src="https://cdn.sanity.io/images/gyc4tcpa/production/ad62f7a815fd2aebade9b399a124eefd80ce0e67-1000x1000.png"
                alt=""
              />
            </div>
            <div class="pl-4">
              <p class="font-medium text-base">
                <span class="text-gray-900"> Dan Son</span>
              </p>
              <div class="flex items-center">
                <p class="text-gray-600">Thu Apr 21 2022</p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 14 16"
                  class="text-gray-500 ml-2 h-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <!-- <div class="flex justify-end items-center space-x-6" >
          <div class="border-[0.5px] sm:hidden border-gray-100 w-full" ></div>
          <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-6" data-original-title="Share on Twitter"  style="display: inline;">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-[18px] w-[18px] text-gray-500 hover:text-gray-900 duration-300 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
            </svg>
          </div>
          <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-7" data-original-title="Share on Facebook"  style="display: inline;">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-[17px] w-[17px] text-gray-500 hover:text-gray-900 duration-300 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,23.00025 C0,23.55225 0.44775,24 1.0005,24 L12.75,24 L12.75,15 L9.75,15 L9.75,11.25 L12.75,11.25 L12.75,8.25 C12.75,5.15025 14.71275,3.62475 17.478,3.62475 C18.8025,3.62475 19.941,3.72375 20.2725,3.76725 L20.2725,7.00725 L18.35475,7.008 C16.851,7.008 16.5,7.72275 16.5,8.77125 L16.5,11.25 L20.25,11.25 L19.5,15 L16.5,15 L16.56,24 L23.00025,24 C23.55225,24 24,23.55225 24,23.00025 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0"></path>
            </svg>
          </div>
          <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-8" data-original-title="Share on Linkedin"  style="display: inline;">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-[17px] w-[17px] text-gray-500 hover:text-gray-900 duration-300 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
            </svg>
          </div>
          <div class="" data-tooltipped="" aria-describedby="tippy-tooltip-9" data-original-title="Copy Link"  style="display: inline;">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-[17px] w-[17px] text-gray-500 hover:text-gray-900 duration-300 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M408 480H184a72 72 0 01-72-72V184a72 72 0 0172-72h224a72 72 0 0172 72v224a72 72 0 01-72 72z"></path>
              <path d="M160 80h235.88A72.12 72.12 0 00328 32H104a72 72 0 00-72 72v224a72.12 72.12 0 0048 67.88V160a80 80 0 0180-80z"></path>
            </svg>
          </div>
        </div> -->
        </div>
        <div
          class="fixed bottom-20 md:bottom-10 -translate-x-1/2 left-1/2 xl:left-[43%]"
        >
          <div class="bg-white px-6 py-2 rounded-full shadow-xl">
            <div class="flex space-x-8 items-center">
              <div class="flex space-x-2">
                <div
                  class=""
                  data-tooltipped=""
                  aria-describedby="tippy-tooltip-10"
                  data-original-title="Likes"
                  style="display: inline"
                >
                  <div
                    class="flex cursor-not-allowed items-center space-x-2 cursor-pointer"
                  >
                    <svg
                      fill="gray"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-label="clap"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                      ></path>
                    </svg>
                    <span class="text-sm text-gray-500">0</span>
                  </div>
                </div>
              </div>
              <div class="flex space-x-2">
                <div
                  class=""
                  data-tooltipped=""
                  aria-describedby="tippy-tooltip-11"
                  data-original-title="Respond"
                  style="display: inline"
                >
                  <div class="flex space-x-2 items-center cursor-pointer">
                    <svg
                      class=""
                      width="24"
                      fill="gray"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-label="responses"
                    >
                      <path
                        d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"
                      ></path>
                    </svg>
                    <span class="text-sm text-gray-500">7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <article class="">
          <h1 class="text-[32px] font-bold mb-3 text-black">
            5 New Killer Features of Next.js 12
          </h1>
          <h2 class="text-[20px] font-light text-gray-500">
            Top highlights of a game-changing release
          </h2>
          <div>
            <img
              class="h-auto cursor-zoom-in my-8 w-full object-cover duration-500 ease-in-out"
              src="https://cdn.sanity.io/images/gyc4tcpa/production/ebc21e1c5833172b2d0b7d9dbc2cf047924c646d-1200x674.png"
              alt="image"
            />
          </div>
        </article>
        <div>
          <div class="capitalize mt-6 imagepaddingstyle li link text-[20px]">
            <p>
              The Next.js framework was created by Vercel in 2016. It started as
              a server-side rendering-focused framework. It has gradually
              evolved since. Now it is a complete suite to build blazing fast
              React apps. It is developer-friendly and intuitive to use. Here
              are its strongest features:
            </p>
            <ul>
              <li>Page-based routing</li>
              <li>Hybrid pages</li>
              <li>Environment variables</li>
              <li>Static file serving</li>
              <li>Image optimization</li>
              <li>Analytics</li>
              <li>Internationalization</li>
              <li>Great documentation</li>
            </ul>
            <p>
              They have been labeling themselves as “The React Framework for
              Production.” It was quite an ambitious slogan at first, but it’s
              becoming harder to argue by the day. Its newest release is rocking
              a lot of awesome features that improve its performance. Are those
              enough to make this the go-to React framework? Is it going to
              become the Angular of React?
            </p>
            <p>
              In this article, we will be checking its top newest features and
              see if those are enough to make you switch.
            </p>
            <h1 class="text-[30px] font-bold text-gray-900 my-8">
              - 1. Faster Builds
            </h1>
            <p>
              The new Next.js 12 ships with a new Rust compiler. This compiler
              takes advantage of native compilation. This translates into a much
              faster build and faster refresh times.
            </p>
            <p>
              <br />
            </p>
            <figure>
              <img
                src="https://cdn.sanity.io/images/gyc4tcpa/production/4ad772bd17c6a0dc2e4ea8a9aa198b5917f3c295-700x237.png"
              />
            </figure>
            <p>
              How does that work? The compiler is built on top of SWC which
              stands up for Speedy Web Compiler. It does consume
              Typescript/Javascript and emits Javascript code which can be
              executed on old browsers. It is a Babel replacement. It is about
              20x faster than babel on a single thread and up to 70x faster on a
              four-core benchmark.
            </p>
            <p>Besides Next.js, who is currently using SWC?</p>
            <p></p>
            <figure>
              <img
                src="https://cdn.sanity.io/images/gyc4tcpa/production/874fb1d701ec81509775436a4d5151cbc368ef26-572x204.png"
              />
            </figure>
            <p>
              This Rust compiler is now enabled by default. The improvement of
              the Vercel.com build is about 50% faster; it went from 3 minutes
              and 41 seconds down to 1 minute and 58 seconds.
            </p>
            <p>
              It is still not perfect as it might lack some compatibilities with
              parsing popular libraries like styled-components or emotion but
              that support will happen soon.
            </p>
            <p>
              You can also use it to minify files by simply enabling it in the
              config. Here’s the code:
            </p>
            <p></p>
            <pre
              class="my-12 lowercase"
              style="
                display: block;
                overflow-x: auto;
                padding: 0.5em;
                background: rgb(240, 240, 240);
                color: rgb(68, 68, 68);
              "
            >
																<code class="language-text" style="white-space: pre;">
																	<span>// next.config.js
</span>module.exports = {
swcMinify: true
}
																</code>
															</pre>
            <h1 class="text-[30px] font-bold text-gray-900 my-8">
              - 2. Middleware
            </h1>
            <p>
              This is one of the most exciting features. At the moment we have
              to choose between CDN or Server Side Rendering when building
              faster apps. When we build a dynamic page that we want to cache we
              might use the latter.
            </p>
            <p>
              Vercel’s new Edge functions feature makes this possible. It gives
              the benefits of static caching with the power of dynamic
              execution. Now we can run dynamic functions aka middleware right
              before our CDN request completes. All that with no cold start.
            </p>
            <p>
              The Cloudflare and Amazon infrastructure has also implemented a
              similar feature not long ago. It is called edge computing or
              Lamdba@Edge. What is special about the Next.js version? Its easy
              and friendly integration within the framework.
            </p>
            <p>
              How to use it? By just creating a _middleware function in our
              pages directory and deploying it. There, we can do dynamic checks
              right at the CDN level. These middleware functions can be scoped
              and composed.
            </p>
            <p></p>
            <pre
              class="my-12 lowercase"
              style="
                display: block;
                overflow-x: auto;
                padding: 0.5em;
                background: rgb(240, 240, 240);
                color: rgb(68, 68, 68);
              "
            >
																<code class="language-text" style="white-space: pre;">
																	<span># Execution order for middleware composition
</span>- /pages
index.tsx
- /profile
_middleware.ts # will run first
profile.tsx
- /settings
_middleware.ts # will run second
_settings.tsx
																</code>
															</pre>
            <p>
              What does a _middleware.ts file look like? Let’s see that through
              an example where we create a dummy authentication middleware.
            </p>
            <p>
              In the code above, we can check if the request contains a valid
              JWT and otherwise return an error response.
            </p>
            <p>What are the most common use cases for using middleware?</p>
            <ul>
              <li>User Authentication</li>
              <li>Bot protection</li>
              <li>Redirects and rewrites</li>
              <li>Handling unsupported browsers</li>
              <li>Service-side analytics</li>
              <li>Advanced 18n routing</li>
              <li>Logging</li>
            </ul>
            <h1 class="text-[30px] font-bold text-gray-900 my-8">
              - 3. URL Imports
            </h1>
            <p>
              The Next.js team has been working for a while to support ES
              Modules. It was flagged as experimental in the previous version.
              In this new version, they are natively supported.
            </p>
            <p>
              What does this mean? That URL imports can be built on top of
              those.
            </p>
            <p>
              Why is this feature cool? We can now import directly tooling from
              the CDN without any extra builds or installs. We will be able to
              import those from the wire rather than having to build them
              locally.
            </p>
            <p>
              You can now use cool CDN projects like <strong>Skypack</strong> in
              your Next.js app. It is a package delivery network over CDN. It
              creates ready-for-production tools without the hassle of compiling
              and bundling them. It scans NPM and builds executable ES module
              packages that you can import from your Browser.
            </p>
            <p>
              How to enable this feature? The URL has to be specified in the
              next.config.js file. You need to only enable domains that you
              trust.
            </p>
            <p></p>
            <pre
              class="my-12 lowercase"
              style="
                display: block;
                overflow-x: auto;
                padding: 0.5em;
                background: rgb(240, 240, 240);
                color: rgb(68, 68, 68);
              "
            >
																<code class="language-text" style="white-space: pre;">
																	<span>module.exports = {
</span>experimental: {
urlImports: ['https://cdn.skypack.dev'],
},
}
																</code>
															</pre>
            <p>
              As you can see from the config, this URL import feature is still
              in the experimental phase.
            </p>
            <p>What does the Next.js workflow look like?</p>
            <ul>
              <li>
                on next dev the will amend the download and add the file in a
                next.lock file
              </li>
              <li>
                on next build the engine will look up the generated next.lock
                file.
              </li>
            </ul>
            <p></p>
            <pre
              class="my-12 lowercase"
              style="
                display: block;
                overflow-x: auto;
                padding: 0.5em;
                background: rgb(240, 240, 240);
                color: rgb(68, 68, 68);
              "
            >
																<code class="language-javascript" style="white-space: pre;">
																	<span style="color: rgb(136, 136, 136);">// next.config.js</span>
																	<span></span>
																	<span></span>
																	<span style="color: rgb(57, 115, 0);">module</span>
																	<span>.exports = {
</span>
																	<span></span>
																	<span class="hljs-attr">reactStrictMode</span>
																	<span>: </span>
																	<span style="color: rgb(120, 169, 96);">true</span>
																	<span>,
</span>
																	<span></span>
																	<span class="hljs-attr">experimental</span>
																	<span>: {
</span>
																	<span></span>
																	<span class="hljs-attr">urlImports</span>
																	<span>: [</span>
																	<span style="color: rgb(136, 0, 0);">'https://cdn.skypack.dev'</span>
																	<span>],
</span>  },
}


																	<span></span>
																	<span style="color: rgb(136, 136, 136);">// pages/index.js</span>
																	<span></span>
																	<span></span>
																	<span style="font-weight: bold;">import</span>
																	<span> styles </span>
																	<span style="font-weight: bold;">from</span>
																	<span></span>
																	<span style="color: rgb(136, 0, 0);">'../styles/Home.module.css'</span>
																	<span></span>
																	<span></span>
																	<span style="font-weight: bold;">import</span>
																	<span> confetti </span>
																	<span style="font-weight: bold;">from</span>
																	<span></span>
																	<span style="color: rgb(136, 0, 0);">'https://cdn.skypack.dev/canvas-confetti'</span>
																	<span></span>
																	<span></span>
																	<span style="font-weight: bold;">export</span>
																	<span></span>
																	<span style="font-weight: bold;">default</span>
																	<span></span>
																	<span class="hljs-function" style="font-weight: bold;">function</span>
																	<span class="hljs-function"></span>
																	<span class="hljs-function" style="color: rgb(136, 0, 0); font-weight: bold;">Home</span>
																	<span class="hljs-function">(</span>
																	<span class="hljs-function">) </span>
																	<span>{
</span>
																	<span></span>
																	<span style="font-weight: bold;">return</span>
																	<span> (
</span>
																	<span></span>
																	<span class="xml hljs-tag">&lt;</span>
																	<span class="xml hljs-tag" style="font-weight: bold;">div</span>
																	<span class="xml hljs-tag"></span>
																	<span class="xml hljs-tag hljs-attr">className</span>
																	<span class="xml hljs-tag">=</span>
																	<span class="xml hljs-tag" style="color: rgb(136, 0, 0);">{styles.container}</span>
																	<span class="xml hljs-tag">&gt;</span>
																	<span class="xml"></span>
																	<span class="xml"></span>
																	<span class="xml hljs-tag">&lt;</span>
																	<span class="xml hljs-tag" style="font-weight: bold;">main</span>
																	<span class="xml hljs-tag"></span>
																	<span class="xml hljs-tag hljs-attr">className</span>
																	<span class="xml hljs-tag">=</span>
																	<span class="xml hljs-tag" style="color: rgb(136, 0, 0);">{styles.main}</span>
																	<span class="xml hljs-tag">&gt;</span>
																	<span class="xml"></span>
																	<span class="xml"></span>
																	<span class="xml hljs-tag">&lt;</span>
																	<span class="xml hljs-tag" style="font-weight: bold;">h1</span>
																	<span class="xml hljs-tag"></span>
																	<span class="xml hljs-tag hljs-attr">className</span>
																	<span class="xml hljs-tag">=</span>
																	<span class="xml hljs-tag" style="color: rgb(136, 0, 0);">{styles.title}</span>
																	<span class="xml hljs-tag">&gt;</span>
																	<span class="xml"></span>
																	<span class="xml">          Welcome to </span>
																	<span class="xml hljs-tag">&lt;</span>
																	<span class="xml hljs-tag" style="font-weight: bold;">a</span>
																	<span class="xml hljs-tag"></span>
																	<span class="xml hljs-tag hljs-attr">href</span>
																	<span class="xml hljs-tag">=</span>
																	<span class="xml hljs-tag" style="color: rgb(136, 0, 0);">"https://nextjs.org"</span>
																	<span class="xml hljs-tag">&gt;</span>
																	<span class="xml">Next.js!</span>
																	<span class="xml hljs-tag">&lt;/</span>
																	<span class="xml hljs-tag" style="font-weight: bold;">a</span>
																	<span class="xml hljs-tag">&gt;</span>
																	<span class="xml"></span>
																	<span class="xml"></span>
																	<span class="xml hljs-tag">&lt;/</span>
																	<span class="xml hljs-tag" style="font-weight: bold;">h1</span>
																	<span class="xml hljs-tag">&gt;</span>
																	<span class="xml"></span>
																	<span class="xml"></span>
																	<span class="xml hljs-tag">&lt;</span>
																	<span class="xml hljs-tag" style="font-weight: bold;">button</span>
																	<span class="xml hljs-tag"></span>
																	<span class="xml hljs-tag hljs-attr">onClick</span>
																	<span class="xml hljs-tag">=</span>
																	<span class="xml hljs-tag" style="color: rgb(136, 0, 0);">{confetti}</span>
																	<span class="xml hljs-tag">&gt;</span>
																	<span class="xml"></span>
																	<span class="xml">          Throw Confetti
</span>
																	<span class="xml"></span>
																	<span class="xml hljs-tag">&lt;/</span>
																	<span class="xml hljs-tag" style="font-weight: bold;">button</span>
																	<span class="xml hljs-tag">&gt;</span>
																	<span class="xml"></span>
																	<span class="xml"></span>
																	<span class="xml hljs-tag">&lt;/</span>
																	<span class="xml hljs-tag" style="font-weight: bold;">main</span>
																	<span class="xml hljs-tag">&gt;</span>
																	<span class="xml"></span>
																	<span class="xml"></span>
																	<span class="xml hljs-tag">&lt;/</span>
																	<span class="xml hljs-tag" style="font-weight: bold;">div</span>
																	<span class="xml hljs-tag">&gt;</span>
																	<span></span>  )
}
																</code>
															</pre>
            <p></p>
            <p>Let’s check the result:</p>
            <p>
              <br />
            </p>
            <figure>
              <img
                src="https://cdn.sanity.io/images/gyc4tcpa/production/461d15a8d807404a343bdd4a6f752aac00606ea2-700x516.png"
              />
            </figure>
            <h1 class="text-[30px] font-bold text-gray-900 my-8">
              - 4. Support for React 18 on the server-side
            </h1>
            <p>
              The React 18 version is coming soon and after a boring release of
              React 17, it is mainly focused on concurrency.
            </p>
            <p>
              The Next.js framework is jumping early and anticipating some of
              React’s most awaited features. Naturally, all these new features
              will be under an experimental config flag.
            </p>
            <h2 class="text-2xl font-bold text-gray-900 my-5">
              - <strong>HTML server-side streaming</strong>
            </h2>
            <p>
              One of the coolest React’s 18 features is the built-in support of
              server-side Suspense and streaming of HTML parts of your React
              application. You are no longer required to load all or nothing.
              You can progressively ship HTML to the browser.
            </p>
            <p>
              The Next.js framework supports that and provides abstractions
              around all those mechanisms. For dynamically importing modules you
              can use its next/dynamic utility.
            </p>
            <h2 class="text-2xl font-bold text-gray-900 my-5">
              - React server-side components
            </h2>
            <p>
              The new React Server Component feature does simplify the SSR
              development and logic. They are always rendered in the server and
              streamed to the client. That reduces the need for handling
              different rendering scenarios. The usage of getServerSideProps and
              getStaticProps is not needed anymore. The shift the computation
              from the client to the server.
            </p>
            <p>
              Those are big improvements; however, they still have some
              limitations:
            </p>
            <ul>
              <li>They are stateless.</li>
              <li>
                They can’t use lifecycle methods like useState or useEffect.
              </li>
              <li>They can’t make usage of browser-only APIs.</li>
            </ul>
            <h2 class="text-2xl font-bold text-gray-900 my-5">- Usage</h2>
            <p>How do you opt-in to all these new React 18 goodies?</p>
            <p>
              <strong>1.</strong> First, you need to install React’s 18 Alpha
              version using the following code:
            </p>
            <p>
              npm install next@latest react@ <strong>alpha</strong> react-dom@
              <strong>alpha</strong>
            </p>
            <p>
              <strong>2.</strong> Enable the experimental concurrent features in
              Next.js configuration, as shown below:
            </p>
            <p></p>
            <pre
              class="my-12 lowercase"
              style="
                display: block;
                overflow-x: auto;
                padding: 0.5em;
                background: rgb(240, 240, 240);
                color: rgb(68, 68, 68);
              "
            >
																		<code class="language-text" style="white-space: pre;">
																			<span>// next.config.js
</span>module.exports = {
experimental: {
concurrentFeatures: true,
serverComponents: true,
},
}
																		</code>
																	</pre>
            <p>With that, you are good to go.</p>
            <h1 class="text-[30px] font-bold text-gray-900 my-8">
              - 5. Collaborative Live Coding
            </h1>
            <p>
              The shift to remote jobs means that you need more collaborative
              tools to work better as a team. With Next.js 12 this is taken to
              next level. Now you can code, share, draw and edit instantly
              within your Browser.
            </p>
            <p>
              The https://vercel.com/live platform will give you all that you
              need. Your application will be hosted in Vercel.com and integrated
              through your chosen git vendor.
            </p>
            <p>
              Once deployed, you can get a live URL within seconds and kick off
              a pair programming session or a product review one. The most
              relevant features are:
            </p>
            <ul>
              <li>In-browser editing</li>
              <li>Ready in seconds</li>
              <li>Invite any team member</li>
              <li>Only your favorite browser is required</li>
            </ul>
            <p>
              You can play around with your apps without having to commit
              anything to the repo first. When are done, you may push your
              changes by using the git vendor.
            </p>
            <p>
              <br />
            </p>
            <figure>
              <img
                src="https://cdn.sanity.io/images/gyc4tcpa/production/fb2bbd9ce7a1d439125b1fc50078de8d111e14c8-700x465.png"
              />
            </figure>
            <h1 class="text-[30px] font-bold text-gray-900 my-8">- Wrap Up</h1>
            <p>
              This incredible release makes the Next.js framework stand out from
              the competition. It is a framework focused on development
              friendliness and performance in mind.
            </p>
            <p>
              As developers, we will see our workflows improved and get more
              tools at our disposal. As with any framework, it is opinionated
              but with enough flexibility to still have a hand in the steering
              wheel. Its most controversial topic has been always its routing
              implementation.
            </p>
            <p>
              Be aware that the Next.js project is a way to attract customers to
              their Vercel platform. As they are tightly coupled you get many
              benefits and features from hosting the application with them. You
              are not locking yourself to their infrastructure but losing some
              of those if you decide to change it. That’s the tradeoff you have
              to assume in order to empower your workflow by choosing Vercel as
              the hosting platform.
            </p>
            <p>
              Not a Medium member? Support me
              <a href="http://dioxmio.medium.com/membership">here</a> by
              becoming one.
            </p>
          </div>
        </div>
        <div class="">
          <div
            class="bg-white translate-x-[300%] duration-500 drop-shadow-[0_35px_135px_rgba(0,0,0,0.5)] px-6 pt-6 h-full fixed w-[25%] right-0 bottom-0"
          >
            <grammarly-extension
              data-grammarly-shadow-root="true"
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                pointer-events: none;
              "
              class="cGcvT"
            ></grammarly-extension>
            <grammarly-extension
              data-grammarly-shadow-root="true"
              style="
                mix-blend-mode: darken;
                position: absolute;
                top: 0px;
                left: 0px;
                pointer-events: none;
              "
              class="cGcvT"
            ></grammarly-extension>
            <div class="flex items-center justify-between">
              <h1 class="text-gray-900 font-bold text-xl">Responses (7)</h1>
              <div class="flex space-x-4 items-center">
                <div
                  class=""
                  data-tooltipped=""
                  aria-describedby="tippy-tooltip-12"
                  data-original-title="View Community Guidelines"
                  style="display: inline"
                >
                  <div class="flex space-x-2 cursor-pointer">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="text-xl text-gray-700 hover:text-gray-900 duration-500 cursor-pointer"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M12 3.19l7 3.11V11c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class="text-2xl text-gray-700 hover:text-gray-900 duration-500 cursor-pointer"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"
                  ></path>
                </svg>
              </div>
            </div>
            <form
              class="my-10 drop-shadow-xl p-4 translate-x-[0%] duration-500 ease-in-out rounded-md bg-white"
            >
              <div class="flex items-center space-x-4"></div>
              <textarea
                maxlength="0"
                name="comment"
                id="comment"
                class="my-6 text-sm w-full outline-none"
                placeholder="what are your thoughts..."
                required=""
                spellcheck="false"
              ></textarea>
              <div class="space-x-4 text-sm items-center flex justify-end">
                <span
                  class="text-gray-600 cursor-pointer hover:text-gray-900 duration-200"
                  >Cancel</span
                >
                <input
                  type="submit"
                  class="bg-green-200 pointer-events-none text-white px-4 rounded-full py-2"
                  value="Response"
                />
              </div>
            </form>
            <div class="">
              <div>
                <div>
                  <div class="flex items-center space-x-4">
                    <div class="rounded-full w-8 h-8 bg-green-600">
                      <span
                        class="text-xs flex justify-center text-white items-center translate-y-[50%] top-1/2 left-1/2"
                      >
                        <span class="capitalize cursor-pointer">MA</span>
                      </span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-sm cursor-pointer">Mark Sokoli </span>
                      <span class="text-sm text-gray-600">Tue Apr 26 2022</span>
                    </div>
                  </div>
                  <p class="text-sm mt-6 mb-4 break-words">
                    Nice medium clone! WOW. Amazing what can be done by one dev
                    alone.
                  </p>
                  <div class="cursor-not-allowed items-center flex space-x-2">
                    <svg
                      fill="gray"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-label="clap"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                      ></path>
                    </svg>
                    <span class="text-sm text-gray-500">0</span>
                  </div>
                  <div class="border-b-[1px] border-gray-200 my-4"></div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <div class="rounded-full w-8 h-8 bg-green-600">
                      <span
                        class="text-xs flex justify-center text-white items-center translate-y-[50%] top-1/2 left-1/2"
                      >
                        <span class="capitalize cursor-pointer">MU</span>
                      </span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-sm cursor-pointer">musashi Osama </span>
                      <span class="text-sm text-gray-600">Sat Apr 23 2022</span>
                    </div>
                  </div>
                  <p class="text-sm mt-6 mb-4 break-words">q</p>
                  <div class="cursor-not-allowed items-center flex space-x-2">
                    <svg
                      fill="gray"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-label="clap"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                      ></path>
                    </svg>
                    <span class="text-sm text-gray-500">0</span>
                  </div>
                  <div class="border-b-[1px] border-gray-200 my-4"></div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <div class="rounded-full w-8 h-8 bg-green-600">
                      <span
                        class="text-xs flex justify-center text-white items-center translate-y-[50%] top-1/2 left-1/2"
                      >
                        <span class="capitalize cursor-pointer">SA</span>
                      </span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-sm cursor-pointer">sama sama </span>
                      <span class="text-sm text-gray-600">Sat Apr 23 2022</span>
                    </div>
                  </div>
                  <p class="text-sm mt-6 mb-4 break-words">sama</p>
                  <div class="cursor-not-allowed items-center flex space-x-2">
                    <svg
                      fill="gray"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-label="clap"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                      ></path>
                    </svg>
                    <span class="text-sm text-gray-500">0</span>
                  </div>
                  <div class="border-b-[1px] border-gray-200 my-4"></div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <div class="rounded-full w-8 h-8 bg-green-600">
                      <span
                        class="text-xs flex justify-center text-white items-center translate-y-[50%] top-1/2 left-1/2"
                      >
                        <span class="capitalize cursor-pointer">MU</span>
                      </span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-sm cursor-pointer">musashi Osama </span>
                      <span class="text-sm text-gray-600">Sat Apr 23 2022</span>
                    </div>
                  </div>
                  <p class="text-sm mt-6 mb-4 break-words">sas</p>
                  <div class="cursor-not-allowed items-center flex space-x-2">
                    <svg
                      fill="gray"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-label="clap"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                      ></path>
                    </svg>
                    <span class="text-sm text-gray-500">0</span>
                  </div>
                  <div class="border-b-[1px] border-gray-200 my-4"></div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <div class="rounded-full w-8 h-8 bg-green-600">
                      <span
                        class="text-xs flex justify-center text-white items-center translate-y-[50%] top-1/2 left-1/2"
                      >
                        <span class="capitalize cursor-pointer">MU</span>
                      </span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-sm cursor-pointer">musashi Osama </span>
                      <span class="text-sm text-gray-600">Sun Apr 24 2022</span>
                    </div>
                  </div>
                  <p class="text-sm mt-6 mb-4 break-words">sas</p>
                  <div class="cursor-not-allowed items-center flex space-x-2">
                    <svg
                      fill="gray"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-label="clap"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                      ></path>
                    </svg>
                    <span class="text-sm text-gray-500">0</span>
                  </div>
                  <div class="border-b-[1px] border-gray-200 my-4"></div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <div class="rounded-full w-8 h-8 bg-green-600">
                      <span
                        class="text-xs flex justify-center text-white items-center translate-y-[50%] top-1/2 left-1/2"
                      >
                        <span class="capitalize cursor-pointer">MA</span>
                      </span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-sm cursor-pointer">Manish </span>
                      <span class="text-sm text-gray-600">Thu May 26 2022</span>
                    </div>
                  </div>
                  <p class="text-sm mt-6 mb-4 break-words">nnnk</p>
                  <div class="cursor-not-allowed items-center flex space-x-2">
                    <svg
                      fill="gray"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-label="clap"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                      ></path>
                    </svg>
                    <span class="text-sm text-gray-500">0</span>
                  </div>
                  <div class="border-b-[1px] border-gray-200 my-4"></div>
                </div>
                <div>
                  <div class="flex items-center space-x-4">
                    <div class="rounded-full w-8 h-8 bg-green-600">
                      <span
                        class="text-xs flex justify-center text-white items-center translate-y-[50%] top-1/2 left-1/2"
                      >
                        <span class="capitalize cursor-pointer">AS</span>
                      </span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-sm cursor-pointer">asdqw qweqwe </span>
                      <span class="text-sm text-gray-600">Fri Jul 08 2022</span>
                    </div>
                  </div>
                  <p class="text-sm mt-6 mb-4 break-words">sadasdsa</p>
                  <div class="cursor-not-allowed items-center flex space-x-2">
                    <svg
                      fill="gray"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-label="clap"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                      ></path>
                    </svg>
                    <span class="text-sm text-gray-500">0</span>
                  </div>
                  <div class="border-b-[1px] border-gray-200 my-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="hide" class="flex mb-36 mt-16 justify-between items-center">
          <div class="flex space-x-8 items-center">
            <div class="flex space-x-2">
              <div
                class=""
                data-tooltipped=""
                aria-describedby="tippy-tooltip-13"
                data-original-title="Likes"
                style="display: inline"
              >
                <div class="flex cursor-not-allowed space-x-2 cursor-pointer">
                  <svg
                    fill="gray"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-label="clap"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
                    ></path>
                  </svg>
                  <span class="text-sm text-gray-500">0</span>
                </div>
              </div>
            </div>
            <div class="flex space-x-2">
              <div
                class=""
                data-tooltipped=""
                aria-describedby="tippy-tooltip-14"
                data-original-title="Respond"
                style="display: inline"
              >
                <div class="flex space-x-2 cursor-pointer">
                  <svg
                    class=""
                    width="24"
                    fill="gray"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-label="responses"
                  >
                    <path
                      d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"
                    ></path>
                  </svg>
                  <span class="text-sm text-gray-500">7</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex cursor-not-allowed space-x-2">
            <div
              class=""
              data-tooltipped=""
              aria-describedby="tippy-tooltip-15"
              data-original-title="Not working yet"
              style="display: inline"
            >
              <div class="cursor-not-allowed flex space-x-2">
                <svg
                  class="cursor-not-allowed text-gray-800 hover:text-black duration-100"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z"
                    fill="#000"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full wrapper p-10 border-t-[4px] border-green-600 bg-gray-100"
        >
          <div class="z-0">
            <h1 class="text-2xl font-bold">
              Get an email whenever Dan Son publishes.
            </h1>
            <form
              class="pt-6 space-y-4 w-full sm:space-x-4 justify-between flex flex-col sm:flex-row items-center"
            >
              <div class="w-[100%] sm:w-[67%]">
                <input
                  name="email"
                  id="emailinp"
                  type="text"
                  class="block z-0 w-full py-2.5 px-0 text-sm text-gray-600 bg-transparent border-0 border-b-[1px] appearance-none dark:border-gray-400 dark:focus:border-primary-100 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder="Your Email"
                  required=""
                  value=""
                />
              </div>
              <button class="w-full sm:w-auto">
                <div
                  class="flex justify-center items-center space-x-2 bg-green-600 hover:bg-green-700 duration-500 text-white py-[11px] px-0 sm:px-8 rounded-full"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="h-[23px] w-[23px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        d="M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007zM4.434 5L12 11.81 19.566 5H4.434zM0 15h8v2H0v-2zm0-5h5v2H0v-2z"
                      ></path>
                    </g>
                  </svg>
                  <span>Subscribe</span>
                </div>
              </button>
            </form>
            <h2 class="pr-4 text-xs pt-6">
              By signing up, you will create a Medium account if you don’t
              already have one. Review our
              <span class="cursor-pointer underline">Privacy Policy</span> for
              more information about our privacy practices.
            </h2>
          </div>
        </div>
        <div class="py-12">
          <div class="flex items-center justify-between">
            <h1 class="capitalize text-xl font-medium">more from Dan Son</h1>
            <div class="flex space-x-4">
              <!-- <button class="bg-green-600 rounded-full hover:bg-green-700 duration-500  px-4 py-2 text-white">Follow</button> -->
              <div
                class="h-[37px] w-[37px] cursor-pointer flex justify-center items-center rounded-full bg-green-600 hover:bg-green-700 duration-500"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-white text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M22 13h-2V7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9zM4.511 5l7.55 6.662L19.502 5H4.511zM21 18h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div class="py-4 pr-0 mb-8 text-sm sm:pr-44">
            <p>
              My name is Dan Son and I am a Junior self taught Web Developer. I
              enjoy using my skills to contribute to the exciting technological
              advances. <br />
            </p>
          </div>
          <div class="w-full">
            <div
              class="flex space-y-4 justify-between items-center"
              href="/post/5-new-killer-features-of-next-js-12"
            >
              <div class="space-y-2 flex flex-col cursor-pointer">
                <div>
                  <p class="text-sm text-gray-500">Thu Apr 21 2022</p>
                  <p class="sm:text-[21px] text-[18px] font-semibold">
                    5 New Killer Features of Next.js 12
                  </p>
                </div>
                <div
                  class="sm:line-clamp-3 line-clamp-2 text-[13px] sm:text-[15px] text-gray-900"
                >
                  <div>
                    <p>
                      The Next.js framework was created by Vercel in 2016. It
                      started as a server-side rendering-focused framework. It
                      has gradually evolved since. Now it is a complete suite to
                      build blazing fast React apps. It is developer-friendly
                      and intuitive to use. Here are its strongest features:
                    </p>
                    <ul>
                      <li>Page-based routing</li>
                    </ul>
                  </div>
                </div>
              </div>
              <img
                class="object-cover cursor-pointer w-24 h-24 sm:w-36 ml-10 sm:h-36"
                src="https://cdn.sanity.io/images/gyc4tcpa/production/ebc21e1c5833172b2d0b7d9dbc2cf047924c646d-1200x674.png"
                alt="image"
              />
            </div>
            <div class="border-b-[1px] border-gray-200 my-10"></div>
            <div class="flex justify-center items-center space-x-4">
              <h1>Share your ideas with millions of readers.</h1>
              <div
                class=""
                data-tooltipped=""
                aria-describedby="tippy-tooltip-16"
                data-original-title="Not Working Yet"
                style="display: inline"
              >
                <button
                  class="bg-gray-800 cursor-not-allowed text-sm hover:bg-gray-900 duration-500 px-4 py-2 text-white rounded-full"
                >
                  Write on medium
                </button>
              </div>
            </div>
            <div class="border-b-[1px] border-gray-200 my-10"></div>
            <div>
              <div
                class="flex space-y-4 justify-between items-center"
                href="/post/5-new-killer-features-of-next-js-12"
              >
                <div class="space-y-2 flex flex-col cursor-pointer">
                  <div>
                    <p class="text-sm text-gray-500">Thu Apr 21 2022</p>
                    <p class="sm:text-[21px] text-[18px] font-semibold">
                      5 New Killer Features of Next.js 12
                    </p>
                  </div>
                  <div
                    class="sm:line-clamp-3 line-clamp-2 text-[13px] sm:text-[15px] text-gray-900"
                  >
                    <div class="capitalize text-[16px]">
                      <p>
                        The Next.js framework was created by Vercel in 2016. It
                        started as a server-side rendering-focused framework. It
                        has gradually evolved since. Now it is a complete suite
                        to build blazing fast React apps. It is
                        developer-friendly and intuitive to use. Here are its
                        strongest features:
                      </p>
                      <ul>
                        <li>Page-based routing</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <img
                  class="object-cover cursor-pointer w-24 h-24 sm:w-36 ml-10 sm:h-36"
                  src="https://cdn.sanity.io/images/gyc4tcpa/production/ebc21e1c5833172b2d0b7d9dbc2cf047924c646d-1200x674.png"
                  alt="image"
                />
              </div>
              <div class="border-b-[1px] border-gray-200 my-10"></div>
            </div>
            <div>
              <div
                class="flex space-y-4 justify-between items-center"
                href="/post/11-useful-modern-javascript-tips"
              >
                <div class="space-y-2 flex flex-col cursor-pointer">
                  <div>
                    <p class="text-sm text-gray-500">Thu Apr 14 2022</p>
                    <p class="sm:text-[21px] text-[18px] font-semibold">
                      11 Useful Modern JavaScript Tips
                    </p>
                  </div>
                  <div
                    class="sm:line-clamp-3 line-clamp-2 text-[13px] sm:text-[15px] text-gray-900"
                  >
                    <div class="capitalize text-[16px]">
                      <p>
                        In our day-to-day coding life, we frequently used
                        numbers to string conversion, check keys in the object
                        it exits or not, conditionally manipulate object data,
                        filter falsy value in the array, etc.
                      </p>
                      <p>
                        Here I come up with some amazing tips which are my
                        personal favorite ❤️ ️and very useful to make my code
                        <strong>shorter</strong> and
                        <strong
                          >clean. <br />
                          <br /> </strong
                        >1. Conditionally <strong>add properties</strong>💡 in
                        the object <br />
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  class="object-cover cursor-pointer w-24 h-24 sm:w-36 ml-10 sm:h-36"
                  src="https://cdn.sanity.io/images/gyc4tcpa/production/b5949bc8cd131c6e61f449340be97f26d9ba348e-1920x1080.png"
                  alt="image"
                />
              </div>
              <div class="border-b-[1px] border-gray-200 my-10"></div>
            </div>
            <div>
              <div
                class="flex space-y-4 justify-between items-center"
                href="/post/next-js-the-next-big-thing"
              >
                <div class="space-y-2 flex flex-col cursor-pointer">
                  <div>
                    <p class="text-sm text-gray-500">Wed Apr 13 2022</p>
                    <p class="sm:text-[21px] text-[18px] font-semibold">
                      Next.js -The next big thing
                    </p>
                  </div>
                  <div
                    class="sm:line-clamp-3 line-clamp-2 text-[13px] sm:text-[15px] text-gray-900"
                  >
                    <div class="capitalize text-[16px]">
                      <p>
                        Nextjs is a React framework for developing single page
                        Javascript applications. It has powers to Develop
                        beautiful Web application for different platform like
                        Windows, Linux and mac. If you have little experience in
                        react and looking forward to know more about react
                        ecosystem then you should have knowledge about Next.js
                        framework. The benefits of this framework are numerous,
                        both for our clients’ applications as well as for our
                        development team. The more we, as users, interact
                        digitally, the more impatient we become as our
                        expectations are not met by websites and apps that fail
                        to load within milliseconds. Technology decisions play a
                        large part in being able to deliver highly performant,
                        scalable, successful applications and as such, we have
                        started using Next.js for a number of reasons; for the
                        most part related to speed and performance.
                      </p>
                      <figure>
                        <img
                          src="https://cdn.sanity.io/images/gyc4tcpa/production/422dd2ab3efdd860d749b12086973baa8a9a39fa-1000x667.jpg"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <img
                  class="object-cover cursor-pointer w-24 h-24 sm:w-36 ml-10 sm:h-36"
                  src="https://cdn.sanity.io/images/gyc4tcpa/production/4d1a6db90cec35063c29e64b4abd3ac3bca39daa-1000x582.jpg"
                  alt="image"
                />
              </div>
              <div class="border-b-[1px] border-gray-200 my-10"></div>
            </div>
            <div>
              <div
                class="flex space-y-4 justify-between items-center"
                href="/post/why-is-nextjs-so-fast-as-compere-to-reactjs"
              >
                <div class="space-y-2 flex flex-col cursor-pointer">
                  <div>
                    <p class="text-sm text-gray-500">Thu Apr 14 2022</p>
                    <p class="sm:text-[21px] text-[18px] font-semibold">
                      Why is Nextjs so fast as compere to Reactjs?
                    </p>
                  </div>
                  <div
                    class="sm:line-clamp-3 line-clamp-2 text-[13px] sm:text-[15px] text-gray-900"
                  >
                    <div class="capitalize text-[16px]">
                      <p>
                        The article is based on create-next-app . If you check
                        the dependencies list in your project for that, you
                        reach my reactjs base article. You are also surprised
                        when you know the answer because nextjs have a great
                        team that spends tons of time building nextjs.
                      </p>
                      <blockquote>
                        My question is,
                        <strong
                          >how many dependencies need to run the hello-world
                          nextjs app</strong
                        >?
                      </blockquote>
                    </div>
                  </div>
                </div>
                <img
                  class="object-cover cursor-pointer w-24 h-24 sm:w-36 ml-10 sm:h-36"
                  src="https://cdn.sanity.io/images/gyc4tcpa/production/649b09050940bec8aba09cbc8c1c455cb093978f-1920x1080.png"
                  alt="image"
                />
              </div>
              <div class="border-b-[1px] border-gray-200 my-10"></div>
            </div>
            <div>
              <div
                class="flex space-y-4 justify-between items-center"
                href="/post/how-i-code-for-8-hours-without-feeling-tired"
              >
                <div class="space-y-2 flex flex-col cursor-pointer">
                  <div>
                    <p class="text-sm text-gray-500">Fri Apr 22 2022</p>
                    <p class="sm:text-[21px] text-[18px] font-semibold">
                      How I code for 8 hours without feeling tired.
                    </p>
                  </div>
                  <div
                    class="sm:line-clamp-3 line-clamp-2 text-[13px] sm:text-[15px] text-gray-900"
                  >
                    <div class="capitalize text-[16px]">
                      <p>
                        I thought it was okay to just sit down at my desk, open
                        my laptop, take a task from my To-Do list, and code
                        until I felt tired. But in reality, this style of work
                        always killed my productivity level after 2–4 hours of
                        coding.
                      </p>
                      <h1>🔴 I have coded wrong my whole life.</h1>
                    </div>
                  </div>
                </div>
                <img
                  class="object-cover cursor-pointer w-24 h-24 sm:w-36 ml-10 sm:h-36"
                  src="https://cdn.sanity.io/images/gyc4tcpa/production/91349ded9a5e22ae646e70be5235c1664f10131a-950x553.jpg"
                  alt="image"
                />
              </div>
              <div class="border-b-[1px] border-gray-200 my-10"></div>
            </div>
            <div>
              <div
                class="flex space-y-4 justify-between items-center"
                href="/post/getting-started-with-react-and-next-js"
              >
                <div class="space-y-2 flex flex-col cursor-pointer">
                  <div>
                    <p class="text-sm text-gray-500">Thu Apr 21 2022</p>
                    <p class="sm:text-[21px] text-[18px] font-semibold">
                      Getting Started with React and Next.JS
                    </p>
                  </div>
                  <div
                    class="sm:line-clamp-3 line-clamp-2 text-[13px] sm:text-[15px] text-gray-900"
                  >
                    <div class="capitalize text-[16px]">
                      <p>
                        It abstracts away all those performance and development
                        setups you need with a typical React app and allows you
                        to focus only on what matters — your business logic
                        code. I had my first experience with Next.js about 6
                        months ago when I was trying to learn new technologies
                        which are based on react/javascript.
                      </p>
                      <ol>
                        <li>Best SEO practices</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <img
                  class="object-cover cursor-pointer w-24 h-24 sm:w-36 ml-10 sm:h-36"
                  src="https://cdn.sanity.io/images/gyc4tcpa/production/f7ac0e380930fb1b5ef0df2cb413382662236c13-1200x682.webp"
                  alt="image"
                />
              </div>
              <div class="border-b-[1px] border-gray-200 my-10"></div>
            </div>
            <div>
              <div
                class="flex space-y-4 justify-between items-center"
                href="/post/top-10-react-icon-libraries"
              >
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
              <div class="border-b-[1px] border-gray-200 my-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[110vh] hidescrollbar relative hidden xl:flex">
      <div
        class="fixed bottom-0 top-20 overflow-y-scroll w-[380px] col-span-2 px-8 pb-16"
      >
        <!-- <div class="space-x-8" >
        <button class="bg-gray-800 hover:bg-gray-900 duration-500 px-16 py-2 rounded-full text-white">Get started</button>
        <button class="text-black hover:text-green-600">Sign in</button>
      </div> -->
        <div class="w-full py-10 relative">
          <input
            class="px-12 w-[100%] py-2 rounded-full border-gray-200 border-[1px] outline-none text-sm"
            type="text"
            placeholder="Search.."
            name=""
            id=""
          />
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-8 h-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <div></div>
        <div>
          <div>
            <img
              class="h-20 w-20 object-cover rounded-full"
              src="https://cdn.sanity.io/images/gyc4tcpa/production/ad62f7a815fd2aebade9b399a124eefd80ce0e67-1000x1000.png"
              alt=""
            />
            <h1 class="font-bold py-4 text-gray-900">Dan Son</h1>
            <h2 class="text-gray-500 text-sm">
              <p>
                My name is Dan and I am a Junior self taught Web Developer. I
                enjoy using my skills to contribute to the exciting
                technological advances. <br />
              </p>
            </h2>
            <div class="py-4 flex items-center space-x-4">
              <!-- <button value="Follow" class="bg-green-600 rounded-full hover:bg-green-700 duration-500  px-4 py-2 text-white">Follow</button> -->
              <div
                class="h-[37px] w-[37px] cursor-pointer flex justify-center items-center rounded-full bg-green-600 hover:bg-green-700 duration-500"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-white text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M22 13h-2V7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9zM4.511 5l7.55 6.662L19.502 5H4.511zM21 18h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div class="py-4">
              <h2 class="text-gray-900 text-md font-semibold capitalize">
                more from medium
              </h2>
              <div class="py-6">
                <div
                  class="flex items-start justify-between py-4"
                  href="/post/5-new-killer-features-of-next-js-12"
                >
                  <div
                    class="space-y-2 flex flex-col jusify-center cursor-pointer"
                  >
                    <div class="flex items-center space-x-2">
                      <img
                        alt="r"
                        class="h-6 rounded-full"
                        src="https://cdn.sanity.io/images/gyc4tcpa/production/ad62f7a815fd2aebade9b399a124eefd80ce0e67-1000x1000.png"
                      />
                      <span class="text-sm font-normal capitalize">
                        Dan Son</span
                      >
                    </div>
                    <div>
                      <p class="text-[16px] text-md font-semibold w-[225px]">
                        5 New Killer Features of Next.js 12
                      </p>
                    </div>
                  </div>
                  <div class="h-16 w-16 flex justify-start">
                    <img
                      class="h-full w-full rounded-md cursor-pointer object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                      src="https://cdn.sanity.io/images/gyc4tcpa/production/ebc21e1c5833172b2d0b7d9dbc2cf047924c646d-1200x674.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div
                  class="flex items-start justify-between py-4"
                  href="/post/11-useful-modern-javascript-tips"
                >
                  <div
                    class="space-y-2 flex flex-col jusify-center cursor-pointer"
                  >
                    <div class="flex items-center space-x-2">
                      <img
                        alt="r"
                        class="h-6 rounded-full"
                        src="https://cdn.sanity.io/images/gyc4tcpa/production/ad62f7a815fd2aebade9b399a124eefd80ce0e67-1000x1000.png"
                      />
                      <span class="text-sm font-normal capitalize">
                        Dan Son</span
                      >
                    </div>
                    <div>
                      <p class="text-[16px] text-md font-semibold w-[225px]">
                        11 Useful Modern JavaScript Tips
                      </p>
                    </div>
                  </div>
                  <div class="h-16 w-16 flex justify-start">
                    <img
                      class="h-full w-full rounded-md cursor-pointer object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                      src="https://cdn.sanity.io/images/gyc4tcpa/production/b5949bc8cd131c6e61f449340be97f26d9ba348e-1920x1080.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div
                  class="flex items-start justify-between py-4"
                  href="/post/next-js-the-next-big-thing"
                >
                  <div
                    class="space-y-2 flex flex-col jusify-center cursor-pointer"
                  >
                    <div class="flex items-center space-x-2">
                      <img
                        alt="r"
                        class="h-6 rounded-full"
                        src="https://cdn.sanity.io/images/gyc4tcpa/production/ad62f7a815fd2aebade9b399a124eefd80ce0e67-1000x1000.png"
                      />
                      <span class="text-sm font-normal capitalize">
                        Dan Son</span
                      >
                    </div>
                    <div>
                      <p class="text-[16px] text-md font-semibold w-[225px]">
                        Next.js -The next big thing
                      </p>
                    </div>
                  </div>
                  <div class="h-16 w-16 flex justify-start">
                    <img
                      class="h-full w-full rounded-md cursor-pointer object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                      src="https://cdn.sanity.io/images/gyc4tcpa/production/4d1a6db90cec35063c29e64b4abd3ac3bca39daa-1000x582.jpg"
                      alt="image"
                    />
                  </div>
                </div>
                <div
                  class="flex items-start justify-between py-4"
                  href="/post/why-is-nextjs-so-fast-as-compere-to-reactjs"
                >
                  <div
                    class="space-y-2 flex flex-col jusify-center cursor-pointer"
                  >
                    <div class="flex items-center space-x-2">
                      <img
                        alt="r"
                        class="h-6 rounded-full"
                        src="https://cdn.sanity.io/images/gyc4tcpa/production/ad62f7a815fd2aebade9b399a124eefd80ce0e67-1000x1000.png"
                      />
                      <span class="text-sm font-normal capitalize">
                        Dan Son</span
                      >
                    </div>
                    <div>
                      <p class="text-[16px] text-md font-semibold w-[225px]">
                        Why is Nextjs so fast as compere to Reactjs?
                      </p>
                    </div>
                  </div>
                  <div class="h-16 w-16 flex justify-start">
                    <img
                      class="h-full w-full rounded-md cursor-pointer object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                      src="https://cdn.sanity.io/images/gyc4tcpa/production/649b09050940bec8aba09cbc8c1c455cb093978f-1920x1080.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div
                  class="flex items-start justify-between py-4"
                  href="/post/how-i-code-for-8-hours-without-feeling-tired"
                >
                  <div
                    class="space-y-2 flex flex-col jusify-center cursor-pointer"
                  >
                    <div class="flex items-center space-x-2">
                      <img
                        alt="r"
                        class="h-6 rounded-full"
                        src="https://cdn.sanity.io/images/gyc4tcpa/production/ad62f7a815fd2aebade9b399a124eefd80ce0e67-1000x1000.png"
                      />
                      <span class="text-sm font-normal capitalize">
                        Dan Son</span
                      >
                    </div>
                    <div>
                      <p class="text-[16px] text-md font-semibold w-[225px]">
                        How I code for 8 hours without feeling tired.
                      </p>
                    </div>
                  </div>
                  <div class="h-16 w-16 flex justify-start">
                    <img
                      class="h-full w-full rounded-md cursor-pointer object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                      src="https://cdn.sanity.io/images/gyc4tcpa/production/91349ded9a5e22ae646e70be5235c1664f10131a-950x553.jpg"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
              <div class="text-xs mt-0 bottom-0">
                <span
                  class="cursor-pointer text-gray-500 hover:text-gray-900 duration-100 pr-4"
                  >© 2022 Dan's Blog. Design with ❤️</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <div
        class="fixed inset-0 backdrop-blur-0 pointer-events-none duration-500 bg-opacity-0 ease-in-out transition-all overflow-y-hidden"
      ></div>
      <div
        class="scale-0 ease-in-out duration-500 h-[600px] w-[500px] rounded-lg fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white shadow-xl"
      ></div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Medium",
  data() {
    return {};
  },
});
</script>

<style></style>
