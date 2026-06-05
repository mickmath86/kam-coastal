'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

/* ----------------------------------------------------------------- Eyebrow */
export function Eyebrow({ children, dark = false }) {
  return (
    <p
      className={clsx(
        'font-display text-xs font-semibold uppercase tracking-[0.2em]',
        dark ? 'text-white/50' : 'text-neutral-500',
      )}
    >
      {children}
    </p>
  )
}

/* ------------------------------------------------------------ SlideHeading */
export function SlideHeading({ eyebrow, title, lede, dark = false, className, size = 'md' }) {
  return (
    <div className={clsx('max-w-3xl', className)}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2
        className={clsx(
          'font-display font-medium tracking-tight text-balance',
          size === 'sm' ? 'mt-3 text-3xl sm:text-4xl' : 'mt-3 text-4xl sm:text-5xl lg:text-6xl',
          dark ? 'text-white' : 'text-neutral-950',
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={clsx(
            'mt-6 text-lg sm:text-xl',
            dark ? 'text-neutral-300' : 'text-neutral-600',
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  )
}

/* --------------------------------------------------------------- StatTile */
export function StatTile({ value, label, dark = false, size = 'md' }) {
  return (
    <div
      className={clsx(
        'flex flex-col rounded-3xl border p-6',
        dark
          ? 'border-white/10 bg-white/[0.03]'
          : 'border-neutral-950/10 bg-neutral-50',
      )}
    >
      <span
        className={clsx(
          'font-display font-semibold tracking-tight',
          size === 'lg' ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl',
          dark ? 'text-white' : 'text-neutral-950',
        )}
      >
        {value}
      </span>
      <span
        className={clsx(
          'mt-2 text-sm leading-snug',
          dark ? 'text-neutral-400' : 'text-neutral-600',
        )}
      >
        {label}
      </span>
    </div>
  )
}

export function StatGrid({ items, dark = false, cols = 3, size = 'md' }) {
  return (
    <div
      className={clsx(
        'grid gap-4 sm:gap-5',
        cols === 2 && 'grid-cols-1 sm:grid-cols-2',
        cols === 3 && 'grid-cols-2 lg:grid-cols-3',
        cols === 4 && 'grid-cols-2 lg:grid-cols-4',
      )}
    >
      {items.map((s, i) => (
        <StatTile key={i} {...s} dark={dark} size={size} />
      ))}
    </div>
  )
}

/* --------------------------------------------------------------- DataTable */
export function DataTable({ columns, rows, dark = false, align = [] }) {
  return (
    <div
      className={clsx(
        'overflow-hidden rounded-3xl border',
        dark ? 'border-white/10' : 'border-neutral-950/10',
      )}
    >
      <table className="w-full border-collapse text-left">
        <thead>
          <tr
            className={clsx(
              'text-xs font-semibold uppercase tracking-wider',
              dark ? 'bg-white/[0.04] text-neutral-400' : 'bg-neutral-50 text-neutral-500',
            )}
          >
            {columns.map((c, i) => (
              <th
                key={i}
                className={clsx(
                  'px-5 py-4',
                  (align[i] ?? 'left') === 'right' && 'text-right',
                )}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={clsx(
                'border-t text-sm sm:text-base',
                dark ? 'border-white/10' : 'border-neutral-950/[0.08]',
                row.emphasis &&
                  (dark
                    ? 'bg-white/[0.06] font-semibold text-white'
                    : 'bg-neutral-50 font-semibold text-neutral-950'),
                !row.emphasis && (dark ? 'text-neutral-300' : 'text-neutral-700'),
              )}
            >
              {row.cells.map((cell, ci) => (
                <td
                  key={ci}
                  className={clsx(
                    'px-5 py-3.5 tabular-nums',
                    (align[ci] ?? 'left') === 'right' && 'text-right',
                    ci === 0 && !row.emphasis && (dark ? 'text-neutral-200' : 'text-neutral-900'),
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* --------------------------------------------------------------- Checklist */
export function Checklist({ items, dark = false }) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => {
        const label = typeof item === 'string' ? item : item.label
        const detail = typeof item === 'string' ? null : item.detail
        return (
          <li key={i} className="flex gap-4">
            <span
              className={clsx(
                'mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full',
                dark ? 'bg-emerald-400/15 text-emerald-300' : 'bg-emerald-600/10 text-emerald-700',
              )}
              aria-hidden="true"
            >
              <CheckIcon />
            </span>
            <div>
              <p className={clsx('font-medium', dark ? 'text-white' : 'text-neutral-950')}>
                {label}
              </p>
              {detail ? (
                <p className={clsx('mt-0.5 text-sm', dark ? 'text-neutral-400' : 'text-neutral-600')}>
                  {detail}
                </p>
              ) : null}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="size-3.5" stroke="currentColor" strokeWidth="2.5">
      <path d="M4 10.5l3.5 3.5L16 5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ---------------------------------------------------------------- Timeline */
export function Timeline({ steps, dark = false }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <li
          key={i}
          className={clsx(
            'relative rounded-2xl border p-5',
            s.done
              ? dark
                ? 'border-emerald-400/30 bg-emerald-400/[0.06]'
                : 'border-emerald-600/30 bg-emerald-50'
              : dark
                ? 'border-white/10 bg-white/[0.03]'
                : 'border-neutral-950/10 bg-neutral-50',
          )}
        >
          <span
            className={clsx(
              'font-display text-sm font-semibold',
              s.done ? (dark ? 'text-emerald-300' : 'text-emerald-700') : dark ? 'text-white/40' : 'text-neutral-400',
            )}
          >
            {s.done ? '✓ ' : `0${i + 1} `}
          </span>
          <p className={clsx('mt-2 font-medium', dark ? 'text-white' : 'text-neutral-950')}>{s.title}</p>
          {s.detail ? (
            <p className={clsx('mt-1 text-sm', dark ? 'text-neutral-400' : 'text-neutral-600')}>{s.detail}</p>
          ) : null}
        </li>
      ))}
    </ol>
  )
}

/* ----------------------------------------------------------------- BarChart */
// Simple responsive SVG bar chart (no external dependency).
export function BarChart({ data, dark = false, format = (v) => v, height = 280 }) {
  const reduce = useReducedMotion()
  const values = data.map((d) => d.value)
  // Always anchor the baseline at zero; add headroom so value labels never clip.
  const max = Math.max(...values, 0)
  const min = Math.min(...values, 0)
  const headroom = 1.18
  const top = max * headroom || 1
  const bottom = min * headroom
  const range = top - bottom || 1
  const zeroPct = (top / range) * 100 // distance from top edge to the zero line

  return (
    <div className="w-full" style={{ height }}>
      <div className="flex h-full items-stretch gap-3 sm:gap-4 pt-2">
        {data.map((d, i) => {
          const isNeg = d.value < 0
          const barPct = (Math.abs(d.value) / range) * 100
          return (
            <div key={i} className="flex flex-1 flex-col">
              <div className="relative flex-1">
                {/* zero baseline */}
                <div
                  className={clsx('absolute inset-x-0 border-t border-dashed', dark ? 'border-white/15' : 'border-neutral-300')}
                  style={{ top: `${zeroPct}%` }}
                />
                <motion.div
                  initial={reduce ? false : { scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={clsx(
                    'absolute left-1/2 w-3/5 -translate-x-1/2 rounded-md',
                    isNeg
                      ? dark ? 'bg-rose-400/70 origin-top' : 'bg-rose-500/80 origin-top'
                      : dark ? 'bg-emerald-400 origin-bottom' : 'bg-emerald-600 origin-bottom',
                  )}
                  style={
                    isNeg
                      ? { top: `${zeroPct}%`, height: `${barPct}%` }
                      : { bottom: `${100 - zeroPct}%`, height: `${barPct}%` }
                  }
                />
                <span
                  className={clsx(
                    'absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold tabular-nums',
                    dark ? 'text-neutral-200' : 'text-neutral-700',
                  )}
                  style={isNeg ? { top: `calc(${zeroPct}% + ${barPct}% + 4px)` } : { bottom: `calc(${100 - zeroPct}% + ${barPct}% + 4px)` }}
                >
                  {format(d.value)}
                </span>
              </div>
              <span className={clsx('mt-2 text-center text-xs', dark ? 'text-neutral-400' : 'text-neutral-500')}>
                {d.label ?? d.year}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------- ProjectCard */
export function ProjectCard({ project, dark = false, compact = false }) {
  return (
    <div
      className={clsx(
        'group relative flex flex-col overflow-hidden rounded-2xl border',
        dark ? 'border-white/10 bg-white/[0.03]' : 'border-neutral-950/10 bg-white',
      )}
    >
      <div className={clsx('relative overflow-hidden bg-neutral-100', compact ? 'aspect-[16/9]' : 'aspect-[16/10]')}>
        <Image
          src={project.image}
          alt={project.client}
          className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105"
        />
        <span className="absolute right-2.5 top-2.5 rounded-full bg-neutral-950/85 px-2.5 py-0.5 font-display text-[11px] font-semibold text-white">
          {project.stat}
        </span>
      </div>
      <div className={clsx('flex flex-1 flex-col', compact ? 'p-3' : 'p-5')}>
        <p className={clsx('font-display font-semibold leading-tight', compact ? 'text-sm' : 'text-base', dark ? 'text-white' : 'text-neutral-950')}>
          {project.client}
        </p>
        <p className={clsx('mt-1 text-[11px] font-medium uppercase tracking-wider', dark ? 'text-emerald-300' : 'text-emerald-700')}>
          {project.service}
        </p>
        <p className={clsx('mt-1.5 leading-snug', compact ? 'text-xs' : 'text-sm', dark ? 'text-neutral-400' : 'text-neutral-600')}>
          {project.title}
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------ ImagePlaceholder */
export function ImagePlaceholder({ label = 'Imagery to be provided', dark = false, className }) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-3xl border border-dashed text-center',
        dark ? 'border-white/15 bg-white/[0.02] text-neutral-500' : 'border-neutral-300 bg-neutral-50 text-neutral-400',
        className,
      )}
    >
      <div className="px-6">
        <ImageIcon className="mx-auto size-8 opacity-60" />
        <p className="mt-2 text-sm">{label}</p>
      </div>
    </div>
  )
}

function ImageIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="M4 17l5-5 4 4 3-3 4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
