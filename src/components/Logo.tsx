import React from 'react';

interface LogoProps {
  variant?: 'monogram' | 'scales' | 'full';
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  subtitle,
  size = 'md',
  className = '',
}) => {
  if (variant === 'scales') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <svg
          viewBox="0 0 40 40"
          className={size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Scales of justice in gold */}
          <path
            d="M20 6V34"
            stroke="url(#goldGradient)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M14 34H26"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 12C12 11 16 11 20 11C24 11 28 11 32 12"
            stroke="url(#goldGradient)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Left scale */}
          <path
            d="M8 12L4 21H14L10 12"
            stroke="url(#goldGradient)"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          <path
            d="M4 21C4 23 6.5 24.5 9 24.5C11.5 24.5 14 23 14 21"
            stroke="url(#goldGradient)"
            strokeWidth="1.3"
          />
          {/* Right scale */}
          <path
            d="M32 12L28 21H38L34 12"
            stroke="url(#goldGradient)"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          <path
            d="M28 21C28 23 30.5 24.5 33 24.5C35.5 24.5 38 23 38 21"
            stroke="url(#goldGradient)"
            strokeWidth="1.3"
          />
          {/* Top finial */}
          <circle cx="20" cy="5" r="1.5" fill="url(#goldGradient)" />
          <defs>
            <linearGradient id="goldGradient" x1="4" y1="4" x2="36" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F5E4C4" />
              <stop offset="0.5" stopColor="#D4B57B" />
              <stop offset="1" stopColor="#A8813E" />
            </linearGradient>
          </defs>
        </svg>

        {subtitle && (
          <div className="flex items-center gap-3">
            <span className="h-6 w-[1px] bg-gradient-to-b from-transparent via-[#c5a367]/60 to-transparent" />
            <span className="font-cinzel text-xs md:text-sm tracking-[0.25em] text-[#d4b57b] uppercase font-semibold">
              {subtitle}
            </span>
          </div>
        )}
      </div>
    );
  }

  // Intertwined PS Monogram
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 48 48"
          className={size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-14 h-14' : 'w-10 h-10'}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="psGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#faecd0" />
              <stop offset="45%" stopColor="#d4b57b" />
              <stop offset="85%" stopColor="#a37c35" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#c5a367" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Luxury Monogram "PS" */}
          <g filter="url(#goldGlow)">
            {/* Letter P */}
            <path
              d="M12 9H23C27.5 9 30 11.5 30 15.5C30 19.5 27 22 22.5 22H16V39H12V9ZM16 12.5V18.5H22C24.5 18.5 26 17.5 26 15.5C26 13.5 24.5 12.5 22 12.5H16Z"
              fill="url(#psGold)"
            />
            {/* Letter S overlapping */}
            <path
              d="M26 23C27.8 22.5 30.2 22 32.5 22C37 22 39.5 24.5 39.5 28C39.5 31.8 36.2 33.8 31 34.8C27 35.6 25 36.6 25 38.6C25 40.5 27.2 41.5 30.5 41.5C33.5 41.5 36.5 40.5 38.5 39.2L39.8 42.2C37.2 44 33.5 44.8 30 44.8C24.5 44.8 21.2 42.2 21.2 38C21.2 33.8 25 32 30 31.2C34.2 30.5 35.8 29.5 35.8 27.8C35.8 26.2 34.2 25.2 31.8 25.2C29.2 25.2 27.2 26 25.2 27.2L24 24.2C24.6 23.8 25.2 23.4 26 23Z"
              fill="url(#psGold)"
            />
          </g>
        </svg>
      </div>

      {variant === 'full' && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-cinzel text-base md:text-lg font-bold tracking-[0.2em] text-[#f2e2c4] drop-shadow-sm">
              PORFÍRIO & SOUZA
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#c5a367]/50 to-transparent" />
            <span className="font-cinzel text-[10px] md:text-[11px] font-semibold tracking-[0.35em] text-[#d4b57b]">
              {subtitle || 'ADVOGADOS'}
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#c5a367]/50 to-transparent" />
          </div>
        </div>
      )}

      {variant === 'monogram' && subtitle && (
        <div className="flex items-center gap-3">
          <span className="h-6 w-[1px] bg-gradient-to-b from-transparent via-[#c5a367]/60 to-transparent" />
          <div className="flex flex-col">
            <span className="font-cinzel text-xs md:text-sm tracking-[0.2em] text-[#f2e2c4] font-semibold">
              PORFÍRIO & SOUZA
            </span>
            <span className="font-cinzel text-[9px] md:text-[10px] tracking-[0.3em] text-[#d4b57b]">
              {subtitle}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
