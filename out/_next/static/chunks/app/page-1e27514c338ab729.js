(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1259:function(e,a,n){Promise.resolve().then(n.bind(n,6774))},6774:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return l}});var t=n(7437),s=n(2265);function l(){let e;let[a,n]=(0,s.useState)([{name:"RedSet",value:50,amount:0},{name:"GreenSet",value:40,amount:0},{name:"BlueSet",value:30,amount:0},{name:"YellowSet",value:50,amount:0},{name:"PinkSet",value:80,amount:0},{name:"PurpleSet",value:90,amount:0},{name:"OrangeSet",value:120,amount:0}]),[l,m]=(0,s.useState)(!1),u=(e,a)=>{n(n=>n.map(n=>n.name===e?{...n,amount:a}:n))},r=(e,a)=>{u(e,parseInt(a.target.value)||0)};return(0,t.jsx)(s.Fragment,{children:(0,t.jsx)("div",{className:"h-screen bg-gray-100 pt-24",children:(0,t.jsxs)("div",{className:"p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold",children:"Calculator Food"}),a.map(e=>(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsxs)("label",{className:"flex-grow",children:[e.name,": ",e.value," THB/set"]}),(0,t.jsx)("input",{type:"number",min:"0",value:e.amount,onChange:a=>r(e.name,a),className:"w-16 p-1 border rounded"})]},e.name)),(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)("input",{type:"checkbox",checked:l,onChange:()=>{m(e=>!e)},className:"h-4 w-4",id:"member"}),(0,t.jsx)("label",{htmlFor:"member",children:"Membership Card (10% discount)"})]}),(0,t.jsxs)("p",{className:"text-xl",children:["Total Price: ",(e=0,a.forEach(a=>{e+=a.value*a.amount}),a.some(e=>e.amount>=2&&["OrangeSet","PinkSet","GreenSet"].includes(e.name))&&(e*=.95),l&&(e*=.9),e.toFixed(2))," THB"]})]})})})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=1259)}),_N_E=e.O()}]);