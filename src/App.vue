<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useFetchInterceptors } from '@/api/UseFetchInterceptors';
const url = 'https://jsonplaceholder.typicode.com/posts'

const { isFetching, response, error } = useFetchInterceptors(url)


</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>

        <div>
          <h1>Data from API</h1>
          <div v-if="error">{{ error.message }}</div>
          <div v-if="isFetching">Loading...</div>
          <div v-if="response">{{ response }}</div>
        </div>



      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
