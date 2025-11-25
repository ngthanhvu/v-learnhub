<template>
    <div class="min-h-screen">
        <!-- Sidebar trái - Fixed -->
        <Sidebar />

        <!-- Header - Full width với padding để tránh sidebar -->
        <header class="sticky top-0 z-10 md:pl-72 pr-8 py-4 bg-gradient-to-b from-gray-950 via-gray-950 to-transparent">
            <div
                class="w-full rounded-2xl border border-gray-800 bg-gray-900/80 backdrop-blur-md px-6 py-3 flex items-center justify-between shadow-lg shadow-black/20">
                <div class="text-white font-semibold text-lg tracking-wide">
                    Khám phá
                </div>
                <div class="flex items-center gap-3">
                    <button
                        class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
                        <MoonIcon class="w-5 h-5" />
                    </button>
                    <button
                        class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-5 py-2 font-semibold text-gray-900 shadow-lg">
                        <UserIcon class="w-5 h-5" />
                        Đăng nhập
                    </button>
                </div>
            </div>
        </header>

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