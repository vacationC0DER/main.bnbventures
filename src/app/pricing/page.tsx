"use client"
import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import { Label } from "@/components/Label"
import { Switch } from "@/components/Switch"
import { Tooltip } from "@/components/Tooltip"
import { ArrowAnimated } from "@/components/ui/ArrowAnimated"
import { Faqs } from "@/components/ui/Faqs"
import Testimonial from "@/components/ui/Testimonial"
import { cx } from "@/lib/utils"
import {
  RiCheckLine,
  RiCloudLine,
  RiInformationLine,
  RiSubtractLine,
  RiUserLine,
  RiHomeSmileLine,
} from "@remixicon/react"
import Link from "next/link"
import React, { Fragment } from "react"

type FixedPrice = string

interface VariablePrice {
  monthly: string
  annually: string
}

interface Plan {
  name: string
  price: FixedPrice | VariablePrice
  description: string
  capacity: string[]
  features: string[]
  isStarter: boolean
  isRecommended: boolean
  buttonText: string
  buttonLink: string
}

const plans: Plan[] = [
  {
    name: "Essentials",
    price: "$0",
    description:
      "For individual owners and small operators managing a few properties.",
    capacity: ["Up to 5 properties, 1 admin", "1 location"],
    features: [
      "Up to 1000 analytics queries per month",
      "5 GB storage for property data",
      "Community Support",
    ],
    isStarter: true,
    isRecommended: false,
    buttonText: "Get started",
    buttonLink: "#",
  },
  {
    name: "Professional",
    price: { monthly: "$49", annually: "$39" },
    description: "For growing rental businesses ready to optimize performance.",
    capacity: ["Up to 50 properties, 3 admins", "Up to 5 locations"],
    features: [
      "Unlimited analytics queries",
      "$0.07 per added property over limit",
      "Advanced booking analytics",
      "Priority support",
    ],
    isStarter: false,
    isRecommended: false,
    buttonText: "Start 14-day trial",
    buttonLink: "#",
  },
  {
    name: "Enterprise",
    price: { monthly: "$99", annually: "$79" },
    description:
      "For established vacation rental businesses with multiple locations.",
    capacity: ["Up to 200 properties, 10 admins", "Unlimited locations"],
    features: [
      "Unlimited analytics & reporting",
      "Volume discount for larger portfolios",
      "Custom dashboard creation",
      "AI-powered pricing recommendations",
      "Dedicated account manager",
    ],
    isStarter: false,
    isRecommended: true,
    buttonText: "Start 14-day trial",
    buttonLink: "#",
  },
]

interface Feature {
  name: string
  plans: Record<string, boolean | string>
  tooltip?: string
}

interface Section {
  name: string
  features: Feature[]
}

