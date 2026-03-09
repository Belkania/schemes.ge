import { getDictionary } from '../../../lib/dictionary';
import { Settings, ShieldAlert, FileText, CheckSquare, Lightbulb, Truck, Droplets, Droplet } from 'lucide-react';

export default async function Services({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    const services = [
        {
            title: 'სატრანსპორტო ორგანიზების სქემების მომზადება',
            icon: <Settings className="w-8 h-8 text-[var(--color-primary)]" />,
            desc: 'მუდმივი და დროებითი საგზაო მოძრაობის სრული დაგეგმარება და პროექტირება.'
        },
        {
            title: 'დროებითი საგზაო სქემების მომზადება',
            icon: <ShieldAlert className="w-8 h-8 text-[var(--color-primary)]" />,
            desc: 'სამშენებლო და სარეაბილიტაციო სამუშაოების დროს უსაფრთხოდ გადაადგილების სქემები.'
        },
        {
            title: 'სამუშოების წარმოების აქტის შედგენა',
            icon: <FileText className="w-8 h-8 text-[var(--color-primary)]" />,
            desc: 'ტექნიკური დოკუმენტაციის მომზადება მერიის მოთხოვნების შესაბამისად.'
        },
        {
            title: 'საგზაო სქემების შეთანხმება',
            icon: <CheckSquare className="w-8 h-8 text-[var(--color-primary)]" />,
            desc: 'ოფიციალური შეთანხმება საპატრულო პოლიციასთან და ტრანსპორტის სააგენტოსთან.'
        },
        {
            title: 'კონსულტაცია პროექტირების და ურბანული დაგეგმვის საკითხებში',
            icon: <Lightbulb className="w-8 h-8 text-[var(--color-primary)]" />,
            desc: 'რეკომენდაციები და პროფესიონალური საინჟინრო კონსულტაცია გაბარიტებისა და ნორმების დაცვით.'
        },
        {
            title: 'სამშენებლო ტექნიკის დროებითი მოძრაობის სქემები',
            icon: <Truck className="w-8 h-8 text-[var(--color-primary)]" />,
            desc: 'განსაკუთრებით დიდი ზომის ტექნიკისთვის მარშრუტის დაგეგმარება ქალაქის მასშტაბით.'
        },
        {
            title: 'წყალსადენის ქსელის მოწყობა',
            icon: <Droplet className="w-8 h-8 text-[var(--color-primary)]" />,
            desc: 'წყალსადენის ქსელის მოწყობისას გზის გადათხრის სქემები და ნებართვები.'
        },
        {
            title: 'წყალარინების ქსელის მოწყობა',
            icon: <Droplets className="w-8 h-8 text-[var(--color-primary)]" />,
            desc: 'კანალიზაციის ქსელის სარეაბილიტაციო სამუშაოების საგზაო უზრუნველყოფა.'
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-16 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{dict.navigation.services}</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
                        პროფესიონალური მომსახურება, რომელიც მოიცავს ყველა სახის საგზაო-სატრანსპორტო პროექტირებასა და შეთანხმებას.
                    </p>
                    <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 group transition-all duration-300">
                            <div className="w-16 h-16 bg-blue-50 group-hover:bg-[var(--color-primary)] rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                                <div className="text-[var(--color-primary)] group-hover:text-emerald-400 mix-blend-luminosity">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">{service.title}</h3>
                            <p className="text-slate-600">{service.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white border-b-4 border-amber-500 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-[var(--color-primary-dark)] rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-amber-500 rounded-full opacity-10 blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">გჭირდებათ პროექტის შეთანხმება?</h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            დაგვიკავშირდით და მიიღეთ სრული იურიდიული და ტექნიკური კონსულტაცია საპატრულო პოლიციასთან და თბილისის მუნიციპალიტეტის ტრანსპორტისა და ურბანული განვითარების სააგენტოსთან.
                        </p>
                        <a
                            href={`/${lang}/contact`}
                            className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-md bg-amber-500 text-slate-900 hover:bg-amber-400 hover:scale-105 transition-all shadow-lg"
                        >
                            {dict.hero.cta}
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
