
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "@/components/ui/StarIcon";

// Homepage components
import HeroSection from "@/components/home/HeroSection";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import Testimonials from "@/components/home/Testimonials";
import NewsletterSection from "@/components/home/NewsletterSection";
import FeatureSection from "@/components/home/FeatureSection";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCourses />
      <FeatureSection />
      <Testimonials />
      <NewsletterSection />
    </>
  );
};

export default Homepage;
