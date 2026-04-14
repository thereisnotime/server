const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { r as resolveComponent, o as openBlock, c as createBlock, B as withCtx, F as createVNode, k as createTextVNode, t as toDisplayString, G as generateOcsUrl, e as createApp } from "./Web-DZB3kNgd.chunk.mjs";
import { c as cancelableClient } from "./index-BLBICdD3.chunk.mjs";
import { a as showError } from "./index-C1xmmKTZ-B1s4uv1T.chunk.mjs";
import { _ as _export_sfc, l as loadState } from "./public-BOTv8zL5.chunk.mjs";
import { t as translate } from "./translation-DoG5ZELJ-BjhwdF87.chunk.mjs";
import { c as confirmPassword } from "./index-D3Hrh1sB.chunk.mjs";
import { N as NcCheckboxRadioSwitch } from "./NcCheckboxRadioSwitch-D0gFwEVl-D3PT1awv.chunk.mjs";
import { N as NcSettingsSection } from "./ContentCopy-BsSgMRyn.chunk.mjs";
import { g as getLoggerBuilder } from "./index-DzGPUIIw.chunk.mjs";
import "./util-CV4gl569.chunk.mjs";
import "./NcDialog-nDc1gW50-IgYjPKc0.chunk.mjs";
import "./autolink-U5pBzLgI-Pp1RlhKi.chunk.mjs";
import "./ArrowRight-Bqdh1jJN.chunk.mjs";
import "./NcIconSvgWrapper-De-2-ukl-D4fii7IT.chunk.mjs";
import "./PencilOutline-BpohmyA3.chunk.mjs";
import "./mdi-DSkVotM5.chunk.mjs";
import "./NcPasswordField-BOLzDHBJ-Dl5KIJwG.chunk.mjs";
import "./NcInputField-CPL-a_MM-WmGmujbb.chunk.mjs";
const logger = getLoggerBuilder().detectLogLevel().setApp("sharebymail").build();
const _sfc_main = {
  name: "AdminSettings",
  components: {
    NcCheckboxRadioSwitch,
    NcSettingsSection
  },
  setup() {
    return { t: translate };
  },
  data() {
    return {
      sendPasswordMail: loadState("sharebymail", "sendPasswordMail"),
      replyToInitiator: loadState("sharebymail", "replyToInitiator")
    };
  },
  watch: {
    sendPasswordMail(newValue) {
      this.update("sendpasswordmail", newValue);
    },
    replyToInitiator(newValue) {
      this.update("replyToInitiator", newValue);
    }
  },
  methods: {
    async update(key, value) {
      await confirmPassword();
      const url = generateOcsUrl("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}", {
        appId: "sharebymail",
        key
      });
      const stringValue = value ? "yes" : "no";
      try {
        const { data } = await cancelableClient.post(url, {
          value: stringValue
        });
        this.handleResponse({
          status: data.ocs?.meta?.status
        });
      } catch (e) {
        this.handleResponse({
          errorMessage: translate("sharebymail", "Unable to update share by mail config"),
          error: e
        });
      }
    },
    async handleResponse({ status, errorMessage, error }) {
      if (status !== "ok") {
        showError(errorMessage);
        logger.error(errorMessage, { error });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NcCheckboxRadioSwitch = resolveComponent("NcCheckboxRadioSwitch");
  const _component_NcSettingsSection = resolveComponent("NcSettingsSection");
  return openBlock(), createBlock(_component_NcSettingsSection, {
    name: $setup.t("sharebymail", "Share by mail"),
    description: $setup.t("sharebymail", "Allows people to share a personalized link to a file or folder by putting in an email address.")
  }, {
    default: withCtx(() => [
      createVNode(_component_NcCheckboxRadioSwitch, {
        modelValue: $data.sendPasswordMail,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.sendPasswordMail = $event),
        type: "switch"
      }, {
        default: withCtx(() => [
          createTextVNode(
            toDisplayString($setup.t("sharebymail", "Send password by mail")),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      createVNode(_component_NcCheckboxRadioSwitch, {
        modelValue: $data.replyToInitiator,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.replyToInitiator = $event),
        type: "switch"
      }, {
        default: withCtx(() => [
          createTextVNode(
            toDisplayString($setup.t("sharebymail", "Reply to initiator")),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["name", "description"]);
}
const AdminSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/peter/nextcloud-docker-dev/workspace/server/build/frontend/apps/sharebymail/src/components/AdminSettings.vue"]]);
const app = createApp(AdminSettings);
app.mount("#vue-admin-sharebymail");
//# sourceMappingURL=sharebymail-admin-settings.mjs.map
