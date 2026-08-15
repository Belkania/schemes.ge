'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials({ lang }: { lang: string }) {
  const t = {
    ka: {
      title: 'რას ამბობენ ჩვენზე',
      subtitle: 'ჩვენი კლიენტების შეფასებები',
      reviews: [
        {
          name: 'გიორგი მაისურაძე',
          company: 'სამშენებლო კომპანია "ბილდერი"',
          text: 'ძალიან კმაყოფილი ვარ გაწეული მომსახურებით. საგზაო მოძრაობის სქემა უმოკლეს ვადაში დაგვიმზადეს და მერიასთან შეთანხმებაც უპრობლემოდ მოხდა. ნამდვილი პროფესიონალები არიან.',
          rating: 5,
        },
        {
          name: 'თამარ ბერიძე',
          company: 'ღონისძიებების სააგენტო',
          text: 'გვესაჭიროებოდა დროებითი სქემა ღონისძიებისთვის. ყველაფერი უმაღლეს დონეზე, სტანდარტების სრული დაცვით შეასრულეს. აუცილებლად გავაგრძელებთ თანამშრომლობას.',
          rating: 5,
        },
        {
          name: 'დავით კობახიძე',
          company: 'ლოჯისტიკური კომპანია',
          text: 'ჩვენი ბიზნესისთვის კრიტიკულად მნიშვნელოვანი იყო სატრანსპორტო სქემის სწრაფი შეთანხმება. Sqemebi.ge-მ მოლოდინს გადააჭარბა. რეკომენდაციას ვუწევ ყველას!',
          rating: 5,
        }
      ]
    },
    en: {
      title: 'What They Say About Us',
      subtitle: 'Client Testimonials',
      reviews: [
        {
          name: 'Giorgi Maisuradze',
          company: 'Construction Company "Builder"',
          text: 'Very satisfied with the service. They prepared the traffic scheme in the shortest time and the approval with the City Hall went smoothly. True professionals.',
          rating: 5,
        },
        {
          name: 'Tamar Beridze',
          company: 'Event Agency',
          text: 'We needed a temporary scheme for an event. Everything was done at the highest level, fully complying with standards. Will definitely continue cooperating.',
          rating: 5,
        },
        {
          name: 'David Kobakhidze',
          company: 'Logistics Company',
          text: 'A fast approval of the transport scheme was critical for our business. Sqemebi.ge exceeded expectations. Highly recommend!',
          rating: 5,
        }
      ]
    },
    ru: {
      title: 'Что о нас говорят',
      subtitle: 'Отзывы клиентов',
      reviews: [
        {
          name: 'Гиорги Майсурадзе',
          company: 'Строительная компания',
          text: 'Очень доволен оказанной услугой. Дорожную схему подготовили в кратчайшие сроки, согласование с мэрией прошло без проблем. Настоящие профессионалы.',
          rating: 5,
        },
        {
          name: 'Тамар Беридзе',
          company: 'Ивент-агентство',
          text: 'Нам нужна была временная схема для мероприятия. Все выполнено на высшем уровне с полным соблюдением стандартов. Обязательно продолжим сотрудничество.',
          rating: 5,
        },
        {
          name: 'Давид Кобахидзе',
          company: 'Логистическая компания',
          text: 'Для нашего бизнеса было критически важно быстрое согласование транспортной схемы. Sqemebi.ge превзошли все ожидания. Рекомендую!',
          rating: 5,
        }
      ]
    }
  };

  const current = t[lang as keyof typeof t] || t.ka;

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--color-primary)] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-2 block">{current.subtitle}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">{current.title}</h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {current.reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 group-hover:text-amber-50 transition-colors -z-0" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 flex-grow italic">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">{review.name}</h4>
                    <span className="text-xs sm:text-sm text-gray-500">{review.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
