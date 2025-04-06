
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, rememberMe: checked }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send the data to your backend
    // For now, we'll just simulate a submission with a timeout
    setTimeout(() => {
      toast.success("ورود موفقیت‌آمیز", {
        description: "در حال انتقال به صفحه داشبورد...",
      });
      setIsSubmitting(false);
      // Redirect to dashboard or homepage after successful login
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            ورود به حساب کاربری
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            یا{" "}
            <Link
              to="/register"
              className="font-medium text-persian-blue hover:text-persian-blue-dark"
            >
              ثبت‌نام کنید
            </Link>
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2 text-right">
              <Label htmlFor="email" className="text-right block">
                ایمیل
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="text-right"
                placeholder="ایمیل خود را وارد کنید"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2 text-right">
              <div className="flex items-center justify-between">
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-persian-blue hover:text-persian-blue-dark"
                >
                  فراموشی رمز عبور؟
                </Link>
                <Label htmlFor="password" className="text-right block">
                  رمز عبور
                </Label>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="text-right"
                placeholder="رمز عبور خود را وارد کنید"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-end">
              <Label
                htmlFor="remember-me"
                className="mr-2 text-sm text-gray-600"
              >
                مرا به خاطر بسپار
              </Label>
              <Checkbox
                id="remember-me"
                checked={formData.rememberMe}
                onCheckedChange={handleCheckboxChange}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-persian-blue hover:bg-persian-blue-dark"
              disabled={isSubmitting}
            >
              {isSubmitting ? "در حال ورود..." : "ورود"}
            </Button>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                ورود با
              </p>
              <div className="flex items-center justify-center space-x-4 mt-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-gray-300"
                >
                  <svg
                    className="w-5 h-5 ml-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    />
                  </svg>
                  گوگل
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-gray-300"
                >
                  <svg
                    className="w-5 h-5 ml-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0-.202-.002-.396-.09-.527-.243l.03-.03.01-.01c0-.005-.003-.009-.003-.009l.018-.018 2.66-2.573-3.958-1.787c-.86-.345-.864-1.23.032-1.635l15.32-5.933c.75-.324 1.228.17.975.975z"/>
                  </svg>
                  تلگرام
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
