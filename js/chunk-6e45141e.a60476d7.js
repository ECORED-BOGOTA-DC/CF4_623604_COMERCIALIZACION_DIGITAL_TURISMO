(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e45141e"],{"4e96":function(e,t,s){},5270:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e._self._c;return t("header",{staticClass:"header container-fluid"},[t("div",{staticClass:"row align-items-center justify-content-between"},[t("div",{staticClass:"col col-sm-auto d-flex align-items-center justify-content-between justify-content-sm-start"},["inicio"!=e.$route.name?t("div",{staticClass:"header__menu me-4 me-sm-5",on:{click:e.toggleMenu}},[t("div",{staticClass:"header__menu__btn",class:{"header__menu__btn--open":e.menuOpen}},[t("div",{staticClass:"line-2"}),t("div",{staticClass:"line-1"}),t("div",{staticClass:"line-3"})]),t("span",[e._v("MENÚ")])]):e._e(),t("img",{staticClass:"header__logo me-4 me-sm-5",attrs:{src:s("a00a")}}),e.isInicio?t("div",{staticClass:"d-none d-md-flex align-items-center"},[t("a",{staticClass:"me-5",attrs:{href:"#contenidos"}},[e._v("Contenidos")])]):t("div",{staticClass:"header__componente-formativo"},[t("span",{domProps:{innerHTML:e._s(e.globalData.componenteFormativo)}})])]),e.isInicio?t("div",{staticClass:"col-auto"},[t("router-link",{staticClass:"boton",attrs:{to:{name:e.iniciarLnk.nombreRuta}}},[t("span",{staticClass:"me-1"},[e._v("Ver contenido")]),t("i",{staticClass:"fas fa-angle-right"})])],1):e._e()])])},i=[],a=s("ecc5"),o={name:"Header",mixins:[a["a"]],computed:{globalData(){return this.$config&&this.$config.global},isInicio(){return"inicio"===this.$route.name},menuOpen(){return this.$store.getters.isMenuOpen}},methods:{toggleMenu(){this.$store.dispatch("toggleMenu",!this.menuOpen)}}},c=o,l=(s("91f1"),s("2877")),r=Object(l["a"])(c,n,i,!1,null,"7e5a4120",null);t["default"]=r.exports},"91f1":function(e,t,s){"use strict";s("4e96")}}]);
//# sourceMappingURL=chunk-6e45141e.a60476d7.js.map