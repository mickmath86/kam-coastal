'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export function DeckShell({ slides }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [tabsOpen, setTabsOpen] = useState(false)
  const reduce = useReducedMotion()
  const total = slides.length

  const go = useCallback(
    (next) => {
      setIndex((prev) => {
        const clamped = Math.max(0, Math.min(total - 1, next))
        setDirection(clamped > prev ? 1 : clamped < prev ? -1 : 0)
        return clamped
      })
    },
    [total],
  )

  const next = useCallback(() => go(indexRef.current + 1), [go])
  const prev = useCallback(() => go(indexRef.current - 1), [go])

  // keep a ref so the keydown handler always sees the latest index
  const indexRef = useRef(0)
  useEffect(() => {
    indexRef.current = index
    // reflect slide in the URL hash for shareable deep-links
    if (typeof window !== 'undefined') {
      history.replaceState(null, '', `#${index + 1}`)
    }
  }, [index])

  // initialise from hash
  useEffect(() => {
    const h = parseInt(window.location.hash.replace('#', ''), 10)
    if (!Number.isNaN(h) && h >= 1 && h <= total) setIndex(h - 1)
  }, [total])

  // keyboard navigation
  useEffect(() => {
    function onKey(e) {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          e.preventDefault(); next(); break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault(); prev(); break
        case 'Home':
          e.preventDefault(); go(0); break
        case 'End':
          e.preventDefault(); go(total - 1); break
        case 'Escape':
          setTabsOpen(false); break
        default:
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, go, total])

  const Active = slides[index].Component

  const variants = {
    enter: (dir) => ({ opacity: 0, x: reduce ? 0 : dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: reduce ? 0 : dir > 0 ? -80 : 80 }),
  }

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-neutral-950">
      {/* slide stage */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={reduce ? { duration: 0 } : { duration: 0.35, ease: 'easeOut' }}
          className="h-full w-full"
          drag={reduce ? false : 'x'}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -80) next()
            else if (info.offset.x > 80) prev()
          }}
        >
          <Active />
        </motion.div>
      </AnimatePresence>

      {/* live region for a11y */}
      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {total}: {slides[index].title}
      </p>

      {/* top-left brand / back link */}
      <Link
        href="/"
        className="fixed left-5 top-5 z-30 font-display text-sm font-semibold text-white/80 transition hover:text-white"
      >
        KAM Coastal
      </Link>

      {/* arrow controls */}
      <NavArrow side="left" onClick={prev} disabled={index === 0} />
      <NavArrow side="right" onClick={next} disabled={index === total - 1} />

      {/* bottom progress + tabs toggle */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex items-end justify-between px-5 pb-5">
        <button
          onClick={() => setTabsOpen((o) => !o)}
          className="rounded-full bg-white/10 px-4 py-2 font-display text-xs font-semibold text-white backdrop-blur transition hover:bg-white/20"
        >
          {tabsOpen ? 'Close' : 'Slides'}
        </button>

        <div className="flex items-center gap-3">
          <span className="font-display text-xs font-semibold tabular-nums text-white/70">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <div className="h-1 w-32 overflow-hidden rounded-full bg-white/15">
            <motion.div
              className="h-full bg-white"
              animate={{ width: `${((index + 1) / total) * 100}%` }}
              transition={{ duration: reduce ? 0 : 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* progress dots */}
      <div className="fixed inset-x-0 bottom-16 z-20 hidden justify-center gap-1.5 sm:flex">
        {slides.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${i + 1}: ${s.title}`}
            onClick={() => go(i)}
            className={clsx(
              'h-1.5 rounded-full transition-all',
              i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/50',
            )}
          />
        ))}
      </div>

      {/* tab rail (jump menu) */}
      <AnimatePresence>
        {tabsOpen && (
          <motion.nav
            aria-label="Slides"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="fixed inset-x-0 bottom-16 z-40 mx-auto max-h-[60vh] max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-neutral-900/95 p-4 backdrop-blur"
          >
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {slides.map((s, i) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      go(i)
                      setTabsOpen(false)
                    }}
                    aria-current={i === index ? 'true' : undefined}
                    className={clsx(
                      'flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition',
                      i === index ? 'bg-white text-neutral-950' : 'text-neutral-300 hover:bg-white/10',
                    )}
                  >
                    <span className="font-display text-xs font-semibold tabular-nums opacity-60">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="truncate">{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

function NavArrow({ side, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={side === 'left' ? 'Previous slide' : 'Next slide'}
      className={clsx(
        'fixed top-1/2 z-30 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 disabled:pointer-events-none disabled:opacity-0 lg:flex',
        side === 'left' ? 'left-5' : 'right-5',
      )}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
        {side === 'left' ? (
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  )
}
