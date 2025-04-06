
import React from "react";
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
    <section className="bg-persian-blue py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            در خبرنامه راه‌نما عضو شوید
          </h2>
          <p className="text-white/90 mb-8">
            برای دریافت آخرین اخبار، تخفیف‌های ویژه و محتوای آموزشی رایگان در خبرنامه ما عضو شوید.
          </p>

          <form className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="flex-grow py-3 px-4 rounded-lg border-none focus:ring-2 focus:ring-persian-gold focus:outline-none text-right"
              required
            />
            <Button
              type="submit"
              className="bg-persian-gold hover:bg-opacity-90 text-white font-bold whitespace-nowrap"
            >
              عضویت
            </Button>
          </form>
          <p className="text-white/70 text-sm mt-4">
            ما به حریم خصوصی شما احترام می‌گذاریم. می‌توانید هر زمان که بخواهید از خبرنامه خارج شوید.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
