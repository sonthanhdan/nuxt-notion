(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{314:function(t,e,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("17fc0942",content,!0,{sourceMap:!1})},323:function(t,e,n){"use strict";n(314)},324:function(t,e,n){var r=n(72)((function(i){return i[1]}));r.push([t.i,"html[data-v-53eaa6c1]{scroll-behavior:smooth}.article[data-v-53eaa6c1]{max-width:768px!important;position:relative}.share[data-v-53eaa6c1]{position:fixed;top:10rem;right:10rem}.table-of-content[data-v-53eaa6c1]{position:fixed;top:0;right:-10%;background-color:#000;color:#fff;z-index:2;padding:10px 20px;width:300px}pre[data-v-53eaa6c1]{border-radius:8px}table[data-v-53eaa6c1]{width:100%!important;max-width:100%;margin-bottom:1rem;background-color:transparent}thead[data-v-53eaa6c1]{display:table-header-group}tbody[data-v-53eaa6c1],thead[data-v-53eaa6c1]{vertical-align:middle;border-color:inherit}tbody[data-v-53eaa6c1]{display:table-row-group}tbody tr[data-v-53eaa6c1]:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.nuxt-content h2[data-v-53eaa6c1]{font-weight:700;font-size:28px}.nuxt-content h3[data-v-53eaa6c1]{font-weight:700;font-size:22px}.nuxt-content p[data-v-53eaa6c1]{margin-bottom:20px}.nuxt-content h1[data-v-53eaa6c1]{font-size:2.25rem;font-weight:600}",""]),r.locals={},t.exports=r},346:function(t,e,n){"use strict";n.r(e);var r=n(20),o=n(10),c=(n(44),n(1).a.extend({name:"Post",data:function(){return{scrollPosition:null,social:!1}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,article,c,l,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n(o.slug).fetch();case 3:return article=e.sent,e.next=6,n().only(["title","slug"]).sortBy("createdAt","asc").surround(o.slug).fetch();case 6:return c=e.sent,l=Object(r.a)(c,2),d=l[0],v=l[1],e.abrupt("return",{article:article,prev:d,next:v});case 11:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})},updateScroll:function(){this.scrollPosition=window.scrollY,this.scrollPosition>340?this.social=!0:this.social=!1}},mounted:function(){window.addEventListener("scroll",this.updateScroll)}})),l=(n(323),n(26)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("h1",{staticClass:"text-4xl text-black font-semibold py-10 px-5 text-center"},[t._v("\n    "+t._s(t.article.title)+"\n  ")]),t._v(" "),e("div",{staticClass:"flex flex-row items-center justify-center pb-10"},[e("img",{staticClass:"rounded-full h-10 w-10 shadow",attrs:{src:"https://api.adorable.io/avatars/66/abott@adorable.png",alt:"avatar"}}),t._v(" "),e("span",{staticClass:"text-base ml-4 text-gray-700"},[t._v(t._s(t.article.author))]),t._v(" "),e("span",{staticClass:"text-base ml-4 text-gray-700"},[t._v("|")]),t._v(" "),e("p",{staticClass:"ml-4"},[t._v(t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),e("br")]),t._v(" "),e("article",{staticClass:"article mx-auto tracking-wide leading-loose text-xl px-5 md:px-0 mb-10"},[t.article.table_of_contents?e("div",{staticClass:"my-5"},[t._m(0),t._v(" "),e("nav",{staticClass:"p-5 bg-gray-200 rounded"},[e("div",[e("ul",t._l(t.article.toc,(function(link,i){return e("li",{key:link.id},[e("NuxtLink",{class:{"py-2":2===link.depth,"ml-2 pb-2":3===link.depth},attrs:{to:"#".concat(link.id)}},[t._v(t._s(i+1)+". "+t._s(link.text))])],1)})),0)])])]):t._e(),t._v(" "),e("nuxt-content",{attrs:{document:t.article}}),t._v(" "),e("prev-next",{attrs:{prev:t.prev,next:t.next}})],1)])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"t-heading w-100 bg-black rounded text-white text-center"},[e("h3",[t._v("Table of contents")])])}],!1,null,"53eaa6c1",null);e.default=component.exports}}]);