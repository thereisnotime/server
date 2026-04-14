const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { b as defineComponent, y as useTemplateRef, H as ref, g as generateUrl, o as openBlock, f as createElementBlock, F as createVNode, B as withCtx, c as createBlock, k as createTextVNode, t as toDisplayString, i as createCommentVNode, U as withModifiers, x as useModel, w as watch, e as createApp } from "./Web-DZB3kNgd.chunk.mjs";
import { c as cancelableClient, i as isAxiosError } from "./index-BLBICdD3.chunk.mjs";
import { a as showError, e as showLoading, b as showInfo } from "./index-C1xmmKTZ-B1s4uv1T.chunk.mjs";
import { _ as _export_sfc, l as loadState } from "./public-BOTv8zL5.chunk.mjs";
import { t as translate } from "./translation-DoG5ZELJ-BjhwdF87.chunk.mjs";
import { N as NcNoteCard } from "./mdi-DSkVotM5.chunk.mjs";
import { N as NcSettingsSection } from "./ContentCopy-BsSgMRyn.chunk.mjs";
import "./NcActionButton-BuRnYpJX-D8zeIhEM.chunk.mjs";
import "./NcIconSvgWrapper-De-2-ukl-D4fii7IT.chunk.mjs";
import "./NcTextArea-CseOD9aM-B8wGgLQE.chunk.mjs";
import "./index-NHtpDXcl.chunk.mjs";
import "./NcDateTime.vue_vue_type_script_setup_true_lang-B4upiZjL-CKWCeu2D.chunk.mjs";
import "./autolink-U5pBzLgI-Pp1RlhKi.chunk.mjs";
/* empty css                                           */
import "./NcAvatar-ruClKRzS-DuS7YXf6.chunk.mjs";
import "./NcContent-D69ktIEB-onpPgk-F.chunk.mjs";
import { N as NcButton } from "./ArrowRight-Bqdh1jJN.chunk.mjs";
import "./PencilOutline-BpohmyA3.chunk.mjs";
import "./index-DzGPUIIw.chunk.mjs";
import { N as NcCheckboxRadioSwitch } from "./NcCheckboxRadioSwitch-D0gFwEVl-D3PT1awv.chunk.mjs";
import "./Plus-CBQWzqLY.chunk.mjs";
import "./index-_o_y_X40.chunk.mjs";
import "./TrayArrowDown-ChubJTWF.chunk.mjs";
import "./index-BOWzyZmd.chunk.mjs";
import "./NcDialog-nDc1gW50-IgYjPKc0.chunk.mjs";
import "./NcSelect-B1uITk_3-CUcQR9No.chunk.mjs";
import "./NcEmojiPicker-DGgqTnHp-CNPCw3Zk.chunk.mjs";
import "./NcEmptyContent-CDgWCt_m-CTXOS_Yk.chunk.mjs";
import "./index-ChHvvbXt.chunk.mjs";
import { N as NcFormGroup, l as logger, I as InitStatus } from "./types-kmj4HFZ6.chunk.mjs";
/* empty css                                        */
import "./NcInputField-CPL-a_MM-WmGmujbb.chunk.mjs";
import { N as NcPasswordField } from "./NcPasswordField-BOLzDHBJ-Dl5KIJwG.chunk.mjs";
import "./index-CDnaVj2B.chunk.mjs";
import "./NcTextField.vue_vue_type_script_setup_true_lang-B-4HNjYH-DWlILf22.chunk.mjs";
import "./NcSelectTags-B3_tcJAf-Ddvce__j.chunk.mjs";
import "./NcUserBubble-BE6yD-R0-4_fb61Nk.chunk.mjs";
import "./NcUserStatusIcon-JWiuiAXe-BQbtMEov.chunk.mjs";
import "./emoji-V9hqFgPs-B91WqKzI.chunk.mjs";
import "./colors-BfjxNgsx-DyC4Rnj5.chunk.mjs";
import { w as watchDebounced } from "./index-DEcfRZLy.chunk.mjs";
import "./util-CV4gl569.chunk.mjs";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SettingsPersonalChangePrivateKey",
  props: {
    recoveryEnabledForUser: { type: Boolean, required: true }
  },
  emits: ["updated"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const formElement = useTemplateRef("form");
    const isLoading = ref(false);
    const hasError = ref(false);
    const oldPrivateKeyPassword = ref("");
    const newPrivateKeyPassword = ref("");
    async function onSubmit() {
      if (isLoading.value) {
        return;
      }
      isLoading.value = true;
      hasError.value = false;
      try {
        await cancelableClient.post(
          generateUrl("/apps/encryption/ajax/updatePrivateKeyPassword"),
          {
            oldPassword: oldPrivateKeyPassword.value,
            newPassword: newPrivateKeyPassword.value
          }
        );
        oldPrivateKeyPassword.value = newPrivateKeyPassword.value = "";
        formElement.value?.reset();
        emit("updated");
      } catch (error) {
        if (isAxiosError(error) && error.response && error.response.data?.data?.message) {
          showError(error.response.data.data.message);
        }
        hasError.value = true;
      } finally {
        isLoading.value = false;
      }
    }
    const __returned__ = { emit, formElement, isLoading, hasError, oldPrivateKeyPassword, newPrivateKeyPassword, onSubmit, get t() {
      return translate;
    }, get NcButton() {
      return NcButton;
    }, get NcFormGroup() {
      return NcFormGroup;
    }, get NcNoteCard() {
      return NcNoteCard;
    }, get NcPasswordField() {
      return NcPasswordField;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "form",
    {
      ref: "form",
      onSubmit: withModifiers($setup.onSubmit, ["prevent"])
    },
    [
      createVNode($setup["NcFormGroup"], {
        label: $setup.t("encryption", "Update private key password"),
        description: $setup.t("encryption", "Your private key password no longer matches your log-in password. Set your old private key password to your current log-in password.")
      }, {
        default: withCtx(() => [
          $props.recoveryEnabledForUser ? (openBlock(), createBlock($setup["NcNoteCard"], { key: 0 }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString($setup.t("encryption", "If you do not remember your old password you can ask your administrator to recover your files.")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true),
          createVNode($setup["NcPasswordField"], {
            label: $setup.t("encryption", "Old log-in password")
          }, null, 8, ["label"]),
          createVNode($setup["NcPasswordField"], {
            label: $setup.t("encryption", "Current log-in password")
          }, null, 8, ["label"]),
          createVNode($setup["NcButton"], {
            type: "submit",
            variant: "primary"
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString($setup.t("encryption", "Update")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["label", "description"])
    ],
    544
    /* NEED_HYDRATION, NEED_PATCH */
  );
}
const SettingsPersonalChangePrivateKey = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/peter/nextcloud-docker-dev/workspace/server/build/frontend/apps/encryption/src/components/SettingsPersonalChangePrivateKey.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SettingsPersonalEnableRecovery",
  props: {
    "modelValue": { type: Boolean, ...{ required: true } },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const userEnableRecovery = useModel(__props, "modelValue");
    const isLoading = ref(false);
    watch(userEnableRecovery, () => {
      isLoading.value = true;
    });
    watchDebounced([userEnableRecovery], async ([newValue], [oldValue]) => {
      if (newValue === oldValue) {
        isLoading.value = false;
        return;
      }
      const toast = showLoading(translate("encryption", "Updating recovery keys. This can take some time…"));
      try {
        await cancelableClient.post(
          generateUrl("/apps/encryption/ajax/userSetRecovery"),
          { userEnableRecovery: userEnableRecovery.value }
        );
      } catch (error) {
        userEnableRecovery.value = oldValue;
        if (isAxiosError(error) && error.response && error.response.data?.data?.message) {
          showError(error.response.data.data.message);
        }
      } finally {
        toast.hideToast();
        isLoading.value = false;
      }
    }, { debounce: 800 });
    const __returned__ = { userEnableRecovery, isLoading, get t() {
      return translate;
    }, get NcCheckboxRadioSwitch() {
      return NcCheckboxRadioSwitch;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["NcCheckboxRadioSwitch"], {
    modelValue: $setup.userEnableRecovery,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.userEnableRecovery = $event),
    type: "switch",
    loading: $setup.isLoading,
    description: $setup.t("encryption", "Enabling this option will allow you to reobtain access to your encrypted files in case of password loss")
  }, {
    default: withCtx(() => [
      createTextVNode(
        toDisplayString($setup.t("encryption", "Enable password recovery")),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue", "loading", "description"]);
}
const SettingsPersonalEnableRecovery = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/peter/nextcloud-docker-dev/workspace/server/build/frontend/apps/encryption/src/components/SettingsPersonalEnableRecovery.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SettingsPersonal",
  setup(__props, { expose: __expose }) {
    __expose();
    const personalSettings = loadState("encryption", "personalSettings");
    const initialized = ref(personalSettings.initialized);
    const recoveryEnabledForUser = ref(personalSettings.recoveryEnabledForUser);
    async function reloadStatus() {
      try {
        const { data } = await cancelableClient.get(generateUrl("/apps/encryption/ajax/getStatus"));
        initialized.value = data.initStatus;
        if (data.data.message) {
          showInfo(data.data.message);
        }
      } catch (error) {
        logger.error("Failed to fetch current encryption status", { error });
      }
    }
    const __returned__ = { personalSettings, initialized, recoveryEnabledForUser, reloadStatus, get t() {
      return translate;
    }, get NcNoteCard() {
      return NcNoteCard;
    }, get NcSettingsSection() {
      return NcSettingsSection;
    }, SettingsPersonalChangePrivateKey, SettingsPersonalEnableRecovery, get InitStatus() {
      return InitStatus;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["NcSettingsSection"], {
    name: $setup.t("encryption", "Basic encryption module")
  }, {
    default: withCtx(() => [
      $setup.initialized === $setup.InitStatus.NotInitialized ? (openBlock(), createBlock($setup["NcNoteCard"], {
        key: 0,
        type: "warning"
      }, {
        default: withCtx(() => [
          createTextVNode(
            toDisplayString($setup.t("encryption", "Encryption app is enabled but your keys are not initialized, please log-out and log-in again")),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      })) : $setup.initialized === $setup.InitStatus.InitExecuted ? (openBlock(), createBlock($setup["SettingsPersonalChangePrivateKey"], {
        key: 1,
        recoveryEnabledForUser: $setup.recoveryEnabledForUser,
        onUpdated: $setup.reloadStatus
      }, null, 8, ["recoveryEnabledForUser"])) : $setup.personalSettings.recoveryEnabled && $setup.personalSettings.privateKeySet ? (openBlock(), createBlock($setup["SettingsPersonalEnableRecovery"], {
        key: 2,
        modelValue: $setup.recoveryEnabledForUser,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.recoveryEnabledForUser = $event)
      }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true)
    ]),
    _: 1
    /* STABLE */
  }, 8, ["name"]);
}
const SettingsPersonal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/peter/nextcloud-docker-dev/workspace/server/build/frontend/apps/encryption/src/views/SettingsPersonal.vue"]]);
/*!
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
const app = createApp(SettingsPersonal);
app.mount("#encryption-settings-section");
//# sourceMappingURL=encryption-settings_personal.mjs.map
