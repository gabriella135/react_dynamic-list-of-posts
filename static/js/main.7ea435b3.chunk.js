(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{18:function(e,t,s){},20:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var n=s(9),c=s.n(n),a=s(10),i=s(5),r=s(2),l=s(4),o=s.n(l),d=s(1),u=(s(16),s(17),s(18),s(3)),j=s.n(u),m=s(0),b=function(e){var t=e.filteredPosts,s=e.setIsSelected,n=e.isSelected,c=e.selectPost,a=e.selectedPost,i=function(){s((function(e){return!e}))},r=Object(d.useRef)(!1);return Object(d.useEffect)((function(){r.current?s(!0):r.current=!0}),[a]),Object(m.jsxs)("div",{"data-cy":"PostsList",children:[Object(m.jsx)("p",{className:"title",children:"Posts:"}),Object(m.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{className:"has-background-link-light",children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"Title"}),Object(m.jsx)("th",{children:" "})]})}),Object(m.jsx)("tbody",{children:t.map((function(e){return Object(m.jsxs)("tr",{"data-cy":"Post",children:[Object(m.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(m.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(m.jsx)("td",{className:"has-text-right is-vcentered",children:a===e?Object(m.jsx)("button",{type:"button","data-cy":"PostButton",className:j()("button is-link",{"is-light":!n}),onClick:function(){c(e),i()},children:n&&a===e?"Close":"Open"}):Object(m.jsx)("button",{type:"button","data-cy":"PostButton",className:j()("button is-link","is-light"),onClick:function(){c(e),i()},children:n&&a===e?"Close":"Open"})})]},e.id)}))})]})]})},h=(s(20),function(){return Object(m.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(m.jsx)("div",{className:"Loader__content"})})}),O=function(e){var t=e.handleAddComment,s=e.selectedPost,n=e.setIsButtonNotVisible,c=Object(d.useState)(""),a=Object(r.a)(c,2),i=a[0],l=a[1],o=Object(d.useState)(""),u=Object(r.a)(o,2),b=u[0],h=u[1],O=Object(d.useState)(""),f=Object(r.a)(O,2),x=f[0],p=f[1],v=Object(d.useState)(!1),N=Object(r.a)(v,2),y=N[0],g=N[1],C=Object(d.useState)(!1),S=Object(r.a)(C,2),w=S[0],k=S[1],P=Object(d.useState)(!1),E=Object(r.a)(P,2),I=E[0],T=E[1],B=Object(d.useState)(!1),A=Object(r.a)(B,2),F=A[0],L=A[1],M=Object(d.useRef)(!1);Object(d.useEffect)((function(){M.current&&(n(!1),l(""),h("")),M.current=!0}),[s]);return Object(m.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault(),i.trim().length||g(!0),b.trim().length||k(!0),x.length||T(!0),y||w||I||(L(!0),i.trim().length&&b.trim().length&&x&&(t(i,b,x),L(!1),p("")))},children:[Object(m.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(m.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(m.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(m.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:j()("input",{"is-danger":y}),value:i,onChange:function(e){g(!1),l(e.target.value)}}),Object(m.jsx)("span",{className:"icon is-small is-left",children:Object(m.jsx)("i",{className:"fas fa-user"})}),y&&Object(m.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(m.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),y&&Object(m.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(m.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(m.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(m.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(m.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:j()("input",{"is-danger":w}),value:b,onChange:function(e){k(!1),h(e.target.value)}}),Object(m.jsx)("span",{className:"icon is-small is-left",children:Object(m.jsx)("i",{className:"fas fa-envelope"})}),w&&Object(m.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(m.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),w&&Object(m.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(m.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(m.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:j()("textarea",{"is-danger":I}),value:x,onChange:function(e){T(!1),p(e.target.value)}})}),I&&Object(m.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(m.jsxs)("div",{className:"field is-grouped",children:[Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("button",{type:"submit",className:j()("button is-link",{"is-loading":F}),children:"Add"})}),Object(m.jsx)("div",{className:"control",children:Object(m.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(e){e.preventDefault(),l(""),h(""),p(""),T(!1),g(!1),k(!1)},children:"Clear"})})]})]})},f=function(e){var t=e.selectedPost,s=e.filteredComments,n=e.isCommentLoading,c=e.isError,a=e.handleAddComment,i=e.handleRemoveComment,l=Object(d.useState)(!1),o=Object(r.a)(l,2),u=o[0],j=o[1];return Object(m.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(m.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(m.jsxs)("div",{className:"block",children:[Object(m.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(null===t||void 0===t?void 0:t.id,": ").concat(null===t||void 0===t?void 0:t.title)}),Object(m.jsx)("p",{"data-cy":"PostBody",children:"".concat(null===t||void 0===t?void 0:t.body)})]}),Object(m.jsxs)("div",{className:"block",children:[n&&Object(m.jsx)(h,{}),c&&!s.length&&Object(m.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong with comments!"}),!n&&(s.length?Object(m.jsx)("p",{className:"title is-4",children:"Comments:"}):Object(m.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"})),!n&&s.map((function(e){return Object(m.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(m.jsxs)("div",{className:"message-header",children:[Object(m.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(m.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return i(e.id)},children:"delete button"})]}),Object(m.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)})),!n&&(u?Object(m.jsx)(O,{handleAddComment:a,selectedPost:t,setIsButtonNotVisible:j}):Object(m.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return j(!0)},children:"Write a comment"}))]})]})})},x=function(e){var t=e.users,s=e.selectedUser,n=e.selectUser,c=Object(d.useState)(!1),a=Object(r.a)(c,2),i=a[0],l=a[1];return Object(m.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown is-active",children:[Object(m.jsx)("div",{className:"dropdown-trigger",children:Object(m.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return l((function(e){return!e}))},children:[Object(m.jsx)("span",{children:s?s.name:"Choose a user"}),Object(m.jsx)("span",{className:"icon is-small",children:Object(m.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),i&&Object(m.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(m.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(m.jsx)("a",{href:"#user-".concat(e.id),className:j()("dropdown-item",{"is-active":s===e}),onClick:function(){n(e),l((function(e){return!e}))},children:e.name},e.id)}))})})]})},p="https://mate.academy/students-api";function v(e){return new Promise((function(t){setTimeout(t,e)}))}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:t};return s&&(n.body=JSON.stringify(s),n.headers={"Content-Type":"application/json; charset=UTF-8"}),v(300).then((function(){return fetch(p+e,n)})).then((function(e){return e.json()}))}var y=function(e){return N(e)},g=function(e,t){return N(e,"POST",t)},C=function(e){return N(e,"DELETE")},S=function(){return y("/users")},w=function(){return y("/posts")},k=function(){return y("/comments")},P=function(){var e=Object(d.useState)(!1),t=Object(r.a)(e,2),s=t[0],n=t[1],c=Object(d.useState)(!1),l=Object(r.a)(c,2),u=l[0],O=l[1],p=Object(d.useState)([]),v=Object(r.a)(p,2),N=v[0],y=v[1],P=Object(d.useState)([]),E=Object(r.a)(P,2),I=E[0],T=E[1],B=Object(d.useState)([]),A=Object(r.a)(B,2),F=A[0],L=A[1],M=Object(d.useState)(null),U=Object(r.a)(M,2),D=U[0],R=U[1],_=Object(d.useState)(null),J=Object(r.a)(_,2),q=J[0],V=J[1],W=Object(d.useState)(!1),G=Object(r.a)(W,2),Y=G[0],z=G[1],H=Object(d.useState)(!1),K=Object(r.a)(H,2),Q=K[0],X=K[1];function Z(){return(Z=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,y(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){return($=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.prev=1,e.next=4,w();case 4:t=e.sent,T(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),z(!0);case 11:return e.prev=11,n(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}function ee(){return(ee=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.prev=1,e.next=4,k();case 4:t=e.sent,L(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),z(!0);case 11:return e.prev=11,O(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}Object(d.useEffect)((function(){!function(){Z.apply(this,arguments)}()}),[]);Object(d.useEffect)((function(){!function(){$.apply(this,arguments)}()}),[D]),Object(d.useEffect)((function(){!function(){ee.apply(this,arguments)}()}),[q]);var te=Object(d.useMemo)((function(){return I.filter((function(e){return(null===D||void 0===D?void 0:D.id)===e.userId}))}),[I]),se=Object(d.useMemo)((function(){return F.filter((function(e){return(null===q||void 0===q?void 0:q.id)===e.postId}))}),[F]),ne=function(){var e=Object(i.a)(o.a.mark((function e(t,s,n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!q){e.next=5;break}return e.next=3,i={name:t,email:s,body:n,postId:q.id},g("/comments",i);case 3:c=e.sent,L([].concat(Object(a.a)(se),[c]));case 5:case"end":return e.stop()}var i}),e)})));return function(t,s,n){return e.apply(this,arguments)}}(),ce=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("/comments/".concat(t));case 2:L((function(e){return e.filter((function(e){return e.id!==t}))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=Object(d.useRef)(!1);return Object(d.useEffect)((function(){ae.current?X(!1):ae.current=!0}),[D]),Object(m.jsx)("main",{className:"section",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"tile is-ancestor",children:[Object(m.jsx)("div",{className:"tile is-parent",children:Object(m.jsxs)("div",{className:"tile is-child box is-success",children:[Object(m.jsx)("div",{className:"block",children:Object(m.jsx)(x,{users:N,selectedUser:D,selectUser:function(e){R(e)}})}),Object(m.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!D&&Object(m.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),s&&Object(m.jsx)(h,{}),Y&&!te.length&&Object(m.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),D&&!te.length&&!s&&Object(m.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),D&&te.length>0&&!s&&Object(m.jsx)(b,{filteredPosts:te,selectedPost:q,setIsSelected:X,isSelected:Q,selectPost:function(e){V(e)}})]})]})}),Object(m.jsx)("div",{"data-cy":"Sidebar",className:j()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":Q}),children:Object(m.jsx)("div",{className:"tile is-child box is-success ",children:Object(m.jsx)(f,{selectedPost:q,filteredComments:se,isCommentLoading:u,isError:Y,handleAddComment:ne,handleRemoveComment:ce})})})]})})})};c.a.render(Object(m.jsx)(P,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.7ea435b3.chunk.js.map