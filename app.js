const accounts = [
  {
    name: "Multiverse", segment: "Mid-market", sector: "Edtech", signal: "AI-first transformation", location: "London",
    factors: { engineering: 5, ai: 5, growth: 5, fit: 5 },
    factorSources: { engineering: ["M2", "M3"], ai: ["M1", "M2", "M3"], growth: ["M1", "M2"], fit: ["M1", "M2", "M3"] },
    rationale: {
      engineering: "800+ employees, engineering teams in London and Berlin, a new AI/engineering hub, and 200 planned jobs.",
      ai: "A dedicated VP AI Engineering, agentic-product development, and an internal mandate to become AI-first.",
      growth: "$70m funding, 50% year-on-year revenue growth, and its first cash-positive quarter.",
      fit: "UK-headquartered with fresh capital, technical hiring, and an explicit company-wide AI transformation.",
    },
    sources: [
      ["M1", "Multiverse raises $70m to become Europe’s AI adoption platform", "15 May 2026", "https://www.multiverse.io/blog/multiverse-raises-70-million-europes-ai-adoption-platform"],
      ["M2", "Multiverse opens Edinburgh tech hub and appoints VP AI Engineering", "8 Jun 2026", "https://www.multiverse.io/blog/multiverse-edinburgh-tech-hub-colin-mackenzie-vp-ai-engineering"],
      ["M3", "Senior AI Engineer — AI Transformation", "Current job listing", "https://jobs.ashbyhq.com/multiverse/58389a21-a599-43b6-9869-9885a16e2072"],
    ],
    why: "Public evidence points to a funded, UK-based organisation scaling engineering while making AI adoption both its product proposition and an internal operating priority.",
    entry: "Test whether the AI-first mandate includes developer workflows, then propose a measurable evaluation with one engineering team.",
    buyingGroup: [
      { person: "Helen Greul", title: "VP of Engineering", fact: "Sponsored an engineering hackathon using Cursor and focused on AI adoption and developer-experience tooling.", assumedRole: "Likely champion and rollout owner", confidence: "High", source: ["Multiverse engineering hackathon", "9 Feb 2026", "https://www.multiverse.io/blog/the-future-is-built-in-a-week-inside-multiverse-s-latest-hackathon"] },
      { person: "Colin Mackenzie", title: "VP AI Engineering", fact: "Leads the new engineering hub and agentic-product development.", assumedRole: "Potential AI engineering pilot leader", confidence: "High", source: ["Multiverse opens engineering hub", "8 Jun 2026", "https://www.multiverse.io/blog/multiverse-edinburgh-tech-hub-colin-mackenzie-vp-ai-engineering"] },
      { person: "Security, Data Privacy & IT", title: "Verified internal functions", fact: "These functions participate alongside Engineering in technology initiatives.", assumedRole: "Likely security, privacy and deployment reviewers", confidence: "Medium", source: ["Multiverse engineering hackathon", "9 Feb 2026", "https://www.multiverse.io/blog/the-future-is-built-in-a-week-inside-multiverse-s-latest-hackathon"] },
    ],
    unknowns: ["Who owns developer-tool standards, licences and integrations?", "Who approves source-code access, model handling and SSO?", "Which leader controls budget and contracting?"],
    evaluation: ["20 developers", "30 days", "Baseline + cohort"],
  },
  {
    name: "Synthesia", segment: "Scale-up", sector: "AI", signal: "Engineering expansion", location: "London",
    factors: { engineering: 5, ai: 5, growth: 5, fit: 5 },
    factorSources: { engineering: ["S2", "S4"], ai: ["S1", "S4"], growth: ["S1", "S2"], fit: ["S1", "S3", "S4"] },
    rationale: {
      engineering: "Synthesia reports 80+ engineers, 400+ employees, and continued engineering and R&D hiring.",
      ai: "AI is the core product; the company also cites an AI-agent roadmap and ISO 42001 certification.",
      growth: "$200m Series E, a $4bn valuation, and planned headcount growth above 70%.",
      fit: "London-headquartered enterprise software company with $100m+ ARR and global customer adoption.",
    },
    sources: [
      ["S1", "Synthesia raises $200m Series E at $4bn valuation", "26 Jan 2026", "https://www.synthesia.io/post/series-e-200-million-4-billion-valuation-future-work"],
      ["S2", "Synthesia expands globally with new offices", "21 Apr 2026", "https://www.synthesia.io/post/synthesia-global-expansion-austin-berlin-paris-zurich-2026"],
      ["S3", "Synthesia surpasses $100m ARR", "15 Apr 2025", "https://www.synthesia.io/post/100-million-revenue-adobe-investment"],
      ["S4", "Synthesia careers and engineering growth", "Current careers page", "https://www.synthesia.io/careers"],
    ],
    why: "The evidence shows a London-headquartered AI company with a sizeable engineering team, fresh funding, and rapid enterprise growth.",
    entry: "Lead with technical discovery and a representative engineering workflow; a sophisticated AI team will expect product depth rather than generic productivity claims.",
    buyingGroup: [
      { person: "Peter Hill", title: "Chief Technology Officer", fact: "Current technical and product leader.", assumedRole: "Potential executive sponsor; budget authority unverified", confidence: "Medium", source: ["Peter Hill — Synthesia author profile", "Current page", "https://www.synthesia.io/blog/authors/peter-hill"] },
      { person: "Gianluca Brindisi", title: "Application Security Engineer", fact: "Leads AI-security work, partners with Product and Engineering, and builds internal AI tooling.", assumedRole: "Potential technical-security champion and evaluator", confidence: "High", source: ["Gianluca Brindisi — Synthesia author profile", "Current page", "https://www.synthesia.io/blog/authors/gianluca-brindisi"] },
      { person: "Engineering & Research Leads", title: "Verified governance function", fact: "Own AI-component design and development under secure-development lifecycle controls.", assumedRole: "Likely user group and governance reviewers", confidence: "High", source: ["Synthesia AI governance practices", "Sep 2024", "https://www.synthesia.io/legal/ai-governance-practices"] },
    ],
    unknowns: ["Which coding agents are standardised today?", "Who owns licence management and productivity measurement?", "What controls apply to prompts, code, models and audit logs?"],
    evaluation: ["25 developers", "21 days", "3 workflows"],
  },
  {
    name: "Wayve", segment: "Scale-up", sector: "AI", signal: "Commercial deployment", location: "London",
    factors: { engineering: 5, ai: 5, growth: 5, fit: 4 },
    factorSources: { engineering: ["W2", "W3"], ai: ["W1", "W3"], growth: ["W1", "W4"], fit: ["W1", "W2"] },
    rationale: {
      engineering: "Wayve reported a 300-person workforce and expanded leadership across AI platforms, embedded systems, and fleet software.",
      ai: "Embodied AI and foundation models are the company’s core technology.",
      growth: "$1.5bn in secured capital and a move from research toward scaled commercial deployment.",
      fit: "Strong London presence and investment, moderated because highly specialised automotive engineering may narrow applicable workflows.",
    },
    sources: [
      ["W1", "Wayve secures $1.5bn for its autonomy platform", "25 Feb 2026", "https://wayve.ai/press/series-d/"],
      ["W2", "Wayve expands engineering leadership", "26 Jun 2025", "https://wayve.ai/press/wayve-expands-engineering-leadership/"],
      ["W3", "Science careers at Wayve", "Current careers page", "https://wayve.ai/thinking/science-at-wayve/"],
      ["W4", "Wayve and Uber announce London L4 trials", "10 Jun 2025", "https://wayve.ai/press/wayve-uber-l4-autonomy-trials/"],
    ],
    why: "Wayve combines exceptional AI depth, specialised engineering, major new capital, and a clear transition into commercial deployment.",
    entry: "Start with technical discovery around complex codebase navigation and define where AI-assisted development is appropriate within safety-sensitive engineering.",
    buyingGroup: [
      { person: "Silvius Rus", title: "SVP, Engineering", fact: "Leads engineering across robotics, data, compute, machine learning and infrastructure.", assumedRole: "Potential executive sponsor; budget authority unverified", confidence: "Medium", source: ["Wayve leadership team", "Current page", "https://wayve.ai/company/leadership-team/"] },
      { person: "Pablo Castellanos García", title: "VP, Engineering", fact: "Owns computing and engineering infrastructure, including IT, build/release, cyber and data security.", assumedRole: "Likely tooling owner and technical champion", confidence: "High", source: ["Pablo Castellanos García — Wayve", "Current page", "https://wayve.ai/company/leadership-team/pablo-castellanos-garcia/"] },
      { person: "Simone Fabris", title: "VP, Product and Delivery", fact: "Oversees product development and automotive quality, safety and security compliance.", assumedRole: "Likely production safety reviewer", confidence: "High", source: ["Simone Fabris — Wayve", "Current page", "https://wayve.ai/company/leadership-team/simone-fabris/"] },
    ],
    unknowns: ["Is developer tooling owned centrally by infrastructure?", "Can AI tools access safety-critical or model repositories?", "Who owns vendor onboarding and software-tool budget?"],
    evaluation: ["25 developers", "21 days", "Bounded workflows"],
  },
  {
    name: "Quantexa", segment: "Mid-market", sector: "Enterprise AI", signal: "AI R&D investment", location: "London",
    factors: { engineering: 4, ai: 5, growth: 5, fit: 5 },
    factorSources: { engineering: ["Q2", "Q3"], ai: ["Q2", "Q3"], growth: ["Q1", "Q4"], fit: ["Q1", "Q2", "Q4"] },
    rationale: {
      engineering: "A 900+ person company with more than 170 planned London AI Innovation Centre jobs; engineering headcount is not isolated.",
      ai: "AI is core to the platform, backed by more than $250m in planned global R&D investment.",
      growth: "$175m Series F, approximately 40% licence growth, customer additions, and a new London headquarters.",
      fit: "London-headquartered enterprise software scale, dedicated AI hiring, and substantial fresh investment.",
    },
    sources: [
      ["Q1", "Quantexa completes $175m Series F", "5 Mar 2025", "https://www.globenewswire.com/news-release/2025/03/05/3037089/0/en/Quantexa-Completes-USD-175-million-Series-F-Investment-Round-led-by-Teachers-Venture-Growth.html"],
      ["Q2", "Quantexa to invest over $250m in AI R&D", "Company announcement", "https://www.quantexa.com/press/global-ai-investment/"],
      ["Q3", "About Quantexa", "Current company page", "https://www.quantexa.com/about/"],
      ["Q4", "Quantexa establishes new London global headquarters", "12 Feb 2026", "https://www.quantexa.com/press/quantexa-to-establish-new-global-headquarters-in-london-at-the-delft-gpe-s-landmark-building-on-the-south-bank/"],
    ],
    why: "Public evidence shows an AI-native enterprise vendor making a substantial, long-term investment in London talent and R&D.",
    entry: "Propose a technically credible evaluation that separates developer experience, quality, and capacity outcomes.",
    buyingGroup: [
      { person: "Jamie Hutton", title: "Co-founder & CTO", fact: "Leads the global R&D organisation and Decision Intelligence Platform development.", assumedRole: "Potential executive sponsor or economic buyer", confidence: "High", source: ["Jamie Hutton — Quantexa", "Current page", "https://www.quantexa.com/about/leadership/jamie-hutton/"] },
      { person: "Information Security", title: "Head of Information Security & Steering Group", fact: "Supports board and management oversight under ISO 27001, ISO 27017 and SOC 2 controls.", assumedRole: "Likely security and risk reviewer", confidence: "High", source: ["Quantexa ESG Report 2025", "2025", "https://www.quantexa.com/assets/x/9e62f4d915/esgreport_2025.pdf"] },
      { person: "Guy Muir", title: "General Counsel & DPO", fact: "Heads Legal, sits on the executive team and serves as Data Protection Officer.", assumedRole: "Likely legal and privacy reviewer", confidence: "High", source: ["Guy Muir — Quantexa", "Current page", "https://www.quantexa.com/about/leadership/guy-muir/"] },
    ],
    unknowns: ["Who owns IDE and AI coding-tool standards?", "Does budget sit with R&D, IT or engineering teams?", "What code-retention and model-training conditions apply?"],
    evaluation: ["30 developers", "30 days", "2 cohorts"],
  },
  {
    name: "Cleo", segment: "Scale-up", sector: "Fintech", signal: "Production AI agents", location: "London",
    factors: { engineering: 4, ai: 5, growth: 5, fit: 5 },
    factorSources: { engineering: ["C2", "C4"], ai: ["C3"], growth: ["C1", "C2"], fit: ["C2", "C3", "C4"] },
    rationale: {
      engineering: "Statutory reporting confirms aggressive AI, data, and engineering hiring; current listings include ML, MLOps, and engineering leadership.",
      ai: "Cleo documents a production LLM agent architecture with tools, memory, and multimodal interactions.",
      growth: "Reported 106% revenue growth in 2024, profitability, workforce expansion, and subsequent ARR above $250m.",
      fit: "London presence, rapid technical hiring, production agent development, and strong reported commercial growth.",
    },
    sources: [
      ["C1", "Cleo: 2024 year in review", "Published 2025", "https://web.meetcleo.com/2024-annual-report"],
      ["C2", "Cleo AI Ltd 2024 statutory annual report", "25 Jun 2025", "https://www.datocms-assets.com/157778/1753283183-finanicalreport_072225_2.pdf"],
      ["C3", "Building a financial agent on commoditised LLMs", "23 Jul 2025", "https://web.meetcleo.com/blog/building-a-financial-agent-on-top-of-commodified-llms"],
      ["C4", "Cleo careers", "Current careers page", "https://web.meetcleo.com/careers"],
    ],
    why: "Cleo provides unusually direct evidence of production AI engineering, rapid growth, and active technical hiring from its London base.",
    entry: "Use a concise, workflow-specific product demonstration and invite the team to define the technical bar for a fast evaluation.",
    buyingGroup: [
      { person: "Sam Taylor", title: "VP of Technology", fact: "Current executive technology leader.", assumedRole: "Potential executive sponsor; budget authority unverified", confidence: "Medium", source: ["Cleo leadership team", "Current page", "https://web.meetcleo.com/leadership"] },
      { person: "Benjamin Pettit", title: "Head of Machine Learning", fact: "Leads ML in a product using proprietary models, third-party LLMs and agentic reasoning.", assumedRole: "Potential AI engineering champion and evaluator", confidence: "High", source: ["Cleo leadership team", "Current page", "https://web.meetcleo.com/leadership"] },
      { person: "Director of InfoSec", title: "Open UK leadership role", fact: "Cleo is actively recruiting this security leadership function; no incumbent is identified.", assumedRole: "Likely security, privacy and third-party-risk reviewer", confidence: "High", source: ["Cleo careers", "Accessed 22 Jul 2026", "https://web.meetcleo.com/careers"] },
      { person: "Colin Jones", title: "VP of Legal & Compliance", fact: "Current leader spanning Legal and Compliance.", assumedRole: "Likely legal, regulatory and contract reviewer", confidence: "High", source: ["Cleo leadership team", "Current page", "https://web.meetcleo.com/leadership"] },
    ],
    unknowns: ["Who owns developer tooling, IDE standards and licences?", "Who currently approves AI tools while InfoSec leadership is hiring?", "What is the budget owner and formal purchasing path?"],
    evaluation: ["15 developers", "21 days", "Fast-cycle pilot"],
  },
  {
    name: "Monzo", segment: "Mid-market", sector: "Fintech", signal: "ML at operating scale", location: "London",
    factors: { engineering: 4, ai: 4, growth: 5, fit: 5 },
    factorSources: { engineering: ["MO2", "MO3", "MO4"], ai: ["MO2"], growth: ["MO1"], fit: ["MO1", "MO3"] },
    rationale: {
      engineering: "Formal engineering leadership frameworks, current technology hiring, and a production ML platform; no current public engineering headcount.",
      ai: "ML supports fraud, credit, personalisation, and operations, with explicit plans to expand LLM use.",
      growth: "FY2026 reporting cites 39% revenue growth, three million new customers, and 45% business-banking growth.",
      fit: "Large UK operation, active expansion, and a broad regulated technology estate.",
    },
    sources: [
      ["MO1", "Monzo 2026 annual report", "FY2026", "https://monzo.com/annual-report/2026"],
      ["MO2", "Machine learning at Monzo in 2025", "21 Nov 2025", "https://monzo.com/blog/machine-learning-at-monzo-in-2025"],
      ["MO3", "Careers at Monzo", "Current careers page", "https://monzo.com/careers"],
      ["MO4", "Engineering progression frameworks at scale", "22 Apr 2021", "https://monzo.com/blog/lessons-from-implementing-progression-frameworks-at-scale"],
    ],
    why: "Monzo combines a mature engineering environment, operational ML adoption, and strong reported growth, but likely carries a higher security and procurement bar.",
    entry: "Lead with a developer-experience workflow hypothesis and ask a willing team to establish an observable baseline.",
    buyingGroup: [
      { person: "Matej Pfajfar", title: "Group Chief Technology Officer", fact: "Current executive owner for Group Technology.", assumedRole: "Potential executive sponsor; tooling budget unverified", confidence: "High", source: ["Monzo executive team", "Current page", "https://monzo.com/meet-our-executive-team"] },
      { person: "Platform Engineering", title: "Verified engineering function", fact: "Treats internal platform tooling as a product for Monzo engineers, including testing and approvals.", assumedRole: "Likely technical champion, evaluator and administrator", confidence: "High", source: ["The engineering behind Monzo’s platform", "13 May 2026", "https://monzo.com/blog/the-engineering-behind-the-platform"] },
      { person: "Amy Grieveson", title: "Director of Security Behaviours & Governance", fact: "Designs security policies, systems and behaviour programmes; application-security ownership is not established.", assumedRole: "Potential security-governance reviewer", confidence: "Medium", source: ["Five minutes with Monzo’s Security Director", "Current page", "https://monzo.com/learn/money-safety/5-minutes-with-our-security-director"] },
      { person: "Stephanie Pagni", title: "Chief Legal & Administrative Officer", fact: "Current executive leader for Legal and Administration.", assumedRole: "Potential legal and commercial reviewer", confidence: "Medium", source: ["Monzo executive team", "Current page", "https://monzo.com/meet-our-executive-team"] },
    ],
    unknowns: ["Which platform or DevEx leader owns AI coding-tool rollout?", "What policy applies to code, prompts and telemetry?", "What procurement and third-party approvals are required?"],
    evaluation: ["50 developers", "30 days", "Control cohort"],
  },
  {
    name: "Marshmallow", segment: "Scale-up", sector: "Insurtech", signal: "Funded product expansion", location: "London",
    factors: { engineering: 4, ai: 4, growth: 5, fit: 4 },
    factorSources: { engineering: ["MA2", "MA3", "MA4"], ai: ["MA3", "MA4"], growth: ["MA1", "MA2", "MA4"], fit: ["MA1", "MA2"] },
    rationale: {
      engineering: "700+ employees, London technology teams, explicit ML and data roles, and a 15-person new-product team.",
      ai: "AI and ML appear in the data-team design and a live car-finance operation, although outcomes are not quantified.",
      growth: "$90m funding, a valuation above $2bn, profitability, and new-product expansion.",
      fit: "A sizeable London fintech with active product expansion and regulated technology needs.",
    },
    sources: [
      ["MA1", "Marshmallow secures $90m at a $2bn valuation", "15 Apr 2025", "https://portageinvest.com/blog/uk-fintech-marshmallow-secures-90-million-in-funding-at-a-valuation-of-2-billion/"],
      ["MA2", "Jobs at Marshmallow", "Current careers page", "https://www.marshmallow.com/jobs"],
      ["MA3", "Marshmallow’s data-team structure", "Company engineering blog", "https://www.marshmallow.com/blog/our-new-data-team-structure"],
      ["MA4", "How Marshmallow built its car-finance product", "Jun 2026", "https://www.marshmallow.com/blog/building-car-finance"],
    ],
    why: "Fresh funding, product expansion, and visible AI/data investment create a timely hypothesis for a commercial evaluation.",
    entry: "Connect AI-assisted development to the growth agenda, then scope a pilot around one team with repeatable delivery work.",
    buyingGroup: [
      { person: "David Goaté", title: "Co-founder & Chief Architect", fact: "Leads engineering for the Car Finance team, which uses AI to reduce manual work.", assumedRole: "Potential technical champion or engineering sponsor", confidence: "High", source: ["How Marshmallow built Car Finance", "Jun 2026", "https://www.marshmallow.com/blog/building-car-finance"] },
      { person: "Senior Engineering Manager", title: "Verified current function", fact: "A senior engineering-management role exists in the scaling technology organisation.", assumedRole: "Potential evaluator or rollout owner; remit unverified", confidence: "Medium", source: ["Jobs at Marshmallow", "Current page", "https://www.marshmallow.com/jobs"] },
      { person: "Legal & Compliance", title: "Verified internal function", fact: "Advises product teams on FCA regulation, contracts and compliance questions.", assumedRole: "Likely legal and regulatory reviewer", confidence: "High", source: ["How Marshmallow built Car Finance", "Jun 2026", "https://www.marshmallow.com/blog/building-car-finance"] },
      { person: "Data Protection Team", title: "Verified internal function", fact: "Handles data-protection questions and third-party processor arrangements.", assumedRole: "Likely privacy reviewer", confidence: "High", source: ["Marshmallow recruitment privacy notice", "15 Oct 2025", "https://www.marshmallow.com/recruitment-privacy-notice"] },
    ],
    unknowns: ["Who owns company-wide developer productivity?", "Does Engineering or central IT own budget and rollout policy?", "What FCA, privacy and security reviews apply to external AI?"],
    evaluation: ["20 developers", "30 days", "1 product group"],
  },
  {
    name: "Dojo", segment: "Mid-market", sector: "Fintech", signal: "AI-native programme", location: "London",
    factors: { engineering: 3, ai: 4, growth: 5, fit: 4 },
    factorSources: { engineering: ["D1", "D2", "D4"], ai: ["D3"], growth: ["D1"], fit: ["D1", "D2"] },
    rationale: {
      engineering: "A cloud-native platform at meaningful transaction scale with active technical hiring, but no reliable public engineering-team count.",
      ai: "Technology leadership described an AI-native programme with fraud, chargeback, Gemini, and university-partnership use cases.",
      growth: "$190m investment explicitly allocated to UK growth and European expansion.",
      fit: "Substantial UK transaction volume, 110,000+ customers, and a complex integration estate.",
    },
    sources: [
      ["D1", "Dojo announces $190m investment", "28 May 2025", "https://dojo.tech/resources/dojo-announces-landmark-investment-from-vitruvian-partners/"],
      ["D2", "Dojo business platform", "Current company page", "https://dojo.tech/"],
      ["D3", "Dojo: AI in business", "Company interview", "https://dojo.tech/resources/tech-on-toast-with-dojo-episode-six-ai-in-business/"],
      ["D4", "Careers at Dojo", "Current careers page", "https://dojo.careers/jobs/"],
    ],
    why: "Dojo’s investment, operational scale, and stated AI-native ambition support a strong reason to test for an active developer-tooling initiative.",
    entry: "Explore bounded product-development workflows where velocity can improve without weakening review or security controls.",
    buyingGroup: [
      { person: "Rob Howes", title: "SVP of Technology", fact: "Oversees engineering and data communities and describes AI-generated code, tests and documentation at scale.", assumedRole: "Strong potential champion and technical sponsor", confidence: "High", source: ["Dojo: AI in business", "6 Nov 2025", "https://dojo.tech/resources/tech-on-toast-with-dojo-episode-six-ai-in-business/"] },
      { person: "Nick Fryer", title: "Chief Technology Officer", fact: "Represents Dojo’s microservices, public-cloud and Kubernetes engineering architecture.", assumedRole: "Potential executive sponsor; budget authority unverified", confidence: "Medium", source: ["Dojo: transparency in payments", "29 Aug 2025", "https://dojo.tech/resources/tech-on-toast-with-dojo-podcast-episode-four-transparency-in-payments/"] },
      { person: "Naveed Islam", title: "Chief Information Security Officer", fact: "Owns protection of Dojo’s information, systems and digital assets.", assumedRole: "Likely security approver and reviewer", confidence: "High", source: ["Dojo: cyber security in the age of AI", "1 Aug 2025", "https://dojo.tech/resources/tech-on-toast-with-dojo-episode-five-cyber-security-in-business-the-age-of-ai/"] },
      { person: "Security & Legal", title: "Verified review functions", fact: "Technology works with both functions before AI proofs of concept progress.", assumedRole: "Likely rollout gatekeepers", confidence: "High", source: ["Dojo: AI in business", "6 Nov 2025", "https://dojo.tech/resources/tech-on-toast-with-dojo-episode-six-ai-in-business/"] },
    ],
    unknowns: ["Which AI coding tools are already deployed?", "How do the CTO and SVP split standards and budget?", "Which PCI, residency and supplier controls must be cleared?"],
    evaluation: ["40 developers", "30 days", "2 product teams"],
  },
  {
    name: "GoCardless", segment: "Mid-market", sector: "Fintech", signal: "Production ML outcomes", location: "London",
    factors: { engineering: 4, ai: 4, growth: 4, fit: 4 },
    factorSources: { engineering: ["G3"], ai: ["G2"], growth: ["G1", "G4"], fit: ["G2", "G3"] },
    rationale: {
      engineering: "A distributed Platform Engineering organisation within an 806-person company; engineering headcount is not public.",
      ai: "Production ML uses data from 38m+ accounts and reportedly reduced late-payment failures by more than 80%.",
      growth: "38% FY2024 revenue growth and the first adjusted EBITDA-positive quarter in 2025.",
      fit: "Large UK employee concentration, distributed engineering, and operational AI, without a disclosed tooling trigger.",
    },
    sources: [
      ["G1", "GoCardless revenue rises 38% in FY24", "3 Feb 2025", "https://gocardless.com/blog/gocardless-revenues-up-38-percent-in-fy24"],
      ["G2", "GoCardless launches ML settlement tool", "5 Aug 2025", "https://gocardless.com/blog/gocardless-launches-industry-leading-ai-tool-for-faster-more-reliable-same-day-payments"],
      ["G3", "GoCardless Site Reliability Engineer listing", "Current job listing", "https://job-boards.greenhouse.io/gocardless/jobs/7996584"],
      ["G4", "GoCardless achieves profitability", "8 Oct 2025", "https://gocardless.com/blog/gocardless-achieves-profitability"],
    ],
    why: "The company has a mature platform organisation, measurable ML outcomes, and improving commercial performance, balanced by likely enterprise controls.",
    entry: "Map existing developer tooling and evaluate one measured workflow using a controlled cohort.",
    buyingGroup: [
      { person: "Shaun Puckrin", title: "Chief Product Officer", fact: "Leads product teams and sponsors MCP and AI-copilot strategy for developer workflows.", assumedRole: "Potential AI/product champion; tooling budget unverified", confidence: "Medium", source: ["GoCardless introduces AI-native tool", "18 Feb 2026", "https://gocardless.com/blog/gocardless-introduces-ai-native-tool"] },
      { person: "Security Engineering", title: "Dedicated product-security and security-operations function", fact: "Operates under an ISO 27001 security-management programme.", assumedRole: "Likely technical-security reviewer", confidence: "High", source: ["GoCardless GDPR and security", "Current page", "https://gocardless.com/privacy/en-gdpr/"] },
      { person: "Data Protection Officer", title: "Formal privacy function", fact: "GoCardless maintains a DPO and current public privacy-review route.", assumedRole: "Likely privacy and subprocessor reviewer", confidence: "High", source: ["GoCardless Privacy Centre", "30 Jun 2026", "https://gocardless.com/privacy/account-holders"] },
    ],
    unknowns: ["Who owns developer enablement and coding-assistant standards?", "Do Product, Engineering or central IT hold budget?", "Which ISO 27001 and supplier-assurance evidence is mandatory?"],
    evaluation: ["40 developers", "30 days", "Control cohort"],
  },
];

