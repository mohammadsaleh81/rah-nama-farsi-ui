
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-persian-blue-light to-white overflow-hidden">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-right leading-tight mb-4 text-gray-900">
              <span className="text-persian-blue">مهارت‌های</span> مدیریت و مربیگری را آنلاین بیاموزید
            </h1>
            <p className="text-lg md:text-xl text-right text-gray-700 mb-8">
              دوره‌های آنلاین با کیفیت با مدرسین برتر در زمینه‌های مدیریت کسب و کار، رهبری تیم، مربیگری و توسعه فردی
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Link to="/courses">
                <Button size="lg" className="bg-persian-blue hover:bg-persian-blue-dark text-white font-bold py-3 px-8 rounded-lg">
                  مشاهده دوره‌ها
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-persian-blue text-persian-blue hover:bg-persian-blue-light font-bold py-3 px-8 rounded-lg">
                  درباره ما
                </Button>
              </Link>
            </div>
            
            <div className="mt-10 flex items-center justify-start">
              <div className="flex -space-x-4 space-x-reverse">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/women/23.jpg"
                  alt="کاربر"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/men/54.jpg"
                  alt="کاربر"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/women/42.jpg"
                  alt="کاربر"
                />
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-persian-blue-light text-persian-blue text-xs font-bold">
                  +۹۹۹
                </div>
              </div>
              <p className="mr-3 text-sm text-gray-600">
                بیش از <span className="font-bold text-persian-blue">۱۰۰۰</span> دانشجو به ما اعتماد کرده‌اند
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-persian-teal rounded-2xl opacity-20 transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                alt="آموزش آنلاین"
                className="relative z-10 rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg z-20 border border-gray-100">
                <div className="flex items-center space-x-reverse space-x-2">
                  <div className="h-10 w-10 rounded-full bg-persian-gold flex items-center justify-center text-white font-bold">
                    ۱۰۰
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">بیش از</p>
                    <p className="text-sm font-bold text-gray-800">۱۰۰ دوره آموزشی</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
