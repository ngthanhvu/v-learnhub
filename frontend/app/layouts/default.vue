<template>
    <div class="min-h-screen">
        <!-- Sidebar trái - Fixed -->
        <Sidebar />

        <!-- Header - Full width với padding để tránh sidebar -->
        <Header />

        <!-- Main Content -->
        <div class="md:ml-64 xl:mr-96 min-w-0 transition-all">
            <main class="px-8">
                <slot />
            </main>
        </div>

        <!-- Sidebar phải - Fixed -->
        <LeaderboardSidebar v-if="!isCourseDetailPage" :leaderboard="leaderboard" :visible="true" />
        <PurchaseCard 
            v-if="isCourseDetailPage && courseInfo"
            :price="courseInfo.price"
            :original-price="courseInfo.originalPrice"
            :discount="courseInfo.discount"
            :benefits="courseInfo.benefits"
        />
    </div>
</template>

<script setup lang="ts">
import Sidebar from '~/components/layouts/Sidebar.vue'
import LeaderboardSidebar from '~/components/LeaderboardSidebar.vue'
import PurchaseCard from '~/components/PurchaseCard.vue'
import { MoonIcon, UserIcon, ArrowRightIcon, FireIcon, BoltIcon, SparklesIcon, CpuChipIcon, RocketLaunchIcon } from '@heroicons/vue/24/solid'
import Header from '~/components/layouts/Header.vue'

const route = useRoute()

// Check if current page is course detail page
const isCourseDetailPage = computed(() => {
    return route.path.startsWith('/courses/') && route.params.id
})

// Get course data from shared state
const courseState = useState('currentCourse', () => null)

// Extract only needed fields from course data
const courseInfo = computed(() => {
    if (!courseState.value) return null
    const course = courseState.value
    return {
        price: course.price,
        originalPrice: course.originalPrice,
        discount: course.discount,
        benefits: course.benefits
    }
})

const leaderboard = [
    {
        rank: 1,
        name: 'likha',
        avatar: 'https://placehold.co/50',
        points: '5.9k',
        icon: FireIcon,
        iconColor: 'text-purple-500'
    },
    {
        rank: 2,
        name: 'cuong1811',
        avatar: 'https://placehold.co/50',
        points: '5.2k',
        icon: BoltIcon,
        iconColor: 'text-orange-500'
    },
    {
        rank: 3,
        name: 'dongpl',
        avatar: 'https://placehold.co/50',
        points: '4.8k',
        icon: SparklesIcon,
        iconColor: 'text-purple-500'
    },
    {
        rank: 4,
        name: 'codehaier',
        avatar: 'https://placehold.co/50',
        points: '4.0k',
        icon: CpuChipIcon,
        iconColor: 'text-blue-500'
    },
    {
        rank: 5,
        name: 'milo277',
        avatar: 'https://placehold.co/50',
        points: '4.0k',
        icon: RocketLaunchIcon,
        iconColor: 'text-blue-500'
    }
]
</script>