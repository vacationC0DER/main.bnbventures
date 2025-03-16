import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import Benefits from "@/components/ui/Benefits"
import TeamGallery from "@/components/ui/TeamGallery"
import { cx } from "@/lib/utils"
import Balancer from "react-wrap-balancer"

export default function About() {
  return (
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <section
        aria-labelledby="about-overview"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>about b&b ventures</Badge>
        <h1
          id="about-overview"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          <Balancer>
            We are Vacation Rental Professionals, turning data into actionable insights
          </Balancer>
        </h1>
        <p className="mt-6 max-w-5xl text-lg text-gray-700 dark:text-gray-400">
          Data Analytics and innovative technology are transforming the vacation rental industry, and it is
          happening now. <br /> B&B Ventures is at the core of this revolution.
        </p>
      </section>
      <TeamGallery />
      <Benefits />
      <section aria-labelledby="vision-title" className="mx-auto mt-40">
        <h2
          id="vision-title"
          className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent md:text-5xl dark:from-gray-50 dark:to-gray-300"
        >
          Our Vision
        </h2>
        <div className="mt-6 max-w-prose space-y-4 text-gray-600 dark:text-gray-400">
          <p className="text-lg leading-8">
            We envision a world where vacation rental management is no longer a complex
            challenge but a powerful advantage. By integrating cutting-edge analytics
            into business operations, we aim to transform raw data into strategic
            assets, empowering rental businesses to innovate faster and operate more
            efficiently.
          </p>
          <p className="text-lg leading-8">
            We believe in removing the barriers of operational complexity and
            scalability, enabling property managers to focus on guest experiences and growth
            rather than maintenance and management. Our goal is to equip every
            vacation rental business with the tools they need to harness the full potential
            of their data, driving revenue growth and excellence in every guest interaction.
          </p>
          <p
            className={cx(
              "w-fit rotate-3 font-handwriting text-3xl text-indigo-600 dark:text-indigo-400",
            )}
          >
            – The B&B Ventures Team
          </p>
        </div>
        <Button className="mt-32 h-10 w-full shadow-xl shadow-indigo-500/20">
          Request a Custom Analysis
        </Button>
      </section>
    </div>
  )
}