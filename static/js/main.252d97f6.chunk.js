(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{24:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(2),c=a.n(i),s=a(13),r=a.n(s),l=(a(24),a(14)),d=a(15),h=a(18),u=a(17),o=a(16),m=a.n(o),p=(a(43),function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("h1",{children:"Weather App"})})}),j=a(3);var b=a.p+"static/media/clouds.2ddbb531.png",x=a.p+"static/media/sun.f0545f5a.png",f=a.p+"static/media/drizzle.388a6a1a.png",O=a.p+"static/media/snow.6cbdeaf1.png",g=function(e){var t=e.tempCelcius,a=e.tempFahrenheit,i=e.celciusMax,s=e.celciusMin,r=e.fahreMin,l=e.fahreMax,d=e.desc,h=e.wind,u=e.city,o=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=c.a.useState(e),a=Object(j.a)(t,2),n=a[0],i=a[1],s=c.a.useCallback((function(){i((function(e){return!e}))}),[]);return[n,s]}(),m=Object(j.a)(o,2),p=m[0],g=m[1];return Object(n.jsxs)("div",{className:"weather_container",children:[Object(n.jsx)("h3",{children:u}),Object(n.jsxs)("p",{className:"description",children:["(",d,")"]}),Object(n.jsx)("div",{onClick:g,children:p?Object(n.jsxs)("h2",{children:[t,"\xb0C",Object(n.jsx)("span",{className:"degrees",children:"|\xb0F"})]}):Object(n.jsxs)("h2",{children:[a,"\xb0F ",Object(n.jsx)("span",{className:"degrees",children:"|\xb0C"})]})}),p?Object(n.jsxs)("p",{className:"min_max",children:[s,"\xb0C / ",i,"\xb0C"]}):Object(n.jsxs)("p",{className:"min_max",children:[r,"\xb0F / ",l,"\xb0F"]}),Object(n.jsxs)("div",{className:"weather_images",children:[d.includes("Clouds")?Object(n.jsx)("img",{className:"clouds",src:b,alt:"clouds"}):null,d.includes("Drizzle")||d.includes("Rain")?Object(n.jsx)("img",{className:"clouds",src:f,alt:"drizzle"}):null,d.includes("Snow")?Object(n.jsx)("img",{className:"clouds",src:O,alt:"drizzle"}):null,t>=20?Object(n.jsx)("img",{src:x,alt:"sun"}):null]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("p",{children:["The current wind speed in ",Object(n.jsxs)("span",{children:[" ",u," "]})," is ",Object(n.jsxs)("span",{children:[h," mph "]})]})]})},w="bccf47493d7dac93fd10a706918373a6",v=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={tempCelcius:[],tempFahrenheit:[],celciusMax:[],celciusMin:[],fahreMin:[],fahreMax:[],wind:[],weather:[],city:""},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getWeather()}},{key:"getWeather",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"london";m.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat(w)).then((function(t){return e.setState({tempCelcius:Number.parseFloat(t.data.main.temp-273.15).toFixed(1),tempFahrenheit:Number.parseFloat(9*(t.data.main.temp-273.15)/5+32).toFixed(1),celciusMax:Number.parseFloat(t.data.main.temp_max-273.15).toFixed(1),celciusMin:Number.parseFloat(t.data.main.temp_min-273.15).toFixed(1),fahreMax:Number.parseFloat(9*(t.data.main.temp_max-273.15)/5+32).toFixed(1),fahreMin:Number.parseFloat(9*(t.data.main.temp_min-273.15)/5+32).toFixed(1),wind:t.data.wind.speed,weather:t.data.weather[0].main,city:t.data.name})})).catch((function(e){return console.log(e,"Problem fetching data from Api")}))}},{key:"getNewDestination",value:function(e){e.preventDefault();var t=this.newPlace.value;""!==t&&this.getWeather(t),this.newPlace.value=""}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(p,{}),Object(n.jsxs)("form",{onSubmit:function(t){return e.getNewDestination(t)},children:[Object(n.jsx)("input",{ref:function(t){return e.newPlace=t},type:"text",placeholder:"Amsterdam..."}),Object(n.jsx)("button",{onClick:function(t){return e.getNewDestination(t)},children:"\ud83d\udd0d"})]}),Object(n.jsx)(g,{tempCelcius:this.state.tempCelcius,tempFahrenheit:this.state.tempFahrenheit,celciusMin:this.state.celciusMin,celciusMax:this.state.celciusMax,fahreMin:this.state.fahreMin,fahreMax:this.state.fahreMax,desc:this.state.weather,wind:this.state.wind,city:this.state.city})]})}}]),a}(i.Component),F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),F()}},[[44,1,2]]]);
//# sourceMappingURL=main.252d97f6.chunk.js.map