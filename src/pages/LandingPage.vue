<template>
  <q-page padding>
    <CallToAction />
    <div>
      <div class="text-center q-mt-xl q-mb-lg">
        <div class="text-h5">Most Defective Products</div>
        <div class="subtitle-2">
          Defective Products adn Services reported by users
        </div>
      </div>
    </div>
    <div class="row">
      <div
        v-for="offering in offerings"
        :key="offering.id"
        class="col-3 q-pa-lg"
      >
        <OfferingPreview :offering="offering" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import CallToAction from "src/components/landing/CallToAction.vue";
import OfferingPreview from "src/components/landing/OfferingPreview.vue";
import { OfferingResourceApi } from "src/api/pleasefixme";
import { onMounted, ref } from "vue";
import { load } from "src/utils/snackbarUtils";

const offeringApi = new OfferingResourceApi();
const offerings = ref([]);

onMounted(async () => {
  await load("Gathering Products, Defects, and More!", async () => {
    const response = await offeringApi.listAllOfferings();
    offerings.value = response.data;
  });
});
</script>
