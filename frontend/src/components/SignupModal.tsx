import Modal from './Modal';

interface SignupModalProps {
    onClose: () => void;
    onLoginClick: () => void;
}

const SignupModal = ({ onClose, onLoginClick }: SignupModalProps) => {
    return (
        <Modal open={true} onClose={onClose} maxWidth="max-w-md">
             <div className="text-center">
                <h2 className="text-2xl font-bold mb-6">회원가입</h2>
            </div>
            <form className="space-y-4">
                <input type="text" placeholder="이름" className="w-full px-4 py-3 rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
                <input type="email" placeholder="이메일" className="w-full px-4 py-3 rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
                <input type="password" placeholder="비밀번호" className="w-full px-4 py-3 rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
                <button type="submit" className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition-colors">가입하기</button>
                <div className="text-center text-sm text-slate-500 pt-4">
                    이미 계정이 있으신가요? <button type="button" onClick={onLoginClick} className="font-semibold text-emerald-600 hover:underline">로그인</button>
                </div>
            </form>
        </Modal>
    );
};

export default SignupModal;