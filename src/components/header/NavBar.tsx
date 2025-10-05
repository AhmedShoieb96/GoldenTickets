'use client'
import Link from 'next/link'
import { XIcon } from 'lucide-react'
import { useState } from 'react'
import { Routes } from '@/constants/enums'
import { Button } from '../ui/button'
import Image from 'next/image'
function NavBar() {
  const links = [
    { id: crypto.randomUUID(), href: Routes.EVENTS, label: 'الفعاليات' },
    { id: crypto.randomUUID(), href: Routes.PARTIES, label: 'حفلات الرياض' },
    { id: crypto.randomUUID(), href: Routes.SALEAGUE, label: 'الدوري السعودي' },
    {
      id: crypto.randomUUID(),
      href: Routes.WORLDLEAGUES,
      label: 'الدوريات العالميه',
    },
    {
      id: crypto.randomUUID(),
      href: Routes.WORLDLEVENTS,
      label: 'الفعاليات العالميه',
    },
    {
      id: crypto.randomUUID(),
      href: Routes.GOLDENBISNESS,
      label: 'جولدن للاعمال (الشركات )',
    },
  ]
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav>
      <Button
        variant='secondary'
        size='sm'
        className='xl:hidden hover:bg-popover absolute top-6 right-4 bg-white'
        onClick={() => setOpenMenu(true)}
      >
        {' '}
        <Image
          className='!w-6 !h-6'
          src='/icons/menu.png'
          alt='worldicon'
          width={20}
          height={20}
        />
      </Button>
      <ul
        className={`fixed xl:static ${
          openMenu ? 'left-0 z-50 flex  ' : '-left-full'
        } top-0 px-10 py-20 xl:p-0 bg-white xl:bg-transparent transition-all duration-200 h-full xl:h-auto flex flex-col xl:flex-row-reverse w-full xl:w-auto  items-end xl:items-center gap-4`}
      >
        <div
          className={`${
            openMenu
              ? 'flex  items-center fixed bottom-5 left-5  gap-4'
              : 'hidden'
          }`}
        >
          <span className=' text-accent'>EN</span>
          <span>
            <Image
              src='/images/vector.jpg'
              alt='worldicon'
              width={20}
              height={20}
            />
          </span>
          <span className=' text-primary'>|</span>
          <span className='text-accent'>دولاد</span>
        </div>
        <Button
          variant='secondary'
          size='sm'
          className='absolute top-10 right-10 hover:bg-popover  xl:hidden bg-white'
          onClick={() => setOpenMenu(false)}
        >
          <XIcon className='!w-6 !h-6 ' />
        </Button>

        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={`/${link.href}`}
              className={
                link.href === `${Routes.EVENTS}`
                  ? ' text-lg font-bold font text-secondary  border-b-primary border-b-2 py-2  hover:text-primary'
                  : 'text-sm text-secondary  font-medium  hover:text-primary'
              }
            >
              {' '}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
