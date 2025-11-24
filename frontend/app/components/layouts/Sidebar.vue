<template>
    <aside class="hidden md:block fixed left-0 top-0 h-screen w-64 bg-gray-900 border-r border-gray-800 z-50">
        <div class="flex flex-col h-full">
            <div class="p-6">
                <div class="flex items-center gap-3">
                    <div
                        class="w-10 h-10 bg-linear-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-xl">Ξ</span>
                    </div>
                    <span class="text-white font-semibold text-xl">EvonHub</span>
                </div>
            </div>

            <nav class="flex-1 px-4 space-y-1">
                <NuxtLink to="/"
                    class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                    active-class="bg-gray-800 text-white">
                    <UIcon name="i-heroicons-home" class="w-5 h-5" />
                    <span>Dashboard</span>
                </NuxtLink>

                <NuxtLink to="/explore"
                    class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                    active-class="bg-gray-800 text-white">
                    <UIcon name="i-heroicons-academic-cap" class="w-5 h-5" />
                    <span>Khóa học</span>
                </NuxtLink>

                <NuxtLink to="/study-area"
                    class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                    active-class="bg-gray-800 text-white">
                    <UIcon name="i-heroicons-book-open" class="w-5 h-5" />
                    <span>Khu vực học tập</span>
                </NuxtLink>

                <NuxtLink to="/discounts"
                    class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors group"
                    active-class="bg-gray-800 text-white">
                    <UIcon name="i-heroicons-gift" class="w-5 h-5" />
                    <span>Săn mã giảm giá</span>
                    <UBadge color="red" variant="solid" size="xs" class="ml-auto">Hot</UBadge>
                </NuxtLink>

                <NuxtLink to="/profile"
                    class="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                    active-class="bg-gray-800 text-white">
                    <UIcon name="i-heroicons-user-circle" class="w-5 h-5" />
                    <span>Profile</span>
                </NuxtLink>
            </nav>

            <div class="p-3">
                <UCard class="mt-auto relative" :ui="{
                    wrapper: 'rounded-xl'
                }">
                    <div
                        class="size-8 p-2 flex items-center justify-center rounded-full bg-primary/20 text-primary absolute right-2 top-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <h3 class="font-bold text-base lg:text-lg">Membership!</h3>
                    <div class="text-sm">
                        Sở hữu toàn bộ khóa học 1 cách nhanh nhất.
                    </div>
                    <a class="mt-2 flex items-center justify-between gap-2 p-2 text-sm rounded-xl bg-primary font-bold"
                        href="/membership">
                        <span class="text-gray-900">Khám phá ngay</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 text-gray-900">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg>
                    </a>
                </UCard>
            </div>
        </div>
    </aside>
</template>
