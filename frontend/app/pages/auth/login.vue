<template>
    <div>
        <div class="mb-8 text-center">
            <h1 class="text-2xl font-bold text-white mb-2">Chào mừng trở lại!</h1>
            <p class="text-gray-400">Đăng nhập để tiếp tục việc học của bạn</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-5">
            <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input v-model="form.email" type="email" placeholder="name@example.com"
                    class="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all">
            </div>

            <div>
                <div class="flex items-center justify-between mb-2">
                    <label class="block text-sm font-medium text-gray-300">Mật khẩu</label>
                    <a href="#" class="text-sm text-purple-400 hover:text-purple-300 transition-colors">Quên mật
                        khẩu?</a>
                </div>
                <input v-model="form.password" type="password" placeholder="••••••••"
                    class="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all">
            </div>

            <button type="submit"
                class="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-purple-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                Đăng nhập
            </button>
        </form>

        <div class="mt-6 pt-6 border-t border-gray-800">
            <div class="text-center text-gray-400 text-sm">
                Chưa có tài khoản?
                <NuxtLink to="/auth/register"
                    class="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                    Đăng ký ngay
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'auth'
})

const form = reactive({
    email: '',
    password: ''
})

const handleLogin = () => {
    console.log('Login with:', form)
}
</script>