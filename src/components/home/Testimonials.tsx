
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "@/components/ui/StarIcon";

const testimonials = [
  {
    id: 1,
    name: "سارا محمدی",
    role: "مدیر منابع انسانی",
    content:
      "دوره‌های راه نما کیفیت بسیار بالایی دارند. من توانستم مهارت‌های مدیریتی خود را به نحو چشمگیری بهبود ببخشم و در مسیر شغلی خود پیشرفت کنم.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "امیر رضایی",
    role: "مدیر عامل استارتاپ",
    content:
      "اساتید این دوره‌ها بسیار حرفه‌ای و با تجربه هستند. محتواهای آموزشی کاربردی و به روز است و واقعاً به من کمک کرد تا کسب و کارم را بهبود دهم.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "مینا صادقی",
    role: "مدیر بازاریابی",
    content:
      "ارزش زمان و هزینه‌ای که برای دوره‌های راه نما پرداخت کردم بسیار بیشتر از چیزی بود که انتظار داشتم. دانش و مهارت‌هایی که کسب کردم در پیشرفت حرفه‌ای من تأثیر زیادی داشت.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/53.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title">نظرات دانشجویان</h2>
        <p className="text-gray-600 mb-10">
          تجربه‌های واقعی دانشجویان ما از دوره‌های آموزشی راه نما
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      filled={i < testimonial.rating}
                      className={`${
                        i < testimonial.rating
                          ? "text-persian-gold"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 flex-grow text-right leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ml-3"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
