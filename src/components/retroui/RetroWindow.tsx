interface RetroWindowProps {
    title: string
    children: React.ReactNode
    className?: string
  }
  
  export function RetroWindow({ title, children, className = "" }: RetroWindowProps) {
    return (
      <div
        className={`border-3 border-foreground bg-transparent shadow-[6px_6px_0px_0px] shadow-foreground ${className}`}
      >
        <div className="flex items-center gap-2 border-b-3 border-foreground bg-primary px-3 py-2">
          <div className="flex gap-1.5">
            <span className="block h-3 w-3 border-2 border-foreground bg-accent" />
            <span className="block h-3 w-3 border-2 border-foreground bg-secondary" />
            <span className="block h-3 w-3 border-2 border-foreground bg-muted" />
          </div>
          <span className="text-sm font-medium uppercase tracking-wider text-primary-foreground">
            {title}
          </span>
        </div>
        <div className="p-5">{children}</div>
      </div>
    )
  }
  export default RetroWindow;