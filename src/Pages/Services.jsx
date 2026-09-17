import React from "react";

const Services = () => {
  return (
    <>
      {/* ================= Service Hero Section ================= */}{" "}
      <section className="bg-[#F4F8F7] py-20">
        {" "}
        <div className="mx-auto w-full max-w-[1170px] px-5">
          {" "}
          <div className="mx-auto max-w-3xl text-center">
            {" "}
            <span className="mb-4 inline-block rounded-full bg-[#0D554C]/10 px-4 py-2 text-sm font-semibold text-[#0D554C]">
              {" "}
              Our Services{" "}
            </span>{" "}
            <h1 className="mb-5 text-4xl font-bold text-[#112F42] md:text-5xl">
              {" "}
              What We Can Do For You{" "}
            </h1>{" "}
            <p className="text-lg leading-8 text-slate-500">
              {" "}
              We provide reliable and modern IT solutions to help businesses
              grow, improve productivity and achieve their goals.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= Services Section ================= */}{" "}
      <section className="bg-white py-20">
        {" "}
        <div className="mx-auto w-full max-w-[1170px] px-5">
          {" "}
          <div className="mb-12 text-center">
            {" "}
            <h2 className="mb-4 text-3xl font-bold text-[#112F42] md:text-4xl">
              {" "}
              Our Expertise{" "}
            </h2>{" "}
            <p className="mx-auto max-w-2xl leading-7 text-slate-500">
              {" "}
              From websites to custom software, we provide complete digital
              solutions for modern businesses.{" "}
            </p>{" "}
          </div>{" "}
          {/* Service Cards */}{" "}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {" "}
            {/* ================= Service 1 ================= */}{" "}
            <div className="group rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#0D554C]/30 hover:shadow-xl">
              {" "}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#0D554C]/10 text-3xl transition duration-300 group-hover:bg-[#0D554C]">
                {" "}
                <span className="transition duration-300 group-hover:grayscale group-hover:brightness-0 group-hover:invert">
                  {" "}
                  💻{" "}
                </span>{" "}
              </div>{" "}
              <h3 className="mb-4 text-2xl font-semibold text-[#112F42]">
                {" "}
                Web Development{" "}
              </h3>{" "}
              <p className="leading-7 text-slate-500">
                {" "}
                We build fast, responsive and user-friendly websites that help
                businesses create a strong online presence.{" "}
              </p>{" "}
            </div>{" "}
            {/* ================= Service 2 ================= */}{" "}
            <div className="group rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#0D554C]/30 hover:shadow-xl">
              {" "}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#112F42]/10 text-3xl transition duration-300 group-hover:bg-[#112F42]">
                {" "}
                <span className="transition duration-300 group-hover:grayscale group-hover:brightness-0 group-hover:invert">
                  {" "}
                  ⚙️{" "}
                </span>{" "}
              </div>{" "}
              <h3 className="mb-4 text-2xl font-semibold text-[#112F42]">
                {" "}
                Software Development{" "}
              </h3>{" "}
              <p className="leading-7 text-slate-500">
                {" "}
                We develop custom software solutions designed around your
                business requirements and workflow.{" "}
              </p>{" "}
            </div>{" "}
            {/* ================= Service 3 ================= */}{" "}
            <div className="group rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#0D554C]/30 hover:shadow-xl">
              {" "}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#0D554C]/10 text-3xl transition duration-300 group-hover:bg-[#0D554C]">
                {" "}
                <span className="transition duration-300 group-hover:grayscale group-hover:brightness-0 group-hover:invert">
                  {" "}
                  🎨{" "}
                </span>{" "}
              </div>{" "}
              <h3 className="mb-4 text-2xl font-semibold text-[#112F42]">
                {" "}
                UI/UX Design{" "}
              </h3>{" "}
              <p className="leading-7 text-slate-500">
                {" "}
                We create clean, modern and user-friendly interfaces that
                provide a smooth digital experience.{" "}
              </p>{" "}
            </div>{" "}
            {/* ================= Service 4 ================= */}{" "}
            <div className="group rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#0D554C]/30 hover:shadow-xl">
              {" "}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#112F42]/10 text-3xl transition duration-300 group-hover:bg-[#112F42]">
                {" "}
                <span className="transition duration-300 group-hover:grayscale group-hover:brightness-0 group-hover:invert">
                  {" "}
                  📱{" "}
                </span>{" "}
              </div>{" "}
              <h3 className="mb-4 text-2xl font-semibold text-[#112F42]">
                {" "}
                Mobile App Development{" "}
              </h3>{" "}
              <p className="leading-7 text-slate-500">
                {" "}
                We build modern mobile applications with a focus on performance,
                usability and scalability.{" "}
              </p>{" "}
            </div>{" "}
            {/* ================= Service 5 ================= */}{" "}
            <div className="group rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#0D554C]/30 hover:shadow-xl">
              {" "}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#0D554C]/10 text-3xl transition duration-300 group-hover:bg-[#0D554C]">
                {" "}
                <span className="transition duration-300 group-hover:grayscale group-hover:brightness-0 group-hover:invert">
                  {" "}
                  📈{" "}
                </span>{" "}
              </div>{" "}
              <h3 className="mb-4 text-2xl font-semibold text-[#112F42]">
                {" "}
                Digital Marketing{" "}
              </h3>{" "}
              <p className="leading-7 text-slate-500">
                {" "}
                We help businesses reach their target audience and build a
                stronger presence through digital marketing.{" "}
              </p>{" "}
            </div>{" "}
            {/* ================= Service 6 ================= */}{" "}
            <div className="group rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#0D554C]/30 hover:shadow-xl">
              {" "}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#112F42]/10 text-3xl transition duration-300 group-hover:bg-[#112F42]">
                {" "}
                <span className="transition duration-300 group-hover:grayscale group-hover:brightness-0 group-hover:invert">
                  {" "}
                  🔐{" "}
                </span>{" "}
              </div>{" "}
              <h3 className="mb-4 text-2xl font-semibold text-[#112F42]">
                {" "}
                IT Consulting{" "}
              </h3>{" "}
              <p className="leading-7 text-slate-500">
                {" "}
                We provide technology consulting to help businesses choose the
                right tools and digital solutions.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= Process Section ================= */}{" "}
      <section className="bg-[#F4F8F7] py-20">
        {" "}
        <div className="mx-auto w-full max-w-[1170px] px-5">
          {" "}
          <div className="mb-12 text-center">
            {" "}
            <h2 className="mb-4 text-3xl font-bold text-[#112F42] md:text-4xl">
              {" "}
              How We Work{" "}
            </h2>{" "}
            <p className="mx-auto max-w-2xl leading-7 text-slate-500">
              {" "}
              Our simple process helps us understand your needs and deliver the
              right solution.{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {" "}
            {/* Step 1 */}{" "}
            <div className="text-center">
              {" "}
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#0D554C] text-2xl font-bold text-white">
                {" "}
                01{" "}
              </div>{" "}
              <h3 className="mb-3 text-xl font-semibold text-[#112F42]">
                {" "}
                Discussion{" "}
              </h3>{" "}
              <p className="leading-7 text-slate-500">
                {" "}
                We understand your business, goals and project
                requirements.{" "}
              </p>{" "}
            </div>{" "}
            {/* Step 2 */}{" "}
            <div className="text-center">
              {" "}
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#0D554C] text-2xl font-bold text-white">
                {" "}
                02{" "}
              </div>{" "}
              <h3 className="mb-3 text-xl font-semibold text-[#112F42]">
                {" "}
                Development{" "}
              </h3>{" "}
              <p className="leading-7 text-slate-500">
                {" "}
                Our team designs and develops the solution according to your
                requirements.{" "}
              </p>{" "}
            </div>{" "}
            {/* Step 3 */}{" "}
            <div className="text-center">
              {" "}
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#0D554C] text-2xl font-bold text-white">
                {" "}
                03{" "}
              </div>{" "}
              <h3 className="mb-3 text-xl font-semibold text-[#112F42]">
                {" "}
                Delivery{" "}
              </h3>{" "}
              <p className="leading-7 text-slate-500">
                {" "}
                We test, finalize and deliver the completed digital
                solution.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= CTA Section ================= */}{" "}
      <section className="bg-[#112F42] py-20">
        {" "}
        <div className="mx-auto w-full max-w-[1170px] px-5">
          {" "}
          <div className="text-center text-white">
            {" "}
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              {" "}
              Ready To Start Your Project?{" "}
            </h2>{" "}
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-300">
              {" "}
              Let's work together and build a digital solution that helps your
              business grow.{" "}
            </p>{" "}
            <button className="rounded-lg bg-[#0D554C] px-8 py-3 font-semibold text-white transition duration-300 hover:bg-[#0a453e]">
              {" "}
              Contact Us{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </>
  );
};

export default Services;
