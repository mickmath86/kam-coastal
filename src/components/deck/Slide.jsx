'use client'

import clsx from 'clsx'
import Image from 'next/image'

// A single full-viewport (100dvh) slide frame.
// `tone` controls light/dark; content is centered with consistent padding.
// Note: backgroundImage and backgroundColor are handled by DeckShell, not here
export function Slide({ children, tone = 'light', className, padded = true, footer = true, dense = false }) {
  const dark = tone === 'dark'
  
  return (
    <section
      className={clsx(
        'relative flex h-[100dvh] w-full flex-col overflow-hidden',
        dark ? 'text-white' : 'text-neutral-950',
        className,
      )}
    >
      <div
        className={clsx(
          'relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center',
          padded && (dense ? 'px-6 py-12 sm:px-10 lg:px-12' : 'px-6 py-20 sm:px-10 lg:px-12'),
        )}
      >
        {children}
      </div>
      {footer ? (
        <div
          className={clsx(
            'pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center justify-between px-6 pb-16 pt-4 text-[11px] tracking-wide sm:px-10',
            dark ? 'text-neutral-500' : 'text-neutral-400',
          )}
        >
          <span className="font-display font-semibold">KAM Coastal</span>
          <span>CONFIDENTIAL &amp; PROPRIETARY</span>
        </div>
      ) : null}
    </section>
  )
}
