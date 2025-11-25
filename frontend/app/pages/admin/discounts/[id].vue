<template>
    <div class="max-w-4xl mx-auto">
        <div class="flex items-center justify-between mb-8">
            <h1 class="text-2xl font-bold text-white">Chỉnh sửa mã giảm giá</h1>
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
                    <h3 class="text-lg font-semibold text-white border-b border-gray-800 pb-2">Thông tin mã giảm giá
                    </h3>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Mã giảm giá (Code)</label>
                            <input type="text" v-model="discount.code"
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none uppercase font-mono">
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Loại giảm giá</label>
                            <select v-model="discount.type"
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                                <option value="percent">Theo phần trăm (%)</option>
                                <option value="fixed">Số tiền cố định (VNĐ)</option>
                            </select>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm font-medium text-gray-300">Mô tả</label>
                        <textarea rows="2" v-model="discount.description"
                            class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none"></textarea>
                    </div>
                </div>

                <!-- Value & Limits -->
                <div class="space-y-4 pt-4">
                    <h3 class="text-lg font-semibold text-white border-b border-gray-800 pb-2">Giá trị & Giới hạn</h3>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Giá trị giảm</label>
                            <input type="number" v-model="discount.value"
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Số lượng giới hạn</label>
                            <input type="number" v-model="discount.limit"
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Ngày bắt đầu</label>
                            <input type="date" v-model="discount.startDate"
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-300">Ngày kết thúc</label>
                            <input type="date" v-model="discount.endDate"
                                class="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none">
                        </div>
                    </div>
                </div>

                <!-- Settings -->
                <div class="space-y-4 pt-4">
                    <h3 class="text-lg font-semibold text-white border-b border-gray-800 pb-2">Cài đặt</h3>

                    <div class="flex items-center gap-4">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" v-model="discount.isActive"
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

const route = useRoute()
const discountId = route.params.id

// Mock data
const discount = ref({
    code: 'SUMMER2024',
    type: 'percent',
    description: 'Khuyến mãi mùa hè 2024',
    value: 30,
    limit: 500,
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    isActive: true
})
</script>
