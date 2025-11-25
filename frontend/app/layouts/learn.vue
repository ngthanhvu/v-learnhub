<template>
    <div class="min-h-screen container mx-auto bg-gray-950 text-white">
        <header class="sticky top-0 z-30 w-full py-4 bg-gradient-to-b from-gray-950 via-gray-950 to-transparent">
            <div
                class="w-full rounded-2xl border border-gray-800 bg-gray-900/80 backdrop-blur-md px-6 py-3 flex items-center justify-between shadow-lg shadow-black/20">
                <div class="text-white font-semibold text-lg tracking-wide">
                    Khám phá
                </div>
                <div class="flex items-center gap-3">
                    <button
                        class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
                        <MoonIcon class="w-5 h-5" />
                    </button>
                    <button
                        class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-5 py-2 font-semibold text-gray-900 shadow-lg">
                        <UserIcon class="w-5 h-5" />
                        Đăng nhập
                    </button>
                </div>
            </div>
        </header>

        <div class="pt-6">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { MoonIcon, UserIcon } from '@heroicons/vue/24/solid'
</script>
