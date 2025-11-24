<template>
    <UCard
        class="bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 group overflow-hidden w-full">
        <template #header>
            <div class="relative">
                <div
                    class="aspect-video bg-linear-to-br from-purple-600 to-blue-600 rounded-lg overflow-hidden relative">
                    <img v-if="course.thumbnail" :src="course.thumbnail" :alt="course.title"
                        class="w-full h-full object-cover" />
                    <div class="absolute inset-0 flex items-center justify-center">
                        <UIcon name="i-heroicons-academic-cap" class="w-16 h-16 text-white/30" />
                    </div>
                </div>

                <div v-if="course.badge" class="absolute top-3 right-3">
                    <UBadge color="primary" variant="solid" size="md" class="px-3 py-1 text-white">
                        {{ course.badge }}
                    </UBadge>
                </div>
            </div>
        </template>

        <div class="space-y-4">
            <div class="flex gap-1 mb-3 justify-end h-4">
                <UIcon v-for="star in 5" :key="star" name="i-heroicons-star-solid"
                    :class="star <= course.rating ? 'text-yellow-400' : 'text-gray-700'" class="w-5 h-5" />
            </div>

            <h3
                class="text-white font-semibold text-lg line-clamp-2 min-h-14 group-hover:text-purple-400 transition-colors">
                {{ course.title }}
            </h3>

            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 text-gray-400">
                    <UIcon name="i-heroicons-eye" class="w-4 h-4" />
                    <span>{{ formatViews(course.views) }}</span>
                </div>
                <div class="flex items-center text-sm gap-2">
                    <span class="text-white font-bold text-lg">
                        {{ course.price === 0 ? 'Miễn phí' : formatPrice(course.price) }}
                    </span>
                    <span v-if="course.originalPrice" class="text-gray-500 text-sm line-through">
                        {{ formatPrice(course.originalPrice) }}
                    </span>
                </div>
            </div>

            <button
                class="rounded-xl h-12 inline-flex items-center justify-center text-center px-5 font-bold min-w-[120px] transition-all text-sm shrink-0 w-full from-primary to-secondary bg-linear-to-r text-white hover:brightness-110"
                @click="handleViewDetails">
                Xem chi tiết
            </button>
        </div>
    </UCard>
</template>

<script setup lang="ts">
interface Course {
    id: number
    title: string
    thumbnail?: string
    rating: number
    views: number
    price: number
    originalPrice?: number | null
    badge?: string | null
}

const props = defineProps<{
    course: Course
}>()

const formatViews = (views: number) => {
    if (views >= 1000) {
        return `${(views / 1000).toFixed(1)}k`
    }
    return views.toString()
}

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
    }).format(price)
}

const handleViewDetails = () => {
    // Navigate to course details
    navigateTo(`/courses/${props.course.id}`)
}
</script>