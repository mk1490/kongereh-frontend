import {App} from "vue";
import BaseButton from "../../view/widget/Base/BaseButton.vue";
import BaseModal from "../../view/widget/Base/BaseModal.vue";
import BaseTabLayout from "../../view/widget/Base/BaseTabLayout.vue";
import BaseCardLayout from "../../view/widget/Base/BaseCardLayout.vue";
import {default as BaseTextArea} from "../../view/widget/Base/BaseTextArea.vue";
import BaseTextField from "../../view/widget/Base/BaseTextField.vue";

export const registerComponents = (app: App) => {

    app.component('base-button', BaseButton)
    app.component('base-modal', BaseModal)
    app.component('base-tab-layout', BaseTabLayout)
    app.component('base-card-layout', BaseCardLayout)
    app.component('base-text-area', BaseTextArea)
    app.component('base-text-field', BaseTextField)
}