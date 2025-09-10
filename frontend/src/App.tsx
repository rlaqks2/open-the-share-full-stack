import { useState } from 'react';
import { useScrollObserver } from './hooks/useScrollObserver';
import { mockData } from './data/mockData';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ImpactSection from './components/sections/ImpactSection';
import ProgramsSection from './components/sections/ProgramsSection';
import ProcessSection from './components/sections/ProcessSection';
import PortfolioSection from './components/sections/PortfolioSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import PartnersSection from './components/sections/PartnersSection';
import FAQSection from './components/sections/FAQSection';
import CTASection from './components/sections/CTASection';
import Footer from './components/layout/Footer';
import Modal from './components/Modal';
import InquiryForm from './components/InquiryForm';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import FindAccountModal from './components/FindAccountModal';
import SearchModal from './components/SearchModal';
import PortfolioDetailModal from './components/PortfolioDetailModal';
import { PortfolioItem } from './types';

function App() {
    useScrollObserver();
        
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setSignupModalOpen] = useState(false);
    const [isFindAccountModalOpen, setFindAccountModalOpen] = useState(false);
    const [isSearchModalOpen, setSearchModalOpen] = useState(false);
    const [isPortfolioModalOpen, setPortfolioModalOpen] = useState(false);
    const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);
    const [isInquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
    
    const handlePortfolioClick = (item: PortfolioItem) => {
        setSelectedPortfolioItem(item);
        setPortfolioModalOpen(true);
    };

    return (
        <div>
            <Header 
              onLoginClick={() => setLoginModalOpen(true)}
              onSearchClick={() => setSearchModalOpen(true)}
              onInquiryClick={() => setInquiryModalOpen(true)}
              isLoggedIn={isLoggedIn}
              onLogoutClick={() => setLoggedIn(false)}
            />
            
            <main>
                <HeroSection onInquiryClick={() => setInquiryModalOpen(true)} />
                <AboutSection data={mockData.about} />
                <ImpactSection data={mockData.impactStats} />
                <ProgramsSection data={mockData.programs} />
                <ProcessSection data={mockData.processSteps} />
                <PortfolioSection data={mockData.portfolioItems} onPortfolioItemClick={handlePortfolioClick} />
                <TestimonialsSection data={mockData.testimonials} />
                <PartnersSection data={mockData.partners} />
                <FAQSection data={mockData.faqs} />
                <CTASection onInquiryClick={() => setInquiryModalOpen(true)} />
            </main>

            <Footer />
            
            {isInquiryModalOpen && (
                <Modal open={true} onClose={() => setInquiryModalOpen(false)} maxWidth="max-w-2xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">파트너십 문의</h2>
                    <InquiryForm onSubmitted={() => { setInquiryModalOpen(false); setSuccessModalOpen(true); }} />
                </Modal>
            )}
            
            {isSuccessModalOpen && (
                <Modal open={true} onClose={() => setSuccessModalOpen(false)} maxWidth="max-w-sm">
                    <div className="text-center p-4">
                       <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-4xl">✓</div>
                       <h3 className="text-xl font-bold mb-2">신청이 접수되었습니다</h3>
                       <p className="text-slate-600 mb-6">담당자가 확인 후 연락드리겠습니다. 감사합니다.</p>
                       <button onClick={() => setSuccessModalOpen(false)} className="w-full bg-emerald-600 text-white font-semibold py-2.5 rounded-lg hover:bg-emerald-700">확인</button>
                    </div>
                </Modal>
            )}
            
            {isLoginModalOpen && <LoginModal 
                onClose={() => setLoginModalOpen(false)} 
                onSignupClick={() => { setLoginModalOpen(false); setSignupModalOpen(true); }}
                onFindAccountClick={() => { setLoginModalOpen(false); setFindAccountModalOpen(true); }}
                onLogin={() => setLoggedIn(true)}
            />}
            
            {isSignupModalOpen && <SignupModal 
                onClose={() => setSignupModalOpen(false)} 
                onLoginClick={() => { setSignupModalOpen(false); setLoginModalOpen(true); }}
            />}

            {isFindAccountModalOpen && <FindAccountModal onClose={() => setFindAccountModalOpen(false)} />}
            
            {isSearchModalOpen && <SearchModal onClose={() => setSearchModalOpen(false)} />}
            
            {isPortfolioModalOpen && <PortfolioDetailModal item={selectedPortfolioItem} onClose={() => setPortfolioModalOpen(false)} />}
        </div>
    );
}

export default App;