import {Session} from "@supabase/supabase-js";
import {Ref} from "vue";

export const useUserStore = defineStore('user', () => {
    const session: Ref<Session | null> = ref(null)

    return {session}
})
