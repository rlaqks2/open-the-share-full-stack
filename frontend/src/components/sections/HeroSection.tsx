interface HeroSectionProps {
    onInquiryClick: () => void;
}

const HeroSection = ({ onInquiryClick }: HeroSectionProps) => {
  return (
    <section className="relative h-[60vh] min-h-[400px] bg-slate-800 text-white flex items-center">
        <div className="absolute inset-0">
            <img src="https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Volunteers working together" className="w-full h-full object-cover opacity-40"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                세상을 바꾸는 작은 움직임,<br />
                <span className="text-emerald-400">기업의 사회적 가치를 더합니다.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
                오픈더쉐어는 기업과 사회를 잇는 임팩트 있는 사회공헌 프로그램을 만듭니다.
            </p>
            <div className="mt-8 flex justify-center gap-4">
                <button onClick={onInquiryClick} className="bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors text-lg">파트너십 문의</button>
                <a href="#about" className="bg-white/20 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/30 transition-colors text-lg">더 알아보기</a>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;