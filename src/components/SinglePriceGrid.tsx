import { singlePriceGridData } from "data";

export default function SinglePriceGrid() {
  const { about, subscription, whyUs } = singlePriceGridData;
  const {
    title: aboutTitle,
    description: aboutDescription,
    benefits: aboutBenefits,
  } = about;
  const {
    title: subscriptionTitle,
    price: subscriptionPrice,
    description: subscriptionDescription,
  } = subscription;
  const { title: whyUsTitle, benefits: whyUsBenefits } = whyUs;

  const fmt = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <article className="box-shadow-2 grid overflow-hidden rounded-[5px] text-base leading-[26px] tracking-[-0.2px] text-white sm:grid-cols-2 sm:grid-rows-2">
      <div className="grid gap-4 bg-white px-6 pt-7 pb-8 sm:col-span-2">
        <h1 className="text-cyan mb mb-2 text-xl leading-none font-bold tracking-[-0.25px]">
          {aboutTitle}
        </h1>
        <p className="text-bright-yellow text-[0.9375rem] leading-[20px] font-bold tracking-[-0.19px]">
          {aboutDescription}
        </p>
        <ul>
          {aboutBenefits.map((benefit) => (
            <li
              key={benefit}
              className="text-grayish-blue inline text-sm tracking-[-0.175px]"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-cyan grid gap-1 p-6">
        <h2 className="mb-3.5 text-lg leading-none font-bold tracking-[-0.22px]">
          {subscriptionTitle}
        </h2>
        <p className="flex items-center gap-2.75">
          <span className="text-[2rem] leading-none font-bold tracking-[-0.4px]">
            {fmt.format(subscriptionPrice)}
          </span>
          <span className="opacity-50">per month</span>
        </p>
        <p className="mb-5.5">{subscriptionDescription}</p>
        <button type="button" className="btn-primary">
          Sign Up
        </button>
      </div>
      <div className="bg-cyan/85 grid gap-4.5 p-6">
        <h2 className="text-lg leading-none font-bold tracking-[-0.22px]">
          {whyUsTitle}
        </h2>
        <ul>
          {whyUsBenefits.map((benefit) => (
            <li
              key={benefit}
              className="text-sm leading-[20px] tracking-[-0.17px] opacity-75"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
