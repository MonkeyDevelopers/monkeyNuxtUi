<template>
  <div class="select_component" @click="changeSelection">
    <h2>
      {{ selectedValue?.name ?? placeholder }} 
    </h2>
    <icon
      name="ph:caret-down-bold"
      class="select_icon"
      :class="selectState ? 'select_icon_rotate' : 'select_icon_rotate_deny'"
    />
  </div>
  <Transition name="select-show">
    <div
      class="select_options"
      v-if="selectState"
      ref="select_options"
      @click="changeSelection"
    >
      <span @click="updateValue({})">{{ placeholder }}</span>
      <span
        v-for="option in options"
        :key="option.id"
        @click="updateValue(option)"
      >
        {{ option.name }}
      </span>
    </div>
  </Transition>
</template>

<script setup>
const value = defineModel({ required: false });
const optionValue = defineModel("optionValue", { required: false });
const options = defineModel("options", { required: false, default: [] });
const placeholder = defineModel("placeholder", { required: false, default: "Selecione uma Opção" });

const selectedValue = ref({});
const selectState = ref(false);

function updateValue(option) {
  if (optionValue.value) {
    value.value = option[optionValue.value];
    selectedValue.value = option;
  } else {
    value.value = option;
    selectedValue.value = option;
  }
}

function changeSelection() {
  if (options.value.length === 0) {
    return;
  }
  selectState.value = !selectState.value;
}
</script>

<style scoped>
.content {
  width: 100%;
  padding: 50px;
}

.select_component {
  width: 300px;
  padding: 13px 15px;
  border-radius: 6px;
  border: 1px solid #e1e1e1;
  box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.024);
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.select_component h2 {
  font-size: 13px;
  font-weight: 400;
}

.select_icon {
  font-size: 14px;
}

.select_component:hover {
  border: 1px solid #c3c3c3;
  box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.034);
}

/* options */

.select_options {
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 3px;
  align-items: flex-start;
  row-gap: 3px;
  border-radius: 6px;
  border: 1px solid #f2f2f2;
  box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.024);
  background: white;
  position: absolute;
  z-index: 7;
  margin-top: 50px;
  transition: 0.3s;
}

.select_options span {
  padding: 10px 15px;
  font-size: 12px;
  font-weight: 500;
  color: #000000;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s;
  width: 100%;
}

.select_options span:hover {
  background: #f1f1f1;
}

/* transform */

.select_icon_rotate {
  transform: rotate(-180deg);
  transition: 0.3s;
}

.select_icon_rotate_deny {
  transform: rotate(0deg);
  transition: 0.3s;
}

/* transitions */

.select-show-enter-active {
  transition: all 0.3s;
}

.select-show-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.select-show-enter-from,
.select-show-leave-to {
  opacity: 0;
}
</style>
