import{j as b,r as p,ag as a,o as V,c as R,a as e,V as r,U as m,P as l,a3 as N,a9 as D,T as q,bh as B,bf as K}from"./@vue-57ff52f9.js";import{u as T,b as A}from"./vue-router-8555237b.js";import{_ as U}from"./index-dca4f6ac.js";import"./pinia-00fcc55c.js";import"./spark-md5-66a43a5d.js";import"./aplayer-585df14e.js";import"./element-plus-ef3483b5.js";import"./lodash-es-36eb724a.js";import"./@vueuse-7d05ada6.js";import"./@element-plus-b7409ee9.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-5d216acc.js";import"./async-validator-10c6301d.js";import"./memoize-one-297ddbcb.js";import"./escape-html-9626137c.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-880a26aa.js";import"./vue-cookies-fc2d14d9.js";import"./@highlightjs-b4f50377.js";import"./highlight.js-6845818c.js";import"./axios-4a70c6fc.js";import"./docx-preview-6a55e1c1.js";import"./jszip-057f312d.js";import"./xlsx-04f2268f.js";import"./vue-pdf-embed-d49914df.js";import"./vue-60347265.js";import"./vue3-pdfjs-749e1b4f.js";import"./pdfjs-dist-dcaaa779.js";import"./dommatrix-b4915c8e.js";import"./web-streams-polyfill-ab743aaf.js";import"./dplayer-d4a41b2a.js";import"./vue-clipboard3-69020072.js";import"./clipboard-0f4a3daa.js";const f=n=>(B("data-v-9c6a81ef"),n=n(),K(),n),j={class:"share"},E={class:"body-content"},L=f(()=>e("div",{class:"logo"},[e("span",{class:"iconfont icon-pan"}),e("span",{class:"name"},"Small云盘")],-1)),M={class:"code-panel"},P={class:"file-info"},$={class:"avatar"},z={class:"share-info"},F={class:"user-info"},G={class:"nick-name"},H={class:"share-time"},J={class:"file-name"},O={class:"code-body"},Q=f(()=>e("div",{class:"tips"},"请输入提取码：",-1)),W={class:"input-area"},X={__name:"ShareCheck",setup(n){const{proxy:d}=b(),v=T(),S=A(),_={getShareInfo:"/showShare/getShareInfo",checkShareCode:"/showShare/checkShareCode"},c=S.params.shareId,t=p({});(async()=>{let o=await d.Request({url:_.getShareInfo,params:{shareId:c}});o&&(t.value=o.data)})();const i=p({}),u=p(),I={code:[{required:!0,message:"请输入提取码"},{min:5,message:"提取码为5位"},{max:5,message:"提取码为5位"}]},h=async()=>{u.value.validate(async o=>{!o||!await d.Request({url:_.checkShareCode,params:{shareId:c,code:i.value.code}})||v.push(`/share/${c}`)})};return(o,s)=>{const y=a("Avatar"),g=a("el-input"),k=a("el-button"),C=a("el-form-item"),w=a("el-form");return V(),R("div",j,[e("div",E,[L,e("div",M,[e("div",P,[e("div",$,[r(y,{userId:t.value.userId,avatar:t.value.avatar,width:50},null,8,["userId","avatar"])]),e("div",z,[e("div",F,[e("span",G,m(t.value.nickName),1),e("span",H,"分享于 "+m(t.value.shareTime),1)]),e("div",J,"分享文件："+m(t.value.fileName),1)])]),e("div",O,[Q,e("div",W,[r(w,{model:i.value,rules:I,ref_key:"formDataRef",ref:u,maxLength:5,onSubmit:s[1]||(s[1]=N(()=>{},["prevent"]))},{default:l(()=>[r(C,{prop:"code"},{default:l(()=>[r(g,{class:"input",modelValue:i.value.code,"onUpdate:modelValue":s[0]||(s[0]=x=>i.value.code=x),onKeyup:D(h,["enter"])},null,8,["modelValue","onKeyup"]),r(k,{type:"primary",onClick:h},{default:l(()=>[q("提取文件")]),_:1})]),_:1})]),_:1},8,["model"])])])])])])}}},Ke=U(X,[["__scopeId","data-v-9c6a81ef"]]);export{Ke as default};
