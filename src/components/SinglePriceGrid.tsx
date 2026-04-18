import { singlePriceGridData } from "data";

const formattedPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

export default function SinglePriceGrid() {
  const { about, subscription, whyUs } = singlePriceGridData;

  return (
    <article className="box-shadow-2 grid overflow-hidden rounded-[5px] text-base leading-[26px] tracking-[-0.2px] text-white sm:grid-cols-2 sm:grid-rows-2">
      <section
        className="grid gap-4 bg-white px-6 pt-7 pb-8 sm:col-span-2 sm:gap-2.75 sm:p-10"
        aria-labelledby="about-title"
      >
        <h1
          id="about-title"
          className="text-cyan mb-2 text-xl leading-none font-bold tracking-[-0.25px] sm:mb-3.25 sm:text-2xl sm:tracking-[-0.3px]"
        >
          {about.title}
        </h1>
        <p className="text-bright-yellow text-[0.9375rem] leading-[20px] font-bold tracking-[-0.19px] sm:text-lg sm:leading-none sm:tracking-[-0.22px]">
          {about.description}
        </p>
        <p className="text-grayish-blue text-preset-body sm:w-10/12">
          {about.benefits}
        </p>
      </section>
      <section
        className="bg-cyan grid gap-1 p-6 sm:p-10"
        aria-labelledby="subscription-title"
      >
        <h2 id="subscription-title" className="text-preset-h2 mb-3.5">
          {subscription.title}
        </h2>
        <p
          className="flex items-center gap-2.75"
          aria-label={`${formattedPrice(subscription.price)} per month`}
        >
          <span className="text-[2rem] leading-none font-bold tracking-[-0.4px]">
            {formattedPrice(subscription.price)}
          </span>
          <span className="opacity-50">per month</span>
        </p>
        <p className="mb-5.5">{subscription.description}</p>
        <button type="button" className="btn-primary">
          Sign Up
        </button>
      </section>
      <section
        className="bg-cyan/85 grid gap-4.5 p-6 sm:p-10"
        aria-labelledby="why-us-title"
      >
        <h2 id="why-us-title" className="text-preset-h2">
          {whyUs.title}
        </h2>
        <ul>
          {whyUs.benefits.map((benefit) => (
            <li
              key={benefit}
              className="text-preset-body leading-[20px] opacity-75"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
