(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{475:function(t,e,r){"use strict";r.r(e);var o=r(109),c=r(348),n=r(356),d=r(350),h=r(349),m=r(351),f=r(355),l=r(354),$=r(353),y=r(352),C={components:{ConfirmedCasesDetailsCard:c.a,ConfirmedCasesNumberCard:n.a,ConfirmedCasesAttributesCard:d.a,IbarakiCityCard:h.a,IbarakiCityMapCard:m.a,InspectionPersonsNumberCard:f.a,TelephoneAdvisoryReportsNumberCard:l.a,DischargesCard:$.a,DeathsCard:y.a},data:function(){var title,t;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),t=o.inspections_summary.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),t=o.patients.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),t=o.patients.date;break;case"number-of-inspection-persons":title=this.$t("検査実施人数"),t=o.inspection_persons.date;break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナコールセンター相談件数"),t=o.contacts.date;break;case"ibaraki-city-table":title=this.$t("市町村毎の感染状況"),t=o.patients.date;break;case"number-of-discharges":title=this.$t("退院数"),t=o.discharges_summary.date;break;case"number-of-deaths":title=this.$t("死亡数"),t=o.deaths_summary.date}var data={title:title,updatedAt:t};return data},head:function(){var t="https://ibaraki.stopcovid19.jp",e=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),o="".concat(this.updatedAt," | ").concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものを、茨城県向けに改変したものです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("茨城県")+"("+this.$t("非公式")+") "+this.$t("新型コロナウイルス感染症対策サイト")},{hid:"description",name:"description",content:o},{hid:"og:description",property:"og:description",content:o},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},k=r(5),component=Object(k.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-attributes-card"):"number-of-inspection-persons"==this.$route.params.card?e("inspection-persons-number-card"):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?e("telephone-advisory-reports-number-card"):"ibaraki-city-table"==this.$route.params.card?e("ibaraki-city-card"):"ibaraki-city-map-table"==this.$route.params.card?e("ibaraki-city-map-card"):"number-of-discharges"==this.$route.params.card?e("discharges-card"):"number-of-deaths"==this.$route.params.card?e("deaths-card"):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);