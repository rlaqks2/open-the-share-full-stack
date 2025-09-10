import { useState, useRef } from 'react';

interface HeaderProps {
    onLoginClick: () => void;
    onSearchClick: () => void;
    onInquiryClick: () => void;
    isLoggedIn: boolean;
    onLogoutClick: () => void;
}

const Header = ({ onLoginClick, onSearchClick, onInquiryClick, isLoggedIn, onLogoutClick }: HeaderProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const navLinks = [
    { name: '소개', href: '#about', subLinks: [{name: '오픈더쉐어', href: '#about'}, {name: '핵심성과', href: '#impact'}] },
    { name: '사업분야', href: '#programs', subLinks: [{name: '주요사업', href: '#programs'}, {name: '진행절차', href: '#process'}] },
    { name: '포트폴리오', href: '#portfolio' },
    { name: '고객후기', href: '#testimonials' },
    { name: '소식', href: '#partners' },
    { name: 'FAQ', href: '#faq' },
  ];
  
  const scrollToId = (id: string) => {
    const el = document.getElementById(id.substring(1));
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setOpenMegaMenu(null);
  };

  const handleMouseEnter = (menuName: string) => {
    if (window.innerWidth >= 1024) {
        setOpenMegaMenu(menuName);
    }
  };
  
  const handleMouseLeave = (e: React.MouseEvent) => {
    if (window.innerWidth >= 1024) {
      if (headerRef.current && !headerRef.current.contains(e.relatedTarget as Node)) {
        setOpenMegaMenu(null);
      }
    }
  };

  return (
    <header 
      ref={headerRef}
      className="sticky top-0 z-40 bg-white/90 backdrop-blur-lg border-b border-slate-200"
      onMouseLeave={handleMouseLeave}
    >
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-20">
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="text-2xl font-black text-emerald-600">OpenThe Share</a>
                
                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center space-x-2">
                    {navLinks.map((link) => (
                        <div 
                          key={link.name} 
                          className="relative h-20 flex items-center" 
                          onMouseEnter={() => handleMouseEnter(link.name)}
                        >
                          <a href={link.href} onClick={(e) => { e.preventDefault(); scrollToId(link.href); }} className="inline-block text-slate-700 font-semibold hover:text-emerald-600 transition-colors px-4 py-2">{link.name}</a>
                        </div>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center space-x-4">
                    <button onClick={onSearchClick} className="text-slate-500 hover:text-emerald-600">
                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                    {isLoggedIn ? (
                        <button onClick={onLogoutClick} className="font-semibold text-slate-600 hover:text-emerald-600">로그아웃</button>
                    ) : (
                        <button onClick={onLoginClick} className="font-semibold text-slate-600 hover:text-emerald-600">로그인</button>
                    )}
                    <button onClick={onInquiryClick} className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-emerald-700 transition-colors">파트너십 문의</button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600">
                       <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </div>
        </div>

         {/* Mega Menu */}
        {openMegaMenu && navLinks.find(l => l.name === openMegaMenu)?.subLinks && (
            <div className="hidden lg:block absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg animate-slideDown">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex space-x-16">
                        {navLinks.find(l => l.name === openMegaMenu)!.subLinks!.map(sub => (
                            <a key={sub.name} href={sub.href} onClick={(e) => { e.preventDefault(); scrollToId(sub.href); }} className="block text-slate-600 hover:text-emerald-700 font-medium">{sub.name}</a>
                        ))}
                    </div>
                </div>
            </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 bg-white z-50 p-4 animate-modalFadeIn">
                <div className="flex justify-between items-center mb-8">
                     <span className="text-2xl font-black text-emerald-600">OpenThe Share</span>
                     <button onClick={() => setMobileMenuOpen(false)}>
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                     </button>
                </div>
                <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <div key={link.name}>
                        <a href={link.href} onClick={(e) => { e.preventDefault(); scrollToId(link.href); }} className="text-xl font-semibold w-full text-left">{link.name}</a>
                        {link.subLinks && (
                            <div className="pl-4 mt-2 flex flex-col space-y-2">
                                {link.subLinks.map(sub => (
                                    <a key={sub.name} href={sub.href} onClick={(e) => { e.preventDefault(); scrollToId(sub.href); }} className="text-slate-600">{sub.name}</a>
                                ))}
                            </div>
                        )}
                      </div>
                    ))}
                </nav>
                 <div className="mt-8 border-t pt-6 flex flex-col space-y-4">
                    {isLoggedIn ? (
                       <button onClick={() => { setMobileMenuOpen(false); onLogoutClick(); }} className="w-full text-left font-semibold">로그아웃</button>
                    ) : (
                       <button onClick={() => { setMobileMenuOpen(false); onLoginClick(); }} className="w-full text-left font-semibold">로그인</button>
                    )}
                    <button onClick={() => { setMobileMenuOpen(false); onSearchClick(); }} className="w-full text-left font-semibold">검색</button>
                    <button onClick={() => { setMobileMenuOpen(false); onInquiryClick(); }} className="w-full bg-emerald-600 text-white font-semibold px-5 py-3 rounded-full hover:bg-emerald-700 transition-colors">파트너십 문의</button>
                </div>
            </div>
        )}
    </header>
  );
};

export default Header;