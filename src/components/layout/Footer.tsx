
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">راه‌نما</h3>
            <p className="text-gray-300 mb-4">
              آموزش آنلاین دوره‌های مدیریت و مربیگری با بهترین اساتید ایران
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-white hover:text-persian-gold">
                <span className="sr-only">اینستاگرام</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.636 1.772 1.136.5.5.886 1.104 1.136 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.136 1.772 4.902 4.902 0 01-1.772 1.136c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.136 4.902 4.902 0 01-1.136-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.136-1.772A4.902 4.902 0 014.51 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-persian-gold">
                <span className="sr-only">تلگرام</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2a10 10 0 110 20 10 10 0 010-20zm2.894 14.567l.068-3.72c0-.404-.16-.57-.425-.356l-1.19.946s-1.616 1.496-1.872 1.765c-.128.134-.278.148-.278.148-.139 0-.199-.118-.199-.118s-.917-1.92-.917-1.92l1.526-4.5c.323-.947.651-1.785.651-1.785.304-.814.385-.927 1.029-.927h.03c.764 0 .727.508.527 1.216 0 0-.189.584-.652 1.957l-.867 2.293c-.118.292-.04.446.3.446.178 0 .394-.118.611-.266l.533-.355c.136-.086.256-.18.345-.267.266-.266.345-.532.315-.887l-.167-2.804c-.03-.828-.167-1.057-.167-1.057-.177-.325-.523-.443-.897-.443H12.7c-.079 0-.158 0-.217.029-.355.89.266.356.266.356.365.148.65.267.739 1.006.05.355.119 1.302.119 1.302l-.04 2.114c-.02.433-.365.65-.906.177l-.246-.219c-.848-.764-1.209-1.054-1.636-1.776-.158-.266-.365-.75-.523-1.114-.256-.603-.424-.725-.681-.725h-.03c-.326 0-.514.236-.365.708 0 0 1.123 3.516 2.777 5.953.65.956 1.546 1.506 2.363 1.506 1.3 0 1.755-.236 1.755-1.114v-.503z"
                  />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-persian-gold">
                <span className="sr-only">لینکدین</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">لینک‌های سریع</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white">
                  دوره‌ها
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">
                  وبلاگ
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white">
                  سوالات متداول
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 space-x-reverse">
                <span className="text-persian-gold mt-1">•</span>
                <span className="text-gray-300">
                  تهران، خیابان ولیعصر، خیابان بزرگمهر، پلاک ۱۶
                </span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <span className="text-persian-gold">•</span>
                <span className="text-gray-300" dir="ltr">
                  ۰۲۱-۸۸۷۶۵۴۳۲
                </span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <span className="text-persian-gold">•</span>
                <span className="text-gray-300">info@rahnama-farsi.com</span>
              </li>
              <li className="flex items-center space-x-2 space-x-reverse">
                <span className="text-persian-gold">•</span>
                <span className="text-gray-300">
                  شنبه تا چهارشنبه: ۹ صبح تا ۵ عصر
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">خبرنامه</h3>
            <p className="text-gray-300 mb-4">
              برای اطلاع از آخرین دوره‌ها و تخفیف‌های ویژه در خبرنامه ما عضو شوید.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="bg-gray-800 border border-gray-700 rounded p-2 text-white"
                required
              />
              <button
                type="submit"
                className="bg-persian-gold text-white py-2 px-4 rounded hover:bg-opacity-90 transition"
              >
                عضویت
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>کلیه حقوق این وب‌سایت متعلق به راه‌نما می‌باشد © ۱۴۰۳</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
