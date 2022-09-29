import{r as d,j as e,a as m,F as p}from"./index.695478b2.js";import"./559fc416.js";import"./253feeee.js";import"./b1a3caaa.js";import"./69908aa2.js";import"./af9144c1.js";import{u}from"./577cd608.js";import"./83f1f962.js";import"./c7826d90.js";import"./e1ef02db.js";import{f as b}from"./dfdcb3d1.js";import{I as h,a as f}from"./e87bd688.js";import"./ef0513dd.js";/* empty css        */import{p as l}from"./6b8b3d9a.js";import"./71c8feb8.js";import"./92add5bc.js";import"./eb46812b.js";import"./4649ee41.js";import"./a9b4e434.js";import"./d6282b27.js";import"./15b7f96c.js";function q(){const[s,c]=d.exports.useState(!1),{country:{isoCode:o}}=u(),n=d.exports.useMemo(()=>({name:new Intl.DisplayNames(["en"],{type:"region"}).of(o),isoCode:o}),[o]),i=d.exports.useCallback(({isoCode:r})=>{const t=window.location.pathname;let a;r!=="US"?n.isoCode==="US"?a=`/${r.toLowerCase()}${t}`:a=`/${r.toLowerCase()}${t.substring(t.indexOf("/",1))}`:a=`${t.substring(t.indexOf("/",1))}`,window.location.href=a},[n]);return e("div",{className:"relative",children:e(l,{onChange:i,children:({open:r})=>(setTimeout(()=>c(r)),m(p,{children:[m(l.Button,{className:`flex items-center justify-between w-full py-3 px-4 border ${r?"rounded-b md:rounded-t md:rounded-b-none":"rounded"} border-contrast/30 dark:border-white`,children:[e("span",{className:"",children:n.name}),e(h,{direction:r?"up":"down"})]}),e(l.Options,{className:`border-t-contrast/30 border-contrast/30 bg-primary dark:bg-contrast absolute bottom-12 z-10 grid
                h-48 w-full overflow-y-scroll rounded-t border dark:border-white px-2 py-2
                transition-[max-height] duration-150 sm:bottom-auto md:rounded-b md:rounded-t-none
                md:border-t-0 md:border-b ${s?"max-h-48":"max-h-0"}`,children:s&&e(d.exports.Suspense,{fallback:e("div",{className:"p-2",children:"Loading\u2026"}),children:e(x,{selectedCountry:n,getClassName:t=>`text-contrast dark:text-primary bg-primary 
                        dark:bg-contrast w-full p-2 transition rounded 
                        flex justify-start items-center text-left cursor-pointer ${t?"bg-primary/10":null}`})})})]}))})})}function x({selectedCountry:s,getClassName:c}){const o=b("/api/countries");let n;return o.ok?n=o.json():console.error(`Unable to load available countries ${o.url} returned a ${o.status}`),n?n.map(i=>{const r=i.isoCode===s.isoCode;return e(l.Option,{value:i,children:({active:t})=>m("div",{className:`text-contrast dark:text-primary ${c(t)}`,children:[i.name,r?e("span",{className:"ml-2",children:e(f,{})}):null]})},i.isoCode)}):e("div",{className:"flex justify-center",children:m("div",{className:"mt-4 text-center",children:[e("div",{children:"Unable to load available countries."}),e("div",{children:"Please try again."})]})})}export{x as Countries,q as CountrySelector};
//# sourceMappingURL=24a22420.js.map