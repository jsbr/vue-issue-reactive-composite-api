import { defineComponent, reactive, openBlock, createElementBlock, toDisplayString } from "vue";
function interval(data) {
  setInterval(() => data.count++, 1e3);
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CompApiTest",
  setup(__props) {
    const data = reactive({
      count: 0
    });
    interval(data);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("h3", null, "Vite Composite Api: " + toDisplayString(data.count), 1);
    };
  }
});
const CompApiTestVite = _sfc_main;
export { CompApiTestVite };
