import { Testimonial } from "../../types";

interface TestimonialsSectionProps {
    data: Testimonial[];
}

const TestimonialsSection = ({ data }: TestimonialsSectionProps) => {
    return (
        <section id="testimonials" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">고객 후기</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.map(item => (
                        <div key={item.id} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                            <p className="text-slate-600 mb-6">"{item.quote}"</p>
                            <div className="font-semibold">{item.name}</div>
                            <div className="text-sm text-slate-500">{item.role}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;