interface SearchModalProps {
    onClose: () => void;
}

const SearchModal = ({ onClose }: SearchModalProps) => {
    return (
        <div className="fixed inset-0 z-50 animate-modalFadeIn" onClick={onClose}>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative bg-white pt-6 pb-8 shadow-lg animate-slideDown" onClick={e => e.stopPropagation()}>
                <div className="max-w-3xl mx-auto px-4">
                    <div className="relative">
                        <input type="search" placeholder="무엇을 도와드릴까요?" className="w-full pl-5 pr-12 py-4 rounded-full border-2 border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none" autoFocus />
                        <svg className="w-6 h-6 absolute right-5 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <div className="mt-6 flex justify-between text-sm">
                        <div>
                            <h3 className="font-semibold mb-2">최근 검색어</h3>
                            <div className="flex gap-2">
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full">ESG</span>
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full">벽화 그리기</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">추천 검색어</h3>
                             <div className="flex gap-2">
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full">임직원 봉사</span>
                                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full">사회공헌</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;