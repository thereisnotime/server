const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[window.OC.filePath('', '', 'dist/Web-DZB3kNgd.chunk.mjs'),window.OC.filePath('', '', 'dist/public-BOTv8zL5.chunk.mjs'),window.OC.filePath('', '', 'dist/ProfilePickerReferenceWidget-CHeoETcV.chunk.mjs'),window.OC.filePath('', '', 'dist/NcAvatar-ruClKRzS-DuS7YXf6.chunk.mjs'),window.OC.filePath('', '', 'dist/index-DzGPUIIw.chunk.mjs'),window.OC.filePath('', '', 'dist/index-BLBICdD3.chunk.mjs'),window.OC.filePath('', '', 'dist/util-CV4gl569.chunk.mjs'),window.OC.filePath('', '', 'dist/autolink-U5pBzLgI-Pp1RlhKi.chunk.mjs'),window.OC.filePath('', '', 'dist/ArrowRight-Bqdh1jJN.chunk.mjs'),window.OC.filePath('', '', 'dist/NcIconSvgWrapper-De-2-ukl-D4fii7IT.chunk.mjs'),window.OC.filePath('', '', 'dist/translation-DoG5ZELJ-BjhwdF87.chunk.mjs'),window.OC.filePath('', '', 'dist/NcIconSvgWrapper-De-2-ukl-N3OwSN9O.chunk.css'),window.OC.filePath('', '', 'dist/ArrowRight-CCY9S6Db.chunk.css'),window.OC.filePath('', '', 'dist/autolink-U5pBzLgI-DnbxQPLZ.chunk.css'),window.OC.filePath('', '', 'dist/colors-BfjxNgsx-DyC4Rnj5.chunk.mjs'),window.OC.filePath('', '', 'dist/NcUserStatusIcon-JWiuiAXe-BQbtMEov.chunk.mjs'),window.OC.filePath('', '', 'dist/NcUserStatusIcon-JWiuiAXe-B3aHoBAd.chunk.css'),window.OC.filePath('', '', 'dist/NcActionButton-BuRnYpJX-D8zeIhEM.chunk.mjs'),window.OC.filePath('', '', 'dist/NcActionButton-BuRnYpJX-Bb0ihLdt.chunk.css'),window.OC.filePath('', '', 'dist/NcDateTime.vue_vue_type_script_setup_true_lang-B4upiZjL-CKWCeu2D.chunk.mjs'),window.OC.filePath('', '', 'dist/NcDateTime-DRcCH7xq.chunk.css'),window.OC.filePath('', '', 'dist/PencilOutline-BpohmyA3.chunk.mjs'),window.OC.filePath('', '', 'dist/PencilOutline-CWUlo4XY.chunk.css'),window.OC.filePath('', '', 'dist/NcAvatar-ruClKRzS-CeBxkemU.chunk.css'),window.OC.filePath('', '', 'dist/logger-CzKiweRE.chunk.mjs'),window.OC.filePath('', '', 'dist/profile-ProfilePickerReferenceWidget-D25y9NeU.chunk.css'),window.OC.filePath('', '', 'dist/ProfilesCustomPicker-B4zkxGgT.chunk.mjs'),window.OC.filePath('', '', 'dist/NcEmptyContent-CDgWCt_m-CTXOS_Yk.chunk.mjs'),window.OC.filePath('', '', 'dist/NcEmptyContent-CDgWCt_m-CLjlZ-UT.chunk.css'),window.OC.filePath('', '', 'dist/NcSelect-B1uITk_3-CUcQR9No.chunk.mjs'),window.OC.filePath('', '', 'dist/NcSelect-B1uITk_3-DEY3FLux.chunk.css'),window.OC.filePath('', '', 'dist/profile-ProfilesCustomPicker-iB16tC1U.chunk.css')])))=>i.map(i=>d[i]);
const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { _ as __vitePreload } from "./Web-DZB3kNgd.chunk.mjs";
import { r as registerWidget, a as registerCustomPickerElement, N as NcCustomPickerRenderResult } from "./index-ChHvvbXt.chunk.mjs";
import "./public-BOTv8zL5.chunk.mjs";
import "./ArrowRight-Bqdh1jJN.chunk.mjs";
import "./NcIconSvgWrapper-De-2-ukl-D4fii7IT.chunk.mjs";
import "./translation-DoG5ZELJ-BjhwdF87.chunk.mjs";
import "./index-DzGPUIIw.chunk.mjs";
import "./NcCheckboxRadioSwitch-D0gFwEVl-D3PT1awv.chunk.mjs";
import "./PencilOutline-BpohmyA3.chunk.mjs";
import "./index-BLBICdD3.chunk.mjs";
import "./util-CV4gl569.chunk.mjs";
import "./NcSelect-B1uITk_3-CUcQR9No.chunk.mjs";
import "./autolink-U5pBzLgI-Pp1RlhKi.chunk.mjs";
import "./NcEmptyContent-CDgWCt_m-CTXOS_Yk.chunk.mjs";
import "./NcTextField.vue_vue_type_script_setup_true_lang-B-4HNjYH-DWlILf22.chunk.mjs";
import "./NcInputField-CPL-a_MM-WmGmujbb.chunk.mjs";
registerWidget("profile_widget", async (el, { richObjectType, richObject, accessible }) => {
  const { createApp } = await __vitePreload(async () => {
    const { createApp: createApp2 } = await import("./Web-DZB3kNgd.chunk.mjs").then((n2) => n2.aC);
    return { createApp: createApp2 };
  }, true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
  const { default: ProfilePickerReferenceWidget } = await __vitePreload(async () => {
    const { default: ProfilePickerReferenceWidget2 } = await import("./ProfilePickerReferenceWidget-CHeoETcV.chunk.mjs");
    return { default: ProfilePickerReferenceWidget2 };
  }, true ? __vite__mapDeps([2,3,4,5,0,1,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]) : void 0, import.meta.url);
  const app = createApp(
    ProfilePickerReferenceWidget,
    {
      richObjectType,
      richObject,
      accessible
    }
  );
  app.mixin({ methods: { t, n } });
  app.mount(el);
}, () => {
}, { hasInteractiveView: false });
registerCustomPickerElement("profile_picker", async (el, { providerId, accessible }) => {
  const { createApp } = await __vitePreload(async () => {
    const { createApp: createApp2 } = await import("./Web-DZB3kNgd.chunk.mjs").then((n2) => n2.aC);
    return { createApp: createApp2 };
  }, true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
  const { default: ProfilesCustomPicker } = await __vitePreload(async () => {
    const { default: ProfilesCustomPicker2 } = await import("./ProfilesCustomPicker-B4zkxGgT.chunk.mjs");
    return { default: ProfilesCustomPicker2 };
  }, true ? __vite__mapDeps([26,5,4,0,1,6,8,9,10,11,12,27,28,29,7,13,21,22,30,24,31]) : void 0, import.meta.url);
  const app = createApp(
    ProfilesCustomPicker,
    {
      providerId,
      accessible
    }
  );
  app.mixin({ methods: { t, n } });
  app.mount(el);
  return new NcCustomPickerRenderResult(el, app);
}, (el, renderResult) => {
  renderResult.object.unmount();
}, "normal");
//# sourceMappingURL=profile-reference.mjs.map
