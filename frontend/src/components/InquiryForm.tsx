import { useState } from 'react';

interface InquiryFormProps {
    onSubmitted: () => void;
}

const InquiryForm = ({ onSubmitted }: InquiryFormProps) => {
  const [form, setForm] = useState({ company: '', manager: '', title: '', phone: '', email: '', message: '', agree: false });
  
  const set = (k: string, v: string | boolean) => setForm(prev => ({ ...prev, [k]: v }));
  
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.company || !form.manager || !form.phone || !form.email || !form.agree) {
        alert('필수 항목을 모두 입력해주세요.');
        return;
    }
    onSubmitted();
  };

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">회사명<span className="text-rose-500">*</span></label>
          <input value={form.company} onChange={e => set('company', e.target.value)} required className="mt-1 w-full rounded-lg border-slate-300 px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500" autoComplete="organization" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">담당자<span className="text-rose-500">*</span></label>
          <input value={form.manager} onChange={e => set('manager', e.target.value)} required className="mt-1 w-full rounded-lg border-slate-300 px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500" autoComplete="name" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         <div>
          <label className="block text-sm font-medium text-slate-700">직책</label>
          <input value={form.title} onChange={e => set('title', e.target.value)} className="mt-1 w-full rounded-lg border-slate-300 px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500" autoComplete="organization-title" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">연락처<span className="text-rose-500">*</span></label>
          <input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="010-0000-0000" required className="mt-1 w-full rounded-lg border-slate-300 px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500" autoComplete="tel" />
        </div>
      </div>
      <div>
          <label className="block text-sm font-medium text-slate-700">이메일<span className="text-rose-500">*</span></label>
          <input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="name@example.com" required className="mt-1 w-full rounded-lg border-slate-300 px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500" autoComplete="email" />
        </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">문의 내용</label>
        <textarea value={form.message} onChange={e => set('message', e.target.value)} rows={4} placeholder="원하시는 프로그램, 참여 인원, 시기 등" className="mt-1 w-full rounded-lg border-slate-300 px-3 py-2 focus:ring-emerald-500 focus:border-emerald-500" />
      </div>
      <div className="flex items-center gap-2 text-sm">
        <input id="agree" type="checkbox" checked={form.agree} onChange={e => set('agree', e.target.checked)} required className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
        <label htmlFor="agree" className="text-slate-600">개인정보 수집·이용에 동의합니다.</label>
      </div>
      <button type="submit" className="mt-2 w-full rounded-lg bg-emerald-600 px-4 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors">문의 제출</button>
    </form>
  );
}

export default InquiryForm;