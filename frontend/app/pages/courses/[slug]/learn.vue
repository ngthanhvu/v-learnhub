<template>
  <div class="w-full">
    <section class="pb-10">
      <div
        class="-mt-8 lg:mt-0 flex flex-col lg:flex-row overflow-hidden lg:overflow-visible h-[calc(100svh-140px)] sm:h-auto gap-0 lg:gap-4 transition-all relative -mx-5 -mb-7 lg:mb-0 lg:mx-0">
        <div class="w-full lg:flex-1 flex flex-col gap-3">
          <div class="relative bg-black rounded-xl overflow-hidden" style="aspect-ratio: 16/9;">
            <div v-if="youtubeVideoId" class="absolute inset-0">
              <iframe
                :src="`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=${isPlaying ? 1 : 0}&controls=1&rel=0`"
                class="w-full h-full" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </div>
            <div v-else class="absolute inset-0 flex items-center justify-center bg-black">
              <div class="absolute inset-0"
                style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 30px 30px; opacity: 0.15;">
              </div>
              <div class="absolute top-8 left-8 w-16 h-16 rounded-full bg-orange-500"></div>
              <div class="relative z-10 text-center text-gray-400">
                <p>Chưa có video cho bài học này</p>
                <p class="text-sm mt-2">Vui lòng thêm YouTube URL vào bài học</p>
              </div>
            </div>
          </div>

          <div class="hidden lg:flex items-center justify-end mb-5 gap-3">
            <button
              class="rounded-xl h-12 inline-flex items-center justify-center text-center px-5 font-bold min-w-[120px] transition-all text-sm flex-shrink-0 w-fit gap-2 bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700">
              Mở rộng
            </button>
            <button
              class="rounded-xl h-12 inline-flex items-center justify-center text-center px-5 font-bold min-w-[120px] transition-all text-sm flex-shrink-0 w-fit gap-2 bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700">
              <ArrowsPointingOutIcon class="w-6 h-6" />
              Toàn màn hình
            </button>
            <button class="rounded-full ml-auto block w-fit text-sm">
              <div class="button-gradient group rounded-full bg-linear-to-r from-purple-500 to-pink-500">
                <div class="button-inside">
                  <div
                    class="button-main group-hover:text-opacity-70 text-white flex items-center gap-2 px-3 text-sm py-2">
                    <StarIcon class="w-4 h-4 fill-[#ff979a]" />
                    Đánh giá khóa học
                  </div>
                </div>
              </div>
            </button>
          </div>


          <div class="p-3">
            <h1 class="font-extrabold text-xl lg:text-2xl xl:text-3xl lg:mb-10">
              {{ currentLesson?.title || 'Chọn bài học để bắt đầu' }}
            </h1>
          </div>
          <div
            class="w-full bg-[#131316] border border-gray-800 rounded-xl p-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none min-h-[120px]">
            <p> - Khoá học giúp bạn nắm vững kiến thức nền tảng từ cơ bản đến nâng cao.</p>
            <p> - Hướng dẫn thực hành từng bước qua các ví dụ thực tế.</p>
            <p> - Giảng viên giàu kinh nghiệm và hỗ trợ xuyên suốt khóa học.</p>
            <p> - Nội dung cô đọng, dễ hiểu và cập nhật theo xu hướng mới.</p>
            <p> - Phù hợp cho cả người mới bắt đầu và người muốn nâng cao kỹ năng.</p>
          </div>

          <CommentSection :comments="comments" />
        </div>

        <!-- Curriculum Sidebar (Right) -->
        <div class="w-full lg:w-96 lg:shrink-0">
          <CurriculumSidebar :course="course" :current-lesson-id="currentLessonId"
            @select-lesson="handleLessonSelect" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowsPointingOutIcon, StarIcon } from '@heroicons/vue/24/solid'
import CommentSection from '~/components/CommentSection.vue'
import CurriculumSidebar from '~/components/CurriculumSidebar.vue'

definePageMeta({
  layout: 'learn'
})

const route = useRoute()
const router = useRouter()

const isPlaying = ref(false)

// Function to extract YouTube video ID from URL
const extractYouTubeId = (url: string | undefined): string | null => {
  if (!url) return null

  // Handle different YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }

  return null
}

// Get YouTube video ID from current lesson
const youtubeVideoId = computed(() => {
  if (!currentLesson.value?.videoUrl) return null
  return extractYouTubeId(currentLesson.value.videoUrl)
})

