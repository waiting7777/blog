'use client';

import Link from 'next/link';
import clsx from 'clsx'
import { useSelectedLayoutSegment } from 'next/navigation';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import Icons from './icons';

type Item = {
  name: string,
  slug: string
}

const naveList: Item[] = [{
  name: 'Home',
  slug: '/'
}, {
  name: 'About',
  slug: 'about'
}, {
  name: 'Posts',
  slug: 'posts'
}]

export function Sidebar() {
  
  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800 p-2">
      <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
        >
          <h3 className="font-semibold tracking-wide text-white">
            Waiting7777
          </h3>
        </Link>
      </div>
      <div className="flex flex-col gap-0.5">
        {naveList.map(item => (
          <NavItem item={item} key={item.name} />
        ))}
      </div>
    </div>
  )
}

function NavItem({ item }: { item: Item}) {
  const segment = useSelectedLayoutSegment() ?? '/'
  const isActive = item.slug === segment;
  const Icon = item.name

  return (
    <Link
      href={item.slug}
      className={clsx(
        'w-full h-9 flex items-center p-2  gap-2 cursor-pointer rounded-md text-sm font-medium text-white',
        {
          'hover:bg-white hover:bg-opacity-10': !isActive,
          'bg-white bg-opacity-10': isActive,
        },
      )}
    >
      <Icons name={item.name} /> {item.name}
    </Link>
  )
}