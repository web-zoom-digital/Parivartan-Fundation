"use client"

import { GalleryHero } from "@/components/sections/gallery/GalleryHero"
import { ActivitySpotlight } from "@/components/sections/gallery/ActivitySpotlight"
import { GalleryStats } from "@/components/sections/gallery/GalleryStats"
import { MasonryGallery } from "@/components/sections/gallery/MasonryGallery"
import { ImpactStoryCards } from "@/components/sections/gallery/ImpactStoryCards"
import { CategorySubGallery } from "@/components/sections/gallery/CategorySubGallery"
import { GalleryCTA } from "@/components/sections/gallery/GalleryCTA"

export function GalleryPageClient() {
  return (
    <div className="min-h-screen bg-[#F6F2E8] flex flex-col font-sans w-full max-w-full overflow-x-clip">
      <main className="flex-1">
        <GalleryHero />
        <ActivitySpotlight />
        <GalleryStats />
        <MasonryGallery />
        <ImpactStoryCards />

        <CategorySubGallery
          category="Food Distribution"
          title="Food Distribution Gallery"
          description="Hot meals served outdoors and indoors — freshly cooked food packets shared with care and dignity."
          bgColor="bg-white"
        />

        <CategorySubGallery
          category="Blanket Distribution"
          title="Winter Blanket Relief"
          description="Providing warm blankets to elderly individuals and families sleeping outdoors in cold weather."
          bgColor="bg-[#F6F2E8]"
        />

        <CategorySubGallery
          category="Tree Plantation"
          title="Tree Plantation Seva"
          description="Planting native saplings and taking care of them to build cleaner, greener local communities."
          bgColor="bg-white"
        />

        <CategorySubGallery
          category="Community Service"
          title="Community Service & Outreach"
          description="Ground activities, volunteer drives, and neighbourhood outreach under the foundation banner."
          bgColor="bg-[#F6F2E8]"
        />

        <GalleryCTA />
      </main>
    </div>
  )
}
