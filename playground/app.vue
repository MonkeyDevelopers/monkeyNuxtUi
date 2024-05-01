<template>
  <div>
    <p>
      {{ user }}
    </p>

    <p>
      {{ select }}
    </p>
    <p>
      {{ select1 }}
    </p>
    <p>
      {{ select2 }}
    </p>

    <div class="t_form">
      <MkyInput />
      <MkyInput v-model="user.name" placeholder="Your Name" />
      <MkyInput v-model="user.age" placeholder="Age" type="number" />
    </div>
    <div class="t_form">
      <MkySelect v-model="select" :options="selectOptions" />
    </div>
    <div class="t_form">
      <MkySelect v-model="select1" :options="selectOptions" optionValue="time" placeholder="meus ovos"/>
    </div>
    <div class="t_form">
      <MkySelect
        v-model="select2"
        :options="selectOptions"
        optionValue="name"
      />
    </div>

    <MkyAlert time="3000" />
    <MkyAlert time="3000" />
    <MkyAlert time="3000" />
    <MkyAlert time="3000" />
  </div>
</template>

<script setup>
const user = ref({ name: "John Doe", age: 25 });
const select = ref({});
const select1 = ref("");
const select2 = ref("");

const selectOptions = [
  { id: 1, name: "Option 1", time: "Inter" },
  { id: 2, name: "Option 2" , time: "Galo"},
  { id: 3, name: "Option 3", time: "Gremio" },
  { id: 4, name: "Option 4", time:"Ypiranga"},
  { id: 5, name: "Option 5", time: "Athleticaninho" },
];
</script>

<style>
.t_form {
  width: 400px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
