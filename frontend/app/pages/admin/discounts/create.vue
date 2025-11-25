<template>
    <div class="max-w-4xl mx-auto">
        <div class="flex items-center justify-between mb-8">
            <h1 class="text-2xl font-bold text-white">Thêm mã giảm giá mới</h1>
            <div class="flex gap-3">
                <button @click="$router.back()"
                    class="px-4 py-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                    Hủy
                </button>
                <button
                    class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl font-medium transition-colors shadow-lg shadow-purple-500/20">
                    Tạo mã giảm giá
                </button>
            </div>
        </div>

        <div class="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <form class="space-y-6">
                <!-- Basic Info -->
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-white border-b border-gray-800 pb-2">Thông tin mã giảm giá
                    </h3>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Mã giảm giá (Code)</label>
                            <input type="text" placeholder="VD: SUMMER2024"
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none uppercase font-mono">
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Loại giảm giá</label>
                            <select
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                                <option value="percent">Theo phần trăm (%)</option>
                                <option value="fixed">Số tiền cố định (VNĐ)</option>
                            </select>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm font-medium text-gray-300">Mô tả</label>
                        <textarea rows="2" placeholder="Mô tả về mã giảm giá"
                            class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none"></textarea>
                    </div>
                </div>

                <!-- Value & Limits -->
                <div class="space-y-4 pt-4">
                    <h3 class="text-lg font-semibold text-white border-b border-gray-800 pb-2">Giá trị & Giới hạn</h3>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Giá trị giảm</label>
                            <input type="number" placeholder="0"
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Số lượng giới hạn</label>
                            <input type="number" placeholder="100"
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Ngày bắt đầu</label>
                            <input type="date"
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Ngày kết thúc</label>
                            <input type="date"
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                        </div>
                    </div>
                </div>

                <!-- Settings -->
                <div class="space-y-4 pt-4">
                    <h3 class="text-lg font-semibold text-white border-b border-gray-800 pb-2">Cài đặt</h3>

                    <div class="flex items-center gap-4">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked
                                class="w-5 h-5 rounded border-gray-800 bg-gray-950 text-purple-600 focus:ring-purple-500">
                            <span class="text-gray-300">Kích hoạt ngay</span>
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
