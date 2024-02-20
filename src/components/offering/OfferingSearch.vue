<template>
  <div>
    <div class="row">
      <div class="col-10">
        <q-input v-model="search" label="Search For Product" outlined />
      </div>
      <div class="col-2">
        <q-btn @click="query" label="Search" no-caps></q-btn>
      </div>
    </div>
    <div class="row q-gutter-y-md">
      <div v-for="offering in offerings" :key="offering.id" class="col-12">
        <OfferingSearchResult :offering="offering" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { OfferingResourceApi } from "src/api/pleasefixme";
import { onMounted, ref } from "vue";
import OfferingSearchResult from "./OfferingSearchResult.vue";
import { load } from "src/utils/snackbarUtils";

const search = ref("");

const offeringApi = new OfferingResourceApi();
const offerings = ref([]);

onMounted(async () => await query());

async function query() {
  await load("Looking for Defective Products", async () => {
    const response = await offeringApi.listAllOfferings(search.value);
    offerings.value = response.data;
  });
}
</script>
