import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  Cross,
  Heart,
  HeartHandshake,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Sun,
  UsersRound,
  Waves,
  Wind,
} from 'lucide-react'

const whatsappNumber = '27684447857'
const whatsappLink = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

const photos = {
  outreachTeam: {
    src: '/images/cross-roads-team.jpg',
    alt: 'The Cross Roads health outreach team standing together at their community event',
  },
  healthProfessional: {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
    alt: 'A health professional’s hands using a smartphone beside a stethoscope',
  },
}

const laws = [
  { title: 'Pure air', icon: Wind, detail: 'Make space for fresh air and healthy surroundings.' },
  { title: 'Sunlight', icon: Sun, detail: 'Enjoy the benefits of sensible time in natural light.' },
  { title: 'Temperance', icon: Sparkles, detail: 'Choose balance and avoid what causes harm.' },
  { title: 'Rest', icon: Waves, detail: 'Make time for restorative rest and a weekly day of worship.' },
  { title: 'Exercise', icon: Heart, detail: 'Build movement into daily life.' },
  { title: 'Proper diet', icon: Leaf, detail: 'Choose nourishing, wholesome foods.' },
  { title: 'Water', icon: Waves, detail: 'Drink clean water and use it wisely.' },
  { title: 'Trust in God', icon: Cross, detail: 'Nurture faith, gratitude, and spiritual wellbeing.' },
]

const eventTypes = [
  {
    category: 'Prayer & fasting',
    title: 'Wednesday prayer and fasting',
    detail: 'A midweek rhythm for prayer, reflection, and fellowship.',
    icon: Heart,
  },
  {
    category: 'Book club',
    title: 'A chapter a week',
    detail: 'Read, reflect, and discuss together as a community.',
    icon: BookOpen,
  },
  {
    category: 'Training & outreach',
    title: 'Health expo training',
    detail: 'Get equipped to serve at a community health expo.',
    icon: Stethoscope,
  },
]

function PageHero({ eyebrow, title, description, photo, tone = 'default' }) {
  return (
    <section className={`page-hero page-hero--${tone}${photo ? '' : ' page-hero--plain'}`}>
      <div className="page-hero-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {photo && (
        <figure className="page-hero-photo">
          <img src={photo.src} alt={photo.alt} />
          <figcaption>{photo.alt}</figcaption>
        </figure>
      )}
    </section>
  )
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="page-section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function ContactCard({ title = 'Talk with our team', message = 'Hello! I would like to learn more about the ministry.' }) {
  return (
    <a className="contact-card" href={whatsappLink(message)} target="_blank" rel="noreferrer">
      <span className="contact-card-icon"><MessageCircle size={20} /></span>
      <span><strong>{title}</strong><small>WhatsApp · +27 68 444 7857</small></span>
      <ArrowUpRight size={17} />
    </a>
  )
}

