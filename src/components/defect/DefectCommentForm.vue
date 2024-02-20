<template>
  <div>
    <div class="text-h6">Post a Comment</div>
    <q-form class="q-gutter-y-sm">
      <q-input
        v-model="comment.customerName"
        label="Display Name"
        :error-message="errors.customerName"
        :error="errors.customerName?.length > 0"
        @change="errors.customerName = ''"
        outlined
        dense
      />
      <q-input
        v-model="comment.details"
        label="Type your comment here."
        :error-message="errors.details"
        :error="errors.details?.length > 0"
        @change="errors.details = ''"
        type="textarea"
        rows="3"
        outlined
        counter
      />
      <div>
        <q-btn @click="postComment" label="Post Comment" :loading="loading" />
      </div>
    </q-form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { OfferingResourceApi } from "src/api/pleasefixme";
import { useOfferingStore } from "src/stores/offering-store";

const emits = defineEmits(["post"]);
const props = defineProps(["defect"]);

const offeringStore = useOfferingStore();

const offeringApi = new OfferingResourceApi();

const comment = ref({ details: "", customerName: "" });

const errors = ref({ ...comment.value });

const loading = ref(false);

async function postComment() {
  try {
    loading.value = true;
    await offeringApi.addDefectComment(
      String(props.defect.id),
      String(offeringStore.selectedOffering.id),
      comment.value
    );
    emits("post");
  } catch (e) {
    loading.value = false;
    errors.value = JSON.parse(e.response.data.error);
  } finally {
    loading.value = false;
  }
}
</script>
