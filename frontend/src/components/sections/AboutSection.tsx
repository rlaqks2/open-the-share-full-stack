import { AboutData } from "../../types";

interface AboutSectionProps {
    data: AboutData;
}

const AboutSection = ({ data }: AboutSectionProps) => {
    const { title, description, features, imageUrl } = data;
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                    <p className="text-slate-600 mb-8">{description}</p>
                    <div className="space-y-6">
                        {features.map(feature => (
                            <div key={feature.title} className="flex items-start gap-4">
                                <span className="text-2xl">{feature.icon}</span>
                                <div>
                                    <h3 className="font-bold">{feature.title}</h3>
                                    <p className="text-slate-500">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img src={imageUrl} alt="About OpenThe Share" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;