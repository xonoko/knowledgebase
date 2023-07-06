<script setup lang="ts">
import {onMounted} from 'vue'
import AuthForm from './pages/LoginPage.vue'
import supabase from '@/supabase/supabase'
import {useUserStore} from "@/stores/User";

const userStore = useUserStore()

onMounted(() => {
    supabase.auth.getSession().then(({data}) => {
        userStore.session = data.session
    })

    supabase.auth.onAuthStateChange((_, _session) => {
        userStore.session = _session
    })
})

</script>
<template>
    <router-view></router-view>
</template>
