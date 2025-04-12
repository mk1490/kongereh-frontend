<template>
  <v-autocomplete
      :label="label"
      :items="items"
      :chips="chips"
      :multiple="multiple"
      :clearable="clearable"
      :single-line="singleLine"
      :closable-chips="deletableChips"
      :hide-no-data="hideNoData"
      :disabled="disabled"
      :readonly="readOnly"
      :search-input="searchInputModel"
      @update:search="searchInputModel = $event"
      :no-data-text="noDataText"
      :error-messages="errorMessages"
      :item-text="itemText"
      :item-value="itemValue"
      :auto-select-first="autoSelectFirst"
      :no-filter="noFilter"
      :rules="rules"
      :loading="loading"
      filled
      :small-chips="smallChips"
      dense
      :model-value="modelValue"
      v-model="model"
      @update:model-value="$emit('update:modelValue', $event)"
      @focusin="$emit('focusin')"
      @focusout="$emit('focusout')"
  >
    <template v-slot:label>
      <div class="required--symbol">
        {{ label }}
        <small v-if="requiredSymbol">*</small>
      </div>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  name: "BaseAutoComplete",
  emits: ['focusout', 'focusin', 'update:searchInput'],
  props: {
    modelValue: String,
    label: String,
    itemText: String,
    itemValue: String,
    noDataText: String,
    items: Array,
    errorMessages: Array,
    rules: Array,
    chips: Boolean,
    multiple: Boolean,
    loading: Boolean,
    hideDetails: {
      type: undefined,
      default: true
    },
    smallChips: Boolean,
    clearable: Boolean,
    deletableChips: Boolean,
    hideNoData: {
      type: Boolean,
      default: false,
    },
    noFilter: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    singleLine: {
      type: Boolean,
      default: false,
    },
    requiredSymbol: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    autoSelectFirst: {
      type: Boolean,
      default: false,
    },
    searchInput: undefined,
  },
  created() {
    if (this.modelValue) {
      this.model = this.modelValue
    }

  },
  data() {
    return {
      model: null,
      searchInputModel: null,
    }
  },
  watch: {
    'searchInputModel': {
      handler(val) {
        this.$emit('update:searchInput', val)
      }
    }
  }
}
</script>

<style scoped>

</style>
