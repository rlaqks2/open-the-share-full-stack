interface CTASectionProps {
    onInquiryClick: () => void;
}

const CTASection = ({ onInquiryClick }: CTASectionProps) => {
    return (
        <section className="py-20 bg-emerald-600 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">지금 바로<br/>성공적인 ESG 파트너십을 시작하세요.</h2>
                <p className="mb-8 text-emerald-200">오픈더쉐어가 기업의 가치를 높이는 최고의 파트너가 되겠습니다.</p>
                <button onClick={onInquiryClick} className="bg-white text-emerald-600 font-bold px-10 py-4 rounded-full hover:bg-slate-100 transition-colors text-lg">파트너십 문의하기</button>
            </div>
        </section>
    );
};

export default CTASection;