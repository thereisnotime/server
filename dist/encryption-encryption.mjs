const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { a as getCurrentUser } from "./index-DzGPUIIw.chunk.mjs";
import { c as cancelableClient } from "./index-BLBICdD3.chunk.mjs";
import { s as showWarning } from "./index-C1xmmKTZ-B1s4uv1T.chunk.mjs";
import { g as generateUrl } from "./Web-DZB3kNgd.chunk.mjs";
import "./util-CV4gl569.chunk.mjs";
import "./NcDialog-nDc1gW50-IgYjPKc0.chunk.mjs";
import "./autolink-U5pBzLgI-Pp1RlhKi.chunk.mjs";
import "./ArrowRight-Bqdh1jJN.chunk.mjs";
import "./NcIconSvgWrapper-De-2-ukl-D4fii7IT.chunk.mjs";
import "./translation-DoG5ZELJ-BjhwdF87.chunk.mjs";
import "./public-BOTv8zL5.chunk.mjs";
import "./PencilOutline-BpohmyA3.chunk.mjs";
import "./mdi-DSkVotM5.chunk.mjs";
/*!
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
window.addEventListener("DOMContentLoaded", async function() {
  if (getCurrentUser() === null) {
    return;
  }
  const { data } = await cancelableClient.get(generateUrl("/apps/encryption/ajax/getStatus"));
  if (data.status === "interactionNeeded") {
    showWarning(data.data.message);
  }
});
//# sourceMappingURL=encryption-encryption.mjs.map
