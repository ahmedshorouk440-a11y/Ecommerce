
import React, { useState } from "react";
import "./Faq.css";
import PageTransition from '../src/components/PageTransation';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "?Is shipping free for all regions",
      a: "  Yes, we offer free shipping for orders over 500 EGP. Orders below that have a 30 EGP shipping fee",
    },
    {
      q: "?How can I return a product",
      a: "You can request a return within 14 days of receiving your order, provided the product is in its original condition",
    },
    {
      q: "?Is cash on delivery available",
      a: "Yes, cash on delivery is available with an additional 10 EGP fee",
    },
    {
      q: "?How long does delivery take",
      a: "Delivery usually takes 2–5 business days depending on the location",
    },
    {
      q: "?Are the prices inclusive of taxes",
      a: "Yes, all prices include value-added tax (VAT)",
    },
    {
      q: "?Are the products original",
      a: "Yes, 100% of our products are original and sourced from international brands",
    },
    {
      q: "?What if I receive a damaged product",
      a: "Contact us within 48 hours of delivery and we will arrange a replacement or refund",
    },
    {
      q: "?Can I modify my order after confirmation",
      a: "Yes, but only within the first 2 hours after placing the order",
    },
    {
      q: "?How can I contact customer support",
      a: "Our support team is available 24/7 via WhatsApp and social media platforms",
    },
    {
  q: "?Do you offer international shipping",
  a: "Currently, we only ship داخل مصر، ولكن بنخطط نوفر شحن دولي قريبًا"
},
{
  q: "?Can I track my order",
  a: "Yes, once your order is shipped, you will receive a tracking number via SMS or email"
},
{
  q: "?What payment methods do you accept",
  a: "We accept cash on delivery, credit cards, and mobile wallets"
},
{
  q: "?Can I cancel my order",
  a: "Yes, you can cancel your order before it is shipped by contacting our support team"
},
{
  q: "?Do you offer gift wrapping",
  a: "Yes, we provide gift wrapping service for an additional small fee"
},
{
  q: "?Are there any hidden fees",
  a: "No, all costs are clearly shown at checkout with no hidden fees"
},
{
  q: "?What should I do if I entered the wrong address",
  a: "Please contact us immediately to update your address before the order is shipped"
},
{
  q: "?Do you restock sold-out items",
  a: "Yes, we restock popular items regularly. Stay tuned or contact us for updates"
},
{
  q: "?Can I place a bulk order",
  a: "Yes, for bulk orders please contact our support team for special pricing and arrangements"
}
  ];

  return (
    <PageTransition>
    <div className="faq-page">

      <h1 className="faq-title">Frequently Asked Questions (FAQ)</h1>

      <div className="faq-container">

        {faqs.map((item, index) => (
          <div key={index} className="faq-item">

            <div
              className="faq-question"
              onClick={() => toggleItem(index)}
            >
              <span>{item.q}</span>
              <span className="icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            <div
              className={`faq-answer ${
                activeIndex === index ? "open" : ""
              }`}
            >
              {item.a}
            </div>

          </div>
        ))}

      </div>
    </div>
    </PageTransition>
  );
}

export default FAQ;