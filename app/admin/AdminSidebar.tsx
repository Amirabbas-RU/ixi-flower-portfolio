'use client'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'
import {
  LayoutDashboard,
  FileText,
  SlidersHorizontal,
  ExternalLink,
  LogOut,
  Menu,
  X,
  Music,
  Clock,
  Layers,
  GraduationCap,
  ChevronDown,
  ChevronRight,
} from 'lucide-react'

const CHILDREN = [
  { label: 'Playlist', href: '/admin/site-content?tab=playlist', tab: 'playlist', icon: Music },
  { label: 'WakaTime', href: '/admin/site-content?tab=waka', tab: 'waka', icon: Clock },
  { label: 'Tech Stack', href: '/admin/site-content?tab=tech', tab: 'tech', icon: Layers },
  { label: 'Courses', href: '/admin/site-content?tab=courses', tab: 'courses', icon: GraduationCap },
] as const

function SidebarInner({ onLogout }: { onLogout: () => void }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isSiteContent = pathname.startsWith('/admin/site-content')
  const activeTab = searchParams.get('tab') || 'playlist'
  const [expanded, setExpanded] = useState(isSiteContent)

  useEffect(() => {
    if (isSiteContent) setExpanded(true)
  }, [isSiteContent])

  const siteActive = pathname.startsWith('/admin/site-content')

  return (
    <>
      <Link
        href="/admin"
        className={`flex items-center gap-2.5 px-3 py-2 text-xs font-mono border transition-colors ${pathname === '/admin' ? 'bg-zinc-100 text-zinc-900 border-zinc-100' : 'bg-transparent text-zinc-400 border-transparent hover:text-zinc-100 hover:bg-zinc-900 hover:border-zinc-800'}`}
      >
        <LayoutDashboard className="h-3.5 w-3.5 shrink-0" /> Profile
      </Link>
      <Link
        href="/admin/blog"
        className={`flex items-center gap-2.5 px-3 py-2 text-xs font-mono border transition-colors ${pathname.startsWith('/admin/blog') ? 'bg-zinc-100 text-zinc-900 border-zinc-100' : 'bg-transparent text-zinc-400 border-transparent hover:text-zinc-100 hover:bg-zinc-900 hover:border-zinc-800'}`}
      >
        <FileText className="h-3.5 w-3.5 shrink-0" /> Blog
      </Link>

      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-mono border transition-colors ${siteActive ? 'bg-zinc-100 text-zinc-900 border-zinc-100' : 'bg-transparent text-zinc-400 border-transparent hover:text-zinc-100 hover:bg-zinc-900 hover:border-zinc-800'}`}
        >
          <SlidersHorizontal className="h-3.5 w-3.5 shrink-0" />
          <span className="flex-1 text-left">Site content</span>
          {expanded ? <ChevronDown className="h-3 w-3 shrink-0" /> : <ChevronRight className="h-3 w-3 shrink-0" />}
        </button>
        {expanded && (
          <div className="mt-1 ml-3 border-l border-zinc-800 pl-2 space-y-0.5">
            {CHILDREN.map((c) => {
              const isActive = siteActive && activeTab === c.tab
              const Icon = c.icon
              return (
                <Link
                  key={c.tab}
                  href={c.href}
                  className={`flex items-center gap-2 px-2.5 py-1.5 text-[11px] font-mono border transition-colors ${isActive ? 'bg-zinc-800 text-zinc-100 border-zinc-700' : 'bg-transparent text-zinc-500 border-transparent hover:text-zinc-200 hover:bg-zinc-900'}`}
                >
                  <Icon className="h-3 w-3 shrink-0" />
                  {c.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

function MobileSidebarInner({
  onNavigate,
  onLogout,
}: {
  onNavigate: () => void
  onLogout: () => void
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isSiteContent = pathname.startsWith('/admin/site-content')
  const activeTab = searchParams.get('tab') || 'playlist'
  const [expanded, setExpanded] = useState(isSiteContent)

  useEffect(() => {
    if (isSiteContent) setExpanded(true)
  }, [isSiteContent])

  const siteActive = pathname.startsWith('/admin/site-content')

  return (
    <div className="space-y-1">
      <Link
        href="/admin"
        onClick={onNavigate}
        className={`flex items-center gap-2.5 px-3 py-2 text-xs font-mono border transition-colors ${pathname === '/admin' ? 'bg-zinc-100 text-zinc-900 border-zinc-100' : 'bg-transparent text-zinc-400 border-transparent hover:text-zinc-100 hover:bg-zinc-900 hover:border-zinc-800'}`}
      >
        <LayoutDashboard className="h-3.5 w-3.5 shrink-0" /> Profile
      </Link>
      <Link
        href="/admin/blog"
        onClick={onNavigate}
        className={`flex items-center gap-2.5 px-3 py-2 text-xs font-mono border transition-colors ${pathname.startsWith('/admin/blog') ? 'bg-zinc-100 text-zinc-900 border-zinc-100' : 'bg-transparent text-zinc-400 border-transparent hover:text-zinc-100 hover:bg-zinc-900 hover:border-zinc-800'}`}
      >
        <FileText className="h-3.5 w-3.5 shrink-0" /> Blog
      </Link>
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-mono border transition-colors ${siteActive ? 'bg-zinc-100 text-zinc-900 border-zinc-100' : 'bg-transparent text-zinc-400 border-transparent hover:text-zinc-100 hover:bg-zinc-900 hover:border-zinc-800'}`}
        >
          <SlidersHorizontal className="h-3.5 w-3.5 shrink-0" />
          <span className="flex-1 text-left">Site content</span>
          {expanded ? <ChevronDown className="h-3 w-3 shrink-0" /> : <ChevronRight className="h-3 w-3 shrink-0" />}
        </button>
        {expanded && (
          <div className="mt-1 ml-3 border-l border-zinc-800 pl-2 space-y-0.5">
            {CHILDREN.map((c) => {
              const isActive = siteActive && activeTab === c.tab
              const Icon = c.icon
              return (
                <Link
                  key={c.tab}
                  href={c.href}
                  onClick={onNavigate}
                  className={`flex items-center gap-2 px-2.5 py-1.5 text-[11px] font-mono border transition-colors ${isActive ? 'bg-zinc-800 text-zinc-100 border-zinc-700' : 'bg-transparent text-zinc-500 border-transparent hover:text-zinc-200 hover:bg-zinc-900'}`}
                >
                  <Icon className="h-3 w-3 shrink-0" />
                  {c.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
      <Link
        href="/"
        onClick={onNavigate}
        className="flex items-center gap-2.5 px-3 py-2 text-xs font-mono text-zinc-500 hover:text-zinc-200"
      >
        <ExternalLink className="h-3.5 w-3.5" /> Back to site
      </Link>
      <button
        onClick={onLogout}
        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-mono text-zinc-500 hover:text-red-400 border border-transparent hover:border-red-900/50 hover:bg-red-950/20 transition-colors"
      >
        <LogOut className="h-3.5 w-3.5" /> Logout
      </button>
    </div>
  )
}

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
          <Suspense fallback={<div className="text-[11px] text-zinc-600 font-mono">loading…</div>}>
            <MobileSidebarInner onNavigate={() => setOpen(false)} onLogout={logout} />
          </Suspense>
        </div>
      )}

      {/* desktop sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-56 shrink-0 flex-col border-r border-zinc-800 bg-zinc-950 p-3">
        <div className="px-2 py-3 border-b border-zinc-800 mb-3">
          <div className="text-xs font-bold text-zinc-100 font-mono tracking-tight">ixi-admin</div>
          <div className="text-[10px] text-zinc-500 font-mono mt-0.5">$ admin --owner-only</div>
        </div>
        <nav className="flex-1 space-y-1">
          <Suspense fallback={<div className="text-[11px] text-zinc-600 font-mono px-3 py-2">loading…</div>}>
            <SidebarInner onLogout={logout} />
          </Suspense>
        </nav>
        <div className="space-y-1 pt-3 border-t border-zinc-800">
          <Link
            href="/"
            className="flex items-center gap-2.5 px-3 py-2 text-xs font-mono text-zinc-500 hover:text-zinc-200 border border-transparent hover:border-zinc-800 hover:bg-zinc-900 transition-colors"
          >
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
