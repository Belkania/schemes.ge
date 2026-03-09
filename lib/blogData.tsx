import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    keyword: string;
    description: string;
    content: React.ReactNode;
};

export const blogData: Record<string, Record<string, BlogPost>> = {
    ka: {
        'sagdzao-modzraobis-organizebis-sqema-ra-aris': {
            slug: 'sagdzao-modzraobis-organizebis-sqema-ra-aris',
            title: 'საგზაო მოძრაობის ორგანიზების სქემა – რა არის',
            date: '2024-03-09',
            keyword: 'საგზაო მოძრაობის სქემა',
            excerpt: 'გაიგეთ დეტალურად რა არის საგზაო მოძრაობის ორგანიზების სქემა, ვისთვის არის აუცილებელი და როგორ ხდება მისი შედგენა.',
            description: 'გაიგეთ დეტალურად რა არის საგზაო მოძრაობის ორგანიზების სქემა, ვისთვის არის აუცილებელი და როგორ ხდება მისი შედგენა.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        <strong>საგზაო მოძრაობის სქემა</strong> არის სპეციალური საინჟინრო-გეგმარებითი დოკუმენტი, რომელიც უზრუნველყოფს ტრანსპორტისა და ქვეითების უსაფრთხო გადაადგილებას კონკრეტულ ლოკაციაზე.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">რას მოიცავს მოძრაობის ორგანიზების სქემა?</h2>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">საგზაო ნიშნების განლაგებას და ტიპებს.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">სავალი ნაწილის მონიშვნებს (ხაზები, ზებრა გადასასვლელები).</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">შუქნიშნების, ბარიერების და უსაფრთხოების კუნძულების დეტალურ გეგმას.</span>
                        </li>
                    </ul>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        ნებისმიერი ახალი შენობის, პარკინგის ან გზის მშენებლობისას, <strong>სატრანსპორტო ორგანიზების სქემა</strong> წარმოადგენს ერთ-ერთ მთავარ დოკუმენტს, რომლის გარეშეც შეუძლებელია მუნიციპალიტეტისგან ნებართვის მიღება. ჩვენი გუნდი გთავაზობთ ამ სქემების პროფესიონალურ შედგენას და შეთანხმებას.
                    </p>
                </>
            )
        },
        'rogor-xdeba-modzraobis-sqemis-shetanxmeba': {
            slug: 'rogor-xdeba-modzraobis-sqemis-shetanxmeba',
            title: 'როგორ ხდება მოძრაობის სქემის შეთანხმება',
            date: '2024-03-05',
            keyword: 'მოძრაობის ორგანიზების სქემა',
            excerpt: 'თბილისის მერიასთან და საპატრულო პოლიციასთან მოძრაობის სქემის შეთანხმების ეტაპები და საჭირო პროცედურები.',
            description: 'თბილისის მერიასთან და საპატრულო პოლიციასთან მოძრაობის სქემის შეთანხმების ეტაპები და საჭირო პროცედურები.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        <strong>მოძრაობის სქემის შეთანხმება</strong> საკმაოდ რთული და მრავალეტაპიანი პროცესია, რომელიც მოითხოვს კანონმდებლობისა და უსაფრთხოების ნორმების ზედმიწევნით ცოდნას.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">შეთანხმების ძირითადი ეტაპები:</h2>
                    <div className="bg-white p-6 rounded-2xl mb-8 border border-slate-200 shadow-sm">
                        <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                            <li><strong>ტოპოგრაფიული გეგმის მომზადება:</strong> ტერიტორიის ზუსტი კვლევა.</li>
                            <li><strong>სატრანსპორტო ორგანიზების სქემების შედგენა:</strong> ნახაზების შექმნა საინჟინრო სტანდარტებით.</li>
                            <li><strong>თბილისის ტრანსპორტის სააგენტოში წარდგენა:</strong> სქემის პირველადი განხილვა მერიაში.</li>
                            <li><strong>საპატრულო პოლიციასთან შეთანხმება:</strong> უსაფრთხოების კუთხით დოკუმენტაციის ფინალური ვალიდაცია.</li>
                        </ol>
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        როგორც ხედავთ, <strong>საგზაო მოძრაობის ორგანიზების სქემა</strong> მოითხოვს სხვადასხვა სახელმწიფო უწყებასთან კომუნიკაციას. ჩვენი სერვისი მოიცავს ყველა ამ ეტაპის თქვენს მაგივრად გავლას, რაც ზოგავს თქვენს დროსა და რესურსებს.
                    </p>
                </>
            )
        },
        'droebiti-sagzao-sqemebi-samsheneblo-samushaoebistvis': {
            slug: 'droebiti-sagzao-sqemebi-samsheneblo-samushaoebistvis',
            title: 'დროებითი საგზაო სქემები სამშენებლო სამუშაოებისთვის',
            date: '2024-02-28',
            keyword: 'დროებითი საგზაო სქემა',
            excerpt: 'რატომ არის აუცილებელი დროებითი საგზაო სქემა მშენებლობისას და როგორ უზრუნველყოფს ის უსაფრთხოებას.',
            description: 'რატომ არის აუცილებელი დროებითი საგზაო სქემა მშენებლობისას და როგორ უზრუნველყოფს ის უსაფრთხოებას.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        როდესაც მიმდინარეობს მშენებლობა, გზის სარეაბილიტაციო სამუშაოები ან კომუნიკაციების (წყალი, გაზი) გაყვანა, აუცილებელია <strong>დროებითი საგზაო სქემა</strong>.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        ეს დოკუმენტი არეგულირებს, თუ როგორ უნდა იმოძრაონ ავტომობილებმა და ქვეითებმა უსაფრთხოდ ტერიტორიაზე სამუშაოების დასრულებამდე. <strong>დროებითი საგზაო სქემები</strong> შეიცავს ინფორმაციას შემოვლითი გზების, დროებითი ნიშნებისა და ბარიერების ზუსტი განლაგების შესახებ.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">რატომ არის ის სავალდებულო?</h2>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">თავიდან აცილებს საცობებს და მოძრაობის კოლაფსს.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">იცავს მუშებს და გამვლელებს საფრთხისგან.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">ჯარიმების არიდება - სქემის გარეშე მუშაობა კანონდარღვევაა.</span>
                        </li>
                    </ul>
                </>
            )
        },
        'ra-dokumentebia-sachiro-sapatrulo-policiastan-shetanxmebistvis': {
            slug: 'ra-dokumentebia-sachiro-sapatrulo-policiastan-shetanxmebistvis',
            title: 'რა დოკუმენტებია საჭირო საპატრულო პოლიციასთან შეთანხმებისთვის',
            date: '2024-02-15',
            keyword: 'სატრანსპორტო ორგანიზების სქემა',
            excerpt: 'სატრანსპორტო ორგანიზების სქემის დასამტკიცებლად საჭირო სრული დოკუმენტაციის სია და მოთხოვნები.',
            description: 'სატრანსპორტო ორგანიზების სქემის დასამტკიცებლად საჭირო სრული დოკუმენტაციის სია და მოთხოვნები.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        საქართველოში ნებისმიერი <strong>სატრანსპორტო ორგანიზების სქემა</strong> ფინალურ ეტაპზე მოითხოვს საპატრულო პოლიციასთან შეთანხმებას. ეს პროცესი გულისხმობს დეტალური პაკეტის მომზადებას.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">საჭირო დოკუმენტაციის სია:</h2>
                    <div className="bg-white p-6 rounded-2xl mb-8 border border-slate-200 shadow-sm">
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mr-3"></div>
                                ოფიციალური განცხადება დეპარტამენტის სახელზე.
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mr-3"></div>
                                A3 ფორმატზე ამობეჭდილი <strong>საგზაო მოძრაობის სქემა</strong> (დამოწმებული ექსპერტის მიერ).
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mr-3"></div>
                                განმარტებითი ბარათი (ტექნიკური აღწერა).
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mr-3"></div>
                                ტრანსპორტის სააგენტოს (ან ადგილობრივი მუნიციპალიტეტის) წინასწარი თანხმობა.
                            </li>
                        </ul>
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        მოთხოვნები ხშირად იცვლება სპეციფიკური პროექტებიდან გამომდინარე (მაგალითად, დიდი გაბარიტების ტექნიკის გადაადგილებისას <strong>დროებითი საგზაო სქემა</strong>). სანდო პარტნიორის არჩევა უზრუნველყოფს ამ პროცესის შეუფერხებლად გავლას.
                    </p>
                </>
            )
        }
    },
    en: {
        'sagdzao-modzraobis-organizebis-sqema-ra-aris': {
            slug: 'sagdzao-modzraobis-organizebis-sqema-ra-aris',
            title: 'What is a Traffic Organization Scheme?',
            date: '2024-03-09',
            keyword: 'Traffic Scheme',
            excerpt: 'Learn exactly what a traffic organization scheme involves, who needs it, and how it is drafted.',
            description: 'Learn exactly what a traffic organization scheme involves, who needs it, and how it is drafted.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        A <strong>traffic scheme</strong> is a specialized engineering document that ensures the safe movement of vehicles and pedestrians at a specific location.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What does it include?</h2>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Detailed placement and type of traffic signs.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Road markings (lines, zebra crossings).</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Layout of traffic lights, barriers, and safety islands.</span>
                        </li>
                    </ul>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        For any new building, parking, or road construction, the <strong>traffic organization scheme</strong> is a primary document without which a municipal permit is impossible.
                    </p>
                </>
            )
        },
        'rogor-xdeba-modzraobis-sqemis-shetanxmeba': {
            slug: 'rogor-xdeba-modzraobis-sqemis-shetanxmeba',
            title: 'How to Approve a Traffic Scheme',
            date: '2024-03-05',
            keyword: 'Scheme Approval',
            excerpt: 'The phases and necessary procedures to approve traffic schemes with the Patrol Police and Municipal City Hall.',
            description: 'The phases and necessary procedures to approve traffic schemes with the Patrol Police and Municipal City Hall.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        <strong>Traffic scheme approval</strong> is a complex, multi-stage process requiring a deep understanding of local laws and safety standards.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Main stages of agreement:</h2>
                    <div className="bg-white p-6 rounded-2xl mb-8 border border-slate-200 shadow-sm">
                        <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                            <li><strong>Topographical mapping:</strong> Precise territory research.</li>
                            <li><strong>Drafting the scheme:</strong> Creating CAD drawings with engineering standards.</li>
                            <li><strong>Tbilisi Transport Agency Submission:</strong> Preliminary review at the municipality.</li>
                            <li><strong>Patrol Police Approval:</strong> Final validation for traffic safety.</li>
                        </ol>
                    </div>
                </>
            )
        },
        'droebiti-sagzao-sqemebi-samsheneblo-samushaoebistvis': {
            slug: 'droebiti-sagzao-sqemebi-samsheneblo-samushaoebistvis',
            title: 'Temporary Traffic Schemes for Construction Work',
            date: '2024-02-28',
            keyword: 'Temporary Schemes',
            excerpt: 'Why temporary road schemes are essential during construction and how they ensure safety.',
            description: 'Why temporary road schemes are essential during construction and how they ensure safety.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        When construction, road rehabilitation, or communication (water, gas) laying is underway, a <strong>temporary traffic scheme</strong> is mandatory.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        This document regulates how cars and pedestrians move safely until work is completed.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why is it mandatory?</h2>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Prevents traffic jams and collapse.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Protects workers and passers-by from danger.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Avoids heavy penalties and fines.</span>
                        </li>
                    </ul>
                </>
            )
        },
        'ra-dokumentebia-sachiro-sapatrulo-policiastan-shetanxmebistvis': {
            slug: 'ra-dokumentebia-sachiro-sapatrulo-policiastan-shetanxmebistvis',
            title: 'Required Documents for Patrol Police Agreement',
            date: '2024-02-15',
            keyword: 'Documentation',
            excerpt: 'The full roster of documentation and requirements needed to approve a traffic scheme.',
            description: 'The full roster of documentation and requirements needed to approve a traffic scheme.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        In Georgia, any <strong>transport organization scheme</strong> requires an agreement with the Patrol Police at the final stage.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">List of Required Documents:</h2>
                    <div className="bg-white p-6 rounded-2xl mb-8 border border-slate-200 shadow-sm">
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mr-3"></div>
                                Official application to the department.
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mr-3"></div>
                                A3 formatted printed scheme (certified by an authorized expert).
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mr-3"></div>
                                Explanatory Note (incorporating Technical description).
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mr-3"></div>
                                Preliminary consent of the Transport Agency (or local municipality).
                            </li>
                        </ul>
                    </div>
                </>
            )
        }
    },
    ru: {
        'sagdzao-modzraobis-organizebis-sqema-ra-aris': {
            slug: 'sagdzao-modzraobis-organizebis-sqema-ra-aris',
            title: 'Что такое схема организации дорожного движения?',
            date: '2024-03-09',
            keyword: 'Дорожная схема',
            excerpt: 'Узнайте подробно, что представляет собой схема организации дорожного движения и для кого она обязательна.',
            description: 'Узнайте подробно, что представляет собой схема организации дорожного движения и для кого она обязательна.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        <strong>Дорожная схема</strong> — это специальный инженерно-планировочный документ, обеспечивающий безопасное движение транспорта и пешеходов.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Что включает проработка схемы?</h2>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Размещение и типы дорожных знаков.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Дорожную разметку (линии, пешеходные переходы).</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Расположение светофоров, барьеров и островков безопасности.</span>
                        </li>
                    </ul>
                </>
            )
        },
        'rogor-xdeba-modzraobis-sqemis-shetanxmeba': {
            slug: 'rogor-xdeba-modzraobis-sqemis-shetanxmeba',
            title: 'Как происходит согласование схемы движения',
            date: '2024-03-05',
            keyword: 'Согласование схемы',
            excerpt: 'Этапы согласования схемы движения с Мэрией Тбилиси и Патрульной полицией, а также необходимые процедуры.',
            description: 'Этапы согласования схемы движения с Мэрией Тбилиси и Патрульной полицией, а также необходимые процедуры.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        <strong>Согласование дорожной схемы</strong> — это сложный и многоэтапный процесс, требующий знания законодательства.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Основные этапы согласования:</h2>
                    <div className="bg-white p-6 rounded-2xl mb-8 border border-slate-200 shadow-sm">
                        <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                            <li><strong>Подготовка топографического плана:</strong> Точное исследование территории.</li>
                            <li><strong>Составление схем организации транспорта:</strong> Создание чертежей по инженерным стандартам.</li>
                            <li><strong>Подача в Транспортное агентство:</strong> Первичное рассмотрение в мэрии.</li>
                            <li><strong>Согласование с Патрульной полицией:</strong> Финальная валидация с точки зрения безопасности.</li>
                        </ol>
                    </div>
                </>
            )
        },
        'droebiti-sagzao-sqemebi-samsheneblo-samushaoebistvis': {
            slug: 'droebiti-sagzao-sqemebi-samsheneblo-samushaoebistvis',
            title: 'Временные дорожные схемы для строительных работ',
            date: '2024-02-28',
            keyword: 'Временная схема',
            excerpt: 'Почему при строительстве обязательна временная дорожная схема и как она обеспечивает безопасность.',
            description: 'Почему при строительстве обязательна временная дорожная схема и как она обеспечивает безопасность.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        При проведении строительных работ или прокладке коммуникаций <strong>временная дорожная схема</strong> обязательна.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Этот документ регулирует безопасное движение автомобилей и пешеходов до завершения работ.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Почему это обязательно?</h2>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Предотвращает пробки и транспортный коллапс.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Защищает рабочих и прохожих от опасностей.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Избежание штрафов — работа без схемы незаконна.</span>
                        </li>
                    </ul>
                </>
            )
        },
        'ra-dokumentebia-sachiro-sapatrulo-policiastan-shetanxmebistvis': {
            slug: 'ra-dokumentebia-sachiro-sapatrulo-policiastan-shetanxmebistvis',
            title: 'Какие документы нужны для согласования с Патрульной полицией',
            date: '2024-02-15',
            keyword: 'Полная Документация',
            excerpt: 'Список всей документации и требований, необходимых для утверждения схемы.',
            description: 'Список всей документации и требований, необходимых для утверждения схемы.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        В Грузии любая <strong>схема организации транспорта</strong> на финальном этапе требует согласования с Патрульной полицией.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Список необходимых документов:</h2>
                    <div className="bg-white p-6 rounded-2xl mb-8 border border-slate-200 shadow-sm">
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mr-3"></div>
                                Официальное заявление на имя департамента.
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mr-3"></div>
                                Распечатанная в формате A3 дорожная схема (заверенная экспертом).
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mr-3"></div>
                                Пояснительная записка (техническое описание).
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mr-3"></div>
                                Предварительное согласие Агентства транспорта (или муниципалитета).
                            </li>
                        </ul>
                    </div>
                </>
            )
        }
    }
};
