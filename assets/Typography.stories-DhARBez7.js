import{d as B,b as v,o as r,i as t,p as je,t as k,e as C,z as We,D as Ie,E as qe,c as f,B as V,C as y,x as h,r as ge,q as Pe,s as le,G as me,m as Se,H as Ge,a as Ke,u as Je,I as Qe,f as p,g as m,w,j as Xe,y as he,k as de,n as N,h as D,F as fe,J as M,l as ue,v as Ye,T as Ze,K as _e,L as et}from"./iframe-B-2Zgie6.js";import{u as W,p as Le,a as z,b as tt,d as at,I as Ae}from"./iconify-C3zvL3Nq.js";import{u as He,a as $e,_ as Ne,b as st}from"./BButton.vue_vue_type_script_setup_true_lang-D-y5ASo--DD-bvKjc.js";import{u as ot,a as rt}from"./useShowHide-CXGi2s6p-BzrNYP-U.js";import"./preload-helper-D9Z9MdNV.js";const nt=["type","disabled","aria-label"],ke=B({__name:"BCloseButton",props:{ariaLabel:{default:"Close"},disabled:{type:Boolean,default:!1},type:{default:"button"}},emits:["click"],setup(e,{emit:c}){const o=W(e,"BCloseButton"),a=c;return(l,d)=>(r(),v("button",{type:t(o).type,class:"btn-close",disabled:t(o).disabled,"aria-label":t(o).ariaLabel,onClick:d[0]||(d[0]=u=>a("click",u))},null,8,nt))}}),it=B({__name:"BProgressBar",props:{animated:{type:Boolean,default:!1},label:{default:void 0},max:{default:void 0},precision:{default:0},showProgress:{type:Boolean,default:!1},showValue:{type:Boolean,default:!1},striped:{type:Boolean,default:!1},value:{default:0},variant:{default:null},bgVariant:{default:null},textVariant:{default:null}},setup(e){const s=W(e,"BProgressBar"),o=qe(Le,null),a=He(s),l=f(()=>[a.value,{"progress-bar-animated":s.animated||o?.animated.value,"progress-bar-striped":s.striped||o?.striped.value||s.animated||o?.animated.value}]),d=z(()=>s.precision),u=z(()=>s.value),n=z(()=>s.max??NaN),i=z(()=>o?.max.value??NaN),P=f(()=>s.showValue||o?.showValue.value?u.value.toFixed(d.value):s.showProgress||o?.showProgress.value?(u.value*100/(n.value||100)).toFixed(d.value):s.label!==void 0?s.label:""),T=f(()=>i.value?`${u.value*100/i.value}%`:n.value?`${u.value*100/n.value}%`:typeof s.value=="string"?s.value:`${s.value}%`);return(S,I)=>(r(),v("div",{class:h(["progress-bar",l.value]),style:Ie({width:T.value})},[C(S.$slots,"default",{},()=>[V(y(P.value),1)])],6))}}),lt=["aria-valuenow","aria-valuemax"],De=B({__name:"BProgress",props:{height:{default:void 0},animated:{type:Boolean,default:void 0},max:{default:100},precision:{default:void 0},showProgress:{type:Boolean,default:void 0},showValue:{type:Boolean,default:void 0},striped:{type:Boolean,default:void 0},value:{default:void 0},variant:{default:void 0},bgVariant:{default:void 0},textVariant:{default:void 0}},setup(e){const s=W(e,"BProgress");return je(Le,{animated:k(()=>s.animated),max:k(()=>s.max),showProgress:k(()=>s.showProgress),showValue:k(()=>s.showValue),striped:k(()=>s.striped)}),(o,a)=>(r(),v("div",{class:"progress",role:"progressbar",style:Ie({height:t(s).height}),"aria-valuenow":t(s).value,"aria-valuemin":"0","aria-valuemax":t(s).max},[C(o.$slots,"default",{},()=>[We(it,{animated:t(s).animated,max:t(s).max,precision:t(s).precision,"show-progress":t(s).showProgress,"show-value":t(s).showValue,striped:t(s).striped,value:t(s).value,variant:t(s).variant,"text-variant":t(s).textVariant,"bg-variant":t(s).bgVariant},null,8,["animated","max","precision","show-progress","show-value","striped","value","variant","text-variant","bg-variant"])])],12,lt))}}),dt=(e,c,s={})=>{const o=ge(k(e)),a=Pe(!1),l=Pe(Date.now()+o.value),{isActive:d,pause:u,resume:n,timestamp:i}=tt({interval:c,controls:!0,callback:A=>{A>=l.value&&(a.value=!1,u())},...s}),P=f(()=>l.value-i.value),T=()=>{l.value=Date.now()+o.value,n()};le(o,()=>{o.value>0&&T()});const S=()=>{a.value=!0,u()},I=()=>{a.value=!1;const A=l.value-i.value;l.value=Date.now()+A,n()},b=()=>{u(),i.value=l.value,a.value=!1};return{isActive:ge(d),isPaused:ge(a),stop:b,pause:S,resume:I,restart:T,value:P}},ut=(e,{modelValueIgnoresHover:c,noHoverPause:s,noResumeOnHoverLeave:o},a)=>{const l=at(e),d=()=>{me(s)||a.pause()},u=()=>{me(o)||a.resume()};return le(l,n=>{if(!me(c)){if(n){d();return}u()}}),{isHovering:l}},ct=["id","role","aria-live","aria-atomic"],pt={key:1,class:"d-flex gap-2"},gt=B({__name:"BAlert",props:Se({alertClass:{default:void 0},body:{default:void 0},bodyClass:{default:void 0},closeClass:{default:void 0},closeContent:{default:void 0},closeLabel:{default:"Close"},closeVariant:{default:"secondary"},dismissible:{type:Boolean,default:!1},headerClass:{default:void 0},headerTag:{default:"div"},id:{default:void 0},interval:{default:"requestAnimationFrame"},isStatus:{type:Boolean,default:!1},noHoverPause:{type:Boolean,default:!1},noResumeOnHoverLeave:{type:Boolean,default:!1},progressProps:{default:void 0},showOnPause:{type:Boolean,default:!0},title:{default:void 0},variant:{default:"info"},bgVariant:{default:null},textVariant:{default:null},active:{type:Boolean,default:void 0},activeClass:{default:void 0},disabled:{type:Boolean,default:void 0},exactActiveClass:{default:void 0},href:{default:void 0},icon:{type:Boolean,default:void 0},noRel:{type:Boolean,default:void 0},opacity:{default:void 0},opacityHover:{default:void 0},prefetch:{type:Boolean},prefetchOn:{},noPrefetch:{type:Boolean},prefetchedClass:{},rel:{default:void 0},replace:{type:Boolean,default:void 0},routerComponentName:{default:void 0},stretched:{type:Boolean,default:!1},target:{default:void 0},to:{default:void 0},underlineOffset:{default:void 0},underlineOffsetHover:{default:void 0},underlineOpacity:{default:void 0},underlineOpacityHover:{default:void 0},underlineVariant:{default:void 0},initialAnimation:{type:Boolean,default:!1},noAnimation:{type:Boolean},noFade:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},unmountLazy:{type:Boolean,default:!1},show:{type:Boolean,default:!1},transProps:{default:void 0},visible:{type:Boolean,default:!1}},{modelValue:{type:[Boolean,Number],default:!1},modelModifiers:{}}),emits:Se(["close","close-countdown","hide","hide-prevented","hidden","show","show-prevented","shown","toggle","toggle-prevented","cancel","ok"],["update:modelValue"]),setup(e,{expose:c,emit:s}){const a=W(e,"BAlert"),l=s,d=Ge(),u=Ke("_element"),n=Je(e,"modelValue"),{computedLink:i,computedLinkProps:P}=$e(a),T=ot(()=>a.id,"alert"),{showRef:S,renderRef:I,hide:b,toggle:A,show:ye,buildTriggerableEvent:ve,computedNoAnimation:ze,isVisible:Oe,transitionProps:Re,contentShowing:ce}=rt(n,a,l,u,T),Fe=f(()=>typeof n.value=="boolean"?0:n.value),{isActive:pe,pause:be,restart:we,resume:xe,stop:Te,isPaused:Ce,value:Ve}=dt(Fe,a.interval,{immediate:typeof n.value=="number"&&!!n.value});ut(u,{noHoverPause:()=>a.noHoverPause||typeof n.value!="number",noResumeOnHoverLeave:()=>a.noResumeOnHoverLeave||typeof n.value!="number",modelValueIgnoresHover:()=>typeof n.value=="boolean"},{pause:be,resume:xe}),Qe(()=>{l("close-countdown",Ve.value)});const Ee=f(()=>i.value?Ne:"div"),L=f(()=>S.value||pe.value||a.showOnPause&&Ce.value),Ue=f(()=>[{[`alert-${a.variant}`]:a.variant!==null,"alert-dismissible":a.dismissible&&!(d.close||a.closeContent),show:Oe.value,fade:!ze.value}]);le(n,x=>{if(typeof x=="number"){const g=ve("show",{cancelable:!0,trigger:"model"});l("show",g),g.defaultPrevented?l("show-prevented",ve("show-prevented")):we()}}),le(pe,x=>{x===!1&&Ce.value===!1&&(b(),n.value=0,Te())});const H=f(()=>({toggle:A,show:ye,hide:b,id:T.value,visible:S.value,active:pe.value}));return c({show:ye,hide:b,toggle:A,pause:be,restart:we,resume:xe,stop:Te}),(x,g)=>{const Be=st;return t(I)||t(ce)?(r(),p(Ze,ue({key:0},t(Re),{appear:!!n.value||t(a).visible}),{default:w(()=>[Xe(he("div",{id:t(a).id,ref:"_element",class:h(["alert",[t(a).alertClass,Ue.value]]),tabindex:"0",role:L.value?t(a).isStatus?"status":"alert":void 0,"aria-live":L.value?t(a).isStatus?"polite":"assertive":void 0,"aria-atomic":L.value?!0:void 0},[t(ce)&&(d.title||t(a).title)?(r(),p(de(t(a).headerTag),{key:0,class:h(["alert-heading d-flex gap-2",t(a).headerClass])},{default:w(()=>[C(x.$slots,"title",N(D(H.value)),()=>[he("span",null,y(t(a).title),1)]),t(a).dismissible?(r(),v(fe,{key:0},[d.close||t(a).closeContent?(r(),p(Be,{key:0,class:h([[t(a).closeClass],"ms-auto ps-1 btn-close-custom"]),variant:t(a).closeVariant,onClick:g[0]||(g[0]=M($=>t(b)("close"),["stop","prevent"]))},{default:w(()=>[C(x.$slots,"close",N(D(H.value)),()=>[V(y(t(a).closeContent),1)])]),_:3},8,["class","variant"])):(r(),p(ke,{key:1,"aria-label":t(a).closeLabel,class:h([t(a).closeClass]),onClick:g[1]||(g[1]=M($=>t(b)("close"),["stop","prevent"]))},null,8,["aria-label","class"]))],64)):m("",!0)]),_:3},8,["class"])):m("",!0),t(ce)&&(d.default||t(a).body)?(r(),v("div",pt,[(r(),p(de(Ee.value),ue({class:["alert-body",t(a).bodyClass]},t(P),{onClick:g[2]||(g[2]=$=>t(i)&&t(a).dismissible?t(b)():()=>{})}),{default:w(()=>[C(x.$slots,"default",N(D(H.value)),()=>[V(y(t(a).body),1)])]),_:3},16,["class"])),t(a).dismissible&&!(d.title||t(a).title)?(r(),v(fe,{key:0},[d.close||t(a).closeContent?(r(),p(Be,{key:0,class:h([[t(a).closeClass],"ms-auto btn-close-custom"]),variant:t(a).closeVariant,onClick:g[3]||(g[3]=M($=>t(b)("close"),["stop","prevent"]))},{default:w(()=>[C(x.$slots,"close",N(D(H.value)),()=>[V(y(t(a).closeContent),1)])]),_:3},8,["class","variant"])):(r(),p(ke,{key:1,"aria-label":t(a).closeLabel,class:h([t(a).closeClass]),onClick:g[4]||(g[4]=M($=>t(b)("close"),["stop","prevent"]))},null,8,["aria-label","class"]))],64)):m("",!0)])):m("",!0),typeof n.value=="number"&&t(a).progressProps!==void 0?(r(),p(De,{key:2,animated:t(a).progressProps.animated,precision:t(a).progressProps.precision,"show-progress":t(a).progressProps.showProgress,"show-value":t(a).progressProps.showValue,striped:t(a).progressProps.striped,variant:t(a).progressProps.variant,max:n.value,value:t(Ve),height:"4px"},null,8,["animated","precision","show-progress","show-value","striped","variant","max","value"])):m("",!0)],10,ct),[[Ye,L.value]])]),_:3},16,["appear"])):m("",!0)}}}),mt=B({name:"ConditionalWrapper",inheritAttrs:!1,props:{tag:{type:String,default:"div"},skip:{type:Boolean,required:!0}},slots:Object,setup(e,{slots:c,attrs:s}){return()=>{var o,a;return e.skip?(o=c.default)==null?void 0:o.call(c,{}):_e(e.tag,{...s},[(a=c.default)==null?void 0:a.call(c,{})])}}}),ht=B({__name:"BBadge",props:{dotIndicator:{type:Boolean,default:!1},pill:{type:Boolean,default:!1},placement:{default:void 0},tag:{default:"span"},active:{type:Boolean,default:void 0},activeClass:{default:void 0},disabled:{type:Boolean,default:void 0},exactActiveClass:{default:void 0},href:{default:void 0},icon:{type:Boolean,default:void 0},noRel:{type:Boolean},opacity:{default:void 0},opacityHover:{default:void 0},prefetch:{type:Boolean},prefetchOn:{},noPrefetch:{type:Boolean},prefetchedClass:{},rel:{default:void 0},replace:{type:Boolean,default:void 0},routerComponentName:{default:void 0},stretched:{type:Boolean,default:!1},target:{default:void 0},to:{default:void 0},underlineOffset:{default:void 0},underlineOffsetHover:{default:void 0},underlineOpacity:{default:void 0},underlineOpacityHover:{default:void 0},underlineVariant:{default:void 0},variant:{default:"secondary"},bgVariant:{default:null},textVariant:{default:null}},setup(e){const s=W(e,"BBadge"),{computedLink:o,computedLinkProps:a}=$e(s,["active","activeClass","append","disabled","href","rel","replace","routerComponentName","target","to","opacity","opacityHover","underlineVariant","underlineOffset","underlineOffsetHover","underlineOpacity","underlineOpacityHover","icon"]),l=f(()=>o.value?Ne:s.tag),d=f(()=>{const i=s.placement??(s.dotIndicator?"top-end":void 0);return["position-absolute","translate-middle",{"start-0 top-0":i==="top-start","start-0 top-50":i==="start","start-0 top-100":i==="bottom-start","start-50 top-0":i==="top","start-50 top-100":i==="bottom","start-100 top-0":i==="top-end","start-100 top-50":i==="end","start-100 top-100":i==="bottom-end"}]}),u=He(s),n=f(()=>[u.value,s.placement!==void 0||s.dotIndicator===!0?d.value:void 0,{active:s.active,disabled:s.disabled,"rounded-pill":s.pill,"p-2 border border-light rounded-circle":s.dotIndicator,"text-decoration-none":o.value}]);return(i,P)=>(r(),p(de(l.value),ue({class:["badge",n.value]},t(a)),{default:w(()=>[We(mt,ue({skip:t(s).dotIndicator!==!0,tag:"span"},t(s).dotIndicator?{class:"visually-hidden"}:{}),{default:w(()=>[C(i.$slots,"default")]),_:3},16,["skip"])]),_:3},16,["class"]))}}),ft={key:3,class:"list-group mb-3"},Me=B({name:"UPTypographyComponent",__name:"UPTypography",props:{title:{type:String,default:"Demo Typography"},subtitle:{type:String,default:"A comprehensive typography showcase"},bodyText:{type:String,default:"This is a sample body text that demonstrates various typography styles and Bootstrap components."},headingLevel:{type:String,default:"h1",validator:e=>["h1","h2","h3","h4","h5","h6"].includes(e)},headingColor:{type:String,default:"primary",validator:e=>["primary","secondary","success","danger","warning","info","light","dark","muted","white","body","body-secondary"].includes(e)},textAlignment:{type:String,default:"left",validator:e=>["left","center","right","justify"].includes(e)},textTransform:{type:String,default:"none",validator:e=>["none","lowercase","uppercase","capitalize"].includes(e)},fontWeight:{type:String,default:"normal",validator:e=>["normal","bold","bolder","lighter"].includes(e)},textColor:{type:String,default:"body",validator:e=>["primary","secondary","success","danger","warning","info","light","dark","muted","white","body","body-secondary"].includes(e)},showBadge:{type:Boolean,default:!1},badgeText:{type:String,default:"New"},badgeVariant:{type:String,default:"primary",validator:e=>["primary","secondary","success","danger","warning","info","light","dark"].includes(e)},showList:{type:Boolean,default:!1},listItems:{type:Array,default:()=>["First item","Second item","Third item"]},showAlert:{type:Boolean,default:!1},alertMessage:{type:String,default:"This is an alert message"},alertVariant:{type:String,default:"info",validator:e=>["primary","secondary","success","danger","warning","info","light","dark"].includes(e)},showProgress:{type:Boolean,default:!1},progressValue:{type:Number,default:75,validator:e=>e>=0&&e<=100},progressVariant:{type:String,default:"primary",validator:e=>["primary","secondary","success","danger","warning","info","light","dark"].includes(e)},showIcon:{type:Boolean,default:!1},iconName:{type:String,default:"bi:star"},iconPosition:{type:String,default:"left",validator:e=>["left","right"].includes(e)},fullWidth:{type:Boolean,default:!1},customClass:{type:String,default:""}},setup(e){return(c,s)=>(r(),v("div",{class:h([e.fullWidth?"w-100":"",e.customClass])},[(r(),p(de(e.headingLevel),{class:h(`text-${e.headingColor} text-${e.textAlignment} text-${e.textTransform} fw-${e.fontWeight==="normal"?"normal":e.fontWeight}`)},{default:w(()=>[e.showIcon&&e.iconPosition==="left"?(r(),p(t(Ae),{key:0,icon:e.iconName,class:"me-2"},null,8,["icon"])):m("",!0),V(" "+y(e.title)+" ",1),e.showIcon&&e.iconPosition==="right"?(r(),p(t(Ae),{key:1,icon:e.iconName,class:"ms-2"},null,8,["icon"])):m("",!0),e.showBadge?(r(),p(t(ht),{key:2,variant:e.badgeVariant,class:"ms-2"},{default:w(()=>[V(y(e.badgeText),1)]),_:1},8,["variant"])):m("",!0)]),_:1},8,["class"])),e.subtitle?(r(),v("p",{key:0,class:h([`text-${e.textColor} text-${e.textAlignment} text-${e.textTransform} fw-${e.fontWeight==="normal"?"normal":e.fontWeight}`,"fs-5 mb-3"])},y(e.subtitle),3)):m("",!0),he("p",{class:h([`text-${e.textColor} text-${e.textAlignment} text-${e.textTransform} fw-${e.fontWeight==="normal"?"normal":e.fontWeight}`,"mb-3"])},y(e.bodyText),3),e.showAlert?(r(),p(t(gt),{key:1,variant:e.alertVariant,class:"mb-3",show:""},{default:w(()=>[V(y(e.alertMessage),1)]),_:1},8,["variant"])):m("",!0),e.showProgress?(r(),p(t(De),{key:2,value:e.progressValue,variant:e.progressVariant,class:"mb-3"},null,8,["value","variant"])):m("",!0),e.showList?(r(),v("ul",ft,[(r(!0),v(fe,null,et(e.listItems,(o,a)=>(r(),v("li",{key:a,class:h(`list-group-item text-${e.textColor}`)},y(o),3))),128))])):m("",!0)],2))}});Me.__docgenInfo={name:"UPTypographyComponent",exportName:"default",displayName:"UPTypography",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Demo Typography'"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"'A comprehensive typography showcase'"}},{name:"bodyText",type:{name:"string"},defaultValue:{func:!1,value:"'This is a sample body text that demonstrates various typography styles and Bootstrap components.'"}},{name:"headingLevel",type:{name:"string"},defaultValue:{func:!1,value:"'h1'"},values:["h1","h2","h3","h4","h5","h6"]},{name:"headingColor",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","success","danger","warning","info","light","dark","muted","white","body","body-secondary"]},{name:"textAlignment",type:{name:"string"},defaultValue:{func:!1,value:"'left'"},values:["left","center","right","justify"]},{name:"textTransform",type:{name:"string"},defaultValue:{func:!1,value:"'none'"},values:["none","lowercase","uppercase","capitalize"]},{name:"fontWeight",type:{name:"string"},defaultValue:{func:!1,value:"'normal'"},values:["normal","bold","bolder","lighter"]},{name:"textColor",type:{name:"string"},defaultValue:{func:!1,value:"'body'"},values:["primary","secondary","success","danger","warning","info","light","dark","muted","white","body","body-secondary"]},{name:"showBadge",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"badgeText",type:{name:"string"},defaultValue:{func:!1,value:"'New'"}},{name:"badgeVariant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","success","danger","warning","info","light","dark"]},{name:"showList",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"listItems",type:{name:"array"},defaultValue:{func:!1,value:"['First item', 'Second item', 'Third item']"}},{name:"showAlert",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"alertMessage",type:{name:"string"},defaultValue:{func:!1,value:"'This is an alert message'"}},{name:"alertVariant",type:{name:"string"},defaultValue:{func:!1,value:"'info'"},values:["primary","secondary","success","danger","warning","info","light","dark"]},{name:"showProgress",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"progressValue",type:{name:"number"},defaultValue:{func:!1,value:"75"}},{name:"progressVariant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","success","danger","warning","info","light","dark"]},{name:"showIcon",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"iconName",type:{name:"string"},defaultValue:{func:!1,value:"'bi:star'"}},{name:"iconPosition",type:{name:"string"},defaultValue:{func:!1,value:"'left'"},values:["left","right"]},{name:"fullWidth",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/Users/katherin/Desktop/Projects/vue3-storybook-demo/src/components/UPTypography.vue"]};const Tt={title:"Components/UPTypography",component:Me,parameters:{layout:"centered",docs:{description:{component:"A comprehensive typography component that showcases various Bootstrap text styles, colors, and components including headings, text, badges, alerts, progress bars, and lists."}}},argTypes:{title:{control:"text",description:"The main heading text"},subtitle:{control:"text",description:"The subtitle text"},bodyText:{control:"text",description:"The body paragraph text"},headingLevel:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6"],description:"The heading level (h1-h6)"},headingColor:{control:{type:"select"},options:["primary","secondary","success","danger","warning","info","light","dark","muted","white","body","body-secondary"],description:"The color of the heading"},textAlignment:{control:{type:"select"},options:["left","center","right","justify"],description:"Text alignment"},textTransform:{control:{type:"select"},options:["none","lowercase","uppercase","capitalize"],description:"Text transformation"},fontWeight:{control:{type:"select"},options:["normal","bold","bolder","lighter"],description:"Font weight"},textColor:{control:{type:"select"},options:["primary","secondary","success","danger","warning","info","light","dark","muted","white","body","body-secondary"],description:"The color of the text"},showBadge:{control:"boolean",description:"Show a badge next to the heading"},badgeText:{control:"text",description:"The badge text"},badgeVariant:{control:{type:"select"},options:["primary","secondary","success","danger","warning","info","light","dark"],description:"The badge variant"},showList:{control:"boolean",description:"Show a list below the text"},listItems:{control:"object",description:"Array of list items"},showAlert:{control:"boolean",description:"Show an alert message"},alertMessage:{control:"text",description:"The alert message text"},alertVariant:{control:{type:"select"},options:["primary","secondary","success","danger","warning","info","light","dark"],description:"The alert variant"},showProgress:{control:"boolean",description:"Show a progress bar"},progressValue:{control:{type:"range",min:0,max:100,step:1},description:"Progress bar value (0-100)"},progressVariant:{control:{type:"select"},options:["primary","secondary","success","danger","warning","info","light","dark"],description:"The progress bar variant"},showIcon:{control:"boolean",description:"Show an icon with the heading"},iconName:{control:"text",description:'Iconify icon name (e.g., "bi:star", "bi:heart", "bi:info-circle")'},iconPosition:{control:{type:"select"},options:["left","right"],description:"Position of the icon relative to the heading"},fullWidth:{control:"boolean",description:"Make the component take full width"},customClass:{control:"text",description:"Additional CSS classes"}},tags:["autodocs"]},O={args:{title:"Typography Example",subtitle:"A comprehensive typography showcase",bodyText:"This is a sample body text that demonstrates various typography styles and Bootstrap components."}},R={args:{title:"Heading Examples",subtitle:"Different heading levels",bodyText:"This shows how different heading levels look.",headingLevel:"h1"}},F={args:{title:"H2 Heading",subtitle:"Secondary heading",bodyText:"This is an H2 heading example.",headingLevel:"h2"}},E={args:{title:"Primary Color",subtitle:"Blue primary color",bodyText:"This uses the primary color scheme.",headingColor:"primary",textColor:"primary"}},U={args:{title:"Success Color",subtitle:"Green success color",bodyText:"This uses the success color scheme.",headingColor:"success",textColor:"success"}},j={args:{title:"Danger Color",subtitle:"Red danger color",bodyText:"This uses the danger color scheme.",headingColor:"danger",textColor:"danger"}},q={args:{title:"Centered Text",subtitle:"All text is centered",bodyText:"This demonstrates centered text alignment.",textAlignment:"center"}},G={args:{title:"Right Aligned",subtitle:"All text is right-aligned",bodyText:"This demonstrates right-aligned text.",textAlignment:"right"}},K={args:{title:"Uppercase Text",subtitle:"All text is uppercase",bodyText:"This demonstrates uppercase text transformation.",textTransform:"uppercase"}},J={args:{title:"Capitalized Text",subtitle:"All text is capitalized",bodyText:"This demonstrates capitalized text transformation.",textTransform:"capitalize"}},Q={args:{title:"Bold Text",subtitle:"All text is bold",bodyText:"This demonstrates bold font weight.",fontWeight:"bold"}},X={args:{title:"With Badge",subtitle:"Heading with a badge",bodyText:"This shows a heading with a badge.",showBadge:!0,badgeText:"New",badgeVariant:"success"}},Y={args:{title:"With Danger Badge",subtitle:"Heading with a danger badge",bodyText:"This shows a heading with a danger badge.",showBadge:!0,badgeText:"Warning",badgeVariant:"danger"}},Z={args:{title:"With Icon",subtitle:"Heading with an icon",bodyText:"This shows a heading with an icon.",showIcon:!0,iconName:"bi:star",iconPosition:"left"}},_={args:{title:"With Right Icon",subtitle:"Heading with icon on the right",bodyText:"This shows a heading with an icon on the right.",showIcon:!0,iconName:"bi:arrow-right",iconPosition:"right"}},ee={args:{title:"With Alert",subtitle:"Typography with an alert",bodyText:"This shows typography with an alert message.",showAlert:!0,alertMessage:"This is an important alert message!",alertVariant:"warning"}},te={args:{title:"With Success Alert",subtitle:"Typography with a success alert",bodyText:"This shows typography with a success alert.",showAlert:!0,alertMessage:"Operation completed successfully!",alertVariant:"success"}},ae={args:{title:"With Progress Bar",subtitle:"Typography with a progress bar",bodyText:"This shows typography with a progress bar.",showProgress:!0,progressValue:75,progressVariant:"primary"}},se={args:{title:"With Success Progress",subtitle:"Typography with a success progress bar",bodyText:"This shows typography with a success progress bar.",showProgress:!0,progressValue:90,progressVariant:"success"}},oe={args:{title:"With List",subtitle:"Typography with a list",bodyText:"This shows typography with a list below.",showList:!0,listItems:["First important item","Second important item","Third important item"]}},re={args:{title:"With Custom List",subtitle:"Typography with a custom list",bodyText:"This shows typography with a custom list.",showList:!0,listItems:["Feature 1: Responsive design","Feature 2: Bootstrap components","Feature 3: Iconify integration"]}},ne={args:{title:"Complex Typography",subtitle:"Multiple components together",bodyText:"This demonstrates multiple typography components working together.",showBadge:!0,badgeText:"Featured",badgeVariant:"info",showIcon:!0,iconName:"bi:star-fill",iconPosition:"left",showAlert:!0,alertMessage:"This is a complex example with multiple components!",alertVariant:"info",showProgress:!0,progressValue:85,progressVariant:"success",showList:!0,listItems:["Component 1: Typography","Component 2: Badges","Component 3: Alerts","Component 4: Progress"]}},ie={args:{title:"Interactive Typography",subtitle:"Customize all properties",bodyText:"Use the controls to customize this typography component.",headingLevel:"h1",headingColor:"primary",textAlignment:"left",textTransform:"none",fontWeight:"normal",textColor:"body",showBadge:!1,badgeText:"New",badgeVariant:"primary",showList:!1,listItems:["Item 1","Item 2","Item 3"],showAlert:!1,alertMessage:"Alert message",alertVariant:"info",showProgress:!1,progressValue:75,progressVariant:"primary",showIcon:!1,iconName:"bi:star",iconPosition:"left",fullWidth:!1,customClass:""}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Typography Example',
    subtitle: 'A comprehensive typography showcase',
    bodyText: 'This is a sample body text that demonstrates various typography styles and Bootstrap components.'
  }
}`,...O.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Heading Examples',
    subtitle: 'Different heading levels',
    bodyText: 'This shows how different heading levels look.',
    headingLevel: 'h1'
  }
}`,...R.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'H2 Heading',
    subtitle: 'Secondary heading',
    bodyText: 'This is an H2 heading example.',
    headingLevel: 'h2'
  }
}`,...F.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Primary Color',
    subtitle: 'Blue primary color',
    bodyText: 'This uses the primary color scheme.',
    headingColor: 'primary',
    textColor: 'primary'
  }
}`,...E.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Success Color',
    subtitle: 'Green success color',
    bodyText: 'This uses the success color scheme.',
    headingColor: 'success',
    textColor: 'success'
  }
}`,...U.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Danger Color',
    subtitle: 'Red danger color',
    bodyText: 'This uses the danger color scheme.',
    headingColor: 'danger',
    textColor: 'danger'
  }
}`,...j.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Centered Text',
    subtitle: 'All text is centered',
    bodyText: 'This demonstrates centered text alignment.',
    textAlignment: 'center'
  }
}`,...q.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Right Aligned',
    subtitle: 'All text is right-aligned',
    bodyText: 'This demonstrates right-aligned text.',
    textAlignment: 'right'
  }
}`,...G.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Uppercase Text',
    subtitle: 'All text is uppercase',
    bodyText: 'This demonstrates uppercase text transformation.',
    textTransform: 'uppercase'
  }
}`,...K.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Capitalized Text',
    subtitle: 'All text is capitalized',
    bodyText: 'This demonstrates capitalized text transformation.',
    textTransform: 'capitalize'
  }
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Bold Text',
    subtitle: 'All text is bold',
    bodyText: 'This demonstrates bold font weight.',
    fontWeight: 'bold'
  }
}`,...Q.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'With Badge',
    subtitle: 'Heading with a badge',
    bodyText: 'This shows a heading with a badge.',
    showBadge: true,
    badgeText: 'New',
    badgeVariant: 'success'
  }
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'With Danger Badge',
    subtitle: 'Heading with a danger badge',
    bodyText: 'This shows a heading with a danger badge.',
    showBadge: true,
    badgeText: 'Warning',
    badgeVariant: 'danger'
  }
}`,...Y.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'With Icon',
    subtitle: 'Heading with an icon',
    bodyText: 'This shows a heading with an icon.',
    showIcon: true,
    iconName: 'bi:star',
    iconPosition: 'left'
  }
}`,...Z.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'With Right Icon',
    subtitle: 'Heading with icon on the right',
    bodyText: 'This shows a heading with an icon on the right.',
    showIcon: true,
    iconName: 'bi:arrow-right',
    iconPosition: 'right'
  }
}`,..._.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'With Alert',
    subtitle: 'Typography with an alert',
    bodyText: 'This shows typography with an alert message.',
    showAlert: true,
    alertMessage: 'This is an important alert message!',
    alertVariant: 'warning'
  }
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'With Success Alert',
    subtitle: 'Typography with a success alert',
    bodyText: 'This shows typography with a success alert.',
    showAlert: true,
    alertMessage: 'Operation completed successfully!',
    alertVariant: 'success'
  }
}`,...te.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'With Progress Bar',
    subtitle: 'Typography with a progress bar',
    bodyText: 'This shows typography with a progress bar.',
    showProgress: true,
    progressValue: 75,
    progressVariant: 'primary'
  }
}`,...ae.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'With Success Progress',
    subtitle: 'Typography with a success progress bar',
    bodyText: 'This shows typography with a success progress bar.',
    showProgress: true,
    progressValue: 90,
    progressVariant: 'success'
  }
}`,...se.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'With List',
    subtitle: 'Typography with a list',
    bodyText: 'This shows typography with a list below.',
    showList: true,
    listItems: ['First important item', 'Second important item', 'Third important item']
  }
}`,...oe.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'With Custom List',
    subtitle: 'Typography with a custom list',
    bodyText: 'This shows typography with a custom list.',
    showList: true,
    listItems: ['Feature 1: Responsive design', 'Feature 2: Bootstrap components', 'Feature 3: Iconify integration']
  }
}`,...re.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Complex Typography',
    subtitle: 'Multiple components together',
    bodyText: 'This demonstrates multiple typography components working together.',
    showBadge: true,
    badgeText: 'Featured',
    badgeVariant: 'info',
    showIcon: true,
    iconName: 'bi:star-fill',
    iconPosition: 'left',
    showAlert: true,
    alertMessage: 'This is a complex example with multiple components!',
    alertVariant: 'info',
    showProgress: true,
    progressValue: 85,
    progressVariant: 'success',
    showList: true,
    listItems: ['Component 1: Typography', 'Component 2: Badges', 'Component 3: Alerts', 'Component 4: Progress']
  }
}`,...ne.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Interactive Typography',
    subtitle: 'Customize all properties',
    bodyText: 'Use the controls to customize this typography component.',
    headingLevel: 'h1',
    headingColor: 'primary',
    textAlignment: 'left',
    textTransform: 'none',
    fontWeight: 'normal',
    textColor: 'body',
    showBadge: false,
    badgeText: 'New',
    badgeVariant: 'primary',
    showList: false,
    listItems: ['Item 1', 'Item 2', 'Item 3'],
    showAlert: false,
    alertMessage: 'Alert message',
    alertVariant: 'info',
    showProgress: false,
    progressValue: 75,
    progressVariant: 'primary',
    showIcon: false,
    iconName: 'bi:star',
    iconPosition: 'left',
    fullWidth: false,
    customClass: ''
  }
}`,...ie.parameters?.docs?.source}}};const Ct=["Default","HeadingLevels","H2Heading","PrimaryColor","SuccessColor","DangerColor","CenteredText","RightAligned","Uppercase","Capitalized","BoldText","WithBadge","WithDangerBadge","WithIcon","WithRightIcon","WithAlert","WithSuccessAlert","WithProgress","WithSuccessProgress","WithList","WithCustomList","ComplexExample","Playground"];export{Q as BoldText,J as Capitalized,q as CenteredText,ne as ComplexExample,j as DangerColor,O as Default,F as H2Heading,R as HeadingLevels,ie as Playground,E as PrimaryColor,G as RightAligned,U as SuccessColor,K as Uppercase,ee as WithAlert,X as WithBadge,re as WithCustomList,Y as WithDangerBadge,Z as WithIcon,oe as WithList,ae as WithProgress,_ as WithRightIcon,te as WithSuccessAlert,se as WithSuccessProgress,Ct as __namedExportsOrder,Tt as default};
