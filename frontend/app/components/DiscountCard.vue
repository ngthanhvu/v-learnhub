<template>
    <div class="bg-gray-900 border border-gray-700 rounded-2xl p-6 flex flex-col h-full relative overflow-hidden group">
        <!-- Background Decoration -->
        <div
            class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110">
        </div>

        <div class="relative z-10 flex flex-col h-full">
            <!-- Header -->
            <div class="flex items-start justify-between mb-4">
                <div
                    class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">
                    <GiftIcon class="w-6 h-6" />
                </div>
                <div class="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-bold">
                    {{ discount.type }}
                </div>
            </div>

            <!-- Content -->
            <div class="mb-6 flex-1">
                <h3 class="text-2xl font-bold text-white mb-2">{{ discount.value }}</h3>
                <p class="text-gray-400 text-sm">{{ discount.description }}</p>
            </div>

            <!-- Footer -->
            <div class="mt-auto">
                <div
                    class="bg-gray-950/50 rounded-xl p-3 border border-gray-800 flex items-center justify-between mb-3">
                    <code class="text-purple-400 font-mono font-bold">{{ discount.code }}</code>
                    <button @click="copyCode" class="text-gray-500 hover:text-white transition-colors"
                        title="Sao chép mã">
                        <DocumentDuplicateIcon v-if="!copied" class="w-5 h-5" />
                        <CheckIcon v-else class="w-5 h-5 text-green-500" />
                    </button>
                </div>
                <button
                    class="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-purple-500/20">
                    Dùng ngay
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GiftIcon, DocumentDuplicateIcon, CheckIcon } from '@heroicons/vue/24/outline'

interface Discount {
    id: number
    type: string
    value: string
    description: string
    code: string
}

const props = defineProps<{
    discount: Discount
}>()

const copied = ref(false)

const copyCode = () => {
    navigator.clipboard.writeText(props.discount.code)
    copied.value = true
    setTimeout(() => {
        copied.value = false
    }, 2000)
}
</script>
