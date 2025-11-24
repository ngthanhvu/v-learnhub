<template>
    <div>
        <!-- Section Header -->
        <div class="flex items-center justify-between mb-8">
            <h1 class="text-3xl font-bold text-white">Đề xuất</h1>
            <UButton icon="i-heroicons-arrow-right" color="gray" variant="ghost" square />
        </div>

        <!-- Courses Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <CourseCard v-for="course in featuredCourses" :key="course.id" :course="course" />
        </div>
        
    </div>
</template>

<script setup lang="ts">
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