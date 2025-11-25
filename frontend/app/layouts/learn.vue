<template>
    <div class="min-h-screen container mx-auto bg-gray-950 text-white">
        <header class="sticky top-0 z-30 w-full py-4 bg-gradient-to-b from-gray-950 via-gray-950 to-transparent">
            <div
                class="w-full rounded-2xl border border-gray-800 bg-gray-900/80 backdrop-blur-md px-6 py-3 flex items-center justify-between shadow-lg shadow-black/20">
                <NuxtLink to="/" class="text-white flex items-center gap-2 font-semibold text-lg tracking-wide">
                    <div
                        class="w-10 h-10 bg-linear-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="size-6">
                                <path fill-rule="evenodd"
                                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </div>
                    <span class="text-white font-semibold text-lg">VonHub</span>
                </NuxtLink>
                <div class="flex items-center gap-3">
                    <button
                        class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
                        <MoonIcon class="w-5 h-5" />
                    </button>
                    <button @click="handleLogin"
                        class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-5 py-2 font-semibold text-gray-900 shadow-lg cursor-pointer">
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

function handleLogin() {
    navigateTo('/auth/login')
}
</script>
