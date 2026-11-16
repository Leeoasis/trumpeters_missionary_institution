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
    category: 'Online learning · twice weekly',
    title: 'Online lessons',
    detail: 'Join regular online teaching as part of an ongoing learning and preparation rhythm.',
    icon: BookOpen,
  },
  {
    category: 'In-person training · selected Sundays',
    title: 'Sunday training',
    detail: 'Meet on certain Sundays for practical instruction, shared learning, and fellowship.',
    icon: UsersRound,
  },
  {
    category: 'Annual gathering',
    title: 'One-week missionary camp',
    detail: 'Set aside a week each year for focused missionary learning, training, and spiritual growth.',
    icon: HeartHandshake,
  },
  {
    category: 'Regular community activities',
    title: 'Hikes & all-night prayers',
    detail: 'Take part in regular hikes and gatherings for all-night prayer. Contact the team for upcoming arrangements.',
    icon: Heart,
  },
  {
    category: 'Community outreach',
    title: 'Health expos',
    detail: 'Share practical health information and support community health checks as part of a trained team.',
    icon: Stethoscope,
  },
]

const practicalTraining = [
  { title: 'Nutrition', detail: 'Learn practical principles for nourishing food and everyday wellbeing.', icon: Leaf },
  { title: 'Hydrotherapy', detail: 'Receive instruction in the ministry’s hydrotherapy training.', icon: Waves },
  { title: 'Massage therapy', detail: 'Build knowledge through guided massage-therapy lessons.', icon: Heart },
  { title: 'Cooking & baking', detail: 'Develop hands-on skills in preparing food through cooking and baking lessons.', icon: Sun },
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
          <span className="page-hero-seal"><Leaf size={17} /> HEALTH <i /> HOPE <i /> SERVICE</span>
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
          <span className="hero-kicker"><span /> SEVENTH-DAY ADVENTIST · BIBLE-CENTRED · WHOLE-PERSON HEALTH</span>
          <h1>More than an expo.<br />A life of <em>mission.</em></h1>
          <p>Trumpeters Missionary Institution is a Seventh-day Adventist medical missionary ministry. We train for practical lifestyle health, grow through Bible-based learning and prayer, and take what we learn into the community.</p>
          <div className="hero-actions">
            <Link className="button button--green" to="/get-involved">Find your place <ArrowRight size={17} /></Link>
            <Link className="button button--glass" to="/about"><span className="play-icon"><ArrowRight size={13} /></span> Discover our mission</Link>
          </div>
          <div className="home-hero-note"><UsersRound size={17} /> Learn deeply. Live healthfully. Serve faithfully.</div>
        </div>
        <span className="home-hero-caption">CROSS ROADS · HEALTH OUTREACH · COMMUNITY CARE</span>
      </section>

      <section className="home-mission content-wrap">
        <div>
          <span className="eyebrow">Not just an occasional health expo</span>
          <h2>A way of life.<br /><em>A ministry of preparation.</em></h2>
        </div>
        <p>Our work is a connected pattern of lifestyle learning, practical skills, spiritual growth, and service. Training in nutrition, hydrotherapy, massage therapy, cooking, and baking prepares us to live and share health principles; Bible study and prayer keep Christ at the centre; expos and outreach let us serve our neighbours.</p>
        <Link className="text-link" to="/about">What makes our ministry distinctive <ArrowRight size={16} /></Link>
      </section>

      <section className="home-practice-section">
        <div className="content-wrap">
          <SectionTitle eyebrow="A whole-person approach" title="Training for life. Preparation for service." description="Health education is not just something we present at an expo. It is something we learn, practise, and carry into everyday life and mission." />
          <div className="home-practice-grid">
            <article><span>01</span><Leaf size={23} /><h3>Study lifestyle health</h3><p>Learn nutrition, hydrotherapy, massage therapy, and the Eight Laws of Health.</p><Link className="text-link" to="/learn">Explore our training <ArrowRight size={14} /></Link></article>
            <article><span>02</span><BookOpen size={23} /><h3>Grow in faith together</h3><p>Take part in twice-weekly online lessons, selected Sunday training, and all-night prayer.</p><Link className="text-link" to="/events">See our rhythm <ArrowRight size={14} /></Link></article>
            <article><span>03</span><Stethoscope size={23} /><h3>Prepare for mission</h3><p>Join the annual one-week missionary camp, regular hikes, and hands-on community outreach.</p><Link className="text-link" to="/events">Explore mission activities <ArrowRight size={14} /></Link></article>
          </div>
        </div>
      </section>

      <section className="home-expo-section content-wrap">
        <img src="/images/cross-roads-health-expo.jpeg" alt="Cross Roads health expo flyer showing the outreach team and free health checks" loading="lazy" />
        <div><span className="eyebrow">One expression of a larger mission</span><h2>Train throughout<br />the year.<em><br />Serve in the community.</em></h2><p>The Cross Roads flyer shows one expression of our work: free community health checks. Behind outreach is a wider life of preparation—practical training, shared study, prayer, fellowship, hikes, and missionary camp.</p><Link className="text-link" to="/events">See our training and activities <ArrowRight size={15} /></Link></div>
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
        title={<>A distinct calling.<br /><em>A whole-life mission.</em></>}
        description="We are a Seventh-day Adventist medical missionary ministry with an ongoing rhythm of lifestyle-health training, Bible study, prayer, fellowship, and community service."
        photo={photos.outreachTeam}
      />
      <section className="page-content content-wrap">
        <div className="about-introduction">
          <div className="about-introduction-copy">
            <SectionTitle eyebrow="Who we are" title="More than an outreach team" />
            <p>Trumpeters Missionary Institution is a Seventh-day Adventist medical missionary ministry. We believe medical missionary work is more than hosting a health expo or offering a single health lesson: it is a sustained way of learning, living, praying, and serving—caring for the whole person while pointing to Jesus.</p>
            <p>Our lifestyle-health approach is practical. We provide training in nutrition, hydrotherapy, massage therapy, cooking, and baking, alongside the study of the Eight Laws of Health. We bring this learning into community health expos and other opportunities to serve.</p>
            <p>This mission is also spiritual and communal. Our year includes twice-weekly online lessons, training on selected Sundays, regular hikes, all-night prayers, and a one-week missionary camp each year. These rhythms help us grow in knowledge, faith, discipline, fellowship, and readiness to serve.</p>
            <p>People with different skills can take part. Practical support and outreach roles are open to learners; clinical procedures and individual health advice belong to people with the appropriate training and authorization.</p>
          </div>
          <div className="about-verse-card">
            <Cross size={23} />
            <span className="eyebrow eyebrow--light">Our faith · Scripture and Adventist heritage</span>
            <blockquote>“I am come that they might have life, and that they might have it more abundantly.”</blockquote>
            <span className="verse-translation">KING JAMES VERSION</span>
          </div>
        </div>

        <section className="mission-vision-section">
          <SectionTitle eyebrow="Our direction" title="A clear purpose. A shared vision." />
          <div className="mission-vision-grid">
          <article><span className="mission-vision-label">OUR MISSION</span><h3>Invite. Train. Equip. Mobilise.</h3><p>To invite, train, equip, and mobilise medical missionaries through Adventist lifestyle-health education, spiritual growth, and practical service to the community.</p></article>
          <article><span className="mission-vision-label">OUR VISION</span><h3>A prepared people, serving whole communities.</h3><p>To grow a faithful, trained, and united community that lives and shares health principles and the hope of the gospel.</p></article>
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
            <p>The Bible is the foundation of our faith. As a Seventh-day Adventist ministry, our health and missionary work is also informed by the writings of Ellen G. White, alongside our continued study of Scripture.</p>
          </div>
          <div className="scripture-list">
            <article><span>MATTHEW 9:35</span><p>Jesus taught, preached the gospel, and healed among the people.</p></article>
            <article><span>3 JOHN 1:2</span><p>A prayer for wellbeing in body as well as soul.</p></article>
            <article><span>GALATIANS 6:2</span><p>“Bear ye one another’s burdens.”</p></article>
          </div>
        </section>

        <section className="about-training-section">
          <div className="about-training-heading"><span className="eyebrow">Practical lifestyle-health training</span><h2>Knowledge to practise.<br /><em>Skills to share.</em></h2><p>We offer practical instruction that connects health principles with everyday life and preparation for service.</p></div>
          <div className="about-training-grid">{practicalTraining.map(({ title, detail, icon: Icon }) => <article key={title}><Icon size={20} /><h3>{title}</h3><p>{detail}</p></article>)}</div>
          <p className="training-caution">Training is educational and does not replace professional medical care. Participants should practise only within their competence and applicable professional requirements.</p>
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
        title={<>Learn the principles.<br /><em>Practise the skills.</em></>}
        description="Explore our Adventist lifestyle-health approach: nutrition, hydrotherapy, massage therapy, cooking and baking, the Eight Laws of Health, and Bible learning."
        photo={photos.outreachTeam}
      />
      <section className="page-content content-wrap">
        <SectionTitle eyebrow="Learn by doing" title="Training for everyday health and service" description="Our approach brings health principles into practical lessons and skills. Contact the team for current classes, instructors, and enrolment details." />
        <div className="about-training-grid learn-training-grid">{practicalTraining.map(({ title, detail, icon: Icon }) => <article key={title}><Icon size={20} /><h3>{title}</h3><p>{detail}</p></article>)}</div>
        <p className="training-caution">Courses provide education and training; they are not a substitute for diagnosis or treatment from a qualified health professional. Practical therapies should be taught and practised responsibly, within appropriate training and professional requirements.</p>
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
        title={<>A year of training,<br /><em>prayer, and mission.</em></>}
        description="Our rhythm extends beyond expos: online lessons twice a week, training on selected Sundays, regular hikes and all-night prayers, and a one-week missionary camp each year."
        photo={photos.outreachTeam}
      />
      <section className="page-content content-wrap">
        <SectionTitle eyebrow="Our ministry rhythm" title="A steady pattern of learning and spiritual life" description="Here is the rhythm you can expect from the ministry. Exact dates, venues, class topics, and registration details are shared by the team." />
        <div className="event-page-list">{eventTypes.map(({ category, title, detail, icon: Icon }, index) => <article className="event-page-card" key={title}><span className="event-page-index">0{index + 1}</span><Icon size={22} /><span className="event-type">{category}</span><h3>{title}</h3><p>{detail}</p><a className="text-link" href={whatsappLink(`Hello! Please send me the upcoming dates and details for ${title}.`)} target="_blank" rel="noreferrer">Ask for dates & details <ArrowRight size={15} /></a></article>)}</div>
        <section className="activities-overview">
          <div><span className="eyebrow">Practical classes and preparation</span><h2>Training that connects<br /><em>belief with practice.</em></h2><p>Our training includes nutrition, hydrotherapy, massage therapy, cooking, and baking. Sunday sessions and online lessons help create a continuing path of learning, not just one-time event preparation.</p><Link className="text-link" to="/learn">Explore lifestyle-health training <ArrowRight size={15} /></Link></div>
          <div className="activities-training-list">{practicalTraining.map(({ title, icon: Icon }) => <span key={title}><Icon size={17} />{title}</span>)}</div>
        </section>
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
