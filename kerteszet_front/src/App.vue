<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
nav * {
  padding: 5px;
  margin: 5px;
  border: 2px solid lightgreen;
  border-radius: 3px;
  background-color: yellowgreen;
}
</style>
