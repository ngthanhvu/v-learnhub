<template>
    <div>
        <!-- Section Header -->
        <div class="flex items-center justify-between mb-8">
            <h1 class="text-3xl font-bold text-white">Khoá học</h1>
            <UButton icon="i-heroicons-arrow-right" color="gray" variant="ghost" square />
        </div>

        <!-- Courses Grid -->
        <div class="grid gap-6 mb-12" :style="gridStyle">
            <CourseCard v-for="course in courses" :key="course.id" :course="course" />
        </div>
    </div>
</template>

<script setup lang="ts">
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

const courses = [
    {
        id: 1,
        title: 'Khóa học ReactJS Master - Nắm vững kiến thức React chuyên sâu',
        thumbnail: 'https://placehold.co/600x400.png',
        rating: 4.5,
        views: 20765,
        price: 699000,
        originalPrice: 999000,
        badge: null
    },
    {
        id: 2,
        title: 'Tự học thiết kế website hiệu quả với khóa học HTMLCSS cơ bản cho người mới',
        thumbnail: 'https://placehold.co/600x400.png',
        rating: 4.5,
        views: 62380,
        price: 0,
        originalPrice: null,
        badge: 'Khóa học miễn phí'
    },
    {
        id: 3,
        title: 'Khóa học HTMLCSS nâng cao cắt giao diện toàn tập với Gulp, Pug và Sass',
        thumbnail: 'https://placehold.co/600x400.png',
        rating: 4.5,
        views: 28624,
        price: 0,
        originalPrice: null,
        badge: 'Khóa học miễn phí'
    },
    {
        id: 4,
        title: 'Khóa học Javascript online từ Google Meet',
        thumbnail: 'https://placehold.co/600x400.png',
        rating: 4.5,
        views: 26204,
        price: 499000,
        originalPrice: 899000,
        badge: null
    },
    {
        id: 5,
        title: 'Khóa học React - Xây dựng ứng dụng web hiện đại',
        thumbnail: 'https://placehold.co/600x400.png',
        rating: 5,
        views: 15234,
        price: 799000,
        originalPrice: 1199000,
        badge: null
    },
    {
        id: 6,
        title: 'Javascript By Evondev - Từ cơ bản đến nâng cao',
        thumbnail: 'https://placehold.co/600x400.png',
        rating: 5,
        views: 32156,
        price: 599000,
        originalPrice: 999000,
        badge: null
    },
    {
        id: 7,
        title: 'HTML CSS Rocket - Phát triển website nhanh chóng',
        thumbnail: 'https://placehold.co/600x400.png',
        rating: 4.5,
        views: 18923,
        price: 0,
        originalPrice: null,
        badge: 'Khóa học miễn phí'
    },
    {
        id: 8,
        title: 'Minh họa vector bằng Adobe Illustrator',
        thumbnail: 'https://placehold.co/600x400.png',
        rating: 4.5,
        views: 12456,
        price: 899000,
        originalPrice: 1299000,
        badge: null
    }
]
</script>

