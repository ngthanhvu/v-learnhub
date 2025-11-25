<template>
    <div class="min-h-screen">
        <Sidebar />
        <Header :MoonIcon="MoonIcon" :UserIcon="UserIcon" />

        <div class="md:ml-64 min-w-0 transition-all" :class="{ 'xl:mr-96': !isExplorePage }">
            <main class="px-8 mb-5">
                <slot />
            </main>
        </div>

        <LeaderboardSidebar v-if="!isCourseDetailPage && !isExplorePage" :close-icon="ArrowRightIcon"
            :leaderboard="leaderboard" :visible="true" />
        <PurchaseCard v-if="isCourseDetailPage && courseInfo" :price="courseInfo.price"
            :original-price="courseInfo.originalPrice" :discount="courseInfo.discount"
            :benefits="courseInfo.benefits" />
    </div>
</template>

<script setup lang="ts">
import Sidebar from '~/components/layouts/Sidebar.vue'
import LeaderboardSidebar from '~/components/LeaderboardSidebar.vue'
import PurchaseCard from '~/components/PurchaseCard.vue'
import { MoonIcon, UserIcon, ArrowRightIcon, FireIcon, BoltIcon, SparklesIcon, CpuChipIcon, RocketLaunchIcon } from '@heroicons/vue/24/solid'
import Header from '~/components/layouts/Header.vue'

const route = useRoute()

const isCourseDetailPage = computed(() => {
    return route.path.startsWith('/courses/') && route.params.id
})

const isExplorePage = computed(() => {
    return route.path === '/explore' || route.path === '/study' || route.path === '/discounts'
})

const courseState = useState('currentCourse', () => null)

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