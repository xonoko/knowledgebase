<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AuthForm from './components/AuthForm.vue'
import { supabase } from './supabase.js'

const session = ref()

onMounted(() => {
    supabase.auth.getSession().then(({ data }) => {
        session.value = data.session
    })

    supabase.auth.onAuthStateChange((_, _session) => {
        session.value = _session
    })
})
</script>
<template>
  <router-view v-if="session"></router-view>
  <AuthForm v-else></AuthForm>
</template>