function HomePage() {
  return (
    <>
      <section className="home-hero">
        <img className="home-hero-image" src={photos.outreachTeam.src} alt={photos.outreachTeam.alt} />
        <div className="home-hero-shade" />
        <div className="home-hero-copy">
          <span className="hero-kicker"><span /> CALLED TO SERVE. EQUIPPED TO HEAL.</span>
          <h1>Health is a gift.<br />Sharing it is a <em>calling.</em></h1>
          <p>We equip people to share practical health education and Christian hope through compassionate community service. Everyone can play a part—no medical training required to get started.</p>
          <div className="hero-actions">
            <Link className="button button--green" to="/get-involved">Find your place <ArrowRight size={17} /></Link>
            <Link className="button button--glass" to="/about"><span className="play-icon"><ArrowRight size={13} /></span> Discover our mission</Link>
          </div>
          <div className="home-hero-note"><UsersRound size={17} /> A community learning and serving together</div>
        </div>
        <span className="home-hero-caption">CROSS ROADS · HEALTH OUTREACH · COMMUNITY CARE</span>
      </section>

      <section className="home-mission content-wrap">
        <div>
          <span className="eyebrow">Trumpeters Missionary Institution</span>
          <h2>Health education.<br /><em>Faith in action.</em></h2>
        </div>
        <p>We invite, train, and equip people to serve their neighbours through health and gospel work. Our ministry is rooted in Christian faith and a care for the whole person.</p>
        <Link className="text-link" to="/about">Get to know us <ArrowRight size={16} /></Link>
      </section>

      <section className="home-next-section">
        <div className="content-wrap home-next-grid">
          <div>
            <span className="eyebrow">Find your next step</span>
            <h2>There’s room<br />for you <em>here.</em></h2>
            <p>Learn a health principle, connect with the prayer community, or help bring an expo to your area.</p>
            <Link className="button button--navy" to="/get-involved">Explore ways to serve <ArrowRight size={16} /></Link>
          </div>
          <figure className="home-community-photo">
            <img src={photos.outreachTeam.src} alt={photos.outreachTeam.alt} loading="lazy" />
            <figcaption>The Cross Roads team serving their community through health outreach.</figcaption>
          </figure>
        </div>
      </section>

      <section className="home-links content-wrap">
        <SectionTitle eyebrow="Explore the ministry" title="A few ways to get started" />
        <div className="home-link-grid">
          <Link to="/learn"><BookOpen /><span><strong>Learn & grow</strong><small>Health principles, Bible studies, and resources.</small></span><ArrowUpRight /></Link>
          <Link to="/events"><CalendarDays /><span><strong>Gather with us</strong><small>Training, prayer, fasting, and book club.</small></span><ArrowUpRight /></Link>
          <Link to="/community"><HeartHandshake /><span><strong>Find community</strong><small>Connect with prayer and fellowship groups.</small></span><ArrowUpRight /></Link>
        </div>
      </section>

      <section className="home-cta">
        <span className="eyebrow eyebrow--light">Come as you are</span>
        <h2>Let’s serve our<br /><em>communities together.</em></h2>
        <Link className="button button--green" to="/get-involved">Get involved <ArrowRight size={16} /></Link>
      </section>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the ministry"
        title={<>Care for the whole person.<br /><em>Serve with faith.</em></>}
        description="Trumpeters Missionary Institution exists to invite, train, equip, and mobilise medical missionaries for health and gospel work."
        photo={photos.outreachTeam}
      />
      <section className="page-content content-wrap">
        <div className="story-grid">
          <div>
            <SectionTitle eyebrow="Our purpose" title="Health ministry rooted in hope" />
            <p>We believe practical health education and loving service can help strengthen individuals and communities. Our work brings people together to learn, care for one another, and share the hope of the gospel.</p>
            <p>Medical missionary work can include health expos, prayer, cooking, music, transport, children’s activities, and many other gifts. You do not need to be a clinician to begin serving.</p>
          </div>
          <div className="scripture-card"><Cross size={23} /><blockquote>“I am come that they might have life, and that they might have it more abundantly.”</blockquote><span>JOHN 10:10 · KJV</span></div>
        </div>
        <div className="about-image-row">
          <img src={photos.outreachTeam.src} alt={photos.outreachTeam.alt} loading="lazy" />
          <div><span className="eyebrow">Many gifts, one purpose</span><h2>Every willing heart<br /><em>has a place.</em></h2><p>This Cross Roads outreach photo shows the kind of community work behind the ministry. Health checks, cooking, hospitality, prayer, transport, and children’s activities all need caring people.</p><Link className="text-link" to="/get-involved">Find a way to serve <ArrowRight size={15} /></Link></div>
        </div>
        <section className="faq-section">
          <SectionTitle eyebrow="New here?" title="A few helpful answers" description="If you still have questions, the ministry team can share current details." />
          <div className="faq-list">
            <details><summary>Who can join the ministry?</summary><p>People who want to learn and serve can ask to get involved. There are practical roles in hospitality, prayer, transport, children’s activities, media, and health outreach.</p></details>
            <details><summary>Do I need medical training?</summary><p>No training is needed for many volunteer roles. Health checks and other clinical tasks should only be carried out by people who are appropriately trained and authorized.</p></details>
            <details><summary>What does it cost to attend or volunteer?</summary><p>Costs, if any, depend on the activity. Contact the team before making plans so they can confirm current training, travel, and event arrangements.</p></details>
            <details><summary>What should I bring to a health expo?</summary><p>Confirm the checklist with your coordinator. Comfortable clothing, suitable shoes, water, and your assigned materials are a sensible start. Follow the event plan and protect guests’ privacy.</p></details>
            <details><summary>Can I take and share photos at an outreach?</summary><p>Ask permission before photographing or sharing anyone’s image. Photos of children require permission from a parent or guardian. Avoid sharing full names or private health information.</p></details>
          </div>
        </section>
        <ContactCard title="Ask about our mission" message="Hello! I would like to know more about Trumpeters Missionary Institution and its mission." />
      </section>
    </>
  )
}

