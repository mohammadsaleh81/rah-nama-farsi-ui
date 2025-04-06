
import React from "react";
import { Label } from "@/components/ui/label";

interface CourseFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
}

const CourseFilter = ({
  selectedCategory,
  setSelectedCategory,
  selectedLevel,
  setSelectedLevel,
}: CourseFilterProps) => {
  const categories = ["همه", "مدیریت", "مربیگری", "کسب و کار", "منابع انسانی", "مهارت‌های نرم"];
  const levels = ["همه", "مبتدی", "متوسط", "پیشرفته"];

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/2">
        <Label className="block mb-2 text-right">دسته‌بندی</Label>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`py-1.5 px-3 rounded-full text-sm ${
                selectedCategory === category
                  ? "bg-persian-blue text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <Label className="block mb-2 text-right">سطح</Label>
        <div className="flex flex-wrap gap-2">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`py-1.5 px-3 rounded-full text-sm ${
                selectedLevel === level
                  ? "bg-persian-blue text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseFilter;
