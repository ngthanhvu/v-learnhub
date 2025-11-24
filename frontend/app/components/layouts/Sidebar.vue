<template>
    <aside class="hidden md:block fixed left-0 top-0 h-screen w-64 bg-gray-900 border-r border-gray-800 z-50">
        <div class="flex flex-col h-full">
            <div class="p-6">
                <div class="flex items-center gap-3">
                    <div
                        class="w-10 h-10 bg-linear-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-xl">Ξ</span>
                    </div>
                    <span class="text-white font-semibold text-xl">EvonHub</span>
                </div>
            </div>

            <nav class="flex-1 px-2 space-y-1">
                <NuxtLink v-for="item in navItems" :key="item.label" :to="item.to"
                    class="flex items-center gap-3 px-3 py-3 text-white hover:bg-gray-800 rounded-lg transition-colors"
                    active-class="bg-gray-800 text-white">
                    <component :is="item.icon" class="w-5 h-5" />
                    <span>{{ item.label }}</span>
                    <span v-if="item.badge" class="ml-auto text-xs font-semibold text-red-500 border border-red-500 rounded-full px-2 py-1">{{ item.badge }}</span>
                </NuxtLink>
            </nav>

            <div class="p-3">
                <div class="mt-auto relative rounded-2xl bg-gray-800/80 border border-gray-700 p-5 text-white">
                    <div
                        class="size-8 p-2 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-300 absolute right-3 top-3">
                        <SparklesIcon class="w-5 h-5" />
                    </div>
                    <h3 class="font-bold text-base lg:text-lg">Membership!</h3>
                    <div class="text-sm text-gray-300">
                        Sở hữu toàn bộ khóa học 1 cách nhanh nhất.
                    </div>
                    <a class="mt-4 flex items-center justify-between gap-2 p-2 text-sm rounded-xl bg-gradient-to-r from-green-400 to-blue-500 font-bold text-gray-900"
                        href="/membership">
                        <span>Khám phá ngay</span>
                        <ArrowRightIcon class="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { HomeIcon, AcademicCapIcon, BookOpenIcon, GiftIcon, UserCircleIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'

const navItems = [
    { label: 'Dashboard', to: '/', icon: HomeIcon },
    { label: 'Khóa học', to: '/explore', icon: AcademicCapIcon },
    { label: 'Khu vực học tập', to: '/study-area', icon: BookOpenIcon },
    { label: 'Săn mã giảm giá', to: '/discounts', icon: GiftIcon, badge: 'Hot' },
    { label: 'Profile', to: '/profile', icon: UserCircleIcon }
]
</script>