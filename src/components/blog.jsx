import React from 'react'

function Blog() {
    return (
        <div class="p-4">
            <div class="max-w-6xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
                <div class="max-w-md mx-auto">
                    <h2 class="text-3xl font-bold text-slate-900 text-center !leading-tight mb-16">Stay updated with the latest blog posts.</h2>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    <div class="bg-white overflow-hidden">
                        <div class="bg-gray-50 aspect-[22/13]">
                            <img src="https://readymadeui.com/images/food.webp" alt="Blog Post 1" class="w-full h-full object-cover" />
                        </div>
                        <div class="px-2 mt-6">
                            <h3 class="text-lg font-semibold text-slate-900 mb-3">10 Pasta Recipes You Must Try</h3>
                            <p class="text-slate-600 text-[15px] leading-relaxed line-clamp-2">Discover delicious and easy-to-make pasta recipes perfect for any occasion, from weeknight dinners to family gatherings.</p>
                            <p class="text-slate-900 text-sm font-semibold mt-3">08 April 2024</p>
                            <a href="javascript:void(0);" class="mt-6 inline-block px-4 py-1.5 tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium">Read More</a>
                        </div>
                    </div>

                    <div class="bg-white overflow-hidden">
                        <div class="bg-gray-50 aspect-[22/13]">
                            <img src="https://readymadeui.com/images/food11.webp" alt="Blog Post 2" class="w-full h-full object-cover" />
                        </div>
                        <div class="px-2 mt-6">
                            <h3 class="text-lg font-semibold text-slate-900 mb-3">Healthy Eating Made Simple</h3>
                            <p class="text-slate-600 text-[15px] leading-relaxed line-clamp-2">Learn how to build balanced meals with fresh ingredients that fuel your day and support a healthy lifestyle.</p>
                            <p class="text-slate-900 text-sm font-semibold mt-3">28 March 2024</p>
                            <a href="javascript:void(0);" class="mt-6 inline-block px-4 py-1.5 tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium">Read More</a>
                        </div>
                    </div>

                    <div class="bg-white overflow-hidden">
                        <div class="bg-gray-50 aspect-[22/13]">
                            <img src="https://readymadeui.com/images/food22.webp" alt="Blog Post 3" class="w-full h-full object-cover" />
                        </div>
                        <div class="px-2 mt-6">
                            <h3 class="text-lg font-semibold text-slate-900 mb-3">Futuristic Food Tech Trends</h3>
                            <p class="text-slate-600 text-[15px] leading-relaxed line-clamp-2">Dive into the innovations reshaping how we eat — from lab-grown meat to AI-assisted cooking.</p>
                            <p class="text-slate-900 text-sm font-semibold mt-3">15 March 2024</p>
                            <a href="javascript:void(0);" class="mt-6 inline-block px-4 py-1.5 tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium">Read More</a>
                        </div>
                    </div>

                    <div class="bg-white overflow-hidden">
                        <div class="bg-gray-50 aspect-[22/13]">
                            <img src="https://readymadeui.com/images/food33.webp" alt="Blog Post 4" class="w-full h-full object-cover" />
                        </div>
                        <div class="px-2 mt-6">
                            <h3 class="text-lg font-semibold text-slate-900 mb-3">Fast Food Favorites Make at Home</h3>
                            <p class="text-slate-600 text-[15px] leading-relaxed line-clamp-2">Recreate your favorite fast food dishes in your kitchen with these fun and simple recipes.</p>
                            <p class="text-slate-900 text-sm font-semibold mt-3">05 March 2024</p>
                            <a href="javascript:void(0);" class="mt-6 inline-block px-4 py-1.5 tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium">Read More</a>
                        </div>
                    </div>

                    <div class="bg-white overflow-hidden">
                        <div class="bg-gray-50 aspect-[22/13]">
                            <img src="https://readymadeui.com/images/food44.webp" alt="Blog Post 5" class="w-full h-full object-cover" />
                        </div>
                        <div class="px-2 mt-6">
                            <h3 class="text-lg font-semibold text-slate-900 mb-3">Bowl Meals for Busy Days</h3>
                            <p class="text-slate-600 text-[15px] leading-relaxed line-clamp-2">Try these nutrient-packed bowl meals that are quick to prep and easy to customize to your taste.</p>
                            <p class="text-slate-900 text-sm font-semibold mt-3">26 February 2024</p>
                            <a href="javascript:void(0);" class="mt-6 inline-block px-4 py-1.5 tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium">Read More</a>
                        </div>
                    </div>

                    <div class="bg-white overflow-hidden">
                        <div class="bg-gray-50 aspect-[22/13]">
                            <img src="https://readymadeui.com/images/food55.webp" alt="Blog Post 6" class="w-full h-full object-cover" />
                        </div>
                        <div class="px-2 mt-6">
                            <h3 class="text-lg font-semibold text-slate-900 mb-3">Desserts That Spark Joy</h3>
                            <p class="text-slate-600 text-[15px] leading-relaxed line-clamp-2">Treat yourself with playful and colorful dessert ideas that are just as fun to make as they are to eat.</p>
                            <p class="text-slate-900 text-sm font-semibold mt-3">12 February 2024</p>
                            <a href="javascript:void(0);" class="mt-6 inline-block px-4 py-1.5 tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog