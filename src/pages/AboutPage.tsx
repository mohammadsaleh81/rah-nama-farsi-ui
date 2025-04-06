
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-persian-blue-light py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-right mb-6 text-gray-900">
                درباره <span className="text-persian-blue">راه‌نما</span>
              </h1>
              <p className="text-lg text-right text-gray-700 leading-relaxed mb-8">
                راه‌نما یک پلتفرم آموزشی آنلاین است که با هدف ارتقای سطح دانش و
                مهارت‌های مدیریتی و رهبری در ایران تأسیس شده است. ما به افراد و
                سازمان‌ها کمک می‌کنیم تا با استفاده از آموزش‌های کاربردی و با
                کیفیت، به اهداف خود در زمینه‌های مختلف کسب و کار دست یابند.
              </p>
              <div className="flex flex-wrap gap-4 justify-start">
                <Link to="/courses">
                  <Button
                    size="lg"
                    className="bg-persian-blue hover:bg-persian-blue-dark text-white"
                  >
                    مشاهده دوره‌ها
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-persian-blue text-persian-blue hover:bg-persian-blue-light"
                  >
                    تماس با ما
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-persian-teal rounded-2xl opacity-20 transform -rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="تیم راه‌نما"
                  className="relative z-10 rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="section-title">مأموریت ما</h2>
              <p className="text-gray-700 leading-relaxed text-right">
                مأموریت ما در راه‌نما، ارائه آموزش‌های با کیفیت، کاربردی و به
                روز در زمینه‌های مدیریت و رهبری است. ما می‌خواهیم با استفاده از
                تجربیات و دانش متخصصان برجسته، به افراد کمک کنیم تا
                استعدادهایشان را شکوفا کنند و به رهبران و مدیران موفق تبدیل
                شوند. ما معتقدیم آموزش با کیفیت باید برای همه قابل دسترس باشد و
                تلاش می‌کنیم این هدف را محقق سازیم.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="section-title">چشم‌انداز ما</h2>
              <p className="text-gray-700 leading-relaxed text-right">
                چشم‌انداز ما تبدیل شدن به برترین پلتفرم آموزش آنلاین در زمینه
                مدیریت و رهبری در خاورمیانه است. ما می‌خواهیم با ایجاد یک
                اکوسیستم آموزشی نوآورانه، به افراد کمک کنیم تا مهارت‌های خود را
                توسعه دهند و در مسیر موفقیت حرفه‌ای گام بردارند. هدف ما این است
                که تا سال ۱۴۱۰، بیش از ۱۰۰,۰۰۰ مدیر و رهبر موفق را آموزش دهیم و
                به جامعه معرفی کنیم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">تیم ما</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="دکتر محمد احمدی"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-right">
                  دکتر محمد احمدی
                </h3>
                <p className="text-persian-blue mb-3 text-right">
                  مدیر عامل و بنیان‌گذار
                </p>
                <p className="text-gray-600 text-right">
                  دکتر احمدی دارای دکترای مدیریت منابع انسانی از دانشگاه تهران و
                  بیش از ۱۵ سال تجربه در زمینه مشاوره سازمانی و مدیریت منابع
                  انسانی است.
                </p>
                <div className="flex justify-end mt-4 space-x-4 space-x-reverse">
                  <a href="#" className="text-gray-500 hover:text-persian-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-persian-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="مهندس سارا کریمی"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-right">
                  مهندس سارا کریمی
                </h3>
                <p className="text-persian-blue mb-3 text-right">
                  مدیر آموزش و توسعه محتوا
                </p>
                <p className="text-gray-600 text-right">
                  خانم کریمی دارای کارشناسی ارشد مدیریت آموزشی از دانشگاه شیراز و
                  متخصص در زمینه طراحی و توسعه محتوای آموزشی آنلاین است.
                </p>
                <div className="flex justify-end mt-4 space-x-4 space-x-reverse">
                  <a href="#" className="text-gray-500 hover:text-persian-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-persian-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/men/54.jpg"
                alt="دکتر علی محمدی"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-right">
                  دکتر علی محمدی
                </h3>
                <p className="text-persian-blue mb-3 text-right">
                  مدیر تکنولوژی و زیرساخت
                </p>
                <p className="text-gray-600 text-right">
                  دکتر محمدی دارای دکترای مهندسی کامپیوتر از دانشگاه صنعتی شریف و
                  بیش از ۱۰ سال سابقه در طراحی و پیاده‌سازی سیستم‌های آموزش
                  آنلاین است.
                </p>
                <div className="flex justify-end mt-4 space-x-4 space-x-reverse">
                  <a href="#" className="text-gray-500 hover:text-persian-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-persian-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">
            ارزش‌های ما
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-persian-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-persian-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">کیفیت</h3>
              <p className="text-gray-600">
                ما به ارائه آموزش‌های با کیفیت و استاندارد متعهد هستیم و همواره
                از بهترین اساتید و محتوای آموزشی استفاده می‌کنیم.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-persian-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-persian-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">نوآوری</h3>
              <p className="text-gray-600">
                ما همواره به دنبال نوآوری در شیوه‌های آموزشی و استفاده از
                فناوری‌های جدید برای بهبود تجربه یادگیری هستیم.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-persian-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-persian-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">همکاری</h3>
              <p className="text-gray-600">
                ما به همکاری و مشارکت با دانشجویان، اساتید و سایر ذینفعان اعتقاد
                داریم و از نظرات آن‌ها برای بهبود خدمات استفاده می‌کنیم.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-persian-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-persian-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">پیشرفت مداوم</h3>
              <p className="text-gray-600">
                ما به بهبود مستمر خود و خدماتی که ارائه می‌دهیم متعهد هستیم و
                همواره به دنبال یادگیری و رشد هستیم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-persian-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">+۵۰</div>
              <p className="text-white/80">دوره آموزشی</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">+۲۰</div>
              <p className="text-white/80">مدرس برجسته</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">+۱۰,۰۰۰</div>
              <p className="text-white/80">دانشجو</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">۹۸٪</div>
              <p className="text-white/80">رضایت دانشجویان</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-right mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                آماده یادگیری هستید؟
              </h2>
              <p className="text-gray-600 mb-6 md:mb-0 max-w-lg">
                همین امروز به جمع بیش از ۱۰,۰۰۰ دانشجوی راه‌نما بپیوندید و
                مهارت‌های خود را به سطح بالاتری ارتقا دهید.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <Button
                  size="lg"
                  className="bg-persian-blue hover:bg-persian-blue-dark text-white whitespace-nowrap"
                >
                  مشاهده دوره‌ها
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-persian-blue text-persian-blue hover:bg-persian-blue-light whitespace-nowrap"
                >
                  ثبت‌نام رایگان
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
