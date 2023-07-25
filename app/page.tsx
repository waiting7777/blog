"use client"
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
    
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className='w-[640px] h-[360px]'>
          <video ref={videoRef} id="test" src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4" />
        </div>
      </div>
    </main>
  )
}
