import { Button } from '@/components/ui/button'
import Image from 'next/image'

function Hero() {
  return (
    <section>
      <div className='container w-full !mb-[98px] mx-auto  lg:h-[540px] px-[10px] '>
        <div className='relative mt-[58px]    lg:w-[85%] h-[312px] lg:h-[540px] mx-auto rounded-[30px] '>
          <div className='absolute  w-full h-full z-10 bg-[linear-gradient(180deg,rgba(97,114,197,0.24)_0%,rgba(47,55,95,0.6)_39.64%)] rounded-[30px] '></div>
          <Image
            src='/images/hero.png'
            alt='hero'
            fill
            className='object-cover  rounded-[30px]'
            priority
          ></Image>
          <div className='absolute z-20 top-1/2 -translate-y-1/2  w-full text-center text-white px-4 lg:px-0 '>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl  mb-4  font-bold '>
              قولدن تيكت وجهتك لشراء تذاكر الحدث المفضل لديك
            </h2>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl   font-bold mb-2'>
              نوفر لكم أفضل طريقة لحجز التذاكر بسهولة وسرعة
            </p>
            <div className='flex justify-center items-center gap-2 flex-wrap-reverse mt-6 lg:mt-10 '>
              <Button className='h-[56px] w-[121.19px] text-[24px] text-center  font-bold  '>
                بحث
              </Button>
              <div className='flex justify-around px-1.5 align-center bg-white rounded-xl'>
                <input
                  type='text'
                  className='h-[56px] mr-1.5  w-full sm:w-[400px] md:w-[500px] lg:w-[570px] text-right 
                           text-[14px]  text-[#000000] focus:outline-none placeholder:text-[14px] placeholder:text-[#00000066]  '
                  placeholder='...ابحث عن الفعالية التي ترغب بحضورها'
                ></input>
                <Image
                  src='/icons/search.svg'
                  alt='search'
                  width={20}
                  height={20}
                  className=' '
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
