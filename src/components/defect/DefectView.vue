<template>
  <div class="row">
    <div class="col-2 text-center" style="border-right: 2px solid black">
      <q-img
        src="images/defect-john-doe.png"
        spinner-color="white"
        height="80px"
        width="100px"
      >
      </q-img>
      <div>
        {{ defect.reportedByName ? defect.reportedByName : "Private User" }}
      </div>
    </div>
    <div class="col-10 q-pl-md">
      <div class="row">
        <div class="col 9">
          <span class="text-h6">{{ defect.name }}</span>
        </div>
        <div class="col-3">
          <span class="subtitle-2 text-bold">{{
            new Date(defect.reportedOn)
              .toUTCString()
              .split(" ")
              .slice(0, 4)
              .join(" ")
          }}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          {{ defect.description }}
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <q-btn
            @click="upVote"
            :label="defect.upVotes"
            :loading="upVoteLoading"
            icon="thumb_up_alt"
          />
          <q-btn
            @click="downVote"
            :label="defect.downVotes"
            :loading="downVoteLoading"
            icon="thumb_down_alt"
          />
        </div>
        <div class="col-6">
          <q-btn
            @click="showCommentDialogue = !showCommentDialogue"
            v-if="commentsCount > 0"
            :label="commentsCount + ' Comments'"
            no-caps
          />
          <q-btn
            @click="showCommentDialogue = !showCommentDialogue"
            v-else
            label="Be the first to comment!"
            no-caps
          />
        </div>
      </div>
    </div>
    <q-dialog v-model="showCommentDialogue" position="right">
      <div style="width: 700px; height: 100%; background-color: white">
        <q-card>
          <q-card-section>
            <DefectCommentForm :defect="defect" @post="postComment" />
          </q-card-section>
          <q-separator />
          <q-card-section>
            <DefectComments :defect="defect" />
          </q-card-section>
        </q-card>
      </div>
    </q-dialog>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import DefectComments from "./DefectComments.vue";
import DefectCommentForm from "./DefectCommentForm.vue";
import { useOfferingStore } from "src/stores/offering-store";
import { OfferingResourceApi } from "src/api/pleasefixme";

const emits = defineEmits(["comment", "upvote", "downvote"]);

const offeringStore = useOfferingStore();

const offeringAPI = new OfferingResourceApi();

const props = defineProps(["defect"]);

const showCommentDialogue = ref(false);
const downVoteLoading = ref(false);
const upVoteLoading = ref(false);

const commentsCount = computed(() =>
  props.defect.comments ? props.defect.comments.length : 0
);

function postComment() {
  emits("comment");
}

async function upVote() {
  try {
    upVoteLoading.value = true;
    const response = await offeringAPI.upVoteDefect(
      String(props.defect.id),
      String(offeringStore.selectedOffering.id)
    );
    emits("upvote");
  } catch (e) {
    upVoteLoading.value = false;
  } finally {
    upVoteLoading.value = false;
  }
}

async function downVote() {
  try {
    downVoteLoading.value = true;
    await offeringAPI.downVoteDefect(
      String(props.defect.id),
      String(offeringStore.selectedOffering.id)
    );
    emits("downvote");
  } catch (e) {
    downVoteLoading.value = false;
  } finally {
    downVoteLoading.value = false;
  }
}
</script>
