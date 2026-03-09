import { getDictionary } from '../../lib/dictionary';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, ShieldCheck, Building2 } from 'lucide-react';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 border-b-4 border-amber-500 text-white py-20 lg:py-32 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1574340321262-d48e8a6daea7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {dict.hero.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
              {dict.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${lang}/contact`}
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-md bg-[#facc15] text-gray-900 hover:bg-yellow-500 transition-colors"
              >
                {dict.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href={`/${lang}/services`}
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-md bg-slate-50/10 text-white hover:bg-slate-50/20 transition-colors border border-white/20"
              >
                {dict.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility / Why Choose Us Section */}
      <section className="py-16 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pb-16">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">ოფიციალური შეთანხმება</h3>
              <p className="text-gray-600">სრული იურიდიული მხარდაჭერა და შეთანხმება მერიასა და საპატრულო პოლიციასთან.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">პროფესიონალური მიდგომა</h3>
              <p className="text-gray-600">ISO სტანდარტების და ადგილობრივი რეგულაციების სრული დაცვით შექმნილი პროექტები.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">მთელი საქართველოს მასშტაბით</h3>
              <p className="text-gray-600">ვემსახურებით კლიენტებს თბილისში და რეგიონებში უმოკლეს ვადებში.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 shadow-[inset_0_4px_6px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{dict.navigation.services}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">გთავაზობთ საგზაო ინფრასტრუქტურის სრულ საპროექტო მომსახურებას.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "სატრანსპორტო ორგანიზების სქემების მომზადება",
              "დროებითი საგზაო სქემების მომზადება",
              "სამუშოების წარმოების აქტის შედგენა",
              "საგზაო სქემების შეთანხმება",
              "კონსულტაცია პროექტირების საკითხებში",
              "სამშენებლო ტექნიკის მოძრაობის სქემები"
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 border border-slate-200 transition-all duration-300 flex items-start group">
                <CheckCircle className="w-6 h-6 text-amber-500 mt-1 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-800 font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href={`/${lang}/services`}
              className="inline-flex items-center text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-dark)] transition-colors"
            >
              სრული სერვისების ნახვა <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
