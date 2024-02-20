<template>
  <div>
    <div class="row">
      <div class="col-3 q-pr-md">
        <q-img
          :src="offering.image"
          spinner-color="white"
          style="height: 300px"
        />
      </div>
      <div class="col-9 q-pl-md">
        <div class="row" style="height: 100%">
          <div class="col-12">
            <div class="text-h4">{{ offering.name }}</div>
            <div>{{ offering.description }}</div>
          </div>
          <q-space />
          <div class="col-12 self-end">
            <q-btn
              @click="showCreateDialogue = !showCreateDialogue"
              label="Report Defect"
              size="lg"
              no-caps
            />
          </div>
        </div>
      </div>
    </div>
    <q-dialog v-model="showCreateDialogue">
      <div style="width: 500px">
        <DefectReport :offering="offering" @report="submitReport" />
      </div>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { OfferingResourceApi, Defect } from "src/api/pleasefixme";
import DefectReport from "src/components/defect/DefectReport.vue";
import { ref } from "vue";

const emits = defineEmits(["report"]);

const offeringApi = new OfferingResourceApi();

const props = defineProps(["offering"]);

const showCreateDialogue = ref(false);

function submitReport() {
  emits("report");
  showCreateDialogue.value = false;
}
</script>
