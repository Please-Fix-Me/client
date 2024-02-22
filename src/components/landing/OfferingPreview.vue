<template>
  <q-card class="my-card">
    <q-card-section>
      <q-img
        :src="offering.image"
        spinner-color="white"
        style="height: 200px"
      />
    </q-card-section>
    <q-card-section>
      <div class="text-h6">{{ offering.name }}</div>
    </q-card-section>

    <q-separator inset />

    <q-card-section>
      {{ offering.description.substring(0, 140) }}...
    </q-card-section>
    <q-card-actions>
      <q-btn
        @click="toOfferingPage"
        :label="upVoteLabel"
        icon="thumb_up_alt"
        flat
      />
      <q-btn
        @click="toOfferingPage"
        :label="downVoteLabel"
        icon="thumb_down_alt"
        flat
      />
      <q-btn @click="toOfferingPage" flat no-caps>Details</q-btn>
    </q-card-actions>
  </q-card>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps(["offering"]);

const upVoteLabel = ref("");
const downVoteLabel = ref("");

onMounted(() => {
  upVoteLabel.value = props.offering.defects
    .map((defect) => defect.upVotes)
    .reduce((a, c) => a + c, 0);
  downVoteLabel.value = props.offering.defects
    .map((defect) => defect.downVotes)
    .reduce((a, c) => a + c, 0);
});

async function toOfferingPage() {
  await router.push(`/offering/${props.offering.id}`);
}
</script>
