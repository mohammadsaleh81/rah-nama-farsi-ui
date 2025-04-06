
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CourseProps {
  course: {
    id: number;
    title: string;
    description: string;
    image: string;
    instructor: string;
    price: string;
    lessons?: number;
    level?: string;
    duration?: string;
  };
}

const CourseCard = ({ course }: CourseProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-persian-gold text-white text-xs py-1 px-2 rounded">
          محبوب
        </div>
      </div>
      <CardContent className="pt-4">
        <h3 className="text-lg font-bold mb-2 text-right">
          <Link to={`/courses/${course.id}`} className="hover:text-persian-blue transition-colors">
            {course.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed text-right mb-4 line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <span className="ml-2">{course.duration}</span>
            <span className="bg-gray-200 mx-2 h-1 w-1 rounded-full"></span>
            <span>{course.level}</span>
          </div>
          <div className="flex items-center">
            <span>{course.lessons} جلسه</span>
          </div>
        </div>
        
        <div className="border-t pt-4 flex items-center justify-between">
          <div>
            <span className="font-bold text-persian-blue text-lg">
              {course.price}
            </span>
            <span className="text-gray-600 text-xs mr-1">تومان</span>
          </div>
          <div className="text-sm text-gray-600">
            مدرس: {course.instructor}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0 pb-4 px-6">
        <Link to={`/courses/${course.id}`} className="w-full">
          <Button variant="ghost" className="w-full border border-persian-blue text-persian-blue hover:bg-persian-blue-light">
            جزئیات بیشتر
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
