<script setup lang="ts">
import HeaderBar from "@/components/kbLayout/HeaderBar.vue";

const sidebarOpen = ref(false)

import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from '@heroicons/vue/24/outline'
const navigation = [
    {name: 'Dashboard', href: '#', icon: HomeIcon, current: true},
    {name: 'Team', href: '#', icon: UsersIcon, current: false},
    {name: 'Projects', href: '#', icon: FolderIcon, current: false},
    {name: 'Calendar', href: '#', icon: CalendarIcon, current: false},
    {name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false},
    {name: 'Reports', href: '#', icon: ChartPieIcon, current: false},
]
</script>
<template>
    <div>

        <!-- Mobile menu -->
        <PopupSidebar @close="sidebarOpen = false" :sidebar-open="sidebarOpen" :navigation="navigation"/>

        <!-- Static sidebar for desktop -->
        <div class="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-64 lg:overflow-y-auto lg:bg-gray-900 lg:pb-4">
            <div class="flex h-16 shrink-0 items-center justify-center">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                     alt="Your Company"/>
            </div>
            <StaticSideBar :navigation="navigation"/>
        </div>

        <div class="lg:pl-64">
            <HeaderBar @openSidebar="sidebarOpen = true"/>

            <main class="lg:pl-96">
                <div class="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                    <!-- Main area -->
                </div>
            </main>
        </div>

        <aside class="fixed bottom-0 left-64 top-16 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 lg:block">
            <!-- Secondary column (hidden on smaller screens) -->
        </aside>
    </div>
</template>

