import { Partner } from "../../types";

interface PartnersSectionProps {
    data: Partner[];
}

const PartnersSection = ({ data }: PartnersSectionProps) => {
    return (
        <section id="partners" className="py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-center text-2xl font-bold mb-10">주요 고객사</h2>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {data.map((partner, index) => (
                        <img key={index} src={partner.logo} alt={partner.name} className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;