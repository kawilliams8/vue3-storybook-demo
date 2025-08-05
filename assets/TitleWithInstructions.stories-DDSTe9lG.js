import{d as S,m as B,u as q,a as X,c as R,r as $,p as Z,t as ee,b as L,o as i,e as u,f as p,g as A,n as b,h as D,i as n,w as x,j as te,k as se,l as k,v as ne,T as oe,F as le,q as ae,s as ie,x as C,y as c,z,A as P,B as re,C as ce}from"./iframe-B-2Zgie6.js";import{u as pe,c as ue,I as j}from"./iconify-C3zvL3Nq.js";import{u as de,a as me}from"./useShowHide-CXGi2s6p-BzrNYP-U.js";import"./preload-helper-D9Z9MdNV.js";const he=S({inheritAttrs:!1,__name:"BCollapse",props:B({horizontal:{type:Boolean,default:!1},id:{default:void 0},isNav:{type:Boolean,default:!1},tag:{default:"div"},initialAnimation:{type:Boolean,default:!1},noAnimation:{type:Boolean,default:!1},noFade:{type:Boolean},lazy:{type:Boolean,default:!1},unmountLazy:{type:Boolean,default:!1},show:{type:Boolean,default:!1},transProps:{},visible:{type:Boolean,default:!1}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:B(["hide","hide-prevented","hidden","show","show-prevented","shown","toggle","toggle-prevented","cancel","ok"],["update:modelValue"]),setup(s,{expose:o,emit:l}){const t=pe(s,"BCollapse"),I=l,m=q(s,"modelValue"),r=de(()=>t.id,"collapse"),E=X("_element");let h=!1;const H=e=>{h=!0,requestAnimationFrame(()=>{t.horizontal?e.style.width=`${e.scrollWidth}px`:e.style.height=`${e.scrollHeight}px`})},M=e=>{h||(t.horizontal?e.style.width=`${e.scrollWidth}px`:e.style.height=`${e.scrollHeight}px`,e.offsetHeight)},G=e=>{requestAnimationFrame(()=>{t.horizontal?e.style.width="":e.style.height=""})},O=e=>{e.style.height="",e.style.width="",h=!1},Y=e=>{e.style.height="",e.style.width="",h=!1},{showRef:v,renderRef:K,hide:T,show:w,toggle:W,isActive:N,computedNoAnimation:F,contentShowing:V,transitionProps:J}=me(m,t,I,E,r,{transitionProps:{onBeforeLeave:M,onEnter:H,onLeave:G,onAfterEnter:O,onAfterLeave:Y,enterToClass:"",leaveToClass:"",enterFromClass:"",leaveFromClass:"",enterActiveClass:"",leaveActiveClass:""}}),Q=R(()=>({show:N.value,"navbar-collapse":t.isNav,"collapse-horizontal":t.horizontal})),_=R(()=>({toggle:W,show:w,hide:T,id:r.value,visible:v.value,active:N.value}));return o({hide:T,isNav:t.isNav,show:w,toggle:W,visible:$(v)}),Z(ue,{id:r,hide:T,show:w,toggle:W,visible:$(v),isNav:ee(()=>t.isNav)}),(e,Ce)=>(i(),L(le,null,[u(e.$slots,"header",b(D(_.value))),n(K)||n(V)?(i(),p(oe,k({key:0},n(J),{"enter-active-class":n(F)?"":"collapsing","leave-active-class":n(F)?"":"collapsing",appear:m.value||n(t).visible}),{default:x(()=>[te((i(),p(se(n(t).tag),k({id:n(r),ref:"_element",class:["collapse",Q.value],"is-nav":n(t).isNav},e.$attrs),{default:x(()=>[n(V)?u(e.$slots,"default",b(k({key:0},_.value))):A("",!0)]),_:3},16,["id","class","is-nav"])),[[ne,n(v)]])]),_:3},16,["enter-active-class","leave-active-class","appear"])):A("",!0),u(e.$slots,"footer",b(D(_.value)))],64))}}),U=S({__name:"RotatingCaret",props:{model:{type:Boolean}},setup(s){const o=s,l=ae(!1);return ie(()=>o.model,()=>{l.value=!0},{once:!0}),(a,t)=>a.model?(i(),p(n(j),{key:0,icon:"bi:caret-down-fill",class:C(l.value?"rotate-right":""),style:{color:"var(--bs-primary)"}},null,8,["class"])):(i(),p(n(j),{key:1,icon:"bi:caret-right-fill",class:C(l.value?"rotate-left":""),style:{color:"var(--bs-primary)"}},null,8,["class"]))}}),ve=(s,o)=>{const l=s.__vccOpts||s;for(const[a,t]of o)l[a]=t;return l},ge=ve(U,[["__scopeId","data-v-1f066d25"]]);U.__docgenInfo={exportName:"default",displayName:"RotatingCaret",description:"",tags:{},props:[{name:"model",required:!1,type:{name:"boolean"}}],sourceFiles:["/Users/katherin/Desktop/Projects/vue3-storybook-demo/src/components/RotatingCaret.vue"]};const fe={class:"w-100"},ye={class:"d-flex flex-row justify-content-start w-100"},d=S({name:"TitleWithInstructions",__name:"TitleWithInstructions",props:B({contentClass:{},small:{type:Boolean},title:{}},{modelValue:{type:Boolean,default:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const o=q(s,"modelValue");function l(){o.value=!o.value}return(a,t)=>{const I=P("IBiCaretDownFill"),m=P("IBiCaretRightFill");return i(),L("div",fe,[c("div",ye,[c("div",{class:C("text-truncate "+a.$props.contentClass)},[c("strong",{style:{cursor:"pointer"},onClick:l},[u(a.$slots,"title",{},()=>[re(ce(a.$props.title),1)])])],2),c("div",{class:"ms-1",style:{color:"var(--bs-primary)",cursor:"pointer","margin-top":"-0.1rem","align-content":"center"},onClick:l},[o.value?(i(),p(I,{key:0})):(i(),p(m,{key:1})),z(ge,{model:o.value},null,8,["model"])])]),t[1]||(t[1]=c("hr",{class:"mt-0 mb-1"},null,-1)),z(n(he),{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=r=>o.value=r)},{default:x(()=>[c("div",{class:C(a.$props.small?"small":"")},[u(a.$slots,"default")],2)]),_:3},8,["modelValue"])])}}});d.__docgenInfo={name:"TitleWithInstructions",exportName:"default",displayName:"TitleWithInstructions",description:"",tags:{},props:[{name:"contentClass",required:!1,type:{name:"string"}},{name:"small",required:!1,type:{name:"boolean"}},{name:"title",required:!1,type:{name:"string"}}],slots:[{name:"title"},{name:"default"}],sourceFiles:["/Users/katherin/Desktop/Projects/vue3-storybook-demo/src/components/TitleWithInstructions.vue"]};const _e={title:"Components/TitleWithInstructions",component:d,parameters:{layout:"centered",docs:{description:{component:"A collapsible component with a title and hidden instructions that can be expanded/collapsed."}}},argTypes:{title:{control:"text",description:"The title text to display"},contentClass:{control:"text",description:"Additional CSS classes for the content area"},small:{control:"boolean",description:"Whether to use small text for the content"}},tags:["autodocs"]},g={args:{title:"Click to expand instructions"},render:s=>({components:{TitleWithInstructions:d},setup(){return{args:s}},template:`
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
    `})},f={args:{title:"Custom styled instructions",contentClass:"text-primary",small:!0},render:s=>({components:{TitleWithInstructions:d},setup(){return{args:s}},template:`
      <TitleWithInstructions v-bind="args">
        <template #title>
          {{ args.title }}
        </template>
        <div>
          <p>This content has custom styling applied.</p>
          <p class="text-muted">This text is muted and smaller.</p>
        </div>
      </TitleWithInstructions>
    `})},y={args:{title:"Detailed Instructions"},render:s=>({components:{TitleWithInstructions:d},setup(){return{args:s}},template:`
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
    `})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const be=["Default","WithCustomStyling","LongContent"];export{g as Default,y as LongContent,f as WithCustomStyling,be as __namedExportsOrder,_e as default};
