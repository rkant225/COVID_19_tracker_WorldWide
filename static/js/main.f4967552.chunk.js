(this.webpackJsonpcovid_tracker_world_wide=this.webpackJsonpcovid_tracker_world_wide||[]).push([[0],{123:function(e,t,a){e.exports=a.p+"static/media/logo.a691af5e.jpg"},124:function(e,t,a){e.exports={container:"Chart_container__1c7aQ"}},136:function(e,t,a){e.exports=a(258)},161:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=161},258:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(120),o=a.n(c),u=a(25),s=a.n(u),l=a(39),i=a(121),d=a(122),m=a(132),f=a(131),p=a(89),v=a.n(p),h=a(123),b=a.n(h),E=a(53),y=a(124),g=a.n(y),_=a(78),w=a.n(_),C="https://covid19.mathdro.id/api",x=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,c,o,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=C,t&&(a=C+"/countries/"+t),e.prev=2,e.next=5,w.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,l=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:l});case 10:e.prev=10,e.t0=e.catch(2),console.error("Some thing went wrong ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(C+"/daily");case 3:return t=e.sent,a=t.data.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.error("Some thing went wrong ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(C+"/countries");case 3:return t=e.sent,e.abrupt("return",t.data.countries);case 7:e.prev=7,e.t0=e.catch(0),console.error("Some thing went wrong ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),D=a(90),k=function(e){var t=e.countryWiseData,a=e.countryName,c=Object(n.useState)([]),o=Object(E.a)(c,2),u=o[0],i=o[1],d=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:return t=e.sent,e.abrupt("return",i(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){d()}),[]);var m=u.length>0&&r.a.createElement(D.b,{data:{labels:u.map((function(e){return e.date})),datasets:[{data:u.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:u.map((function(e){return e.deaths})),label:"Death",borderColor:"#ff3333",fill:!0}]}}),f=a&&t&&r.a.createElement(D.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current status in ".concat(a.toUpperCase())}}});return console.log(a),r.a.createElement("div",{className:g.a.container},a?f:m)},N=a(48),S=a.n(N),I=a(280),U=a(286),B=a(281),A=a(282),R=a(79),L=a.n(R),V=a(80),J=a.n(V),W=a(277),G=a(279),M=Object(W.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}})),P=function(){var e=M(),t=r.a.useState(0),a=Object(E.a)(t,2),n=a[0],c=a[1];return r.a.useEffect((function(){var e=setInterval((function(){c((function(e){return e>=100?0:e+1}))}),20);return function(){clearInterval(e)}}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(G.a,{variant:"determinate",value:n}))},T=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:S.a.container},r.a.createElement(I.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(I.a,{item:!0,component:U.a,xs:10,md:3,className:J()(S.a.card,S.a.infected)},r.a.createElement(B.a,null,r.a.createElement(A.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(A.a,{variant:"h5"},r.a.createElement(L.a,{start:0,end:a.value,duration:2,separator:","})),r.a.createElement(A.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(A.a,{variant:"body2",gutterBottom:!0},"Number of active cases of COVID-19"))),r.a.createElement(I.a,{item:!0,component:U.a,xs:10,md:3,className:J()(S.a.card,S.a.recovered)},r.a.createElement(B.a,null,r.a.createElement(A.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(A.a,{variant:"h5"},r.a.createElement(L.a,{start:0,end:n.value,duration:2,separator:","})),r.a.createElement(A.a,{color:"textSecondary"},"Real Date"),r.a.createElement(A.a,{variant:"body2",gutterBottom:!0},"Number of recoveries from COVID-19"))),r.a.createElement(I.a,{item:!0,component:U.a,xs:10,md:3,className:J()(S.a.card,S.a.deaths)},r.a.createElement(B.a,null,r.a.createElement(A.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(A.a,{variant:"h5"},r.a.createElement(L.a,{start:0,end:c.value,duration:2,separator:","})),r.a.createElement(A.a,{color:"textSecondary"},"Real Date"),r.a.createElement(A.a,{variant:"body2",gutterBottom:!0},"Number of deaths caused by COVID-19"))))):r.a.createElement(P,null)},q=a(93),F=a.n(q),H=a(284),Q=a(283),Z=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(E.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(H.a,{className:F.a.formControl},r.a.createElement("label",null,"Select Country"),r.a.createElement(Q.a,{className:F.a.dropDown,onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{key:"Global",value:""},"Global"),o.length>0&&o.map((function(e){return r.a.createElement("option",{key:e.name,value:e.name.toUpperCase()},e.name)}))))},z=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},selectedCountry:""},e.handleCountryChange=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(a);case 2:n=t.sent,e.setState({data:n,selectedCountry:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.selectedCountry;return r.a.createElement("div",{className:v.a.container},r.a.createElement("img",{src:b.a,alt:"COVID-19 Logo",className:v.a.logo}),r.a.createElement(T,{data:t}),r.a.createElement(Z,{handleCountryChange:this.handleCountryChange}),r.a.createElement(k,{countryWiseData:t,countryName:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(z,null),document.getElementById("root"))},48:function(e,t,a){e.exports={container:"Cards_container__3qdgp",card:"Cards_card__2R4L9",infected:"Cards_infected__2Wiiy",recovered:"Cards_recovered__3ttJ9",deaths:"Cards_deaths__1TAue"}},89:function(e,t,a){e.exports={container:"App_container__Z1-Ow",logo:"App_logo__1iUHi"}},93:function(e,t,a){e.exports={dropDown:"CountryPicker_dropDown__3f0Ap"}}},[[136,1,2]]]);
//# sourceMappingURL=main.f4967552.chunk.js.map