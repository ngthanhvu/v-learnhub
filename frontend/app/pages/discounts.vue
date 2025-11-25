<template>
    <div class="bg-gray-900 px-4 py-3 rounded-2xl">
        <!-- Section Header -->
        <div class="flex items-center justify-between mb-8">
            <div>
                <h1 class="font-bold text-white lg:text-lg mb-1">Săn mã giảm giá</h1>
                <p class="text-gray-400 text-sm">Cập nhật các mã giảm giá mới nhất từ VonHub</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            <DiscountCard v-for="discount in discounts" :key="discount.id" :discount="discount" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import DiscountCard from '~/components/DiscountCard.vue'

const discounts = [
    {
        id: 1,
        type: 'Giảm giá',
        value: '50%',
        description: 'Giảm 50% cho tất cả các khóa học Front-end',
        code: 'FRONTEND50'
    },
    {
        id: 2,
        type: 'Voucher',
        value: '200k',
        description: 'Giảm 200k cho đơn hàng từ 1 triệu đồng',
        code: 'VONHUB200'
    },
    {
        id: 3,
        type: 'Flash Sale',
        value: '30%',
        description: 'Giảm 30% cho khóa học ReactJS Master',
        code: 'REACT30'
    },
    {
        id: 4,
        type: 'Combo',
        value: '1 Triệu',
        description: 'Giảm 1 triệu khi mua Combo Fullstack',
        code: 'FULLSTACK1M'
    },
    {
        id: 5,
        type: 'New User',
        value: '100k',
        description: 'Giảm 100k cho thành viên mới',
        code: 'WELCOME100'
    }
]
</script>