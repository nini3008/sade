'use client'

import { cn } from '@/lib/utils'

interface ContourBackgroundProps {
  className?: string
  variant?: 'right' | 'left' | 'full'
  opacity?: number
}

export function ContourBackground({
  className,
  variant = 'right',
  opacity = 0.15
}: ContourBackgroundProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 overflow-hidden pointer-events-none',
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          'absolute h-full w-auto min-w-full',
          variant === 'right' && 'right-0 translate-x-1/4',
          variant === 'left' && 'left-0 -translate-x-1/4',
          variant === 'full' && 'left-1/2 -translate-x-1/2'
        )}
        style={{ opacity }}
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Outer contour lines */}
        <path
          d="M400 50 Q550 80, 650 150 Q750 220, 720 350 Q690 480, 550 520 Q410 560, 300 500 Q190 440, 150 320 Q110 200, 200 120 Q290 40, 400 50"
          stroke="url(#contourGradient)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M400 80 Q530 105, 620 165 Q710 225, 685 340 Q660 455, 535 490 Q410 525, 315 475 Q220 425, 185 320 Q150 215, 230 145 Q310 75, 400 80"
          stroke="url(#contourGradient)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M400 110 Q510 130, 590 180 Q670 230, 650 330 Q630 430, 520 460 Q410 490, 330 450 Q250 410, 220 320 Q190 230, 260 170 Q330 110, 400 110"
          stroke="url(#contourGradient)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M400 140 Q490 155, 560 195 Q630 235, 615 320 Q600 405, 505 430 Q410 455, 345 425 Q280 395, 255 320 Q230 245, 290 195 Q350 145, 400 140"
          stroke="url(#contourGradient)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M400 170 Q470 180, 530 210 Q590 240, 580 310 Q570 380, 490 400 Q410 420, 360 400 Q310 380, 290 320 Q270 260, 320 220 Q370 180, 400 170"
          stroke="url(#contourGradient)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M400 200 Q450 205, 500 225 Q550 245, 545 300 Q540 355, 475 370 Q410 385, 375 375 Q340 365, 325 320 Q310 275, 350 245 Q390 215, 400 200"
          stroke="url(#contourGradient)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M400 230 Q430 232, 470 245 Q510 258, 510 295 Q510 332, 465 345 Q420 358, 395 350 Q370 342, 360 310 Q350 278, 375 258 Q400 238, 400 230"
          stroke="url(#contourGradient)"
          strokeWidth="1"
          fill="none"
        />
        {/* Inner core */}
        <path
          d="M400 260 Q415 262, 440 270 Q465 278, 465 295 Q465 312, 445 320 Q425 328, 405 325 Q385 322, 378 305 Q371 288, 385 275 Q399 262, 400 260"
          stroke="url(#contourGradient)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Secondary contour cluster - offset */}
        <g transform="translate(-150, 100) scale(0.6)">
          <path
            d="M400 50 Q550 80, 650 150 Q750 220, 720 350 Q690 480, 550 520 Q410 560, 300 500 Q190 440, 150 320 Q110 200, 200 120 Q290 40, 400 50"
            stroke="url(#contourGradient)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M400 100 Q520 120, 600 175 Q680 230, 660 335 Q640 440, 525 475 Q410 510, 320 460 Q230 410, 200 320 Q170 230, 250 160 Q330 90, 400 100"
            stroke="url(#contourGradient)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M400 150 Q490 165, 550 205 Q610 245, 595 325 Q580 405, 495 430 Q410 455, 345 420 Q280 385, 260 315 Q240 245, 305 195 Q370 145, 400 150"
            stroke="url(#contourGradient)"
            strokeWidth="1"
            fill="none"
          />
        </g>

        {/* Third contour cluster - bottom right */}
        <g transform="translate(200, 250) scale(0.5)">
          <path
            d="M400 80 Q530 105, 620 165 Q710 225, 685 340 Q660 455, 535 490 Q410 525, 315 475 Q220 425, 185 320 Q150 215, 230 145 Q310 75, 400 80"
            stroke="url(#contourGradient)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M400 130 Q500 145, 575 195 Q650 245, 630 335 Q610 425, 505 455 Q400 485, 320 445 Q240 405, 215 325 Q190 245, 265 190 Q340 135, 400 130"
            stroke="url(#contourGradient)"
            strokeWidth="1"
            fill="none"
          />
        </g>

        <defs>
          <linearGradient id="contourGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C6A76E" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#A8894F" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C6A76E" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
