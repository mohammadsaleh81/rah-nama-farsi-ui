
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CourseCard from "@/components/courses/CourseCard";
import CourseFilter from "@/components/courses/CourseFilter";

// Courses data
const coursesData = [
  {
    id: 1,
    title: "رهبری تیم‌های کاری موفق",
    description: "اصول رهبری مدرن و مدیریت تیم‌ها در محیط کسب و کار امروزی",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    instructor: "دکتر محمد احمدی",
    price: "۱,۸۹۰,۰۰۰",
    lessons: 24,
    level: "پیشرفته",
    duration: "۱۸ ساعت",
    category: "مدیریت"
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
    duration: "۲۴ ساعت",
    category: "مربیگری"
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
    duration: "۲۰ ساعت",
    category: "مدیریت"
  },
  {
    id: 4,
    title: "آموزش کارآفرینی و راه‌اندازی کسب و کار",
    description: "از ایده تا اجرا: راهنمای جامع برای راه‌اندازی کسب و کار موفق",
    image: "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    instructor: "مهندس امیر رضایی",
    price: "۲,۱۵۰,۰۰۰",
    lessons: 35,
    level: "مبتدی تا متوسط",
    duration: "۲۸ ساعت",
    category: "کسب و کار"
  },
  {
    id: 5,
    title: "اصول مذاکره و متقاعدسازی",
    description: "تکنیک‌های پیشرفته مذاکره و متقاعدسازی در کسب و کار",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    instructor: "دکتر زهرا حسینی",
    price: "۱,۷۵۰,۰۰۰",
    lessons: 20,
    level: "متوسط",
    duration: "۱۵ ساعت",
    category: "مهارت‌های نرم"
  },
  {
    id: 6,
    title: "مدیریت منابع انسانی پیشرفته",
    description: "استراتژی‌های نوین مدیریت منابع انسانی در سازمان‌های امروزی",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    instructor: "دکتر مهدی اکبری",
    price: "۲,۲۵۰,۰۰۰",
    lessons: 30,
    level: "پیشرفته",
    duration: "۲۲ ساعت",
    category: "منابع انسانی"
  }
];

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [selectedLevel, setSelectedLevel] = useState("همه");

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title.includes(searchTerm) || 
                          course.description.includes(searchTerm) ||
                          course.instructor.includes(searchTerm);
                          
    const matchesCategory = selectedCategory === "همه" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "همه" || course.level.includes(selectedLevel);
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="bg-gray-50 py-10 min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">دوره‌های آموزشی</h1>
          <p className="text-gray-600">
            آخرین و برترین دوره‌های آموزشی در زمینه مدیریت و مربیگری
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="w-full">
              <Input
                type="text"
                placeholder="جستجوی دوره..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-right"
              />
            </div>
            <div className="flex-shrink-0">
              <Button className="w-full md:w-auto bg-persian-blue hover:bg-persian-blue-dark">
                جستجو
              </Button>
            </div>
          </div>
          
          <CourseFilter 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedLevel}
          />
        </div>

        {/* Course List */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <h3 className="text-xl font-medium mb-2">هیچ دوره‌ای یافت نشد</h3>
            <p className="text-gray-600">
              لطفاً معیارهای جستجو را تغییر دهید یا دوباره امتحان کنید.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
