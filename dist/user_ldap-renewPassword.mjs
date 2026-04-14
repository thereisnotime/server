const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { b as defineComponent, n as onMounted, I as onUnmounted, o as openBlock, f as createElementBlock, j as renderSlot, H as ref, c as createBlock, B as withCtx, h as createBaseVNode, t as toDisplayString, J as Fragment, K as renderList, i as createCommentVNode, F as createVNode, E as normalizeClass, k as createTextVNode, e as createApp } from "./Web-DZB3kNgd.chunk.mjs";
import { b as getRequestToken } from "./index-DzGPUIIw.chunk.mjs";
import { l as loadState, _ as _export_sfc$1 } from "./public-BOTv8zL5.chunk.mjs";
import { t as translate } from "./translation-DoG5ZELJ-BjhwdF87.chunk.mjs";
import { N as NcButton } from "./ArrowRight-Bqdh1jJN.chunk.mjs";
/* empty css                                        */
import { _ as _export_sfc } from "./NcIconSvgWrapper-De-2-ukl-D4fii7IT.chunk.mjs";
import { N as NcNoteCard } from "./mdi-DSkVotM5.chunk.mjs";
import { N as NcPasswordField } from "./NcPasswordField-BOLzDHBJ-Dl5KIJwG.chunk.mjs";
import "./index-BLBICdD3.chunk.mjs";
import "./util-CV4gl569.chunk.mjs";
import "./NcInputField-CPL-a_MM-WmGmujbb.chunk.mjs";
const _hoisted_1$1 = { id: "guest-content-vue" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NcGuestContent",
  setup(__props) {
    onMounted(() => {
      document.getElementById("content").classList.add("nc-guest-content");
    });
    onUnmounted(() => {
      document.getElementById("content").classList.remove("nc-guest-content");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
const NcGuestContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-26ad2498"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RenewPassword",
  setup(__props, { expose: __expose }) {
    __expose();
    const renewPasswordParameters = loadState("user_ldap", "renewPasswordParameters");
    const hasInvalidPassword = renewPasswordParameters.errors.includes("invalidpassword");
    const requestToken = getRequestToken();
    const isRenewing = ref(false);
    function onSubmit() {
      isRenewing.value = true;
    }
    const __returned__ = { renewPasswordParameters, hasInvalidPassword, requestToken, isRenewing, onSubmit, get t() {
      return translate;
    }, get NcButton() {
      return NcButton;
    }, get NcGuestContent() {
      return NcGuestContent;
    }, get NcNoteCard() {
      return NcNoteCard;
    }, get NcPasswordField() {
      return NcPasswordField;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const renewPassword__actions = "_renewPassword__actions_1bcqw_2";
const style0 = {
  renewPassword__actions
};
const _hoisted_1 = ["action"];
const _hoisted_2 = ["value"];
const _hoisted_3 = ["value"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["NcGuestContent"], null, {
    default: withCtx(() => [
      createBaseVNode(
        "h2",
        null,
        toDisplayString($setup.t("user_ldap", "Please renew your password")),
        1
        /* TEXT */
      ),
      $setup.renewPasswordParameters.messages.length ? (openBlock(), createBlock($setup["NcNoteCard"], {
        key: 0,
        type: "warning"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($setup.renewPasswordParameters.messages, (message, index) => {
              return openBlock(), createElementBlock(
                "p",
                { key: index },
                toDisplayString(message),
                1
                /* TEXT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      })) : createCommentVNode("v-if", true),
      $setup.renewPasswordParameters.errors.includes("internalexception") ? (openBlock(), createBlock($setup["NcNoteCard"], {
        key: 1,
        heading: $setup.t("user_ldap", "An internal error occurred."),
        text: $setup.t("user_ldap", "Please try again or contact your administrator."),
        type: "warning"
      }, null, 8, ["heading", "text"])) : createCommentVNode("v-if", true),
      createBaseVNode("form", {
        method: "post",
        name: "renewpassword",
        action: $setup.renewPasswordParameters.tryRenewPasswordUrl,
        onSubmit: $setup.onSubmit
      }, [
        createVNode($setup["NcPasswordField"], {
          autofocus: "",
          autocomplete: "off",
          autocapitalize: "off",
          error: $setup.hasInvalidPassword,
          helperText: $setup.hasInvalidPassword ? $setup.t("user_ldap", "Wrong password.") : "",
          label: $setup.t("user_ldap", "Current password"),
          required: "",
          spellcheck: "false",
          name: "oldPassword"
        }, null, 8, ["error", "helperText", "label"]),
        createVNode($setup["NcPasswordField"], {
          autofocus: "",
          autocomplete: "off",
          autocapitalize: "off",
          label: $setup.t("user_ldap", "New password"),
          required: "",
          spellcheck: "false",
          name: "newPassword"
        }, null, 8, ["label"]),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.$style.renewPassword__actions)
          },
          [
            createVNode($setup["NcButton"], {
              href: $setup.renewPasswordParameters.cancelRenewUrl,
              variant: "error"
            }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString($setup.t("user_ldap", "Cancel")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["href"]),
            createVNode($setup["NcButton"], {
              disabled: $setup.isRenewing,
              type: "submit",
              variant: "primary"
            }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString($setup.isRenewing ? $setup.t("user_ldap", "Renewing…") : $setup.t("user_ldap", "Renew password")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["disabled"])
          ],
          2
          /* CLASS */
        ),
        createBaseVNode("input", {
          type: "hidden",
          name: "user",
          value: $setup.renewPasswordParameters.user
        }, null, 8, _hoisted_2),
        createBaseVNode("input", {
          type: "hidden",
          name: "requesttoken",
          value: $setup.requestToken
        }, null, 8, _hoisted_3)
      ], 40, _hoisted_1)
    ]),
    _: 1
    /* STABLE */
  });
}
const cssModules = {
  "$style": style0
};
const RenewPasswordView = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["render", _sfc_render], ["__cssModules", cssModules], ["__file", "/home/peter/nextcloud-docker-dev/workspace/server/build/frontend/apps/user_ldap/src/views/RenewPassword.vue"]]);
const app = createApp(RenewPasswordView);
app.mount("#user_ldap-renewPassword");
//# sourceMappingURL=user_ldap-renewPassword.mjs.map
