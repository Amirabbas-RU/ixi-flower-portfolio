'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { LayoutDashboard, FileText, SlidersHorizontal, ExternalLink, LogOut, Menu, X } from 'lucide-react'

const NAV = [
  { href: '/admin', label: 'Profile', icon: LayoutDashboard, exact: true },
  { href: '/admin/blog', label: 'Blog', icon: FileText },
  { href: '/admin/site-content', label: 'Site content', icon: SlidersHorizontal },
] as const

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  async function logout() {
    await fetch('/api/admin/auth/logout', { method: 'POST' })
    router.replace('/admin/login')
    router.refresh()
  }

  const isLogin = pathname === '/admin/login'
  if (isLogin) return null

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      {NAV.map((item) => {
        const isExact = (item as { exact?: boolean }).exact === true
        const active = isExact ? pathname === item.href : pathname.startsWith(item.href)
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClick}
            className={`flex items-center gap-2.5 px-3 py-2 text-xs font-mono border transition-colors ${active ? 'bg-zinc-100 text-zinc-900 border-zinc-100' : 'bg-transparent text-zinc-400 border-transparent hover:text-zinc-100 hover:bg-zinc-900 hover:border-zinc-800'}`}
          >
            <Icon className="h-3.5 w-3.5 shrink-0" />
            {item.label}
          </Link>
        )
      })}
    </>
  )

  return (
    <>
      {/* mobile top bar */}
      <div className="md:hidden sticky top-0 z-30 flex items-center justify-between gap-2 px-3 py-2 bg-zinc-950 border-b border-zinc-800">
        <span className="text-xs font-bold text-zinc-100 font-mono">ixi-admin</span>
        <button onClick={() => setOpen((v) => !v)} className="h-8 w-8 flex items-center justify-center border border-zinc-800 text-zinc-400 hover:text-zinc-100">
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950 p-3 space-y-1">
          <NavLinks onClick={() => setOpen(false)} />
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 px-3 py-2 text-xs font-mono text-zinc-500 hover:text-zinc-200">
            <ExternalLink className="h-3.5 w-3.5" /> Back to site
          </Link>
          <button onClick={logout} className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-mono text-zinc-500 hover:text-red-400 border border-transparent hover:border-red-900/50 hover:bg-red-950/20 transition-colors">
            <LogOut className="h-3.5 w-3.5" /> Logout
          </button>
        </div>
      )}

      {/* desktop sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-56 shrink-0 flex-col border-r border-zinc-800 bg-zinc-950 p-3">
        <div className="px-2 py-3 border-b border-zinc-800 mb-3">
          <div className="text-xs font-bold text-zinc-100 font-mono tracking-tight">ixi-admin</div>
          <div className="text-[10px] text-zinc-500 font-mono mt-0.5">$ admin --owner-only</div>
        </div>
        <nav className="flex-1 space-y-1">
          <NavLinks />
        </nav>
        <div className="space-y-1 pt-3 border-t border-zinc-800">
          <Link href="/" className="flex items-center gap-2.5 px-3 py-2 text-xs font-mono text-zinc-500 hover:text-zinc-200 border border-transparent hover:border-zinc-800 hover:bg-zinc-900 transition-colors">
            <ExternalLink className="h-3.5 w-3.5" /> Back to site
          </Link>
          <button
            onClick={logout}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-mono text-zinc-500 hover:text-red-400 hover:border-red-500/40 hover:bg-red-950/20 hover:shadow-[0_0_12px_rgba(239,68,68,0.25)] border border-transparent transition-all"
          >
            <LogOut className="h-3.5 w-3.5" /> Logout
          </button>
        </div>
      </aside>
    </>
  )
}