function GetInvolvedPage() {
  const [submitted, setSubmitted] = useState(false)
  const [role, setRole] = useState('Health expo volunteer')

  function submitVolunteerForm(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const message = `Hello! My name is ${name}. I would like to volunteer as: ${role}. ${formData.get('message') || ''}`
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title={<>Bring what you have.<br /><em>Find your place.</em></>}
        description="Serve your community through practical health outreach, prayer, hospitality, and the gifts God has given you."
        photo={photos.outreachTeam}
      />
      <section className="page-content content-wrap">
        <SectionTitle eyebrow="Ways to serve" title="You don’t have to do it all" description="Choose one place to begin. We’ll connect you with the next step." />
        <div className="role-grid">
          {[
            ['Health outreach', 'Welcome guests, help with health checks, and share useful information.', Stethoscope],
            ['Cooking & hospitality', 'Help prepare food, serve refreshments, and make people feel welcome.', HeartHandshake],
            ['Prayer & music', 'Support the spiritual life of an outreach through prayer and song.', Heart],
            ['Transport & logistics', 'Help volunteers and equipment get where they need to be.', UsersRound],
            ['Children & families', 'Help create a safe, welcoming space for children and families.', Sparkles],
            ['Media & communication', 'Help share updates, photographs, and learning resources responsibly.', BookOpen],
          ].map(([title, detail, Icon]) => (
            <article className="role-card" key={title}><Icon size={20} /><h3>{title}</h3><p>{detail}</p></article>
          ))}
        </div>
        <div className="volunteer-layout">
          <div>
            <span className="eyebrow">Take the first step</span>
            <h2>Tell us how<br /><em>you’d like to help.</em></h2>
            <p>This short form opens a WhatsApp message to our team so we can follow up. It does not submit your information to this website.</p>
            <p className="privacy-note"><ShieldCheck size={15} /> Please don’t include sensitive health or prayer details in this form.</p>
          </div>
          <form className="volunteer-form" onSubmit={submitVolunteerForm}>
            <label>Your name<input name="name" autoComplete="name" required /></label>
            <label>How would you like to serve?
              <select value={role} onChange={(event) => setRole(event.target.value)}>
                <option>Health expo volunteer</option><option>Cooking & hospitality</option><option>Prayer & music</option><option>Transport & logistics</option><option>Children & families</option><option>Media & communication</option>
              </select>
            </label>
            <label>Anything else we should know? <span>(optional)</span><textarea name="message" rows="3" /></label>
            <button className="button button--navy" type="submit">{submitted ? 'Send another message' : 'Continue with WhatsApp'} <ArrowUpRight size={16} /></button>
            {submitted && <p className="form-note"><Check size={15} /> WhatsApp was opened so you can send your message.</p>}
          </form>
        </div>
      </section>
    </>
  )
}

