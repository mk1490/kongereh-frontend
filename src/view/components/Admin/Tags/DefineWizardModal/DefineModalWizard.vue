<template>
    <v-dialog
            persistent
            width="800"
            v-model="visible">
        <v-card>
            <v-card-title>
                تعریف تگ جدید
            </v-card-title>
            <v-card-text>
                <v-stepper
                        v-model="step">
                    <v-stepper-header>
                        <v-stepper-step :step="1">
                            شبوۀ احراز هویت
                        </v-stepper-step>

                    </v-stepper-header>
                    <v-stepper-content :step="1">
                        <div class="v-row">
                            <div class="v-col-12">
                                <v-select
                                        v-model="model.authenticationType"
                                        :items="items.authenticationType">
                                </v-select>
                            </div>
                        </div>

                    </v-stepper-content>
                </v-stepper>
            </v-card-text>
            <v-card-actions>
                <v-btn
                        @click="backOrCancel"
                        text
                        color="error">
                    لغو
                </v-btn>
                <v-spacer/>

                <v-btn
                        @click="next()"
                        color="primary">
                    بعدی
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "DefineModalWizard",
    props: {
        visible: Boolean,
        data: Object
    },
    created() {
        this.items.authenticationType.push({
            text: 'احراز هویت با تگ RFID',
            value: 'tagOnly',
        })
        this.items.authenticationType.push({
            text: 'احراز هویت با کلمۀ عبور',
            value: 'passwordOnly',
        })
        this.items.authenticationType.push({
            text: 'احراز هویت با تگ RFID + کلمۀ عبور',
            value: 'passwordAndTag',
        })
    },
    data() {
        return {
            step: 1,
            items: {
                authenticationType: []
            },
            model: {
                authenticationType: 'tagOnly',
            }
        }
    },
    methods: {
        backOrCancel() {
            if (this.step == 1) {
                this.$emit('update:visible', false);
            } else
                this.step--;
        },
        next() {
            this.step++;
        }
    }
}
</script>

<style scoped>

</style>