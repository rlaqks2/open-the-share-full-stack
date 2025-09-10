import Modal from './Modal';

interface LoginModalProps {
    onClose: () => void;
    onSignupClick: () => void;
    onFindAccountClick: () => void;
    onLogin: () => void;
}

const LoginModal = ({ onClose, onSignupClick, onFindAccountClick, onLogin }: LoginModalProps) => {
    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      onLogin();
      onClose();
    };

    return (
        <Modal open={true} onClose={onClose} maxWidth="max-w-md">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-6">로그인</h2>
            </div>
            <form className="space-y-4" onSubmit={handleLogin}>
                <input type="email" placeholder="이메일" className="w-full px-4 py-3 rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
                <input type="password" placeholder="비밀번호" className="w-full px-4 py-3 rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                        로그인 상태 유지
                    </label>
                </div>
                <button type="submit" className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition-colors">로그인</button>
                <div className="text-center text-sm text-slate-500 py-4">
                    <span className="px-2">또는</span>
                </div>
                <div className="flex gap-4">
                    <button type="button" className="w-full bg-[#FEE500] text-slate-800 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1.5-10.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5zm-5 4.5c.167-.833 1.5-2.5 4-2.5s3.833 1.667 4 2.5v1H5.5v-1z"/></svg>
                        카카오 로그인
                    </button>
                     <button type="button" className="w-full bg-[#03C75A] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"></path></svg>
                        네이버 로그인
                    </button>
                </div>
                <div className="text-center text-sm text-slate-500 pt-4">
                    <button type="button" onClick={onSignupClick} className="hover:underline">회원가입</button>
                    <span className="mx-2">|</span>
                    <button type="button" onClick={onFindAccountClick} className="hover:underline">계정찾기</button>
                </div>
            </form>
        </Modal>
    );
};

export default LoginModal;