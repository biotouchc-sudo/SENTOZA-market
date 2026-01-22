import { Metadata } from "next";
import { STORE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    title: `سياسة الخصوصية | ${STORE_CONFIG.name}`,
    description: `سياسة الخصوصية لـ ${STORE_CONFIG.name}`,
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background py-16">
            <div className="container px-4">
                <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
                    <h1>سياسة الخصوصية</h1>
                    <p className="lead">
                        آخر تحديث: يناير 2026
                    </p>

                    <h2>مقدمة</h2>
                    <p>
                        نحن في {STORE_CONFIG.name} نحترم خصوصيتك ونلتزم بحماية بياناتك
                        الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك.
                    </p>

                    <h2>المعلومات التي نجمعها</h2>
                    <ul>
                        <li>معلومات الاتصال (الاسم، رقم الهاتف)</li>
                        <li>معلومات الطلبات والمشتريات</li>
                        <li>معلومات التصفح (Cookies)</li>
                    </ul>

                    <h2>كيف نستخدم معلوماتك</h2>
                    <ul>
                        <li>معالجة طلباتك وتوصيلها</li>
                        <li>التواصل معك بخصوص طلباتك</li>
                        <li>تحسين خدماتنا ومنتجاتنا</li>
                        <li>إرسال العروض والتحديثات (بموافقتك)</li>
                    </ul>

                    <h2>حماية البيانات</h2>
                    <p>
                        نتخذ إجراءات أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير
                        المصرح به أو التعديل أو الإفشاء أو الإتلاف.
                    </p>

                    <h2>مشاركة المعلومات</h2>
                    <p>
                        لا نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:
                    </p>
                    <ul>
                        <li>لإتمام عمليات التوصيل</li>
                        <li>عند الضرورة القانونية</li>
                        <li>بموافقتك الصريحة</li>
                    </ul>

                    <h2>حقوقك</h2>
                    <p>لديك الحق في:</p>
                    <ul>
                        <li>الوصول إلى بياناتك الشخصية</li>
                        <li>تصحيح أي معلومات غير صحيحة</li>
                        <li>حذف بياناتك (مع مراعاة الالتزامات القانونية)</li>
                        <li>الاعتراض على معالجة بياناتك</li>
                    </ul>

                    <h2>تواصل معنا</h2>
                    <p>
                        إذا كان لديك أي أسئلة حول سياسة الخصوصية، يرجى التواصل معنا عبر:
                    </p>
                    <ul>
                        <li>واتساب: +{STORE_CONFIG.whatsapp}</li>
                        <li>الموقع: {STORE_CONFIG.location}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
