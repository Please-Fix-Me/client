<template>
  <div>
    <div class="row">
      <div class="col-3 q-pr-md">
        <q-img
          :src="offering.image"
          spinner-color="white"
          width="150px"
          height="150px"
        />
      </div>
      <div class="col-9 q-pl-md">
        <div class="row" style="height: 100%">
          <div class="col-12">
            <div class="text-h5">{{ offering.name }}</div>
            <div>{{ offering.description }}</div>
          </div>
          <div class="col-12 self-end q-gutter-x-sm">
            <q-btn
              @click="toOfferingPage"
              :label="upVoteLabel"
              icon="thumb_up_alt"
              outline
            />
            <q-btn
              @click="toOfferingPage"
              :label="downVoteLabel"
              icon="thumb_down_alt"
              outline
            />
            <q-btn
              @click="toOfferingPage"
              :label="commentsCount + ' Comments'"
              no-caps
              outline
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps(["offering"]);

const router = useRouter();

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

const commentsCount = computed(() =>
  props.offering.defects
    .map((defect) => defect.comments.length)
    .reduce((a, c) => a + c, 0)
);

async function toOfferingPage() {
  await router.push(`/offering/${props.offering.id}`);
}
</script>
