import { ProcessStep } from "../../types";

interface ProcessSectionProps {
    data: ProcessStep[];
}

const ProcessSection = ({ data }: ProcessSectionProps) => {
  return (
    <section id="process" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">프로그램 진행 절차</h2>
        <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-5 w-1 h-full bg-slate-200"></div>
            {data.map((step, index) => (
                <div key={step.id} className={`flex md:items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                   <div className="hidden md:block w-1/2"></div>
                   <div className="hidden md:block relative">
                      <div className="absolute w-8 h-8 bg-emerald-600 rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center text-white font-bold">{step.id}</div>
                   </div>
                   <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow-md border border-slate-200">
                      <h3 className="text-xl font-bold mb-2 text-emerald-700">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                   </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;