const weights = { engineering: 25, ai: 25, growth: 25, fit: 25 };
let activeSegment = "All";
let selectedAccount = null;

const phases = [
  {
    title: "Learn the system",
    description: "Build product credibility, validate the territory assumptions, and get into live customer conversations immediately.",
    columns: [
      ["Product fluency", "Complete core workflows hands-on", "Shadow technical evaluations", "Build a five-minute role-based demo"],
      ["Territory", "Validate ICP with internal data", "Score the first 100 accounts", "Map existing product-led signals"],
      ["Customer contact", "Launch three message tests", "Hold 20 discovery conversations", "Capture objections verbatim"],
    ],
  },
  {
    title: "Prove the motion",
    description: "Turn early learning into structured evaluations, multi-threaded opportunities, and reusable commercial assets.",
    columns: [
      ["Pipeline", "Double down on converting signals", "Run vertical micro-campaigns", "Build champion-to-executive paths"],
      ["Evaluations", "Agree outcomes before access", "Create weekly evidence reviews", "Surface security requirements early"],
      ["Enablement", "Publish objection patterns", "Create an ROI narrative", "Share product feedback with evidence"],
    ],
  },
  {
    title: "Scale what works",
    description: "Close the loop from signal to outcome, codify the winning patterns, and expand beyond the first successful teams.",
    columns: [
      ["Revenue", "Convert successful evaluations", "Build mutual close plans", "Create expansion hypotheses"],
      ["Repeatability", "Document vertical playbooks", "Refine qualification thresholds", "Automate low-value research work"],
      ["Feedback", "Report win/loss patterns", "Prioritise roadmap evidence", "Set next-quarter experiments"],
    ],
  },
];

