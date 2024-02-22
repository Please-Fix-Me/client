<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey">
        <router-link to="/">
          <q-img class="q-ma-sm" src="favicon.ico" height="50px" width="50px" />
        </router-link>
        <q-toolbar-title>
          <q-btn
            to="/"
            label="PleaseFixMe"
            class="text-h5"
            no-caps
            flat
          ></q-btn>
        </q-toolbar-title>

        <div class="q-gutter-sm">
          <q-btn label="Home" to="/" color="white" text-color="black" no-caps />
          <q-btn
            label="Search"
            to="/offerings"
            color="white"
            text-color="black"
            no-caps
          />
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
