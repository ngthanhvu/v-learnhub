<template>
    <div class="space-y-8 text-white mb-5">
        <section class="bg-gray-900/80 border border-gray-800 rounded-3xl p-8 shadow-xl shadow-black/20">
            <div class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div class="space-y-5">
                    <div class="inline-flex items-center gap-2 rounded-full bg-gray-800/80 px-4 py-1 text-sm text-purple-300">
                        <SparklesIcon class="w-4 h-4" />
                        {{ course.level }}
                    </div>
                    <h1 class="text-3xl lg:text-4xl font-bold leading-tight">
                        {{ course.title }}
                    </h1>
                    <p class="text-gray-300 max-w-3xl">
                        {{ course.description }}
                    </p>
                    <div class="flex flex-wrap items-center gap-6">
                        <div class="flex -space-x-3">
                            <img v-for="(member, index) in course.learners" :key="member" :src="member" alt="Learner avatar"
                                class="w-10 h-10 rounded-full border-2 border-gray-900 object-cover"
                                :class="{ 'opacity-70': index > 2 }" />
                        </div>
                        <div class="text-gray-400 text-sm">
                            {{ course.learners.length }}+ học viên đang tham gia
                        </div>
                        <div class="flex items-center gap-2 text-sm text-gray-300">
                            <StarIcon class="w-5 h-5 text-yellow-400" />
                            {{ course.rating }} · {{ course.reviews }} đánh giá
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-3 min-w-[250px]">
                    <div class="bg-gray-800/50 border border-gray-700 rounded-2xl p-4 space-y-3">
                        <div class="flex items-center gap-3 text-gray-300 text-sm">
                            <ClockIcon class="w-5 h-5 text-purple-400" />
                            {{ course.duration }}
                        </div>
                        <div class="flex items-center gap-3 text-gray-300 text-sm">
                            <FilmIcon class="w-5 h-5 text-purple-400" />
                            {{ course.videos }} bài giảng
                        </div>
                        <div class="flex items-center gap-3 text-gray-300 text-sm">
                            <UserGroupIcon class="w-5 h-5 text-purple-400" />
                            Hỗ trợ 1-1 cùng mentor
                        </div>
                    </div>
                    <button
                        class="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 py-3 font-semibold text-white shadow-lg shadow-purple-500/30">
                        Bắt đầu học ngay
                    </button>
                </div>
            </div>
        </section>

        <section class="space-y-6 bg-gray-900/70 border border-gray-800 rounded-3xl p-8 shadow-lg shadow-black/10">
            <div class="space-y-3">
                <h2 class="text-2xl font-semibold">Nội dung khóa học</h2>
                <p class="text-gray-400 text-sm">
                    Chinh phục ReactJS qua từng chương với hệ thống bài học có lộ trình rõ ràng.
                </p>
            </div>

            <div class="space-y-4">
                <div v-for="(section, index) in course.sections" :key="section.title"
                    class="rounded-2xl border border-gray-800 bg-gray-950/40 overflow-hidden">
                    <button
                        class="w-full flex items-center justify-between px-6 py-4 text-left text-lg font-semibold hover:bg-gray-800/60 transition-colors"
                        @click="toggleSection(index)">
                        <div>
                            <div class="text-gray-100">{{ section.title }}</div>
                            <div class="text-gray-500 text-sm mt-1">{{ section.summary }}</div>
                        </div>
                        <ChevronDownIcon class="w-5 h-5 text-gray-400 transition-transform duration-200"
                            :class="{ 'rotate-180': isSectionOpen(index) }" />
                    </button>

                    <div v-if="isSectionOpen(index)" class="border-t border-gray-800 bg-gray-900/40">
                        <div v-for="lesson in section.lessons" :key="lesson.title"
                            class="flex items-center justify-between px-6 py-4 border-t border-gray-800/60 first:border-t-0 text-gray-300">
                            <div class="flex items-center gap-3">
                                <PlayCircleIcon class="w-5 h-5 text-purple-400" />
                                <div>
                                    <p class="font-medium">{{ lesson.title }}</p>
                                    <p class="text-sm text-gray-500">{{ lesson.description }}</p>
                                </div>
                            </div>
                            <div class="text-sm text-gray-400 flex items-center gap-2">
                                <ClockIcon class="w-4 h-4" />
                                {{ lesson.duration }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 shadow-lg shadow-black/10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <h2 class="text-2xl font-semibold">Yêu cầu</h2>
                    <div class="space-y-3">
                        <div v-for="requirement in course.requirements" :key="requirement"
                            class="flex items-center gap-3 text-gray-300">
                            <CheckCircleIcon class="w-5 h-5 text-blue-400 flex-shrink-0" />
                            <span>{{ requirement }}</span>
                        </div>
                    </div>
                </div>
                <div class="space-y-4">
                    <h2 class="text-2xl font-semibold">Lợi ích</h2>
                    <div class="space-y-3">
                        <div v-for="benefit in course.learningBenefits" :key="benefit"
                            class="flex items-center gap-3 text-gray-300">
                            <CheckCircleIcon class="w-5 h-5 text-blue-400 flex-shrink-0" />
                            <span>{{ benefit }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from '#imports'
import {
    ChevronDownIcon,
    CheckCircleIcon,
    ClockIcon,
    FilmIcon,
    PlayCircleIcon,
    SparklesIcon,
    StarIcon,
    UserGroupIcon
} from '@heroicons/vue/24/solid'

const courses = [
    {
        id: '1',
        title: 'Khóa học ReactJS Master - Nắm vững kiến thức React chuyên sâu',
        description:
            'ReactJS là thư viện JavaScript phổ biến nhất hiện nay. Lộ trình này giúp bạn nắm thật chắc kiến thức từ cơ bản đến nâng cao với các chủ đề quan trọng như hooks, state management, tối ưu hóa hiệu năng và hơn thế nữa.',
        level: 'React nâng cao',
        duration: '12 giờ học',
        videos: 48,
        rating: 4.9,
        reviews: '3.1k',
        price: 699000,
        originalPrice: 999000,
        discount: 31,
        learners: [
            'https://i.pravatar.cc/150?img=1',
            'https://i.pravatar.cc/150?img=8',
            'https://i.pravatar.cc/150?img=11',
            'https://i.pravatar.cc/150?img=16',
            'https://i.pravatar.cc/150?img=21'
        ],
        benefits: ['Video quay full HD', 'Hỗ trợ trọn đời trong quá trình học', 'Có tài liệu kèm theo', 'Cập nhật nội dung miễn phí'],
        requirements: [
            'Có kiến thức cơ bản về HTML CSS và JS',
            'Có kiến thức về Typescript',
            'Máy tính đã cài đặt VSCode, NodeJS, Typescript, NPM, Gitbash hoặc ZSH',
            'Đã có kiến thức React cơ bản'
        ],
        learningBenefits: [
            'Nâng cao trình độ',
            'Làm chủ ReactJS để có thể học và làm việc với NextJS',
            'Hiểu rõ kiến thức React chuyên sâu giúp tự tin phỏng vấn',
            'Có nhóm hỗ trợ trong quá trình học'
        ],
        sections: [
            {
                title: 'Chương 01: Giới thiệu',
                summary: 'Tổng quan khóa học và cách setup môi trường làm việc',
                lessons: [
                    { title: 'Bài 01: Giới thiệu React', duration: '12 phút', description: 'Tổng quan kiến trúc React' },
                    { title: 'Bài 02: Setup môi trường', duration: '18 phút', description: 'Tạo dự án với Vite' }
                ]
            },
            {
                title: 'Chương 02: React key attribute',
                summary: 'Hiểu rõ cách React nhận diện component tree',
                lessons: [
                    { title: 'Bài 01: Keys và reconciliation', duration: '14 phút', description: 'Thực hành render list' },
                    { title: 'Bài 02: Thực hành với key', duration: '20 phút', description: 'Tối ưu danh sách lớn' }
                ]
            },
            {
                title: 'Chương 03: React reconciliation',
                summary: 'Giải mã cơ chế hoạt động của React',
                lessons: [
                    { title: 'Bài 01: Virtual DOM', duration: '16 phút', description: 'So sánh virtual vs real DOM' },
                    { title: 'Bài 02: Fiber Architecture', duration: '22 phút', description: 'Cơ chế scheduling' }
                ]
            },
            {
                title: 'Chương 04: Re-render cơ bản trong React',
                summary: 'Kiểm soát re-render để tối ưu hiệu năng',
                lessons: [
                    { title: 'Bài 01: useMemo & useCallback', duration: '19 phút', description: 'Ngăn re-render không cần thiết' },
                    { title: 'Bài 02: React Profiler', duration: '24 phút', description: 'Phân tích bằng DevTools' }
                ]
            }
        ]
    }
]

const route = useRoute()
const openSections = ref<number[]>([0])

const course = computed(() => {
    const found = courses.find((item) => item.id.toString() === route.params.id?.toString())
    return (
        found ??
        courses[0]
    )
})

const toggleSection = (index: number) => {
    if (openSections.value.includes(index)) {
        openSections.value = openSections.value.filter((item: number) => item !== index)
    } else {
        openSections.value = [...openSections.value, index]
    }
}

const isSectionOpen = (index: number) => openSections.value.includes(index)

// Share course data with layout using useState
const courseState = useState('currentCourse', () => course.value)
watch(course, (newCourse: typeof course.value) => {
    courseState.value = newCourse
}, { immediate: true })

useHead({
    title: `${course.value.title} | EvonHub`
})
</script>

