"use client"

import Image from "next/image"

type Props = {
  images: { src: string }[]
  currentIndex: number
  setCurrentIndex: (i: number) => void
  onClose: () => void
}

export default function Lightbox({
  images,
  currentIndex,
  setCurrentIndex,
  onClose,
}: Props) {
  const prev = () =>
    setCurrentIndex(
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    )

  const next = () =>
    setCurrentIndex(
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    )

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-38 right-10 text-white text-3xl cursor-pointer"
      >
        ✕
      </button>

      {/* Prev */}
      <button
        onClick={prev}
        className="absolute left-6 text-white text-4xl cursor-pointer"
      >
        ‹
      </button>

      {/* Image */}
      <div className="max-w-4xl w-full px-4">
        <Image
          src={images[currentIndex].src}
          alt=""
          width={600}
          height={400}
          className="rounded-xl mx-auto"
        />
      </div>

      {/* Next */}
      <button
        onClick={next}
        className="absolute right-6 text-white text-4xl cursor-pointer"
      >
        ›
      </button>
    </div>
  )
}