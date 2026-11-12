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
          <span className="hero-kicker"><span /> CHRISTIAN HEALTH EDUCATION & COMMUNITY OUTREACH</span>
          <h1>Sharing health.<br />Serving with <em>hope.</em></h1>
          <p>We are a Bible-centered medical missionary ministry. We invite, train, and equip ordinary people to share practical health education and the hope of Jesus with their communities.</p>
          <div className="hero-actions">
            <Link className="button button--green" to="/get-involved">Find your place <ArrowRight size={17} /></Link>
            <Link className="button button--glass" to="/about"><span className="play-icon"><ArrowRight size={13} /></span> Discover our mission</Link>
          </div>
          <div className="home-hero-note"><UsersRound size={17} /> Whole-person care for body, mind, and spirit</div>
        </div>
        <span className="home-hero-caption">CROSS ROADS · HEALTH OUTREACH · COMMUNITY CARE</span>
      </section>

      <section className="home-mission content-wrap">
        <div>
          <span className="eyebrow">What is medical missionary work?</span>
          <h2>Meet a need.<br /><em>Share the love of Jesus.</em></h2>
        </div>
        <p>It is practical Christian service that connects simple, trustworthy health education with kindness, prayer, and the gospel. At an expo, neighbours can receive free health checks and useful information in a welcoming space. In everyday life, it can be as simple as cooking, listening, praying, or helping someone find support.</p>
        <Link className="text-link" to="/about">Understand our mission <ArrowRight size={16} /></Link>
      </section>

      <section className="home-practice-section">
        <div className="content-wrap">
          <SectionTitle eyebrow="How the mission comes to life" title="Learn it. Live it. Share it." description="We care for the whole person—physical, mental, social, and spiritual wellbeing—while pointing to the loving example of Jesus." />
          <div className="home-practice-grid">
            <article><span>01</span><BookOpen size={23} /><h3>Learn practical health</h3><p>Explore the Eight Laws of Health, Bible studies, and simple habits that support wellbeing.</p><Link className="text-link" to="/learn">Explore learning <ArrowRight size={14} /></Link></article>
            <article><span>02</span><Stethoscope size={23} /><h3>Serve your neighbours</h3><p>Help welcome people at a health expo, share information, and support trained health workers.</p><Link className="text-link" to="/events">See outreach <ArrowRight size={14} /></Link></article>
            <article><span>03</span><HeartHandshake size={23} /><h3>Care with compassion</h3><p>Offer practical help, prayer, and encouragement with respect for each person’s choices.</p><Link className="text-link" to="/community">Find community <ArrowRight size={14} /></Link></article>
          </div>
        </div>
      </section>

      <section className="home-expo-section content-wrap">
        <img src="/images/cross-roads-health-expo.jpeg" alt="Cross Roads health expo flyer showing the outreach team and free health checks" loading="lazy" />
        <div><span className="eyebrow">Real community outreach</span><h2>Health checks.<br /><em>Useful knowledge.<br />A warm welcome.</em></h2><p>The Cross Roads flyer invites community members to free health checks, including blood pressure, weight, lung capacity, glucose, and body fat. It’s a practical example of health education opening the door to connection and care.</p><Link className="text-link" to="/events">Learn about health expos <ArrowRight size={15} /></Link></div>
      </section>

      <section className="home-links content-wrap">
        <SectionTitle eyebrow="There is room for you" title="You don’t need to do everything" description="Some roles require health training; many others simply need a willing heart. Start with one way to serve." />
        <div className="home-link-grid">
          <Link to="/get-involved"><Stethoscope /><span><strong>Health outreach</strong><small>Support a team and learn the role you are prepared for.</small></span><ArrowUpRight /></Link>
          <Link to="/get-involved"><HeartHandshake /><span><strong>Hospitality & practical help</strong><small>Cooking, welcoming, transport, children, and logistics.</small></span><ArrowUpRight /></Link>
          <Link to="/community"><Heart /><span><strong>Prayer & fellowship</strong><small>Grow in faith and support one another.</small></span><ArrowUpRight /></Link>
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
        title={<>Faith that serves.<br /><em>Health that helps.</em></>}
        description="Trumpeters Missionary Institution is a Bible-centered Christian ministry inviting, training, equipping, and mobilising people for medical missionary work: practical health education and compassionate gospel service in the community."
        photo={photos.outreachTeam}
      />
      <section className="page-content content-wrap">
        <div className="about-introduction">
          <div className="about-introduction-copy">
            <SectionTitle eyebrow="Who we are" title="A ministry of health, faith, and service" />
            <p>Trumpeters Missionary Institution brings people together to care for the whole person—body, mind, and spirit. We believe health education can be a practical expression of Christian love: meet people with respect, share useful knowledge, and serve without pressure.</p>
            <p>Our work includes health expos, teaching the Eight Laws of Health, Bible learning, prayer and fasting, fellowship, and practical support. We serve neighbours and families through community outreach, and help churches and volunteers prepare to serve.</p>
            <p>You do not have to be a doctor or nurse to be part of the mission. Many roles are open to willing learners; clinical checks and health advice must be left to people with the appropriate training and authorization.</p>
          </div>
          <div className="about-verse-card">
            <Cross size={23} />
            <span className="eyebrow eyebrow--light">Our inspiration · John 10:10</span>
            <blockquote>“I am come that they might have life, and that they might have it more abundantly.”</blockquote>
            <span className="verse-translation">KING JAMES VERSION</span>
          </div>
        </div>

        <section className="mission-vision-section">
          <SectionTitle eyebrow="Our direction" title="A clear purpose. A shared vision." />
          <div className="mission-vision-grid">
            <article><span className="mission-vision-label">OUR MISSION</span><h3>Invite. Train. Equip. Mobilise.</h3><p>To invite, train, equip, and mobilise medical missionaries to serve communities through health and gospel work.</p></article>
            <article><span className="mission-vision-label">OUR VISION</span><h3>Health and hope in every community.</h3><p>To see people equipped to live healthier lives and to share the love of Jesus through compassionate, practical service.</p></article>
          </div>
        </section>

        <section className="medical-missionary-section">
          <div className="medical-missionary-heading"><span className="eyebrow">What is a medical missionary?</span><h2>Health ministry is more than a health check.</h2><p>It is a way of following Jesus’ example: care for people, teach what is helpful, serve their needs, and share faith with gentleness and respect.</p></div>
          <div className="medical-missionary-grid">
            <article><BookOpen size={21} /><h3>Teach for everyday life</h3><p>Share simple, practical health principles people can understand and use.</p></article>
            <article><Stethoscope size={21} /><h3>Serve within your training</h3><p>Support health outreach safely. Only trained and authorized workers perform clinical checks or give individual health advice.</p></article>
            <article><HeartHandshake size={21} /><h3>Show Christ’s compassion</h3><p>Listen, welcome, pray when invited, and connect people with helpful support.</p></article>
          </div>
        </section>

        <section className="bible-foundation">
          <div className="bible-foundation-heading">
            <span className="eyebrow">Our Bible foundation</span>
            <h2>Faith is the heart<br /><em>of the mission.</em></h2>
            <p>The Bible shapes both the message we share and the way we serve: with compassion, practical care, respect, and hope in Christ.</p>
          </div>
          <div className="scripture-list">
            <article><span>MATTHEW 9:35</span><p>Jesus taught, preached the gospel, and healed among the people.</p></article>
            <article><span>3 JOHN 1:2</span><p>A prayer for wellbeing in body as well as soul.</p></article>
            <article><span>GALATIANS 6:2</span><p>“Bear ye one another’s burdens.”</p></article>
          </div>
        </section>

        <div className="about-image-row">
          <img src={photos.outreachTeam.src} alt={photos.outreachTeam.alt} loading="lazy" />
          <div><span className="eyebrow">Meet the people behind the work</span><h2>A community<br /><em>ready to serve.</em></h2><p>This is the Cross Roads outreach team featured in the ministry’s health expo flyer. Their work is one expression of the wider mission: community members with different gifts learning and serving together. Names and individual roles were not provided, so we have not guessed them.</p><Link className="text-link" to="/get-involved">Explore volunteer roles <ArrowRight size={15} /></Link></div>
        </div>

        <section className="about-outreach-story">
          <div><span className="eyebrow">A glimpse of the work</span><h2>Health education,<br /><em>shared face to face.</em></h2></div>
          <div><p>The Cross Roads health expo flyer invites the local community to free checks for blood pressure, weight, lung capacity, glucose, and body fat. It reflects the ministry’s practical approach: create a welcoming space, share useful health information, and treat every visitor with dignity.</p><Link className="text-link" to="/events">Explore health expo information <ArrowRight size={15} /></Link></div>
        </section>

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
