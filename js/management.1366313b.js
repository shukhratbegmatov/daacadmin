(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["management"],{6387:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{attrs:{id:"modal-1",title:"BootstrapVue"}},[a("p",{staticClass:"my-4"},[t._v("Hello from modal!")])]),a("Navbar"),a("div",{staticClass:"container main_card"},[a("div",{staticClass:"table-responsive py-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"p-3"},[a("router-link",{staticClass:"btn bg-primary  text-white d-inline-flex align-items-center me-2",attrs:{to:"/management/create","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("svg",{staticClass:"icon icon-xs me-2",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"}})]),t._v(" Create ")])],1),a("div",{staticClass:"d-flex"},[a("div",{staticClass:"input-group mb-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.page_size,expression:"page_size"}],staticClass:"custom-select",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.page_size=e.target.multiple?a:a[0]},function(e){return t.selected_page_size()}]}},[a("option",{attrs:{value:"10",selected:""}},[t._v("10")]),a("option",{attrs:{value:"20"}},[t._v("20")]),a("option",{attrs:{value:"30"}},[t._v("30")]),a("option",{attrs:{value:"40"}},[t._v("100")])])]),t._m(0)]),a("table",{staticClass:"table table-flush",attrs:{id:"datatable"}},[t._m(1),t.$store.state.managements?a("tbody",t._l(t.$store.state.managements.results,(function(e,i){return a("tr",{key:i},[a("td",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.created_on))]),a("td",[t._v(t._s(e.updated_on))]),a("td",[a("router-link",{staticClass:"btn",attrs:{to:"/management/edit?id="+e.id}},[a("b-icon",{attrs:{icon:"pencil",scale:"2",variant:"dark"}})],1),a("button",{staticClass:"btn",on:{click:function(a){return t.deletes(e=e.id)}}},[a("b-icon",{attrs:{icon:"x-circle",scale:"2",variant:"danger"}})],1)],1)])})),0):t._e()]),t._e()])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("div",{staticClass:"form-inline"},[a("div",{staticClass:"form-group mx-sm-3 mb-2"},[a("input",{staticClass:"form-control",attrs:{type:"password",id:"inputPassword2",placeholder:"Search"}})]),a("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"}},[t._v("Search")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-light"},[a("tr",[a("th",[t._v("Id")]),a("th",[t._v("Title")]),a("th",[t._v("Create at")]),a("th",[t._v("Update at")]),a("th",[t._v("Action")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Previous")])]),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("1")])]),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("2")])]),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("3")])]),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Next")])])])])}],n=a("d178"),r={components:{Navbar:n["a"]},data:function(){return{data:[],page_size:10}},mounted:function(){this.$store.dispatch("management",{page_size:this.page_size})},methods:{selected_page_size:function(){this.$store.dispatch("management",{page_size:this.page_size})},deletes:function(t){var e=this,a=confirm("You really want to delete?");1==a&&this.$http.delete("/api/management/"+t+"/",{headers:{Authorization:"Token "+localStorage.getItem("m_token"),"Accept-Language":"uz-latin"}}).then((function(){e.$router.go("/")}))}}},o=r,l=(a("a863"),a("2877")),d=Object(l["a"])(o,i,s,!1,null,null,null);e["default"]=d.exports},"76cc":function(t,e,a){},"7a6f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),a("div",{staticClass:"container main_card"},[a("b-card",{attrs:{"no-body":""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-9"},[a("b-tabs",{attrs:{card:""}},[a("b-tab",{attrs:{title:"Rus",active:""}},[a("b-card-text",[a("form",{on:{submit:function(e){return e.preventDefault(),t.post_ru()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12  mb-3"},[a("div",[a("label",{attrs:{for:"first_name"}},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{id:"first_namee",type:"text",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),a("div",{staticClass:"col-md-12  mb-3"},[a("div",[a("label",{attrs:{for:"first_name"}},[t._v("leader")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.leader,expression:"leader"}],staticClass:"form-control",attrs:{id:"first_namee",type:"text",required:""},domProps:{value:t.leader},on:{input:function(e){e.target.composing||(t.leader=e.target.value)}}})])]),a("div",{staticClass:"col-md-12  mb-3"},[a("div",[a("label",{attrs:{for:"first_name"}},[t._v("facebook_link")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.birthdate,expression:"birthdate"}],staticClass:"form-control",attrs:{id:"first_namee",type:"text",required:""},domProps:{value:t.birthdate},on:{input:function(e){e.target.composing||(t.birthdate=e.target.value)}}})])]),a("div",{staticClass:"col-md-12  mb-3"},[a("div",[a("label",{attrs:{for:"first_name"}},[t._v("twitter_link")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.reception,expression:"reception"}],staticClass:"form-control",attrs:{id:"first_namee",type:"text",required:""},domProps:{value:t.reception},on:{input:function(e){e.target.composing||(t.reception=e.target.value)}}})])]),a("div",{staticClass:"col-md-12  mb-3"},[a("div",[a("label",{attrs:{for:"first_name"}},[t._v("instagram_link")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],staticClass:"form-control",attrs:{id:"first_namee",type:"text",required:""},domProps:{value:t.task},on:{input:function(e){e.target.composing||(t.task=e.target.value)}}})])])]),a("div",{staticClass:"mt-3"},[a("button",{staticClass:"btn btn-gray-800 mt-2 animate-up-2",attrs:{type:"submit"}},[t._v("Save all")])])])])],1),a("b-tab",{attrs:{title:"Uzbek lotin"}},[a("b-card-text",[a("form",{on:{submit:function(e){return e.preventDefault(),t.put_uzl()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12  mb-3"},[a("div",[a("label",{attrs:{for:"first_name"}},[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{id:"first_namee",type:"text",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),a("div",{staticClass:"col-md-12  mb-3"},[a("div",[a("label",{attrs:{for:"first_name"}},[t._v("leader")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.leader,expression:"leader"}],staticClass:"form-control",attrs:{id:"first_namee",type:"text",required:""},domProps:{value:t.leader},on:{input:function(e){e.target.composing||(t.leader=e.target.value)}}})])]),a("div",{staticClass:"col-md-12  mb-3"},[a("div",[a("label",{attrs:{for:"first_name"}},[t._v("facebook_link")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.birthdate,expression:"birthdate"}],staticClass:"form-control",attrs:{id:"first_namee",type:"text",required:""},domProps:{value:t.birthdate},on:{input:function(e){e.target.composing||(t.birthdate=e.target.value)}}})])]),a("div",{staticClass:"col-md-12  mb-3"},[a("div",[a("label",{attrs:{for:"first_name"}},[t._v("twitter_link")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.reception,expression:"reception"}],staticClass:"form-control",attrs:{id:"first_namee",type:"text",required:""},domProps:{value:t.reception},on:{input:function(e){e.target.composing||(t.reception=e.target.value)}}})])]),a("div",{staticClass:"col-md-12  mb-3"},[a("div",[a("label",{attrs:{for:"first_name"}},[t._v("instagram_link")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],staticClass:"form-control",attrs:{id:"first_namee",type:"text",required:""},domProps:{value:t.task},on:{input:function(e){e.target.composing||(t.task=e.target.value)}}})])])]),a("div",{staticClass:"mt-3"},[a("button",{staticClass:"btn btn-gray-800 mt-2 animate-up-2",attrs:{type:"submit"}},[t._v("Save all")])])])])],1)],1)],1),a("div",{staticClass:"col-md-3 media"},[a("input",{ref:"datafiles",staticClass:"d-none",attrs:{type:"file",id:"cr_image",multiple:"",accept:"image/*",name:"datafiles"},on:{change:t.trySubmitFile}}),a("div",[a("label",{staticClass:"btn btn-primary file_label",attrs:{for:"cr_image"}},[t._v("image")])])])])])],1)],1)},s=[],n=a("53ca"),r=(a("a630"),a("3ca3"),a("d3b7"),a("159b"),a("d178")),o={components:{Navbar:r["a"]},data:function(){return{id:"",title:"",selected:[],status:"",selectitem:"",leader:"",reception:"",task:"",previous_work:"",education:"",department:"",birthdate:"",phone_number:"",email:"",myImages:[],imageUrl:[],files_name:[]}},mounted:function(){var t=this;this.$http.get("/api/management").then((function(e){t.selected=e.data})),this.id=this.$route.query.id},methods:{trySubmitFile:function(t){for(var e=this,a=0;a<t.target.files.length;a++)this.files_name.push(t.target.files[a]);var i=Array.from(t.target.files);console.log(Object(n["a"])(i)),i.forEach((function(t){e.myImages.push(t);var a=new FileReader,i=e;a.onload=function(t){i.imageUrl.push(t.target.result)},a.readAsDataURL(t)}))},post_ru:function(){var t=this,e=new FormData;e.append("image",this.myImages[0]),e.append("leader",this.leader),e.append("title",this.title),e.append("facebook_link",this.birthdate),e.append("twitter_link",this.reception),e.append("instagram_link",this.task),this.$http.put("/api/management/"+this.id+"/",e,{headers:{Authorization:"Token "+localStorage.getItem("m_token"),"Accept-Language":"ru"}}).then((function(e){t.$toasted.show("Create data success",{duration:1e3,type:"info"}),t.id=e.data.id,t.title="",t.document_number="",t.published_date="",t.leader="",t.reception="",t.task="",t.previous_work="",t.education="",t.department="",t.birthdate="",t.phone_number="",t.email=""})).catch((function(){t.$toasted.show("Errors",{duration:1e3,type:"danger"})}))},put_uzl:function(){var t=this,e=new FormData;e.append("image",this.myImages[0]),e.append("leader",this.leader),e.append("title",this.title),e.append("facebook_link",this.birthdate),e.append("twitter_link",this.reception),e.append("instagram_link",this.task),this.$http.put("/api/management/"+this.id+"/",e,{headers:{Authorization:"Token "+localStorage.getItem("m_token"),"Accept-Language":"uz-latn"}}).then((function(){t.$toasted.show("Create data success",{duration:1e3,type:"info"}),t.title="",t.document_number="",t.published_date="",t.leader="",t.reception="",t.task="",t.previous_work="",t.education="",t.department="",t.birthdate="",t.phone_number="",t.email=""})).catch((function(){t.$toasted.show("Errors",{duration:1e3,type:"danger"})}))},put_uzk:function(){var t=this,e=new FormData;e.append("image",this.myImages[0]),e.append("leader",this.leader),e.append("title",this.title),e.append("reception",this.reception),e.append("task",this.task),e.append("previous_work",this.previous_work),e.append("education",this.education),e.append("department",this.department),e.append("birthdate",this.birthdate),e.append("phone_number",this.phone_number),e.append("status",this.status),e.append("email",this.email),e.append("management_category_id",this.selectitem),this.$http.put("/api/leaders/"+this.id+"/",e,{headers:{Authorization:"Token "+localStorage.getItem("m_token"),"Accept-Language":"uz-cyrl"}}).then((function(){t.$toasted.show("Create data success",{duration:1e3,type:"info"}),t.title="",t.document_number="",t.published_date="",t.leader="",t.reception="",t.task="",t.previous_work="",t.education="",t.department="",t.birthdate="",t.phone_number="",t.email=""})).catch((function(){t.$toasted.show("Errors",{duration:1e3,type:"danger"})}))},put_en:function(){var t=this,e=new FormData;e.append("image",this.myImages[0]),e.append("leader",this.leader),e.append("title",this.title),e.append("reception",this.reception),e.append("task",this.task),e.append("previous_work",this.previous_work),e.append("education",this.education),e.append("department",this.department),e.append("birthdate",this.birthdate),e.append("phone_number",this.phone_number),e.append("status",this.status),e.append("email",this.email),e.append("management_category_id",this.selectitem),this.$http.put("/api/leaders/"+this.id+"/",e,{headers:{Authorization:"Token "+localStorage.getItem("m_token"),"Accept-Language":"en"}}).then((function(){t.$toasted.show("Create data success",{duration:1e3,type:"info"}),t.title="",t.document_number="",t.published_date="",t.leader="",t.reception="",t.task="",t.previous_work="",t.education="",t.department="",t.birthdate="",t.phone_number="",t.email=""})).catch((function(){t.$toasted.show("Errors",{duration:1e3,type:"danger"})}))}}},l=o,d=(a("ec2b"),a("2877")),c=Object(d["a"])(l,i,s,!1,null,null,null);e["default"]=c.exports},a154:function(t,e,a){},a863:function(t,e,a){"use strict";a("76cc")},ec2b:function(t,e,a){"use strict";a("a154")}}]);
//# sourceMappingURL=management.1366313b.js.map