const sections: Section[] = [
  {
    name: "Platform Features",
    features: [
      {
        name: "Automated guest communications",
        tooltip:
          "Streamline your communication with guests through customizable templates and triggers.",
        plans: { Essentials: true, Professional: true, Enterprise: true },
      },
      {
        name: "Property portfolios",
        tooltip:
          "Group and manage properties based on location, type, or management structure.",
        plans: { Essentials: "5", Professional: "50", Enterprise: "Unlimited" },
      },
      {
        name: "Data storage",
        tooltip:
          "Store historical booking data, guest information, and property details securely in the cloud.",
        plans: {
          Essentials: "5GB included",
          Professional: "50GB included",
          Enterprise: "Customized¹",
        },
      },
      {
        name: "Team members",
        tooltip:
          "Add staff with specific role-based permissions for cleaning, maintenance, and management.",
        plans: {
          Essentials: "3 users",
          Professional: "Up to 20 users",
          Enterprise: "Unlimited",
        },
      },
    ],
  },
  {
    name: "Operations",
    features: [
      {
        name: "Task management system",
        tooltip:
          "Assign and track cleaning, maintenance, and guest service tasks across your team.",
        plans: { Essentials: true, Professional: true, Enterprise: true },
      },
      {
        name: "API integration",
        tooltip:
          "Connect with booking channels, payment processors, and other vacation rental tools.",
        plans: { Professional: true, Enterprise: true },
      },
      {
        name: "Dynamic pricing engine",
        tooltip:
          "Automatically adjust pricing based on demand, seasonality, and local events.",
        plans: { Essentials: "Limited", Professional: "Standard", Enterprise: "Enhanced" },
      },
    ],
  },
  {
    name: "Analytics",
    features: [
      {
        name: "Performance data retention",
        tooltip:
          "Access historical performance data to identify trends and opportunities.",
        plans: { Essentials: "90 days", Professional: "2 years", Enterprise: "Unlimited" },
      },
      {
        name: "Market comparison analytics",
        tooltip:
          "Compare your properties' performance against similar rentals in your market.",
        plans: { Professional: true, Enterprise: true },
      },
      {
        name: "Custom reporting engine",
        tooltip:
          "Build custom reports for revenue, occupancy, and operational efficiency.",
        plans: { Enterprise: true },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "Customer service",
        plans: {
          Essentials: "Community forum",
          Professional: "Email + chat",
          Enterprise: "Dedicated manager",
        },
      },
      {
        name: "Response time",
        plans: { Essentials: "48 hours", Professional: "24 hours", Enterprise: "Priority" },
      },
    ],
  },
]

const isVariablePrice = (
  price: FixedPrice | VariablePrice,
): price is VariablePrice => {
  return (price as VariablePrice).monthly !== undefined
}

