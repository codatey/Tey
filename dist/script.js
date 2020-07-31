/**
 * Tey 0.5.0
 * Copyright (c) 2020 Codatey
 * This work is licensed under the terms of the MIT license.
 */
const Tey={fn:{onload:function(e){addEventListener("load",e,!1)},webp:function(){var e=new Image;function t(t){var n=!(!t||"load"!==t.type)&&1===e.width;Tey.vars.webp=n}e.onerror=t,e.onload=t,e.src="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA="}},lib:{},vars:{webp:!1}};Tey.lib.listen=function(values){Tey.fn.onload(function(){var arr=[];Object.keys(values).forEach(function(key,index){arr[key]=setInterval(function(){"undefined"!=eval("typeof "+values[key])&&(clearInterval(arr[key]),Tey.vars[key]=!0)},250),setTimeout(function(){clearInterval(arr[key])},5e3)})})},Tey.lib.getPosts=function(e,t){var n=$.extend({alt:"json"},e);$.getJSON("/feeds/posts/default",n,function(e){t(e)})},Tey.lib.getScript=function(e,t){if(t=t||function(){},"undefined"==typeof jQuery){var n=document.createElement("script");n.onload=t,n.src=e,document.head.appendChild(n)}else $.ajax({url:e,dataType:"script",success:t,cache:!0})},Tey.lib.shuffle=function(e){for(var t,n=e.length,a=0;n--;)a=Math.floor(Math.random()*(n+1)),t=e[n],e[n]=e[a],e[a]=t;return e},Tey.lib.formatDate=function(e,t){var n=new Date(e),a=n.getUTCMonth()+1,r=n.getUTCDate(),i=n.getUTCFullYear();return t.replace("dd",r).replace("mm",a).replace(/y{4}/,i)},Tey.lib.parseEntries=function(e,t,n){if(e){t="undefined"!=typeof t?t.split(" "):"","undefined"==typeof n&&(n={});var a=$.extend(!0,{},{t:{s:"w500",n:!0},s:{l:200}},n);return e.map(function(e){var n={title:e.title.$t,url:e.link.filter(function(e){return"alternate"==e.rel})[0].href};if(t.indexOf("thumbnail")>-1){var r="";e.media$thumbnail&&e.media$thumbnail.url.indexOf("https://img.youtube.com")<0?r=e.media$thumbnail.url.replace(/\/s72-c\/|\/d\//,"/"+a.t.s+"/"):e.content&&null!=e.content.$t.match(/src="(.+?[\.jpg|\.gif|\.png])"/)?r=e.content.$t.match(/src="(.+?[\.jpg|\.gif|\.png])"/)[1].replace(/\/s72-c\/|\/d\//,"/"+a.t.s+"/"):e.media$thumbnail?r=e.media$thumbnail.url.replace("default","hqdefault"):a.t.n&&(r="https://1.bp.blogspot.com/-dk6YGoJRPek/XxCR65PKfrI/AAAAAAAAJOc/zusDsnp2h2kujOHalocp14UZ_8CN4V-SwCK4BGAYYCw/"+a.t.s+"/placeholder.jpg"),n.thumbnail=r}return t.indexOf("published")>-1&&(n.published=e.published.$t),t.indexOf("author")>-1&&(e.author[0].uri?n.author={name:e.author[0].name.$t,url:e.author[0].uri.$t}:n.author={name:"مجهول",url:"javascript:;"}),t.indexOf("categories")>-1&&(e.category?n.categories=e.category.map(function(e){return e.term}):n.categories=[]),t.indexOf("snippet")>-1&&(e.summary?n.snippet=e.summary.$t.substr(0,a.s.l).replace(/(\r\n|\n|\r)/gm,""):e.content?n.snippet=e.content.$t.replace(/(<([^>]+)>)/gi,"").substr(0,a.s.l).replace(/(\r\n|\n|\r)/gm,""):n.snippet=""),n})}},Tey.lib.scroll=function(e,t){var n;window.addEventListener("scroll",function(){n&&window.clearTimeout(n),n=window.setTimeout(function(){"function"==typeof e&&e()},t||0)})};