function score(account) {
  const weighted = Object.entries(weights).reduce(
    (total, [key, weight]) => total + account.factors[key] * weight,
    0,
  );
  const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);
  return Math.round((weighted / (totalWeight * 5)) * 100);
}

function navigate(viewName) {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === viewName));
  document.querySelectorAll(".nav-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === viewName));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".nav-tab").forEach((tab) => tab.addEventListener("click", () => navigate(tab.dataset.view)));
document.querySelectorAll("[data-go]").forEach((button) => button.addEventListener("click", () => navigate(button.dataset.go)));

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

function renderLandscape() {
  const plot = document.getElementById("opportunityLandscape");
  const sectorColours = {
    Edtech: "#7d6fe8",
    AI: "#ff5a36",
    "Enterprise AI": "#d1467c",
    Fintech: "#237b57",
    Insurtech: "#d39a18",
  };
  const collisions = {};

  plot.querySelectorAll(".landscape-bubble").forEach((bubble) => bubble.remove());
  accounts.forEach((account) => {
    const technical = account.factors.engineering + account.factors.ai;
    const commercial = account.factors.growth + account.factors.fit;
    const positionKey = `${technical}-${commercial}`;
    const collisionIndex = collisions[positionKey] || 0;
    collisions[positionKey] = collisionIndex + 1;
    const collisionOffsets = [[-3, 3], [3, -3], [0, 0], [-5, -4]];
    const [offsetX, offsetY] = collisionOffsets[collisionIndex] || [0, 0];
    const x = 18 + ((commercial - 8) / 2) * 64 + offsetX;
    const y = 18 + ((technical - 7) / 3) * 64 + offsetY;
    const initials = account.name.length > 9
      ? account.name.split(/\s+/).map((word) => word[0]).join("").slice(0, 3)
      : account.name.slice(0, 3);
    const button = document.createElement("button");
    button.className = `landscape-bubble ${account.segment.toLowerCase()}`;
    button.style.setProperty("--x", `${x}%`);
    button.style.setProperty("--y", `${y}%`);
    button.style.setProperty("--size", `${36 + (score(account) - 80) * 0.35}px`);
    button.style.setProperty("--bubble", sectorColours[account.sector] || "var(--accent)");
    button.setAttribute("aria-label", `Open ${account.name}, evidence score ${score(account)}`);
    button.innerHTML = `
      ${initials.toUpperCase()}
      <span class="bubble-name">${account.name}</span>
      <span class="bubble-tooltip">
        <strong>${account.name} · ${score(account)}/100</strong>
        <span>${account.signal}</span>
        <span>Technical evidence <b>${technical}/10</b></span>
        <span>Commercial timing <b>${commercial}/10</b></span>
        <span>${account.sources.length} scoring sources · Click to inspect</span>
      </span>
    `;
    button.addEventListener("click", () => {
      navigate("territory");
      selectAccount(account.name);
    });
    plot.appendChild(button);
  });
}

function renderAccounts() {
  const query = document.getElementById("accountSearch").value.toLowerCase();
  const filtered = accounts
    .filter((account) => activeSegment === "All" || account.segment === activeSegment)
    .filter((account) => `${account.name} ${account.sector} ${account.signal}`.toLowerCase().includes(query))
    .sort((a, b) => score(b) - score(a));

  document.getElementById("accountList").innerHTML = filtered.length
    ? filtered.map((account, index) => `
      <button class="account-row ${selectedAccount === account.name ? "active" : ""}" data-account="${account.name}">
        <span class="account-name"><strong>${account.name}</strong><span>#${String(index + 1).padStart(2, "0")} · ${account.sector} · ${account.location}</span></span>
        <span class="score">${score(account)}</span>
        <span class="signal-text">${account.signal}</span>
        <span class="chevron">›</span>
      </button>
    `).join("")
    : `<div class="empty-detail" style="min-height:300px"><h3>No matching accounts</h3><p>Try another search or segment.</p></div>`;

  document.querySelectorAll(".account-row").forEach((row) => row.addEventListener("click", () => selectAccount(row.dataset.account)));
}

function selectAccount(name) {
  selectedAccount = name;
  const account = accounts.find((item) => item.name === name);
  const rank = [...accounts].sort((a, b) => score(b) - score(a)).findIndex((item) => item.name === name) + 1;
  document.getElementById("accountDetail").innerHTML = `
    <div class="detail-top">
      <div>
        <h2>${account.name}</h2>
        <div class="detail-tags">
          <span class="tag tier-tag">Tier ${rank <= 4 ? "1" : rank <= 8 ? "2" : "3"}</span>
          <span class="tag">${account.segment}</span>
          <span class="tag">${account.sector}</span>
        </div>
      </div>
      <div class="detail-meta">
        <div class="detail-score"><strong>${score(account)}</strong><span>EVIDENCE SCORE</span></div>
        <a class="source-jump" href="#sources-${account.name.toLowerCase()}">${account.sources.length} cited sources ↓</a>
      </div>
    </div>
    <div class="detail-section">
      <h4>EVIDENCE-BASED CASE</h4>
      <p>${account.why}</p>
    </div>
    <div class="detail-section">
      <h4>SCORE BREAKDOWN · EACH DIMENSION 25%</h4>
      <div class="score-breakdown">
        ${Object.entries(account.factors).map(([key, value]) => `
          <div class="factor-row">
            <div class="factor-heading"><span>${weightLabels[key]}</span><strong>${value}/5</strong></div>
            <div class="factor-track"><span style="width:${value * 20}%"></span></div>
            <p>${account.rationale[key]}</p>
            <div class="factor-citations">
              <span>Sources:</span>
              ${account.factorSources[key].map((id) => {
                const source = account.sources.find(([sourceId]) => sourceId === id);
                return `<a href="${source[3]}" target="_blank" rel="noopener noreferrer" aria-label="Open source ${id}">${id} ↗</a>`;
              }).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
    <div class="detail-section">
      <h4>RECOMMENDED ENTRY HYPOTHESIS · NOT A FACT</h4>
      <p>${account.entry}</p>
    </div>
    <div class="detail-section">
      <h4>VERIFIED BUYING-GROUP EVIDENCE</h4>
      <div class="buying-group">${account.buyingGroup.map((member) => `
        <article class="buying-card">
          <div class="buying-card-top">
            <div><strong>${member.person}</strong><span>${member.title}</span></div>
            <b class="confidence-badge ${member.confidence.toLowerCase()}">${member.confidence}</b>
          </div>
          <p><b>Verified:</b> ${member.fact}</p>
          <p class="assumption"><b>Assumed deal role:</b> ${member.assumedRole}</p>
          <a href="${member.source[2]}" target="_blank" rel="noopener noreferrer">${member.source[0]} · ${member.source[1]} ↗</a>
        </article>
      `).join("")}</div>
    </div>
    <div class="detail-section">
      <h4>UNKNOWNS TO VALIDATE IN DISCOVERY</h4>
      <ul class="unknown-list">${account.unknowns.map((unknown) => `<li>${unknown}</li>`).join("")}</ul>
    </div>
    <div class="detail-section">
      <h4>ILLUSTRATIVE EVALUATION</h4>
      <div class="evaluation-line">${account.evaluation.map((item) => `<span>${item}</span>`).join("")}</div>
    </div>
    <div class="detail-section source-section" id="sources-${account.name.toLowerCase()}">
      <h4>PUBLIC SOURCES</h4>
      <ol class="source-list">${account.sources.map(([id, title, date, url]) => `
        <li><a href="${url}" target="_blank" rel="noopener noreferrer"><span>${id}</span><div><strong>${title}</strong><small>${date} · Open source ↗</small></div></a></li>
      `).join("")}</ol>
    </div>
    <div class="confidence"><span>RESEARCHED 22 JUL 2026</span><span>CLICK ANY SOURCE TO VERIFY</span></div>
  `;
  renderAccounts();
}

document.getElementById("accountSearch").addEventListener("input", renderAccounts);
document.querySelectorAll(".filter").forEach((filter) => filter.addEventListener("click", () => {
  activeSegment = filter.dataset.segment;
  document.querySelectorAll(".filter").forEach((item) => item.classList.toggle("active", item === filter));
  renderAccounts();
}));

const weightLabels = {
  engineering: "Engineering evidence",
  ai: "AI signal",
  growth: "Growth trigger",
  fit: "Commercial fit",
};

function renderWeightControls() {
  const rubric = [
    ["0", "No public evidence"],
    ["1", "Weak or indirect signal"],
    ["2", "Limited or dated evidence"],
    ["3", "Clear current evidence"],
    ["4", "Strong, quantified evidence"],
    ["5", "Exceptional evidence across multiple sources"],
  ];
  document.getElementById("weightControls").innerHTML = `
    <div class="dimension-grid">
      ${Object.entries(weightLabels).map(([key, label]) => `<div><span>${label}</span><strong>${weights[key]}%</strong></div>`).join("")}
    </div>
    <div class="rubric-scale">
      ${rubric.map(([value, meaning]) => `<div><strong>${value}</strong><span>${meaning}</span></div>`).join("")}
    </div>
    <p class="rubric-note">Scores measure the strength of public evidence—not purchase intent. Commercial fit considers UK accessibility, organisational scale, and whether the cited context supports a credible developer-tool conversation.</p>
  `;
}

const weightsModal = document.getElementById("weightsModal");
document.getElementById("editWeights").addEventListener("click", () => {
  renderWeightControls();
  weightsModal.classList.add("open");
  weightsModal.setAttribute("aria-hidden", "false");
});
function closeWeights() {
  weightsModal.classList.remove("open");
  weightsModal.setAttribute("aria-hidden", "true");
}
document.getElementById("closeWeights").addEventListener("click", closeWeights);
weightsModal.addEventListener("click", (event) => { if (event.target === weightsModal) closeWeights(); });
document.getElementById("applyWeights").addEventListener("click", () => {
  closeWeights();
});

const modelInputs = ["target", "acv", "win", "meeting", "evaluation"];
function formatCompact(value) {
  if (value >= 1000) return `£${(value / 1000).toFixed(value % 1000 ? 1 : 0)}m`;
  return `£${Math.round(value)}k`;
}

function updateModel() {
  const values = Object.fromEntries(modelInputs.map((id) => [id, Number(document.getElementById(id).value)]));
  document.getElementById("targetOut").textContent = formatCompact(values.target);
  document.getElementById("acvOut").textContent = `£${values.acv}k`;
  document.getElementById("winOut").textContent = `${values.win}%`;
  document.getElementById("meetingOut").textContent = `${values.meeting}%`;
  document.getElementById("evalOut").textContent = `${values.evaluation}%`;

  const wins = Math.ceil(values.target / values.acv);
  const evaluations = Math.ceil(wins / (values.evaluation / 100));
  const opportunities = Math.ceil(wins / (values.win / 100));
  const meetings = Math.ceil(opportunities / (values.meeting / 100));
  const pipeline = opportunities * values.acv;
  const coverage = pipeline / values.target;

  document.getElementById("winsResult").textContent = wins;
  document.getElementById("evaluationsResult").textContent = evaluations;
  document.getElementById("opportunitiesResult").textContent = opportunities;
  document.getElementById("meetingsResult").textContent = meetings;
  document.getElementById("pipelineResult").textContent = formatCompact(pipeline);
  document.getElementById("coverageResult").textContent = `${coverage.toFixed(1)}×`;
  document.getElementById("coverageBar").style.width = `${Math.min(100, coverage * 18)}%`;
}

modelInputs.forEach((id) => document.getElementById(id).addEventListener("input", updateModel));
document.getElementById("resetModel").addEventListener("click", () => {
  const defaults = { target: 800, acv: 25, win: 25, meeting: 35, evaluation: 45 };
  Object.entries(defaults).forEach(([id, value]) => { document.getElementById(id).value = value; });
  updateModel();
});

function renderPhase(index) {
  const phase = phases[index];
  document.getElementById("phaseContent").innerHTML = `
    <div class="phase-header"><h2>${phase.title}</h2><p>${phase.description}</p></div>
    <div class="phase-columns">${phase.columns.map(([title, ...items]) => `
      <div class="phase-column"><h3>${title}</h3><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></div>
    `).join("")}</div>
  `;
}

document.querySelectorAll(".timeline-tab").forEach((tab) => tab.addEventListener("click", () => {
  document.querySelectorAll(".timeline-tab").forEach((item) => item.classList.toggle("active", item === tab));
  renderPhase(Number(tab.dataset.phase));
}));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeWeights();
});

renderAccounts();
renderLandscape();
updateModel();
renderPhase(0);
