import React from "react";

const Contact = () => {
  return (
    <div>
      {/* ================= Contact Hero Section ================= */}{" "}
      <section className="bg-[#F4F8F7] py-20">
        {" "}
        <div className="mx-auto w-full max-w-[1170px] px-5">
          {" "}
          <div className="mx-auto max-w-3xl text-center">
            {" "}
            <span className="mb-4 inline-block rounded-full bg-[#0D554C]/10 px-4 py-2 text-sm font-semibold text-[#0D554C]">
              {" "}
              Contact Us{" "}
            </span>{" "}
            <h1 className="mb-5 text-4xl font-bold text-[#112F42] md:text-5xl">
              {" "}
              Let's Talk About Your Project{" "}
            </h1>{" "}
            <p className="text-lg leading-8 text-slate-500">
              {" "}
              Have a question or need an IT solution? Get in touch with our team
              and let's discuss how we can help your business.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= Contact Information & Form Section ================= */}{" "}
      <section className="bg-white py-20">
        {" "}
        <div className="mx-auto w-full max-w-[1170px] px-5">
          {" "}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {" "}
            {/* ================= Contact Information ================= */}{" "}
            <div>
              {" "}
              <h2 className="mb-5 text-3xl font-bold text-[#112F42]">
                {" "}
                Get In Touch{" "}
              </h2>{" "}
              <p className="mb-10 max-w-lg leading-7 text-slate-500">
                {" "}
                We are always ready to discuss your project, answer your
                questions and provide the right technology solution for your
                business.{" "}
              </p>{" "}
              {/* Email */}{" "}
              <div className="mb-7 flex items-start gap-4">
                {" "}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#0D554C] text-2xl text-white">
                  {" "}
                  ✉{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h3 className="mb-1 text-lg font-semibold text-[#112F42]">
                    {" "}
                    Email{" "}
                  </h3>{" "}
                  <p className="text-slate-500"> info@ourcompany.com </p>{" "}
                </div>{" "}
              </div>{" "}
              {/* Phone */}{" "}
              <div className="mb-7 flex items-start gap-4">
                {" "}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#0D554C] text-2xl text-white">
                  {" "}
                  ☎{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h3 className="mb-1 text-lg font-semibold text-[#112F42]">
                    {" "}
                    Phone{" "}
                  </h3>{" "}
                  <p className="text-slate-500"> +880 1234-567890 </p>{" "}
                </div>{" "}
              </div>{" "}
              {/* Address */}{" "}
              <div className="flex items-start gap-4">
                {" "}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#0D554C] text-2xl text-white">
                  {" "}
                  📍{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h3 className="mb-1 text-lg font-semibold text-[#112F42]">
                    {" "}
                    Address{" "}
                  </h3>{" "}
                  <p className="text-slate-500"> Dhaka, Bangladesh </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* ================= Contact Form ================= */}{" "}
            <div className="rounded-xl border border-slate-200 bg-[#F4F8F7] p-6 md:p-8">
              {" "}
              <h2 className="mb-6 text-2xl font-bold text-[#112F42]">
                {" "}
                Send Us a Message{" "}
              </h2>{" "}
              <form className="space-y-5">
                {" "}
                {/* Name */}{" "}
                <div>
                  {" "}
                  <label
                    htmlFor="name"
                    className="mb-2 block font-medium text-[#112F42]"
                  >
                    {" "}
                    Your Name{" "}
                  </label>{" "}
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#0D554C] focus:ring-2 focus:ring-[#0D554C]/20"
                  />{" "}
                </div>{" "}
                {/* Email */}{" "}
                <div>
                  {" "}
                  <label
                    htmlFor="email"
                    className="mb-2 block font-medium text-[#112F42]"
                  >
                    {" "}
                    Your Email{" "}
                  </label>{" "}
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#0D554C] focus:ring-2 focus:ring-[#0D554C]/20"
                  />{" "}
                </div>{" "}
                {/* Subject */}{" "}
                <div>
                  {" "}
                  <label
                    htmlFor="subject"
                    className="mb-2 block font-medium text-[#112F42]"
                  >
                    {" "}
                    Subject{" "}
                  </label>{" "}
                  <input
                    id="subject"
                    type="text"
                    placeholder="Enter subject"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#0D554C] focus:ring-2 focus:ring-[#0D554C]/20"
                  />{" "}
                </div>{" "}
                {/* Message */}{" "}
                <div>
                  {" "}
                  <label
                    htmlFor="message"
                    className="mb-2 block font-medium text-[#112F42]"
                  >
                    {" "}
                    Message{" "}
                  </label>{" "}
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#0D554C] focus:ring-2 focus:ring-[#0D554C]/20"
                  ></textarea>{" "}
                </div>{" "}
                {/* Submit Button */}{" "}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#0D554C] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#112F42]"
                >
                  {" "}
                  Send Message{" "}
                </button>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= Why Contact Us Section ================= */}{" "}
      <section className="bg-[#F4F8F7] py-20">
        {" "}
        <div className="mx-auto w-full max-w-[1170px] px-5">
          {" "}
          <div className="mb-12 text-center">
            {" "}
            <h2 className="mb-4 text-3xl font-bold text-[#112F42] md:text-4xl">
              {" "}
              Why Work With Us?{" "}
            </h2>{" "}
            <p className="mx-auto max-w-2xl leading-7 text-slate-500">
              {" "}
              We focus on quality, communication and delivering solutions that
              meet your business requirements.{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {" "}
            {/* Feature 1 */}{" "}
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              {" "}
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#0D554C]/10 text-2xl">
                {" "}
                💡{" "}
              </div>{" "}
              <h3 className="mb-3 text-xl font-semibold text-[#112F42]">
                {" "}
                Creative Solutions{" "}
              </h3>{" "}
              <p className="leading-7 text-slate-500">
                {" "}
                We create practical and modern solutions for your business.{" "}
              </p>{" "}
            </div>{" "}
            {/* Feature 2 */}{" "}
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              {" "}
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#0D554C]/10 text-2xl">
                {" "}
                🤝{" "}
              </div>{" "}
              <h3 className="mb-3 text-xl font-semibold text-[#112F42]">
                {" "}
                Reliable Support{" "}
              </h3>{" "}
              <p className="leading-7 text-slate-500">
                {" "}
                We maintain clear communication and provide reliable
                support.{" "}
              </p>{" "}
            </div>{" "}
            {/* Feature 3 */}{" "}
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              {" "}
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#0D554C]/10 text-2xl">
                {" "}
                🚀{" "}
              </div>{" "}
              <h3 className="mb-3 text-xl font-semibold text-[#112F42]">
                {" "}
                Quality Delivery{" "}
              </h3>{" "}
              <p className="leading-7 text-slate-500">
                {" "}
                We focus on delivering quality digital products on time.{" "}
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
              Have a Project in Mind?{" "}
            </h2>{" "}
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
              {" "}
              Let's discuss your idea and find the right technology solution for
              your business.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </div>
  );
};

export default Contact;
