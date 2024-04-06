import { defineStore } from "pinia";
import { ref } from "vue";

export const useDrawerStore = defineStore("useDrawerStore", () => {
  const drawer = ref(true);
  const rail = ref(false);

  const toggleDrawer = () => {
    drawer.value = !drawer.value;
  };

  return {
    drawer,
    rail,
    toggleDrawer,
  };
});
