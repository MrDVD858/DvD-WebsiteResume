import ScrollReveal from './ScrollReveal'
import FeatureCard from './FeatureCard'

const features = [
  {
    icon: '🔭',
    title: 'Investing',
    description:
      'We identify and back visionary founders early, providing capital and conviction to shape category-defining companies.',
  },
  {
    icon: '⚙️',
    title: 'Building',
    description:
      'We craft ventures from the ground up — turning insight into product, product into company, company into impact.',
  },
  {
    icon: '🧭',
    title: 'Advisory',
    description:
      'Strategic guidance for founders navigating critical inflection points — fundraising, growth, and market positioning.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="bg-black px-6 md:px-12 lg:px-16 py-32">
      {/* Section label */}
      <ScrollReveal>
        <p className="text-xs tracking-widest uppercase text-gray-500 mb-3">
          What we do
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-16"
            style={{ letterSpacing: '-0.03em' }}>
          Built for what<br />comes next.
        </h2>
      </ScrollReveal>

      {/* Cards — each one reveals with a staggered delay */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <ScrollReveal key={feature.title} delay={index * 150}>
            <FeatureCard {...feature} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
