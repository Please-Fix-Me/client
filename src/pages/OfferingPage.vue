<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-10 q-gutter-y-xl">
        <div class="row">
          <div class="col-12">
            <OfferingDetails @report="refresh" :offering="offering" />
          </div>
        </div>
        <q-separator />
        <div class="col-12 text-h4">Defect Highlights</div>
        <div class="row q-gutter-y-lg">
          <div
            v-for="defect in defects"
            :key="String(defect.id)"
            class="col-12"
          >
            <DefectView
              :defect="defect"
              @comment="refresh"
              @upvote="refresh"
              @downvote="refresh"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import OfferingDetails from "src/components/offering/OfferingDetails.vue";
import DefectView from "src/components/defect/DefectView.vue";
import { OfferingResourceApi, Defect, Offering } from "src/api/pleasefixme";
import { Ref, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useOfferingStore } from "src/stores/offering-store";
import { load } from "src/utils/snackbarUtils";

const offeringStore = useOfferingStore();

const route = useRoute();

const offeringApi = new OfferingResourceApi();

const offering: Ref<Offering> = ref({});

const defects: Ref<Defect[]> = ref([]);

onMounted(async () => await refresh());

async function refresh() {
  await load("Gathering Product Information and Defects", async () => {
    const response = await offeringApi.findOfferingById(
      String(route.params.id)
    );
    offering.value = response.data;
    if (offering.value.defects) {
      defects.value = Array.from(offering.value.defects);
      defects.value.sort((a, b) => {
        const d1 = new Date(String(a.reportedOn));
        const d2 = new Date(String(b.reportedOn));
        return d2.getTime() - d1.getTime();
      });
    }
    offeringStore.setSelectedOffering(offering.value);
  });
}
</script>
