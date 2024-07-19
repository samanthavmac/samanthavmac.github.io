(this["webpackJsonpsamanthavmac.github.io"]=this["webpackJsonpsamanthavmac.github.io"]||[]).push([[0],{23:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},42:function(e,t,a){},56:function(e,t,a){e.exports=a(96)},65:function(e,t,a){},89:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(43),r=a.n(o);a(65);var s=()=>i.a.createElement("div",{className:"navbar"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"#header"},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"#projects"},"Software Work")),i.a.createElement("li",null,i.a.createElement("a",{href:"#design"},"Design Work")),i.a.createElement("li",null,i.a.createElement("a",{href:"#experiences"},"Experiences"))));function l(){return i.a.createElement("div",{class:"header horizontal-stack row"},i.a.createElement("img",{class:"profile-image col",src:"images/samantha-mac-headshot.png",alt:""}),i.a.createElement("div",{class:"vertical-stack pt-4 col"},i.a.createElement("h1",null,"Samantha Mac"),i.a.createElement("p2",null,"1A Software Engineering @ University of Waterloo"),i.a.createElement("p1",null,"Interests: Software for social good, product design, & accessible coding education")))}function c(){return i.a.createElement("section",{id:"header"},i.a.createElement(l,null))}a(23);var m=e=>{let{title:t,path:a,passwordProtected:n,url:o,onSocialClick:r}=e;return i.a.createElement("div",{className:"card border-0 bg-transparent",style:{width:"18rem"}},i.a.createElement("a",{href:o,rel:"noopener noreferrer",target:"_blank",onClick:e=>{e.preventDefault(),r(o,n)}},i.a.createElement("div",{className:"card-body horizontal-stack py-0"},i.a.createElement("img",{className:"social-icon",src:"images/icons/".concat(a,"-link-icon.png")}),i.a.createElement("div",{className:"vertical-stack"},i.a.createElement("p1",{className:"type"},t),i.a.createElement("p1",null,o)))))};var d=[{key:0,path:"github",title:"Github",passwordProtected:!1,url:"https://github.com/samanthavmac/"},{key:2,path:"linkedin",title:"Linkedin",passwordProtected:!1,url:"https://www.linkedin.com/in/samanthavmac/"}];var p=e=>{let{playlistId:t}=e;return i.a.createElement("div",null,i.a.createElement("iframe",{src:"https://open.spotify.com/embed/playlist/".concat(t),width:"100%",height:"180px",allowtransparency:"true",title:"Spotify Player",allowFullScreen:!0,allow:"autoplay; encrypted-media",loading:"lazy",onError:()=>{console.log("Error loading Spotify playlist.")}}))};var u=()=>{const[e,t]=Object(n.useState)(!1),[a,o]=Object(n.useState)(""),r=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_EXTERNAL_SITE_PASSWORD,(e,a)=>{a?(o(e),t(!0)):window.open(e,"_blank")});return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"container px-0"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 col-md-7 vertical-stack"},i.a.createElement("h2",null,"Me \ud83e\udd1d Spotify"),i.a.createElement(p,{playlistId:"603wFeklPwJEIvFTbl2Y24?si=862da7e261d74c4b"})),i.a.createElement("div",{className:"col-12 col-md-5 vertical-stack"},i.a.createElement("h2",null,"Top links this month"),d.map(e=>i.a.createElement(m,{key:e.path,path:e.path,title:e.title,passwordProtected:e.passwordProtected,url:e.url,onSocialClick:r}))))))};var h=[{key:1,name:"Safest Route for Haven & Angie",path:"haven-safe",tagline:"Finding the Safest Route to your destination while sharing your location",techStack:"Swift, RESTful APIs",usageDescription:"Haven is an expert-endorsed app used by students to quickly connect with loved ones and police in emergency situations.",keyFeatures:[{icon:"\ud83d\udee3\ufe0f",feature:"Get directions of the safest walkable route to your destination"},{icon:"\ud83d\uddfa\ufe0f",feature:"Share your real-time location, intended destination, and time of arrival with your \u2018Angels\u2019"},{icon:"\ud83d\uded1",feature:"Report unsafe locations, which Haven will avoid on future routes for all users"},{icon:"\ud83d\udea8",feature:"Enter \u2018Emergency Mode\u2019 to alert your \u2018Angels\u2019 and campus police, record your surroundings, and sound your alarm."}],technicalDescription:["Designed and deployed over 20 RESTful API endpoints to Heroku Cloud, integrating with Google Place API for route instructions and location tracking.","Built custom animated UI components and standardized auto layout constraints on Swift Storyboard for reusable and efficient development across view controllers.","Integrated over 150 outlets and multiple segues for seamless UI interaction and navigation."],awards:[],links:[{type:"apple",title:"App Store",url:"https://apps.apple.com/ca/app/haven-safety-alert-locator/id1569921454"},{type:"android",title:"Play Store",url:"https://play.google.com/store/apps/details?id=com.havensafe.havenandroid&pli=1"},{type:"website",title:"Website",url:"https://www.havensafe.co/"}],numImages:4},{key:2,name:"Personal Website",path:"personal-website",tagline:"Showcasing my software projects through Spotify",techStack:"React",usageDescription:"With each iteration of my personal website, I challenge myself to implement new frameworks, coding practices, and features to enhance my website's efficiency and complexity.",keyFeatures:[{icon:"\ud83d\udee3\ufe0f",feature:"Get directions of the safest walkable route to your destination"},{icon:"\ud83d\uddfa\ufe0f",feature:"Share your real-time location, intended destination, and time of arrival with your \u2018Angels\u2019"},{icon:"\ud83d\uded1",feature:"Report unsafe locations, which Haven will avoid on future routes for all users"},{icon:"\ud83d\udea8",feature:"Enter \u2018Emergency Mode\u2019 to alert your \u2018Angels\u2019 and campus police, record your surroundings, and sound your alarm."}],technicalDescription:["Designed and deployed over 20 RESTful API endpoints to Heroku Cloud, integrating with Google Place API for route instructions and location tracking.","Built custom animated UI components and standardized auto layout constraints on Swift Storyboard for reusable and efficient development across view controllers.","Integrated over 150 outlets and multiple segues for seamless UI interaction and navigation."],awards:[],links:[{type:"github",title:"Github",url:"https://github.com/example"},{type:"website",title:"View Portfolio",url:"https://samanthavmac.github.io"}],numImages:4},{key:3,name:"Sonic Music",path:"sonic-music",tagline:"Analyzing an image's colours to curate a Spotify playlist",techStack:"Java",usageDescription:"Can't find a playlist that fits the mood? Take a picture of what you are up to and generate a new playlist.",keyFeatures:[{icon:"\ud83c\udfa7",feature:"Create an account to modify and store your custom playlists in"},{icon:"\ud83d\uddbc\ufe0f",feature:"Upload an image and extract related emotions and objects based on its dominant colours"},{icon:"\ud83c\udfbc",feature:"Curate a Spotify playlist based on information extracted from your image"}],technicalDescription:["Formulated a k-means++ clustering algorithm that identifies dominant colours in an image by iteratively updating centroid positions until convergence in <2 seconds.","Developed GET and POST requests for the Colour API and DataMuse API and parsed JSON responses for data retrieval and manipulation.","Built API endpoints to the Spotify Web API for users to retrieve songs and modify and save playlists.","Applied OOP concepts and encapsulation using the MVC framework for efficient data processing, seamless user interactions, and dynamic updates."],awards:[],links:[{type:"github",title:"Github",url:"https://github.com/samanthavmac/SonicMusic"}],numImages:3},{key:4,name:"Labyrinth Game",path:"labyrinth-game",tagline:"Strategically navigate a shifting maze to collect all your treasures",techStack:"Java",usageDescription:"A fun spin on the classic Labyrinth board game: Play with new modifications like a treasure pathfinder and animated game board.",keyFeatures:[{icon:"\ud83c\udccf",feature:"Distribute treasure cards to 2-4 players"},{icon:"\ud83d\udcb8",feature:"Collect your treasures first to win!"},{icon:"\ud83d\udd04",feature:"Alter walkable paths on the board by inserting tiles"},{icon:"\ud83d\udd26",feature:"Strategize with the Pathfinder to highlight the most efficient route to your treasures"}],technicalDescription:["Designed and implemented a recursive pathfinding algorithm to identify the shortest path to collectable treasures and the longest overall path.","Engineered a dynamic game board, featuring tile insertion for board shifting, a  score system, and animated player movements.","Tested edge cases and devised solutions to ensure smooth gameplay.","Created project management tools including a Gantt chart and schedule to effectively plan and manage project goals and resources."],awards:[],links:[{type:"github",title:"Github",url:"https://github.com/samanthavmac/LabyrinthGame"}],numImages:3},{key:5,name:"Nightlight",path:"nightlight",tagline:"Informing women+ about suspicious activity on public transit",techStack:"HTML, CSS, JS",usageDescription:"Sexual harrassment and assault on public transit is an unfortunate reality for many. Nightlight leverages user engagement to alert commuters about unsafe incidents.",keyFeatures:[{icon:"\ud83d\ude87",feature:"Report and notify the Nightlight community about unsafe incidents on the TTC"},{icon:"\ud83d\udcf0",feature:"Read articles about tips for staying safe"},{icon:"\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1",feature:"Post to the Community Forum to engage with the Nightlight community"}],technicalDescription:["Built a responsive user interface using the TailwindCSS framework for users to report and view incident reports on an interactive TTC map.","Engaged in the engineering design process by conducting usability interviews with key stakeholders, designing high-fidelity prototypes in Figma, and negotiating technical requirements."],awards:["\ud83e\udd47\xa01st Place Connectivity Hack, sponsored by Hudson River Trading @ University of Waterloo Technova Hackathon","\ud83e\udd47\xa0People\u2019s Choice Award @ University of Waterloo Technova Hackathon"],links:[{type:"github",title:"Github",url:"https://github.com/samanthavmac/nightlight"},{type:"devpost",title:"Devpost",url:"https://devpost.com/software/nightlight-64g8wc"}],numImages:3},{key:6,name:"Eye Hope Canada",path:"eye-hope-canada",tagline:"Web development for non-profits",techStack:"HTML, CSS, JS",usageDescription:"Eye Hope Canada is a student-led organization that supports families affected by childhood cancer.",keyFeatures:[],technicalDescription:["Built a responsive grid design and implemented animations and interactive popups to enhance user engagement and visual appeal.","Led a team of designers and web developers in prototyping on Figma and programming the website within two weeks, while establishing protocols for ongoing website maintenance."],awards:[],links:[{type:"website",title:"Website",url:"https://eyehopecanada.com"}],numImages:2},{key:7,name:"Animal Crossing x Super Mario",path:"animal-crossing",tagline:"Top the leaderboards by guiding your Animal Crossing character through custom maps.",techStack:"Java",usageDescription:"Where Animal Crossing meets Super Mario Bros! Jump, run, and teleport through the Animal Crossing world.",keyFeatures:[],technicalDescription:["Implemented keyboard listeners and smooth player animations for movements like walking, jumping, and teleportation.","Designed and implemented custom maps featuring interactive elements like walls, jumping platforms, and portals.","Integrated character selection, account creation, game progress saving and leaderboard functionality."],awards:[],links:[{type:"github",title:"Github",url:"https://github.com/samanthavmac/AnimalCrossingXSuperMario"}],numImages:4},{key:8,name:"Object-Oriented Programming Curriculum",path:"oop-module",tagline:"Learn about Object-Oriented programming",techStack:"Java",usageDescription:"New to Java, Python, or C++? This user-friendly course introduces object-oriented programming through engaging modules and games.",keyFeatures:[],technicalDescription:["Researched and deconstructed OOP concepts such as inheritance, polymorphism, and encapsulation to develop comprehensive learning modules.","Created engaging and interactive activities that reinforce OOP principles, such as a matching game and quiz with scoring and feedback on areas of improvement for students."],awards:[],links:[{type:"github",title:"Github",url:"https://github.com/samanthavmac/OOPModule"}],numImages:5}];a(32);var g=function(e){return i.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4 mb-4"},i.a.createElement("div",{className:"card border-0 bg-transparent",style:{width:"18rem"}},i.a.createElement("div",{className:"card-body software-project-condsened-body vertical-stack"},i.a.createElement("div",{className:"software-project-icon-container"},i.a.createElement("img",{className:"software-project-icon",src:"images/software-projects/".concat(e.path,"-condensed.png"),alt:"".concat(e.name," icon")}),i.a.createElement("a",{onClick:()=>{e.onClick(e.id)}},i.a.createElement("img",{className:"play-button",src:"images/icons/play-button.png"}))),i.a.createElement("h5",{className:"name"},e.name),i.a.createElement("p",{className:"tagline"},e.tagline),i.a.createElement("p",{className:"tech-stack"},e.techStack))))},y=a(44);a(75),a(38);var f=function(e){let{path:t,numImages:a}=e;const n=Array.from({length:a},(e,t)=>t+1);return i.a.createElement(y.Carousel,{autoPlay:!0,swipable:!0,width:230,infiniteLoop:!0,interval:1e3,showThumbs:!0,showStatus:!1,thumbWidth:40,showIndicators:!0,showArrows:!1,margin:0},n.map(e=>i.a.createElement("div",{key:e},i.a.createElement("img",{src:"images/software-projects/".concat(t,"-").concat(e,".png"),alt:"Slide ".concat(e)}))))};var w=function(e){let{project:t,onClose:a}=e;return i.a.createElement("div",{className:"software-project-expanded p-0 m-0"},i.a.createElement("button",{className:"exit-button",onClick:a},"Close"),i.a.createElement("div",{className:"card-body bg-transparent m-0"},i.a.createElement("div",{className:"modal-text"},i.a.createElement("div",{className:"modal-header"},i.a.createElement(f,{className:"carousel",path:t.path,numImages:t.numImages}),i.a.createElement("div",{className:"modal-header-text vertical-stack"},i.a.createElement("p",{className:"tech-stack"},t.techStack),i.a.createElement("h2",{className:"name-expanded"},t.name),i.a.createElement("h6",{className:"usage-description"},t.usageDescription),i.a.createElement("div",{className:"links"},i.a.createElement("div",{className:"horizontal-stack"},t.links.map((e,t)=>i.a.createElement("button",{className:"link-button",key:t,href:e.url},i.a.createElement("img",{src:"images/icons/".concat(e.type,"-icon.png"),alt:"".concat(e.type," icon")}),i.a.createElement("p",null,e.title))))))),t.awards.length>0&&i.a.createElement("div",{className:"awards"},i.a.createElement("ul",null,t.awards.map((e,t)=>i.a.createElement("li",{key:t},e)))),t.keyFeatures.length>0&&i.a.createElement("div",{className:"key-features"},i.a.createElement("h3",null,"Key Features"),i.a.createElement("ul",null,t.keyFeatures.map((e,t)=>i.a.createElement("li",{key:t},i.a.createElement("span",{className:"feature-icon"},e.icon),i.a.createElement("span",{className:"feature-text"},e.feature))))),t.technicalDescription.length>0&&i.a.createElement("div",null,i.a.createElement("h2",null,"Technical Breakdown"),i.a.createElement("ul",{className:"technical-description"},t.technicalDescription.map((e,t)=>i.a.createElement("li",{key:t},e)))))))};var v=function(){const[e,t]=Object(n.useState)(null),a=e=>{t(e),document.body.classList.add("modal-open")};return i.a.createElement("section",{id:"projects"},i.a.createElement("h2",null,"Made by Samantha Mac"),i.a.createElement("div",{className:"container projects px-0"},i.a.createElement("div",{className:"row"},h.map(e=>i.a.createElement("div",{key:e.key,className:"col-sm-12 col-md-6 col-lg-4 mb-4"},i.a.createElement(g,{id:e.key,name:e.name,path:e.path,tagline:e.tagline,techStack:e.techStack,iconURL:e.iconURL,onClick:a})))),e&&i.a.createElement("div",{className:"modal-overlay"},i.a.createElement("div",{className:"modal-content"},i.a.createElement(w,{project:h.find(t=>t.key===e),onClose:()=>{t(null),console.log("Clicked"),document.body.classList.remove("modal-open")}})))))};var b=[{key:1,name:"OliveOne",path:"oliveone",tagline:"The all-in-one grocery app",description:"OliveOne is a mobile app where users can view grocery store products across multiple stores and their real-time prices, availability, and product information.",awards:["\ud83e\udd47 Markham Pitch Your Biz Champion, 2021","\ud83e\udd47 iStartUp Entreprenurship Competition Champion, 2021"],links:[{type:"notion",title:"Case Study",url:"https://samantha-mac.notion.site/OliveOne-Reimagined-Case-Study-8861dba9dfe7475581d30a35352c9bb0?pvs=25"},{type:"figma",title:"Prototype",url:"https://www.figma.com/design/j27R3BJvGPMm1uzbnHTHzy/OliveOne-Reimagined--Prototype?node-id=0-1&t=ud2Dc6G7JrMfyOAC-1"}],embedLinks:[{type:"file",url:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2Fj27R3BJvGPMm1uzbnHTHzy%2FOliveOne-Reimagined--Prototype%3Fnode-id%3D0-1%26t%3DIi8XBAMAGLfreR88-1"},{type:"prototype",url:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fj27R3BJvGPMm1uzbnHTHzy%2FOliveOne-Reimagined--Prototype%3Fpage-id%3D0%253A1%26node-id%3D25-43%26viewport%3D389%252C324%252C0.17%26t%3Dqb0dEIvCAp4GDKZK-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D25%253A43%26share%3D1"}]},{key:2,name:"Photon",path:"photon",tagline:"Machine learning for photography education",description:"Photon is a mobile app that provides users with real-time tips and feedback on how to take photos that match one\u2019s desired visual aesthetic.",iconURL:"images/filler-icon.png",awards:["\ud83e\udd47 Independent Business Plan Champion @ DECA Provincials, 2023"],links:[{type:"figma",title:"Prototype",url:"https://www.figma.com/design/m0zjUjRxKtaWqt1mp4Vp5L/Photon-Prototype?node-id=0-1&t=MzHFkIQTvF4APIpp-1"}],embedLinks:[{type:"file",url:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2Fm0zjUjRxKtaWqt1mp4Vp5L%2FPhoton-Prototype%3Fnode-id%3D0-1%26t%3DMzHFkIQTvF4APIpp-1"},{type:"prototype",url:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fm0zjUjRxKtaWqt1mp4Vp5L%2FPhoton-Prototype%3Fpage-id%3D0%253A1%26node-id%3D34-2%26viewport%3D35%252C361%252C0.21%26t%3Dufkzp0HSu1wmpkke-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D34%253A2"}]},{key:3,name:"Cocycle",path:"cocycle",tagline:"Reducing furniture waste",description:"Cocycle is an app that pairs freelancers with environmentally-conscious users to upcycle old furniture and clothing.",iconURL:"images/filler-icon.png",awards:["\ud83e\udd47 EM Girls Entrepreneurial Competition Champion, 2022"],links:[{type:"figma",title:"Prototype",url:"https://www.figma.com/design/kckC13PRVRYpV8kFc0CNCM/Cocycle---Prototype?node-id=0-1&t=sko41QzM6YNH3Df1-1"}],embedLinks:[{type:"file",url:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FkckC13PRVRYpV8kFc0CNCM%2FCocycle---Prototype%3Fnode-id%3D0-1%26t%3D9m7ojwjBMyZJXDrV-1"},{type:"prototype",url:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FkckC13PRVRYpV8kFc0CNCM%2FCocycle---Prototype%3Fpage-id%3D0%253A1%26node-id%3D46-10%26viewport%3D186%252C412%252C0.17%26t%3DoedvUQAp5ajMG81i-1%26scaling%3Dscale-down%26content-scaling%3Dfixed"}]},{key:4,name:"WePlate",path:"weplate",tagline:"Creating smart menu plans for students",description:"As a product designer at WePlate, I designed low- and high-fidelity prototypes of the mobile app for students and the website for cafeteria administrators.",iconURL:"images/filler-icon.png",awards:[],links:[],embedLinks:[]},{key:5,name:"Chatime Reimagined",path:"chatime-reimagined",tagline:"A redesign of the the Chatime app",description:"As a bubble-tea-lover, I use the Chatime Societea app frequently. In my redesign, I tackled the interface and user experience flaws I noticed through my personal use.",iconURL:"images/filler-icon.png",awards:[],links:[{type:"notion",title:"Case Study",url:"https://www.notion.so/samantha-mac/Chatime-Society-Case-Study-d55d200d90b84337a3027396c5fe6368?pvs=https://samantha-mac.notion.site/Chatime-Society-Case-Study-d55d200d90b84337a3027396c5fe63684"},{type:"figma",title:"Prototype",url:"https://www.figma.com/design/dGPG8hvaxn8u6Rs0Mv8E5H/Chatime-Societea--Final-Prototype?node-id=0-1&t=HWBt2MZOgNJhPkAv-1"}],embedLinks:[{type:"file",url:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FdGPG8hvaxn8u6Rs0Mv8E5H%2FChatime-Societea--Final-Prototype%3Fnode-id%3D0-1%26t%3DHWBt2MZOgNJhPkAv-1"},{type:"prototype",url:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FdGPG8hvaxn8u6Rs0Mv8E5H%2FChatime-Societea--Final-Prototype%3Fpage-id%3D0%253A1%26node-id%3D97-0%26viewport%3D659%252C328%252C0.1%26t%3DeYbzyjOChiHeflWe-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D97%253A0"}]}];a(39);var k=function(e){return i.a.createElement("div",{className:"design"},i.a.createElement("div",{className:"design-left-col"},i.a.createElement("img",{src:"images/design-projects/".concat(e.path,".png"),className:"design-icon",alt:"".concat(e.name," icon")}),i.a.createElement("div",{className:"design-left-text"},i.a.createElement("h5",{className:"design-name"},e.name),i.a.createElement("p1",{className:"design-tagline"},e.tagline))),i.a.createElement("div",{className:"design-right-col"},i.a.createElement("button",{className:"view-more-button",onClick:()=>{e.onClick(e.id)}},"View More")))};var E=function(e){let{url:t,width:a="800",height:n="450"}=e;return i.a.createElement("iframe",{style:{border:"1px solid rgba(0, 0, 0, 0.1)"},width:a,height:n,src:t,allowFullScreen:!0})};var C=function(e){let{project:t,onClose:a}=e;return i.a.createElement("div",{className:"design-project-expanded p-0 m-0"},i.a.createElement("button",{className:"exit-button",onClick:a},"Close"),i.a.createElement("div",{className:"card-body bg-transparent m-0"},i.a.createElement("div",{className:"modal-text"},i.a.createElement("h1",null,t.name),i.a.createElement("h6",null,t.description),i.a.createElement("div",{className:"links"},i.a.createElement("div",{className:"horizontal-stack"},t.links.map((e,t)=>i.a.createElement("button",{className:"link-button",key:t,href:e.url},i.a.createElement("img",{src:"images/icons/".concat(e.type,"-icon.png"),alt:"".concat(e.type," icon")}),i.a.createElement("p",null,e.title))))),t.awards.length>0&&i.a.createElement("div",{className:"awards"},i.a.createElement("ul",null,t.awards.map((e,t)=>i.a.createElement("li",{key:t},e)))),i.a.createElement("div",null,t.embedLinks.map((e,t)=>i.a.createElement(E,{key:t,url:e.url,width:"800",height:"450"}))))))};var P=function(){const[e,t]=Object(n.useState)(null),a=e=>{t(e),document.body.classList.add("modal-open")};return i.a.createElement("section",{id:"design"},i.a.createElement("h2",null,"More of design"),i.a.createElement("div",null,b.map(e=>i.a.createElement(k,{id:e.key,name:e.name,path:e.path,tagline:e.tagline,description:e.description,awards:e.awards,caseStudyURL:e.caseStudyURL,onClick:a}))),e&&i.a.createElement("div",{className:"modal-overlay"},i.a.createElement("div",{className:"modal-content"},i.a.createElement(C,{project:b.find(t=>t.key===e),onClose:()=>{t(null),document.body.classList.remove("modal-open")}}))))},S=a(45),D=a.n(S);a(88);var F=[{key:1,position:"Full-Stack Developer Intern",company:"Haven Safe",path:"haven-safe",range:"Jul 2023 - Present",links:[{type:"website",title:"Website",url:"https://havensafe.co"},{type:"instagram",title:"Instagram",url:"https://www.instagram.com/havensafeco/"},{type:"apple",title:"App Store",url:"https://apps.apple.com/ca/app/haven-safety-alert-locator/id1569921454"},{type:"android",title:"Play Store",url:"https://play.google.com/store/apps/details?id=com.havensafe.havenandroid"}]},{key:2,position:"Legal & Marketing Assistant",company:"Leanne Goldstein Law",path:"leanne-goldstein-law",range:"Jul 2022 - Present",links:[]},{key:3,position:"Product Developer",company:"WePlate",path:"weplate",range:"Feb 2022 - Jul 2022",links:[]},{key:4,position:"Co-Director",company:"Ignition Hacks",path:"ignition-hacks",range:"Feb 2023 - Jun 2024",links:[{type:"website",title:"Website",url:"https://ignitionhacks.org"},{type:"instagram",title:"Instagram",url:"https://www.instagram.com/ignitionhacks/"},{type:"cp24",title:"CP24",url:"https://www.cp24.com/video?clipId=2752066"},{type:"businesswire",title:"Business Wire",url:"https://www.businesswire.com/news/home/20230828687532/en/Humi-Supports-Canada%E2%80%99s-Next-Generation-of-Tech-Talent-at-Ignition-Hacks-2023"}]},{key:5,position:"Co-Director",company:"Eye Hope Canada",path:"eye-hope-canada",range:"Jul 2019 - Jan 2024",links:[{type:"website",title:"Website",url:"https://eyehopecanada.com"}]},{key:6,position:"Creative Director",company:"LEAP Canada",path:"leap-canada",range:"Jul 2021 - Jun 2023",links:[{type:"website",title:"Website",url:"https://leapcanada.org"},{type:"instagram",title:"Instagram",url:"https://www.instagram.com/leap.canada/"}]},{key:7,position:"Communications Director",company:"Superposition Toronto",path:"superposition-toronto",range:"Aug 2020 - May 2022",links:[{type:"website",title:"Website",url:"https://superpositiontoronto.com"},{type:"instagram",title:"Instagram",url:"https://www.instagram.com/superpositiontoronto/"}]}];a(42);var N=function(e){return i.a.createElement("div",{className:"employment vertical-stack"},i.a.createElement("img",{className:"employment-icon",src:"images/experiences/".concat(e.path,".png")}),i.a.createElement("p2",null,e.position),i.a.createElement("p1",null,e.company),i.a.createElement("p1",null,e.range),i.a.createElement("div",{className:"employment-links"},e.links.map((e,t)=>i.a.createElement("a",{key:t,href:e.url,target:"_blank"},i.a.createElement("img",{className:"employment-link-icon",src:"images/icons/".concat(e.type,"-icon.png")})))))};var A=function(){return i.a.createElement("section",{id:"experiences"},i.a.createElement("h2",null,"Recent activity"),i.a.createElement(D.a,{responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},infinite:!0,keyBoardControl:!1,showDots:!1,arrows:!0,removeArrowOnDeviceType:["tablet","mobile"],autoPlay:!0,transitionDuration:300},F.map(e=>i.a.createElement("div",{key:e.key,className:"col"},i.a.createElement(N,{id:e.key,position:e.position,company:e.company,path:e.path,range:e.range,links:e.links})))))};a(89);var I=function(){return i.a.createElement("section",{id:"footer"},i.a.createElement("div",{className:"footer vertical-stack"},i.a.createElement("p2",null,"Thanks for stopping by!"),i.a.createElement("p1",null,"Contact samanthavaleriemac [@] gmail.com for freelance web development or graphic design requests.")))},R=a(49),x=a(109),O=a(110),j=a(46),T=a.n(j);var M=function(){const[e,t]=Object(n.useState)(!0),a=Object(R.a)({palette:{mode:e?"dark":"light",primary:{main:getComputedStyle(document.documentElement).getPropertyValue("--primary").trim()},background:{default:getComputedStyle(document.documentElement).getPropertyValue("--background").trim(),paper:getComputedStyle(document.documentElement).getPropertyValue("--background").trim()},text:{primary:getComputedStyle(document.documentElement).getPropertyValue("--text").trim()}},typography:{fontFamily:"Satoshi, Arial, sans-serif"}});return Object(n.useEffect)(()=>{(e=>{const t=document.documentElement;"dark"===e?(t.style.setProperty("--primary","#2ecc71"),t.style.setProperty("--secondary","#D9FDD6"),t.style.setProperty("--card","#212121"),t.style.setProperty("--card-secondary","#424242"),t.style.setProperty("--background","linear-gradient(45deg, #192019, #323232, #192019, #545454)"),t.style.setProperty("--text","#e8e8e8"),t.style.setProperty("--border","#424242"),t.style.setProperty("--nav-background","#424242"),t.style.setProperty("--light-border","#ffffff")):(t.style.setProperty("--primary","#2ecc71"),t.style.setProperty("--secondary","#494d4a"),t.style.setProperty("--card","#f0f0f0"),t.style.setProperty("--card-secondary","#dbdbdb"),t.style.setProperty("--background","linear-gradient(-45deg, white, #e0ffed, white, #bbe3b8)"),t.style.setProperty("--text","#40403f"),t.style.setProperty("--border","#b3b3b3"),t.style.setProperty("--nav-background","#e9f0e9"),t.style.setProperty("--light-border","#828281"))})(e?"dark":"light")},[e]),i.a.createElement(x.a,{theme:a},i.a.createElement(O.a,null),i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"switch-container"},i.a.createElement("img",{src:"/images/icons/sun-icon.png",alt:"Sun Icon"}),i.a.createElement(T.a,{checked:e,onChange:()=>{t(!e)},onColor:"#2ecc71",onHandleColor:"#ffffff",offHandleColor:"#ffffff",uncheckedIcon:!1,checkedIcon:!1,height:30,width:60,handleDiameter:30}),i.a.createElement("img",{src:"/images/icons/moon-icon.png",alt:"Moon Icon"})),i.a.createElement(s,null),i.a.createElement(c,null),i.a.createElement(u,null),i.a.createElement(v,null),i.a.createElement(P,null),i.a.createElement(A,null),i.a.createElement(I,null)))};var L=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,113)).then(t=>{let{getCLS:a,getFID:n,getFCP:i,getLCP:o,getTTFB:r}=t;a(e),n(e),i(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(M,null))),L()}},[[56,1,2]]]);
//# sourceMappingURL=main.6a33583c.chunk.js.map