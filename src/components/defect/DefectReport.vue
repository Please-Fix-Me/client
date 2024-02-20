<template>
  <q-card>
    <q-toolbar>
      <q-toolbar-title
        ><span class="text-h5">Report Defect</span></q-toolbar-title
      >
      <q-btn flat round dense icon="close" v-close-popup />
    </q-toolbar>
    <q-card-section>
      <q-form>
        <q-input
          v-model="defectReport.name"
          label="Defect Report Title"
          :error-message="errors.name"
          :error="errors.name?.length > 0"
          @change="errors.name = ''"
          :hint="errors.name"
          clearable
          clear-icon="close"
        />
        <q-input
          v-model="defectReport.description"
          label="Defect Details"
          :error-message="errors.description"
          :error="errors.description?.length > 0"
          @change="errors.description = ''"
          type="textarea"
          rows="5"
          clearable
          clear-icon="close"
        />
        <q-separator />
        <q-input
          v-model="defectReport.reportedByName"
          label="Display Name"
          hint="This is appear in the defect list"
          clearable
          clear-icon="close"
        />
        <q-input
          v-model="defectReport.reportedByEmail"
          label="E-mail Address"
          hint="This email address with be used by the product manufacturer to make contact with you"
          :error-message="errors.reportedByEmail"
          :error="errors.reportedByEmail?.length > 0"
          @change="errors.reportedByEmail = ''"
          clearable
          clear-icon="close"
        />
        <div class="q-mt-sm">
          <q-btn
            @click="submitReport"
            label="Submit Report"
            :loading="loading"
          />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import { OfferingResourceApi } from "src/api/pleasefixme";

const emits = defineEmits(["report"]);

const props = defineProps(["offering"]);

const offeringApi = new OfferingResourceApi();

const defectReport = ref({
  name: "",
  description: "",
  reportedByName: "",
  reportedByEmail: "",
});

const loading = ref(false);

const errors = ref({ ...defectReport.value });

async function submitReport() {
  try {
    loading.value = true;
    await offeringApi.reportDefect(
      String(props.offering.id),
      defectReport.value
    );
    emits("report");
  } catch (e) {
    loading.value = false;
    errors.value = JSON.parse(e.response.data.error);
  } finally {
    loading.value = false;
  }
}
</script>
