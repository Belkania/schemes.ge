import React from 'react';
import { CheckCircle2, HelpCircle, FileText, AlertTriangle, ShieldCheck, Clock } from 'lucide-react';
import Link from 'next/link';

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
        'sagzao-sqema-momzadeba-da-shetanxmeba': {
            slug: 'sagzao-sqema-momzadeba-da-shetanxmeba',
            title: 'საგზაო სქემა — მომზადება, შეთანხმება და მოთხოვნები საქართველოში',
            date: '2026-09-14',
            keyword: 'საგზაო სქემა',
            excerpt: 'საგზაო სქემა და საგზაო სქემები: რა არის, როდის არის სავალდებულო, როგორ ხდება მერიასა და საპატრულო პოლიციასთან შეთანხმება და რა დრო სჭირდება.',
            description: 'საგზაო სქემა წარმოადგენს ოფიციალურ დოკუმენტს მოძრაობის ორგანიზებისთვის. გაეცანით საგზაო სქემის მომზადების, შეთანხმების ეტაპებსა და მოთხოვნებს.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        <strong>საგზაო სქემა</strong> წარმოადგენს დეტალურ საინჟინრო-გეგმარებით დოკუმენტს, სადაც ასახულია საავტომობილო და ქვეითთა ნაკადების უსაფრთხო გადაადგილების სრული გეგმა, დროებითი თუ მუდმივი საგზაო ნიშნები, საგზაო მონიშვნები და უსაფრთხოების ბარიერები.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        საქართველოს მოქმედი კანონმდებლობით, ნებისმიერი სამშენებლო, სარეაბილიტაციო ან კომუნიკაციების გაყვანის სამუშაო, რომელიც გავლენას ახდენს გზის სავალ ნაწილზე ან ტროტუარზე, მოითხოვს ოფიციალურად დამტკიცებულ <strong>საგზაო სქემას</strong>.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">ვის და როდის სჭირდება საგზაო სქემა?</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        პრაქტიკაში <strong>საგზაო სქემები</strong> აუცილებელია შემდეგ შემთხვევებში:
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>სამშენებლო ობიექტებისთვის:</strong> სამშენებლო ღობის მოწყობა, სამშენებლო ტექნიკის (ამწეები, ბეტონმზიდები) განთავსება და ობიექტზე შესასვლელ-გამოსასვლელის რეგულირება.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>კომუნალური და ხაზოვანი ნაგებობებისთვის:</strong> წყალსადენის, კანალიზაციის, გაზსადენის ან ოპტიკურ-ბოჭკოვანი კაბელების გაყვანისას გზის გადათხრა.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>კომერციული ობიექტებისთვის:</strong> სავაჭრო ცენტრების, სასტუმროების, ბენზინგასამართი სადგურებისა და პარკინგების მიერთება საჯარო საგზაო ქსელთან.</span>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">საგზაო სქემების ძირითადი კატეგორიები</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                <Clock className="w-5 h-5 text-amber-500 mr-2" />
                                დროებითი საგზაო სქემა
                            </h3>
                            <p className="text-sm text-gray-600">
                                გამოიყენება სამუშაოების წარმოების პერიოდში. მოიცავს შემოვლით მარშრუტებს, სიჩქარის შეზღუდვას და დროებით ყვითელ მონიშვნებს.
                            </p>
                        </div>
                        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                                <ShieldCheck className="w-5 h-5 text-amber-500 mr-2" />
                                მუდმივი (დასრულებული) სქემა
                            </h3>
                            <p className="text-sm text-gray-600">
                                ობიექტის ექსპლუატაციაში მიღებისას. განსაზღვრავს მუდმივ საგზაო ნიშნებს, ზებრა გადასასვლელებსა და პარკირების ადგილებს.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">როგორ ხდება საგზაო სქემის შეთანხმება?</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>საგზაო სქემის შეთანხმება</strong> გადის რამდენიმე სავალდებულო ოფიციალურ საფეხურს:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 mb-8 text-gray-700">
                        <li><strong>ტოპოგრაფიული გეგმის მომზადება:</strong> ტერიტორიის გეოდეზიური გადაღება არსებული გზის გეომეტრიის დასაფიქსირებლად.</li>
                        <li><strong>საგზაო სქემის საინჟინრო ნახაზი:</strong> AutoCAD-ში სტანდარტების დაცვით საგზაო ნიშნების, ბარიერებისა და მოძრაობის მიმართულებების დატანა.</li>
                        <li><strong>თბილისის მუნიციპალიტეტის ტრანსპორტის სააგენტოში წარდგენა:</strong> საპროექტო გადაწყვეტის შესაბამისობის შემოწმება ქალაქის სატრანსპორტო ქსელთან.</li>
                        <li><strong>საქართველოს შსს საპატრულო პოლიციასთან შეთანხმება:</strong> მოძრაობის უსაფრთხოების დეპარტამენტის ოფიციალური დასკვნა და დამტკიცება.</li>
                    </ol>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center">
                        <HelpCircle className="w-6 h-6 text-amber-500 mr-2" />
                        ხშირად დასმული კითხვები (FAQ)
                    </h2>
                    <div className="space-y-4 mb-8">
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                            <h4 className="font-bold text-gray-900 mb-2">რა დრო სჭირდება საგზაო სქემის მომზადებას და შეთანხმებას?</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                თავად <strong>საგზაო სქემის მომზადება</strong> ჩვენი გუნდის მიერ ხდება 1-3 სამუშაო დღეში. სახელმწიფო უწყებებში (მერია და საპატრულო პოლიცია) ოფიციალური შეთანხმების ვადა კი პროექტის სირთულიდან გამომდინარე შეადგენს საშუალოდ 5-დან 10 სამუშაო დღემდე.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                            <h4 className="font-bold text-gray-900 mb-2">რა მოხდება, თუ სამუშაოები საგზაო სქემის გარეშე დაიწყება?</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                საგზაო სქემისა და შესაბამისი ნებართვის გარეშე გზის სავალი ნაწილის ან ტროტუარის დაკავება იწვევს მძიმე ადმინისტრაციულ ჯარიმებს ზედამხედველობისა და საპატრულო პოლიციის მხრიდან, აგრეთვე სამუშაოების დაუყოვნებლივ იძულებით შეჩერებას.
                            </p>
                        </div>
                    </div>

                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        ჩვენი გამოცდილი საინჟინრო გუნდი უზრუნველყოფს <strong>საგზაო სქემის მომზადებასა და შეთანხმებას</strong> უმოკლეს ვადებში. გაეცანით ჩვენს <Link href="/services" className="text-amber-600 font-bold underline">სერვისებს</Link> ან პირდაპირ დაგვიკავშირდით უფასო კონსულტაციისთვის.
                    </p>
                </>
            )
        },
        'samsheneblo-sagzao-sqema-da-gzis-gadaketva': {
            slug: 'samsheneblo-sagzao-sqema-da-gzis-gadaketva',
            title: 'სამშენებლო საგზაო სქემა და გზის გადაკეტვა — ნებართვები და წესები',
            date: '2026-09-10',
            keyword: 'სამშენებლო საგზაო სქემა',
            excerpt: 'სამშენებლო საგზაო სქემა, გზის სავალი ნაწილის დროებითი გადაკეტვა, სამშენებლო ღობის მოწყობა და ტექნიკის განთავსების წესები საქართველოში.',
            description: 'სამშენებლო საგზაო სქემა აუცილებელია მშენებლობისა და გზის გადაკეტვის დროს. გაიგეთ, როგორ მიიღოთ ნებართვა და შეათანხმოთ დროებითი შემოვლითი მარშრუტი.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        მშენებლობის პროცესში ერთ-ერთი ყველაზე კრიტიკული ეტაპია სამშენებლო მოედნის უსაფრთხო შემოსაზღვრა. სწორედ ამ დროს ხდება სავალდებულო <strong>სამშენებლო საგზაო სქემა</strong> — სპეციალური გეგმა, რომელიც განსაზღვრავს გზის სავალი ნაწილის შევიწროებას ან დროებით გადაკეტვას.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">რა შემთხვევებშია საჭირო სამშენებლო საგზაო სქემა?</h2>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>სამშენებლო ღობის მოწყობა:</strong> როდესაც ღობე იკავებს ტროტუარს ან საავტომობილო ზოლის ნაწილს და საჭირო ხდება ქვეითთა დროებითი გადასასვლელის მოწყობა.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>მძიმე ტექნიკის განთავსება:</strong> ამწის, ბეტონტუმბოს (პომპის) ან ბეტონმზიდების სამუშაო ზონაში განლაგება.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>გზის დროებითი გადაკეტვა:</strong> კომუნიკაციების ჩაჭრისას, ასფალტის დაგებისას ან კონსტრუქციული ელემენტების მონტაჟისას.</span>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">დროებითი შემოვლითი მარშრუტის ორგანიზება</h2>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        თუ ქუჩა ან ზოლი სრულად იკეტება, <strong>დროებითი საგზაო სქემა</strong> აუცილებლად უნდა შეიცავდეს შემოვლითი გზების ზუსტ მითითებას. მძღოლების წინასწარ გასაფრთხილებლად მონტაჟდება წინასწარი საინფორმაციო და მიმართულების მაჩვენებელი საგზაო ნიშნები.
                    </p>

                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 mb-8 flex items-start">
                        <AlertTriangle className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                            <h4 className="font-bold text-amber-900 mb-1">მნიშვნელოვანი მოთხოვნა</h4>
                            <p className="text-sm text-amber-800 leading-relaxed">
                                საპატრულო პოლიციასთან შეთანხმებული <strong>საგზაო სქემის</strong> გარეშე გზის გადაკეტვა იწვევს მყისიერ დაჯარიმებას და ობიექტის დალუქვას. ჩვენი გუნდი უზრუნველყოფს სრულ იურიდიულ და საინჟინრო თანხლებას.
                            </p>
                        </div>
                    </div>
                </>
            )
        },
        'sagdzao-modzraobis-organizebis-sqema-ra-aris': {
            slug: 'sagdzao-modzraobis-organizebis-sqema-ra-aris',
            title: 'საგზაო მოძრაობის ორგანიზების სქემა – რა არის',
            date: '2026-09-02',
            keyword: 'საგზაო მოძრაობის სქემა',
            excerpt: 'გაიგეთ დეტალურად რა არის საგზაო სქემა და საგზაო მოძრაობის ორგანიზების სქემა, ვისთვის არის აუცილებელი და როგორ ხდება მისი შედგენა.',
            description: 'გაიგეთ დეტალურად რა არის საგზაო სქემა და მოძრაობის ორგანიზების სქემა, ვისთვის არის აუცილებელი და როგორ ხდება მისი შედგენა.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        <strong>საგზაო მოძრაობის სქემა</strong> (იგივე <strong>საგზაო სქემა</strong>) არის სპეციალური საინჟინრო-გეგმარებითი დოკუმენტი, რომელიც უზრუნველყოფს ტრანსპორტისა და ქვეითების უსაფრთხო გადაადგილებას კონკრეტულ ლოკაციაზე.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">რას მოიცავს საგზაო მოძრაობის ორგანიზების სქემა?</h2>
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
                        ნებისმიერი ახალი შენობის, პარკინგის ან გზის მშენებლობისას, პროფესიონალური <strong>საგზაო სქემები</strong> წარმოადგენს ერთ-ერთ მთავარ დოკუმენტს, რომლის გარეშეც შეუძლებელია მუნიციპალიტეტისგან ნებართვის მიღება. ჩვენი გუნდი გთავაზობთ ამ სქემების პროფესიონალურ შედგენას და შეთანხმებას.
                    </p>
                </>
            )
        },
        'rogor-xdeba-modzraobis-sqemis-shetanxmeba': {
            slug: 'rogor-xdeba-modzraobis-sqemis-shetanxmeba',
            title: 'როგორ ხდება მოძრაობის სქემის შეთანხმება',
            date: '2026-08-25',
            keyword: 'მოძრაობის ორგანიზების სქემა',
            excerpt: 'თბილისის მერიასთან და საპატრულო პოლიციასთან საგზაო სქემის შეთანხმების ეტაპები და საჭირო პროცედურები.',
            description: 'თბილისის მერიასთან და საპატრულო პოლიციასთან საგზაო სქემის შეთანხმების ეტაპები და საჭირო პროცედურები.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        <strong>საგზაო სქემის შეთანხმება</strong> საკმაოდ რთული და მრავალეტაპიანი პროცესია, რომელიც მოითხოვს კანონმდებლობისა და უსაფრთხოების ნორმების ზედმიწევნით ცოდნას.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">შეთანხმების ძირითადი ეტაპები:</h2>
                    <div className="bg-white p-6 rounded-2xl mb-8 border border-slate-200 shadow-sm">
                        <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                            <li><strong>ტოპოგრაფიული გეგმის მომზადება:</strong> ტერიტორიის ზუსტი კვლევა.</li>
                            <li><strong>საგზაო სქემის ნახაზების შედგენა:</strong> ნახაზების შექმნა საინჟინრო სტანდარტებით.</li>
                            <li><strong>თბილისის ტრანსპორტის სააგენტოში წარდგენა:</strong> სქემის პირველადი განხილვა მერიაში.</li>
                            <li><strong>საპატრულო პოლიციასთან შეთანხმება:</strong> უსაფრთხოების კუთხით დოკუმენტაციის ფინალური ვალიდაცია.</li>
                        </ol>
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        როგორც ხედავთ, <strong>საგზაო სქემა</strong> მოითხოვს სხვადასხვა სახელმწიფო უწყებასთან კომუნიკაციას. ჩვენი სერვისი მოიცავს ყველა ამ ეტაპის თქვენს მაგივრად გავლას, რაც ზოგავს თქვენს დროსა და რესურსებს.
                    </p>
                </>
            )
        },
        'droebiti-sagzao-sqemebi-samsheneblo-samushaoebistvis': {
            slug: 'droebiti-sagzao-sqemebi-samsheneblo-samushaoebistvis',
            title: 'დროებითი საგზაო სქემები სამშენებლო სამუშაოებისთვის',
            date: '2026-08-18',
            keyword: 'დროებითი საგზაო სქემა',
            excerpt: 'რატომ არის აუცილებელი დროებითი საგზაო სქემა მშენებლობისას და როგორ უზრუნველყოფს ის უსაფრთხოებას.',
            description: 'რატომ არის აუცილებელი დროებითი საგზაო სქემა მშენებლობისას და როგორ უზრუნველყოფს ის უსაფრთხოებას.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        როდესაც მიმდინარეობს მშენებლობა, გზის სარეაბილიტაციო სამუშაოები ან კომუნიკაციების (წყალი, გაზი) გაყვანა, აუცილებელია <strong>დროებითი საგზაო სქემა</strong>.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        ეს დოკუმენტი არეგულირებს, თუ როგორ უნდა იმოძრაონ ავტომობილებმა და ქვეითებმა უსაფრთხოდ ტერიტორიაზე სამუშაოების დასრულებამდე. <strong>საგზაო სქემები</strong> შეიცავს ინფორმაციას შემოვლითი გზების, დროებითი ნიშნებისა და ბარიერების ზუსტი განლაგების შესახებ.
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
            date: '2026-08-10',
            keyword: 'სატრანსპორტო ორგანიზების სქემა',
            excerpt: 'საგზაო და სატრანსპორტო ორგანიზების სქემის დასამტკიცებლად საჭირო სრული დოკუმენტაციის სია და მოთხოვნები.',
            description: 'საგზაო და სატრანსპორტო ორგანიზების სქემის დასამტკიცებლად საჭირო სრული დოკუმენტაციის სია და მოთხოვნები.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        თბილისში ნებისმიერი <strong>საგზაო სქემა</strong> და სატრანსპორტო ორგანიზების სქემა ფინალურ ეტაპზე მოითხოვს საპატრულო პოლიციასთან შეთანხმებას. ეს პროცესი გულისხმობს დეტალური პაკეტის მომზადებას.
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
                                A3 ფორმატზე ამობეჭდილი <strong>საგზაო სქემა</strong> (დამოწმებული ექსპერტის მიერ).
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
        'sagzao-sqema-momzadeba-da-shetanxmeba': {
            slug: 'sagzao-sqema-momzadeba-da-shetanxmeba',
            title: 'Road Traffic Scheme in Georgia — Design, Approval & Requirements',
            date: '2026-09-14',
            keyword: 'Road Traffic Scheme',
            excerpt: 'Road traffic schemes in Georgia: what they are, when they are required, how to approve them with City Hall and Patrol Police, and typical timelines.',
            description: 'A road traffic scheme is an official engineering document for traffic management. Learn the stages of drafting, municipal approvals, and legal requirements.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        A <strong>road traffic scheme</strong> is a detailed engineering document that outlines the safe movement of vehicular and pedestrian flows, road signage, pavement markings, and physical safety barriers.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Under Georgian municipal regulations, any construction, rehabilitation, or underground utility work affecting roads or sidewalks requires an officially approved <strong>traffic scheme</strong>.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Who Needs a Road Scheme?</h2>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>Construction Projects:</strong> Installing safety fencing, staging heavy machinery, and regulating entry/exit access.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>Utilities & Infrastructure:</strong> Trenching for water pipes, gas lines, or electrical cables.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>Commercial Complexes:</strong> Connecting shopping malls, hotels, and fuel stations to public roads.</span>
                        </li>
                    </ul>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Approval Stages</h2>
                    <ol className="list-decimal pl-6 space-y-3 mb-8 text-gray-700">
                        <li><strong>Topographic Survey:</strong> Exact mapping of the current road geometry.</li>
                        <li><strong>CAD Engineering Drawings:</strong> Drafting signs, barriers, and detour flows according to official standards.</li>
                        <li><strong>Municipal Transport Agency Approval:</strong> Preliminary validation with Tbilisi City Hall.</li>
                        <li><strong>Patrol Police Endorsement:</strong> Final safety approval by the Ministry of Internal Affairs.</li>
                    </ol>
                </>
            )
        },
        'samsheneblo-sagzao-sqema-da-gzis-gadaketva': {
            slug: 'samsheneblo-sagzao-sqema-da-gzis-gadaketva',
            title: 'Construction Traffic Scheme and Road Closures — Permits & Regulations',
            date: '2026-09-10',
            keyword: 'Construction Traffic Scheme',
            excerpt: 'Construction traffic schemes, temporary road closures, construction fencing, and heavy equipment placement guidelines in Georgia.',
            description: 'A construction traffic scheme is mandatory during building activities and street closures. Discover how to secure municipal and police permits.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Securing a perimeter around a building site is critical. When construction occupies a street or pedestrian path, a certified <strong>construction traffic scheme</strong> is required.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">When is it Required?</h2>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>Fencing installation:</strong> When fences encroach on pedestrian sidewalks or road lanes.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>Heavy machinery operation:</strong> Tower cranes, concrete mixer trucks, and excavation equipment.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>Temporary road closures:</strong> Organizing well-marked detour routes.</span>
                        </li>
                    </ul>
                </>
            )
        },
        'sagdzao-modzraobis-organizebis-sqema-ra-aris': {
            slug: 'sagdzao-modzraobis-organizebis-sqema-ra-aris',
            title: 'What is a Traffic Organization Scheme?',
            date: '2026-09-02',
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
            date: '2026-08-25',
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
            date: '2026-08-18',
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
            date: '2026-08-10',
            keyword: 'Documentation',
            excerpt: 'The full roster of documentation and requirements needed to approve a traffic scheme.',
            description: 'The full roster of documentation and requirements needed to approve a traffic scheme.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        In Tbilisi, any <strong>transport organization scheme</strong> requires an agreement with the Patrol Police at the final stage.
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
        'sagzao-sqema-momzadeba-da-shetanxmeba': {
            slug: 'sagzao-sqema-momzadeba-da-shetanxmeba',
            title: 'Дорожная схема в Грузии — Подготовка, согласование и требования',
            date: '2026-09-14',
            keyword: 'Дорожная схема',
            excerpt: 'Дорожная схема и дорожные схемы в Грузии: что это такое, когда они обязательны, как согласовать с Мэрией и Патрульной полицией и сколько это занимает времени.',
            description: 'Дорожная схема является официальным инженерным документом по организации движения. Узнайте этапы составления, согласования и требования законодательства.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        <strong>Дорожная схема</strong> — это детальный инженерно-планировочный документ, определяющий безопасное движение транспортных и пешеходных потоков, размещение временных или постоянных дорожных знаков, разметки и ограждений.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Согласно законодательству Грузии, любые строительные, ремонтные или коммуникационные работы, затрагивающие проезжую часть или тротуар, требуют официально утвержденной <strong>дорожной схемы</strong>.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Кому и когда необходима дорожная схема?</h2>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>Строительным объектам:</strong> установка строительного забора, размещение спецтехники (краны, бетономешалки) и регулирование въезда-выезда.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>Коммуникационным сетям:</strong> раскопка дорожного полотна при прокладке водопровода, канализации, газа или кабелей.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>Коммерческим объектам:</strong> подключение торговых центров, гостиниц, АЗС и парковок к общей дорожной сети.</span>
                        </li>
                    </ul>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Этапы согласования</h2>
                    <ol className="list-decimal pl-6 space-y-3 mb-8 text-gray-700">
                        <li><strong>Топографический план:</strong> детальное исследование геометрии дорожного участка.</li>
                        <li><strong>Инженерный чертеж:</strong> создание схем в AutoCAD по всем нормативным стандартам.</li>
                        <li><strong>Подача в Агентство транспорта Тбилиси:</strong> первичное согласование с муниципальными властями.</li>
                        <li><strong>Согласование с Патрульной полицией МВД:</strong> финальное экспертное заключение по безопасности дорожного движения.</li>
                    </ol>
                </>
            )
        },
        'samsheneblo-sagzao-sqema-da-gzis-gadaketva': {
            slug: 'samsheneblo-sagzao-sqema-da-gzis-gadaketva',
            title: 'Строительная дорожная схема и перекрытие дорог в Грузии',
            date: '2026-09-10',
            keyword: 'Строительная дорожная схема',
            excerpt: 'Строительная дорожная схема, временное перекрытие проезжей части, установка ограждений и правила размещения техники в Грузии.',
            description: 'Строительная дорожная схема обязательна при строительстве и перекрытии дорог. Узнайте, как получить разрешение и согласовать объездные маршруты.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        В процессе строительства безопасное ограждение строительной площадки является первоочередным. Когда работы затрагивают улицу, становится обязательной <strong>строительная дорожная схема</strong>.
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">В каких случаях требуется?</h2>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>Установка строительного забора:</strong> при сужении тротуара или полосы движения.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>Размещение спецтехники:</strong> работа кранов, бетононасосов и грузовиков.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>Временное перекрытие дорог:</strong> организация понятных объездных путей для транспорта.</span>
                        </li>
                    </ul>
                </>
            )
        },
        'sagdzao-modzraobis-organizebis-sqema-ra-aris': {
            slug: 'sagdzao-modzraobis-organizebis-sqema-ra-aris',
            title: 'Что такое схема организации дорожного движения?',
            date: '2026-09-02',
            keyword: 'Дорожная схема',
            excerpt: 'Узнайте подробно, что представляет собой дорожная схема и схема организации движения и для кого она обязательна.',
            description: 'Узнайте подробно, что представляет собой дорожная схема и схема организации движения и для кого она обязательна.',
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
            date: '2026-08-25',
            keyword: 'Согласование схемы',
            excerpt: 'Этапы согласования дорожной схемы с Мэрией Тбилиси и Патрульной полицией, а также необходимые процедуры.',
            description: 'Этапы согласования дорожной схемы с Мэрией Тбилиси и Патрульной полицией, а также необходимые процедуры.',
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
            date: '2026-08-18',
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
            date: '2026-08-10',
            keyword: 'Полная Документация',
            excerpt: 'Список всей документации и требований, необходимых для утверждения схемы.',
            description: 'Список всей документации и требований, необходимых для утверждения схемы.',
            content: (
                <>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        В Грузии любая <strong>дорожная схема</strong> и схема организации транспорта на финальном этапе требует согласования с Патрульной полицией.
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
