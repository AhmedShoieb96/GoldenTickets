import Image from 'next/image'
import { Card } from '@/lib/interface'
import { getMatchs } from '@/lib/projectData'
import Location from '../../../components/Location'
import { Button } from '@/components/ui/button'
import DetailsCardPhoneScreen from '@/components/DetailsCardPhoneScreen'
async function page({ params }: { params: { id: string } }) {
  const match = await getMatchs().then((res) =>
    res.find((match: Card) => match.id === params.id)
  )

  if (!match) {
    return <p className='p-6 text-red-600'>Match not found 🥲</p>
  }
  return (
    <section>
      <div className='container mx-auto px-4 py-[32px] lg:py-[56px]  text-center '>
        <Image
          className='mx-auto w-[1265px]  h-[300px]  sm:h-[533px] rounded-[40px] shadow-md shadow-primary'
          src={match.image}
          alt={match.title}
          width={1000}
          height={1000}
        />
        <div className='hidden lg:block'>
          <div className='flex justify-center items- flex-row-reverse mt-[48px] '>
            <div className=' text-right flex flex-col  justify-center items-end '>
              <h2 className='text-[36px] font-bold text-[#28305F] mb-[12px]'>
                {match.title}
              </h2>
              <p className='text-[18px] font-medium text-[#000000CC] max-w-[766px] mb-[32px]'>
                {match.description}
              </p>
              <p className='text-[18px] font-medium text-[#D9AC4F]  h-[14px]  flex items-center gap-[12px]  justify-end mb-[32px]'>
                {' '}
                {match.location}
                <Image
                  className='w-[11px] h-[15.4px]'
                  src='/icons/location.svg'
                  alt='location'
                  width={20}
                  height={20}
                />{' '}
              </p>
              <h2 className='text-[18px] font-extrabold text-[#28305F] mb-[7px]'>
                الشروط الأحكام
              </h2>
              <p className='text-[14px] font-medium text-[#00000099] w-[560px] mb-[5px]'>
                بشراء هذه التذكره فانت توافق على جميع الشروط والاحكام والقيود
                الخاصه بالفاعليه التى يضعها المنظم قبل او اثناء الفعاليه وهي{' '}
              </p>
              <p className='text-[12px] font-medium text-[#2F375FCC]  h-[24px]  flex flex-row-reverse items-center gap-[4.74px]  justify-end mb-[31px]'>
                عرض المزيد{' '}
                <Image
                  className='w-[10px] h-[5px] '
                  src='/icons/down.svg'
                  alt='down'
                  width={20}
                  height={20}
                />{' '}
              </p>
              <div className='w-[560px] h-[240px] mb-[80px]'>
                <div className='flex flex-row-reverse justify-between items-center gap-[12px] mb-[14px] '>
                  <h3 className='text-[16px] font-bold text-[#000000CC] '>
                    موقع المباراة
                  </h3>
                  <a
                    className='text-[13px] font-medium text-[#00000080] underline '
                    href=''
                  >
                    انتقل الي الموقع{' '}
                  </a>
                </div>
                <Location />
              </div>
            </div>
            <div>
              <div className='flex flex-col gap-[12px] w-[456px]  border-[#D9AC4F] border-[1px] rounded-[20px] px-[20px]   text-right'>
                <div className='flex flex-row-reverse justify-between items-center gap-[88px] mb-[45px] mt-[22px] '>
                  <p className='flex flex-row-reverse items-center gap-[12px] text-[18px] font-medium text-[#000000B2]'>
                    <Image
                      className='w-[16.57px] h-[17.91px]'
                      src='/icons/calendar.png'
                      alt='phone'
                      width={20}
                      height={20}
                    />
                    {match.dayName} {match.day} {match.month}
                  </p>
                  <p className='flex flex-row-reverse items-center gap-[12px] font-medium text-[#000000B2]'>
                    <Image
                      className='w-[17px] h-[17px]'
                      src='/icons/hour.png'
                      alt='phone'
                      width={20}
                      height={20}
                    />
                    الساعة{match.time}
                  </p>
                </div>
                <p className='text-[16px] font-medium text-[#00000099] '>
                  الأسعار تبدأ من
                </p>
                <p className='text-[22px] font-bold  text-[#000000CC] mb-[32px] '>
                  {match.price} ريال سعودي
                </p>
                <Button className='w-[408px] h-[48px] text-[22px] text-white font-bold rounded[6px] mb-[15px]'>
                  اختار التذاكر
                </Button>
              </div>
              <div className='text-right w-[456px] border border-[#2F375F14] rounded-[14px] py-[16px] px-[9px] mt-[25px] '>
                <p className='flex flex-row-reverse items-start gap-[8px] justify-end text-[12px] font-medium text-[#00000076] w-[417px] h-[38px]'>
                  <Image
                    className='w-[12px] h-[12px] mt-[5px]'
                    src='/images/check.png'
                    alt='phone'
                    width={20}
                    height={20}
                  />
                  نحن هنا لخدمتك! إذا واجهت أي مشكلة في الدفع أو في تفاصيل
                  التذكرة، فريق الدعم متاح على مدار الساعة لمساعدتك
                </p>
                <p className='flex flex-row-reverse items-start gap-[8px] text-[12px] font-medium text-[#00000076] w-[417px] h-[38px]'>
                  <Image
                    className='w-[12px] h-[12px] mt-[5px]'
                    src='/images/check.png'
                    alt='phone'
                    width={20}
                    height={20}
                  />
                  نضمن استرداد الأموال في حال إلغاء الحدث، لتشعر بالراحة في كل
                  خطوة.
                </p>
                <p className='flex flex-row-reverse items-start gap-[8px]  text-[12px] font-medium text-[#00000076] w-[417px] h-[38px]'>
                  <Image
                    className='w-[12px] h-[12px] mt-[5px]'
                    src='/images/check.png'
                    alt='phone'
                    width={20}
                    height={20}
                  />
                  عملية الشراء خالية من المخاطر، وسياسة الإلغاء لدينا تتيح لك
                  خيارات مرنة تضمن لك أفضل تجربة.
                </p>
              </div>
            </div>
          </div>
        </div>
        <DetailsCardPhoneScreen match={match} />
      </div>
    </section>
  )
}

export default page
