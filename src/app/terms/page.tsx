import { Metadata } from 'next';
import { STORE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'شروط الاستخدام',
    description: `شروط استخدام متجر ${STORE_CONFIG.name}`,
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">شروط الاستخدام</h1>
                <p className="text-gray-500 mb-8">آخر تحديث: {new Date().toLocaleDateString('ar-SY')}</p>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-[#D91C24]/10 text-[#D91C24] flex items-center justify-center text-sm">01</span>
                            القبول بالشروط
                        </h2>
                        <p>
                            باستخدامك لموقع ومتجر {STORE_CONFIG.name} ("نحن"، "الموقع")، فإنك توافق على الالتزام بشروط الاستخدام هذه.
                            إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام الموقع. نحتفظ بالحق في تعديل هذه الشروط في أي وقت.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-[#D91C24]/10 text-[#D91C24] flex items-center justify-center text-sm">02</span>
                            وصف الخدمة
                        </h2>
                        <p>
                            يقدم {STORE_CONFIG.name} خدمة عرض وتصفح المنتجات الغذائية (السكاكر، البسكويت، الشوكولا) بالجملة والمفرق.
                            يتم إتمام عملية الطلب حالياً عبر تطبيق واتساب لضمان دقة الطلبات والتوافر.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-[#D91C24]/10 text-[#D91C24] flex items-center justify-center text-sm">03</span>
                            الاستخدام المقبول
                        </h2>
                        <ul className="list-disc list-inside space-y-2 mr-4">
                            <li>يجب استخدام الموقع لأغراض مشروعة فقط.</li>
                            <li>يُمنع محاولة اختراق الموقع أو جمع البيانات بشكل غير مصرح به.</li>
                            <li>يُمنع نسخ صور المنتجات أو المحتوى لأغراض تجارية دون إذن مسبق.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-[#D91C24]/10 text-[#D91C24] flex items-center justify-center text-sm">04</span>
                            الأسعار والتوافر
                        </h2>
                        <p>
                            نسعى لضمان دقة الأسعار وتوافر المنتجات المعروضة على الموقع. ومع ذلك:
                        </p>
                        <ul className="list-disc list-inside space-y-2 mr-4 mt-2">
                            <li>قد تتغير الأسعار دون إشعار مسبق بناءً على تقلبات السوق.</li>
                            <li>توافر المنتجات خاضع للمخزون الفعلي في مستودعاتنا.</li>
                            <li>يتم تأكيد السعر النهائي والكمية عند التواصل عبر واتساب.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-[#D91C24]/10 text-[#D91C24] flex items-center justify-center text-sm">05</span>
                            إخلاء المسؤولية
                        </h2>
                        <p>
                            يتم تقديم الخدمة "كما هي". لا نتحمل مسؤولية أي أخطاء مطبعية أو انقطاع في الخدمة. الصور المعروضة
                            هي لأغراض توضيحية وقد يختلف شكل المنتج الفعلي قليلاً.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
