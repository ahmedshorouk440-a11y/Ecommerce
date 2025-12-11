
import React from 'react';
import { FaSearch } from "react-icons/fa";
import "./Faq.css";
import { FaFacebook , FaLinkedin ,FaWhatsapp,FaTelegramPlane ,  FaGoogle } from "react-icons/fa";
import { FaYoutube ,FaGithub } from "react-icons/fa6";
import { SiNetlify } from "react-icons/si";
import PageTransition from './components/PageTransation';

function Faqcomponent() {
  return (
      <PageTransition>
    <div className="faq-page">
      <h1 className="faq-title"> Frequently Asked Questions (FAQ) </h1>

      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type='text'  placeholder="Search in FAQs" className="search-input" />
      </div>

      <div className="faq-list">

       

        <div className="faq-item">
          <div className="faq-question">
            <div className="question-icon">📌</div>
            <h3>هل الشحن مجاني لجميع المحافظات؟</h3>
          </div>
          <p className="faq-answer">
     نعم. توفير شحن مجاني للطلبات التي تزيد عن ٥٠٠ جنيه، أما الطلبات الأقل فتكون تكلفة الشحن ٣٠ جنيه فقط.
          </p>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <div className="question-icon">📌</div>
            <h3>كيف يمكنني إرجاع المنتج؟</h3>
          </div>
          <p className="faq-answer">
            يمكنك تقديم طلب إرجاع خلال ١٤ يومًا من استلام الطلب، على أن يكون المنتج بحالته الأصلية ولم يتم استخدامه.
          </p>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <div className="question-icon">📌</div>
            <h3>من يوجد دفع عند الاستلام؟</h3>
          </div>
          <p className="faq-answer">
            نعم، وضياع عند الاستلام متاح برسوم إضافية ١٠ جنيه فقط.
          </p>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <div className="question-icon">📌</div>
            <h3>متى يصل الطلب الخاص بي؟</h3>
          </div>
          <p className="faq-answer">
            التوصيل عادة يستغرق من ٢-٥ أيام عمل حسب المحافظة.
          </p>
        </div>

        {/* أسئلة إضافية شائعة جدًا */}

        <div className="faq-item">
          <div className="faq-question">
            <div className="question-icon">📌</div>
            <h3>هل الأسعار شاملة الضريبة؟</h3>
          </div>
          <p className="faq-answer">
            نعم، كل الأسعار المعروضة على الموقع شاملة ضريبة القيمة المضافة.
          </p>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <div className="question-icon">📌</div>
            <h3>هل المنتجات أصلية؟</h3>
          </div>
          <p className="faq-answer">
            بالطبع ١٠٠%، جميع المنتجات أصلية ومستوردة من الماركات العالمية بفواتير رسمية.
          </p>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <div className="question-icon">📌</div>
            <h3>ماذا أفعل إذا وصلني منتج تالف؟</h3>
          </div>
          <p className="faq-answer">
            تواصلي معانا فورًا عبر الواتساب أو الرسائل خلال ٤٨ ساعة من الاستلام وهنبدلك المنتج أو نرجعلك فلوسك كاملة.
          </p>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <div className="question-icon">📌</div>
            <h3>هل يمكن تعديل الطلب بعد تأكيده؟</h3>
          </div>
          <p className="faq-answer">
            نعم، يمكن التعديل خلال أول ساعتين من تأكيد الطلب فقط، بعد كده الطلب بيدخل مرحلة التجهيز.
          </p>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <div className="question-icon">📌</div>
            <h3>كيف أتواصل مع خدمة العملاء؟</h3>
          </div>
          <p className="faq-answer">
            متاحين ليكي ٢٤/٧ عبر الواتساب أو الرسائل المباشرة على الإنستجرام والفيسبوك.
          </p>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <div className="question-icon">📌</div>
            <h3>هل فيه كود خصم للعملاء الجدد؟</h3>
          </div>
          <p className="faq-answer">
            أكيد! استخدمي كود WELCOME10 عند أول طلب وهيخصملك ١٠% فورًا.
          </p>
        </div>



      </div>
    
    
    
    
          <div dir='ltr'>
      
                <h1 className='top' > Contact us with</h1>
                <div className='react'>
            < FaFacebook/>
            <FaLinkedin/>
            <FaYoutube/>
            <FaWhatsapp/>
            <FaGithub/>
            <FaTelegramPlane/>
            <FaGoogle/>
            <SiNetlify/>
            </div>
      
            
          </div>
    
    
    
    
    
    </div>

    </PageTransition>
  );
}

export default Faqcomponent;