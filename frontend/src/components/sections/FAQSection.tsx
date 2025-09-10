import { useState } from 'react';
import { Faq } from '../../types';

interface FAQSectionProps {
    data: Faq[];
}

const FAQSection = ({ data }: FAQSectionProps) => {
  const [openId, setOpenId] = useState<number | null>(null);
  const toggle = (id: number) => setOpenId(openId === id ? null : id);
  
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
        <div className="space-y-4">
            {data.map(faq => (
                <div key={faq.id} className="border border-slate-200 rounded-lg">
                    <button onClick={() => toggle(faq.id)} className="w-full flex justify-between items-center p-5 text-left font-semibold">
                        <span>{faq.question}</span>
                        <span className={`transform transition-transform ${openId === faq.id ? 'rotate-180' : ''}`}>&#9660;</span>
                    </button>
                    {openId === faq.id && (
                        <div className="px-5 pb-5 text-slate-600">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;