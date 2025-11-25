<template>
    <div
        class="bg-gray-900 border border-gray-700 transition-all duration-300 group overflow-hidden w-full rounded-2xl flex flex-col h-full">
        <div class="p-4 border-gray-700">
            <div class="relative">
                <div
                    class="aspect-video bg-linear-to-br from-purple-600 to-blue-600 rounded-xl overflow-hidden relative">
                    <img v-if="course.thumbnail" :src="course.thumbnail" :alt="course.title"
                        class="w-full h-full object-cover" />
                    <div class="absolute inset-0 flex items-center justify-center">
                        <AcademicCapIcon class="w-16 h-16 text-white/30" />
                    </div>
                </div>
            </div>
        </div>

        <div class="space-y-4 p-6 flex-1 flex flex-col">
            <h3
                class="text-white font-semibold text-lg line-clamp-2 group-hover:text-purple-400 transition-colors cursor-pointer">
                {{ course.title }}
            </h3>

            <div class="mt-auto space-y-4">
                <!-- Progress Bar -->
                <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-400">Đã hoàn thành</span>
                        <span class="text-white font-medium">{{ course.progress }}%</span>
                    </div>
                    <div class="w-full bg-gray-800 rounded-full h-2">
                        <div class="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                            :style="{ width: `${course.progress}%` }"></div>
                    </div>
                </div>

                <button
                    class="rounded-xl h-12 inline-flex items-center justify-center text-center px-5 font-bold min-w-[120px] transition-all text-sm shrink-0 w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:brightness-110 cursor-pointer"
                    @click="handleContinueLearning">
                    Tiếp tục học
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AcademicCapIcon } from '@heroicons/vue/24/solid'

interface PurchasedCourse {
    id: number
    title: string
    thumbnail?: string
    progress: number
    lastLessonId?: string
}

const props = defineProps<{
    course: PurchasedCourse
}>()

const handleContinueLearning = () => {
    // Navigate to learn page
    navigateTo(`/courses/${props.course.id}/learn`)
}
</script>
