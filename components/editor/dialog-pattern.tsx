import type { ReactNode } from "react"

interface DialogPatternProps {
  title: string
  description: string
  children?: ReactNode
  footer?: ReactNode
  className?: string
}

export function DialogPattern({
  title,
  description,
  children,
  footer,
  className,
}: DialogPatternProps) {
  return (
    <section
      className={
        "rounded-3xl border border-border-default bg-bg-surface p-6 shadow-xl shadow-black/20 " +
        (className ?? "")
      }
    >
      <header className="mb-5">
        <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-text-secondary">{description}</p>
      </header>

      <div className="space-y-6">{children}</div>

      {footer !== null && footer !== undefined && footer !== false && footer !== "" ? (
        <footer className="mt-6 rounded-2xl border-t border-border-default bg-bg-subtle/80 px-4 py-4 text-right">
          {footer}
        </footer>
      ) : null}
    </section>
  )
}
