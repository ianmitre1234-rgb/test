const accounts = [
  {
    name: "Monzo",
    segment: "Mid-market",
    sector: "Fintech",
    signal: "Engineering scale",
    location: "London",
    factors: { engineering: 96, ai: 86, growth: 82, fit: 92, trigger: 76 },
    why: "A digital product company where software delivery is the business. The hypothesis is that improving developer flow could compound across a large engineering organisation.",
    entry: "Lead with a developer-experience workflow hypothesis and identify a team willing to establish a measurable baseline.",
    stakeholders: [["Champion", "Developer Experience"], ["Economic buyer", "VP Engineering"], ["Influencer", "Platform Engineering"], ["Partner", "Security & Procurement"]],
    evaluation: ["50 developers", "30 days", "3 workflows"],
    confidence: "Medium",
  },
  {
    name: "Wayve",
    segment: "Scale-up",
    sector: "AI",
    signal: "AI-native culture",
    location: "London",
    factors: { engineering: 88, ai: 99, growth: 94, fit: 90, trigger: 90 },
    why: "An AI-native organisation with highly technical teams and an apparent appetite for ambitious tooling. Product credibility would matter more than a generic sales motion.",
    entry: "Start with technical discovery around complex codebase navigation, model-assisted development, and the boundaries required for safe adoption.",
    stakeholders: [["Champion", "Engineering Lead"], ["Economic buyer", "VP Engineering"], ["Influencer", "Research Engineers"], ["Partner", "Security"]],
    evaluation: ["25 developers", "21 days", "2 repositories"],
    confidence: "Medium",
  },
  {
    name: "Dojo",
    segment: "Mid-market",
    sector: "Fintech",
    signal: "Software centrality",
    location: "London",
    factors: { engineering: 90, ai: 79, growth: 86, fit: 92, trigger: 74 },
    why: "Payments infrastructure creates a strong need for engineering velocity without compromising quality, security, or reliability.",
    entry: "Explore whether Cursor can accelerate bounded product-development workflows while preserving existing review and security controls.",
    stakeholders: [["Champion", "Engineering Director"], ["Economic buyer", "CTO"], ["Influencer", "Senior Developers"], ["Partner", "Security & Legal"]],
    evaluation: ["40 developers", "30 days", "2 product teams"],
    confidence: "Medium",
  },
  {
    name: "Marshmallow",
    segment: "Scale-up",
    sector: "Insurtech",
    signal: "Growth trajectory",
    location: "London",
    factors: { engineering: 78, ai: 82, growth: 92, fit: 88, trigger: 86 },
    why: "A fast-growing digital insurer offers a credible intersection of software intensity, regulated workflows, and pressure to scale efficiently.",
    entry: "Connect AI-assisted development to the organisation’s growth agenda, then scope a pilot around a product team with repeatable delivery work.",
    stakeholders: [["Champion", "Engineering Manager"], ["Economic buyer", "CTO"], ["Influencer", "Developers"], ["Partner", "Risk & Security"]],
    evaluation: ["20 developers", "30 days", "1 product group"],
    confidence: "Medium",
  },
  {
    name: "Synthesia",
    segment: "Scale-up",
    sector: "AI",
    signal: "AI product fluency",
    location: "London",
    factors: { engineering: 82, ai: 98, growth: 90, fit: 87, trigger: 83 },
    why: "Teams already building with AI may evaluate developer tools with high sophistication and can become valuable product-feedback partners.",
    entry: "Earn technical curiosity with a tailored demo using a representative workflow, then co-design success criteria with engineering leadership.",
    stakeholders: [["Champion", "Staff Engineer"], ["Economic buyer", "VP Engineering"], ["Influencer", "Product Engineers"], ["Partner", "IT & Security"]],
    evaluation: ["25 developers", "21 days", "3 use cases"],
    confidence: "Medium",
  },
  {
    name: "GoCardless",
    segment: "Mid-market",
    sector: "Fintech",
    signal: "Developer platform",
    location: "London",
    factors: { engineering: 86, ai: 76, growth: 70, fit: 91, trigger: 65 },
    why: "A mature engineering environment could provide a strong productivity case, but would require a rigorous approach to security and change management.",
    entry: "Map the existing developer-tooling landscape and position a controlled evaluation against a workflow that teams already measure.",
    stakeholders: [["Champion", "DevEx Lead"], ["Economic buyer", "VP Engineering"], ["Influencer", "Platform Team"], ["Partner", "Security & Procurement"]],
    evaluation: ["40 developers", "30 days", "Control cohort"],
    confidence: "Medium",
  },
  {
    name: "Zego",
    segment: "Scale-up",
    sector: "Insurtech",
    signal: "Digital-first model",
    location: "London",
    factors: { engineering: 72, ai: 75, growth: 76, fit: 84, trigger: 70 },
    why: "A technology-led insurance proposition suggests meaningful engineering leverage and a clear connection between delivery speed and customer experience.",
    entry: "Test for an executive priority around engineering efficiency, then recruit a developer champion to shape the initial workflow.",
    stakeholders: [["Champion", "Engineering Manager"], ["Economic buyer", "CTO"], ["Influencer", "Product Engineers"], ["Partner", "Security"]],
    evaluation: ["15 developers", "21 days", "1 workflow"],
    confidence: "Low–medium",
  },
  {
    name: "Multiverse",
    segment: "Mid-market",
    sector: "Edtech",
    signal: "Product transformation",
    location: "London",
    factors: { engineering: 74, ai: 83, growth: 72, fit: 79, trigger: 82 },
    why: "A technology-enabled learning business has both an engineering opportunity and an organisational narrative around responsible AI adoption.",
    entry: "Frame the discussion around building internal AI fluency through an observable, governed developer evaluation.",
    stakeholders: [["Champion", "Engineering Director"], ["Economic buyer", "CTO"], ["Influencer", "Product & Data"], ["Partner", "Legal & IT"]],
    evaluation: ["20 developers", "30 days", "AI enablement"],
    confidence: "Low–medium",
  },
  {
    name: "Quantexa",
    segment: "Mid-market",
    sector: "Enterprise AI",
    signal: "Technical complexity",
    location: "London",
    factors: { engineering: 88, ai: 94, growth: 84, fit: 84, trigger: 76 },
    why: "Complex enterprise software and AI expertise create strong potential value, alongside a higher bar for technical validation and security.",
    entry: "Use a technically credible evaluation plan that separates developer experience, code quality, and capacity outcomes.",
    stakeholders: [["Champion", "Platform Lead"], ["Economic buyer", "Chief Product Officer"], ["Influencer", "Engineering"], ["Partner", "Security & Legal"]],
    evaluation: ["30 developers", "30 days", "2 cohorts"],
    confidence: "Medium",
  },
  {
    name: "Cleo",
    segment: "Scale-up",
    sector: "Fintech",
    signal: "Product velocity",
    location: "London",
    factors: { engineering: 72, ai: 88, growth: 84, fit: 86, trigger: 80 },
    why: "An AI-enabled consumer product suggests both technical fluency and a strong need to move quickly with a relatively lean team.",
    entry: "Show a concise, workflow-specific demo and propose a lightweight evaluation with fast feedback loops.",
    stakeholders: [["Champion", "Senior Engineer"], ["Economic buyer", "VP Engineering"], ["Influencer", "Product Engineers"], ["Partner", "IT"]],
    evaluation: ["15 developers", "14 days", "Fast-cycle pilot"],
    confidence: "Medium",
  },
];

