<template>
    <div class="max-w-4xl mx-auto">
        <div class="flex items-center justify-between mb-8">
            <h1 class="text-2xl font-bold text-white">Chỉnh sửa bài học</h1>
            <div class="flex gap-3">
                <button @click="$router.back()"
                    class="px-4 py-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                    Hủy
                </button>
                <button
                    class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl font-medium transition-colors shadow-lg shadow-purple-500/20">
                    Lưu thay đổi
                </button>
            </div>
        </div>

        <div class="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <form class="space-y-6">
                <!-- Basic Info -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-white border-b border-gray-800 pb-2">Thông tin bài học</h3>

                    <div class="space-y-2">
                        <label class="text-sm font-medium text-gray-300">Tiêu đề bài học</label>
                        <input type="text" v-model="lesson.title"
                            class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Thuộc khóa học</label>
                            <select v-model="lesson.courseId"
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                                <option value="">Chọn khóa học</option>
                                <option value="1">ReactJS Master</option>
                                <option value="2">HTML CSS Pro</option>
                            </select>
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Chương (Chapter)</label>
                            <input type="number" v-model="lesson.chapter"
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                        </div>
                    </div>
                </div>

                <!-- Content -->
                <div class="space-y-4 pt-4">
                    <h3 class="text-lg font-semibold text-white border-b border-gray-800 pb-2">Nội dung</h3>

                    <div class="space-y-2">
                        <label class="text-sm font-medium text-gray-300">Video URL (YouTube/Vimeo)</label>
                        <input type="text" v-model="lesson.videoUrl"
                            class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Thời lượng (phút)</label>
                            <input type="number" v-model="lesson.duration"
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                        </div>
                    </div>
                </div>

                <!-- Settings -->
                <div class="space-y-4 pt-4">
                    <h3 class="text-lg font-semibold text-white border-b border-gray-800 pb-2">Cài đặt</h3>

                    <div class="flex items-center gap-4">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="lesson.isTrial"
                                class="w-5 h-5 rounded border-gray-800 bg-gray-950 text-purple-600 focus:ring-purple-500">
                            <span class="text-gray-300">Cho phép học thử</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="lesson.isPublished"
                                class="w-5 h-5 rounded border-gray-800 bg-gray-950 text-purple-600 focus:ring-purple-500">
                            <span class="text-gray-300">Xuất bản ngay</span>
                        </label>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'admin'
})

const route = useRoute()
const lessonId = route.params.id

// Mock data
const lesson = ref({
    title: 'Giới thiệu về ReactJS',
    courseId: '1',
    chapter: 1,
    videoUrl: 'https://youtube.com/...',
    duration: 15,
    isTrial: true,
    isPublished: true
})
</script>
