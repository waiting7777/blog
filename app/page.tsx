import { faTwitter, faLinkedin, faTwitch, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBook, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start max-w-[48rem] mx-auto py-24 text-white">
      <div className='text-4xl'>
        Hello,<br/>I&apos;m <span className='text-teal-500'>Waiting7777</span>
      </div>
      <div className='text-white mt-6'>Product Developer / Davavisulization / Blogger</div>
      <div className="mt-6">
        嗨！歡迎來到我的網誌！我是一名前端工程師，同時也是一名專精於 <span className='text-teal-500'>D3.js 資料視覺化</span>和各種互動效果的專家。<br/>我的程式設計技能讓我能夠將數據轉化成生動有趣的圖形，這種能力不僅能夠幫助人們更好地理解數據，還能夠讓數據故事更加引人入勝。
        <br/><br/>
        除了寫程式，我還有一個極具熱情的愛好，那就是玩遊戲。在唸書時，我曾經在魔獸世界競技場台服中脫穎而出，獲得了 #1 的排名，這段經歷讓我深深地愛上了遊戲的競技樂趣。<br/>目前，我對各類自走棋遊戲情有獨鍾，像是爐石戰場、聯盟戰棋等等。這些遊戲不僅考驗我的策略思考能力，還能夠讓我在休閒時充分享受遊戲的樂趣。
        <br/><br/>
        正如我喜歡的那句話:<br/><br/><span className='text-teal-500 text-4xl font-bold'>Play the game, see the world!</span><br/><br/>遊戲能夠讓我們進入不同的世界，體驗各種情節。
        <br/><br/>
        在這個網誌中，我將與大家分享我的程式設計心得、資料視覺化技巧，以及我在遊戲世界中的冒險故事。<br/>無論你是對程式設計、資料視覺化，還是遊戲有興趣，我都希望我的分享能夠啟發你，帶給你新的靈感和觀點。<br/>讓我們一起在這個多元的世界中，共同探索、學習，並享受遊戲帶來的奇妙體驗吧！
      </div>
      <div className='flex mt-16 gap-3'>
        <Link href="/blog" className='flex items-center gap-2 h-9 px-3 py-2 text-sm border border-[#4b5563] bg-[#1f2937] rounded hover:border-white'>
          <FontAwesomeIcon className='w-4' icon={faBook} />
          Blog
        </Link>
        <Link href="mailto:waiting0819@msn.com" target="_blank" className='flex items-center gap-2 h-9 px-3 py-2 text-sm border border-[#4b5563] bg-[#1f2937] rounded hover:border-white'>
          <FontAwesomeIcon className='w-4' icon={faEnvelope} />
          E-mail
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
