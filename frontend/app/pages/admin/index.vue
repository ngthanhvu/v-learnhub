<template>
    <div>
        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div v-for="stat in stats" :key="stat.label" class="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center" :class="stat.bgClass">
                        <component :is="stat.icon" class="w-6 h-6" :class="stat.textClass" />
                    </div>
                    <span class="text-sm font-medium" :class="stat.trend > 0 ? 'text-green-500' : 'text-red-500'">
                        {{ stat.trend > 0 ? '+' : '' }}{{ stat.trend }}%
                    </span>
                </div>
                <h3 class="text-gray-400 text-sm font-medium mb-1">{{ stat.label }}</h3>
                <p class="text-2xl font-bold text-white">{{ stat.value }}</p>
            </div>
        </div>

        <!-- Recent Activity -->
        <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h3 class="text-lg font-bold text-white mb-6">Hoạt động gần đây</h3>
            <div class="space-y-6">
                <div v-for="activity in recentActivity" :key="activity.id" class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                        <component :is="activity.icon" class="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                        <p class="text-white font-medium">{{ activity.title }}</p>
                        <p class="text-gray-400 text-sm">{{ activity.time }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    UsersIcon,
    AcademicCapIcon,
    CurrencyDollarIcon,
    ShoppingCartIcon,
    UserPlusIcon,
    DocumentPlusIcon
} from '@heroicons/vue/24/outline'

definePageMeta({
    layout: 'admin'
})

const stats = [
    {
        label: 'Tổng học viên',
        value: '12,345',
        trend: 12,
        icon: UsersIcon,
        bgClass: 'bg-blue-500/10',
        textClass: 'text-blue-500'
    },
    {
        label: 'Doanh thu tháng',
        value: '1.2B',
        trend: 8,
        icon: CurrencyDollarIcon,
        bgClass: 'bg-green-500/10',
        textClass: 'text-green-500'
    },
    {
        label: 'Khóa học',
        value: '24',
        trend: 0,
        icon: AcademicCapIcon,
        bgClass: 'bg-purple-500/10',
        textClass: 'text-purple-500'
    },
    {
        label: 'Đơn hàng mới',
        value: '156',
        trend: -2,
        icon: ShoppingCartIcon,
        bgClass: 'bg-orange-500/10',
        textClass: 'text-orange-500'
    }
]

const recentActivity = [
    {
        id: 1,
        title: 'Nguyễn Văn A đã mua khóa học ReactJS Master',
        time: '2 phút trước',
        icon: ShoppingCartIcon
    },
    {
        id: 2,
        title: 'Thêm bài học mới vào khóa HTML CSS Pro',
        time: '1 giờ trước',
        icon: DocumentPlusIcon
    },
    {
        id: 3,
        title: 'Trần Thị B đã đăng ký tài khoản',
        time: '3 giờ trước',
        icon: UserPlusIcon
    }
]
</script>