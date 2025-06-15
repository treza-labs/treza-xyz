"use client";

import { useState, useRef } from "react";
import type { StaticImageData } from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";

interface ModalVideoProps {
  thumb: StaticImageData;
  thumb2: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({
  thumb,
  thumb2,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbnailRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative">
      {/* Secondary illustration */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <Image
          className="md:max-w-none"
          src={SecondaryIllustration}
          width={1165}
          height={1012}
          alt="Secondary illustration"
        />
      </div>

      {/* Video thumbnail */}
      <button
        className="group relative flex items-center justify-center rounded-2xl focus:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 md:cursor-pointer"
        style={{ width: thumbWidth, height: thumbHeight }}
        onClick={() => {
          if (window.innerWidth >= 768) { // Only open modal on desktop
            setModalOpen(true);
          }
        }}
        aria-label="Watch the video"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        {/* Thumbnail images and video */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            alt={thumbAlt}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <Image
            src={thumb2}
            width={thumbWidth}
            height={thumbHeight}
            alt={thumbAlt}
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
          />
          <video
            ref={thumbnailRef}
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 grayscale hidden md:block"
            width={thumbWidth}
            height={thumbHeight}
            muted
            loop
            playsInline
            autoPlay
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
        {/* Play icon and label - only show on desktop */}
        <span className="absolute z-10 flex items-center gap-3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex">
          {/* Overlay background */}
          <span className="absolute inset-0 rounded-full bg-black/60" />
          {/* Icon and text above overlay */}
          <span className="relative flex items-center gap-3 px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
            >
              <path
                fill="url(#pla)"
                fillRule="evenodd"
                d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm3.5-10-5-3.5v7l5-3.5Z"
                clipRule="evenodd"
              />
              <defs>
                <linearGradient
                  id="pla"
                  x1={10}
                  x2={10}
                  y1={0}
                  y2={20}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6366F1" />
                  <stop offset={1} stopColor="#6366F1" stopOpacity=".72" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-sm font-medium leading-tight text-white">
              Watch Demo
              <span className="text-gray-200"> - </span>
              3:47
            </span>
          </span>
        </span>
      </button>
      {/* End: Video thumbnail */}

      <Dialog
        initialFocus={videoRef}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 z-99999 bg-black/70 transition-opacity duration-300 ease-out data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-99999 flex px-4 py-6 sm:px-6">
          <div className="mx-auto flex h-full max-w-6xl items-center">
            <DialogPanel
              transition
              className="aspect-video max-h-full w-full overflow-hidden rounded-2xl bg-black shadow-2xl duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
            >
              <video
                ref={videoRef}
                width={videoWidth}
                height={videoHeight}
                loop
                controls
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
