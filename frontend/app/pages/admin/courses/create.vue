<template>
    <div class="max-w-4xl mx-auto">
        <div class="flex items-center justify-between mb-8">
            <h1 class="text-2xl font-bold text-white">Thêm khóa học mới</h1>
            <div class="flex gap-3">
                <button @click="$router.back()"
                    class="px-4 py-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                    Hủy
                </button>
                <button
                    class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl font-medium transition-colors shadow-lg shadow-purple-500/20">
                    Tạo khóa học
                </button>
            </div>
        </div>

        <div class="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <form class="space-y-6">
                <!-- Basic Info -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-white border-b border-gray-800 pb-2">Thông tin cơ bản</h3>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Tên khóa học</label>
                            <input type="text" placeholder="Nhập tên khóa học"
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Giá (VNĐ)</label>
                            <input type="number" placeholder="0"
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm font-medium text-gray-300">Mô tả ngắn</label>
                        <textarea rows="3" placeholder="Mô tả ngắn về khóa học"
                            class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none"></textarea>
                    </div>
                </div>

                <!-- Media -->
                <div class="space-y-4 pt-4">
                    <h3 class="text-lg font-semibold text-white border-b border-gray-800 pb-2">Hình ảnh & Video</h3>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Thumbnail URL</label>
                            <input type="text" placeholder="https://..."
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Video giới thiệu URL</label>
                            <input type="text" placeholder="https://..."
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                        </div>
                    </div>
                </div>

                <!-- Settings -->
                <div class="space-y-4 pt-4">
                    <h3 class="text-lg font-semibold text-white border-b border-gray-800 pb-2">Cài đặt</h3>

                    <div class="flex items-center gap-4">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox"
                                class="w-5 h-5 rounded border-gray-800 bg-gray-950 text-purple-600 focus:ring-purple-500">
                            <span class="text-gray-300">Công khai khóa học</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox"
                                class="w-5 h-5 rounded border-gray-800 bg-gray-950 text-purple-600 focus:ring-purple-500">
                            <span class="text-gray-300">Khóa học miễn phí</span>
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
</script>
