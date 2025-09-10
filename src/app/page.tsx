import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProcessSection from '@/components/ProcessSection'
import FeaturesSection from '@/components/FeaturesSection'
import MeetOurInfluencers from '@/components/MeetOurInfluencers'
import PartnerInGrowth from '@/components/PartnerInGrowth'
import BuiltForBrands from '@/components/BuiltForBrands'
import GetStartedSection from '@/components/GetStartedSection'
import FAQSection from '@/components/FAQSection'
import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProcessSection />
      <FeaturesSection />
      <MeetOurInfluencers />
      <PartnerInGrowth />
      <BuiltForBrands />
      <GetStartedSection />
      <FAQSection />
      <BlogSection />
      <Footer />
    </div>
  )
}