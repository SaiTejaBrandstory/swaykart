import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TopCreatorsSection from '@/components/TopCreatorsSection'

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <TopCreatorsSection />
      </main>
      <Footer />
    </div>
  )
}