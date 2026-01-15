"use client"

import { useState } from "react"
import Image from "next/image"
import { galleryData } from "./gallery";
import Lightbox from "./Lightbox";
const categories = [
  "All",
  "Box Cricket",
  "Football",
  "Badminton",
  "Volleyball",
  "Kabaddi",
]

export default function GalleryTabs() {
  const [activeTab, setActiveTab] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages =
    activeTab === "All"
      ? galleryData
      : galleryData.filter(item => item.category === activeTab)

  return (
    <div className="mx-auto">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition
              ${
                activeTab === tab
                  ? "bg-[#98C83C] text-[#ffffff] text-[16px] font-bold border border-[#98C83C] py-2.75 rounded-[40px] cursor-pointer"
                  : "bg-[#FFFFFF80] text-black text-[16px] font-bold border border-[#ffffff] py-2.75 rounded-[40px] cursor-pointer hover:bg-[#98C83C] hover:border-[#98C83C] hover:text-[#ffffff]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(index)}
            className="cursor-pointer overflow-hidden rounded-xl"
          >
            <Image
              src={item.src}
              alt=""
              width={600}
              height={400}
              className="w-full h-full object-cover hover:scale-105 transition duration-500 ease-in-out cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          setCurrentIndex={setLightboxIndex}
        />
      )}
    </div>
  )
}