
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import CourseCard from "@/components/courses/CourseCard";

// Featured courses data
const featuredCourses = [
  {
    id: 1,
    title: "رهبری تیم‌های کاری موفق",
    description: "اصول رهبری مدرن و مدیریت تیم‌ها در محیط کسب و کار امروزی",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    instructor: "دکتر محمد احمدی",
    price: "۱,۸۹۰,۰۰۰",
    lessons: 24,
    level: "پیشرفته",
    duration: "۱۸ ساعت"
  },
  {
    id: 2,
    title: "مربیگری حرفه‌ای کسب و کار",
    description: "تکنیک‌های عملی برای کوچینگ کسب و کار و همراهی موفق کارآفرینان",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    instructor: "مهندس سارا کریمی",
    price: "۲,۴۵۰,۰۰۰",
    lessons: 32,
    level: "متوسط",
    duration: "۲۴ ساعت"
  },
  {
    id: 3,
    title: "مدیریت استراتژیک سازمانی",
    description: "برنامه‌ریزی استراتژیک، تفکر سیستمی و مدیریت تحول سازمانی",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    instructor: "دکتر علی محمدی",
    price: "۱,۹۵۰,۰۰۰",
    lessons: 28,
    level: "پیشرفته",
    duration: "۲۰ ساعت"
  }
];

const FeaturedCourses = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h2 className="section-title">دوره‌های ویژه</h2>
            <p className="text-gray-600 mt-2 mb-6 md:mb-0">
              محبوب‌ترین دوره‌های ما که توسط مدرسین برتر ارائه شده‌اند
            </p>
          </div>
          <Link to="/courses">
            <Button variant="outline" className="border-persian-blue text-persian-blue hover:bg-persian-blue-light">
              مشاهده همه دوره‌ها
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
