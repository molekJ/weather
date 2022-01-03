(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{44:function(e,n,t){"use strict";t.r(n);var i,a,c,r,s,d,o,l,u,j,p,b,h,x=t(0),m=t.n(x),O=t(9),f=t.n(O),g=t(8),v=t(4),w=t(5),y=[{name:"Bia\u0142a Podlaska",coordinates:{latitude:"52.0323800",longitude:"23.1165200"}},{name:"Bydgoszcz",coordinates:{latitude:"53.1235000",longitude:"18.0076200"}},{name:"Toru\u0144",coordinates:{latitude:"53.0137500",longitude:"18.5981400"}},{name:"Warszawa",coordinates:{latitude:"52.2319581",longitude:"21.0067249"}},{name:"Zielona G\xf3ra",coordinates:{latitude:"51.9354800",longitude:"15.5064300"}},{name:"Szczecin",coordinates:{latitude:"53.4301818",longitude:"14.5509623"}},{name:"Wroc\u0142aw",coordinates:{latitude:"51.1263106",longitude:"16.9781963"}},{name:"\u0141\xf3d\u017a",coordinates:{latitude:"51.7500000",longitude:"19.4666700"}},{name:"Rzesz\xf3w",coordinates:{latitude:"50.0413200",longitude:"21.9990100"}},{name:"Gda\u0144sk",coordinates:{latitude:"54.3520500",longitude:"18.6463700"}},{name:"Katowice",coordinates:{latitude:"50.2584100",longitude:"19.0275400"}}],z=t(1),k=function(e){var n=e.onCityClick,t=e.selectedCity;return Object(z.jsxs)("div",{children:[Object(z.jsx)("h2",{children:"Miasta:"}),Object(z.jsx)("ul",{children:y.map((function(e){return Object(z.jsxs)("li",{onClick:function(){n(e.coordinates)},children:[" ",e.coordinates===t?Object(z.jsx)("strong",{children:e.name}):e.name]},e.coordinates.latitude)}))})]})},S=Object(w.a)(i||(i=Object(v.a)(["\n    :root{\n           --white: #ffffff;\n    --black: #000000;\n    --lightgrey: #efefef;\n    --grey: #f9f9f9;\n    --grey2: #e9e8e8;\n    --darkgrey: #878787;\n    --darkgrey2: #787878;\n    --darkgrey3: #212121;\n    --orange: #ff801a;\n    --lightorange: #ffc79a;\n    --lightgreen: #adbb0c;\n    --blue: #3fb4fd\n    }\n\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    body {\n    font-family: 'Rubik', sans-serif;\n    min-height: 100vh;\n    }\n\n"]))),C=t(11),Z=t.n(C),D=t(15),F=t(14),I=w.b.div(a||(a=Object(v.a)(["\n  background-color: var(--blue);\n  color: var(--grey2);\n  width: 1000px;\n  margin: auto;\n  display: grid;\n  grid-template-rows: 100px 200px;\n  font-weight: 600;\n  font-size: 18px;\n  border-radius: 5px;\n\n  p {\n    padding-left: 20px;\n  }\n"]))),P=w.b.div(c||(c=Object(v.a)(["\n  display: grid;\n  grid-template-columns: 400px 300px 300px;\n  align-items: center;\n\n  > p {\n    font-size: 40px;\n    align-self: center;\n    padding-bottom: 0;\n  }\n\n  p {\n    align-self: center;\n  }\n"]))),T=w.b.div(r||(r=Object(v.a)(["\n  display: grid;\n  grid-template-columns: 400px 300px 300px;\n"]))),B=w.b.p(s||(s=Object(v.a)(["\n  font-size: 120px;\n  font-weight: 400;\n"]))),M=w.b.div(d||(d=Object(v.a)(["\n  display: grid;\n  grid-template-rows: 100px;\n"]))),W=w.b.div(o||(o=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  p:nth-of-type(2) {\n    padding-top: 10px;\n    font-size: 30px;\n  }\n"]))),E=function(e){var n=function(e){var n=new Date(1e3*e),t=n.getHours(),i="0"+n.getMinutes(),a="0"+n.getSeconds();return"".concat(t,": ").concat(i.substr(-2)," : ").concat(a.substr(-2))},t=n(e.sunrise),i=n(e.sunset);return Object(z.jsxs)(I,{children:[Object(z.jsxs)(P,{children:[Object(z.jsx)("p",{children:e.name}),Object(z.jsxs)(W,{children:[Object(z.jsx)("p",{children:"Wschod"}),Object(z.jsx)("p",{children:t})]}),Object(z.jsxs)(W,{children:[Object(z.jsx)("p",{children:"Zachod"}),Object(z.jsx)("p",{children:i})]})]}),Object(z.jsxs)(T,{children:[Object(z.jsxs)(B,{children:[(Math.round(100*(e.temp-273.15))/100).toFixed(1),"\u2103"]}),Object(z.jsxs)(M,{children:[Object(z.jsxs)(W,{children:[Object(z.jsx)("p",{children:"Wilgotnosc"}),Object(z.jsxs)("p",{children:[" ",e.humidity,"%"]})]}),Object(z.jsxs)(W,{children:[Object(z.jsx)("p",{children:"Predkosc wiatru"}),Object(z.jsxs)("p",{children:[" ",e.windSpeed," m/s"]})]})]}),Object(z.jsxs)(M,{children:[Object(z.jsxs)(W,{children:[Object(z.jsx)("p",{children:"Cisnienie"}),Object(z.jsxs)("p",{children:[e.pressure," hPa"]})]}),Object(z.jsxs)(W,{children:[Object(z.jsx)("p",{children:"Zachmurzneie"}),Object(z.jsxs)("p",{children:[e.clouds," %"]})]})]})]})]})},L=w.b.div(l||(l=Object(v.a)(["\n  display: flex;\n  height: 100px;\n  width: 1000px;\n  margin: auto;\n  align-items: center;\n  position: relative;\n  font-size: 16px;\n\n  button {\n    position: relative;\n    top: 15px;\n    border: none;\n    background: inherit;\n    margin-left: 20px;\n\n    img {\n      height: 40px;\n    }\n\n    :hover {\n      cursor: pointer;\n    }\n  }\n\n  input {\n    border: none;\n    font-size: 16px;\n    appearance: none;\n    background: var(--grey);\n    padding: 12px;\n    border-radius: 3px;\n    width: 250px;\n    outline: none;\n  }\n  input:focus::placeholder {\n    color: transparent;\n  }\n  input::placeholder {\n    color: #aaa;\n    transition: color 0.3s ease;\n  }\n"]))),A=t.p+"static/media/search.5b5a18e8.svg",G=function(e){var n=e.setInput,t=e.setInput2,i=e.input;return Object(z.jsx)(L,{children:Object(z.jsxs)("form",{children:[Object(z.jsx)("label",{htmlFor:"city-name",children:"Podaj miejscowo\u015b\u0107: "}),Object(z.jsx)("input",{placeholder:"Wpisz nazw\u0119",id:"city-name",name:"city-name",onChange:function(e){n(e.target.value)}}),Object(z.jsx)("button",{onClick:function(e){e.preventDefault(),t(i)},children:Object(z.jsx)("img",{src:A,alt:"Search icon"})})]})})},R=t(27),q=(w.b.div(u||(u=Object(v.a)(["\n  position: relative;\n  left: -10px;\n  top: -20px;\n  border-radius: 50% 50% 50% 0;\n  border: 4px solid #ea4335;\n  width: 20px;\n  height: 20px;\n  transform: rotate(-45deg);\n"]))),function(e){var n=e.center;return Object(z.jsx)("div",{style:{height:"400px",width:"1000px",margin:"auto"},children:Object(z.jsx)(R.a,{bootstrapURLKeys:{key:"AIzaSyAhMNDTEq8ATGg9-mmj7yVxhB4Pb6TInaY"},defaultCenter:n,defaultZoom:7})})}),J=function(){var e=Object(x.useState)(""),n=Object(g.a)(e,2),t=n[0],i=n[1],a=Object(x.useState)(null),c=Object(g.a)(a,2),r=c[0],s=c[1],d=function(e,n){var t=Object(x.useState)(null),i=Object(g.a)(t,2),a=i[0],c=i[1],r=Object(x.useState)(!0),s=Object(g.a)(r,2),d=s[0],o=s[1],l=Object(x.useState)(!1),u=Object(g.a)(l,2),j=u[0],p=u[1];return Object(x.useEffect)((function(){if(null!==n){var t=function(){var e=Object(F.a)(Z.a.mark((function e(n){var t,i,a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:if(400!==(t=e.sent).status&&404!==t.status){e.next=5;break}return e.abrupt("return",p(!0));case 5:return e.next=7,t.json();case 7:i=e.sent,a={name:i.name,temp:i.main.temp,humidity:i.main.humidity,pressure:i.main.pressure,windSpeed:i.wind.speed,windDirection:i.wind.deg,clouds:i.clouds.all,timeZone:i.timezone,lat:i.coord.lat,lon:i.coord.lon,sunrise:i.sys.sunrise,sunset:i.sys.sunset},c(Object(D.a)({},a)),o(!1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();t(e)}}),[n]),{data:a,loading:d,error:j}}("https://api.openweathermap.org/data/2.5/weather?q=".concat(r,"&appid=80dc12560ff86934dd0db3a90cbacf0c"),r),o=d.data,l=(d.loading,d.error);return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(G,{setInput:i,setInput2:s,input:t}),l&&Object(z.jsx)("p",{children:"Nieprawid\u0142owa nazwa"}),o&&Object(z.jsx)(E,{name:o.name,temp:o.temp,humidity:o.humidity,pressure:o.pressure,windSpeed:o.windSpeed,windDirection:o.windDirection,clouds:o.clouds,timeZone:o.timeZone,lat:o.lat,lon:o.lon,sunrise:o.sunrise,sunset:o.sunset}),o&&Object(z.jsx)(q,{center:{lat:o.lat,lng:o.lon}})]})},K=t(13),N=w.b.div(j||(j=Object(v.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100px;\n\n  a {\n    margin: 0 40px;\n    text-decoration: none;\n    color: inherit;\n  }\n"]))),H=function(){return Object(z.jsxs)(N,{children:[Object(z.jsx)(K.b,{to:"/",children:Object(z.jsx)("p",{children:"Lista miast"})}),Object(z.jsx)(K.b,{to:"/search",children:Object(z.jsx)("p",{children:"Znajdz miasto"})})]})},U=t(3),V=w.b.div(p||(p=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Y=w.b.div(b||(b=Object(v.a)(["\n  width: 1000px;\n  height: 400px;\n"]))),Q=w.b.div(h||(h=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n"])));var X=function(){var e=Object(x.useState)(null),n=Object(g.a)(e,2),t=n[0],i=n[1],a=function(e,n){var t=Object(x.useState)(null),i=Object(g.a)(t,2),a=i[0],c=i[1],r=Object(x.useState)(!0),s=Object(g.a)(r,2),d=s[0],o=s[1];return Object(x.useEffect)((function(){if(null!==n){var t=function(){var e=Object(F.a)(Z.a.mark((function e(n){var t,i,a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.json();case 5:i=e.sent,a={name:i.name,temp:i.main.temp,humidity:i.main.humidity,pressure:i.main.pressure,windSpeed:i.wind.speed,windDirection:i.wind.deg,clouds:i.clouds.all,timeZone:i.timezone,lat:i.coord.lat,lon:i.coord.lon,sunrise:i.sys.sunrise,sunset:i.sys.sunset},c(Object(D.a)({},a)),o(!1);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();t(e)}}),[n]),{data:a,loading:d}}("https://api.openweathermap.org/data/2.5/weather?lat=".concat(null===t||void 0===t?void 0:t.latitude,"&lon=").concat(null===t||void 0===t?void 0:t.longitude,"&appid=80dc12560ff86934dd0db3a90cbacf0c"),t),c=a.data;return a.loading,Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)(K.a,{children:[Object(z.jsx)(S,{}),Object(z.jsx)(H,{}),Object(z.jsxs)(U.c,{children:[Object(z.jsx)(U.a,{exact:!0,path:"/",children:Object(z.jsxs)(V,{children:[Object(z.jsx)(k,{selectedCity:t,onCityClick:function(e){i(e)}}),Object(z.jsx)(Q,{children:c?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(E,{name:null===c||void 0===c?void 0:c.name,temp:null===c||void 0===c?void 0:c.temp,humidity:null===c||void 0===c?void 0:c.humidity,pressure:null===c||void 0===c?void 0:c.pressure,windSpeed:null===c||void 0===c?void 0:c.windSpeed,windDirection:null===c||void 0===c?void 0:c.windDirection,clouds:null===c||void 0===c?void 0:c.clouds,timeZone:null===c||void 0===c?void 0:c.timeZone,lat:null===c||void 0===c?void 0:c.lat,lon:null===c||void 0===c?void 0:c.lon,sunrise:null===c||void 0===c?void 0:c.sunrise,sunset:null===c||void 0===c?void 0:c.sunset}),Object(z.jsx)(q,{center:{lat:c.lat,lng:c.lon}})]}):Object(z.jsx)(Y,{})})]})}),Object(z.jsx)(U.a,{path:"/search",children:Object(z.jsx)(J,{})})]})]})})},$=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),i(e),a(e),c(e),r(e)}))};f.a.render(Object(z.jsx)(m.a.StrictMode,{children:Object(z.jsx)(X,{})}),document.getElementById("root")),$()}},[[44,1,2]]]);
//# sourceMappingURL=main.74a464d1.chunk.js.map