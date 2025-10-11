import ViewMoreBTN from '@/components/ui/ViewMoreBTN'
import SharedCard from './ui/SharedCard'
import { Card } from '@/lib/interface'

async function SharedCardsContainer({
  label,
  fechingFunction,
  path,
}: {
  label: string
  fechingFunction: () => Promise<Card[]>
  path: string
}) {
  const cards = await fechingFunction()

  return (
    <section>
      <div className='px-[10px] mx-auto  mb-[113px] text-right w-full'>
        <h1 className='text-[32px] xl:text-[40px] mx-auto  lg:w-[85%] h-[64px]  font-bold mb-[32px]'>
          {label}
        </h1>

        <div className='flex gap-5 mb-[48px] lg:w-[85%] overflow-x-auto overflow-y-hidden whitespace-nowrap mx-auto px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent'>
          {cards &&
            cards.map((card: Card) => (
              <div key={card.id} className='inline-block flex-shrink-0'>
                <SharedCard
                  image={card.image}
                  title={card.title}
                  day={card.day}
                  month={card.month}
                  location={card.location}
                  price={card.price}
                />
              </div>
            ))}
        </div>

        <ViewMoreBTN path={path} />
      </div>
    </section>
  )
}

export default SharedCardsContainer
