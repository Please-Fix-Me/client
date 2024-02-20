<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey">
        <q-img class="q-ma-sm" src="favicon.ico" height="50px" width="50px" />
        <q-toolbar-title> PleaseFixMe </q-toolbar-title>

        <div class="q-gutter-sm">
          <q-btn
            label="Businesses"
            href="http://pleasefixme.vercel.app"
            color="white"
            text-color="black"
            no-caps
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup></script>