function LearnPage() {
  const resources = [
    ['The eight laws of health', 'A practical introduction to whole-person wellness.', Leaf, 'Health & wellness'],
    ['Bible study library', 'Sabbath School, Behold He Cometh, and other studies.', BookOpen, 'Bible study'],
    ['Prayer and fasting', 'Guides and ideas for personal and group prayer.', Heart, 'Faith & prayer'],
    ['Health expo kit', 'An introduction to expo supplies and volunteer roles.', Stethoscope, 'Outreach'],
    ['Kids corner', 'Simple lessons, memory verses, and activities for children.', Sparkles, 'Kids & families'],
    ['Recipes and health tips', 'Plant-based recipes and everyday health ideas.', Sun, 'Food & wellness'],
  ]

  return (
    <>
      <PageHero
        eyebrow="Learn & grow"
        title={<>Simple truths for<br /><em>everyday wellbeing.</em></>}
        description="Explore practical health principles, Bible studies, and learning resources for individuals, families, and outreach teams."
        photo={photos.outreachTeam}
      />
      <section className="page-content content-wrap">
        <SectionTitle eyebrow="The eight laws of health" title="Whole-person wellness, one step at a time" description="A simple introduction to the eight principles. Start with one lesson and explore at your own pace." />
        <div className="laws-grid">{laws.map(({ title, detail, icon: Icon }, index) => <article className="law-card" key={title}><span className="law-card-number">0{index + 1}</span><Icon size={22} /><h3>{title}</h3><p>{detail}</p></article>)}</div>
        <aside className="health-education-note"><ShieldCheck size={19} /><p><strong>Health education, not individual medical advice.</strong> These general wellness principles do not diagnose or treat illness. Speak with a qualified health professional about personal symptoms, treatment, or changes to your care.</p></aside>
        <div className="learning-note">
          <BookOpen size={22} />
          <div><strong>Learning for every age</strong><p>Ask the team which health lessons, Bible studies, and children’s activity sheets are currently available.</p></div>
          <a className="text-link" href={whatsappLink("Hello! Please share the health, Bible study, or children's learning resources currently available.")} target="_blank" rel="noreferrer">Ask about resources <ArrowRight size={15} /></a>
        </div>
        <SectionTitle eyebrow="Explore the library" title="Resources to help you begin" />
        <div className="resource-grid page-resource-grid">{resources.map(([title, detail, Icon, category]) => <a className="resource-card" key={title} href={whatsappLink(`Hello! Please tell me about the ${title} resource.`)} target="_blank" rel="noreferrer"><span className="resource-icon"><Icon size={20} /></span><span className="resource-category">{category}</span><h3>{title}</h3><p>{detail}</p><span className="resource-link">Ask about this resource <ArrowUpRight size={14} /></span></a>)}</div>
        <p className="language-note"><strong>Languages:</strong> English, isiXhosa, Afrikaans, and isiZulu resources are planned. Ask which materials are currently available.</p>
      </section>
    </>
  )
}

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events & training"
        title={<>Make time to gather,<br /><em>learn, and serve.</em></>}
        description="Join a prayer rhythm, grow through shared study, or prepare to serve at a community health expo."
        photo={photos.outreachTeam}
      />
      <section className="page-content content-wrap">
        <SectionTitle eyebrow="Gather with us" title="Regular ministry activities" description="These are activity types shared by the ministry. Contact the team to confirm dates, locations, and registration." />
        <div className="event-page-list">{eventTypes.map(({ category, title, detail, icon: Icon }, index) => <article className="event-page-card" key={title}><span className="event-page-index">0{index + 1}</span><Icon size={22} /><span className="event-type">{category}</span><h3>{title}</h3><p>{detail}</p><a className="text-link" href={whatsappLink(`Hello! Please send me the upcoming dates and details for ${title}.`)} target="_blank" rel="noreferrer">Ask for dates & details <ArrowRight size={15} /></a></article>)}</div>
        <div className="event-image-row">
          <div><span className="eyebrow">Planning an outreach?</span><h2>Bring a health expo<br /><em>to your community.</em></h2><p>Ask us how to request a health expo, what volunteers need to prepare, and what training is available.</p><a className="button button--navy" href={whatsappLink('Hello! Our church/community is interested in hosting a health expo. Please share the request process and volunteer checklist.')} target="_blank" rel="noreferrer">Ask about hosting an expo <ArrowUpRight size={16} /></a></div>
          <figure className="outreach-flyer"><img src="/images/cross-roads-health-expo.jpeg" alt="The ministry’s Cross Roads health expo flyer, featuring the outreach team and free health checks" loading="lazy" /><figcaption>Health outreach flyer shared by the ministry.</figcaption></figure>
        </div>
        <section className="expo-details">
          <div><span className="eyebrow">From the Cross Roads outreach flyer</span><h2>Health checks that start a conversation.</h2><p>The flyer invites the community to free checks and lists blood pressure, weight, lung capacity, glucose, and body fat among the available checks.</p></div>
          <div className="expo-checks">{['Blood pressure', 'Weight', 'Lung capacity', 'Glucose', 'Body fat'].map((check) => <span key={check}><Check size={14} />{check}</span>)}</div>
        </section>
        <section className="expo-prep">
          <SectionTitle eyebrow="Volunteer checklist" title="A thoughtful start makes a better outreach" description="Confirm the final plan with the expo coordinator before event day." />
          <ol>{['Confirm your role, arrival time, location, and the coordinator’s contact details.', 'Wear comfortable, modest clothing and suitable shoes; bring water and any personal essentials.', 'Follow the instructions of trained health workers. Only perform checks you have been trained and authorized to do.', 'Respect each visitor’s privacy. Ask permission before taking or sharing photos.', 'Offer prayer or follow-up only with the visitor’s consent.'].map((step) => <li key={step}>{step}</li>)}</ol>
        </section>
      </section>
    </>
  )
}