export default function Pricing() {
  const [billingFrequency, setBillingFrequency] = React.useState<
    "monthly" | "annually"
  >("monthly")
  return (
    <div className="px-3">
      <section
        aria-labelledby="pricing-title"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>Pricing</Badge>
        <h1 className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300">
          Solutions that grow with your portfolio
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
          Plans that empower vacation rental owners and managers to maximize revenue and streamline operations. Our
          flexible pricing ensures that property management doesn&rsquo;t come at
          the cost of your profitability.
        </p>
      </section>
      <section
        id="pricing-overview"
        className="mt-20 animate-slide-up-fade"
        aria-labelledby="pricing-overview"
        style={{
          animationDuration: "600ms",
          animationDelay: "200ms",
          animationFillMode: "backwards",
        }}
      >
        <div className="flex items-center justify-center gap-2">
          <Label
            htmlFor="switch"
            className="text-base font-medium sm:text-sm dark:text-gray-400"
          >
            Monthly
          </Label>
          <Switch
            id="switch"
            checked={billingFrequency === "annually"}
            onCheckedChange={() =>
              setBillingFrequency(
                billingFrequency === "monthly" ? "annually" : "monthly",
              )
            }
          />
          <Label
            htmlFor="switch"
            className="text-base font-medium sm:text-sm dark:text-gray-400"
          >
            Yearly (-20%)
          </Label>
        </div>
        <div className="grid grid-cols-1 gap-x-14 gap-y-8 lg:grid-cols-3">
          {plans.map((plan, planIdx) => (
            <div key={planIdx} className="mt-6">
              {plan.isRecommended ? (
                <div className="flex h-4 items-center">
                  <div className="relative w-full">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-indigo-600 dark:border-indigo-400" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-3 text-xs font-medium text-indigo-600 dark:bg-gray-950 dark:text-indigo-400">
                        Most popular
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex h-4 items-center">
                  <div className="h-px w-full bg-gray-200 dark:bg-gray-800" />
                </div>
              )}
              <div className="mx-auto max-w-md">
                <h2 className="mt-6 text-sm font-semibold text-gray-900 dark:text-gray-50">
                  {plan.name}
                </h2>
                <div className="mt-3 flex items-center gap-x-3">
                  <span className="text-5xl font-semibold tabular-nums text-gray-900 dark:text-gray-50">
                    {isVariablePrice(plan.price)
                      ? billingFrequency === "monthly"
                        ? plan.price.monthly
                        : plan.price.annually
                      : plan.price}
                  </span>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    per property <br /> per month
                  </div>
                </div>
                <div className="mt-6 flex flex-col justify-between">
                  <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </p>
                  <div className="mt-6">
                    {plan.isStarter ? (
                      <Button variant="secondary" asChild className="group">
                        <Link href={plan.buttonLink}>
                          {plan.buttonText}
                          <ArrowAnimated />
                        </Link>
                      </Button>
                    ) : (
                      <Button asChild className="group">
                        <Link href={plan.buttonLink}>
                          {plan.buttonText}
                          <ArrowAnimated />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
                <ul
                  role="list"
                  className="mt-8 text-sm text-gray-700 dark:text-gray-400"
                >
                  {plan.capacity.map((feature, index) => (
                    <li
                      key={feature}
                      className="flex items-center gap-x-3 py-1.5"
                    >
                      {index === 0 && (
                        <RiHomeSmileLine
                          className="size-4 shrink-0 text-gray-500"
                          aria-hidden="true"
                        />
                      )}
                      {index === 1 && (
                        <RiCloudLine
                          className="size-4 shrink-0 text-gray-500"
                          aria-hidden="true"
                        />
                      )}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <ul
                  role="list"
                  className="mt-4 text-sm text-gray-700 dark:text-gray-400"
                >
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-x-3 py-1.5"
                    >
                      <RiCheckLine
                        className="size-4 shrink-0 text-indigo-600 dark:text-indigo-400"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="testimonial"
        className="mx-auto mt-20 max-w-xl sm:mt-32 lg:max-w-6xl"
        aria-labelledby="testimonial"
      >
        <Testimonial />
      </section>

      {/* plan details (xs-lg)*/}
      <section
        id="pricing-details"
        className="mt-20 sm:mt-36"
        aria-labelledby="pricing-details"
      >
        <div className="mx-auto space-y-8 sm:max-w-md lg:hidden">
          {plans.map((plan) => (
            <div key={plan.name}>
              <div className="rounded-xl bg-gray-400/5 p-6 ring-1 ring-inset ring-gray-200 dark:ring-gray-800">
                <h2
                  id={plan.name}
                  className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-50"
                >
                  {plan.name}
                </h2>
                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                  {isVariablePrice(plan.price)
                    ? `${
                        billingFrequency === "monthly"
                          ? plan.price.monthly
                          : plan.price.annually
                      } / per property`
                    : plan.price}
                </p>
              </div>
              <ul
                role="list"
                className="mt-10 space-y-10 text-sm leading-6 text-gray-900 dark:text-gray-50"
              >
                {sections.map((section) => (
                  <li key={section.name}>
                    <h3 className="font-semibold">{section.name}</h3>
                    <ul
                      role="list"
                      className="mt-2 divide-y divide-gray-200 dark:divide-gray-800"
                    >
                      {section.features.map((feature) =>
                        feature.plans[plan.name] ? (
                          <li
                            key={feature.name}
                            className="flex gap-x-3 py-2.5"
                          >
                            <RiCheckLine
                              className="size-5 flex-none text-indigo-600 dark:text-indigo-400"
                              aria-hidden="true"
                            />
                            <span>
                              {feature.name}{" "}
                              {typeof feature.plans[plan.name] === "string" ? (
                                <span className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                                  ({feature.plans[plan.name]})
                                </span>
                              ) : null}
                            </span>
                          </li>
                        ) : null,
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* plan details (lg+) */}
      <section className="mx-auto mt-20">
        <div className="mt-20 hidden sm:mt-28 lg:block">
          <div className="relative">
            <div className="sticky top-0 z-20 h-28 w-full bg-white dark:bg-gray-950" />
            <table className="w-full table-fixed border-separate border-spacing-0 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-2/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
              </colgroup>
              <thead className="sticky top-28">
                <tr>
                  <th
                    scope="col"
                    className="border-b border-gray-100 bg-white pb-8 dark:border-gray-800 dark:bg-gray-950"
                  >
                    <div className="font-semibold leading-7 text-gray-900 dark:text-gray-50">
                      Compare plans
                    </div>
                    <div className="text-sm font-normal text-gray-600 dark:text-gray-400">
                      Price per month (billed yearly)
                    </div>
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      scope="col"
                      className="border-b border-gray-100 bg-white px-6 pb-8 lg:px-8 dark:border-gray-800 dark:bg-gray-950"
                    >
                      <div
                        className={cx(
                          !plan.isStarter
                            ? "text-indigo-600 dark:text-indigo-400"
                            : "text-gray-900 dark:text-gray-50",
                          "font-semibold leading-7",
                        )}
                      >
                        {plan.name}
                      </div>
                      <div className="text-sm font-normal text-gray-600 dark:text-gray-400">
                        {isVariablePrice(plan.price)
                          ? `${
                              billingFrequency === "monthly"
                                ? plan.price.monthly
                                : plan.price.annually
                            } / per property`
                          : plan.price}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={cx(
                          sectionIdx === 0 ? "pt-14" : "pt-10",
                          "border-b border-gray-100 pb-4 text-base font-semibold leading-6 text-gray-900 dark:border-gray-800 dark:text-gray-50",
                        )}
                      >
                        {section.name}
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr
                        key={feature.name}
                        className="transition hover:bg-indigo-50/30 dark:hover:bg-indigo-800/5"
                      >
                        <th
                          scope="row"
                          className="flex items-center gap-2 border-b border-gray-100 py-4 text-sm font-normal leading-6 text-gray-900 dark:border-gray-800 dark:text-gray-50"
                        >
                          <span>{feature.name}</span>
                          {feature.tooltip ? (
                            <Tooltip side="right" content={feature.tooltip}>
                              <RiInformationLine
                                className="size-4 shrink-0 text-gray-700 dark:text-gray-400"
                                aria-hidden="true"
                              />
                            </Tooltip>
                          ) : null}
                        </th>
                        {plans.map((plan) => (
                          <td
                            key={plan.name}
                            className="border-b border-gray-100 px-6 py-4 lg:px-8 dark:border-gray-800"
                          >
                            {typeof feature.plans[plan.name] === "string" ? (
                              <div className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                                {feature.plans[plan.name]}
                              </div>
                            ) : (
                              <>
                                {feature.plans[plan.name] === true ? (
                                  <RiCheckLine
                                    className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <RiSubtractLine
                                    className="h-5 w-5 text-gray-400 dark:text-gray-600"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.plans[plan.name] === true
                                    ? "Included"
                                    : "Not included"}{" "}
                                  in {plan.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
                <tr>
                  <th
                    scope="row"
                    className="pt-6 text-sm font-normal leading-6 text-gray-900 dark:text-gray-50"
                  >
                    <span className="sr-only">Link to activate plan</span>
                  </th>
                  {plans.map((plan) => (
                    <td key={plan.name} className="px-6 pt-6 lg:px-8">
                      {plan.isStarter ? (
                        <Button
                          variant="light"
                          asChild
                          className="group bg-transparent px-0 text-base hover:bg-transparent dark:bg-transparent hover:dark:bg-transparent"
                        >
                          <Link href={plan.buttonLink}>
                            {plan.buttonText}
                            <ArrowAnimated />
                          </Link>
                        </Button>
                      ) : (
                        <Button
                          variant="light"
                          asChild
                          className="group bg-transparent px-0 text-base text-indigo-600 hover:bg-transparent dark:bg-transparent dark:text-indigo-400 hover:dark:bg-transparent"
                        >
                          <Link href={plan.buttonLink}>
                            {plan.buttonText}
                            <ArrowAnimated />
                          </Link>
                        </Button>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Faqs />
    </div>
  )
}