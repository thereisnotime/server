const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { l as logger } from "./activity-T1z5SEpQ.chunk.mjs";
import { a as translatePlural, t as translate } from "./translation-DoG5ZELJ-BjhwdF87.chunk.mjs";
import { c as createPinia } from "./pinia-QL4zg7IU.chunk.mjs";
import { e as createApp } from "./Web-DZB3kNgd.chunk.mjs";
import { C as CommentsApp } from "./FilesSidebarTab-EG-_zLyQ.chunk.mjs";
import "./index-DzGPUIIw.chunk.mjs";
import "./public-BOTv8zL5.chunk.mjs";
import "./util-CV4gl569.chunk.mjs";
import "./index-C1xmmKTZ-B1s4uv1T.chunk.mjs";
import "./NcDialog-nDc1gW50-IgYjPKc0.chunk.mjs";
import "./autolink-U5pBzLgI-Pp1RlhKi.chunk.mjs";
import "./ArrowRight-Bqdh1jJN.chunk.mjs";
import "./NcIconSvgWrapper-De-2-ukl-D4fii7IT.chunk.mjs";
import "./PencilOutline-BpohmyA3.chunk.mjs";
import "./mdi-DSkVotM5.chunk.mjs";
import "./NcAvatar-ruClKRzS-DuS7YXf6.chunk.mjs";
import "./index-BLBICdD3.chunk.mjs";
import "./colors-BfjxNgsx-DyC4Rnj5.chunk.mjs";
import "./NcUserStatusIcon-JWiuiAXe-BQbtMEov.chunk.mjs";
import "./NcActionButton-BuRnYpJX-D8zeIhEM.chunk.mjs";
import "./NcDateTime.vue_vue_type_script_setup_true_lang-B4upiZjL-CKWCeu2D.chunk.mjs";
import "./NcEmptyContent-CDgWCt_m-CTXOS_Yk.chunk.mjs";
import "./CommentView-UxeKj3LJ.chunk.mjs";
/* empty css                                           */
import "./NcUserBubble-BE6yD-R0-4_fb61Nk.chunk.mjs";
import "./GetComments-0XwtoPLA.chunk.mjs";
import "./index-H1GawPmo.chunk.mjs";
/*!
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
class CommentInstance {
  app;
  instance;
  /**
   * Initialize a new Comments instance for the desired type
   *
   * @param resourceType - The comments endpoint type
   * @param options - The vue options (props, parent, el...)
   */
  constructor(resourceType = "files", options = {}) {
    const pinia = createPinia();
    this.app = createApp(
      CommentsApp,
      {
        ...options.propsData ?? {},
        ...options.props ?? {},
        resourceType
      }
    );
    this.app.mixin({
      data() {
        return {
          logger
        };
      },
      methods: {
        t: translate,
        n: translatePlural
      }
    });
    this.app.use(pinia);
    if (options.el) {
      this.instance = this.app.mount(options.el);
    }
  }
  /**
   * Mount the Comments instance to a new element.
   *
   * @param el - The element to mount the instance on
   */
  $mount(el) {
    if (this.instance) {
      this.app.unmount();
    }
    this.instance = this.app.mount(el);
  }
  /**
   * Unmount the Comments instance from the DOM and destroy it.
   */
  $unmount() {
    this.app.unmount();
    this.instance = void 0;
  }
  /**
   * Update the current resource id.
   *
   * @param id - The new resource id to load the comments for
   */
  update(id) {
    if (this.instance) {
      this.instance.update(id);
    }
  }
}
if (window.OCA && !window.OCA.Comments) {
  Object.assign(window.OCA, { Comments: {} });
}
Object.assign(window.OCA.Comments, { View: CommentInstance });
logger.debug("OCA.Comments.View initialized");
//# sourceMappingURL=comments-comments-app.mjs.map
