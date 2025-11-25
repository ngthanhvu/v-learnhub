<template>
    <div class="w-full">
        <div class="relative mb-10">
            <textarea v-model="commentContent" placeholder="Nhập bình luận..."
                class="w-full bg-[#131316] border border-gray-800 rounded-xl p-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none min-h-[120px]"></textarea>

            <div class="flex justify-end mt-3">
                <button
                    class="px-6 py-2.5 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-white font-medium rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-purple-500/20">
                    Đăng bình luận
                </button>
            </div>
        </div>

        <!-- Comments List -->
        <div>
            <div class="flex items-center gap-2 mb-6">
                <h3 class="text-lg font-bold text-white">Comments</h3>
                <span class="bg-[#6366f1] text-white text-xs font-bold px-2 py-0.5 rounded-full">{{ totalComments
                    }}</span>
            </div>

            <div class="space-y-6">
                <div v-for="comment in comments" :key="comment.id">
                    <!-- Parent Comment -->
                    <div class="flex gap-4">
                        <img :src="comment.user.avatar" :alt="comment.user.name"
                            class="w-10 h-10 rounded-full object-cover border-2 border-gray-800">
                        <div class="flex-1">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="font-bold text-gray-200">{{ comment.user.name }}</span>
                                <span class="text-xs text-gray-500">• {{ comment.createdAt }}</span>
                            </div>
                            <div class="bg-[#1c1c21] border border-gray-800 rounded-xl p-4 text-gray-300 text-sm mb-2">
                                {{ comment.content }}
                            </div>
                            <button class="text-sm text-gray-500 hover:text-gray-300 font-medium transition-colors">Trả
                                lời</button>
                        </div>
                    </div>

                    <!-- Replies -->
                    <div v-if="comment.replies && comment.replies.length > 0" class="pl-14 mt-4 space-y-4">
                        <div v-for="reply in comment.replies" :key="reply.id" class="flex gap-4">
                            <img :src="reply.user.avatar" :alt="reply.user.name"
                                class="w-8 h-8 rounded-full object-cover border-2 border-gray-800">
                            <div class="flex-1">
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="font-bold text-gray-200">{{ reply.user.name }}</span>
                                    <span class="text-xs text-gray-500">• {{ reply.createdAt }}</span>
                                </div>
                                <div
                                    class="bg-[#1c1c21] border border-gray-800 rounded-xl p-4 text-gray-300 text-sm mb-2">
                                    {{ reply.content }}
                                </div>
                                <button
                                    class="text-sm text-gray-500 hover:text-gray-300 font-medium transition-colors">Trả
                                    lời</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
export interface CommentUser {
    name: string
    avatar: string
}

export interface Comment {
    id: string
    user: CommentUser
    content: string
    createdAt: string
    replies?: Comment[]
}

const props = withDefaults(defineProps<{
    comments: Comment[]
}>(), {
    comments: () => []
})

const commentContent = ref('')

const totalComments = computed(() => {
    return props.comments.reduce((acc: number, comment: Comment) => {
        return acc + 1 + (comment.replies?.length || 0)
    }, 0)
})
</script>