import React from "react";

const Blog = () => {
  return (
    <div>
      {/* ================= Blog Hero Section ================= */}{" "}
      {/* ================= Blog Hero Section ================= */}{" "}
      <section className="bg-[#F4F8F7] py-20">
        {" "}
        <div className="mx-auto w-full max-w-[1170px] px-5">
          {" "}
          <div className="mx-auto max-w-3xl text-center">
            {" "}
            <span className="mb-4 inline-block rounded-full bg-[#0D554C]/10 px-4 py-2 text-sm font-semibold text-[#0D554C]">
              {" "}
              Our Blog{" "}
            </span>{" "}
            <h1 className="mb-5 text-4xl font-bold text-[#112F42] md:text-5xl">
              {" "}
              Latest News & Insights{" "}
            </h1>{" "}
            <p className="text-lg leading-8 text-slate-500">
              {" "}
              Explore our latest articles, technology updates and useful
              insights about the IT industry.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= Blog Section ================= */}{" "}
      <section className="bg-white py-20">
        {" "}
        <div className="mx-auto w-full max-w-[1170px] px-5">
          {" "}
          <div className="mb-12 text-center">
            {" "}
            <h2 className="mb-4 text-3xl font-bold text-[#112F42] md:text-4xl">
              {" "}
              Our Latest Articles{" "}
            </h2>{" "}
            <p className="mx-auto max-w-2xl leading-7 text-slate-500">
              {" "}
              Stay updated with the latest trends, ideas and technologies from
              our team.{" "}
            </p>{" "}
          </div>{" "}
          {/* Blog Cards */}{" "}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {" "}
            {/* ================= Blog 1 ================= */}{" "}
            <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              {" "}
              <div className="flex h-52 items-center justify-center bg-[#0D554C]/10">
                {" "}
                <span className="text-6xl transition duration-300 group-hover:scale-110">
                  {" "}
                  💻{" "}
                </span>{" "}
              </div>{" "}
              <div className="p-7">
                {" "}
                <span className="text-sm font-semibold text-[#0D554C]">
                  {" "}
                  Web Development{" "}
                </span>{" "}
                <h3 className="mt-3 mb-3 text-2xl font-semibold text-[#112F42]">
                  {" "}
                  Why Modern Web Development Matters{" "}
                </h3>{" "}
                <p className="mb-6 leading-7 text-slate-500">
                  {" "}
                  Learn how modern web technologies help businesses build faster
                  and better digital experiences.{" "}
                </p>{" "}
                <button className="font-semibold text-[#0D554C] transition hover:text-[#112F42]">
                  {" "}
                  Read More →{" "}
                </button>{" "}
              </div>{" "}
            </article>{" "}
            {/* ================= Blog 2 ================= */}{" "}
            <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              {" "}
              <div className="flex h-52 items-center justify-center bg-[#112F42]/10">
                {" "}
                <span className="text-6xl transition duration-300 group-hover:scale-110">
                  {" "}
                  ⚙️{" "}
                </span>{" "}
              </div>{" "}
              <div className="p-7">
                {" "}
                <span className="text-sm font-semibold text-[#0D554C]">
                  {" "}
                  Technology{" "}
                </span>{" "}
                <h3 className="mt-3 mb-3 text-2xl font-semibold text-[#112F42]">
                  {" "}
                  Latest Technology Trends{" "}
                </h3>{" "}
                <p className="mb-6 leading-7 text-slate-500">
                  {" "}
                  Discover some of the latest technologies that are changing the
                  way businesses work.{" "}
                </p>{" "}
                <button className="font-semibold text-[#0D554C] transition hover:text-[#112F42]">
                  {" "}
                  Read More →{" "}
                </button>{" "}
              </div>{" "}
            </article>{" "}
            {/* ================= Blog 3 ================= */}{" "}
            <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              {" "}
              <div className="flex h-52 items-center justify-center bg-[#0D554C]/10">
                {" "}
                <span className="text-6xl transition duration-300 group-hover:scale-110">
                  {" "}
                  🚀{" "}
                </span>{" "}
              </div>{" "}
              <div className="p-7">
                {" "}
                <span className="text-sm font-semibold text-[#0D554C]">
                  {" "}
                  Business{" "}
                </span>{" "}
                <h3 className="mt-3 mb-3 text-2xl font-semibold text-[#112F42]">
                  {" "}
                  How Technology Helps Businesses Grow{" "}
                </h3>{" "}
                <p className="mb-6 leading-7 text-slate-500">
                  {" "}
                  Understand how digital solutions can improve productivity and
                  help businesses reach more customers.{" "}
                </p>{" "}
                <button className="font-semibold text-[#0D554C] transition hover:text-[#112F42]">
                  {" "}
                  Read More →{" "}
                </button>{" "}
              </div>{" "}
            </article>{" "}
            {/* ================= Blog 4 ================= */}{" "}
            <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              {" "}
              <div className="flex h-52 items-center justify-center bg-[#112F42]/10">
                {" "}
                <span className="text-6xl transition duration-300 group-hover:scale-110">
                  {" "}
                  📱{" "}
                </span>{" "}
              </div>{" "}
              <div className="p-7">
                {" "}
                <span className="text-sm font-semibold text-[#0D554C]">
                  {" "}
                  Mobile App{" "}
                </span>{" "}
                <h3 className="mt-3 mb-3 text-2xl font-semibold text-[#112F42]">
                  {" "}
                  The Future of Mobile Applications{" "}
                </h3>{" "}
                <p className="mb-6 leading-7 text-slate-500">
                  {" "}
                  Learn about the growing importance of mobile applications for
                  modern businesses.{" "}
                </p>{" "}
                <button className="font-semibold text-[#0D554C] transition hover:text-[#112F42]">
                  {" "}
                  Read More →{" "}
                </button>{" "}
              </div>{" "}
            </article>{" "}
            {/* ================= Blog 5 ================= */}{" "}
            <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              {" "}
              <div className="flex h-52 items-center justify-center bg-[#0D554C]/10">
                {" "}
                <span className="text-6xl transition duration-300 group-hover:scale-110">
                  {" "}
                  🎨{" "}
                </span>{" "}
              </div>{" "}
              <div className="p-7">
                {" "}
                <span className="text-sm font-semibold text-[#0D554C]">
                  {" "}
                  UI/UX Design{" "}
                </span>{" "}
                <h3 className="mt-3 mb-3 text-2xl font-semibold text-[#112F42]">
                  {" "}
                  Creating Better User Experiences{" "}
                </h3>{" "}
                <p className="mb-6 leading-7 text-slate-500">
                  {" "}
                  Good design helps users understand and interact with a product
                  more easily.{" "}
                </p>{" "}
                <button className="font-semibold text-[#0D554C] transition hover:text-[#112F42]">
                  {" "}
                  Read More →{" "}
                </button>{" "}
              </div>{" "}
            </article>{" "}
            {/* ================= Blog 6 ================= */}{" "}
            <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              {" "}
              <div className="flex h-52 items-center justify-center bg-[#112F42]/10">
                {" "}
                <span className="text-6xl transition duration-300 group-hover:scale-110">
                  {" "}
                  🔐{" "}
                </span>{" "}
              </div>{" "}
              <div className="p-7">
                {" "}
                <span className="text-sm font-semibold text-[#0D554C]">
                  {" "}
                  Cyber Security{" "}
                </span>{" "}
                <h3 className="mt-3 mb-3 text-2xl font-semibold text-[#112F42]">
                  {" "}
                  Why Cyber Security Is Important{" "}
                </h3>{" "}
                <p className="mb-6 leading-7 text-slate-500">
                  {" "}
                  Protecting business data and customer information is an
                  important part of modern IT.{" "}
                </p>{" "}
                <button className="font-semibold text-[#0D554C] transition hover:text-[#112F42]">
                  {" "}
                  Read More →{" "}
                </button>{" "}
              </div>{" "}
            </article>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= Blog CTA Section ================= */}{" "}
      <section className="bg-[#112F42] py-20">
        {" "}
        <div className="mx-auto w-full max-w-[1170px] px-5">
          {" "}
          <div className="text-center text-white">
            {" "}
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              {" "}
              Stay Connected With Us{" "}
            </h2>{" "}
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-300">
              {" "}
              Stay connected with us to get the latest technology news, articles
              and updates.{" "}
            </p>{" "}
            <button className="rounded-lg bg-[#0D554C] px-8 py-3 font-semibold text-white transition duration-300 hover:bg-[#0a453e]">
              {" "}
              Explore More{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </div>
  );
};

export default Blog;
