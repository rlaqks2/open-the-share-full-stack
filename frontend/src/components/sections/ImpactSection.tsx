import { ImpactStat } from "../../types";

interface ImpactSectionProps {
    data: ImpactStat[];
}

const ImpactSection = ({ data }: ImpactSectionProps) => {
  return (
    <section id="impact" className="py-20 bg-pattern">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-2">핵심 성과</h2>
            <p className="text-slate-600 mb-12">숫자로 증명하는 오픈더쉐어의 임팩트</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {data.map(stat => (
                    <div key={stat.id} className="bg-white p-8 rounded-2xl shadow-lg">
                        <p className="text-4xl font-extrabold text-emerald-600 mb-2">{stat.value}</p>
                        <p className="font-semibold text-slate-700">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default ImpactSection;