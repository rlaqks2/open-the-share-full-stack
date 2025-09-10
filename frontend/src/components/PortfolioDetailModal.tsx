import Modal from './Modal';
import { PortfolioItem } from '../types';

interface PortfolioDetailModalProps {
    item: PortfolioItem | null;
    onClose: () => void;
}

const PortfolioDetailModal = ({ item, onClose }: PortfolioDetailModalProps) => {
    if (!item) return null;
    return (
        <Modal open={true} onClose={onClose} maxWidth="max-w-4xl" noPadding={true}>
            <div className="relative">
                <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition-colors" aria-label="닫기">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <div className="max-h-[85vh] overflow-y-auto">
                    <div className="w-full h-80 bg-slate-200">
                       <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
                        <p className="text-emerald-600 font-semibold mb-6">{item.category}</p>

                        <div className="bg-slate-50 rounded-lg p-6 mb-8 border border-slate-200">
                            <h3 className="text-lg font-bold mb-4">프로젝트 개요</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-600">
                                <div><strong className="font-semibold text-slate-800 block">파트너사</strong> {item.partner}</div>
                                <div><strong className="font-semibold text-slate-800 block">프로젝트 기간</strong> {item.period}</div>
                                <div><strong className="font-semibold text-slate-800 block">참여 인원</strong> {item.participants}명</div>
                            </div>
                        </div>

                        <div className="prose max-w-none text-slate-700">
                            <p>{item.story}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default PortfolioDetailModal;