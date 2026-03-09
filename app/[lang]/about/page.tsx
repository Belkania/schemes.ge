import { getDictionary } from '../../../lib/dictionary';
import { Shield, BookOpen, UserCheck, CheckCircle2 } from 'lucide-react';

export default async function About({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    return (
        <div className="bg-slate-50 min-h-screen py-16 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{dict.navigation.about}</h1>
                    <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden mb-16 transition-all hover:shadow-2xl hover:shadow-slate-300/50">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-10 lg:p-16 flex flex-col justify-center">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">პროფესიონალიზმი და გამოცდილება</h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                ჩვენ ვართ სპეციალიზებული საინჟინრო გუნდი, რომელიც უზრუნველყოფს საგზაო მოძრაობისა და ტრანსპორტის ორგანიზების სქემების პროექტირებასა და შეთანხმებას საქართველოში.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                ჩვენი მიზანია უზრუნველვყოთ უსაფრთხო, კანონმდებლობასთან შესაბამისი და ეფექტური საგზაო ინფრასტრუქტურის დაგეგმარება როგორც დროებითი, ისე მუდმივი სამუშაოებისთვის.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center text-gray-800">
                                    <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] mr-3" />
                                    <span className="font-medium">სწრაფი და ეფექტური მომსახურება</span>
                                </div>
                                <div className="flex items-center text-gray-800">
                                    <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] mr-3" />
                                    <span className="font-medium">გამოცდილი საინჟინრო გუნდი</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-10 lg:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative inline-block">
                                ოფიციალური შეთანხმებები
                                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-amber-500 rounded"></span>
                            </h3>
                            <p className="text-gray-600 mb-8">
                                ყველა ჩვენი პროექტი გადის სრულ იურიდიულ და ტექნიკურ შეთანხმებას შესაბამის სახელმწიფო უწყებებთან:
                            </p>

                            <ul className="space-y-6">
                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-slate-100 transition-transform hover:-translate-y-1">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                                        <Shield className="w-6 h-6 text-amber-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">საპატრულო პოლიცია</h4>
                                        <p className="text-gray-500 text-sm mt-1">საქართველოს შინაგან საქმეთა სამინისტრო</p>
                                    </div>
                                </li>

                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-slate-100 transition-transform hover:-translate-y-1">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                                        <BookOpen className="w-6 h-6 text-amber-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">ტრანსპორტის სააგენტო</h4>
                                        <p className="text-gray-500 text-sm mt-1">თბილისის მუნიციპალიტეტის ტრანსპორტისა და ურბანული განვითარების სააგენტო</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
