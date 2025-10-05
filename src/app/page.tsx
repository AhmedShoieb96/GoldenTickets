import AddEvent from '../components/AddEvent'
import Hero from '../components/Hero'
import Offers from '../components/Offers/Offers'
import SharedCardsContainer from '../components/SharedCardsContainer'
import { getLocalMatchs } from '@/lib/projectData'
import { getParties } from '@/lib/projectData'
import { getGlobalMatchs } from '@/lib/projectData'
import Ticket from '../components/Ticket/Ticket'
import NeedSupport from '../components/NeedSupport/NeedSupport'
import Partenars from '../components/Partenars'
import {Routes }from '@/constants/enums'
export default function Home() {
  return (
    <main>
      <Hero />
      <Offers />
      <AddEvent />
      <SharedCardsContainer
        label='أبرز الفعاليات'
        fechingFunction={getParties}
        path={Routes.EVENTS}
      />

      <SharedCardsContainer
        label='المباريات المحلية'
        fechingFunction={getLocalMatchs}
        path={Routes.MATCHS}
      />
      <SharedCardsContainer
        label='المباريات العالمية'
        fechingFunction={getGlobalMatchs}
        path={Routes.MATCHS}
      />
      <Ticket />
      <NeedSupport />
      <Partenars />
    </main>
  )
}
