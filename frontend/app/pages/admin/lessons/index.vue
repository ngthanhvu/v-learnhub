<template>
    <div>
        <div class="flex items-center justify-between mb-8">
            <h1 class="text-2xl font-bold text-white">Quản lý bài học</h1>
            <button
                class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl font-medium transition-colors flex items-center gap-2">
                <PlusIcon class="w-5 h-5" />
                Thêm bài học
            </button>
        </div>

        <div class="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead>
                        <tr class="border-b border-gray-800 bg-gray-950/50">
                            <th class="px-6 py-4 text-gray-400 font-medium text-sm">Bài học</th>
                            <th class="px-6 py-4 text-gray-400 font-medium text-sm">Khóa học</th>
                            <th class="px-6 py-4 text-gray-400 font-medium text-sm">Thời lượng</th>
                            <th class="px-6 py-4 text-gray-400 font-medium text-sm">Trạng thái</th>
                            <th class="px-6 py-4 text-gray-400 font-medium text-sm text-right">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-800">
                        <tr v-for="lesson in lessons" :key="lesson.id"
                            class="group hover:bg-gray-800/50 transition-colors">
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-4">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400">
                                        <PlayCircleIcon class="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p class="text-white font-medium line-clamp-1">{{ lesson.title }}</p>
                                        <p class="text-gray-500 text-sm">Chương {{ lesson.chapter }}</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 text-gray-300">
                                {{ lesson.course }}
                            </td>
                            <td class="px-6 py-4 text-gray-400">
                                {{ lesson.duration }}
                            </td>
                            <td class="px-6 py-4">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                    :class="lesson.status === 'published' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'">
                                    {{ lesson.status === 'published' ? 'Đã xuất bản' : 'Đang xử lý' }}
                                </span>
                            </td>
                            <td class="px-6 py-4 text-right">
                                <div class="flex items-center justify-end gap-2">
                                    <button
                                        class="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                                        <PencilIcon class="w-5 h-5" />
                                    </button>
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
import { PlusIcon, PencilIcon, TrashIcon, PlayCircleIcon } from '@heroicons/vue/24/outline'

definePageMeta({
    layout: 'admin'
})

const lessons = [
    {
        id: 1,
        title: 'Giới thiệu về ReactJS',
        chapter: 1,
        course: 'ReactJS Master',
        duration: '15:30',
        status: 'published'
    },
    {
        id: 2,
        title: 'Cài đặt môi trường',
        chapter: 1,
        course: 'ReactJS Master',
        duration: '10:45',
        status: 'published'
    },
    {
        id: 3,
        title: 'Component và Props',
        chapter: 2,
        course: 'ReactJS Master',
        duration: '25:00',
        status: 'processing'
    }
]
</script>