function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community & fellowship"
        title={<>We grow stronger<br /><em>when we grow together.</em></>}
        description="Find encouragement through prayer, shared learning, service, and a community that cares."
      />
      <section className="page-content content-wrap">
        <div className="community-callout">
          <div><span className="eyebrow">A place to connect</span><h2>Men’s prayer<br /><em>& fasting group.</em></h2><p>Join the men’s group for prayer and fasting. Ask the ministry team for the current WhatsApp invitation link.</p><a className="button button--navy" href={whatsappLink('Hello! I would like to join the men’s prayer and fasting group. Please send me the group link.')} target="_blank" rel="noreferrer">Request the group link <ArrowUpRight size={16} /></a></div>
          <div className="community-callout-art" aria-hidden="true"><Heart size={48} /><Cross size={26} /><UsersRound size={54} /></div>
        </div>
        <div className="community-prayer">
          <div className="community-prayer-icon"><Heart size={23} /></div>
          <div><span className="eyebrow">Prayer requests</span><h2>Need someone to pray with you?</h2><p>Contact the team directly. Prayer requests are not published on this website. Please share only what you are comfortable sending through WhatsApp.</p></div>
          <a className="text-link" href={whatsappLink('Hello. I would like to share a private prayer request with the team.')} target="_blank" rel="noreferrer">Message the team <ArrowRight size={15} /></a>
        </div>
        <SectionTitle eyebrow="Stay connected" title="Keep growing in community" description="Ask the team about regional groups, Wednesday fasting, the chapter-a-week book club, and local fellowship." />
        <ContactCard title="Ask about community groups" message="Hello! Please share the current prayer, book club, and regional group details." />
      </section>
    </>
  )
}

function GivePage() {
  return (
    <>
      <PageHero
        eyebrow="Give & partner"
        title={<>Help health and hope<br /><em>reach more people.</em></>}
        description="Your generosity can support health education, volunteer preparation, and community outreach."
        photo={photos.healthProfessional}
      />
      <section className="page-content content-wrap">
        <div className="giving-explainer">
          <div><SectionTitle eyebrow="Partner with the mission" title="Every gift can help the work grow" /><p>Choose an amount that works for you. Examples below show areas your contribution may support; please confirm current needs with the ministry team.</p></div>
          <div className="giving-options">
            <article><strong>R100</strong><span>Can contribute toward printed health information and learning resources.</span></article>
            <article><strong>R500</strong><span>Can contribute toward preparing volunteers and outreach materials.</span></article>
            <article><strong>R1,000</strong><span>Can contribute toward community health outreach costs.</span></article>
          </div>
          <a className="button button--green" href={whatsappLink('Hello! I would like to partner with the ministry. Please send me the secure once-off and monthly giving options, and explain the current outreach needs.')} target="_blank" rel="noreferrer">Ask about secure giving <ArrowUpRight size={16} /></a>
          <p className="giving-security"><ShieldCheck size={15} /> No banking details are published here. Confirm secure payment options directly with the team.</p>
        </div>
      </section>
    </>
  )
}

