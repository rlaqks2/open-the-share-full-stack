import { PortfolioItem } from "../../types";

interface PortfolioSectionProps {
    data: PortfolioItem[];
    onPortfolioItemClick: (item: PortfolioItem) => void;
}

const PortfolioSection = ({ data, onPortfolioItemClick }: PortfolioSectionProps) => {
    return (
        <section id="portfolio" className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">포트폴리오</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.map(item => (
                        <div key={item.id} className="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
                            <div className="h-64 overflow-hidden">
                                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                            </div>
                            <div className="p-6 bg-white flex flex-col flex-grow">
                                <p className="text-sm font-semibold text-emerald-600 mb-1">{item.category}</p>
                                <h3 className="text-xl font-bold mb-4 flex-grow">{item.title}</h3>
                                <button onClick={() => onPortfolioItemClick(item)} className="font-semibold text-slate-700 hover:text-emerald-700 transition-colors self-start">자세히 보기 &rarr;</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;