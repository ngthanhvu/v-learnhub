<template>
    <div>
        <div class="mb-8 text-center">
            <h1 class="text-2xl font-bold text-white mb-2">Tạo tài khoản mới</h1>
            <p class="text-gray-400">Bắt đầu hành trình học tập của bạn ngay hôm nay</p>
        </div>

        <form @submit.prevent="handleRegister" class="space-y-5">
            <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Họ và tên</label>
                <input v-model="form.name" type="text" placeholder="Nguyễn Văn A"
                    class="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input v-model="form.email" type="email" placeholder="name@example.com"
                    class="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Mật khẩu</label>
                <input v-model="form.password" type="password" placeholder="••••••••"
                    class="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Xác nhận mật khẩu</label>
                <input v-model="form.confirmPassword" type="password" placeholder="••••••••"
                    class="w-full bg-gray-950/50 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all">
            </div>

            <button type="submit"
                class="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-purple-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                Đăng ký
            </button>
        </form>

        <div class="mt-6 pt-6 border-t border-gray-800">
            <div class="text-center text-gray-400 text-sm">
                Đã có tài khoản?
                <NuxtLink to="/auth/login" class="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                    Đăng nhập
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
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
})

const handleRegister = () => {
    console.log('Register with:', form)
}
</script>