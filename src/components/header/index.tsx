import Link from 'next/link'
import { Routes } from '@/constants/enums'
import Image from 'next/image'
import NavBar from './NavBar'

import { Button } from '../ui/button'
function Header() {
  return (
    <header className='w-full  shadow-sm  relative top-0 left-0 z-50 bg-white'>
      <div className=' container w-full px-2 md:px lg:px-16 xl:px-[32px] py-[17px] h-[84px] bg-white flex xl:justify-center  items-center '>
        <Button className='lg:hidden bg-transparent cursor-pointer w-10 h-10   '>
          <Image
            src='/icons/down.svg'
            className='ml-2  '
            alt='worldicon'
            width={20}
            height={20}
          />

          <Image
            src='/icons/person.svg'
            className='border border-white outline-primary outline-1  bg-[radial-gradient(50%_50%_at_50%_50%,#31408D_0%,#2F375F_100%)] rounded-full p-2'
            alt='worldicon'
            width={60}
            height={60}
          />
        </Button>
        <div className='flex items-center  gap-[16px] '>
          <Button className='hidden lg:flex cursor-pointer bg-[radial-gradient(50%_50%_at_50%_50%,#31408D_0%,#2F375F_100%)]  w-37 h-13     '>
            <Image
              src='/icons/login.svg'
              alt='worldicon'
              width={20}
              height={20}
            />
            <span className='text-white'>تسجيل دخول </span>
          </Button>

          <Button className=' hidden lg:flex cursor-pointer bg-popover  w-37 h-13 border border-primary '>
            <Image
              src='/icons/vector.svg'
              alt='worldicon'
              width={20}
              height={20}
            />
            <span className='text-primary'>بيع تذكرتك </span>
          </Button>
          <div className='flex items-center ml-[8px] mr-[61px] gap-2 '>
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
        </div>

        <NavBar />
        <Link
          href={Routes.ROOT}
          className='text-2xl ml-[31px]   absolute right-20 top-4 xl:static font-bold'
        >
          <Image
            src='/images/الشعار.jpg'
            alt='Golden Tickets'
            width={143}
            height={40}
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
