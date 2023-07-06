import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'

import {defineConfig} from 'vite'
import {version as pkgVersion} from './package.json'

process.env.VITE_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlanVzb3N2ZWRnenlmaXF0aWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0MDY4NDAsImV4cCI6MjAwMzk4Mjg0MH0.GFYWzFyA4HfbihCGf9SqtmXh8tQCLlH4rb0XISeek3c'
process.env.VITE_SUPABASE_URL = 'https://hejusosvedgzyfiqtill.supabase.co'
process.env.VITE_APP_VERSION = pkgVersion

if (process.env.NODE_ENV === 'production') {
    process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString()
}

export default defineConfig({
    plugins: [
        vue(),
        VueI18nPlugin({
            runtimeOnly: false, // If it doesn't work in production
            include: [path.resolve(__dirname, 'src/locales/**')],
        }),
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                '@vueuse/head',
                'pinia',
                {
                    '@/store': ['useStore'],
                    '@vueuse/head': ['useHead'],
                },
            ],
            dts: 'src/auto-imports.d.ts',
            vueTemplate: true,
            eslintrc: {
                enabled: true,
            },
        }),
        Components({
            dts: 'src/components.d.ts',
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