function MembersPage() {
  return (
    <>
      <PageHero
        eyebrow="For members"
        title={<>Stay connected.<br /><em>Keep serving together.</em></>}
        description="Get in touch with the team for current group invitations, announcements, and member resources."
        photo={photos.outreachTeam}
      />
      <section className="page-content content-wrap">
        <div className="members-notice"><ShieldCheck size={23} /><div><strong>Member document portal</strong><p>A private document portal is not connected to this website yet. We won’t ask you to enter a password into an unprotected page.</p></div></div>
        <SectionTitle eyebrow="Connect with members" title="Join the right conversation" description="Ask the ministry team for the latest regional group and member communication links." />
        <div className="member-group-grid">
          <a href={whatsappLink('Hello! I am a member and would like the current regional WhatsApp group links.')} target="_blank" rel="noreferrer"><UsersRound size={21} /><strong>Regional groups</strong><span>Request the group for your area.</span><ArrowUpRight size={16} /></a>
          <a href={whatsappLink('Hello! Please share the men’s prayer and fasting WhatsApp group link.')} target="_blank" rel="noreferrer"><Heart size={21} /><strong>Men’s prayer & fasting</strong><span>Request an invitation to the group.</span><ArrowUpRight size={16} /></a>
          <a href={whatsappLink('Hello! I am a member and would like the latest announcements and training information.')} target="_blank" rel="noreferrer"><CalendarDays size={21} /><strong>Announcements & training</strong><span>Ask about upcoming activities.</span><ArrowUpRight size={16} /></a>
        </div>
      </section>
    </>
  )
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>We’d love to<br /><em>hear from you.</em></>}
        description="Have a question about serving, an upcoming outreach, or learning resources? Contact the ministry team."
        photo={photos.outreachTeam}
      />
      <section className="page-content content-wrap contact-page-content">
        <SectionTitle eyebrow="Get in touch" title="Start a conversation" description="The team can help with joining, volunteering, group links, health expo requests, resources, and secure giving." />
        <ContactCard title="WhatsApp the ministry team" message="Hello! I have a question for Trumpeters Missionary Institution." />
        <div className="contact-details"><span><MessageCircle size={19} /><strong>WhatsApp</strong><a href="https://wa.me/27684447857" target="_blank" rel="noreferrer">+27 68 444 7857</a></span><span><CalendarDays size={19} /><strong>Meeting times</strong><small>Contact the team for current details.</small></span><span><UsersRound size={19} /><strong>Meeting location</strong><small>Ask the team for the current venue.</small></span></div>
      </section>
    </>
  )
}

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy & safety" title={<>Care for people.<br /><em>Protect their trust.</em></>} description="A few important commitments for the way this website and ministry communications should handle personal information." />
      <section className="page-content content-wrap privacy-content">
        <h2>Prayer requests</h2><p>This website does not publish prayer requests or provide a public prayer wall. When you contact the team through WhatsApp, choose carefully what personal information you share.</p>
        <h2>Children’s photos</h2><p>Photos of children should only be shared with appropriate parent or guardian permission. Do not publish a child’s full name or sensitive details alongside an image.</p>
        <h2>Forms and giving</h2><p>Volunteer enquiries on this demo open a WhatsApp message and are not stored by the website. Banking details are not published here. Confirm secure giving instructions directly with the ministry team.</p>
        <p><strong>Contact:</strong> <a href="https://wa.me/27684447857" target="_blank" rel="noreferrer">WhatsApp +27 68 444 7857</a></p>
      </section>
    </>
  )
}

function NotFoundPage() {
  return <section className="page-content content-wrap"><span className="eyebrow">Page not found</span><h1 className="not-found-title">Let’s help you find your way.</h1><Link className="button button--navy" to="/">Return home <ArrowRight size={16} /></Link></section>
}

export {
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
  whatsappLink,
}
