import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { getDictionary } from '../../../../lib/dictionary';
import { locales } from '../../../../lib/i18n';

// Static Data for the 4 SEO posts
const blogData: Record<string, any> = {
    'sagdzao-modzraobis-organizebis-sqema-ra-aris': {
        title: 'საგზაო მოძრაობის ორგანიზების სქემა – რა არის',
        date: '2024-03-09',
        keyword: 'საგზაო მოძრაობის სქემა',
        description: 'გაიგეთ დეტალურად რა არის საგზაო მოძრაობის ორგანიზების სქემა, ვისთვის არის აუცილებელი და როგორ ხდება მისი შედგენა.',
        content: (
            <>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    <strong>საგზაო მოძრაობის სქემა</strong> არის სპეციალური საინჟინრო-გეგმარებითი დოკუმენტი, რომელიც უზრუნველყოფს ტრანსპორტისა და ქვეითების უსაფრთხო გადაადგილებას კონკრეტულ ლოკაციაზე.
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">რას მოიცავს მოძრაობის ორგანიზების სქემა?</h2>
                <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] mr-3 flex-shrink-0" />
                        <span className="text-gray-700">საგზაო ნიშნების განლაგებას და ტიპებს.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] mr-3 flex-shrink-0" />
                        <span className="text-gray-700">სავალი ნაწილის მონიშვნებს (ხაზები, ზებრა გადასასვლელები).</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] mr-3 flex-shrink-0" />
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
        title: 'როგორ ხდება მოძრაობის სქემის შეთანხმება',
        date: '2024-03-05',
        keyword: 'მოძრაობის ორგანიზების სქემა',
        description: 'თბილისის მერიასთან და საპატრულო პოლიციასთან მოძრაობის სქემის შეთანხმების ეტაპები და საჭირო პროცედურები.',
        content: (
            <>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    <strong>მოძრაობის სქემის შეთანხმება</strong> საკმაოდ რთული და მრავალეტაპიანი პროცესია, რომელიც მოითხოვს კანონმდებლობისა და უსაფრთხოების ნორმების ზედმიწევნით ცოდნას.
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">შეთანხმების ძირითადი ეტაპები:</h2>
                <div className="bg-slate-50 p-6 rounded-lg mb-8 border border-gray-100">
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
        title: 'დროებითი საგზაო სქემები სამშენებლო სამუშაოებისთვის',
        date: '2024-02-28',
        keyword: 'დროებითი საგზაო სქემა',
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
                        <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] mr-3 flex-shrink-0" />
                        <span className="text-gray-700">თავიდან აცილებს საცობებს და მოძრაობის კოლაფსს.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] mr-3 flex-shrink-0" />
                        <span className="text-gray-700">იცავს მუშებს და გამვლელებს საფრთხისგან.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] mr-3 flex-shrink-0" />
                        <span className="text-gray-700">ჯარიმების არიდება - სქემის გარეშე მუშაობა კანონდარღვევაა.</span>
                    </li>
                </ul>
            </>
        )
    },
    'ra-dokumentebia-sachiro-sapatrulo-policiastan-shetanxmebistvis': {
        title: 'რა დოკუმენტებია საჭირო საპატრულო პოლიციასთან შეთანხმებისთვის',
        date: '2024-02-15',
        keyword: 'სატრანსპორტო ორგანიზების სქემა',
        description: 'სატრანსპორტო ორგანიზების სქემის დასამტკიცებლად საჭირო სრული დოკუმენტაციის სია და მოთხოვნები.',
        content: (
            <>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    საქართველოში ნებისმიერი <strong>სატრანსპორტო ორგანიზების სქემა</strong> ფინალურ ეტაპზე მოითხოვს საპატრულო პოლიციასთან შეთანხმებას. ეს პროცესი გულისხმობს დეტალური პაკეტის მომზადებას.
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">საჭირო დოკუმენტაციების სია:</h2>
                <div className="bg-slate-50 p-6 rounded-lg mb-8 border border-gray-100">
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-center">
                            <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-3"></div>
                            ოფიციალური განცხადება დეპარტამენტის სახელზე.
                        </li>
                        <li className="flex items-center">
                            <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-3"></div>
                            A3 ფორმატზე ამობეჭდილი <strong>საგზაო მოძრაობის სქემა</strong> (დამოწმებული ექსპერტის მიერ).
                        </li>
                        <li className="flex items-center">
                            <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-3"></div>
                            განმარტებითი ბარათი (ტექნიკური აღწერა).
                        </li>
                        <li className="flex items-center">
                            <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-3"></div>
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
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogData[slug];

    if (!post) {
        return { title: 'Not Found' };
    }

    return {
        title: post.title,
        description: post.description,
        keywords: [post.keyword, 'საგზაო მოძრაობის ორგანიზების სქემები', 'საქართველო', 'თბილისი'],
    };
}

export function generateStaticParams() {
    const slugs = Object.keys(blogData);
    const paths = [];

    for (const locale of locales) {
        for (const slug of slugs) {
            paths.push({ lang: locale, slug });
        }
    }

    return paths;
}

export default async function BlogPost({
    params,
}: {
    params: Promise<{ lang: string; slug: string }>;
}) {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang as any);

    const post = blogData[slug];

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen py-12 md:py-20 lg:py-24">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <Link
                    href={`/${lang}/blog`}
                    className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[var(--color-primary)] mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    უკან დაბრუნება (ბლოგი)
                </Link>

                <article>
                    <header className="mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-gray-500 border-b border-gray-100 pb-8">
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2" />
                                <time>{post.date}</time>
                            </div>
                            <div className="flex items-center">
                                <User className="w-5 h-5 mr-2" />
                                <span>Schemes.ge - საინჟინრო გუნდი</span>
                            </div>
                            <span className="bg-slate-50 text-[var(--color-primary)] px-3 py-1 rounded-full text-sm font-medium border border-gray-100">
                                {post.keyword}
                            </span>
                        </div>
                    </header>

                    <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-[var(--color-primary)] hover:prose-a:text-[var(--color-primary-dark)]">
                        {post.content}
                    </div>

                    <footer className="mt-16 pt-8 border-t border-gray-100 text-center bg-slate-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">გჭირდებათ დახმარება?</h3>
                        <p className="text-gray-600 mb-6">ჩვენ გაგიწევთ სრულ პროფესიონალურ მომსახურებას ნებისმიერი სირთულის საგზაო მოძრაობის სქემის მომზადებასა და შეთანხმებაში.</p>
                        <Link
                            href={`/${lang}/contact`}
                            className="inline-flex justify-center items-center px-8 py-3 text-base font-medium rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors"
                        >
                            დაგვიკავშირდით უფასო კონსულტაციისთვის
                        </Link>
                    </footer>

                </article>

            </main>
        </div>
    );
}
