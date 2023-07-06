<script setup lang="ts">
import supabase from '@/supabase/supabase'
import {onMounted, ref, toRefs} from 'vue'
import {useUserStore} from "@/stores/User";

const props = defineProps(['session'])
const {session} = toRefs(props)

const loading = ref(true)
const username = ref<string | null>('')
const website = ref<string | null>('')
const avatar_url = ref<string | null>('')

onMounted(() => {
    getProfile()
})

const userStore = useUserStore()

async function getProfile() {
    try {
        loading.value = true

        if (userStore.session) {
            let {data, error, status} = await supabase
                .from('profiles')
                .select(`username, website, avatar_url`)
                .eq('id', userStore.session.user.id)
                .single()

            if (error && status !== 406) throw error

            if (data) {
                username.value = data.username
                website.value = data.website
                avatar_url.value = data.avatar_url
            }
        }
    } catch (error: any) {
        alert(error.message)
    } finally {
        loading.value = false
    }
}

async function updateProfile() {
    try {
        loading.value = true
        if (userStore.session) {

            const updates = {
                id: userStore.session.user.id,
                username: username.value,
                website: website.value,
                avatar_url: avatar_url.value,
                updated_at: new Date().toString(),
            }

            let {error} = await supabase.from('profiles').upsert(updates)

            if (error) throw error
        }
    } catch (error: any) {
        alert(error.message)
    } finally {
        loading.value = false
    }
}

async function signOut() {
    try {
        loading.value = true
        let {error} = await supabase.auth.signOut()
        if (error) throw error
    } catch (error: any) {
        alert(error.message)
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <form class="form-widget" @submit.prevent="updateProfile">
        <div>
            <label for="email">Email</label>
            <input id="email" type="text" :value="session.user.email" disabled/>
        </div>
        <div>
            <label for="username">Name</label>
            <input id="username" type="text" v-model="username"/>
        </div>
        <div>
            <label for="website">Website</label>
            <input id="website" type="url" v-model="website"/>
        </div>

        <div>
            <input
                    type="submit"
                    class="button primary block"
                    :value="loading ? 'Loading ...' : 'Update'"
                    :disabled="loading"
            />
        </div>

        <div>
            <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
        </div>
    </form>
</template>
