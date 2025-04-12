<template>
    <v-container>
        <v-card>
            <v-card-title>
                <div class="col">
                    {{ $t('tags.title') }}
                </div>
                <div
                        class="v-col-auto">
                    <v-btn
                            small
                            @click="defineOrEditModal"
                            color="primary">
                        {{ $t('tags.defineNewTag') }}
                    </v-btn>
                </div>
            </v-card-title>
            <v-card-text>
                <v-data-table
                        :headers="table.headers"
                        :items="table.contents">

                </v-data-table>
            </v-card-text>
        </v-card>

        <define-modal-wizard
                :data="modal.data"
                :visible.sync="modal.visible">

        </define-modal-wizard>
    </v-container>
</template>

<script>
import DefineModalWizard from "@/view/components/Admin/Tags/DefineWizardModal/DefineModalWizard.vue";

export default {
    name: "TagsManagement",
    components: {DefineModalWizard},
    data() {
        return {
            table: {
                headers: [],
                contents: [],
            },
            modal: {
                visible: false,
                data: null,
            }
        }
    },
    methods: {
        defineOrEditModal() {
            this.modal.visible = true;
            this.modal.data = null;
        }
    }
}
</script>

<style scoped>

</style>