(this["webpackJsonpemphasoft-test"]=this["webpackJsonpemphasoft-test"]||[]).push([[0],{17:function(e,t,s){e.exports={block:"Form_block__2Qq-z",block__container:"Form_block__container__3YMwO",block__form:"Form_block__form__3GpDn",block__inputs:"Form_block__inputs__3mGkJ",block__buttons:"Form_block__buttons__kkvnJ",loading:"Form_loading__3afDW",checkbox:"Form_checkbox__1Uw9I",infoTextRed:"Form_infoTextRed__2pwUe"}},20:function(e,t,s){e.exports={login:"LoginPage_login__3_Vqa",login__container:"LoginPage_login__container__2d98I",login__form:"LoginPage_login__form__9yCID",login__inputs:"LoginPage_login__inputs__tOYSc",login__checkbox:"LoginPage_login__checkbox__33wPC",login__buttons:"LoginPage_login__buttons__1wuJK",loading:"LoginPage_loading__2RSyg",checkbox:"LoginPage_checkbox__291M-",infoTextRed:"LoginPage_infoTextRed__1YMYB"}},22:function(e,t,s){e.exports={logOut:"Nav_logOut__35K61",title:"Nav_title__LJNJ-",logIn:"Nav_logIn__3zc1Q",links:"Nav_links__RLil5",button:"Nav_button__31py2"}},25:function(e,t,s){e.exports={input:"Input_input__3RC84",input__label:"Input_input__label__1Dvda",input__elem:"Input_input__elem__1i4hv",input__error:"Input_input__error__34Z2R",inputs__error_text:"Input_inputs__error_text__1zq1v"}},26:function(e,t,s){e.exports={infoTextRed:"UsersListPage_infoTextRed__26UZw",usersList:"UsersListPage_usersList__2-5QG",userCard:"UsersListPage_userCard__2Vwnq",infoBlock:"UsersListPage_infoBlock__ojpGv"}},34:function(e,t,s){e.exports={wrap:"PageNotFound_wrap__4pylf",title:"PageNotFound_title__1DB6y",subtitle:"PageNotFound_subtitle__O7fzB"}},37:function(e,t,s){e.exports={button:"Button_button__3-f6D",green:"Button_green__wmmB-",red:"Button_red__2XI6A"}},38:function(e,t,s){e.exports={navItem:"NavItem_navItem__2Oilc",active:"NavItem_active__2slWZ"}},41:function(e,t,s){e.exports={container:"Preloader_container__24fNR",ldsFacebook:"Preloader_ldsFacebook__fDg7b"}},51:function(e,t,s){e.exports={App:"App_App__36vaU","App-logo":"App_App-logo__3CMNe","App-logo-spin":"App_App-logo-spin__2cVOJ","App-header":"App_App-header__3Rsqj","App-link":"App_App-link__1wFJg"}},58:function(e,t,s){},83:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s.n(n),a=s(27),o=s.n(a),c=(s(58),s(51)),i=s.n(c),u=s(3),l=s(16),d=s.n(l),p=s(24),b=s(15),j=s(29),m=s.n(j),_=m.a.create({baseURL:"http://emphasoft-test-assignment.herokuapp.com/"}),h=function(e){return _.post("api-token-auth/",e)},g=Object(b.b)("login/logInUserInApp",function(){var e=Object(p.a)(d.a.mark((function e(t,s){var n,r,a,o,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.password,a=s.rejectWithValue,o=s.dispatch,e.prev=2,e.next=5,h({username:n,password:r});case 5:return c=e.sent,e.abrupt("return",c.data);case 9:return e.prev=9,e.t0=e.catch(2),setTimeout(o,5e3,w({error:""})),i=e.t0,e.abrupt("return",a(i.response?i.response.statusText:e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,s){return e.apply(this,arguments)}}()),f=Object(b.c)({name:"auth",initialState:{userData:null,isLoading:!1,isLoggedSuccess:!1,initApp:"idle",token:"",error:""},reducers:{setLoginUserData:function(e,t){e.userData=t.payload},setLogoutUserData:function(e){e.userData=null,e.token="",e.initApp="idle",e.isLoggedSuccess=!1},setIsLoading:function(e,t){e.isLoading=t.payload},setInitApp:function(e,t){e.initApp=t.payload.initApp},setErrorText:function(e,t){e.error=t.payload.error}},extraReducers:function(e){e.addCase(g.pending,(function(e,t){e.isLoading=!0,e.error=""})).addCase(g.fulfilled,(function(e,t){e.token=t.payload.token,e.initApp="succeeded",e.isLoggedSuccess=!0,e.isLoading=!1})).addCase(g.rejected,(function(e,t){t.payload&&(e.isLoading=!1,e.error=t.payload)}))}}),O=f.actions,x=O.setLoginUserData,v=O.setLogoutUserData,k=O.setIsLoading,w=(O.setInitApp,O.setErrorText),N=s(9),L=s(33),U=s(37),C=s.n(U),T=s(1),S=r.a.memo((function(e){var t=e.btnType,s=e.btnName,n=Object(L.a)(e,["btnType","btnName"]),r="".concat(C.a.button," ").concat(C.a[t]);return Object(T.jsx)("button",Object(N.a)(Object(N.a)({className:r},n),{},{children:s}))})),y=s(14),I=s(38),F=s.n(I),P=function(e){var t=e.path,s=e.title;return Object(T.jsx)(y.b,{to:t,className:F.a.navItem,activeClassName:F.a.active,children:s})},A=s(22),R=s.n(A),D=function(){return Object(T.jsx)("nav",{className:R.a.logOut,children:Object(T.jsx)("div",{className:R.a.title,children:Object(T.jsx)("h2",{children:"Emphasoft test"})})})},B=function(e){var t=e.logout;return Object(T.jsxs)("nav",{className:R.a.logIn,children:[Object(T.jsx)("div",{className:R.a.title,children:Object(T.jsx)("h2",{children:"Emphasoft test"})}),Object(T.jsx)("div",{className:R.a.links,children:Object(T.jsx)(P,{path:"/emphasoft-test/create-new-user",title:"Create new user"})}),Object(T.jsx)("div",{className:R.a.button,children:Object(T.jsx)(S,{onClick:t,btnName:"Logout",btnType:"red"})})]})},V=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth.token})),s=Object(n.useCallback)((function(){e(v())}),[]);return t?Object(T.jsx)(B,{logout:s}):Object(T.jsx)(D,{})},q=s(4),J=s(41),z=s.n(J);function E(){return Object(T.jsx)("div",{className:z.a.container,children:Object(T.jsxs)("div",{className:z.a.ldsFacebook,children:[Object(T.jsx)("div",{}),Object(T.jsx)("div",{}),Object(T.jsx)("div",{})]})})}var H=m.a.create({baseURL:"http://emphasoft-test-assignment.herokuapp.com/"}),W=function(e){return H.get("api/v1/users/",{headers:{Authorization:"Token ".concat(e)}})},G=function(e,t){return H.post("api/v1/users/",t,{headers:{Authorization:"Token ".concat(e)}})},M=function(e,t,s){return H.put("api/v1/users/".concat(t,"/"),s,{headers:{Authorization:"Token ".concat(e)}})},Z=Object(b.b)("user/fetchAllUsers",function(){var e=Object(p.a)(d.a.mark((function e(t,s){var n,r,a,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.rejectWithValue,(r=s.dispatch)(k(!0)),e.prev=2,e.next=5,W(t);case 5:return a=e.sent,r(k(!1)),e.abrupt("return",a.data);case 10:return e.prev=10,e.t0=e.catch(2),setTimeout(r,5e3,w({error:""})),o=e.t0,r(w({error:o.response.statusText})),r(k(!1)),e.abrupt("return",n(o.response?o.response.statusText:e.t0.message));case 17:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,s){return e.apply(this,arguments)}}()),Y=Object(b.b)("user/createNewUserTC",function(){var e=Object(p.a)(d.a.mark((function e(t,s){var n,r,a,o,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.rejectWithValue,r=s.getState,a=s.dispatch,o=r().auth.token,a(k(!0)),e.prev=3,e.next=6,G(o,t);case 6:return c=e.sent,a(k(!1)),e.abrupt("return",c.data);case 11:return e.prev=11,e.t0=e.catch(3),setTimeout(a,5e3,w({error:""})),i=e.t0,a(w({error:i.response.statusText})),a(k(!1)),e.abrupt("return",n(i.response?i.response.statusText:e.t0.message));case 18:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t,s){return e.apply(this,arguments)}}()),$=Object(b.b)("user/updateUserTC",function(){var e=Object(p.a)(d.a.mark((function e(t,s){var n,r,a,o,c,i,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.rejectWithValue,r=s.getState,a=s.dispatch,o=r().auth.token,c=r().user.checkedUserForUpdatingId,a(k(!0)),e.prev=4,e.next=7,M(o,c,t);case 7:return i=e.sent,a(k(!1)),e.abrupt("return",i.data);case 12:return e.prev=12,e.t0=e.catch(4),setTimeout(a,5e3,w({error:""})),u=e.t0,a(w({error:u.response.statusText})),a(k(!1)),e.abrupt("return",n(u.response?u.response.statusText:e.t0.message));case 19:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,s){return e.apply(this,arguments)}}()),Q=Object(b.c)({name:"user",initialState:{allUsers:[],createNewUser:!1,checkedUserForUpdatingId:null,isCreateSuccess:!1,isUpdateSuccess:!1},reducers:{setNewUserFlag:function(e,t){e.createNewUser=t.payload},setIsCreateSuccess:function(e,t){e.isCreateSuccess=t.payload},setIsUpdateSuccess:function(e,t){e.isUpdateSuccess=t.payload},setCheckedUserIdForUpdating:function(e,t){e.checkedUserForUpdatingId=t.payload}},extraReducers:function(e){e.addCase(Z.fulfilled,(function(e,t){e.allUsers=t.payload})).addCase(Y.pending,(function(e){e.isCreateSuccess=!1})).addCase(Y.fulfilled,(function(e){e.isCreateSuccess=!0})).addCase($.pending,(function(e){e.isUpdateSuccess=!1})).addCase($.fulfilled,(function(e){e.isUpdateSuccess=!0,e.checkedUserForUpdatingId=null}))}}),K=Q.actions,X=(K.setNewUserFlag,K.setIsCreateSuccess,K.setCheckedUserIdForUpdating),ee=s(32),te=s(17),se=s.n(te),ne=s(25),re=s.n(ne),ae=r.a.memo((function(e){var t=e.label,s=e.errorCondition,n=e.errorText,r=Object(L.a)(e,["label","errorCondition","errorText"]);return Object(T.jsxs)("div",{className:re.a.input,children:[Object(T.jsx)("p",{className:re.a.input__label,children:t}),Object(T.jsx)("input",Object(N.a)({className:"".concat(re.a.input__elem," ").concat(s?re.a.input__error:"")},r)),s?Object(T.jsx)("div",{className:re.a.inputs__error_text,children:n}):null]})})),oe=r.a.memo((function(e){var t=e.formLabel,s=e.btnName,n=e.error,r=e.isLoading,a=e.handleOnSubmit,o=e.backHandler,c=Object(ee.a)({initialValues:{username:"",first_name:"",last_name:"",password:""},validate:function(e){var t={};return e.username?/^[\w.@+-]+$/i.test(e.username)?e.username.length>150&&(t.username="Too much longer username, max 150 symbols!"):t.username="Invalid username!":t.username="Required!",e.first_name.length>30&&(t.first_name="Too much longer first name, min 30 symbols"),e.last_name.length>150&&(t.last_name="Too much longer last name, min 150 symbols"),e.password?/^(?=.*[A-Z])(?=.*\d).{8,}$/i.test(e.password)?e.password.length>128&&(t.password="Too much longer password, min 128 symbols"):t.password="Invalid password!":t.password="Required!",t},onSubmit:function(e){a({username:e.username.trim(),first_name:e.first_name,last_name:e.last_name,password:e.password,is_active:!0})}});return Object(T.jsx)("div",{className:se.a.block,children:Object(T.jsxs)("div",{className:se.a.block__container,children:[Object(T.jsxs)("form",{className:se.a.block__form,onSubmit:c.handleSubmit,children:[Object(T.jsx)("div",{className:se.a.block__title,children:Object(T.jsx)("h3",{children:t})}),Object(T.jsxs)("div",{className:se.a.block__inputs,children:[Object(T.jsx)(ae,Object(N.a)({label:"Username",placeholder:"Please, put your username",errorCondition:!!c.errors.username&&c.touched.username,errorText:c.errors.username},c.getFieldProps("username"))),Object(T.jsx)(ae,Object(N.a)({label:"First name",placeholder:"Please, put your first name",errorCondition:!!c.errors.first_name&&c.touched.first_name,errorText:c.errors.first_name},c.getFieldProps("first_name"))),Object(T.jsx)(ae,Object(N.a)({label:"Last name",placeholder:"Please, put your last name",errorCondition:!!c.errors.last_name&&c.touched.last_name,errorText:c.errors.last_name},c.getFieldProps("last_name"))),Object(T.jsx)(ae,Object(N.a)({label:"Password",type:"password",placeholder:"Please, put your password",errorCondition:!!c.errors.password&&c.touched.password,errorText:c.errors.password},c.getFieldProps("password")))]}),Object(T.jsxs)("div",{className:se.a.block__buttons,children:[Object(T.jsx)(S,{type:"submit",btnName:s,disabled:!c.isValid||r||!c.values.username,btnType:"green"}),Object(T.jsx)(S,{btnName:"Reset",type:"reset",onClick:function(){return c.resetForm()}})]}),n&&Object(T.jsx)("div",{className:se.a.infoTextRed,children:n}),r&&Object(T.jsx)("div",{className:se.a.loading,children:"...Loading"})]}),Object(T.jsx)("div",{className:se.a.links,onClick:o,children:Object(T.jsx)(P,{path:"/emphasoft-test/users-list",title:"Back to users list"})})]})})})),ce=r.a.memo((function(e){var t=e.error,s=e.isLoading,n=e.handleOnSubmit;return Object(T.jsx)(oe,{formLabel:"Create new user",btnName:"Create",isLoading:s,error:t,handleOnSubmit:n})})),ie=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth})),s=t.isLoggedSuccess,r=t.isLoading,a=t.initApp,o=t.error,c=Object(u.c)((function(e){return e.user})).isCreateSuccess,i=Object(n.useCallback)((function(t){e(Y(t))}),[]);return"loading"===a?Object(T.jsx)(E,{}):s?c?Object(T.jsx)(q.a,{to:"/emphasoft-test/users-list"}):Object(T.jsx)(ce,{isLoading:r,error:o,handleOnSubmit:i}):Object(T.jsx)(q.a,{to:"/emphasoft-test/login"})},ue=s(20),le=s.n(ue),de=r.a.memo((function(e){var t=e.error,s=e.isLoading,n=e.handleOnSubmit,r=(e.isLoggedSuccess,Object(ee.a)({initialValues:{username:"",password:""},validate:function(e){var t={};return e.username?/^[\w.@+-]+$/i.test(e.username)?e.username.length>150&&(t.username="Too much longer username, max 150 symbols!"):t.username="Invalid username!":t.username="Required!",e.password?/^(?=.*[A-Z])(?=.*\d).{8,}$/i.test(e.password)?e.password.length>128&&(t.password="Too much longer password, min 128 symbols"):t.password="Invalid password!":t.password="Required!",t},onSubmit:function(e){n(e.username.trim(),e.password)}}));return Object(T.jsx)("div",{className:le.a.login,children:Object(T.jsx)("div",{className:le.a.login__container,children:Object(T.jsxs)("form",{className:le.a.login__form,onSubmit:r.handleSubmit,children:[Object(T.jsx)("div",{className:le.a.login__title,children:Object(T.jsx)("h3",{children:"Login page"})}),Object(T.jsxs)("div",{className:le.a.login__inputs,children:[Object(T.jsx)(ae,Object(N.a)({label:"Username",placeholder:"Please, put your username",errorCondition:!!r.errors.username&&r.touched.username,errorText:r.errors.username},r.getFieldProps("username"))),Object(T.jsx)(ae,Object(N.a)({label:"Password",type:"password",placeholder:"Please, put your password",errorCondition:!!r.errors.password&&r.touched.password,errorText:r.errors.password},r.getFieldProps("password")))]}),Object(T.jsxs)("div",{className:le.a.login__buttons,children:[Object(T.jsx)(S,{type:"submit",btnName:"Login",disabled:!r.isValid||s||!r.values.username,btnType:"green"}),Object(T.jsx)(S,{btnName:"Reset",type:"reset",onClick:function(){return r.resetForm()}})]}),t&&Object(T.jsx)("div",{className:le.a.infoTextRed,children:t}),s&&Object(T.jsx)("div",{className:le.a.loading,children:"...Loading"})]})})})})),pe=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth})),s=t.isLoggedSuccess,r=t.isLoading,a=t.initApp,o=t.error,c=Object(n.useCallback)((function(t,s){e(x({username:t,password:s})),e(g({username:t,password:s}))}),[]);return"loading"===a?Object(T.jsx)(E,{}):s?Object(T.jsx)(q.a,{to:"/emphasoft-test/users-list"}):Object(T.jsx)(de,{isLoading:r,isLoggedSuccess:s,error:o,handleOnSubmit:c})},be=s(34),je=s.n(be),me=function(){var e=Object(u.c)((function(e){return e.auth.isLoggedSuccess})),t=Object(q.g)();return Object(T.jsxs)("div",{className:je.a.wrap,children:[Object(T.jsx)("h2",{className:je.a.title,children:"404"}),Object(T.jsx)("h3",{className:je.a.subtitle,children:"Sorry, the page not found..."}),Object(T.jsx)(S,{btnName:"Go back",btnType:"green",onClick:function(){e?t.push("emphasoft-test/users-list"):t.push("emphasoft-test/login")}})]})},_e=r.a.memo((function(e){var t=e.error,s=e.isLoading,n=e.handleOnSubmit,r=e.backHandler;return Object(T.jsx)(oe,{formLabel:"Update user",btnName:"Update",isLoading:s,error:t,handleOnSubmit:n,backHandler:r})})),he=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth})),s=t.isLoggedSuccess,r=t.isLoading,a=t.initApp,o=t.error,c=Object(u.c)((function(e){return e.user})).isUpdateSuccess,i=Object(n.useCallback)((function(t){e($(t))}),[]),l=Object(n.useCallback)((function(){e(X(null))}),[]);return"loading"===a?Object(T.jsx)(E,{}):s?c?Object(T.jsx)(q.a,{to:"/emphasoft-test/users-list"}):Object(T.jsx)(_e,{isLoading:r,error:o,handleOnSubmit:i,backHandler:l}):Object(T.jsx)(q.a,{to:"/emphasoft-test/login"})},ge=s(26),fe=s.n(ge),Oe=function(e){var t=e.allUsers,s=(e.isLoading,e.error),n=e.updateUserHandler;return Object(T.jsxs)("div",{className:fe.a.usersList,children:[Object(T.jsx)("h3",{children:"Users list page"}),t.map((function(e){var t,s;return Object(T.jsxs)("div",{className:fe.a.userCard,children:[Object(T.jsxs)("div",{className:fe.a.infoBlock,children:[Object(T.jsxs)("div",{children:["First name: ",e.first_name]}),Object(T.jsxs)("div",{children:["Last name: ",e.last_name]}),Object(T.jsxs)("div",{children:["Username: ",e.username]}),Object(T.jsxs)("div",{children:["Last login: ",e.last_login]}),Object(T.jsxs)("div",{children:["Is active: ",null===(t=e.is_active)||void 0===t?void 0:t.toString()]}),Object(T.jsxs)("div",{children:["Is superuser: ",null===(s=e.is_superuser)||void 0===s?void 0:s.toString()]})]}),Object(T.jsx)(S,{btnName:"Update",btnType:"green",onClick:function(){n(e.id)}})]},e.id)})),s&&Object(T.jsx)("div",{className:fe.a.infoTextRed,children:s})]})},xe=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth})),s=t.isLoggedSuccess,r=t.isLoading,a=t.initApp,o=t.error,c=t.token,i=Object(u.c)((function(e){return e.user})),l=i.allUsers,d=i.checkedUserForUpdatingId,p=Object(n.useCallback)((function(t){e(X(t))}),[]);return Object(n.useEffect)((function(){e(Z(c))}),[]),"loading"===a?Object(T.jsx)(E,{}):d?Object(T.jsx)(q.a,{to:"/emphasoft-test/update-user"}):s?Object(T.jsx)(Oe,{allUsers:l,isLoading:r,error:o,updateUserHandler:p}):Object(T.jsx)(q.a,{to:"/emphasoft-test/login"})},ve=function(){return Object(T.jsxs)(q.d,{children:[Object(T.jsx)(q.b,{path:"/emphasoft-test/update-user",render:function(){return Object(T.jsx)(he,{})}}),Object(T.jsx)(q.b,{path:"/emphasoft-test/create-new-user",render:function(){return Object(T.jsx)(ie,{})}}),Object(T.jsx)(q.b,{path:"/emphasoft-test/users-list",render:function(){return Object(T.jsx)(xe,{})}}),Object(T.jsx)(q.b,{path:"/emphasoft-test/login",render:function(){return Object(T.jsx)(pe,{})}}),Object(T.jsx)(q.b,{exact:!0,path:"/emphasoft-test/",render:function(){return Object(T.jsx)(pe,{})}}),Object(T.jsx)(q.b,{path:"*",render:function(){return Object(T.jsx)(me,{})}})]})};var ke=function(){return Object(T.jsxs)("div",{className:i.a.main,children:[Object(T.jsx)(V,{}),Object(T.jsx)(ve,{})]})},we=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,84)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;s(e),n(e),r(e),a(e),o(e)}))},Ne=s(12),Le=Object(Ne.b)({auth:f.reducer,user:Q.reducer}),Ue=Object(b.a)({reducer:Le});o.a.render(Object(T.jsx)(y.a,{children:Object(T.jsx)(u.a,{store:Ue,children:Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(ke,{})})})}),document.getElementById("root")),we()}},[[83,1,2]]]);
//# sourceMappingURL=main.63e97277.chunk.js.map