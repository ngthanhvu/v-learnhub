<template>
    <aside class="hidden xl:block fixed right-6 top-6 h-[calc(100vh-3rem)] w-96 overflow-y-auto z-40" v-if="visible">
        <div class="p-3 pt-[73px]">
            <div class="bg-gray-900 rounded-2xl border border-gray-800 p-6">

                <!-- Header -->
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center gap-2">
                        <span class="text-2xl">🔥</span>
                        <h2 class="text-xl font-bold text-white">Leaderboard</h2>
                    </div>

                    <button @click="$emit('close')"
                        class="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
                        <component :is="closeIcon" class="w-4 h-4" />
                    </button>
                </div>

                <!-- List -->
                <div class="space-y-4">
                    <div v-for="user in leaderboard" :key="user.rank" class="flex items-center gap-3">
                        <span class="text-gray-400 font-semibold w-6">{{ user.rank }}</span>

                        <img :src="user.avatar" :alt="user.name"
                            class="w-10 h-10 rounded-full object-cover border border-gray-800" />

                        <span class="text-white flex-1">{{ user.name }}</span>

                        <div class="flex items-center gap-1">
                            <component :is="user.icon" class="w-4 h-4" :class="user.iconColor" />
                            <span class="text-white font-semibold">{{ user.points }}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </aside>
</template>

<script setup>
defineProps({
    leaderboard: {
        type: Array,
        required: true
    },
    visible: {
        type: Boolean,
        default: true
    },
    closeIcon: {
        type: [Object, String],
        default: null
    }
})

defineEmits(['close'])
</script>
