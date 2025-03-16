import Balancer from "react-wrap-balancer"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main
      className="mx-auto mt-36 max-w-3xl animate-slide-up-fade px-3"
      style={{
        animationDuration: "600ms",
        animationFillMode: "backwards",
      }}
    >
      <div className="text-center">
        <h1 className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl dark:from-gray-50 dark:to-gray-300">
          Changelog
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          <Balancer>
            Keep yourself informed about the most recent additions and
            improvements we&rsquo;ve made to B&B Ventures solutions.
          </Balancer>
        </p>
      </div>
      <div className="mt-10 rounded-xl bg-gray-50 p-6 shadow-sm dark:bg-gray-800/50">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Upcoming Releases</h2>
        
        <div className="mt-4 border-l-2 border-indigo-500 pl-4">
          <h3 className="font-medium text-gray-900 dark:text-gray-100">Field Application Archive</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Currently in beta testing and launching in April 2025 across App Store, Google Play, and as a web application.
          </p>
        </div>

        <div className="mt-6 border-l-2 border-indigo-500 pl-4">
          <h3 className="font-medium text-gray-900 dark:text-gray-100">Business Operating System</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Set to launch in Fall 2025. Built on OKR management principles and systems to streamline vacation rental operations.
          </p>
        </div>
      </div>
      <div className="mt-10">{children}</div>
    </main>
  )
}