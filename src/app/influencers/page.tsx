import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InfluencersHero from '@/components/InfluencersHero'
import CreatorFeatures from '@/components/CreatorFeatures'

export default function InfluencersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <InfluencersHero />
        <CreatorFeatures />
      </main>
      <Footer />
    </div>
  )
}
