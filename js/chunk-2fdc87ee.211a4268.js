(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fdc87ee"],{b6b4:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"zoom"},[t("div",{ref:"img",staticClass:"zoom__img",attrs:{id:"zoom-"+e.mainId},on:{mouseover:function(t){e.enter=!0},mouseleave:function(t){e.enter=!1},mousemove:function(t){return t.preventDefault(),e.move.apply(null,arguments)},touchstart:function(t){e.enter=!0},touchend:function(t){e.enter=!1},touchmove:function(t){return t.preventDefault(),e.move.apply(null,arguments)},click:e.onClick}},[t("img",{attrs:{src:e.bajaResolucion}})]),t("div",{ref:"zoom",staticClass:"zoom__lens",class:{show:e.enter},style:[e.lensObj,e.extraLensObj]},[t("img",{ref:"zoomImg",style:e.zoomObj,attrs:{src:e.altaResolucion}})]),e._t("default")],2)},i=[],n=o("c73e"),l={name:"Zoom",mixins:[n["a"]],props:{lente:{type:String,default:"150"},bajaResolucion:{type:String,default:""},altaResolucion:{type:String,default:""}},data(){return{zoomLevel:1,enter:!1,isClicked:!1,lensObj:{top:0,left:0},zoomObj:{top:0,left:0}}},computed:{extraLensObj(){return{width:this.lente+"px",height:this.lente+"px",transform:`scale(${this.enter?this.zoomLevel:0})`}}},watch:{enter(e){e||(this.zoomLevel=1)}},methods:{onClick(){this.isClicked||(this.isClicked=!0,document.addEventListener("click",this.clicks))},clicks(e){e.path.find(e=>e.id=="zoom-"+this.mainId)?this.$refs.img.addEventListener("wheel",this.zoom):this.isClicked&&(document.removeEventListener("click",this.clicks),this.$refs.img.removeEventListener("wheel",this.zoom),this.isClicked=!1)},move(e){const t=this.$refs.zoom,o=this.$refs.zoomImg;let s,i,n,l,c;if(e.touches){const t=e.target.getBoundingClientRect();s=e.touches[0].clientX-t.x,i=e.touches[0].clientY-t.y,n=1.1}else s=e.offsetX,i=e.offsetY,n=2;this.lensObj.top=i-t.offsetHeight/n+"px",this.lensObj.left=s-t.offsetWidth/n+"px",l=(s-e.srcElement.offsetLeft)/e.srcElement.offsetWidth,c=(i-e.srcElement.offsetTop)/e.srcElement.offsetHeight;let r=-l*o.offsetWidth+t.offsetWidth/2,a=-c*o.offsetHeight+t.offsetHeight/2;this.zoomObj.left=r+"px",this.zoomObj.top=a+"px"},zoom(e){e.preventDefault(),e.deltaY>0?this.zoomLevel++:this.zoomLevel--,this.zoomLevel<1&&(this.zoomLevel=1),this.zoomLevel>5&&(this.zoomLevel=5)}}},c=l,r=o("2877"),a=Object(r["a"])(c,s,i,!1,null,null,null);t["default"]=a.exports},c73e:function(e,t,o){"use strict";t["a"]={props:{datos:{type:Array,default:()=>[]}},data:()=>({mainId:Math.floor(Math.random()*10**10),selected:"0"}),methods:{getId(e){return e<0?null:"sl-"+this.mainId+e+1}}}}}]);
//# sourceMappingURL=chunk-2fdc87ee.211a4268.js.map