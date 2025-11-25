<template>
    <div class="min-h-screen bg-gray-950 flex items-center justify-center p-4 relative overflow-hidden">
        <!-- Background Effects -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px]">
            </div>
            <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]">
            </div>
        </div>

        <div class="w-full max-w-[500px] mx-auto relative z-10">
            <!-- Logo -->
            <div class="flex justify-center mb-8">
                <NuxtLink to="/" class="flex items-center gap-3 group">
                    <div
                        class="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
                        <span class="text-white font-bold text-2xl">V</span>
                    </div>
                    <span class="text-white font-bold text-2xl tracking-tight">VonHub</span>
                </NuxtLink>
            </div>

            <!-- Card -->
            <div class="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-xl">
                <slot />
            </div>

            <!-- Footer -->
            <div class="mt-8 text-center">
                <p class="text-gray-500 text-sm">
                    &copy; {{ new Date().getFullYear() }} VonHub. All rights reserved.
                </p>
            </div>
        </div>
    </div>
</template>
