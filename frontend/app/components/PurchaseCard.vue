<template>
    <aside class="hidden xl:block fixed right-6 top-6 h-[calc(100vh-3rem)] w-96 overflow-y-auto z-40">
        <div class="p-3 pt-[73px]">
            <div class="bg-gray-900/80 border border-gray-800 rounded-3xl p-8 space-y-6 h-fit shadow-2xl shadow-black/20">
                <div>
                    <div class="text-3xl font-bold text-white">
                        {{ formatPrice(price) }}
                    </div>
                    <div class="flex items-center gap-2 text-sm mt-1">
                        <span class="text-gray-500 line-through">{{ formatPrice(originalPrice) }}</span>
                        <span class="inline-flex items-center rounded-full bg-purple-500/20 text-purple-300 px-3 py-1 font-semibold">
                            -{{ discount }}%
                        </span>
                    </div>
                </div>

                <div class="space-y-3">
                    <div v-for="benefit in benefits" :key="benefit"
                        class="flex items-center gap-3 text-gray-300 text-sm">
                        <CheckCircleIcon class="w-5 h-5 text-green-400" />
                        {{ benefit }}
                    </div>
                </div>

                <div class="space-y-3">
                    <div class="relative">
                        <input type="text" placeholder="NHẬP MÃ GIẢM GIÁ"
                            class="w-full rounded-2xl bg-gray-950/70 border border-gray-800 py-3 px-4 text-sm placeholder:text-gray-500 focus:outline-none focus:border-purple-500" />
                        <button
                            class="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-gray-100/90 px-4 py-2.5 text-xs font-semibold text-gray-900 hover:brightness-110 cursor-pointer">
                            Áp dụng
                        </button>
                    </div>
                    <button
                        class="w-full rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 py-3 font-semibold text-gray-900 hover:brightness-110 cursor-pointer">
                        Mua ngay
                    </button>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid'

interface Props {
    price: number
    originalPrice: number
    discount: number
    benefits: string[]
}

defineProps<Props>()

const formatPrice = (value: number) =>
    new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        maximumFractionDigits: 0
    }).format(value)
</script>

