<template>
    <div>
        <div class="flex items-center justify-between mb-8">
            <h1 class="text-2xl font-bold text-white">Quản lý khóa học</h1>
            <NuxtLink to="/admin/courses/create"
                class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl font-medium transition-colors flex items-center gap-2">
                <PlusIcon class="w-5 h-5" />
                Thêm khóa học
            </NuxtLink>
        </div>

        <div class="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead>
                        <tr class="border-b border-gray-800 bg-gray-950/50">
                            <th class="px-6 py-4 text-gray-400 font-medium text-sm">Khóa học</th>
                            <th class="px-6 py-4 text-gray-400 font-medium text-sm">Giá</th>
                            <th class="px-6 py-4 text-gray-400 font-medium text-sm">Học viên</th>
                            <th class="px-6 py-4 text-gray-400 font-medium text-sm">Trạng thái</th>
                            <th class="px-6 py-4 text-gray-400 font-medium text-sm text-right">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-800">
                        <tr v-for="course in courses" :key="course.id"
                            class="group hover:bg-gray-800/50 transition-colors">
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-4">
                                    <img :src="course.thumbnail"
                                        class="w-12 h-12 rounded-lg object-cover bg-gray-800" />
                                    <div>
                                        <p class="text-white font-medium line-clamp-1">{{ course.title }}</p>
                                        <p class="text-gray-500 text-sm">{{ course.lessons }} bài học</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 text-white">
                                {{ formatPrice(course.price) }}
                            </td>
                            <td class="px-6 py-4 text-gray-400">
                                {{ course.students }}
                            </td>
                            <td class="px-6 py-4">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                    :class="course.status === 'active' ? 'bg-green-500/10 text-green-500' : 'bg-gray-500/10 text-gray-500'">
                                    {{ course.status === 'active' ? 'Đang hoạt động' : 'Nháp' }}
                                </span>
                            </td>
                            <td class="px-6 py-4 text-right">
                                <div class="flex items-center justify-end gap-2">
                                    <NuxtLink :to="`/admin/courses/${course.id}`"
                                        class="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                                        <PencilIcon class="w-5 h-5" />
                                    </NuxtLink>
                                    <button
                                        class="p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                                        <TrashIcon class="w-5 h-5" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'

definePageMeta({
    layout: 'admin'
})

const courses = [
    {
        id: 1,
        title: 'Khóa học ReactJS Master - Nắm vững kiến thức React chuyên sâu',
        thumbnail: 'https://placehold.co/100',
        price: 699000,
        students: 1234,
        lessons: 45,
        status: 'active'
    },
    {
        id: 2,
        title: 'HTML CSS Pro',
        thumbnail: 'https://placehold.co/100',
        price: 499000,
        students: 856,
        lessons: 32,
        status: 'active'
    },
    {
        id: 3,
        title: 'Javascript Advanced',
        thumbnail: 'https://placehold.co/100',
        price: 899000,
        students: 0,
        lessons: 12,
        status: 'draft'
    }
]

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
    }).format(price)
}
</script>
