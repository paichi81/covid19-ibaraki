(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{279:function(t,e,n){var content=n(282);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("790a7675",content,!0,{sourceMap:!1})},280:function(t,e,n){var content=n(285);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("e882ae98",content,!0,{sourceMap:!1})},281:function(t,e,n){"use strict";var r=n(279);n.n(r).a},282:function(t,e,n){(e=n(17)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},283:function(t,e,n){"use strict";var r=n(1).a.extend({props:{icon:{type:String}}}),o=(n(281),n(9)),l=n(40),c=n.n(l),d=n(271),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports;c()(component,{VIcon:d.a})},284:function(t,e,n){"use strict";var r=n(280);n.n(r).a},285:function(t,e,n){(e=n(17)(!1)).push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:20px;margin-bottom:20px;overflow-wrap:break-word}.StaticCard>*:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold}.StaticCard h4{font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold}.StaticCard h5{font-size:16px;font-size:1rem;color:#4d4d4d;font-weight:bold}.StaticCard p{margin-bottom:0}.StaticCard sup{vertical-align:top}.StaticCard ul,.StaticCard ol{padding-left:24px}.StaticCard ul dt:not(:first-child),.StaticCard ol dt:not(:first-child){margin-top:.6em}.StaticCard ul dd,.StaticCard ol dd{margin-top:.6em;margin-left:2em}@media screen and (max-width: 768px){.StaticCard ul dd,.StaticCard ol dd{margin-left:4.1666666667vw}}.StaticCard ul dd>*:not(:first-child),.StaticCard ol dd>*:not(:first-child){margin-top:.6em}.StaticCard ul img,.StaticCard ol img{max-width:100%}.StaticCard ul figcaption,.StaticCard ol figcaption{margin-top:.6em;color:#4d4d4d}.StaticCard ul strong,.StaticCard ul em,.StaticCard ol strong,.StaticCard ol em{border-bottom:2px solid #003fab}.StaticCard ul em,.StaticCard ol em{font-style:normal}.StaticCard ul a,.StaticCard ol a{font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none;font-size:inherit}.StaticCard ul a:hover,.StaticCard ol a:hover{text-decoration:underline}.StaticCard ul a .ExternalLinkIcon,.StaticCard ol a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}",""]),t.exports=e},286:function(t,e,n){"use strict";var r=n(1).a.extend(),o=(n(284),n(9)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"StaticCard"},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},287:function(t,e,n){var content=n(293);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("97e7ab7c",content,!0,{sourceMap:!1})},292:function(t,e,n){"use strict";var r=n(287);n.n(r).a},293:function(t,e,n){(e=n(17)(!1)).push([t.i,".ExternalLink{text-decoration:none}.ExternalLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=e},296:function(t,e,n){"use strict";n(104);var r=n(1).a.extend({props:{url:{type:String,default:""},iconSize:{type:Number,default:15}}}),o=(n(292),n(9)),l=n(40),c=n.n(l),d=n(271),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"ExternalLink",attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._t("default"),this._v(" "),e("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:this.iconSize,"aria-label":this.$t("別タブで開く"),role:"img","aria-hidden":!1}},[this._v("\n    mdi-open-in-new\n  ")])],2)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VIcon:d.a})},496:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(286),l=n(283),c=n(296),d=r.a.extend({components:{PageHeader:l.a,StaticCard:o.a,ExternalLink:c.a},head:function(){return{title:this.$t("企業の皆様・はたらく皆様へ")}}}),f=n(9),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Worker"},[n("page-header",{staticClass:"mb-3"},[t._v(t._s(t.$t("企業の皆様・はたらく皆様へ")))]),t._v(" "),n("StaticCard",[n("p",[t._v("\n      "+t._s(t.$t("県内に所在する事業所・事務所につきましては、社会機能を維持するために必要な職種を除き、原則としてテレワーク等の活用を実施していただきますようお願い申し上げます。"))+"\n    ")]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("また、テレワーク等の活用が困難な場合におきましても、時差出勤、テレビ会議等の積極的活用につきまして、特段のご配慮をお願い申し上げます。"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",[n("external-link",{attrs:{url:"https://www.pref.ibaraki.jp/shokorodo/chusho/shogyo/2020korona.html","icon-size":24}},[t._v("\n        "+t._s(t.$t("休業要請・協力金（相談窓口・ＦＡＱ等）について "))+"\n      ")])],1),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("{date} 発表",{date:"2020.04.21"}))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",[n("external-link",{attrs:{url:"https://www.pref.ibaraki.jp/1saigai/2019-ncov/documents/200325kigyo.pdf","icon-size":24}},[t._v("\n        "+t._s(t.$t("企業活動における新型コロナウイルス感染症に係る配慮について（依頼）"))+"\n      ")])],1),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("{date} 発表",{date:"2020.03.25"}))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",[n("external-link",{attrs:{url:"https://www.pref.ibaraki.jp/1saigai/2019-ncov/documents/0408kigyo.pdf","icon-size":24}},[t._v("\n        "+t._s(t.$t("新型コロナウイルス感染症の感染拡大に伴うお願いについて"))+"\n      ")])],1),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("{date} 発表",{date:"2020.04.08"}))+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);