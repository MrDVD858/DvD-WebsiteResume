interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

// A single feature card with icon, title, and description.
// Styling only — animation is handled by ScrollReveal wrapper in FeaturesSection.
export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  )
}
