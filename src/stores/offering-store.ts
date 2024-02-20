import { defineStore } from "pinia";
import { Offering } from "src/api/pleasefixme";
import type { Ref } from "vue";
import { ref } from "vue";

export const useOfferingStore = defineStore("offeringStore", () => {
  const selectedOffering: Ref<Offering> = ref({});

  function setSelectedOffering(offering: Offering) {
    this.selectedOffering = offering;
  }

  return { selectedOffering, setSelectedOffering };
});
