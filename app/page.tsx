import { faTwitter, faLinkedin, faTwitch, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start px-36 py-24 text-white">
      <div className='text-4xl'>
        Hello,<br/>I&apos;m <span className='text-teal-500'>Waiting7777</span>
      </div>
      <div className='text-white mt-6'>Fullstack Developer / Davavisulization / Blogger</div>
      <div className="mt-6">
        我是個工程師，擅長<b className="text-teal-500">資料視覺化</b>、<b className="text-teal-500">網站開發</b>，偶爾寫寫 Blog 整理心得。
        <br/><br/>
        很喜歡鑽研一些最新的趨勢，常常在拓荒中探索自己的興趣，並且把自己的經驗分享給大家。
        <br/><br/>
        過去也曾在媒體玩過很多資料視覺化，做過多種圖表以及豐富的活動頁面。
        <br/><br/>
        除了寫程式外，最大的興趣在於玩遊戲，唸書時曾經拿過魔獸世界競技場台服 #1。目前喜歡各類&quot;自走棋&quot;遊戲，爐石戰場、聯盟戰棋等等。還是個 MTG 的骨灰玩家，雖然因為疫情很少出國打牌，但還是喜歡那句<br/><br/><b className="text-teal-500 text-4xl"><i>Play the game, see the world!</i></b>
      </div>
      <div className='flex mt-16 gap-3'>
        <Link href="/blog" className='flex items-center gap-2 h-9 px-3 py-2 text-sm border border-[#4b5563] bg-[#1f2937] rounded hover:border-white'>
          <FontAwesomeIcon className='w-4' icon={faBook} />
          Blog
        </Link>
        <Link href="https://github.com/waiting7777" target="_blank" className='flex items-center gap-2 h-9 px-3 py-2 text-sm border border-[#4b5563] bg-[#1f2937] rounded hover:border-white'>
          <FontAwesomeIcon className='w-4' icon={faGithub} />
          Github
        </Link>
        <Link href="https://www.linkedin.com/in/weiting-cheng-34a697127/" target="_blank" className='flex items-center gap-2 h-9 px-3 py-2 text-sm border border-[#4b5563] bg-[#1f2937] rounded hover:border-white'>
          <FontAwesomeIcon className='w-4' icon={faLinkedin} />
          Linkedin
        </Link>
        <Link href="https://twitter.com/waiting7777" target="_blank" className='flex items-center gap-2 h-9 px-3 py-2 text-sm border border-[#4b5563] bg-[#1f2937] rounded hover:border-white'>
          <FontAwesomeIcon className='w-4' icon={faTwitter} />
          Twitter
        </Link>
        <Link href="https://www.twitch.tv/waiting7777" target="_blank" className='flex items-center gap-2 h-9 px-3 py-2 text-sm border border-[#4b5563] bg-[#1f2937] rounded hover:border-white'>
          <FontAwesomeIcon className='w-4' icon={faTwitch} />
          Twitch
        </Link>
      </div>
    </main>
  )
}
