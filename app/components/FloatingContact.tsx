'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingContact() {
    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col space-y-3 z-50">
            <a
                href="https://wa.me/995591959607"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-transform hover:scale-110 flex items-center justify-center"
                aria-label="Contact on WhatsApp"
            >
                <MessageCircle className="w-6 h-6" />
            </a>
            <a
                href="tel:+995591959607"
                className="bg-[var(--color-primary)] text-white p-3 rounded-full shadow-lg hover:bg-[var(--color-primary-dark)] transition-transform hover:scale-110 flex items-center justify-center"
                aria-label="Call Now"
            >
                <Phone className="w-6 h-6" />
            </a>
        </div>
    );
}
