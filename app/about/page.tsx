import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-start max-w-[48rem] mx-auto py-24 text-white">
      <div className='text-4xl'>
        About
      </div>
      <div className="mt-4">
        A product engineer based in Taiwan. I am also an expert in D3.js data visualization and various interactive effects. My programming skills allow me to transform data into vivid and engaging graphics. This ability not only helps people better understand the data but also makes data-driven stories more captivating.
      </div>
      <div className="grid grid-cols-2 gap-8 mt-12">
        <div className="flex flex-col gap-1 bg-gray-main rounded">
          <Link href="https://www.berry-ai.com/" target="_blank" rel="noopener noreferrer" className="h-[180px] overflow-hidden">
            <Image src="/images/about/berry-ai.png" className="rounded" alt="berry-ai" width="370" height="180" />  
          </Link>
          <div className="font-bold text-teal-500">Berry AI</div>
          <div>
            Computer Vision AI Labeling video editor like <a href="https://labelbox.com/">https://labelbox.com/</a>
          </div>
        </div>
        <div className="flex flex-col gap-1 bg-gray-main rounded">
          <Link href="https://www.trevi.cc/" target="_blank" rel="noopener noreferrer" className="h-[180px] overflow-hidden">
            <Image src="/images/about/trevi.png" className="rounded" alt="berry-ai" width="370" height="180" />  
          </Link>
          <div className="font-bold text-teal-500">Trevi</div>
          <div>
            Gaming APP and Streaming Platform
          </div>
        </div>
        <div className="flex flex-col gap-1 bg-gray-main rounded">
          <Link href="https://joyso.io/trade/zh_tw/markets/joy_eth" target="_blank" rel="noopener noreferrer" className="h-[180px] overflow-hidden">
            <Image src="/images/about/joyso.png" className="rounded" alt="berry-ai" width="370" height="180" />  
          </Link>
          <div className="font-bold text-teal-500">Joyso</div>
          <div>
            Decentralized Exchange on ethereum
          </div>
        </div>
        <div className="flex flex-col gap-1 bg-gray-main rounded">
          <Link href="https://udn.com/upf/newmedia/2018_data/rural_medical/index.html" target="_blank" rel="noopener noreferrer" className="h-[180px] overflow-hidden">
            <Image src="/images/about/health.png" className="rounded" alt="berry-ai" width="370" height="180" />  
          </Link>
          <div className="font-bold text-teal-500">UDN</div>
          <div>
            Data Visualization
          </div>
        </div>
      </div>
    </main>
  )
}
