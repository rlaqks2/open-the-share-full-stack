import { useEffect, ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
  noPadding?: boolean;
}

const Modal = ({ open, onClose, children, maxWidth = 'max-w-lg', noPadding = false }: ModalProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (open) {
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onKey);
    } else {
        document.body.style.overflow = 'auto';
    }
    return () => {
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', onKey);
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 animate-modalFadeIn">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div 
          className={`relative w-full ${maxWidth} rounded-2xl bg-white shadow-xl ${noPadding ? '' : 'p-6'}`} 
          role="dialog" 
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;