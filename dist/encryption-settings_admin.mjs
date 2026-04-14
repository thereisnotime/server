const appName = "nextcloud-ui";
const appVersion = "1.0.0";
import { b as defineComponent, x as useModel, w as watch, H as ref, g as generateUrl, o as openBlock, c as createBlock, B as withCtx, k as createTextVNode, t as toDisplayString, y as useTemplateRef, z as computed, f as createElementBlock, F as createVNode, i as createCommentVNode, U as withModifiers, E as normalizeClass, J as Fragment, h as createBaseVNode, e as createApp } from "./Web-DZB3kNgd.chunk.mjs";
import { _ as _export_sfc, l as loadState } from "./public-BOTv8zL5.chunk.mjs";
import { t as translate } from "./translation-DoG5ZELJ-BjhwdF87.chunk.mjs";
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
/* empty css                                        */
import "./NcInputField-CPL-a_MM-WmGmujbb.chunk.mjs";
import { N as NcNoteCard } from "./mdi-DSkVotM5.chunk.mjs";
import { N as NcPasswordField } from "./NcPasswordField-BOLzDHBJ-Dl5KIJwG.chunk.mjs";
import "./index-CDnaVj2B.chunk.mjs";
import { c as cancelableClient } from "./index-BLBICdD3.chunk.mjs";
import "./NcTextField.vue_vue_type_script_setup_true_lang-B-4HNjYH-DWlILf22.chunk.mjs";
import "./NcSelectTags-B3_tcJAf-Ddvce__j.chunk.mjs";
import { N as NcSettingsSection } from "./ContentCopy-BsSgMRyn.chunk.mjs";
import "./NcUserBubble-BE6yD-R0-4_fb61Nk.chunk.mjs";
import "./NcUserStatusIcon-JWiuiAXe-BQbtMEov.chunk.mjs";
import "./emoji-V9hqFgPs-B91WqKzI.chunk.mjs";
import "./colors-BfjxNgsx-DyC4Rnj5.chunk.mjs";
import { w as watchDebounced } from "./index-DEcfRZLy.chunk.mjs";
import { c as showSuccess } from "./index-C1xmmKTZ-B1s4uv1T.chunk.mjs";
import { l as logger, N as NcFormGroup, I as InitStatus } from "./types-kmj4HFZ6.chunk.mjs";
import "./util-CV4gl569.chunk.mjs";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SettingsAdminHomeStorage",
  props: {
    "modelValue": { type: Boolean, ...{ required: true } },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const encryptHomeStorage = useModel(__props, "modelValue");
    const isSavingHomeStorageEncryption = ref(false);
    watch(encryptHomeStorage, () => {
      isSavingHomeStorageEncryption.value = true;
    });
    watchDebounced(encryptHomeStorage, async (encryptHomeStorage2, oldValue) => {
      if (encryptHomeStorage2 === oldValue) {
        isSavingHomeStorageEncryption.value = false;
        return;
      }
      try {
        await cancelableClient.post(
          generateUrl("/apps/encryption/ajax/setEncryptHomeStorage"),
          { encryptHomeStorage: encryptHomeStorage2 }
        );
      } finally {
        isSavingHomeStorageEncryption.value = false;
      }
    }, { debounce: 800 });
    const __returned__ = { encryptHomeStorage, isSavingHomeStorageEncryption, get t() {
      return translate;
    }, get NcCheckboxRadioSwitch() {
      return NcCheckboxRadioSwitch;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["NcCheckboxRadioSwitch"], {
    modelValue: $setup.encryptHomeStorage,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.encryptHomeStorage = $event),
    loading: $setup.isSavingHomeStorageEncryption,
    description: $setup.t("encryption", "Enabling this option encrypts all files stored on the main storage, otherwise only files on external storage will be encrypted"),
    type: "switch"
  }, {
    default: withCtx(() => [
      createTextVNode(
        toDisplayString($setup.t("encryption", "Encrypt the home storage")),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue", "loading", "description"]);
}
const SettingsAdminHomeStorage = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/peter/nextcloud-docker-dev/workspace/server/build/frontend/apps/encryption/src/components/SettingsAdminHomeStorage.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SettingsAdminRecoveryKey",
  props: {
    "modelValue": { type: Boolean, ...{ required: true } },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const recoveryEnabled = useModel(__props, "modelValue");
    const formElement = useTemplateRef("form");
    const isLoading = ref(false);
    const hasError = ref(false);
    const password = ref("");
    const confirmPassword = ref("");
    const passwordMatch = computed(() => password.value === confirmPassword.value);
    async function onSubmit() {
      if (isLoading.value) {
        return;
      }
      if (!passwordMatch.value) {
        return;
      }
      hasError.value = false;
      isLoading.value = true;
      try {
        const { data } = await cancelableClient.post(
          generateUrl("/apps/encryption/ajax/adminRecovery"),
          {
            adminEnableRecovery: !recoveryEnabled.value,
            recoveryPassword: password.value,
            confirmPassword: confirmPassword.value
          }
        );
        recoveryEnabled.value = !recoveryEnabled.value;
        password.value = confirmPassword.value = "";
        formElement.value?.reset();
        if (data.data.message) {
          showSuccess(data.data.message);
        }
      } catch (error) {
        hasError.value = true;
        logger.error("Failed to update recovery key settings", { error });
      } finally {
        isLoading.value = false;
      }
    }
    const __returned__ = { recoveryEnabled, formElement, isLoading, hasError, password, confirmPassword, passwordMatch, onSubmit, get t() {
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
        label: $setup.recoveryEnabled ? $setup.t("encryption", "Disable recovery key") : $setup.t("encryption", "Enable recovery key"),
        description: $setup.t("encryption", "The recovery key is an additional encryption key used to encrypt files. It is used to recover files from an account if the password is forgotten.")
      }, {
        default: withCtx(() => [
          createVNode($setup["NcPasswordField"], {
            modelValue: $setup.password,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.password = $event),
            required: "",
            name: "password",
            label: $setup.t("encryption", "Recovery key password")
          }, null, 8, ["modelValue", "label"]),
          createVNode($setup["NcPasswordField"], {
            modelValue: $setup.confirmPassword,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.confirmPassword = $event),
            required: "",
            name: "confirmPassword",
            error: !!$setup.confirmPassword && !$setup.passwordMatch,
            helperText: $setup.passwordMatch || !$setup.confirmPassword ? "" : $setup.t("encryption", "Passwords fields do not match"),
            label: $setup.t("encryption", "Repeat recovery key password")
          }, null, 8, ["modelValue", "error", "helperText", "label"]),
          createVNode($setup["NcButton"], {
            type: "submit",
            variant: $setup.recoveryEnabled ? "error" : "primary"
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString($setup.recoveryEnabled ? $setup.t("encryption", "Disable recovery key") : $setup.t("encryption", "Enable recovery key")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["variant"]),
          $setup.hasError ? (openBlock(), createBlock($setup["NcNoteCard"], {
            key: 0,
            type: "error"
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString($setup.t("encryption", "An error occurred while updating the recovery key settings. Please try again.")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["label", "description"])
    ],
    544
    /* NEED_HYDRATION, NEED_PATCH */
  );
}
const SettingsAdminRecoveryKey = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/peter/nextcloud-docker-dev/workspace/server/build/frontend/apps/encryption/src/components/SettingsAdminRecoveryKey.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SettingsAdminRecoveryKeyChange",
  setup(__props, { expose: __expose }) {
    __expose();
    const formElement = useTemplateRef("form");
    const isLoading = ref(false);
    const hasError = ref(false);
    const oldPassword = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const passwordMatch = computed(() => password.value === confirmPassword.value);
    async function onSubmit() {
      if (isLoading.value) {
        return;
      }
      if (!passwordMatch.value) {
        return;
      }
      hasError.value = false;
      isLoading.value = true;
      try {
        await cancelableClient.post(
          generateUrl("/apps/encryption/ajax/changeRecoveryPassword"),
          {
            oldPassword: oldPassword.value,
            newPassword: password.value,
            confirmPassword: confirmPassword.value
          }
        );
        oldPassword.value = password.value = confirmPassword.value = "";
        formElement.value?.reset();
      } catch (error) {
        hasError.value = true;
        logger.error("Failed to update recovery key settings", { error });
      } finally {
        isLoading.value = false;
      }
    }
    const __returned__ = { formElement, isLoading, hasError, oldPassword, password, confirmPassword, passwordMatch, onSubmit, get t() {
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
const settingsAdminRecoveryKeyChange = "_settingsAdminRecoveryKeyChange_12rwr_2";
const style0 = {
  settingsAdminRecoveryKeyChange
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "form",
    {
      ref: "form",
      class: normalizeClass(_ctx.$style.settingsAdminRecoveryKeyChange),
      onSubmit: withModifiers($setup.onSubmit, ["prevent"])
    },
    [
      createVNode($setup["NcFormGroup"], {
        label: $setup.t("encryption", "Change recovery key password")
      }, {
        default: withCtx(() => [
          createVNode($setup["NcPasswordField"], {
            modelValue: $setup.oldPassword,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.oldPassword = $event),
            required: "",
            name: "oldPassword",
            label: $setup.t("encryption", "Old recovery key password")
          }, null, 8, ["modelValue", "label"]),
          createVNode($setup["NcPasswordField"], {
            modelValue: $setup.password,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.password = $event),
            required: "",
            name: "password",
            label: $setup.t("encryption", "New recovery key password")
          }, null, 8, ["modelValue", "label"]),
          createVNode($setup["NcPasswordField"], {
            modelValue: $setup.confirmPassword,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.confirmPassword = $event),
            required: "",
            name: "confirmPassword",
            error: !$setup.passwordMatch && !!$setup.confirmPassword,
            helperText: $setup.passwordMatch || !$setup.confirmPassword ? "" : $setup.t("encryption", "Passwords fields do not match"),
            label: $setup.t("encryption", "Repeat new recovery key password")
          }, null, 8, ["modelValue", "error", "helperText", "label"]),
          createVNode($setup["NcButton"], {
            type: "submit",
            variant: "primary"
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString($setup.t("encryption", "Change recovery key password")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          $setup.hasError ? (openBlock(), createBlock($setup["NcNoteCard"], {
            key: 0,
            type: "error"
          }, {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString($setup.t("encryption", "An error occurred while changing the recovery key password. Please try again.")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["label"])
    ],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
const cssModules = {
  "$style": style0
};
const SettingsAdminRecoveryKeyChange = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__cssModules", cssModules], ["__file", "/home/peter/nextcloud-docker-dev/workspace/server/build/frontend/apps/encryption/src/components/SettingsAdminRecoveryKeyChange.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SettingsAdmin",
  setup(__props, { expose: __expose }) {
    __expose();
    const adminSettings = loadState("encryption", "adminSettings");
    const encryptHomeStorage = ref(adminSettings.encryptHomeStorage);
    const recoveryEnabled = ref(adminSettings.recoveryEnabled);
    const __returned__ = { adminSettings, encryptHomeStorage, recoveryEnabled, get t() {
      return translate;
    }, get NcNoteCard() {
      return NcNoteCard;
    }, get NcSettingsSection() {
      return NcSettingsSection;
    }, SettingsAdminHomeStorage, SettingsAdminRecoveryKey, SettingsAdminRecoveryKeyChange, get InitStatus() {
      return InitStatus;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["NcSettingsSection"], {
    name: $setup.t("encryption", "Default encryption module")
  }, {
    default: withCtx(() => [
      $setup.adminSettings.initStatus === $setup.InitStatus.NotInitialized && !$setup.adminSettings.masterKeyEnabled ? (openBlock(), createBlock($setup["NcNoteCard"], {
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
      })) : (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          createVNode($setup["SettingsAdminHomeStorage"], {
            modelValue: $setup.encryptHomeStorage,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.encryptHomeStorage = $event)
          }, null, 8, ["modelValue"]),
          _cache[2] || (_cache[2] = createBaseVNode(
            "br",
            null,
            null,
            -1
            /* CACHED */
          )),
          $setup.adminSettings.masterKeyEnabled ? (openBlock(), createBlock($setup["SettingsAdminRecoveryKey"], {
            key: 0,
            modelValue: $setup.recoveryEnabled,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.recoveryEnabled = $event)
          }, null, 8, ["modelValue"])) : createCommentVNode("v-if", true),
          $setup.adminSettings.masterKeyEnabled && $setup.recoveryEnabled ? (openBlock(), createBlock($setup["SettingsAdminRecoveryKeyChange"], { key: 1 })) : createCommentVNode("v-if", true)
        ],
        64
        /* STABLE_FRAGMENT */
      ))
    ]),
    _: 1
    /* STABLE */
  }, 8, ["name"]);
}
const SettingsAdmin = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/peter/nextcloud-docker-dev/workspace/server/build/frontend/apps/encryption/src/views/SettingsAdmin.vue"]]);
/*!
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
const app = createApp(SettingsAdmin);
app.mount("#encryption-settings-section");
//# sourceMappingURL=encryption-settings_admin.mjs.map
