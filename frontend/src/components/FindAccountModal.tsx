import Modal from './Modal';

interface FindAccountModalProps {
    onClose: () => void;
}

const FindAccountModal = ({ onClose }: FindAccountModalProps) => {
    return (
         <Modal open={true} onClose={onClose} maxWidth="max-w-md">
             <div className="text-center">
                <h2 className="text-2xl font-bold mb-6">계정찾기</h2>
            </div>
             <p className="text-center text-slate-600 mb-4">가입 시 사용한 이메일을 입력해주세요.</p>
            <form className="space-y-4">
                <input type="email" placeholder="이메일" className="w-full px-4 py-3 rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
                <button type="submit" className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition-colors">계정찾기 링크 발송</button>
            </form>
        </Modal>
    );
};

export default FindAccountModal;