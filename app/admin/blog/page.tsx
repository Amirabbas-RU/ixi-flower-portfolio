'use client'
import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { Pencil, Trash2, Eye, EyeOff, Plus, Search } from 'lucide-react'

type Post = {
  id: string; slug: string; title: string; excerpt: string | null
  status: string; publishedAt: string | null; updatedAt: string
  tags?: { id: number; slug: string; name: string }[]
}

function getHeaders(): Record<string, string> {
  const secret = typeof window !== 'undefined' ? localStorage.getItem('ixi_admin_secret') : null
  if (secret) return { 'x-admin-secret': secret }
  return { 'x-admin-email': 'amirabbas.rouintan2007@gmail.com' }
}

export default function AdminBlogList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [q, setQ] = useState('')
  const [busyId, setBusyId] = useState<string | null>(null)
  const [fetching, setFetching] = useState(false)
  const [err, setErr] = useState('')

  const load = useCallback(async (query: string) => {
    setFetching(true); setErr('')
    try {
      const r = await fetch(`/api/admin/blog?q=${encodeURIComponent(query)}`, { headers: getHeaders(), cache: 'no-store' })
      if (r.status === 401 || r.status === 403) throw new Error('Unauthorized — set ADMIN_SECRET in settings below')
      if (!r.ok) throw new Error('Failed to load posts')
      const data = await r.json()
      setPosts(data.posts || [])
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Load failed')
    } finally { setFetching(false) }
  }, [])

  useEffect(() => {
    const t = setTimeout(() => load(q.trim()), 300)
    return () => clearTimeout(t)
  }, [q, load])

  const togglePublish = async (p: Post) => {
    setBusyId(p.id)
    try {
      const r = await fetch(`/api/admin/blog/${p.id}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json', ...getHeaders() },
        body: JSON.stringify({ status: p.status === 'published' ? 'draft' : 'published' }),
      })
      if (r.ok) await load(q.trim())
    } finally { setBusyId(null) }
  }

  const remove = async (p: Post) => {
    if (!confirm(`Delete "${p.title}"?`)) return
    setBusyId(p.id)
    try {
      const r = await fetch(`/api/admin/blog/${p.id}`, { method: 'DELETE', headers: getHeaders() })
      if (r.ok) await load(q.trim())
    } finally { setBusyId(null) }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 admin-fade">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 admin-fade">
        <div>
          <h1 className="text-xl font-bold text-zinc-100">Blog — admin</h1>
          <p className="text-xs text-zinc-500 mt-1 font-mono">$ ls admin/blog — {posts.length} posts</p>
        </div>
        {/* desktop sidebar already has nav — hide redundant buttons on md+ */}
        <div className="flex gap-2 md:hidden">
          <Link href="/admin/blog/new" className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-100 text-zinc-900 text-sm hover:bg-white"><Plus className="h-3.5 w-3.5" /> New post</Link>
          <Link href="/" className="px-4 py-2 border border-zinc-800 text-sm text-zinc-400 hover:text-zinc-100">← Site</Link>
        </div>
        {/* desktop: only New post */}
        <Link href="/admin/blog/new" className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-100 text-zinc-900 text-sm hover:bg-white"><Plus className="h-3.5 w-3.5" /> New post</Link>
      </div>

      <div className="relative max-w-md mb-4 admin-fade admin-fade-d1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-600" />
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search posts…" className="w-full bg-zinc-900 border border-zinc-800 pl-9 pr-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600" />
      </div>

      {err && <div className="border border-red-900/50 bg-red-950/30 text-red-300 text-sm px-4 py-3 mb-4 font-mono admin-fade">{err}</div>}

      <div className="border border-zinc-800 bg-zinc-900/50 p-4 admin-fade admin-fade-d2">
        {fetching && posts.length === 0 ? (
          <p className="text-zinc-600 text-sm text-center py-8">Loading…</p>
        ) : posts.length === 0 ? (
          <p className="text-zinc-600 text-sm text-center py-8">No posts yet — create one.</p>
        ) : (
          <div className="space-y-2">
            {posts.map(p => (
              <div key={p.id} className="flex flex-wrap items-center gap-3 p-3 border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-colors">
                <div className="flex-1 min-w-[200px]">
                  <div className="text-sm font-medium text-zinc-100 truncate">{p.title}</div>
                  <div className="text-[11px] text-zinc-500 mt-1 flex gap-3 font-mono">
                    <span>/{p.slug}</span>
                    <span>{p.status}</span>
                    {p.tags && p.tags.length > 0 && <span>{p.tags.map(t => t.name).join(', ')}</span>}
                  </div>
                </div>
                <span className={`text-[11px] px-2 py-1 border font-mono ${p.status === 'published' ? 'bg-emerald-950/40 text-emerald-400 border-emerald-900/50' : 'bg-zinc-800 text-zinc-500 border-zinc-700'}`}>
                  {p.status}
                </span>
                <div className="flex gap-1.5">
                  <button onClick={() => togglePublish(p)} disabled={busyId === p.id} title={p.status === 'published' ? 'Unpublish' : 'Publish'} className={`h-7 w-7 flex items-center justify-center border disabled:opacity-50 transition-colors ${p.status === 'published' ? 'border-zinc-800 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300' : 'border-emerald-900/50 text-emerald-400 hover:bg-emerald-950/30'}`}>
                    {p.status === 'published' ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                  </button>
                  <Link href={`/admin/blog/${p.id}/edit`} title="Edit" className="h-7 w-7 flex items-center justify-center border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-colors"><Pencil className="h-3.5 w-3.5" /></Link>
                  <button onClick={() => remove(p)} disabled={busyId === p.id} title="Delete" className="h-7 w-7 flex items-center justify-center border border-red-900/50 text-red-400 hover:bg-red-950/30 disabled:opacity-50 transition-colors"><Trash2 className="h-3.5 w-3.5" /></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
