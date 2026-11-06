import React from "react";

const WHATSAPP_URL = "https://wa.me/message/EZ2WJQU2QMWLL1";

export default function WhatsAppButton() {
  return (
    <>
      <style>{`
        .whatsapp-float {
          position: fixed;
          left: 24px;
          bottom: 24px;
          z-index: 9999;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          color: #fff;
          background: #25d366;
          box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55),
            0 8px 24px rgba(0, 0, 0, 0.28);
          transition: transform 180ms ease, box-shadow 180ms ease;
          animation: whatsapp-glow 2s infinite;
        }
        .whatsapp-float:hover {
          color: #fff;
          transform: translateY(-4px) scale(1.06);
          box-shadow: 0 0 24px rgba(37, 211, 102, 0.75),
            0 10px 28px rgba(0, 0, 0, 0.3);
        }
        .whatsapp-float:focus-visible {
          outline: 3px solid #fff;
          outline-offset: 4px;
        }
        .whatsapp-float svg {
          width: 31px;
          height: 31px;
          fill: currentColor;
        }
        @keyframes whatsapp-glow {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5), 0 8px 24px rgba(0, 0, 0, 0.28); }
          70% { box-shadow: 0 0 0 13px rgba(37, 211, 102, 0), 0 8px 24px rgba(0, 0, 0, 0.28); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0), 0 8px 24px rgba(0, 0, 0, 0.28); }
        }
        @media (max-width: 600px) {
          .whatsapp-float { left: 16px; bottom: 16px; width: 54px; height: 54px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .whatsapp-float { animation: none; transition: none; }
        }
      `}</style>
      <a
        className="whatsapp-float"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with me on WhatsApp"
        title="Chat with me on WhatsApp"
      >
        <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
          <path d="M16.02 3.2A12.65 12.65 0 0 0 5.15 22.33L3.4 28.7l6.53-1.71A12.66 12.66 0 1 0 16.02 3.2Zm0 23.1c-1.93 0-3.82-.52-5.48-1.5l-.39-.23-3.88 1.02 1.04-3.78-.25-.4a10.43 10.43 0 1 1 8.96 4.89Zm5.72-7.81c-.31-.16-1.83-.9-2.12-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-.98 1.2-.18.21-.36.24-.67.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.16-.18.21-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.7-1.69-.96-2.31-.25-.6-.51-.52-.7-.53h-.6c-.21 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.57s1.1 2.98 1.26 3.19c.15.2 2.16 3.3 5.24 4.63.73.32 1.3.51 1.75.65.74.23 1.41.2 1.94.12.59-.09 1.83-.75 2.09-1.48.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36Z" />
        </svg>
      </a>
    </>
  );
}
