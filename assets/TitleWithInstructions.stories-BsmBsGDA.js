import{u as De,c as M,t as Re,r as b,w as N,o as Ne,n as D,i as qe,g as $e,a as ie,b as ze,d as je,e as ce,m as re,f as Te,h as He,p as Oe,j as Ue,k as Ce,l as B,q as U,s as q,v as he,x as se,y as me,z as y,A as ue,B as Me,C as Ge,D as oe,E as Ke,T as Ye,F as Je,G as te,H as R,I as ge,J as ye,K as Qe,L as Xe}from"./iframe-B0OdfGsV.js";import{w as Ze,u as Ve,a as _e,g as et,b as tt,c as nt,I as be}from"./iconify-DxVR3b5f.js";import"./preload-helper-D9Z9MdNV.js";const lt=(n,t)=>{const a=De();return M(()=>Re(n)||Ze(a||"",t))};var at=Object.defineProperty,st=(n,t,a)=>t in n?at(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,P=(n,t,a)=>st(n,typeof t!="symbol"?t+"":t,a);class ne{constructor(t,a={}){if(P(this,"cancelable",!0),P(this,"componentId",null),P(this,"_defaultPrevented",!1),P(this,"eventType",""),P(this,"nativeEvent",null),P(this,"_preventDefault"),P(this,"relatedTarget",null),P(this,"target",null),!t)throw new TypeError(`Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`);Object.assign(this,ne.Defaults,a,{eventType:t}),this._preventDefault=function(){this.cancelable&&(this.defaultPrevented=!0)}}get defaultPrevented(){return this._defaultPrevented}set defaultPrevented(t){this._defaultPrevented=t}get preventDefault(){return this._preventDefault}set preventDefault(t){this._preventDefault=t}static get Defaults(){return{cancelable:!0,componentId:null,eventType:"",nativeEvent:null,relatedTarget:null,target:null}}}class ot extends ne{constructor(t,a={}){super(t,a),P(this,"trigger",null),P(this,"ok"),Object.assign(this,ne.Defaults,a,{eventType:t})}static get Defaults(){return{...super.Defaults,trigger:null,ok:void 0}}}const we={name:"fade",enterActiveClass:"",enterFromClass:"showing",enterToClass:"",leaveActiveClass:"",leaveFromClass:"",leaveToClass:"showing",css:!0},it=(n,t,a,m,u,c={transitionProps:{},showFn:()=>{},hideFn:()=>{}})=>{var F;let g=!1;const I=!!n.value&&!t.initialAnimation||t.visible||!1,p=b(I),k=b(I),L=b(I);let $=typeof n.value!="boolean";N(n,()=>{if($=typeof n.value!="boolean",g){g=!1;return}n.value?C():T("modelValue",!0)});const w=b(I),A=b(!1),E=M(()=>t.noAnimation||t.noFade||w.value||!1);let x=!1;Ne(()=>{var e;if(x=!0,!t.show&&I){const l=d("show",{cancelable:!0});if(a("show",l),l.defaultPrevented){a("show-prevented",d("show-prevented"));return}w.value=!0,n.value||(g=!0,n.value=!0),k.value=!0,L.value=!0,W.value=!0,Q.value=!0,O.value=!0,p.value=!0,(e=c.showFn)==null||e.call(c)}else(t.show||n.value&&t.initialAnimation)&&C()}),N(()=>t.visible,e=>{w.value=!0,D(()=>{e&&(W.value=!0),e?C():T("visible-prop",!0)})}),N(()=>t.show,e=>{e?C():T("show-prop",!0)}),Ve(m,"bv-toggle",()=>{n.value=!n.value});const d=(e,l={})=>new ot(e,{cancelable:!1,target:m?.value||null,relatedTarget:null,trigger:null,...l,componentId:u?.value});let f,_,v,h,z;const C=(e=!1)=>{if(p.value&&!_&&!h)return Promise.resolve(!0);if(z=e,p.value&&!_&&h)return h;h=new Promise(o=>{v=o});const l=d("show",{cancelable:!0});return a("show",l),l.defaultPrevented?(a("show-prevented",d("show-prevented")),W.value&&(W.value=!1),n.value&&!$&&(g=!0,D(()=>{n.value=!1})),v?.("show-prevented"),h):(_&&(clearTimeout(_),_=void 0),k.value=!0,L.value=!0,requestAnimationFrame(()=>{var o,s;if(w.value||t.delay===void 0){if(!x)return;f=void 0,p.value=!0,(o=c.showFn)==null||o.call(c),n.value||(g=!0,D(()=>{n.value=!0}));return}f=setTimeout(()=>{var i;x&&(f=void 0,p.value=!0,(i=c.showFn)==null||i.call(c),n.value||(g=!0,D(()=>{n.value=!0})))},typeof t.delay=="number"?t.delay:((s=t.delay)==null?void 0:s.show)||0)}),h)};let S;const T=(e,l)=>{var o;if(!p.value&&!f)return Promise.resolve("");h||(h=new Promise(X=>{v=X})),typeof e!="string"&&(e=void 0),S=e;const s=d("hide",{cancelable:!0,trigger:e}),i=d(e||"ignore",{cancelable:!0,trigger:e});return e==="backdrop"&&t.noCloseOnBackdrop||e==="esc"&&t.noCloseOnEsc?(a("hide-prevented",d("hide-prevented",{trigger:e})),v?.("hide-prevented"),h):(f&&(clearTimeout(f),f=void 0),e&&!l&&a(e,i),a("hide",s),s.defaultPrevented||i.defaultPrevented?(a("hide-prevented",d("hide-prevented",{trigger:e})),n.value||D(()=>{g=!0,n.value=!0}),v?.("hide-prevented"),h):(J.value=!1,f&&(clearTimeout(f),f=void 0,A.value||(k.value=!1),L.value=!1),_=setTimeout(()=>{var X;x&&(_=void 0,H.value=!0,p.value=!1,(X=c.hideFn)==null||X.call(c),n.value&&(g=!0,n.value=$?0:!1))},w.value?0:typeof t.delay=="number"?t.delay:((o=t.delay)==null?void 0:o.hide)||0),h))},r=_e(e=>T(e),500),de=_e(()=>C(),500),ve=(e=!1)=>{const l=d("toggle",{cancelable:!0});return a("toggle",l),l.defaultPrevented?(a("toggle-prevented",d("toggle-prevented")),Promise.resolve("toggle-prevented")):p.value?T("toggle-function",!0):C(e)},le=()=>{const e=d("toggle",{cancelable:!0});if(a("toggle",e),e.defaultPrevented){a("toggle-prevented",d("toggle-prevented"));return}p.value?T("toggle-trigger",!0):C()},j=[],Ie=(e,l)=>{j.push({trigger:e,el:l}),l.addEventListener(e,le),pe(l)},Ae=(e,l,o=!0)=>{const s=j.findIndex(i=>i?.trigger===e&&i.el===l);s>-1&&(j.splice(s,1),l.removeEventListener(e,le),o&&(l.removeAttribute("aria-expanded"),l.classList.remove("collapsed"),l.classList.remove("not-collapsed")))},K=(F=qe(et,void 0))==null?void 0:F.register({id:u.value,toggle:ve,show:C,hide:T,value:ie(p),registerTrigger:Ie,unregisterTrigger:Ae,component:$e()}),pe=e=>{e.setAttribute("aria-expanded",n.value?"true":"false"),e.classList.toggle("collapsed",!n.value),e.classList.toggle("not-collapsed",!!n.value)};N(n,()=>{j.forEach(e=>{pe(e.el)})}),N(u,(e,l)=>{K?.updateId(e,l)}),ze(()=>{K?.unregister(),j.forEach(e=>{e.el.removeEventListener(e.trigger,le)})}),je(()=>{x=!1,clearTimeout(f),clearTimeout(_),f=void 0,_=void 0});const ae=b(!1),fe=()=>{t.lazy===!0&&(ae.value=!0)},H=b(!1),Y=b(I),W=b(I),Be=e=>{var l,o,s,i;(o=(l=c.transitionProps)==null?void 0:l.onBeforeEnter)==null||o.call(l,e),(i=(s=t.transitionProps)==null?void 0:s.onBeforeEnter)==null||i.call(s,e),Y.value=!0},Fe=e=>{var l,o,s,i;requestAnimationFrame(()=>{requestAnimationFrame(()=>{W.value=!0})}),(o=(l=c.transitionProps)==null?void 0:l.onEnter)==null||o.call(l,e),(i=(s=t.transitionProps)==null?void 0:s.onEnter)==null||i.call(s,e)},ke=e=>{var l,o,s,i;fe(),(o=(l=c.transitionProps)==null?void 0:l.onAfterEnter)==null||o.call(l,e),(i=(s=t.transitionProps)==null?void 0:s.onAfterEnter)==null||i.call(s,e),w.value&&requestAnimationFrame(()=>{w.value=!1}),A.value&&(A.value=!1),requestAnimationFrame(()=>{J.value=!0,D(()=>{a("shown",d("shown",{cancelable:!1}))})}),z||(v?.(!0),h=void 0,v=void 0)},Le=e=>{var l,o,s,i;H.value||(H.value=!0),(o=(l=c.transitionProps)==null?void 0:l.onBeforeLeave)==null||o.call(l,e),(i=(s=t.transitionProps)==null?void 0:s.onBeforeLeave)==null||i.call(s,e),J.value=!1},xe=e=>{var l,o,s,i;W.value=!1,(o=(l=c.transitionProps)==null?void 0:l.onLeave)==null||o.call(l,e),(i=(s=t.transitionProps)==null?void 0:s.onLeave)==null||i.call(s,e)},We=e=>{var l,o,s,i;a("hidden",d("hidden",{trigger:S,cancelable:!1})),(o=(l=c.transitionProps)==null?void 0:l.onAfterLeave)==null||o.call(l,e),(i=(s=t.transitionProps)==null?void 0:s.onAfterLeave)==null||i.call(s,e),H.value=!1,Y.value=!1,w.value&&requestAnimationFrame(()=>{w.value=!1}),requestAnimationFrame(()=>{A.value||(k.value=!1)}),v?.(S||""),h=void 0,v=void 0,S=void 0},Ee=M(()=>A.value===!0||Y.value===!0||t.lazy===!1||t.lazy===!0&&ae.value===!0&&t.unmountLazy===!1),J=b(!1),Q=b(!1),O=b(!1),Se={...c.transitionProps,onBeforeEnter:Be,onEnter:Fe,onAfterEnter:ke,onBeforeLeave:Le,onLeave:xe,onAfterLeave:We};return{showRef:p,renderRef:k,renderBackdropRef:L,isVisible:W,isActive:Y,trapActive:J,show:C,hide:T,toggle:ve,throttleHide:r,throttleShow:de,buildTriggerableEvent:d,computedNoAnimation:E,localNoAnimation:w,localTemporaryHide:A,isLeaving:H,transitionProps:{...we,...t.transitionProps,...Se},lazyLoadCompleted:ae,markLazyLoadCompleted:fe,contentShowing:Ee,backdropReady:O,backdropVisible:Q,backdropTransitionProps:{...we,onBeforeEnter:()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{Q.value=!0})}),O.value=!1},onAfterEnter:()=>{O.value=!0},onBeforeLeave:()=>{Q.value=!1},onAfterLeave:()=>{O.value=!1,requestAnimationFrame(()=>{L.value=!1})}}}},rt=ce({inheritAttrs:!1,__name:"BCollapse",props:re({horizontal:{type:Boolean,default:!1},id:{default:void 0},isNav:{type:Boolean,default:!1},tag:{default:"div"},initialAnimation:{type:Boolean,default:!1},noAnimation:{type:Boolean,default:!1},noFade:{type:Boolean},lazy:{type:Boolean,default:!1},unmountLazy:{type:Boolean,default:!1},show:{type:Boolean,default:!1},transProps:{},visible:{type:Boolean,default:!1}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:re(["hide","hide-prevented","hidden","show","show-prevented","shown","toggle","toggle-prevented","cancel","ok"],["update:modelValue"]),setup(n,{expose:t,emit:a}){const u=tt(n,"BCollapse"),c=a,F=Te(n,"modelValue"),g=lt(()=>u.id,"collapse"),I=He("_element");let p=!1;const k=r=>{p=!0,requestAnimationFrame(()=>{u.horizontal?r.style.width=`${r.scrollWidth}px`:r.style.height=`${r.scrollHeight}px`})},L=r=>{p||(u.horizontal?r.style.width=`${r.scrollWidth}px`:r.style.height=`${r.scrollHeight}px`,r.offsetHeight)},$=r=>{requestAnimationFrame(()=>{u.horizontal?r.style.width="":r.style.height=""})},w=r=>{r.style.height="",r.style.width="",p=!1},A=r=>{r.style.height="",r.style.width="",p=!1},{showRef:E,renderRef:x,hide:d,show:f,toggle:_,isActive:v,computedNoAnimation:h,contentShowing:z,transitionProps:C}=it(F,u,c,I,g,{transitionProps:{onBeforeLeave:L,onEnter:k,onLeave:$,onAfterEnter:w,onAfterLeave:A,enterToClass:"",leaveToClass:"",enterFromClass:"",leaveFromClass:"",enterActiveClass:"",leaveActiveClass:""}}),S=M(()=>({show:v.value,"navbar-collapse":u.isNav,"collapse-horizontal":u.horizontal})),T=M(()=>({toggle:_,show:f,hide:d,id:g.value,visible:E.value,active:v.value}));return t({hide:d,isNav:u.isNav,show:f,toggle:_,visible:ie(E)}),Oe(nt,{id:g,hide:d,show:f,toggle:_,visible:ie(E),isNav:Ue(()=>u.isNav)}),(r,de)=>(B(),Ce(Je,null,[U(r.$slots,"header",se(me(T.value))),y(x)||y(z)?(B(),q(Ye,oe({key:0},y(C),{"enter-active-class":y(h)?"":"collapsing","leave-active-class":y(h)?"":"collapsing",appear:F.value||y(u).visible}),{default:ue(()=>[Me((B(),q(Ge(y(u).tag),oe({id:y(g),ref:"_element",class:["collapse",S.value],"is-nav":y(u).isNav},r.$attrs),{default:ue(()=>[y(z)?U(r.$slots,"default",se(oe({key:0},T.value))):he("",!0)]),_:3},16,["id","class","is-nav"])),[[Ke,y(E)]])]),_:3},16,["enter-active-class","leave-active-class","appear"])):he("",!0),U(r.$slots,"footer",se(me(T.value)))],64))}}),Pe=ce({__name:"RotatingCaret",props:{model:{type:Boolean}},setup(n){const t=n,a=b(!1);return N(()=>t.model,()=>{a.value=!0},{once:!0}),(m,u)=>m.model?(B(),q(y(be),{key:0,icon:"bi:caret-down-fill",class:te(a.value?"rotate-right":""),style:{color:"var(--bs-primary)"}},null,8,["class"])):(B(),q(y(be),{key:1,icon:"bi:caret-right-fill",class:te(a.value?"rotate-left":""),style:{color:"var(--bs-primary)"}},null,8,["class"]))}}),ut=(n,t)=>{const a=n.__vccOpts||n;for(const[m,u]of t)a[m]=u;return a},ct=ut(Pe,[["__scopeId","data-v-1f066d25"]]);Pe.__docgenInfo={exportName:"default",displayName:"RotatingCaret",description:"",tags:{},props:[{name:"model",required:!1,type:{name:"boolean"}}],sourceFiles:["/Users/katherin/Desktop/Projects/vue3-storybook-demo/src/components/RotatingCaret.vue"]};const dt={class:"w-100"},vt={class:"d-flex flex-row justify-content-start w-100"},G=ce({name:"TitleWithInstructions",__name:"TitleWithInstructions",props:re({contentClass:{},small:{type:Boolean},title:{}},{modelValue:{type:Boolean,default:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const t=Te(n,"modelValue");function a(){t.value=!t.value}return(m,u)=>{const c=ye("IBiCaretDownFill"),F=ye("IBiCaretRightFill");return B(),Ce("div",dt,[R("div",vt,[R("div",{class:te("text-truncate "+m.$props.contentClass)},[R("strong",{style:{cursor:"pointer"},onClick:a},[U(m.$slots,"title",{},()=>[Qe(Xe(m.$props.title),1)])])],2),R("div",{class:"ms-1",style:{color:"var(--bs-primary)",cursor:"pointer","margin-top":"-0.1rem","align-content":"center"},onClick:a},[t.value?(B(),q(c,{key:0})):(B(),q(F,{key:1})),ge(ct,{model:t.value},null,8,["model"])])]),u[1]||(u[1]=R("hr",{class:"mt-0 mb-1"},null,-1)),ge(y(rt),{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=g=>t.value=g)},{default:ue(()=>[R("div",{class:te(m.$props.small?"small":"")},[U(m.$slots,"default")],2)]),_:3},8,["modelValue"])])}}});G.__docgenInfo={name:"TitleWithInstructions",exportName:"default",displayName:"TitleWithInstructions",description:"",tags:{},props:[{name:"contentClass",required:!1,type:{name:"string"}},{name:"small",required:!1,type:{name:"boolean"}},{name:"title",required:!1,type:{name:"string"}}],slots:[{name:"title"},{name:"default"}],sourceFiles:["/Users/katherin/Desktop/Projects/vue3-storybook-demo/src/components/TitleWithInstructions.vue"]};const mt={title:"Components/TitleWithInstructions",component:G,parameters:{layout:"centered",docs:{description:{component:"A collapsible component with a title and hidden instructions that can be expanded/collapsed."}}},argTypes:{title:{control:"text",description:"The title text to display"},contentClass:{control:"text",description:"Additional CSS classes for the content area"},small:{control:"boolean",description:"Whether to use small text for the content"}},tags:["autodocs"]},Z={args:{title:"Click to expand instructions"},render:n=>({components:{TitleWithInstructions:G},setup(){return{args:n}},template:`
      <TitleWithInstructions v-bind="args">
        <template #title>
          {{ args.title }}
        </template>
        <div>
          <p>This is the collapsible content area. You can put any instructions or content here.</p>
          <ul>
            <li>Step 1: Read the instructions</li>
            <li>Step 2: Follow the steps</li>
            <li>Step 3: Complete the task</li>
          </ul>
        </div>
      </TitleWithInstructions>
    `})},V={args:{title:"Custom styled instructions",contentClass:"text-primary",small:!0},render:n=>({components:{TitleWithInstructions:G},setup(){return{args:n}},template:`
      <TitleWithInstructions v-bind="args">
        <template #title>
          {{ args.title }}
        </template>
        <div>
          <p>This content has custom styling applied.</p>
          <p class="text-muted">This text is muted and smaller.</p>
        </div>
      </TitleWithInstructions>
    `})},ee={args:{title:"Detailed Instructions"},render:n=>({components:{TitleWithInstructions:G},setup(){return{args:n}},template:`
      <TitleWithInstructions v-bind="args">
        <template #title>
          {{ args.title }}
        </template>
        <div>
          <h6>Getting Started</h6>
          <p>This is a comprehensive guide with multiple sections and detailed instructions.</p>

          <h6>Prerequisites</h6>
          <ul>
            <li>Node.js version 20 or higher</li>
            <li>npm or yarn package manager</li>
            <li>Basic knowledge of Vue 3</li>
          </ul>

          <h6>Installation</h6>
          <ol>
            <li>Clone the repository</li>
            <li>Install dependencies with <code>npm install</code></li>
            <li>Run the development server</li>
          </ol>

          <h6>Usage</h6>
          <p>Follow these steps to use the component effectively in your project.</p>
        </div>
      </TitleWithInstructions>
    `})};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Click to expand instructions'
  },
  render: args => ({
    components: {
      TitleWithInstructions
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TitleWithInstructions v-bind="args">
        <template #title>
          {{ args.title }}
        </template>
        <div>
          <p>This is the collapsible content area. You can put any instructions or content here.</p>
          <ul>
            <li>Step 1: Read the instructions</li>
            <li>Step 2: Follow the steps</li>
            <li>Step 3: Complete the task</li>
          </ul>
        </div>
      </TitleWithInstructions>
    \`
  })
}`,...Z.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Custom styled instructions',
    contentClass: 'text-primary',
    small: true
  },
  render: args => ({
    components: {
      TitleWithInstructions
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TitleWithInstructions v-bind="args">
        <template #title>
          {{ args.title }}
        </template>
        <div>
          <p>This content has custom styling applied.</p>
          <p class="text-muted">This text is muted and smaller.</p>
        </div>
      </TitleWithInstructions>
    \`
  })
}`,...V.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Detailed Instructions'
  },
  render: args => ({
    components: {
      TitleWithInstructions
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TitleWithInstructions v-bind="args">
        <template #title>
          {{ args.title }}
        </template>
        <div>
          <h6>Getting Started</h6>
          <p>This is a comprehensive guide with multiple sections and detailed instructions.</p>

          <h6>Prerequisites</h6>
          <ul>
            <li>Node.js version 20 or higher</li>
            <li>npm or yarn package manager</li>
            <li>Basic knowledge of Vue 3</li>
          </ul>

          <h6>Installation</h6>
          <ol>
            <li>Clone the repository</li>
            <li>Install dependencies with <code>npm install</code></li>
            <li>Run the development server</li>
          </ol>

          <h6>Usage</h6>
          <p>Follow these steps to use the component effectively in your project.</p>
        </div>
      </TitleWithInstructions>
    \`
  })
}`,...ee.parameters?.docs?.source}}};const gt=["Default","WithCustomStyling","LongContent"];export{Z as Default,ee as LongContent,V as WithCustomStyling,gt as __namedExportsOrder,mt as default};
