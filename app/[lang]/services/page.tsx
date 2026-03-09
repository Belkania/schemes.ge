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
        <div className="bg-[var(--color-background)] min-h-screen py-16">
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
                        <div key={idx} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-slate-50 rounded-lg shadow-sm flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600">{service.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-[var(--color-primary)] rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">გჭირდებათ პროექტის შეთანხმება?</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        დაგვიკავშირდით და მიიღეთ სრული იურიდიული და ტექნიკური კონსულტაცია საპატრულო პოლიციასთან და თბილისის მუნიციპალიტეტის ტრანსპორტისა და ურბანული განვითარების სააგენტოსთან.
                    </p>
                    <a
                        href={`/${lang}/contact`}
                        className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-md bg-[#facc15] text-gray-900 hover:bg-yellow-500 transition-colors"
                    >
                        {dict.hero.cta}
                    </a>
                </div>

            </div>
        </div>
    );
}
