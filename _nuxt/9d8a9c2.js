(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{566:function(e,r,t){var content=t(585);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(20).default)("6405481e",content,!0,{sourceMap:!1})},584:function(e,r,t){"use strict";t(566)},585:function(e,r,t){var n=t(19)((function(i){return i[1]}));n.push([e.i,".video-frame{background:var(--v-secondary-darken1)!important;width:100%}",""]),n.locals={},e.exports=n},591:function(e,r,t){"use strict";t.r(r);var n=t(543),o=t(542),c=t(148),l={data:function(){return{iFrameHeight:"300px"}},methods:{manageResize:function(e){this.iFrameHeight=this.$refs.videoFrame.offsetWidth*(9/16)},handleIFrameEvent:function(e){}},props:["src"]},f=(t(584),t(63)),component=Object(f.a)(l,(function(){var e=this,r=e._self._c;return r(o.a,[r(n.a,{directives:[{def:c.a,name:"resize",rawName:"v-resize",value:e.manageResize,expression:"manageResize"}]},[r("iframe",{ref:"videoFrame",staticClass:"video-frame",attrs:{height:e.iFrameHeight,src:e.src,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},on:{play:function(r){return e.handleIFrameEvent(r)}}})])],1)}),[],!1,null,null,null);r.default=component.exports}}]);