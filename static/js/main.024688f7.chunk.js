(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],[,,,,,function(e,n,a){e.exports={container:"Settings_container__2fd4y",button:"Settings_button__1c1p6",red:"Settings_red__5Vziw"}},,,,,,,function(e,n,a){e.exports={displayCounter:"Display_displayCounter__bg-nA",red:"Display_red__1xWKh",displayText:"Display_displayText__2RQYO",displayError:"Display_displayError__3j2Eo"}},function(e,n,a){e.exports={button:"Button_button__2CMdu"}},function(e,n,a){e.exports={buttons:"Buttons_buttons__3aJE6"}},function(e,n,a){e.exports={container:"Counter_container__23FHh",red:"Counter_red__2Kwkb"}},function(e,n,a){e.exports={display:"DisplaySet_display__tAkqG"}},,,,function(e,n,a){e.exports=a(33)},,,,,function(e,n,a){},function(e,n,a){},,,,,,,function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),u=a(2),l=a.n(u),s=(a(25),a(10)),o=a(11),c=a(18),i=a(19),p=(a(26),a(12)),m=a.n(p),V=function(e){return r.a.createElement("div",{className:m.a.displayCounter},r.a.createElement("span",{className:e.styleCounter},e.value))},d=a(13),b=a.n(d),E=function(e){return r.a.createElement("button",{className:b.a.button,disabled:e.disabled,onClick:e.onClick},e.name)},v=a(14),_=a.n(v),C=function(e){return r.a.createElement("div",{className:_.a.buttons},r.a.createElement(E,{disabled:e.disabledInc,name:"inc",onClick:e.onClick}),r.a.createElement(E,{disabled:e.disabledRes,name:"reset",onClick:e.reset}))},f=a(15),x=a.n(f),y=function(e){return r.a.createElement("div",{className:"Counter"},r.a.createElement("div",{className:x.a.container},r.a.createElement(V,{styleCounter:e.styleCounter,value:e.value}),r.a.createElement(C,{disabledInc:e.disabledInc,disabledRes:e.disabledRes,onClick:e.onClick,reset:e.reset})))},h=a(5),g=a.n(h),N=a(16),I=a.n(N),M=function(e){return r.a.createElement("div",{className:I.a.display},"max value:  ",r.a.createElement("input",{type:"number",className:e.styleInput,value:e.maxValue,onChange:e.onChangeMax}),"start value: ",r.a.createElement("input",{type:"number",className:e.styleInput,value:e.minValue,onChange:e.onChangeMin}))},S=function(e){return r.a.createElement("div",{className:g.a.container},r.a.createElement(M,{styleInput:e.styleInput,onChangeMax:e.onChangeMax,onChangeMin:e.onChangeMin,maxValue:e.maxValue,minValue:e.minValue,style:g.a.display,value:e.counter}),r.a.createElement("div",{className:g.a.button},r.a.createElement(E,{disabled:e.disabledSet,name:"set",onClick:e.onClick})))},T=a(4),k=a(1),O={currentValue:0,stepCounter:1,maxValue:5,minValue:0,setButtonDisabled:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INIT_STATE":return Object(k.a)({},n.initialState);case"INC_COUNTER":return Object(k.a)({},e,{currentValue:n.currentValue});case"RESET_COUNTER":return Object(k.a)({},e,{currentValue:0});case"SET_MIN_VALUE":var a=n.minValue<0||n.minValue>=e.maxValue,t=n.minValue!==e.maxValue;return Object(k.a)({},e,{minValue:n.minValue,currentValue:a?"Incorrect value":t?"Enter value and press 'set'":e.currentValue,setButtonDisabled:a});case"SET_MAX_VALUE":var r=n.maxValue!==e.maxValue,u=n.maxValue<=e.minValue||n.maxValue<0;return Object(k.a)({},e,{maxValue:n.maxValue,currentValue:u?"Incorrect value":r?"Enter value and press 'set'":e.currentValue,setButtonDisabled:u});case"SET_VALUES":return Object(k.a)({},e,{currentValue:n.minValue})}return e},A=function(e){Object(i.a)(a,e);var n=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var t=arguments.length,u=new Array(t),l=0;l<t;l++)u[l]=arguments[l];return(e=n.call.apply(n,[this].concat(u))).inc=function(){if(e.props.currentValue<e.props.maxValue){var n=e.props.currentValue+e.props.stepCounter;e.props.incCounter(n)}},e.reset=function(){var n=e.props.currentValue;e.props.resetCounter(n)},e.changeMaxValue=function(n){var a=Number(n.currentTarget.value);e.props.changeMaxValue(a)},e.changeMinValue=function(n){var a=Number(n.currentTarget.value);e.props.changeMinValue(a)},e.set=function(){var n=e.props.minValue;e.props.setValues(n)},e.saveState=function(){},e.render=function(){var n=e.props.maxValue===e.props.minValue||e.props.minValue<0||e.props.maxValue<0||e.props.minValue>e.props.maxValue,a=e.props.currentValue===e.props.maxValue||"Incorrect value"===e.props.currentValue?"red":"",t="Incorrect value"===e.props.currentValue?"red-border":"",u=e.props.currentValue===e.props.maxValue||"Incorrect value"===e.props.currentValue||"Enter value and press 'set'"===e.props.currentValue,l=e.props.currentValue===e.props.minValue||"Incorrect value"===e.props.currentValue||"Enter value and press 'set'"===e.props.currentValue;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"settings"},r.a.createElement(S,{styleInput:t,disabledSet:e.props.setButtonDisabled,onChangeMax:e.changeMaxValue,onChangeMin:e.changeMinValue,maxValue:e.props.maxValue,minValue:e.props.minValue,onClick:e.set})),r.a.createElement("div",{className:"counter"},r.a.createElement(y,{styleCounter:a,value:e.props.currentValue,disabledInc:u,disabledRes:l,disabledSet:n,onClick:e.inc,reset:e.reset})))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}}]),a}(r.a.Component),w=Object(T.b)((function(e){return{currentValue:e.currentValue,stepCounter:e.stepCounter,maxValue:e.maxValue,minValue:e.minValue,setButtonDisabled:e.setButtonDisabled}}),(function(e){return{incCounter:function(n){e(function(e){return{type:"INC_COUNTER",currentValue:e}}(n))},resetCounter:function(n){e(function(e){return{type:"RESET_COUNTER",resetCurrentValue:e}}(n))},changeMinValue:function(n){e({type:"SET_MIN_VALUE",minValue:n})},changeMaxValue:function(n){e({type:"SET_MAX_VALUE",maxValue:n})},setValues:function(n){e(function(e){return{type:"SET_VALUES",minValue:e}}(n))}}}))(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(3),R=Object(D.b)(j);l.a.render(r.a.createElement(T.a,{store:R},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.024688f7.chunk.js.map