import Image from "next/image";
import Link from "next/link";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link href={"/"} className="auth-logo cursor-pointer">
          <Image
            src={"/assets/icons/logo.svg"}
            alt="logo"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>
      <section className="auth-right-section">
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote className="auth-blockquote">
            This platform has revolutionized my trading routine. The real-time
            charts and low-latency alerts keep me ahead of the market
            swings—I've doubled my portfolio in just three months!
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <cite className="auth-testimonial-author">Sarah Thompson</cite>
              <p className="max-md:text-xs text-gray-500">Day Trader</p>
            </div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Image
                  src={"/assets/icons/star.svg"}
                  alt="star"
                  key={star}
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image
            src={"/assets/images/dashboard.png"}
            alt="dashboard"
            width={1440}
            height={1150}
            className="auth-dashboard-preview absolute top-0"
          />
        </div>
      </section>
    </main>
  );
};

export default layout;
