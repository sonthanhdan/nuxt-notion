(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{317:function(t,e,r){var content=r(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("c02c03b0",content,!0,{sourceMap:!1})},326:function(t,e,r){"use strict";r(317)},327:function(t,e,r){var n=r(53)((function(i){return i[1]}));n.push([t.i,"html[data-v-03fa06e8]{scroll-behavior:smooth}.article[data-v-03fa06e8]{max-width:768px!important;position:relative}.share[data-v-03fa06e8]{position:fixed;top:10rem;right:10rem}.table-of-content[data-v-03fa06e8]{position:fixed;top:0;right:-10%;background-color:#000;color:#fff;z-index:2;padding:10px 20px;width:300px}pre[data-v-03fa06e8]{border-radius:8px}table[data-v-03fa06e8]{width:100%!important;max-width:100%;margin-bottom:1rem;background-color:transparent}thead[data-v-03fa06e8]{display:table-header-group}tbody[data-v-03fa06e8],thead[data-v-03fa06e8]{vertical-align:middle;border-color:inherit}tbody[data-v-03fa06e8]{display:table-row-group}tbody tr[data-v-03fa06e8]:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.nuxt-content h2[data-v-03fa06e8]{font-weight:700;font-size:28px}.nuxt-content h3[data-v-03fa06e8]{font-weight:700;font-size:22px}.nuxt-content p[data-v-03fa06e8]{margin-bottom:20px}.nuxt-content h1[data-v-03fa06e8]{font-size:2.25rem;font-weight:600}.blog-container .blog-footer[data-v-03fa06e8]{display:flex;justify-content:space-between;color:#74808b;margin-top:3rem}.icon[data-v-03fa06e8]{display:inline-block;font-size:0;margin:0 auto;background-size:cover;background-repeat:no-repeat;background-position:50% 50%;fill:transparent;stroke:#192734}.icon[data-v-03fa06e8],.icon-md[data-v-03fa06e8]{width:20px;height:20px}.avatar-large[data-v-03fa06e8]{width:64px;height:64px}.avatar[data-v-03fa06e8]{display:inline-block;vertical-align:middle}.avatar .standard-image[data-v-03fa06e8]{border-radius:50%;border:none}.avatar-large .standard-image[data-v-03fa06e8]{font-size:20px}.avatar img[data-v-03fa06e8]{max-width:100%;max-height:100%;border-radius:50%}.standard-image[data-v-03fa06e8]{display:flex;justify-content:center;align-items:center;background-color:#f4f5f6;color:#a1b1b9;border:1px solid #f4f5f6;font-weight:400}.avatar-frame[data-v-03fa06e8],.standard-image[data-v-03fa06e8]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.avatar-frame[data-v-03fa06e8]{display:inline-block;background-size:cover;background-repeat:no-repeat;background-position:50%;border-radius:50%}",""]),n.locals={},t.exports=n},349:function(t,e,r){"use strict";r.r(e);var n=r(20),o=r(10),l=(r(44),r(0).a.extend({name:"Post",data:function(){return{scrollPosition:null,social:!1}},head:function(){return{}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,article,l,d,c,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,e.next=3,r(o.slug).fetch();case 3:return article=e.sent,console.log("🚀 ~ file: _slug.vue:75 ~ asyncData ~ article",article),e.next=7,r().only(["title","slug"]).sortBy("createdAt","asc").surround(o.slug).fetch();case 7:return l=e.sent,d=Object(n.a)(l,2),c=d[0],v=d[1],e.abrupt("return",{article:article,prev:c,next:v});case 12:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})},updateScroll:function(){this.scrollPosition=window.scrollY,this.scrollPosition>340?this.social=!0:this.social=!1}},mounted:function(){window.addEventListener("scroll",this.updateScroll)}})),d=(r(326),r(26)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"mt-20"},[t._m(0),t._v(" "),e("h1",{staticClass:"text-4xl text-black font-semibold py-6 article mx-auto text-center"},[t._v("\n    "+t._s(t.article.title)+"\n  ")]),t._v(" "),e("div",{staticClass:"flex flex-row items-center justify-start pb-10 pt-5 text-base article mx-auto"},[e("img",{staticClass:"rounded-full h-10 w-10 shadow",attrs:{src:"https://icotar.com/initials/Dan%20Son.svg?bg=2d00ff",alt:"avatar"}}),t._v(" "),e("span",{staticClass:"font-semibold ml-4 text-gray-700"},[t._v(t._s(t.article.author))]),t._v(" "),e("span",{staticClass:"text-base text-muted ml-2 mr-2"},[t._v("|")]),t._v(" "),e("div",{staticClass:"text-muted"},[e("time",{attrs:{datetime:"2022-12-20"}},[t._v(t._s(t.formatDate(t.article.updatedAt)))]),t._v(" ·\n      "),e("span",{staticClass:"italic"},[t._v("7 min read")])])]),t._v(" "),e("article",{staticClass:"article mx-auto tracking-wide leading-loose text-xl px-5 md:px-0 mb-10"},[t.article.table_of_contents?e("div",{staticClass:"my-5"},[t._m(1),t._v(" "),e("nav",{staticClass:"p-5 bg-gray-200 rounded"},[e("div",[e("ul",t._l(t.article.toc,(function(link,i){return e("li",{key:link.id},[e("NuxtLink",{class:{"py-2":2===link.depth,"ml-2 pb-2":3===link.depth},attrs:{to:"#".concat(link.id)}},[t._v(t._s(i+1)+". "+t._s(link.text))])],1)})),0)])])]):t._e(),t._v(" "),e("nuxt-content",{attrs:{document:t.article}}),t._v(" "),e("symbol",{attrs:{viewBox:"0 0 16 16",id:"icon-heart"}},[e("path",{attrs:{d:"M7.606 3.799L8 4.302l.394-.503.106-.14c.048-.065.08-.108.129-.159a3.284 3.284 0 0 1 4.72 0c.424.434.655 1.245.65 2.278-.006 1.578-.685 2.931-1.728 4.159-1.05 1.234-2.439 2.308-3.814 3.328a.763.763 0 0 1-.914 0c-1.375-1.02-2.764-2.094-3.814-3.328C2.686 8.709 2.007 7.357 2 5.778c-.004-1.033.227-1.844.651-2.278a3.284 3.284 0 0 1 4.72 0c.05.05.081.094.129.158.028.038.061.083.106.14z",stroke:"#192734"}})]),t._v(" "),e("symbol",{attrs:{viewBox:"0 0 16 16",id:"icon-heart-active"}},[e("path",{attrs:{d:"M13.706 3.15a3.784 3.784 0 0 0-5.434 0c-.104.106-.183.227-.272.34-.089-.113-.168-.234-.272-.34a3.784 3.784 0 0 0-5.434 0c-.563.576-.799 1.553-.794 2.63.015 3.468 3 5.85 5.745 7.886.45.334 1.06.334 1.51 0 2.746-2.035 5.73-4.418 5.745-7.886.005-1.077-.231-2.054-.794-2.63z",fill:"#E24C4C",stroke:"none"}})]),t._v(" "),e("symbol",{attrs:{viewBox:"0 0 20 20",id:"icon-small-message"}},[e("path",{attrs:{d:"M6.00007 3.00001H12.0001L15.5001 3C16.6046 3 17.5001 3.89543 17.5001 5V9.78889V12.2556C17.5001 13.3601 16.6046 14.2556 15.5001 14.2556H14.5001C14.2239 14.2556 14.0001 14.4794 14.0001 14.7556V16.4507C14.0001 16.8715 13.5119 17.1041 13.1851 16.839L10.2754 14.4789C10.0973 14.3344 9.87489 14.2556 9.6455 14.2556H4.50003C3.39545 14.2556 2.50001 13.3601 2.50003 12.2555L2.50007 9.78889V5.00001C2.50007 3.89544 3.3955 3.00001 4.50007 3.00001L6.00007 3.00001Z",stroke:"#192734","stroke-miterlimit":"10","stroke-linecap":"square"}}),t._v(" "),e("path",{attrs:{d:"M6 6.5H13",stroke:"#192734","stroke-miterlimit":"10","stroke-linecap":"round"}}),t._v(" "),e("path",{attrs:{d:"M6 9H10",stroke:"#192734","stroke-miterlimit":"10","stroke-linecap":"round"}})]),t._v(" "),e("div",{staticClass:"flex justify-between align-middle items-center text-muted mt-10"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"feedback-item likes mr-3",attrs:{id:"likes"}},[e("span",{staticClass:"like-icon"},[e("svg",{staticClass:"icon icon-md"},[e("use",{attrs:{href:"#icon-heart"}})])]),t._v(" "),e("span",{staticClass:"text-muted text-[16px]"},[t._v("6")])]),t._v(" "),e("div",{staticClass:"feedback-item comments"},[e("span",{staticClass:"comment-icon"},[e("svg",{staticClass:"icon icon-md"},[e("use",{attrs:{href:"#icon-small-message"}})])]),t._v(" "),e("span",{staticClass:"text-muted text-[16px]"},[t._v("4")])])]),t._v(" "),t._m(2)]),t._v(" "),e("hr",{staticClass:"mt-1 mb-5"}),t._v(" "),e("span",{staticClass:"bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"},[t._v("Default")]),t._v(" "),e("span",{staticClass:"bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"},[t._v("Dark")]),t._v(" "),e("span",{staticClass:"bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900"},[t._v("Red")]),t._v(" "),e("span",{staticClass:"bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"},[t._v("Green")]),t._v(" "),e("span",{staticClass:"bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900"},[t._v("Yellow")]),t._v(" "),e("span",{staticClass:"bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900"},[t._v("Indigo")]),t._v(" "),e("span",{staticClass:"bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900"},[t._v("Purple")]),t._v(" "),e("span",{staticClass:"bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900"},[t._v("Pink")])],1),t._v(" "),e("prev-next",{attrs:{prev:t.prev,next:t.next}}),t._v(" "),t._m(3)],1)}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("nav",{staticClass:"text-base article mx-auto"},[e("ol",{staticClass:"list-reset flex"},[e("li",[e("a",{staticClass:"text-blue-600 hover:text-blue-700",attrs:{href:"#"}},[t._v("Home")])]),t._v(" "),e("li",[e("span",{staticClass:"text-gray-500 mx-2"},[t._v("/")])]),t._v(" "),e("li",[e("a",{staticClass:"text-blue-600 hover:text-blue-700",attrs:{href:"#"}},[t._v("Library")])]),t._v(" "),e("li",[e("span",{staticClass:"text-gray-500 mx-2"},[t._v("/")])]),t._v(" "),e("li",{staticClass:"text-gray-500"},[t._v("Data")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"t-heading w-100 bg-black rounded text-white text-center"},[e("h3",[t._v("Table of contents")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-base text-muted"},[t._v("\n        Published on "),e("time",{attrs:{datetime:"2022-12-20"}},[t._v("December 20, 2022")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"flex items-start mx-auto article mb-5"},[e("span",{staticClass:"avatar avatar-large",attrs:{title:"Umair Sayed"}},[e("img",{staticClass:"avatar-frame standard-image",attrs:{src:"https://icotar.com/initials/Dan%20Son.svg?bg=2d00ff",title:"Umair Sayed"}})]),t._v(" "),e("div",{staticClass:"flex-1 ml-3"},[e("h5",{staticClass:"mt-0"},[e("a",{staticClass:"text-dark",attrs:{href:"/"}},[t._v("Dan Son")])]),t._v(" "),e("p",{staticClass:"text-muted leading-7"},[t._v("Fullstack developer")])])])}],!1,null,"03fa06e8",null);e.default=component.exports}}]);