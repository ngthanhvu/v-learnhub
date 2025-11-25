<template>
    <aside class="hidden md:block border-r border-gray-800 fixed left-0 top-0 bottom-0 w-64 bg-gray-950 z-50 h-screen">
        <div class="flex flex-col h-full">
            <!-- Logo -->
            <div class="p-6">
                <NuxtLink to="/admin" class="flex items-center gap-3">
                    <div
                        class="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
                        <span class="text-white font-bold text-xl">A</span>
                    </div>
                    <span class="text-white font-bold text-xl tracking-tight">Admin</span>
                </NuxtLink>
            </div>

            <!-- Navigation -->
            <nav class="flex-1 p-4 space-y-1 overflow-y-auto">
                <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to"
                    class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-900 group"
                    active-class="bg-gray-900 text-white shadow-lg shadow-purple-500/5 border border-gray-800">
                    <component :is="item.icon" class="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                        :class="{ 'text-purple-500': $route.path === item.to }" />
                    <span class="font-medium">{{ item.label }}</span>
                </NuxtLink>
            </nav>

            <!-- User Profile -->
            <div class="p-4">
                <div class="flex items-center gap-3 p-3 rounded-xl bg-gray-900 border border-gray-800">
                    <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                        <UserIcon class="w-6 h-6 text-gray-400" />
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-white truncate">Admin User</p>
                        <p class="text-xs text-gray-500 truncate">admin@vonhub.com</p>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
import {
    HomeIcon,
    AcademicCapIcon,
    BookOpenIcon,
    TagIcon,
    Cog6ToothIcon,
    UserIcon
} from '@heroicons/vue/24/outline'

const navItems = [
    { label: 'Dashboard', to: '/admin', icon: HomeIcon },
    { label: 'Quản lý khóa học', to: '/admin/courses', icon: AcademicCapIcon },
    { label: 'Quản lý bài học', to: '/admin/lessons', icon: BookOpenIcon },
    { label: 'Mã giảm giá', to: '/admin/discounts', icon: TagIcon },
    { label: 'Cài đặt', to: '/admin/settings', icon: Cog6ToothIcon }
]
</script>
