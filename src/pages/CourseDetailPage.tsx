
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarIcon } from "@/components/ui/StarIcon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const courseData = {
  id: 1,
  title: "رهبری تیم‌های کاری موفق",
  description: "اصول رهبری مدرن و مدیریت تیم‌ها در محیط کسب و کار امروزی",
  longDescription:
    "این دوره جامع رهبری تیم، به شما کمک می‌کند تا اصول و مهارت‌های لازم برای هدایت موفق تیم‌های کاری را بیاموزید. از تکنیک‌های انگیزشی تا مدیریت تعارض‌ها و استراتژی‌های ارتباطی مؤثر، همه مباحث مورد نیاز برای تبدیل شدن به یک رهبر الهام‌بخش در این دوره گنجانده شده است. مدرس این دوره دکتر محمد احمدی با بیش از ۱۵ سال تجربه در زمینه مشاوره سازمانی و مدیریت منابع انسانی، به شما خواهد آموخت که چگونه یک تیم منسجم و پرانگیزه ایجاد کنید که بتواند به اهداف سازمانی دست یابد.",
  image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  instructor: "دکتر محمد احمدی",
  instructorTitle: "دکترای مدیریت منابع انسانی، مشاور ارشد سازمانی",
  instructorImage: "https://randomuser.me/api/portraits/men/32.jpg",
  instructorBio:
    "دکتر محمد احمدی دارای دکترای مدیریت منابع انسانی از دانشگاه تهران و بیش از ۱۵ سال تجربه در زمینه مشاوره سازمانی و مدیریت منابع انسانی است. ایشان تاکنون با بیش از ۵۰ سازمان و شرکت بزرگ همکاری داشته و دوره‌های آموزشی متعددی را در حوزه مدیریت و رهبری برگزار کرده است.",
  price: "۱,۸۹۰,۰۰۰",
  originalPrice: "۲,۵۰۰,۰۰۰",
  discount: "۲۵٪",
  lessons: 24,
  studentsCount: 1245,
  level: "پیشرفته",
  duration: "۱۸ ساعت",
  lastUpdate: "۱۴۰۲/۰۸/۱۵",
  category: "مدیریت",
  language: "فارسی",
  certificates: ["گواهی پایان دوره", "گواهی مهارت حرفه‌ای رهبری تیم"],
  highlights: [
    "آشنایی با اصول رهبری مدرن و کاربرد آن در محیط کار",
    "تکنیک‌های پیشرفته ارتباط مؤثر با اعضای تیم",
    "مدیریت تعارض و حل اختلافات درون تیمی",
    "ایجاد انگیزه و تعهد در اعضای تیم",
    "تدوین و پیاده‌سازی برنامه توسعه فردی برای اعضای تیم",
  ],
  curriculum: [
    {
      title: "مقدمه و آشنایی با اصول رهبری",
      lessons: [
        { title: "تعریف رهبری و تفاوت آن با مدیریت", duration: "۴۵ دقیقه" },
        { title: "ویژگی‌های یک رهبر موفق", duration: "۶۰ دقیقه" },
        { title: "سبک‌های مختلف رهبری و کاربرد آن‌ها", duration: "۵۰ دقیقه" },
      ],
    },
    {
      title: "مهارت‌های ارتباطی در رهبری تیم",
      lessons: [
        { title: "اصول ارتباط مؤثر", duration: "۵۵ دقیقه" },
        { title: "گوش دادن فعال", duration: "۴۵ دقیقه" },
        { title: "ارائه بازخورد سازنده", duration: "۶۰ دقیقه" },
        { title: "تکنیک‌های مذاکره و متقاعدسازی", duration: "۷۰ دقیقه" },
      ],
    },
    {
      title: "مدیریت تعارض و حل مسئله",
      lessons: [
        { title: "شناسایی منابع تعارض در تیم", duration: "۵۰ دقیقه" },
        { title: "استراتژی‌های حل تعارض", duration: "۶۵ دقیقه" },
        { title: "تکنیک‌های حل مسئله گروهی", duration: "۵۵ دقیقه" },
      ],
    },
    {
      title: "توسعه و هدایت تیم",
      lessons: [
        { title: "ایجاد چشم‌انداز مشترک", duration: "۴۰ دقیقه" },
        { title: "هدف‌گذاری و برنامه‌ریزی تیمی", duration: "۶۰ دقیقه" },
        { title: "پرورش خلاقیت و نوآوری در تیم", duration: "۵۵ دقیقه" },
        { title: "ارزیابی عملکرد و توسعه اعضای تیم", duration: "۶۵ دقیقه" },
      ],
    },
  ],
  reviews: [
    {
      id: 1,
      name: "علی کریمی",
      date: "۱۴۰۲/۰۷/۱۰",
      rating: 5,
      comment:
        "این دوره فوق‌العاده بود! من به عنوان مدیر یک تیم ۱۰ نفره، از تکنیک‌های آموخته شده در این دوره استفاده کردم و نتایج بسیار خوبی گرفتم. اعضای تیمم انگیزه بیشتری پیدا کرده‌اند و عملکرد کلی تیم بهبود یافته است.",
    },
    {
      id: 2,
      name: "مریم صادقی",
      date: "۱۴۰۲/۰۶/۲۵",
      rating: 4,
      comment:
        "محتوای دوره بسیار کاربردی و مفید بود. تمرین‌های عملی کمک زیادی به من کرد تا مفاهیم را بهتر درک کنم. تنها ایرادی که می‌توانم بگیرم، کمبود مثال‌های عملی از محیط‌های کاری ایران بود.",
    },
    {
      id: 3,
      name: "حسین محمدی",
      date: "۱۴۰۲/۰۵/۱۲",
      rating: 5,
      comment:
        "دکتر احمدی واقعاً استاد خوبی است و مفاهیم پیچیده را به زبان ساده توضیح می‌دهد. بعد از گذراندن این دوره، دید من نسبت به رهبری کاملاً تغییر کرد و الان احساس می‌کنم ابزارهای لازم برای هدایت تیمم را دارم.",
    },
  ],
};

const CourseDetailPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  // In a real app, you would fetch the course by id
  const course = courseData;

  return (
    <div className="bg-gray-50 py-10">
      <div className="container-custom">
        {/* Course Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="relative h-64 md:h-96">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            {course.discount && (
              <div className="absolute top-5 left-5 bg-red-600 text-white text-sm py-1 px-3 rounded">
                {course.discount} تخفیف
              </div>
            )}
          </div>

          <div className="p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-right">
              {course.title}
            </h1>

            <div className="flex items-center mb-6 text-right">
              <div className="flex items-center ml-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    filled={i < 4}
                    className={`${
                      i < 4 ? "text-persian-gold" : "text-gray-300"
                    } w-4 h-4`}
                  />
                ))}
                <span className="mr-2 text-gray-600">۴.۰</span>
              </div>
              <div className="text-gray-600 ml-6">
                <span>{course.studentsCount} دانشجو</span>
              </div>
              <div className="text-gray-600">
                <span>آخرین بروزرسانی: {course.lastUpdate}</span>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <img
                src={course.instructorImage}
                alt={course.instructor}
                className="w-12 h-12 rounded-full object-cover ml-3"
              />
              <div>
                <p className="font-medium">{course.instructor}</p>
                <p className="text-sm text-gray-500">{course.instructorTitle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Course Details */}
          <div className="md:col-span-2">
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="w-full grid grid-cols-4">
                <TabsTrigger value="overview">معرفی</TabsTrigger>
                <TabsTrigger value="curriculum">سرفصل‌ها</TabsTrigger>
                <TabsTrigger value="instructor">مدرس</TabsTrigger>
                <TabsTrigger value="reviews">نظرات</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4 text-right">معرفی دوره</h2>
                <p className="text-gray-700 mb-6 text-right leading-relaxed">
                  {course.longDescription}
                </p>

                <h3 className="text-lg font-bold mb-3 text-right">آنچه خواهید آموخت:</h3>
                <ul className="space-y-2 mb-6 text-right">
                  {course.highlights.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-persian-blue ml-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-right">جزئیات دوره</h4>
                    <ul className="space-y-2 text-right">
                      <li className="flex items-center justify-between text-gray-700">
                        <span>مدت زمان:</span>
                        <span>{course.duration}</span>
                      </li>
                      <li className="flex items-center justify-between text-gray-700">
                        <span>تعداد جلسات:</span>
                        <span>{course.lessons} جلسه</span>
                      </li>
                      <li className="flex items-center justify-between text-gray-700">
                        <span>سطح:</span>
                        <span>{course.level}</span>
                      </li>
                      <li className="flex items-center justify-between text-gray-700">
                        <span>زبان:</span>
                        <span>{course.language}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-right">مدارک و گواهی‌ها</h4>
                    <ul className="space-y-2 text-right">
                      {course.certificates.map((certificate, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <span className="text-persian-blue ml-2">•</span>
                          {certificate}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              {/* Curriculum Tab */}
              <TabsContent value="curriculum" className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6 text-right">سرفصل‌های دوره</h2>
                <div className="space-y-4">
                  {course.curriculum.map((section, sectionIndex) => (
                    <Accordion
                      key={sectionIndex}
                      type="single"
                      collapsible
                      className="border rounded-lg overflow-hidden"
                    >
                      <AccordionItem value={`section-${sectionIndex}`} className="border-0">
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-right">
                          <div>
                            <h3 className="font-medium">{section.title}</h3>
                            <p className="text-sm text-gray-500">
                              {section.lessons.length} جلسه
                            </p>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-3">
                          <ul className="space-y-2 text-right">
                            {section.lessons.map((lesson, lessonIndex) => (
                              <li
                                key={lessonIndex}
                                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                              >
                                <div className="flex items-center">
                                  <span className="ml-3 text-persian-blue">
                                    {sectionIndex + 1}.{lessonIndex + 1}
                                  </span>
                                  <span>{lesson.title}</span>
                                </div>
                                <span className="text-sm text-gray-500">
                                  {lesson.duration}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              </TabsContent>

              {/* Instructor Tab */}
              <TabsContent value="instructor" className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4 text-right">درباره مدرس</h2>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                  <img
                    src={course.instructorImage}
                    alt={course.instructor}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="text-right">
                    <h3 className="text-lg font-bold">{course.instructor}</h3>
                    <p className="text-gray-600 mb-2">{course.instructorTitle}</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          filled={i < 4}
                          className={`${
                            i < 4 ? "text-persian-gold" : "text-gray-300"
                          } w-4 h-4`}
                        />
                      ))}
                      <span className="mr-2 text-gray-600">۴.۷ امتیاز مدرس</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-right">
                  {course.instructorBio}
                </p>
              </TabsContent>

              {/* Reviews Tab */}
              <TabsContent value="reviews" className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6 text-right">نظرات دانشجویان</h2>

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        filled={i < 4}
                        className={`${
                          i < 4 ? "text-persian-gold" : "text-gray-300"
                        } w-6 h-6`}
                      />
                    ))}
                    <span className="text-xl font-bold">۴.۰</span>
                    <span className="text-gray-600">({course.reviews.length} نظر)</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {course.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="font-medium">{review.name}</div>
                          <div className="text-sm text-gray-500 mr-4">
                            {review.date}
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              filled={i < review.rating}
                              className={`${
                                i < review.rating
                                  ? "text-persian-gold"
                                  : "text-gray-300"
                              } w-4 h-4`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 text-right">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Pricing Card */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-persian-blue">
                      {course.price}
                    </span>
                    <span className="text-gray-600 mr-1">تومان</span>
                  </div>
                  {course.originalPrice && (
                    <span className="text-gray-500 line-through">
                      {course.originalPrice} تومان
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="text-sm flex items-center text-right text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 ml-2 text-persian-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>دسترسی کامل مادام‌العمر</span>
                </div>
                <div className="text-sm flex items-center text-right text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 ml-2 text-persian-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  <span>امکان دانلود ویدئوها</span>
                </div>
                <div className="text-sm flex items-center text-right text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 ml-2 text-persian-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>گواهی پایان دوره</span>
                </div>
                <div className="text-sm flex items-center text-right text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 ml-2 text-persian-blue"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                  </svg>
                  <span>پشتیبانی آنلاین</span>
                </div>
              </div>

              <Button className="w-full bg-persian-blue hover:bg-persian-blue-dark text-white py-3 text-lg font-bold mb-4">
                ثبت‌نام در دوره
              </Button>

              <p className="text-center text-sm text-gray-500 mb-6">
                ۷ روز ضمانت بازگشت وجه در صورت عدم رضایت
              </p>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-bold mb-2 text-right">این دوره را به اشتراک بگذارید:</h4>
                <div className="flex justify-center gap-4">
                  <button className="text-gray-600 hover:text-persian-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-persian-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"></path>
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-persian-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </button>
                  <button className="text-gray-600 hover:text-persian-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M24 11.7c0 6.45-5.27 11.68-11.78 11.68-2.07 0-4-.53-5.7-1.45L0 24l2.13-6.27a11.57 11.57 0 0 1-1.7-6.04C.44 5.23 5.72 0 12.23 0 18.72 0 24 5.23 24 11.7M12.22 1.85c-5.46 0-9.9 4.41-9.9 9.83 0 2.15.7 4.14 1.88 5.76L2.96 21.1l3.8-1.2a9.9 9.9 0 0 0 5.46 1.62c5.46 0 9.9-4.4 9.9-9.83a9.88 9.88 0 0 0-9.9-9.83m5.95 12.52c-.08-.12-.27-.19-.56-.33-.28-.14-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.29-.75.93-.91 1.12-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43a8.8 8.8 0 0 1-1.6-1.98c-.18-.29-.02-.44.12-.58.13-.13.29-.34.43-.5.15-.17.2-.3.29-.48.1-.2.05-.36-.02-.5-.08-.15-.65-1.56-.9-2.13-.24-.58-.48-.48-.64-.48-.17 0-.37-.03-.56-.03-.2 0-.5.08-.77.36-.26.29-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.96.14.19 2 3.17 4.93 4.32 2.94 1.15 2.94.77 3.47.72.53-.05 1.7-.7 1.95-1.36.24-.67.24-1.25.17-1.37"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
