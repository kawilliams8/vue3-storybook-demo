import{d as k,f as v,o as a,w as z,b as C,g as P,B as D,i as B,C as x,x as V}from"./iframe-B-2Zgie6.js";import{I as w}from"./iconify-C3zvL3Nq.js";import{b as I}from"./BButton.vue_vue_type_script_setup_true_lang-D-y5ASo--DD-bvKjc.js";import"./preload-helper-D9Z9MdNV.js";const L={key:0,class:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"},W=k({__name:"UPButton",props:{label:{type:String,default:"Button"},variant:{type:String,default:"primary",validator:e=>["primary","secondary","success","danger","warning","info","light","dark","outline-primary","outline-secondary","outline-success","outline-danger","outline-warning","outline-info","outline-light","outline-dark"].includes(e)},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},icon:{type:String,default:""},iconPosition:{type:String,default:"left",validator:e=>["left","right"].includes(e)},fullWidth:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},customClass:{type:String,default:""}},setup(e){return(O,R)=>(a(),v(B(I),{variant:e.variant,size:e.size,disabled:e.disabled||e.loading,class:V([e.fullWidth?"w-100":"",e.rounded?"rounded-pill":"",e.customClass])},{default:z(()=>[e.loading?(a(),C("span",L)):e.icon&&e.iconPosition==="left"?(a(),v(B(w),{key:1,icon:e.icon,class:"me-2"},null,8,["icon"])):P("",!0),D(" "+x(e.label)+" ",1),e.icon&&e.iconPosition==="right"?(a(),v(B(w),{key:2,icon:e.icon,class:"ms-2"},null,8,["icon"])):P("",!0)]),_:1},8,["variant","size","disabled","class"]))}});W.__docgenInfo={exportName:"default",displayName:"UPButton",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"'Button'"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","success","danger","warning","info","light","dark","outline-primary","outline-secondary","outline-success","outline-danger","outline-warning","outline-info","outline-light","outline-dark"]},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg"]},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"iconPosition",type:{name:"string"},defaultValue:{func:!1,value:"'left'"},values:["left","right"]},{name:"fullWidth",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/Users/katherin/Desktop/Projects/vue3-storybook-demo/src/components/UPButton.vue"]};const A={title:"Components/UPButton",component:W,parameters:{layout:"centered",docs:{description:{component:"A customizable button component built with Bootstrap Vue Next that supports various styles, sizes, and states."}}},argTypes:{label:{control:"text",description:"The text displayed on the button"},variant:{control:{type:"select"},options:["primary","secondary","success","danger","warning","info","light","dark","outline-primary","outline-secondary","outline-success","outline-danger","outline-warning","outline-info","outline-light","outline-dark"],description:"The Bootstrap button variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"The button size"},disabled:{control:"boolean",description:"Whether the button is disabled"},loading:{control:"boolean",description:"Shows a loading spinner and disables the button"},icon:{control:"text",description:'Iconify icon name (e.g., "bi:star", "bi:heart", "bi:arrow-right")'},iconPosition:{control:{type:"select"},options:["left","right"],description:"Position of the icon relative to the text"},fullWidth:{control:"boolean",description:"Makes the button take full width of its container"},rounded:{control:"boolean",description:"Makes the button rounded (pill shape)"},customClass:{control:"text",description:"Additional CSS classes to apply to the button"}},tags:["autodocs"]},n={args:{label:"Click me",variant:"primary",size:"md"}},t={args:{label:"Primary Button",variant:"primary"}},r={args:{label:"Secondary Button",variant:"secondary"}},o={args:{label:"Success Button",variant:"success"}},s={args:{label:"Danger Button",variant:"danger"}},i={args:{label:"Small Button",size:"sm"}},l={args:{label:"Large Button",size:"lg"}},c={args:{label:"Disabled Button",disabled:!0}},u={args:{label:"Loading...",loading:!0}},d={args:{label:"Star",icon:"bi:star",iconPosition:"left"}},m={args:{label:"Heart",icon:"bi:heart",iconPosition:"right"}},p={args:{label:"Continue",icon:"bi:arrow-right",iconPosition:"right"}},g={args:{label:"Download",icon:"bi:download",iconPosition:"left"}},f={args:{label:"Full Width Button",fullWidth:!0}},b={args:{label:"Rounded Button",rounded:!0}},y={args:{label:"Outline Primary",variant:"outline-primary"}},h={args:{label:"Outline Success",variant:"outline-success"}},S={args:{label:"Interactive Button",variant:"primary",size:"md",disabled:!1,loading:!1,icon:"",iconPosition:"left",fullWidth:!1,rounded:!1,customClass:""}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Click me',
    variant: 'primary',
    size: 'md'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary Button',
    variant: 'primary'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Button',
    variant: 'secondary'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Success Button',
    variant: 'success'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Danger Button',
    variant: 'danger'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Button',
    size: 'sm'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large Button',
    size: 'lg'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Button',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Loading...',
    loading: true
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Star',
    icon: 'bi:star',
    iconPosition: 'left'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Heart',
    icon: 'bi:heart',
    iconPosition: 'right'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Continue',
    icon: 'bi:arrow-right',
    iconPosition: 'right'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Download',
    icon: 'bi:download',
    iconPosition: 'left'
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Button',
    fullWidth: true
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Rounded Button',
    rounded: true
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Outline Primary',
    variant: 'outline-primary'
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Outline Success',
    variant: 'outline-success'
  }
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Interactive Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    icon: '',
    iconPosition: 'left',
    fullWidth: false,
    rounded: false,
    customClass: ''
  }
}`,...S.parameters?.docs?.source}}};const E=["Default","Primary","Secondary","Success","Danger","Small","Large","Disabled","Loading","WithIconLeft","WithIconRight","WithArrow","WithDownload","FullWidth","Rounded","OutlinePrimary","OutlineSuccess","Playground"];export{s as Danger,n as Default,c as Disabled,f as FullWidth,l as Large,u as Loading,y as OutlinePrimary,h as OutlineSuccess,S as Playground,t as Primary,b as Rounded,r as Secondary,i as Small,o as Success,p as WithArrow,g as WithDownload,d as WithIconLeft,m as WithIconRight,E as __namedExportsOrder,A as default};
