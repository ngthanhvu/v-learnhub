<template>
    <div class="min-h-screen bg-gray-950">
        <!-- Sidebar trái - Fixed -->
        <Sidebar />

        <!-- Header - Full width với padding để tránh sidebar -->
        <header class="sticky top-0 z-10 bg-gray-900/60 backdrop-blur-lg border-b border-gray-800 md:pl-64 pr-8">
            <div class="flex items-center justify-end gap-4 px-8 py-4">
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
        </header>

        <!-- Main Content -->
        <div class="md:ml-64 xl:mr-96 min-w-0 transition-all">
            <main class="p-8">
                <slot />
            </main>
        </div>

        <!-- Sidebar phải - Fixed -->
        <aside class="hidden xl:block fixed right-0 top-0 h-screen w-96 overflow-y-auto z-40">
            <div class="p-3 pt-[73px]">
                <div class="bg-gray-900 rounded-2xl border border-gray-800 p-6">
                    <div class="flex items-center justify-between mb-6">
                        <div class="flex items-center gap-2">
                            <span class="text-2xl">🔥</span>
                            <h2 class="text-xl font-bold text-white">Leaderboard</h2>
                        </div>
                        <button
                            class="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
                            <ArrowRightIcon class="w-4 h-4" />
                        </button>
                    </div>

                    <div class="space-y-4">
                        <div v-for="user in leaderboard" :key="user.rank" class="flex items-center gap-3">
                            <span class="text-gray-400 font-semibold w-6">{{ user.rank }}</span>
                            <img :src="user.avatar" :alt="user.name"
                                class="w-10 h-10 rounded-full object-cover border border-gray-800" />
                            <span class="text-white flex-1">{{ user.name }}</span>
                            <div class="flex items-center gap-1">
                                <component :is="user.icon" class="w-4 h-4" :class="user.iconColor" />
                                <span class="text-white font-semibold">{{ user.points }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </div>
</template>

<script setup lang="ts">
import Sidebar from '~/components/layouts/Sidebar.vue'
import { MoonIcon, UserIcon, ArrowRightIcon, FireIcon, BoltIcon, SparklesIcon, CpuChipIcon, RocketLaunchIcon } from '@heroicons/vue/24/solid'

const leaderboard = [
    {
        rank: 1,
        name: 'likha',
        avatar: 'https://placehold.co/50',
        points: '5.9k',
        icon: FireIcon,
        iconColor: 'text-purple-500'
    },
    {
        rank: 2,
        name: 'cuong1811',
        avatar: 'https://placehold.co/50',
        points: '5.2k',
        icon: BoltIcon,
        iconColor: 'text-orange-500'
    },
    {
        rank: 3,
        name: 'dongpl',
        avatar: 'https://placehold.co/50',
        points: '4.8k',
        icon: SparklesIcon,
        iconColor: 'text-purple-500'
    },
    {
        rank: 4,
        name: 'codehaier',
        avatar: 'https://placehold.co/50',
        points: '4.0k',
        icon: CpuChipIcon,
        iconColor: 'text-blue-500'
    },
    {
        rank: 5,
        name: 'milo277',
        avatar: 'https://placehold.co/50',
        points: '4.0k',
        icon: RocketLaunchIcon,
        iconColor: 'text-blue-500'
    }
]
</script>