let weights = { engineering: 30, ai: 20, growth: 20, fit: 15, trigger: 15 };
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
  return Math.round(weighted / Object.values(weights).reduce((a, b) => a + b, 0));
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
      <div class="detail-score"><strong>${score(account)}</strong><span>FIT SCORE</span></div>
    </div>
    <div class="detail-section">
      <h4>WHY THIS ACCOUNT</h4>
      <p>${account.why}</p>
    </div>
    <div class="detail-section">
      <h4>ENTRY HYPOTHESIS</h4>
      <p>${account.entry}</p>
    </div>
    <div class="detail-section">
      <h4>BUYING GROUP</h4>
      <div class="stakeholders">${account.stakeholders.map(([role, person]) => `<div class="stakeholder"><span>${role}</span><strong>${person}</strong></div>`).join("")}</div>
    </div>
    <div class="detail-section">
      <h4>ILLUSTRATIVE EVALUATION</h4>
      <div class="evaluation-line">${account.evaluation.map((item) => `<span>${item}</span>`).join("")}</div>
    </div>
    <div class="confidence"><span>PUBLIC-SIGNAL HYPOTHESIS</span><span>CONFIDENCE · ${account.confidence.toUpperCase()}</span></div>
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
  engineering: "Engineering intensity",
  ai: "AI readiness",
  growth: "Growth signals",
  fit: "Commercial fit",
  trigger: "Trigger events",
};

function renderWeightControls() {
  document.getElementById("weightControls").innerHTML = Object.entries(weights).map(([key, value]) => `
    <label class="weight-control">
      <span><b>${weightLabels[key]}</b><output id="${key}WeightOut">${value}%</output></span>
      <input class="weight-input" data-weight="${key}" type="range" min="5" max="50" step="5" value="${value}" />
    </label>
  `).join("");
  document.querySelectorAll(".weight-input").forEach((input) => input.addEventListener("input", updateWeightTotal));
  updateWeightTotal();
}

function updateWeightTotal() {
  const total = [...document.querySelectorAll(".weight-input")].reduce((sum, input) => {
    document.getElementById(`${input.dataset.weight}WeightOut`).textContent = `${input.value}%`;
    return sum + Number(input.value);
  }, 0);
  const totalLabel = document.getElementById("weightTotal");
  totalLabel.textContent = `Total: ${total}%`;
  totalLabel.style.color = total === 100 ? "var(--green)" : "var(--accent)";
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
  document.querySelectorAll(".weight-input").forEach((input) => { weights[input.dataset.weight] = Number(input.value); });
  renderAccounts();
  if (selectedAccount) selectAccount(selectedAccount);
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
updateModel();
renderPhase(0);
