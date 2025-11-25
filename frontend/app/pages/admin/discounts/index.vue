<template>
    <div>
        <div class="flex items-center justify-between mb-8">
            <h1 class="text-2xl font-bold text-white">Quản lý mã giảm giá</h1>
            <button
                class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl font-medium transition-colors flex items-center gap-2">
                <PlusIcon class="w-5 h-5" />
                Thêm mã giảm giá
            </button>
        </div>

        <div class="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead>
                        <tr class="border-b border-gray-800 bg-gray-950/50">
                            <th class="px-6 py-4 text-gray-400 font-medium text-sm">Mã giảm giá</th>
                            <th class="px-6 py-4 text-gray-400 font-medium text-sm">Loại</th>
                            <th class="px-6 py-4 text-gray-400 font-medium text-sm">Giá trị</th>
                            <th class="px-6 py-4 text-gray-400 font-medium text-sm">Đã dùng</th>
                            <th class="px-6 py-4 text-gray-400 font-medium text-sm">Trạng thái</th>
                            <th class="px-6 py-4 text-gray-400 font-medium text-sm text-right">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-800">
                        <tr v-for="discount in discounts" :key="discount.id"
                            class="group hover:bg-gray-800/50 transition-colors">
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                                        <TagIcon class="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p class="text-white font-mono font-bold">{{ discount.code }}</p>
                                        <p class="text-gray-500 text-sm">{{ discount.description }}</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 text-gray-300">
                                {{ discount.type }}
                            </td>
                            <td class="px-6 py-4 text-white font-medium">
                                {{ discount.value }}
                            </td>
                            <td class="px-6 py-4 text-gray-400">
                                {{ discount.used }}/{{ discount.limit }}
                            </td>
                            <td class="px-6 py-4">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                    :class="discount.status === 'active' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'">
                                    {{ discount.status === 'active' ? 'Đang hoạt động' : 'Hết hạn' }}
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
import { PlusIcon, PencilIcon, TrashIcon, TagIcon } from '@heroicons/vue/24/outline'

definePageMeta({
    layout: 'admin'
})

const discounts = [
    {
        id: 1,
        code: 'FRONTEND50',
        description: 'Giảm 50% khóa Front-end',
        type: 'Giảm giá',
        value: '50%',
        used: 156,
        limit: 500,
        status: 'active'
    },
    {
        id: 2,
        code: 'VONHUB200',
        description: 'Giảm 200k đơn > 1tr',
        type: 'Voucher',
        value: '200.000đ',
        used: 45,
        limit: 100,
        status: 'active'
    },
    {
        id: 3,
        code: 'WELCOME100',
        description: 'Giảm 100k cho user mới',
        type: 'New User',
        value: '100.000đ',
        used: 890,
        limit: 1000,
        status: 'active'
    },
    {
        id: 4,
        code: 'SUMMER2024',
        description: 'Khuyến mãi mùa hè',
        type: 'Event',
        value: '30%',
        used: 500,
        limit: 500,
        status: 'expired'
    }
]
</script>
