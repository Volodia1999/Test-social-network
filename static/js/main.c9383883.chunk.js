(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){},132:function(e,t,a){e.exports=a.p+"static/media/66363622_90839018.94586fa7.mp3"},133:function(e,t,a){e.exports=a.p+"static/media/brati-chsvv.4d6ae64e.mp3"},134:function(e,t,a){e.exports=a.p+"static/media/brati-chsvv-kolyadka-1.3d442e3d.mp3"},135:function(e,t,a){e.exports=a.p+"static/media/brati-chsvv-r-zdvo-zoreyu-yasnoyu-s-ya.d7e43d02.mp3"},136:function(e,t,a){e.exports=a.p+"static/media/brati-chsvv-svyat-bog-narodivsya.4abb21c8.mp3"},137:function(e,t,a){e.exports=a.p+"static/media/brati-chsvv-svyatiy-mikolay.2779f443.mp3"},138:function(e,t,a){e.exports=a.p+"static/media/brati-monahi-chsvv-stariy-rik.ab9adbe6.mp3"},139:function(e,t,a){e.exports=a.p+"static/media/natalka-karpa-kolyadki--tri-car.c8c2dedb.mp3"},140:function(e,t,a){e.exports=a.p+"static/media/ukranski_koljadki_-_nehaj_rizdvo_u_vashu_hatu_(zf.fm).4b09e90d.mp3"},141:function(e,t,a){e.exports=a.p+"static/media/\u041a\u043e\u043b\u044f\u0434\u043a\u0438 \u0440\u0438\u043d\u0430 \u0424\u0435\u0434\u0438\u0448\u0438\u043d \u2013 \u0423\u043a\u0440\u0430\u0457\u043d\u0430 \u043a\u043e\u043b\u044f\u0434\u0443\u0454.bba3e7c2.mp3"},142:function(e,t,a){e.exports=a.p+"static/media/brati-monahi-chsvv-bozhe-m-y-bozhe.dc27a61f.mp3"},143:function(e,t,a){e.exports=a.p+"static/media/brati-monahi-chsvv-gorobchik.761f9c0e.mp3"},144:function(e,t,a){e.exports=a.p+"static/media/brati-monahi-chsvv-hristiyanin.0dc646ac.mp3"},145:function(e,t,a){e.exports=a.p+"static/media/brati-monahi-chsvv-lyubov-sila.a28ae580.mp3"},146:function(e,t,a){e.exports=a.p+"static/media/irina-fedishin-moja-koljada.16b67a26.mp3"},147:function(e,t,a){e.exports=a.p+"static/media/kolyadki-na-dvor-r-zdvo.bc97e407.mp3"},148:function(e,t,a){e.exports=a.p+"static/media/rina-fedishin-kolyadki-hay-sus-male-ditya-nove-2016.7f59a132.mp3"},175:function(e,t,a){e.exports=a(318)},180:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},190:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){},309:function(e,t,a){},317:function(e,t,a){},318:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(35),o=a.n(l),s=(a(180),a(181),a(182),a(27)),i=a(28),u=a(30),m=a(29),d=a(31),p=(a(183),a(38)),f=(a(184),a(17)),g=a(13),h=Object(g.b)(function(e){return{sidebar:e.sidebar}},{})(function(e){return c.a.createElement("div",{className:"bg-warning point-menu col-md-2 col-4 mt-1 mr-1"},c.a.createElement("ul",{className:"list pl-0 ml-3"},e.sidebar.menu_profile.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(f.b,{to:e.url,activeClassName:"active",className:"color_url"},e.name_menu))})))}),E=h,b=(a(190),a(319)),v=function(e){return c.a.createElement("div",{className:"bg-success header d-flex"},c.a.createElement("img",{src:"https://cdn3.iconfinder.com/data/icons/picons-social/57/56-apple-512.png",alt:"logo",width:80}),c.a.createElement("div",{className:"name-header"},"Social network"),c.a.createElement("div",{className:"text-right login align-self-center mr-2"},e.auth.isAuth?c.a.createElement("div",null,c.a.createElement(f.b,{to:"/profile",className:"font-weight-normal"},e.auth.login),c.a.createElement("button",{className:"bg-transparent border-0 font-weight-bold",onClick:e.logout},e.isPendingLogOut?c.a.createElement(b.a,{color:"white",size:"sm"}):"Log out")):c.a.createElement(f.b,{to:"/login"},"Login")))},y=a(10),O=a.n(y),w=a(18),P=a(43),N=a(130),S=N.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"ebd1ca42-14fd-4d10-bafa-1eaa608ba0f3"}}),j=function(e,t){return S.get("users?page=".concat(e,"&count=").concat(t))},x=function(e,t){return S.get("users?page=".concat(e,"&count=").concat(t))},_=function(e){return S.post("follow/".concat(e))},k=function(e){return S.delete("follow/".concat(e))},U=function(e){return S.get("profile/".concat(e))},C=function(e){return S.get("profile/status/".concat(e))},I=function(e){return S.put("profile/status",{status:e})},L=function(e){var t=new FormData;return t.append("image",e),S.put("profile/photo",t)},T=function(){return S.get("security/get-captcha-url")},A=function(){return S.get("auth/me")},D=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;return S.post("auth/login",{email:e,password:t,rememberMe:a,captchaUrl:n})},M=function(){return S.delete("auth/login")},G=function(e){return{type:"GET_CAPTCHA_URL_SUCCESS",captchaUrl:e}},R=function(e){return{type:"LOGIN_PENDING",payload:e}},F=function(e){return{type:"LOG_OUT_PENDING",payload:e}},z=function(e,t,a,n){return{type:"SET_AUTH_USER",payload:{userId:e,login:t,email:a,isAuth:n}}},W=function(){return function(){var e=Object(w.a)(O.a.mark(function e(t){var a,n,r,c,l;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,r=n.id,c=n.login,l=n.email,t(z(r,c,l,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},H=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getAuthUser()}},{key:"render",value:function(){return c.a.createElement(v,this.props)}}]),t}(c.a.Component),B=Object(g.b)(function(e){return{auth:e.auth,loggedUserId:e.auth.userId,isPendingLogOut:e.auth.isPendingLogOut}},{getAuthUser:W,logout:function(){return function(){var e=Object(w.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(F(!0)),e.next=3,M();case 3:0===e.sent.data.resultCode&&(t(z(null,null,null,!1)),t(F(!1)));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(H),Y=a(9),$=function(e){return{type:"PROFILE_SUCCESS",payload:e}},q=function(e){return{type:"SET_USERS_STATUS",payload:e}},J=function(e){return function(){var t=Object(w.a)(O.a.mark(function t(a){return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a($(!0)),t.next=3,I(e);case 3:0===t.sent.data.resultCode&&(a(q(e)),a($(!1)));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},K=function(e){return function(){var t=Object(w.a)(O.a.mark(function t(a){var n;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a($(!0)),t.next=3,L(e);case 3:0===(n=t.sent).data.resultCode&&(a({type:"UPDATE_PHOTO_SUCCESS",payload:n.data.data.photos}),a($(!1)));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},Q=a(32),V=(a(209),a(124)),Z=a(125),X=function(e){return e||"number"===typeof e?void 0:"Field is required"},ee=function(e){return function(t){return t&&t.length>e?"Symbols are more than ".concat(e,", write less"):void 0}},te=a(41),ae=(a(210),a(320)),ne=function(e){var t=e.input,a=e.meta,n=Object(te.a)(e,["input","meta"]),r=a.touched&&a.error;return c.a.createElement("div",null,c.a.createElement("div",{className:r&&"error"},c.a.createElement("textarea",Object.assign({},t,n))),r&&c.a.createElement("span",{className:"ml-2 text-danger"},a.error))},re=function(e){var t=e.input,a=e.meta,n=Object(te.a)(e,["input","meta"]),r=a.touched&&a.error;return c.a.createElement("div",{className:"m-auto w-100"},c.a.createElement("div",{className:r?"error":""},c.a.createElement(ae.a,Object.assign({},t,n)),c.a.createElement("div",{className:"mt-1"},r&&c.a.createElement("span",{className:"ml-2 text-danger"},a.error))))},ce=c.a.memo(function(e){var t=e.post;return c.a.createElement("div",{className:"mt-2"},c.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVAtTs16Um_4zfeZFewmuzTWDOCTwyXhntHJOjFd66FpwGKkYoQ&s",alt:"avatar",width:32,height:32,className:"rounded-circle mr-1"}),c.a.createElement("span",null,t.message),c.a.createElement("p",{className:"ml-1"},c.a.createElement("i",{className:"fa fa-thumbs-up"}),t.count_like))}),le=function(e){var t=Object(r.useState)(!1),a=Object(Q.a)(t,2),n=a[0],l=a[1],o=Object(r.useState)(e.profilePage.status),s=Object(Q.a)(o,2),i=s[0],u=s[1],m=e.profilePage,d=m.profile,p=m.posts,f=m.status;Object(r.useEffect)(function(){u(f)},[f]);var g=function(){l(!1),e.updateUserStatus(i)};if(!d||e.loading)return c.a.createElement(b.a,{color:"primary",className:"m-auto"});var h=e.isOwner&&"cursor-pointer";return c.a.createElement("div",{className:"bg-info d-flex flex-column w-100 mt-1 dialog"},c.a.createElement("div",{className:"d-flex mt-2"},c.a.createElement("div",null,c.a.createElement("label",null,e.isOwner&&c.a.createElement("input",{accept:"image/jpeg, image/png",type:"file",autoComplete:"off",onChange:function(t){t.target.files.length&&e.updateProfilePhoto(t.target.files[0])},style:{display:"none"}}),c.a.createElement("img",{src:d.photos.large||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfm4q4PH4tj38ETy9w66xSAhhclujI9c4MpJxtFyOD9h9vLG2&s",alt:"avatar",className:"rounded-circle align-self-baseline ".concat(h),width:120}))),c.a.createElement("div",{className:"ml-2"},c.a.createElement("p",null,c.a.createElement("b",null,"Name"),": ",d.fullName),c.a.createElement("p",null,c.a.createElement("b",null,"About Me"),": ",d.aboutMe||"think_@about_it:)"),!n&&c.a.createElement("p",{onDoubleClick:e.isOwner&&function(){l(!0)}},c.a.createElement("b",null,"Status"),": ",c.a.createElement("span",{className:h},f||"-----"),c.a.createElement("span",null,c.a.createElement("i",null,e.isOwner&&" (double click for change)"))),n&&c.a.createElement("input",{onBlur:g,onChange:function(e){u(e.currentTarget.value)},value:i,onKeyPress:function(e){13===e.charCode&&g()},autoFocus:!0}),e.isOwner&&c.a.createElement("div",null,c.a.createElement("button",{className:"bg-transparent border-0 font-weight-bold"},"Edit Profile")))),c.a.createElement("p",{className:"text-center font-weight-bolder"},"My posts"),c.a.createElement(se,{onSubmit:function(t){e.addPost(t.profileMessage)}}),p.map(function(e){return c.a.createElement(ce,{post:e,key:e.id})}))},oe=ee(50),se=Object(Z.a)({form:"profileMessage"})(function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit,className:"mx-3"},c.a.createElement(V.a,{component:ne,name:"profileMessage",placeholder:"write your post...",validate:[X,oe],className:"post w-100 bg-transparent"}),c.a.createElement("button",{className:"float-right mt-1 btn btn-danger btn-sm"},"Add post"))}),ie=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.loggedUser)||this.props.history.push("/login"),this.props.getProfileUsers(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId===e.match.params.userId&&this.props.profilePhoto===e.profilePhoto||this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement(le,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,addPost:this.props.addPost,getStatus:this.props.getStatus,updateUserStatus:this.props.updateUserStatus,updateProfilePhoto:this.props.updateProfilePhoto}))}}]),t}(c.a.PureComponent),ue=Object(Y.d)(p.g,Object(g.b)(function(e){return{profilePage:e.profilePage,isAuth:e.auth.isAuth,loggedUser:e.auth.userId,loading:e.profilePage.loading,profilePhoto:e.profilePage.profilePhoto}},{addPost:function(e){return{type:"ADD_POST",newPostText:e}},getStatus:q,getProfileUsers:function(e){return function(){var t=Object(w.a)(O.a.mark(function t(a){var n;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a($(!0)),t.next=3,U(e);case 3:n=t.sent,a({type:"SET_PROFILE_USERS",payload:n.data}),a($(!1));case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},getUserStatus:function(e){return function(){var t=Object(w.a)(O.a.mark(function t(a){var n;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a($(!0)),t.next=3,C(e);case 3:n=t.sent,a(q(n.data)),a($(!1));case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:J,updateProfilePhoto:K}))(ie),me=(a(309),function(e){return c.a.createElement("div",{className:"bg-info w-100 mt-1 dialog"},c.a.createElement("p",{className:"font-weight-bold text-center"},"Dialogs"),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:"col-4"},e.dialogsPage.dialogs.map(function(e){return c.a.createElement("div",{key:e.id},c.a.createElement(f.b,{to:e.url,className:"ml-2 color_name_author text-decoration-none",activeClassName:"active_name"},e.name_author))})),c.a.createElement("div",{className:"mt-1"},e.dialogsPage.messages.map(function(t){return c.a.createElement("div",{key:t.id},e.dialogId===t.urlDialog?c.a.createElement("p",null,t.message):void 0)}))),c.a.createElement(de,{onSubmit:function(t){e.addMessageDialog(t.newBodyMessage)}}))}),de=Object(Z.a)({form:"newBodyMessage"})(function(e){var t=e.handleSubmit;return c.a.createElement("form",{onSubmit:t,className:"d-flex justify-content-center flex-wrap mt-4 mb-1"},c.a.createElement(V.a,{component:"textarea",name:"newBodyMessage",placeholder:"Write your message...",className:"bg-transparent post"}),c.a.createElement("button",{className:"ml-2 btn btn-danger align-self-end "},"Send message"))}),pe=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.match.params.dialogId;return c.a.createElement(me,{dialogsPage:this.props.dialogsPage,dialogId:e,addMessageDialog:this.props.addMessageDialog})}}]),t}(c.a.PureComponent),fe=Object(Y.d)(p.g,Object(g.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{addMessageDialog:function(t){e({type:"ADD_MESSAGE",newMessageText:t})}}}))(pe),ge=function(e){return{type:"FOLLOW",payload:e}},he=function(e){return{type:"UNFOLLOW",payload:e}},Ee=function(e){return{type:"SET_USERS",payload:e}},be=function(e){return{type:"IS_LOADING",payload:e}},ve=function(e,t){return{type:"FOLLOWING_IN_PROGRESS",following:e,userId:t}},ye=a(321),Oe=(a(120),function(e){for(var t=e.totalUsers,a=e.countUsers,n=e.currentPage,l=e.changePage,o=e.isLoading,s=e.portionPage,i=void 0===s?10:s,u=Math.ceil(t/a),m=[],d=1;d<=u;d++)m.push(d);var p=Math.ceil(u/i),f=Object(r.useState)(1),g=Object(Q.a)(f,2),h=g[0],E=g[1],v=(h-1)*i+1,y=h*i;return c.a.createElement("div",{className:"d-flex justify-content-center mt-2"},h>1&&c.a.createElement("button",{className:"bg-transparent border-0",onClick:function(){return E(h-1)}},"\ud83e\udc44"),m.filter(function(e){return e>=v&&e<=y}).map(function(e){return c.a.createElement("div",{key:e.id},c.a.createElement("span",{className:n===e?"cursor-pointer font-weight-bold mr-2":"mr-2 cursor-pointer",onClick:function(){l(e)}},n===e&&o?c.a.createElement(b.a,{size:"sm"}):c.a.createElement("span",null,e)))}),p>h&&c.a.createElement("button",{className:"bg-transparent border-0",onClick:function(){return E(h+1)}},"\ud83e\udc46"))}),we=function(e){var t=e.user,a=Object(te.a)(e,["user"]);return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-3 col-md-5 col-sm-12 text-center"},c.a.createElement(f.b,{to:"/profile/".concat(t.id)},c.a.createElement("img",{src:null!==t.photos.small?t.photos.small:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYnu5cNG2KWiidMc4PAhznQZDgmYGvtSxYtwfz8rPEatAl9wtJQ&s",width:150,height:150,className:"rounded-circle",alt:""})),c.a.createElement("p",null,t.followed?c.a.createElement("button",{className:"btn btn-danger btn-sm mt-2 col-5",onClick:function(){return a.unfollow(t.id)}},a.followingInProgress.some(function(e){return e===t.id})?c.a.createElement(b.a,{size:"sm",color:"white"}):"Unfollow"):c.a.createElement("button",{disabled:a.followingInProgress.some(function(e){return e===t.id}),className:"btn btn-danger btn-sm mt-2 col-4",onClick:function(){return a.follow(t.id)}},"Follow"))),c.a.createElement("div",{className:"mt-4 info-card col-lg-8 col-md-7 text-md-left text-sm-center"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9 font-italic"},c.a.createElement("p",null,t.name),c.a.createElement("p",{className:"word-wrap"},null!==t.status?t.status:"No status yet")),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("p",null,"Lviv"),c.a.createElement("p",null,"Ukraine")))))))},Pe=function(e){return c.a.createElement(ye.a,{className:"bg-light w-100 text-center"},c.a.createElement("p",{className:"font-weight-bold"},"Find your friends"),e.users.map(function(t){return c.a.createElement(we,{user:t,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow,key:t.id})}),c.a.createElement(Oe,{totalUsers:e.totalUsers,countUsers:e.countUsers,currentPage:e.currentPage,changePage:e.changePage,isLoading:e.isLoading}))},Ne=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).changePage=function(e){a.props.changePageUsers(e,a.props.countUsers)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.countUsers)}},{key:"render",value:function(){var e=this.props,t=e.totalUsers,a=e.countUsers,n=e.users,r=e.currentPage,l=e.follow,o=e.unfollow,s=e.followingInProgress,i=e.isLoading;return c.a.createElement(Pe,{totalUsers:t,countUsers:a,users:n,currentPage:r,follow:l,unfollow:o,followingInProgress:s,isLoading:i,changePage:this.changePage})}}]),t}(c.a.Component),Se=Object(g.b)(function(e){return{users:e.usersPage.users,countUsers:e.usersPage.countUsers,totalUsers:e.usersPage.totalUsers,currentPage:e.usersPage.currentPage,isLoading:e.usersPage.isLoading,followingInProgress:e.usersPage.followingInProgress}},{follow:function(e){return function(){var t=Object(w.a)(O.a.mark(function t(a){return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(ve(!0,e)),t.next=3,_(e);case 3:0===t.sent.data.resultCode&&a(ge(e)),a(ve(!1,e));case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(w.a)(O.a.mark(function t(a){return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(ve(!0,e)),t.next=3,k(e);case 3:0===t.sent.data.resultCode&&a(he(e)),a(ve(!1,e));case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},getUsers:function(e,t){return function(){var a=Object(w.a)(O.a.mark(function a(n){var r;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n(be(!0)),a.next=3,j(e,t);case 3:r=a.sent,n(be(!1)),n(Ee(r.data.items)),n({type:"TOTAL_USERS",payload:r.data.totalCount});case 7:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},changePageUsers:function(e,t){return function(){var a=Object(w.a)(O.a.mark(function a(n){var r;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"CURRENT_PAGE",payload:e}),n(be(!0)),a.next=4,x(e,t);case 4:r=a.sent,n(be(!1)),n(Ee(r.data.items));case 7:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(Ne),je=a(322),xe=a(323),_e=ee(20),ke=(n=5,function(e){return e&&e.length<n?"Symbols are less than ".concat(n,", write more."):void 0}),Ue=Object(Z.a)({form:"login"})(function(e){var t=e.handleSubmit,a=e.error,n=e.isPendingLogin,r=e.captchaUrl;return c.a.createElement("form",{className:"m-auto w-50",onSubmit:t},c.a.createElement(je.a,{className:"mt-2"},c.a.createElement(V.a,{className:"m-auto col-md-6 col-12",name:"email",placeholder:"E-mail",type:"e-mail",validate:[X,_e],component:re})),c.a.createElement(je.a,{className:"mt-3"},c.a.createElement(V.a,{className:"m-auto col-md-6 col-12",type:"password",name:"password",placeholder:"Password",validate:[X,_e,ke],component:re})),r&&c.a.createElement("div",null,c.a.createElement("img",{src:r,alt:""}),c.a.createElement(V.a,{className:"m-auto col-md-6 col-12",name:"setCaptcha",placeholder:"Enter captcha...",validate:[X],component:re})),a&&c.a.createElement("div",null,c.a.createElement("h6",{className:"mt-1 text-danger"},a)),c.a.createElement("div",{className:"mt-3 d-flex justify-content-center"},c.a.createElement(V.a,{className:"mr-2 mt-2",type:"checkbox",name:"rememberMe",component:"input"}),c.a.createElement("h6",{className:"mt-1"},"Remember me")),c.a.createElement(je.a,{className:"mt-2"},c.a.createElement(xe.a,{className:"m-auto col-md-6 col-12",color:"info"},n?c.a.createElement(b.a,{color:"white",size:"sm"}):"Log In")),c.a.createElement("a",{href:"https://social-network.samuraijs.com/",rel:"noopener noreferrer",target:"_blank"},c.a.createElement("i",null,"Register now!")))}),Ce=Object(g.b)(function(e){return{isAuth:e.auth.isAuth,isPendingLogin:e.auth.isPendingLogin,captchaUrl:e.auth.captchaUrl}},{login:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;return function(){var r=Object(w.a)(O.a.mark(function r(c){var l,o;return O.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return c(R(!0)),r.next=3,D(e,t,a,n);case 3:0===(l=r.sent).data.resultCode?(c(W()),c(R(!1))):(10===l.data.resultCode&&c(function(){var e=Object(w.a)(O.a.mark(function e(t){var a,n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:a=e.sent,n=a.data.url,t(G(n));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),o=l.data.messages.length>0?l.data.messages[0]:"Server error",c(Object(P.a)("login",{_error:o})),c(R(!1)));case 5:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(function(e){var t=e.login,a=e.isAuth,n=e.isPendingLogin,r=Object(te.a)(e,["login","isAuth","isPendingLogin"]);return a?c.a.createElement(p.a,{to:"/profile"}):c.a.createElement(ye.a,null,c.a.createElement(je.a,{className:"text-center"},c.a.createElement("h3",{className:"col-12"},c.a.createElement("b",null,"Login")),c.a.createElement(Ue,{captchaUrl:r.captchaUrl,isPendingLogin:n,onSubmit:function(e){t(e.email,e.password,e.rememberMe,e.setCaptcha)}})))}),Ie=a(132),Le=a.n(Ie),Te=a(133),Ae=a.n(Te),De=a(134),Me=a.n(De),Ge=a(135),Re=a.n(Ge),Fe=a(136),ze=a.n(Fe),We=a(137),He=a.n(We),Be=a(138),Ye=a.n(Be),$e=a(139),qe=a.n($e),Je=a(140),Ke=a.n(Je),Qe=a(141),Ve=a.n(Qe),Ze=a(142),Xe=a.n(Ze),et=a(143),tt=a.n(et),at=a(144),nt=a.n(at),rt=a(145),ct=a.n(rt),lt=a(146),ot=a.n(lt),st=a(147),it=a.n(st),ut=a(148),mt=a.n(ut),dt=[{id:1,url:Le.a,title:"\u0417\u0430\u0441\u0432\u0456\u0442\u0438 \u0437\u0456\u0440\u043a\u043e"},{id:2,url:Ae.a,title:"\u0420\u0456\u0437\u0434\u0432\u044f\u043d\u0430 \u0437\u0456\u0440\u043a\u0430"},{id:3,url:Me.a,title:"\u0412 \u043d\u0430\u0448\u0456\u043c \u043a\u0440\u0430\u0457 \u043f\u0435\u0440\u0435\u043c\u0456\u043d\u0438"},{id:4,url:Re.a,title:"\u0417\u0456\u0440\u043e\u043d\u044c\u043a\u0430 \u0440\u0430\u043d\u044f"},{id:5,url:ze.a,title:"\u0411\u043e\u0433 \u043d\u0430\u0440\u043e\u0434\u0438\u0432\u0441\u044f"},{id:6,url:He.a,title:"\u0421\u0432\u044f\u0442\u0438\u0439 \u041c\u0438\u043a\u043e\u043b\u0430\u0439"},{id:7,url:Ye.a,title:"\u0411\u0440\u0430\u0442\u0438 \u043c\u043e\u043d\u0430\u0445\u0438-\u0421\u0442\u0430\u0440\u0438\u0439 \u0440\u0456\u043a"},{id:8,url:qe.a,title:"\u0421\u043b\u0430\u0432\u043d\u0456\u0457 \u0446\u0430\u0440\u0456"},{id:9,url:Ke.a,title:"\u0420\u0456\u0437\u0434\u0432\u043e \u0443 \u0445\u0430\u0442\u0443"},{id:10,url:Ve.a,title:"\u0423\u043a\u0440\u0430\u0457\u043d\u0430 \u043a\u043e\u043b\u044f\u0434\u0443\u0454"},{id:11,url:Xe.a,title:"\u0411\u043e\u0436\u0435 \u043c\u0456\u0439 \u0411\u043e\u0436\u0435"},{id:12,url:tt.a,title:"\u0413\u043e\u0440\u043e\u0431\u0447\u0438\u043a"},{id:13,url:nt.a,title:"\u042f \u0445\u0440\u0438\u0441\u0442\u0438\u044f\u043d\u0438\u043d"},{id:14,url:ct.a,title:"\u041b\u044e\u0431\u043e\u0432\u0456 \u0441\u0438\u043b\u0430"},{id:15,url:ot.a,title:"\u041a\u043e\u043b\u044f\u0434\u0430"},{id:16,url:it.a,title:"\u041d\u0430 \u0434\u0432\u043e\u0440\u0456 \u0440\u0456\u0437\u0434\u0432\u043e"},{id:17,url:mt.a,title:"\u0425\u0430\u0439 \u0406\u0441\u0443\u0441, \u043c\u0430\u043b\u0435 \u0434\u0438\u0442\u044f"}],pt=function(){return c.a.createElement(ye.a,null,c.a.createElement("h2",{className:"text-center mb-3"},"Best ukrainian songs"),c.a.createElement(je.a,null,dt.map(function(e){return c.a.createElement("div",{key:e.id,className:"col-lg-4 col-md-6 col-12"},c.a.createElement("audio",{className:"mt-1",style:{outline:"none"},controls:!0},c.a.createElement("source",{src:e.url})),c.a.createElement("p",{className:"text-center"},e.title))})))},ft=a(326),gt=a(324),ht=a(325),Et=[{id:1,category:"Sporting Goods",price:"$49.99",stocked:!0,name:"Football"},{id:2,category:"Sporting Goods",price:"$9.99",stocked:!0,name:"Baseball"},{id:3,category:"Sporting Goods",price:"$29.99",stocked:!1,name:"Basketball"},{id:4,category:"Electronics",price:"$99.99",stocked:!0,name:"iPod Touch"},{id:5,category:"Electronics",price:"$399.99",stocked:!1,name:"iPhone 5"},{id:6,category:"Electronics",price:"$199.99",stocked:!0,name:"Nexus 7"}],bt=function(e){var t=e.name,a=e.price,n=e.category,l=Object(r.useState)(!1),o=Object(Q.a)(l,2),s=o[0],i=o[1],u=function(){i(!s)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"mt-2 d-flex justify-content-between"},c.a.createElement("button",{onClick:u,className:"mr-3 border-0 bg-transparent"},t),c.a.createElement("span",null,a)),c.a.createElement("div",null,c.a.createElement(ft.a,{isOpen:s,toggle:u},c.a.createElement(gt.a,null,n),c.a.createElement(ht.a,null,t," costs ",a))))},vt=function(){var e=Object(r.useState)(""),t=Object(Q.a)(e,2),a=t[0],n=t[1];return c.a.createElement("div",{className:"w-100 text-center"},c.a.createElement("h2",null,"Search"),c.a.createElement("input",{value:a,onChange:function(e){n(e.target.value)},className:"mb-3"}),c.a.createElement("div",{className:"w-25 m-auto d-flex justify-content-between"},c.a.createElement("span",{className:"ml-1"},c.a.createElement("b",null,"Name")),c.a.createElement("span",null,c.a.createElement("b",null,"Price"))),c.a.createElement("div",{className:"w-25 m-auto d-flex flex-column"},Et.map(function(e){return c.a.createElement("div",{key:e.id},e.name.includes(a)&&c.a.createElement(bt,{category:e.category,name:e.name,price:e.price}))})))},yt=(a(317),function(e){var t=Object(r.useState)(e.status),a=Object(Q.a)(t,2),n=a[0],l=a[1];return c.a.createElement(ye.a,null,c.a.createElement("h2",{className:"text-center"},"Settings"),c.a.createElement(je.a,null,c.a.createElement("div",{className:"col-6"},c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",name:"menu"}),c.a.createElement("span",{className:"ml-1 font"},c.a.createElement("i",null,"Choose your menu"))),c.a.createElement("div",{className:"mt-3"},c.a.createElement("input",{type:"checkbox",name:"menu"}),c.a.createElement("span",{className:"ml-1 font"},c.a.createElement("i",null,"Today was a nice day"))),c.a.createElement("div",{className:"mt-3"},c.a.createElement("input",{type:"checkbox",name:"menu"}),c.a.createElement("span",{className:"ml-1 font"},c.a.createElement("i",null,"I am going to home"))),c.a.createElement("div",{className:"mt-3"},c.a.createElement("input",{type:"checkbox",name:"menu"}),c.a.createElement("span",{className:"ml-1 font"},c.a.createElement("i",null,"Tomorrow will be Friday")))),c.a.createElement("div",{className:"col-6"},c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("b",null,"Change status:"),c.a.createElement(ae.a,{className:"mt-2",value:n,onChange:function(e){l(e.target.value)}}))),c.a.createElement("div",{className:"mt-4"},c.a.createElement("label",null,c.a.createElement("b",null,"Change avatar: "),c.a.createElement("input",{accept:"image/jpeg, image/png",type:"file",className:"mt-2",onChange:function(t){t.target.files.length&&e.updateProfilePhoto(t.target.files[0])}}))))),c.a.createElement(je.a,{className:"mt-5"},c.a.createElement(xe.a,{color:"primary",className:"m-auto mt-2 col-md-2 col-5",disabled:e.loading,onClick:function(){return e.updateUserStatus(n)}},"Save")))}),Ot=Object(g.b)(function(e){return{status:e.profilePage.status,loading:e.profilePage.loading}},{updateUserStatus:J,updateProfilePhoto:K})(function(e){return c.a.createElement(yt,{status:e.status,updateUserStatus:e.updateUserStatus,updateProfilePhoto:e.updateProfilePhoto,loading:e.loading})}),wt=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?c.a.createElement("div",{className:"mx-5"},c.a.createElement(B,null),c.a.createElement("div",{className:"d-flex"},c.a.createElement(E,null),c.a.createElement(p.d,null,c.a.createElement(p.b,{path:"/profile/:userId?",render:function(){return c.a.createElement(ue,null)}}),c.a.createElement(p.b,{path:"/dialog/:dialogId?",render:function(){return c.a.createElement(fe,null)}}),c.a.createElement(p.b,{exact:!0,path:"/users",render:function(){return c.a.createElement(Se,null)}}),c.a.createElement(p.b,{exact:!0,path:"/login",render:function(){return c.a.createElement(Ce,null)}}),c.a.createElement(p.b,{exact:!0,path:"/music",render:function(){return c.a.createElement(pt,null)}}),c.a.createElement(p.b,{exact:!0,path:"/news",render:function(){return c.a.createElement("div",{className:"text-center w-100"},c.a.createElement("h1",null,"This will be news!"))}}),c.a.createElement(p.b,{exact:!0,path:"/settings",render:function(){return c.a.createElement(Ot,null)}}),c.a.createElement(p.b,{exact:!0,path:"/search",render:function(){return c.a.createElement(vt,null)}}),c.a.createElement(p.b,{exact:!0,path:"/",render:function(){return c.a.createElement(p.a,{to:"/profile"})}}),c.a.createElement(p.b,{path:"*",render:function(){return c.a.createElement("div",null,"Error 404")}})))):c.a.createElement(b.a,null)}}]),t}(c.a.Component),Pt=Object(Y.d)(p.g,Object(g.b)(function(e){return{initialized:e.app.initializedSuccess}},{initializeApp:function(){return function(e){var t=e(W());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(wt),Nt=a(48),St=a(7),jt={posts:[{id:1,message:"Hi, how are you?",count_like:0},{id:2,message:"Hey, whats new?",count_like:100},{id:3,message:"What do you think about myself?",count_like:34},{id:4,message:"Tell me about your last experience.",count_like:5}],profile:null,status:"",loading:!1,profilePhoto:null},xt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var a={id:5,message:t.newPostText,count_like:3};return Object(St.a)({},e,{posts:[].concat(Object(Nt.a)(e.posts),[a])});case"PROFILE_SUCCESS":return Object(St.a)({},e,{loading:t.payload});case"SET_PROFILE_USERS":return Object(St.a)({},e,{profile:t.payload});case"SET_USERS_STATUS":return Object(St.a)({},e,{status:t.payload});case"UPDATE_PHOTO_SUCCESS":return Object(St.a)({},e,{profilePhoto:t.payload});default:return e}},_t={dialogs:[{id:1,name_author:"Volodia",url:"/dialog/1"},{id:2,name_author:"Petro",url:"/dialog/2"},{id:3,name_author:"Oleh",url:"/dialog/3"}],messages:[{id:1,message:"What is the weather now?",urlDialog:"1"},{id:2,message:"What is your name?",urlDialog:"2"},{id:3,message:"What is your favorite football player?",urlDialog:"3"},{id:4,message:"Today",urlDialog:"2"},{id:5,message:"Yesterday",urlDialog:"1"}]},kt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":var a={id:6,message:t.newMessageText,urlDialog:"3"};return Object(St.a)({},e,{messages:[].concat(Object(Nt.a)(e.messages),[a])});default:return e}},Ut={menu_profile:[{id:1,name_menu:"Profile",url:"/profile"},{id:2,name_menu:"Messages",url:"/dialog"},{id:3,name_menu:"News",url:"/news"},{id:4,name_menu:"Music",url:"/music"},{id:5,name_menu:"Settings",url:"/settings"},{id:6,name_menu:"Find users",url:"/users",paddingt:"lineheight"},{id:7,name_menu:"Search",url:"/search",paddingt:"lineheight"}]},Ct=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut},It={users:[],countUsers:10,totalUsers:0,currentPage:1,isLoading:!1,followingInProgress:[]},Lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(St.a)({},e,{users:e.users.map(function(e){return e.id===t.payload?Object(St.a)({},e,{followed:!0}):e})});case"UNFOLLOW":return Object(St.a)({},e,{users:e.users.map(function(e){return e.id===t.payload?Object(St.a)({},e,{followed:!1}):e})});case"SET_USERS":return Object(St.a)({},e,{users:t.payload});case"TOTAL_USERS":return Object(St.a)({},e,{totalUsers:t.payload});case"CURRENT_PAGE":return Object(St.a)({},e,{currentPage:t.payload});case"IS_LOADING":return Object(St.a)({},e,{isLoading:t.payload});case"FOLLOWING_IN_PROGRESS":return Object(St.a)({},e,{followingInProgress:t.following?[].concat(Object(Nt.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!==t.userId})});default:return e}},Tt={userId:null,login:null,email:null,isAuth:!1,isPendingLogin:!1,isPendingLogOut:!1,captchaUrl:null},At=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH_USER":return Object(St.a)({},e,t.payload);case"LOGIN_PENDING":return Object(St.a)({},e,{isPendingLogin:t.payload});case"LOG_OUT_PENDING":return Object(St.a)({},e,{isPendingLogOut:t.payload});case"GET_CAPTCHA_URL_SUCCESS":return Object(St.a)({},e,{captchaUrl:t.captchaUrl});default:return e}},Dt=a(149),Mt=a(126),Gt={initializedSuccess:!1},Rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(St.a)({},e,{initializedSuccess:!0});default:return e}},Ft=Object(Y.c)({profilePage:xt,dialogsPage:kt,sidebar:Ct,usersPage:Lt,auth:At,app:Rt,form:Mt.a}),zt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.d,Wt=Object(Y.e)(Ft,zt(Object(Y.a)(Dt.a)));window.store=Wt;var Ht=Wt;o.a.render(c.a.createElement(f.a,null,c.a.createElement(g.a,{store:Ht},c.a.createElement(Pt,null))),document.getElementById("root"))}},[[175,1,2]]]);
//# sourceMappingURL=main.c9383883.chunk.js.map