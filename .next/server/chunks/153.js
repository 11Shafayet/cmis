exports.id=153,exports.ids=[153],exports.modules={3214:(A,E,s)=>{Promise.resolve().then(s.bind(s,827)),Promise.resolve().then(s.t.bind(s,1900,23)),Promise.resolve().then(s.bind(s,2738))},23:(A,E,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},827:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>x});var e=s(5344),t=s(3729),B=s(783),Q=s.n(B),i=s(1223),a=s.n(i);let g={src:"/_next/static/media/logo.1d388ba0.png",height:84,width:84,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEV/eGA1ZoUwYX9FbYe0f0RFbIE6bZBMaXE8YnolYotDbYYISnsxe5ouY4cKVZMlVniVj2gyWneah3c8a4g2XHgPVZBXd4I1ZIIAVZmcfF9yfXU5Y3yhf2DR64PSAAAAHXRSTlMVzb+UC3roAI2k2K/N3MTI54Eovq2w5tzXUODPUm34yX0AAAAJcEhZcwAACxMAAAsTAQCanBgAAABCSURBVHicBcGFAcAgEASwQ19wqLf7z9kEBKfKIMAakbJ5cJv3N1vAO2rvO1uc43qOyhYuppxTDIAWkbg8CM6Y4OkHYSQCkbPKB1kAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8};var l=s(2254),z=s(4702);let r=[{text:"Home",link:"/"},{text:"About Us",subMenu:[{text:"History Bangla",link:"/history-bangla"},{text:"History English",link:"/history-english"},{text:"Citizen Charter",link:"/citizen-charter"},{text:"Vision & Mission",link:"/vision-and-mission"}]},{text:"Academic",subMenu:[{text:"Principal's Information",link:"/principal"},{text:"Vice Principal's Information",link:"/vice-principal"},{text:"Teachers Information",link:"/teachers"},{text:"Holiday Calendar",link:"/holiday-calendar"},{text:"Academic Calendar",link:"/academic-calendar"},{text:"Class Routine",link:"/class-routine"},{text:"3rd & 4th Class Employee Information",link:"/employees"}]},{text:"Department",subMenu:[{text:"Department's History",link:"/departments-history"},{text:"Teachers Info",link:"/teachers"},{text:"Students Info",link:"/students-info"},{text:"Notice",link:"/notice"},{text:"Events",link:"/events"},{text:"Results",link:"/results"}]},{text:"Notices",subMenu:[{text:"Recent Notices",link:"/notice"},{text:"Office Order",link:"/office-order"},{text:"Admission Notice",link:"/admission-notice"},{text:"Exam Notice",link:"/exam-notice"},{text:"NOC",link:"/noc"}]},{text:"Exams",subMenu:[{text:"Exam Notices",link:"/exam-notice"},{text:"Exam Routine",link:"/exam-routine"},{text:"Syllabus",link:"/syllabus"}]},{text:"Admission",subMenu:[{text:"Admission Notice",link:"/admission-notice"},{text:"Admission Info",link:"/admission-info"}]},{text:"Gallery",subMenu:[{text:"Image Gallery",link:"/image-gallery"},{text:"Video Gallery",link:"/video-gallery"}]}],x=()=>{let A=(0,t.useRef)(null),E=(0,t.useRef)(null),s=(0,l.usePathname)(),[B,i]=(0,t.useState)(!1),[x,o]=(0,t.useState)(0);return(0,t.useEffect)(()=>{document.body.addEventListener("click",function(s){E.current&&!E.current.contains(s.target)&&A.current&&!A.current.contains(s.target)&&o(0)})},[]),(0,e.jsxs)(e.Fragment,{children:[e.jsx("div",{className:"relative bg-primary bg-opacity-10 shadow-md py-2",children:e.jsx("div",{className:"container mx-auto px-4",children:(0,e.jsxs)("div",{className:"flex gap-4 flex-col md:flex-row items-center",children:[e.jsx(a(),{src:g,alt:"logo",height:55,width:55}),e.jsx("h4",{className:"flex-grow text-center font-bold text-xl",children:"Beanibazar Govt. College (বিয়ানিবাজার সরকারি কলেজ)"})]})})}),e.jsx("div",{className:"relative bg-white shadow-md py-4",children:e.jsx("div",{className:"container mx-auto px-4",children:(0,e.jsxs)("div",{className:"flex flex-col gap-y-2 justify-between items-center",children:[(0,e.jsxs)("div",{className:"relative w-full flex flex-col gap-y-1.5 justify-center items-center md:hidden border border-black rounded py-2 cursor-pointer",onClick:()=>i(A=>!A),children:[e.jsx("span",{className:"block w-11 h-0.5 bg-black"}),e.jsx("span",{className:"block w-11 h-0.5 bg-black"}),e.jsx("span",{className:"block w-11 h-0.5 bg-black"})]}),e.jsx("ul",{className:`flex-col md:flex-row items-center justify-between w-full gap-6 py-4 md:py-0 ${B?"flex":"hidden md:flex"}`,ref:A,children:r.map((A,t)=>(0,e.jsxs)("li",{className:`relative flex items-center gap-2 text-base font-medium z-[1000] hover:cursor-pointer ${s===A.link&&"text-primary"}`,onClick:()=>A.subMenu&&x!==t?o(t):o(0),children:[e.jsx(Q(),{href:A.link?A.link:"",children:A.text}),A.subMenu&&x!==t&&e.jsx(z.RiI,{}),A.subMenu&&x===t&&e.jsx(z.s$2,{}),A.subMenu&&x===t&&e.jsx("ul",{className:"absolute top-[111%] flex flex-col gap-y-2 left-1/2 md:-left-full -translate-x-1/2 md:translate-x-0 shadow-light bg-white p-4 md:p-6 min-w-[250px] rounded z-[9999]",ref:E,children:A.subMenu.map((A,E)=>e.jsx("li",{className:`relative text-base font-medium hover:text-primary ${s===A.link&&"text-primary"}`,children:e.jsx(Q(),{href:A.link?A.link:"",children:A.text})},E))})]},t))})]})})})]})}},6836:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>o,metadata:()=>x});var e=s(5036);let t=(0,s(6843).createProxy)(String.raw`D:\Shafayet\CLIENT-PROJECTS\cmis\components\common\Navbar.jsx`),{__esModule:B,$$typeof:Q}=t,i=t.default;var a=s(6876);let g={src:"/_next/static/media/map.4713712f.png",height:676,width:1224,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAElBMVEXu7/Do6uz09PTr6ObY2+Hk5+iGwo/6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAIklEQVR4nB3BgQ0AMAzCsATo/y9Pmk2SCwtKZdLS3uS7+QAEqQA/dQtI4AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4};var l=s(5904),z=s.n(l);let r=()=>e.jsx("div",{className:"bg-[#F7F7F7] py-12 md:py-20",children:e.jsx("div",{className:"container mx-auto px-4",children:(0,e.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[e.jsx("div",{children:e.jsx(z(),{src:g,alt:""})}),(0,e.jsxs)("h5",{className:"text-center !leading-loose",children:["আমার সোনার বাংলা, আমি তোমায় ভালোবাসি।",e.jsx("br",{}),"চিরদিন তোমার আকাশ, তোমার বাতাস, আমার প্রাণে বাজায় বাঁশি॥",e.jsx("br",{}),"ও মা, ফাগুনে তোর আমের বনে ঘ্রাণে পাগল করে,",e.jsx("br",{}),"মরি হায়, হায় রে—",e.jsx("br",{}),"ও মা, অঘ্রানে তোর ভরা ক্ষেতে আমি কী দেখেছি মধুর হাসি॥",e.jsx("br",{}),"কী শোভা, কী ছায়া গো, কী স্নেহ, কী মায়া গো—",e.jsx("br",{}),"কী আঁচল বিছায়েছ বটের মূলে, নদীর কূলে কূলে।",e.jsx("br",{}),"মা, তোর মুখের বাণী আমার কানে লাগে সুধার মতো,",e.jsx("br",{}),"মরি হায়, হায় রে—",e.jsx("br",{}),"মা, তোর বদনখানি মলিন হলে, ও মা, আমি নয়নজলে ভাসি॥",e.jsx("br",{})]}),(0,e.jsxs)("div",{children:[e.jsx("h4",{className:"text-3xl font-bold text-primary mb-6",children:"Contact Us"}),e.jsx("ul",{children:(0,e.jsxs)("li",{className:"flex gap-2 items-center text-xl font-medium",children:[e.jsx(a.xpo,{size:20}),e.jsx("p",{children:"+8801638719578"})]})})]})]})})});s(7272);let x={title:"Beanibazar Govt. College",description:"Beanibazar Govt. College"};function o({children:A}){return e.jsx("html",{lang:"en",children:(0,e.jsxs)("body",{className:"font-primary",children:[e.jsx(i,{}),A,e.jsx(r,{})]})})}},2738:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>e});let e={src:"/_next/static/media/map.4713712f.png",height:676,width:1224,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAElBMVEXu7/Do6uz09PTr6ObY2+Hk5+iGwo/6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAIklEQVR4nB3BgQ0AMAzCsATo/y9Pmk2SCwtKZdLS3uS7+QAEqQA/dQtI4AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},1110:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>e});let e={src:"/_next/static/media/1.773c7c6b.jpg",height:641,width:541,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAcDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABsFf/xAAVEAEBAAAAAAAAAAAAAAAAAAAEAv/aAAgBAQABBQKUFlP/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAwEBPwFb/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Bj//EABoQAAAHAAAAAAAAAAAAAAAAAAABAxETITL/2gAIAQEABj8CNaXVOP/EABkQAAEFAAAAAAAAAAAAAAAAAAARITFR8P/aAAgBAQABPyGASwmY/9oADAMBAAIAAwAAABD7/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Qo//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAECAQE/EAl//8QAGRABAAIDAAAAAAAAAAAAAAAAAQARQXHh/9oACAEBAAE/EGPQkMsQCtYdn//Z",blurWidth:7,blurHeight:8}},4090:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>e});let e={src:"/_next/static/media/10.f1ee0bc1.jpeg",height:300,width:300,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABtFv/xAAVEAEBAAAAAAAAAAAAAAAAAAAUAv/aAAgBAQABBQJEI//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABURAQEAAAAAAAAAAAAAAAAAAAAS/9oACAECAQE/AZf/xAAZEAABBQAAAAAAAAAAAAAAAAAAARESMaH/2gAIAQEABj8Cm63h/8QAGBAAAgMAAAAAAAAAAAAAAAAAAEEBESH/2gAIAQEAAT8hqnidH//aAAwDAQACAAMAAAAQD//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxBdv//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAECAQE/EEX/xAAaEAABBQEAAAAAAAAAAAAAAAARAAEhQXGR/9oACAEBAAE/EN0+xjHLX//Z",blurWidth:8,blurHeight:8}},4226:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>e});let e={src:"/_next/static/media/11.53bd63e5.jpeg",height:591,width:472,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABrFD/AP/EABYQAQEBAAAAAAAAAAAAAAAAAAMCBP/aAAgBAQABBQKN4Gv/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAwEBPwFb/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAES/9oACAECAQE/AYR//8QAGRAAAwADAAAAAAAAAAAAAAAAAQIDABIx/9oACAEBAAY/AmqS2tOZ/8QAGBAAAgMAAAAAAAAAAAAAAAAAAVEAESH/2gAIAQEAAT8hX+IWcYn/2gAMAwEAAgADAAAAEP8A/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/EG0//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/EFA//8QAGRAAAgMBAAAAAAAAAAAAAAAAAREhUWEA/9oACAEBAAE/EDPLi7IsjMrv/9k=",blurWidth:6,blurHeight:8}},441:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>e});let e={src:"/_next/static/media/12.a41cbc0b.jpeg",height:660,width:540,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAcDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABrCn/xAAXEAADAQAAAAAAAAAAAAAAAAABAgQU/9oACAEBAAEFAloGj//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AY//xAAZEAACAwEAAAAAAAAAAAAAAAACEwARITH/2gAIAQEABj8CYs6LOT//xAAZEAACAwEAAAAAAAAAAAAAAAABIQAxUWH/2gAIAQEAAT8hBO+breKf/9oADAMBAAIAAwAAABAH/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQMBAT8QVb//xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8QlH//xAAaEAACAgMAAAAAAAAAAAAAAAABESExAGFx/9oACAEBAAE/EJVxeAkBINNTu8//2Q==",blurWidth:7,blurHeight:8}},69:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>e});let e={src:"/_next/static/media/13.1576da11.jpeg",height:300,width:300,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABqij/xAAVEAEBAAAAAAAAAAAAAAAAAAAUA//aAAgBAQABBQJM0f/EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/AVv/xAAWEQADAAAAAAAAAAAAAAAAAAAAAQL/2gAIAQIBAT8BUn//xAAYEAACAwAAAAAAAAAAAAAAAAAAExEjMf/aAAgBAQAGPwJzqsk//8QAGBABAAMBAAAAAAAAAAAAAAAAEQABQTH/2gAIAQEAAT8hpGjQeE//2gAMAwEAAgADAAAAEAP/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8QVy//xAAWEQADAAAAAAAAAAAAAAAAAAAAASH/2gAIAQIBAT8QTT//xAAZEAACAwEAAAAAAAAAAAAAAAARMQABIVH/2gAIAQEAAT8QrurKSOHSBP/Z",blurWidth:8,blurHeight:8}},2500:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>e});let e={src:"/_next/static/media/14.96874204.jpeg",height:300,width:300,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABowr/xAAVEAEBAAAAAAAAAAAAAAAAAAASI//aAAgBAQABBQJ2/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Br//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABcQAQADAAAAAAAAAAAAAAAAAAEAEiL/2gAIAQEABj8CsuJ//8QAFxABAAMAAAAAAAAAAAAAAAAAAQAxsf/aAAgBAQABPyFVKMn/2gAMAwEAAgADAAAAEPv/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPxCH/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Qj//EABgQAQADAQAAAAAAAAAAAAAAAAEAESEx/9oACAEBAAE/EKcAGkcx1n//2Q==",blurWidth:8,blurHeight:8}},5324:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>e});let e={src:"/_next/static/media/15.301b3f35.jpeg",height:573,width:453,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABvCh//8QAFxAAAwEAAAAAAAAAAAAAAAAAAQMEEv/aAAgBAQABBQJQxR//xAAWEQADAAAAAAAAAAAAAAAAAAAAAQL/2gAIAQMBAT8BdH//xAAWEQADAAAAAAAAAAAAAAAAAAAAARL/2gAIAQIBAT8BlH//xAAZEAABBQAAAAAAAAAAAAAAAAAAAQIDESH/2gAIAQEABj8Ckfa6f//EABgQAAIDAAAAAAAAAAAAAAAAAAABETFh/9oACAEBAAE/IVtoN2f/2gAMAwEAAgADAAAAEPP/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAwEBPxBFv//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/EIv/xAAZEAEAAwEBAAAAAAAAAAAAAAABESFBAGH/2gAIAQEAAT8Qe9fUkmSsgo87/9k=",blurWidth:6,blurHeight:8}},1510:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>e});let e={src:"/_next/static/media/16.f6fdc8c7.jpg",height:406,width:348,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAcDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGqD//EABYQAQEBAAAAAAAAAAAAAAAAAAMEAf/aAAgBAQABBQI6y2r/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwGv/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAESAv/aAAgBAQAGPwJ6pyz/xAAYEAEBAAMAAAAAAAAAAAAAAAABEQBBgf/aAAgBAQABPyEFwGLzWf/aAAwDAQACAAMAAAAQ8//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/EKf/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPxAL/8QAGBAAAwEBAAAAAAAAAAAAAAAAAREhAFH/2gAIAQEAAT8QU4FI0lKgc3//2Q==",blurWidth:7,blurHeight:8}},6072:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>e});let e={src:"/_next/static/media/17.62de54cd.jpeg",height:591,width:472,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABqKf/xAAWEAEBAQAAAAAAAAAAAAAAAAADAgX/2gAIAQEAAQUCPTGF/8QAFREBAQAAAAAAAAAAAAAAAAAAAAL/2gAIAQMBAT8Bp//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AY//xAAZEAADAAMAAAAAAAAAAAAAAAABAgMAETH/2gAIAQEABj8CapD6pzP/xAAYEAACAwAAAAAAAAAAAAAAAAABIQARUf/aAAgBAQABPyFn5UDK0T//2gAMAwEAAgADAAAAEAP/xAAYEQACAwAAAAAAAAAAAAAAAAAAATGBsf/aAAgBAwEBPxCVLEf/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPxAJf//EABoQAAICAwAAAAAAAAAAAAAAAAERACExQWH/2gAIAQEAAT8Qd/wICYDJXFqf/9k=",blurWidth:6,blurHeight:8}},7215:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>e});let e={src:"/_next/static/media/2.03b53090.jpeg",height:860,width:686,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABpAx//8QAFhABAQEAAAAAAAAAAAAAAAAAAgMR/9oACAEBAAEFAhPV/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAISUf/aAAgBAwEBPwGFw//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPwGs/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAERMUH/2gAIAQEABj8Cc1h//8QAGBAAAgMAAAAAAAAAAAAAAAAAAAEhMWH/2gAIAQEAAT8hkPNWf//aAAwDAQACAAMAAAAQ+//EABYRAQEBAAAAAAAAAAAAAAAAAAEAMf/aAAgBAwEBPxBfRf/EABURAQEAAAAAAAAAAAAAAAAAAABh/9oACAECAQE/ELP/xAAXEAEBAQEAAAAAAAAAAAAAAAABEUEA/9oACAEBAAE/EGaEpCANrvf/2Q==",blurWidth:6,blurHeight:8}},267:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>e});let e={src:"/_next/static/media/3.bee0e8de.jpeg",height:1600,width:1229,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABrig//8QAFxAAAwEAAAAAAAAAAAAAAAAAAQIDEf/aAAgBAQABBQJdFv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/Aa//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwGP/8QAFxAAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAgBAQAGPwK6beH/xAAXEAEBAQEAAAAAAAAAAAAAAAABEQAh/9oACAEBAAE/IW6zkF5v/9oADAMBAAIAAwAAABAP/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEh/9oACAEDAQE/EEp//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEh/9oACAECAQE/EGh//8QAGRAAAgMBAAAAAAAAAAAAAAAAAREAIUFR/9oACAEBAAE/EFQBPA2hnKn/2Q==",blurWidth:6,blurHeight:8}},464:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>e});let e={src:"/_next/static/media/4.f84caa4e.jpeg",height:591,width:472,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABqCX/xAAWEAEBAQAAAAAAAAAAAAAAAAADAgT/2gAIAQEAAQUCJgjR/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAGBAAAgMAAAAAAAAAAAAAAAAAAAIDEjL/2gAIAQEABj8CeW+z/8QAGBABAQADAAAAAAAAAAAAAAAAESEAAVH/2gAIAQEAAT8hY4Vu28z/2gAMAwEAAgADAAAAEA//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPxCP/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8QVL//xAAZEAEBAAMBAAAAAAAAAAAAAAABEQAhQTH/2gAIAQEAAT8QXJRHBEuyTw0dz//Z",blurWidth:6,blurHeight:8}},2397:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>e});let e={src:"/_next/static/media/5.5abe1afe.jpeg",height:1170,width:995,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAcDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oADAMBAAIQAxAAAAGqEl//xAAWEAEBAQAAAAAAAAAAAAAAAAABAgT/2gAIAQEAAQUChg0//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAIT/9oACAEDAQE/Aasf/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAET/9oACAECAQE/AZI//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAIhA//aAAgBAQAGPwJtLT//xAAWEAADAAAAAAAAAAAAAAAAAAAAEUH/2gAIAQEAAT8hbGR//9oADAMBAAIAAwAAABD7/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQBR/9oACAEDAQE/EFsv/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQBR/9oACAECAQE/EAdv/8QAGBABAQEBAQAAAAAAAAAAAAAAASERAFH/2gAIAQEAAT8QDMDp2wieGTv/2Q==",blurWidth:7,blurHeight:8}},7672:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>e});let e={src:"/_next/static/media/6.b5d9e04b.jpeg",height:300,width:300,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABqCv/xAAVEAEBAAAAAAAAAAAAAAAAAAAUBP/aAAgBAQABBQJc6//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/Aa//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAYEAACAwAAAAAAAAAAAAAAAAAAAhETMf/aAAgBAQAGPwK+X0//xAAZEAACAwEAAAAAAAAAAAAAAAABIQARUTH/2gAIAQEAAT8hKkgS3ysyf//aAAwDAQACAAMAAAAQA//EABYRAAMAAAAAAAAAAAAAAAAAAAABMf/aAAgBAwEBPxBIf//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAECAQE/EAv/xAAZEAACAwEAAAAAAAAAAAAAAAARIQABMVH/2gAIAQEAAT8QoaMaNiGHWEuf/9k=",blurWidth:8,blurHeight:8}},5874:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>e});let e={src:"/_next/static/media/7.f4debcc2.jpg",height:373,width:406,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAHAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGoP//EABYQAAMAAAAAAAAAAAAAAAAAAAMTFP/aAAgBAQABBQK8TP/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/Aa//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAZEAABBQAAAAAAAAAAAAAAAAASAAIRFGH/2gAIAQEABj8Csi4SjV//xAAXEAADAQAAAAAAAAAAAAAAAAAAcYGx/9oACAEBAAE/IYmEw//aAAwDAQACAAMAAAAQ8//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/EFN//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/EMC//8QAGRAAAgMBAAAAAAAAAAAAAAAAASEAEUEx/9oACAEBAAE/EHwoAaPvtJlz/9k=",blurWidth:8,blurHeight:7}},7826:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>e});let e={src:"/_next/static/media/8.e14a71ed.jpeg",height:297,width:239,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGoD//EABYQAQEBAAAAAAAAAAAAAAAAAAIDBP/aAAgBAQABBQI0mdP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwGP/8QAFhABAQEAAAAAAAAAAAAAAAAAAiEA/9oACAEBAAY/Am7d/8QAFxAAAwEAAAAAAAAAAAAAAAAAABFBAf/aAAgBAQABPyGanGqf/9oADAMBAAIAAwAAABAL/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/EF2//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/EIR//8QAGRABAAIDAAAAAAAAAAAAAAAAARFRACFx/9oACAEBAAE/ECmzEgrSRqNdz//Z",blurWidth:6,blurHeight:8}},927:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>e});let e={src:"/_next/static/media/9.9b09035f.jpeg",height:2361,width:1893,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAABqKP/xAAWEAEBAQAAAAAAAAAAAAAAAAACAwX/2gAIAQEAAQUCOvIL/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Br//EABYRAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAgEBPwEyX//EABkQAAEFAAAAAAAAAAAAAAAAAAEAAhITQf/aAAgBAQAGPwKwh5li/8QAFxABAQEBAAAAAAAAAAAAAAAAAREAcf/aAAgBAQABPyFYEuBKd3//2gAMAwEAAgADAAAAEAP/xAAWEQEBAQAAAAAAAAAAAAAAAAABAJH/2gAIAQMBAT8QSuX/xAAWEQADAAAAAAAAAAAAAAAAAAAAEZH/2gAIAQIBAT8QWp//xAAaEAACAgMAAAAAAAAAAAAAAAABEQAhMUFx/9oACAEBAAE/ELsYkJOhK4sT/9k=",blurWidth:6,blurHeight:8}},7481:(A,E,s)=>{"use strict";s.r(E),s.d(E,{default:()=>t});var e=s(337);let t=A=>[{type:"image/x-icon",sizes:"84x84",url:(0,e.fillMetadataSegment)(".",A.params,"favicon.ico")+""}]},7272:()=>{}};