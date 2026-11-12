import { useEffect, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Leaf,
  Menu,
  Search,
  ShieldCheck,
  X,
} from 'lucide-react'
import {
  AboutPage,
  CommunityPage,
  ContactPage,
  EventsPage,
  GetInvolvedPage,
  GivePage,
  HomePage,
  LearnPage,
  MembersPage,
  NotFoundPage,
  PrivacyPage,
} from './pages.jsx'

const navigation = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Get involved', to: '/get-involved' },
  { label: 'Learn', to: '/learn' },
  { label: 'Events', to: '/events' },
  { label: 'Community', to: '/community' },
  { label: 'Give', to: '/give' },
  { label: 'Members', to: '/members' },
]

const searchPages = [
  { title: 'Home — welcome to the ministry', path: '/' },
  { title: 'About — mission, vision, and Bible foundation', path: '/about' },
  { title: 'Get involved — volunteer and serve', path: '/get-involved' },
  { title: 'Learn — Eight Laws of Health, Bible studies, and kids resources', path: '/learn' },
  { title: 'Events — training, expos, prayer, and book club', path: '/events' },
  { title: 'Community — prayer and fasting groups', path: '/community' },
  { title: 'Give — donate and partner with the mission', path: '/give' },
  { title: 'Members — regional groups and announcements', path: '/members' },
  { title: 'Contact the ministry', path: '/contact' },
]

const pageMetadata = {
  '/': ['Home', 'A Bible-centered medical missionary ministry sharing practical health education and the hope of Jesus through community outreach.'],
  '/about': ['About our medical missionary ministry', 'Learn what medical missionary work means at Trumpeters: whole-person health education, Christian service, community outreach, and the Bible foundation.'],
  '/get-involved': ['Get involved', 'Explore volunteer roles and contact the ministry about serving at community health outreaches.'],
  '/learn': ['Learn and grow', 'Explore the Eight Laws of Health, Bible studies, and practical educational resources.'],
  '/events': ['Events and health expos', 'Learn about health expo outreach, volunteer preparation, prayer, fasting, and training activities.'],
  '/community': ['Community and prayer', 'Connect with the men’s prayer and fasting group and contact the ministry with a private prayer request.'],
  '/give': ['Give and partner', 'Learn how to ask the ministry about secure giving and current outreach needs.'],
  '/members': ['Member connections', 'Request current ministry group links, announcements, and member resources.'],
  '/contact': ['Contact the ministry', 'Contact Trumpeters Missionary Institution on WhatsApp about volunteering, events, or learning resources.'],
  '/privacy': ['Privacy and safety', 'Read the ministry website’s privacy and safety guidance for prayer requests and children’s photos.'],
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
  }, [location.pathname])

  const matches = searchPages.filter((page) =>
    page.title.toLowerCase().includes(query.trim().toLowerCase()),
  )

  return (
    <>
      <div className="announcement">
        <span className="announcement-dot" />
        <span>A healthier community starts with one small step.</span>
        <Link to="/events">Find your next step <ArrowRight size={14} /></Link>
      </div>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Trumpeters Missionary Institution home">
          <span className="brand-mark"><Leaf size={21} strokeWidth={2.2} /></span>
          <span className="brand-words"><strong>TRUMPETERS</strong><small>MISSIONARY INSTITUTION</small></span>
        </Link>
        <button
          className="icon-button mobile-menu-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => isActive ? 'active' : ''}>
              {item.label}
            </NavLink>
          ))}
          <NavLink className="mobile-nav-link" to="/contact">Contact</NavLink>
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="icon-button search-toggle"
            aria-label={searchOpen ? 'Close search' : 'Search website'}
            aria-expanded={searchOpen}
            onClick={() => {
              setSearchOpen((open) => !open)
              setQuery('')
              setTimeout(() => document.getElementById('site-search')?.focus(), 0)
            }}
          >
            <Search size={19} />
          </button>
          <Link className="button button--navy button--small" to="/get-involved">
            Join the mission <ArrowUpRight size={15} />
          </Link>
        </div>
      </header>
      {searchOpen && (
        <div className="search-panel">
          <label htmlFor="site-search">Search the website</label>
          <div className="search-input-wrap">
            <Search size={17} />
            <input id="site-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “prayer”, “health”, or “events”…" />
            <button type="button" className="icon-button" aria-label="Close search" onClick={() => setSearchOpen(false)}><X size={17} /></button>
          </div>
          <div className="search-results">
            {matches.map((page) => <Link key={page.path} to={page.path}>{page.title}<ArrowUpRight size={14} /></Link>)}
            {matches.length === 0 && <p>No pages match that search. Try another word.</p>}
          </div>
        </div>
      )}
    </>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand brand--footer" to="/">
            <span className="brand-mark"><Leaf size={21} strokeWidth={2.2} /></span>
            <span className="brand-words"><strong>TRUMPETERS</strong><small>MISSIONARY INSTITUTION</small></span>
          </Link>
          <p>Sharing health. Growing hope.<br />Serving together.</p>
          <a className="footer-contact" href="https://wa.me/27684447857" target="_blank" rel="noreferrer">WhatsApp <span>+27 68 444 7857</span><ArrowUpRight size={14} /></a>
        </div>
        <div className="footer-links">
          <div><strong>Discover</strong><Link to="/about">Our mission</Link><Link to="/get-involved">Get involved</Link><Link to="/events">Events & training</Link></div>
          <div><strong>Explore</strong><Link to="/learn">Learning library</Link><Link to="/community">Prayer community</Link><Link to="/members">Members</Link></div>
          <div><strong>Connect</strong><Link to="/give">Give & partner</Link><Link to="/contact">Contact the team</Link><Link to="/privacy">Privacy & safety</Link></div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Trumpeters Missionary Institution</span>
        <span className="footer-safety"><ShieldCheck size={14} /> Caring for people with dignity, faith, and respect.</span>
        <Link to="/privacy">Privacy & safety <ArrowUpRight size={13} /></Link>
      </div>
    </footer>
  )
}

function AppLayout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  useEffect(() => {
    const [pageTitle, description] = pageMetadata[location.pathname] ?? ['Page not found', 'The requested ministry website page could not be found.']
    document.title = `${pageTitle} | Trumpeters Missionary Institution`
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [location.pathname])

  return (
    <>
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/give" element={<GivePage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  )
}

export default function App() {
  return <BrowserRouter><AppLayout /></BrowserRouter>
}