// Get course data
const courses = [
  {
    id: '1',
    slug: 'reactjs-master',
    title: 'Khóa học ReactJS Master - Nắm vững kiến thức React chuyên sâu',
    sections: [
      {
        title: 'Chương 01: Giới thiệu',
        summary: 'Tổng quan khóa học và cách setup môi trường làm việc',
        lessons: [
          { id: '1-1', title: 'Bài 01: Giới thiệu React', duration: '12 phút', description: 'Tổng quan kiến trúc React', videoUrl: 'https://www.youtube.com/watch?v=v6jZTiYZmQU' },
          { id: '1-2', title: 'Bài 02: Setup môi trường', duration: '18 phút', description: 'Tạo dự án với Vite', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
        ]
      },
      {
        title: 'Chương 02: React key attribute',
        summary: 'Hiểu rõ cách React nhận diện component tree',
        lessons: [
          { id: '2-1', title: 'Bài 01: Keys và reconciliation', duration: '14 phút', description: 'Thực hành render list', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { id: '2-2', title: 'Bài 02: Thực hành với key', duration: '20 phút', description: 'Tối ưu danh sách lớn', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
        ]
      },
      {
        title: 'Chương 03: React reconciliation',
        summary: 'Giải mã cơ chế hoạt động của React',
        lessons: [
          { id: '3-1', title: 'Bài 01: Virtual DOM', duration: '16 phút', description: 'So sánh virtual vs real DOM', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { id: '3-2', title: 'Bài 02: Fiber Architecture', duration: '22 phút', description: 'Cơ chế scheduling', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
        ]
      },
      {
        title: 'Chương 04: Re-render cơ bản trong React',
        summary: 'Kiểm soát re-render để tối ưu hiệu năng',
        lessons: [
          { id: '4-1', title: 'Bài 01: useMemo & useCallback', duration: '19 phút', description: 'Ngăn re-render không cần thiết', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { id: '4-2', title: 'Bài 02: React Profiler', duration: '24 phút', description: 'Phân tích bằng DevTools', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
        ]
      }
    ]
  }
]

const course = computed(() => {
  const found = courses.find((item) => item.slug === route.params.slug)
  return found ?? courses[0]
})

const currentLessonId = computed(() => {
  const lessonId = route.query.lesson as string
  if (lessonId) return lessonId

  if (course.value.sections.length > 0 && course.value.sections[0].lessons.length > 0) {
    return course.value.sections[0].lessons[0].id
  }
  return null
})

interface Lesson {
  id: string
  title: string
  duration: string
  description?: string
  videoUrl?: string
}

interface Section {
  title: string
  summary?: string
  lessons: Lesson[]
}

// Find current lesson
const currentLesson = computed<Lesson | null>(() => {
  if (!currentLessonId.value) return null

  for (const section of course.value.sections) {
    const lesson = section.lessons.find((l: Lesson) => l.id === currentLessonId.value)
    if (lesson) return lesson
  }
  return null
})

// Find current section
const currentSection = computed<Section | null>(() => {
  if (!currentLessonId.value) return course.value.sections[0] || null
  return course.value.sections.find((section: Section) =>
    section.lessons.some((lesson: Lesson) => lesson.id === currentLessonId.value)
  ) || null
})

const handleLessonSelect = (lessonId: string) => {
  router.push({
    query: { ...route.query, lesson: lessonId }
  })
  // Reset playing state when switching lessons
  isPlaying.value = false
}

// Watch for lesson changes to update video
watch(currentLessonId, () => {
  isPlaying.value = false
})

// Dummy comments data
const comments = ref([
  {
    id: '1',
    user: {
      name: 'thao',
      avatar: 'https://i.pravatar.cc/150?u=thao'
    },
    content: 'Vô tình biết được em làm cùng công ty với anh ạ, cảm ơn những bài chia sẻ hữu ích của a nhiều nhá "cuộc cách mạng QWIR"',
    createdAt: '1 tháng trước',
    replies: [
      {
        id: '1-1',
        user: {
          name: 'anhtuan',
          avatar: 'https://i.pravatar.cc/150?u=anhtuan'
        },
        content: 'Anh cám ơn em nha. Em team HTML đúng không ?',
        createdAt: '1 tháng trước'
      },
      {
        id: '1-2',
        user: {
          name: 'thao',
          avatar: 'https://i.pravatar.cc/150?u=thao'
        },
        content: 'dạ vâng ạ a biết a hả?',
        createdAt: '1 tháng trước'
      }
    ]
  },
  {
    id: '2',
    user: {
      name: 'Dũng',
      avatar: 'https://i.pravatar.cc/150?u=dung'
    },
    content: 'thanks addddd',
    createdAt: '2 tháng trước',
    replies: []
  }
])

useHead({
  title: `Học ${course.value.title} | EvonHub`
})
</script>
