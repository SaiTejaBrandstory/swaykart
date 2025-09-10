import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TopCreatorsSection from '@/components/TopCreatorsSection'

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TopCreatorsSection />
      </main>
      <Footer />
    </div>
  )
}