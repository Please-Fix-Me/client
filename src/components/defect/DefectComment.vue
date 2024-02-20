<template>
  <div class="row">
    <div class="col-2 text-center" style="border-right: 2px solid black">
      <q-img
        src="images/defect-john-doe.png"
        spinner-color="white"
        height="40px"
        width="50px"
      >
      </q-img>
      <div>
        {{ comment.customerName ? comment.customerName : "Unverified User" }}
      </div>
    </div>
    <div class="col-10 q-pl-md">
      <div class="row">
        <div class="col 9">
          <span>{{ comment.details }}</span>
        </div>
        <div class="col-3">
          <span>{{
            new Date(comment.reportedOn)
              .toUTCString()
              .split(" ")
              .slice(0, 4)
              .join(" ")
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["comment"]);
</script>
