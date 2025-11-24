<template>
    <div class="bg-gray-900 px-4 py-3 rounded-2xl">
        <!-- Section Header -->
        <div class="flex items-center justify-between mb-8">
            <h1 class="font-bold text-white lg:text-lg">Đề xuất</h1>
            <button
                class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
                <ArrowRightIcon class="w-5 h-5" />
            </button>
        </div>

        <!-- Courses Grid -->
        <div class="grid gap-6 mb-12" :style="gridStyle">
            <CourseCard v-for="course in featuredCourses" :key="course.id" :course="course" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

const windowWidth = ref(0)

onMounted(() => {
    windowWidth.value = window.innerWidth
    const handleResize = () => {
        windowWidth.value = window.innerWidth
    }
    window.addEventListener('resize', handleResize)
    onUnmounted(() => {
        window.removeEventListener('resize', handleResize)
    })
})

const GRID_GAP = 24 // gap-6
const LEFT_SIDEBAR_WIDTH = 256 // md:ml-64
const RIGHT_SIDEBAR_WIDTH = 384 // xl:mr-96
const MAIN_PADDING = 64 // p-8 => 32px each side

const contentWidth = computed(() => {
    let width = windowWidth.value - GRID_GAP
    if (windowWidth.value >= 768) {
        width -= LEFT_SIDEBAR_WIDTH
    }
    if (windowWidth.value >= 1280) {
        width -= RIGHT_SIDEBAR_WIDTH
    }
    width -= MAIN_PADDING
    return Math.max(width, 0)
})

const gridStyle = computed(() => {
    const width = contentWidth.value
    if (width >= 1050) {
        return { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }
    }
    if (width >= 680) {
        return { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }
    }
    return { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' }
})

const featuredCourses = [
    {
        id: 1,
        title: 'Khóa học ReactJS Master - Nắm vững kiến thức React chuyên sâu',
        thumbnail: 'https://placehold.co/600x400.png',
        rating: 4,
        views: 20765,
        price: 699000,
        originalPrice: 999000,
        badge: 'Khóa học miễn phí'
    },
    {
        id: 2,
        title: 'Tự học thiết kế website hiệu quả với khóa học HTMLCSS cơ bản cho người mới',
        thumbnail: 'https://placehold.co/600x400.png',
        rating: 4,
        views: 62380,
        price: 0,
        originalPrice: null,
        badge: 'Khóa học miễn phí'
    },
    {
        id: 3,
        title: 'Khóa học HTMLCSS nâng cao cắt giao diện toàn tập với Gulp, Pug và Sass',
        thumbnail: 'https://placehold.co/600x400.png',
        rating: 5,
        views: 28624,
        price: 0,
        originalPrice: null,
        badge: 'Khóa học miễn phí'
    },
    {
        id: 4,
        title: 'Khóa học Javascript online từ Google Meet',
        thumbnail: 'https://placehold.co/600x400.png',
        rating: 5,
        views: 26204,
        price: 499000,
        originalPrice: 899000,
        badge: null
    }
]
</script>