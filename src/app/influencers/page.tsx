import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InfluencersHero from '@/components/InfluencersHero'
import CreatorFeatures from '@/components/CreatorFeatures'

export default function InfluencersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <InfluencersHero />
        <CreatorFeatures />
      </main>
      <Footer />
    </div>
  )
}
