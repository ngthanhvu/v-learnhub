<template>
    <div class="min-h-screen bg-gray-950 text-white">
        <AdminSidebar />

        <div class="md:ml-64 min-h-screen transition-all duration-300">
            <!-- Top Header (Optional, for mobile menu toggle or breadcrumbs) -->
            <header
                class="h-16 border-b border-gray-800 bg-gray-950/50 backdrop-blur-xl sticky top-0 z-40 px-8 flex items-center justify-between">
                <h2 class="font-semibold text-lg">Dashboard</h2>
                <div class="flex items-center gap-4">
                    <!-- Add header items here if needed -->
                </div>
            </header>

            <main class="p-8">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import AdminSidebar from '~/components/admin/AdminSidebar.vue'
</script>