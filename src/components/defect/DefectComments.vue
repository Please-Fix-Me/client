<template>
  <div>
    <div v-for="comment in comments" :key="comment.id">
      <DefectComment :comment="comment" />
    </div>
  </div>
</template>

<script setup>
import DefectComment from "./DefectComment.vue";
import { computed } from "vue";

const props = defineProps(["defect"]);

const comments = computed(() => {
  const comments = props.defect.comments;
  comments.sort((a, b) => {
    const d1 = new Date(String(a.reportedOn));
    const d2 = new Date(String(b.reportedOn));
    return d2.getTime() - d1.getTime();
  });
  return comments;
});
</script>
