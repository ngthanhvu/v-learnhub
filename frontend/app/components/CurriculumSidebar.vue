<template>
    <aside
        class="w-full lg:w-auto h-full lg:h-auto static lg:sticky top-10 xl:top-[112px] p-3 lg:p-0 overflow-y-auto lg:overflow-y-visible bg-gray-950 rounded-xl">
        <div class="flex flex-col h-full">
            <div class="flex-1 overflow-y-auto space-y-2">
                <div v-for="section in course.sections" :key="section.title"
                    class="border border-gray-800 rounded-lg overflow-hidden">
                    <button @click="toggleSection(section.title)"
                        class="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-700/80 cursor-pointer transition-colors text-left group bg-gray-900">
                        <span class="text-md font-medium text-white">{{ section.title }}</span>
                        <ChevronDownIcon class="w-4 h-4 text-white flex-shrink-0 transition-transform"
                            :class="{ 'rotate-180': openSections.has(section.title) }" />
                    </button>
                    <div v-show="openSections.has(section.title)" class="bg-gray-900/50 border-t border-gray-800">
                        <button v-for="lesson in section.lessons" :key="lesson.id"
                            @click="$emit('select-lesson', lesson.id)"
                            class="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-800 transition-colors text-left group cursor-pointer"
                            :class="{ 'bg-gray-800': currentLessonId === lesson.id }">
                            <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-medium"
                                :class="currentLessonId === lesson.id ? 'bg-purple-500 text-white' : 'bg-gray-800 text-gray-400 group-hover:bg-gray-700'">
                                <PlayIcon v-if="currentLessonId === lesson.id" class="w-4 h-4" />
                                <CheckCircleIcon v-else class="w-4 h-4" />
                            </div>
                            <div class="flex-1">
                                <p class="text-sm font-medium text-gray-300 group-hover:text-white transition-colors"
                                    :class="{ 'text-purple-400': currentLessonId === lesson.id }">
                                    {{ lesson.title }}
                                </p>
                                <p class="text-xs text-gray-500 mt-0.5">{{ lesson.duration }}</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { ChevronDownIcon, PlayIcon, CheckCircleIcon } from '@heroicons/vue/24/solid'

interface Lesson {
    id: string
    title: string
    duration: string
    description?: string
}

interface Section {
    title: string
    summary?: string
    lessons: Lesson[]
}

interface Course {
    id: string
    slug?: string
    title: string
    sections: Section[]
}

interface Props {
    course: Course
    currentLessonId: string | null
}

const props = defineProps<Props>()

defineEmits<{
    'select-lesson': [lessonId: string]
}>()

// Track open sections - all collapsed by default
const openSections = ref<Set<string>>(new Set())

const toggleSection = (sectionTitle: string) => {
    if (openSections.value.has(sectionTitle)) {
        openSections.value.delete(sectionTitle)
    } else {
        openSections.value.add(sectionTitle)
    }
}

// Auto-expand section containing current lesson
watch(() => props.currentLessonId, (newId: string | null) => {
    if (!newId) return

    for (const section of props.course.sections) {
        if (section.lessons.some((l: Lesson) => l.id === newId)) {
            openSections.value.add(section.title)
            break
        }
    }
}, { immediate: true })
</script>
