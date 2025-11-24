<template>
    <div class="min-h-screen bg-gray-950">
        <!-- Sidebar trái - Fixed -->
        <Sidebar />

        <!-- Header - Full width với padding để tránh sidebar -->
        <header class="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 md:pl-64 xl:pr-96">
            <div class="flex items-center justify-end gap-4 px-8 py-4">
                <UButton icon="i-heroicons-moon" color="gray" variant="ghost" square />
                <UButton color="primary" size="md">
                    <UIcon name="i-heroicons-user" class="w-5 h-5" />
                    Đăng nhập
                </UButton>
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
                        <UButton icon="i-heroicons-arrow-right" color="gray" variant="ghost" square size="xs" />
                    </div>

                    <div class="space-y-4">
                        <div v-for="user in leaderboard" :key="user.rank" class="flex items-center gap-3">
                            <span class="text-gray-400 font-semibold w-6">{{ user.rank }}</span>
                            <UAvatar :src="user.avatar" :alt="user.name" size="sm" :ui="{ rounded: 'rounded-full' }" />
                            <span class="text-white flex-1">{{ user.name }}</span>
                            <div class="flex items-center gap-1">
                                <UIcon :name="user.icon" class="w-4 h-4" :class="user.iconColor" />
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

const searchQuery = ref('')
const freeCoursesOnly = ref(false)

const leaderboard = [
    {
        rank: 1,
        name: 'likha',
        avatar: '/avatars/user1.jpg',
        points: '5.9k',
        icon: 'i-heroicons-fire',
        iconColor: 'text-purple-500'
    },
    {
        rank: 2,
        name: 'cuong1811',
        avatar: '/avatars/user2.jpg',
        points: '5.2k',
        icon: 'i-heroicons-bolt',
        iconColor: 'text-orange-500'
    },
    {
        rank: 3,
        name: 'dongpl',
        avatar: '/avatars/user3.jpg',
        points: '4.8k',
        icon: 'i-heroicons-sparkles',
        iconColor: 'text-purple-500'
    },
    {
        rank: 4,
        name: 'codehaier',
        avatar: '/avatars/user4.jpg',
        points: '4.0k',
        icon: 'i-heroicons-cpu-chip',
        iconColor: 'text-blue-500'
    },
    {
        rank: 5,
        name: 'milo277',
        avatar: '/avatars/user5.jpg',
        points: '4.0k',
        icon: 'i-heroicons-rocket-launch',
        iconColor: 'text-blue-500'
    }
]
</script>