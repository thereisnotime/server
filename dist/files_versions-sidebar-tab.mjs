const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[window.OC.filePath('', '', 'dist/FilesVersionsSidebarTab-CLTv5hqZ.chunk.mjs'),window.OC.filePath('', '', 'dist/Web-DZB3kNgd.chunk.mjs'),window.OC.filePath('', '', 'dist/public-BOTv8zL5.chunk.mjs'),window.OC.filePath('', '', 'dist/index-C1xmmKTZ-B1s4uv1T.chunk.mjs'),window.OC.filePath('', '', 'dist/NcDialog-nDc1gW50-IgYjPKc0.chunk.mjs'),window.OC.filePath('', '', 'dist/autolink-U5pBzLgI-Pp1RlhKi.chunk.mjs'),window.OC.filePath('', '', 'dist/ArrowRight-Bqdh1jJN.chunk.mjs'),window.OC.filePath('', '', 'dist/NcIconSvgWrapper-De-2-ukl-D4fii7IT.chunk.mjs'),window.OC.filePath('', '', 'dist/translation-DoG5ZELJ-BjhwdF87.chunk.mjs'),window.OC.filePath('', '', 'dist/index-DzGPUIIw.chunk.mjs'),window.OC.filePath('', '', 'dist/NcIconSvgWrapper-De-2-ukl-N3OwSN9O.chunk.css'),window.OC.filePath('', '', 'dist/ArrowRight-CCY9S6Db.chunk.css'),window.OC.filePath('', '', 'dist/autolink-U5pBzLgI-DnbxQPLZ.chunk.css'),window.OC.filePath('', '', 'dist/PencilOutline-BpohmyA3.chunk.mjs'),window.OC.filePath('', '', 'dist/PencilOutline-CWUlo4XY.chunk.css'),window.OC.filePath('', '', 'dist/NcDialog-nDc1gW50-BSV74Bru.chunk.css'),window.OC.filePath('', '', 'dist/mdi-DSkVotM5.chunk.mjs'),window.OC.filePath('', '', 'dist/mdi-DZSuYX4-.chunk.css'),window.OC.filePath('', '', 'dist/index-DUU0M62x.chunk.mjs'),window.OC.filePath('', '', 'dist/folder-29HuacU_-BePENw3G.chunk.mjs'),window.OC.filePath('', '', 'dist/util-CV4gl569.chunk.mjs'),window.OC.filePath('', '', 'dist/NcActionButton-BuRnYpJX-D8zeIhEM.chunk.mjs'),window.OC.filePath('', '', 'dist/NcActionButton-BuRnYpJX-Bb0ihLdt.chunk.css'),window.OC.filePath('', '', 'dist/NcDateTime.vue_vue_type_script_setup_true_lang-B4upiZjL-CKWCeu2D.chunk.mjs'),window.OC.filePath('', '', 'dist/NcDateTime-DRcCH7xq.chunk.css'),window.OC.filePath('', '', 'dist/NcAvatar-ruClKRzS-DuS7YXf6.chunk.mjs'),window.OC.filePath('', '', 'dist/index-BLBICdD3.chunk.mjs'),window.OC.filePath('', '', 'dist/colors-BfjxNgsx-DyC4Rnj5.chunk.mjs'),window.OC.filePath('', '', 'dist/NcUserStatusIcon-JWiuiAXe-BQbtMEov.chunk.mjs'),window.OC.filePath('', '', 'dist/NcUserStatusIcon-JWiuiAXe-B3aHoBAd.chunk.css'),window.OC.filePath('', '', 'dist/NcAvatar-ruClKRzS-CeBxkemU.chunk.css'),window.OC.filePath('', '', 'dist/TrayArrowDown-ChubJTWF.chunk.mjs'),window.OC.filePath('', '', 'dist/TrayArrowDown-DzNPKSuT.chunk.css'),window.OC.filePath('', '', 'dist/NcTextField.vue_vue_type_script_setup_true_lang-B-4HNjYH-DWlILf22.chunk.mjs'),window.OC.filePath('', '', 'dist/NcInputField-CPL-a_MM-WmGmujbb.chunk.mjs'),window.OC.filePath('', '', 'dist/NcInputField-CPL-a_MM-DR0FULeu.chunk.css'),window.OC.filePath('', '', 'dist/dav-DInTcz7S.chunk.mjs'),window.OC.filePath('', '', 'dist/index-H1GawPmo.chunk.mjs'),window.OC.filePath('', '', 'dist/files_versions-FilesVersionsSidebarTab-Xj1KhLzV.chunk.css')])))=>i.map(i=>d[i]);
const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { d as defineCustomElement, a as defineAsyncComponent, _ as __vitePreload } from "./Web-DZB3kNgd.chunk.mjs";
import { r as registerSidebarTab } from "./index-DUU0M62x.chunk.mjs";
import { t as translate } from "./translation-DoG5ZELJ-BjhwdF87.chunk.mjs";
import { i as isPublicShare } from "./public-BOTv8zL5.chunk.mjs";
import { F as FileType } from "./folder-29HuacU_-BePENw3G.chunk.mjs";
import "./index-DzGPUIIw.chunk.mjs";
import "./util-CV4gl569.chunk.mjs";
const BackupRestore = '<svg xmlns="http://www.w3.org/2000/svg" id="mdi-backup-restore" viewBox="0 0 24 24"><path d="M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z" /></svg>';
const tagName = "files-versions_sidebar-tab";
registerSidebarTab({
  id: "files_versions",
  tagName,
  order: 90,
  displayName: translate("files_versions", "Versions"),
  iconSvgInline: BackupRestore,
  enabled({ node }) {
    if (isPublicShare()) {
      return false;
    }
    if (node.type !== FileType.File) {
      return false;
    }
    return true;
  },
  async onInit() {
    const FilesVersionsSidebarTab = defineAsyncComponent(() => __vitePreload(() => import("./FilesVersionsSidebarTab-CLTv5hqZ.chunk.mjs"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]) : void 0, import.meta.url));
    window.customElements.define(tagName, defineCustomElement(FilesVersionsSidebarTab, {
      shadowRoot: false
    }));
  }
});
//# sourceMappingURL=files_versions-sidebar-tab.mjs.map
