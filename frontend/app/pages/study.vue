<template>
    <div class="bg-gray-900 px-4 py-3 rounded-2xl">
        <!-- Section Header -->
        <div class="flex items-center justify-between mb-8">
            <h1 class="font-bold text-white lg:text-lg">Khu vực học tập</h1>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            <PurchasedCourseCard v-for="course in purchasedCourses" :key="course.id" :course="course" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import PurchasedCourseCard from '~/components/PurchasedCourseCard.vue'

const purchasedCourses = [
    {
        id: 1,
        title: 'Khóa học ReactJS Master - Nắm vững kiến thức React chuyên sâu',
        thumbnail: 'https://placehold.co/600x400.png',
        progress: 75,
        lastLessonId: 'react-101'
    },
    {
        id: 2,
        title: 'Tự học thiết kế website hiệu quả với khóa học HTMLCSS cơ bản cho người mới',
        thumbnail: 'https://placehold.co/600x400.png',
        progress: 30,
        lastLessonId: 'html-basics'
    },
    {
        id: 3,
        title: 'Khóa học ReactJS Master - Nắm vững kiến thức React chuyên sâu',
        thumbnail: 'https://placehold.co/600x400.png',
        progress: 75,
        lastLessonId: 'react-101'
    },
    {
        id: 4,
        title: 'Khóa học Javascript online từ Google Meet',
        thumbnail: 'https://placehold.co/600x400.png',
        progress: 10,
        lastLessonId: 'js-intro'
    }
]
</script>