import { Button } from '@/components/ui/button'
import SharedCard from '../../components/ui/SharedCard'
import { getMatchs } from '../../lib/projectData'
import Image from 'next/image'
import { Card } from '../../lib/interface'
import Link from 'next/link'
async function page() {
  const cards = await getMatchs()
  return (
    <section>
      <div className='container  mx-auto px-4 py-[32px] lg:py-[56px]  text-center bg-[#FFFFFF]'>
        <h1 className='text-xl  sm:text-2xl md:text-3xl lg:text-4xl mx-auto  lg:w-[85%]  font-bold mb-[28px]'>
          المباريات
        </h1>
        <div className=' hidden lg:flex justify-center gap-[16px] items-center mb-[68]'>
          <Button className='w-[121px] h-[56px] bg-[#28305F] text-[20px] text-[#FFFFFF] font-[800] rounded-[12px]'>
            بحث
          </Button>

          <div className='flex flex-row-reverse  w-[450px] h-[56px] justify-around px-[10px] bg-[#FFFFFF] items-center rounded-xl shadow-md'>
            <a href=''>
              {' '}
              <Image
                src='/icons/search.svg'
                alt='search'
                width={20}
                height={20}
                className=' '
              />
            </a>
            <input
              type='text'
              placeholder='...ابحث عن الفعالية '
              className=' rounded-2xl- text-right ml-3 w-[450px] h-[56px] text-[14px]  text-[#000000]
            focus:outline-none placeholder:text-[14px] placeholder:text-[#00000066] '
            />
          </div>
        </div>

        <div className='flex justify-center flex-wrap items-center gap-5   lg:w-[85%]   mx-auto'>
          {cards &&
            cards.map((card: Card, index: number) => (
              <Link key={index} href={`/matchs/${card.id}`}>
                <SharedCard
                  image={card.image}
                  title={card.title}
                  day={card.day}
                  month={card.month}
                  location={card.location}
                  price={card.price}
                />
              </Link>
            ))}
        </div>
      </div>
    </section>
  )
}

export default page
