import{r as s,C as t}from"./index.695478b2.js";const i=10;let r=!1;function l(){return s.exports.useEffect(()=>{r||(r=!0,t.subscribe(t.eventNames.PERFORMANCE,e=>{console.group(`Performance - ${e.page_load_type} load`),n("TTFB:",e.response_start-e.navigation_start),n("FCP:",e.first_contentful_paint),n("LCP:",e.largest_contentful_paint),n("Duration:",e.response_end-e.navigation_start),console.groupEnd()}))}),null}function n(e,o){o&&console.log(`${e.padEnd(i)}${Math.round(o)} ms`)}export{l as PerformanceMetricsDebug};
//# sourceMappingURL=3641e91b.js.map