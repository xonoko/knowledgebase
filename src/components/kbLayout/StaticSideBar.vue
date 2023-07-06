<script setup lang="ts">

import {FunctionalComponent, HTMLAttributes, VNodeProps} from "vue";

defineProps<{
    sidebarOpen: boolean
    navigation: {
        name: string
        href: string
        icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}, any>
        current: boolean
    }[]
}>()

</script>
<template>
    <nav class="mt-8">
        <ul role="list" class="flex flex-col items-center space-y-1">
            <li v-for="item in navigation" :key="item.name">
                <a :href="item.href"
                   :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold']">
                    <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true"/>
                    <span>{{ item.name }}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>
