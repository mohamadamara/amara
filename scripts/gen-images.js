/**
 * Generates 8 premium, on-brand SVG cover images into /public/images.
 * Each cover is a 16:9 dark glassmorphic "app window" mockup with soft
 * accent orbs, a subtle dotted grid, a unique motif, and the project title.
 * Run once with: node scripts/gen-images.js
 */
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "..", "public", "images");
fs.mkdirSync(OUT, { recursive: true });

// One cohesive black-and-gold identity, with tasteful per-project hue shifts
// across the warm range (orange → amber → gold).
const themes = [
  { slug: "ai-chatbot", n: "01", label: "AI · Assistant", h: 38, motif: "chat" },
  { slug: "realtime-collab-board", n: "02", label: "Realtime · Canvas", h: 28, motif: "board" },
  { slug: "developer-portfolio-cms", n: "03", label: "CMS · Content", h: 42, motif: "cms" },
  { slug: "fintech-budget-tracker", n: "04", label: "Fintech · Budgets", h: 50, motif: "wallet" },
  { slug: "ai-image-studio", n: "05", label: "Generative · Studio", h: 22, motif: "image" },
  { slug: "flowly", n: "06", label: "SaaS · Business OS", h: 44, motif: "os" },
  { slug: "travel-itinerary-planner", n: "07", label: "Maps · Planner", h: 32, motif: "map" },
  { slug: "hijab-store", n: "08", label: "E-commerce · Boutique", h: 36, motif: "shop" },
  { slug: "gym-crm", n: "09", label: "CRM · Fitness", h: 47, motif: "gym" },
  { slug: "ai-accident-forensics", n: "10", label: "AI · Forensics", h: 18, motif: "crash" },
  { slug: "carshop-management", n: "11", label: "Inventory · Automotive", h: 41, motif: "carshop" },
  { slug: "aivoice", n: "12", label: "AI · Voice Study", h: 34, motif: "voice" }
];

const title = {
  "ai-chatbot": "AI Chatbot",
  "realtime-collab-board": "Realtime Collab Board",
  "developer-portfolio-cms": "Portfolio CMS",
  "fintech-budget-tracker": "Budget Tracker",
  "ai-image-studio": "AI Image Studio",
  "flowly": "Flowly",
  "travel-itinerary-planner": "Travel Planner",
  "hijab-store": "Hijab Store",
  "gym-crm": "Gym CRM",
  "ai-accident-forensics": "AI Accident Forensics",
  "carshop-management": "CarShop Management",
  "aivoice": "AIVoice"
};

const hsl = (h, s, l, a = 1) => `hsla(${h}, ${s}%, ${l}%, ${a})`;

// Per-motif abstract content drawn inside the glass window (x:120 y:250 w:1360 h:520).
function motif(kind, h) {
  const a1 = hsl(h, 85, 62);
  const a2 = hsl(h + 18, 80, 64);
  const dim = hsl(h, 30, 70, 0.5);
  const line = "rgba(255,255,255,0.10)";
  switch (kind) {
    case "chat":
      return `
        <rect x="170" y="320" rx="18" width="520" height="74" fill="rgba(255,255,255,0.05)"/>
        <rect x="170" y="320" rx="18" width="300" height="74" fill="${hsl(h,55,30,0.55)}"/>
        <rect x="640" y="430" rx="18" width="640" height="74" fill="${a1}" opacity="0.92"/>
        <rect x="170" y="540" rx="18" width="430" height="74" fill="rgba(255,255,255,0.05)"/>
        <circle cx="1330" cy="360" r="6" fill="${a2}"><animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" repeatCount="indefinite"/></circle>`;
    case "chart":
      return `
        ${[0,1,2,3,4,5,6].map(i=>`<rect x="${200+i*150}" y="${600-(60+((i*53)%260))}" width="86" height="${60+((i*53)%260)}" rx="10" fill="${i%2?dim:a1}" opacity="${i%2?0.5:0.92}"/>`).join("")}
        <polyline points="240,420 390,470 540,360 690,400 840,300 990,340 1140,250 1290,300" fill="none" stroke="${a2}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        ${[ "240,420","540,360","840,300","1140,250" ].map(p=>`<circle cx="${p.split(",")[0]}" cy="${p.split(",")[1]}" r="8" fill="#fff"/>`).join("")}`;
    case "board":
      return `
        ${[[210,330,260,150,0.9],[520,420,260,150,0.5],[210,510,260,90,0.5],[860,330,260,200,0.7],[1180,360,160,160,0.9]].map(c=>`<rect x="${c[0]}" y="${c[1]}" width="${c[2]}" height="${c[3]}" rx="16" fill="${a1}" opacity="${c[4]}"/>`).join("")}
        <path d="M470 405 C 700 405, 700 430, 860 430" fill="none" stroke="${line}" stroke-width="4" stroke-dasharray="8 10"/>
        <path d="M990 410 C 1120 410, 1120 440, 1180 440" fill="none" stroke="${line}" stroke-width="4" stroke-dasharray="8 10"/>`;
    case "cms":
      return `
        <rect x="170" y="320" width="300" height="300" rx="18" fill="rgba(255,255,255,0.04)" stroke="${line}"/>
        ${[0,1,2,3].map(i=>`<rect x="200" y="${360+i*60}" width="${240-i*30}" height="12" rx="6" fill="${i?dim:a1}"/>`).join("")}
        <rect x="520" y="320" width="760" height="140" rx="18" fill="${hsl(h,55,28,0.5)}"/>
        <rect x="520" y="484" width="760" height="14" rx="7" fill="${dim}"/>
        <rect x="520" y="520" width="620" height="14" rx="7" fill="${dim}"/>
        <rect x="520" y="556" width="700" height="14" rx="7" fill="${dim}"/>`;
    case "wallet":
      return `
        <rect x="190" y="330" width="520" height="300" rx="26" fill="${a1}" opacity="0.92"/>
        <rect x="230" y="372" width="120" height="80" rx="12" fill="rgba(255,255,255,0.35)"/>
        <rect x="230" y="540" width="260" height="16" rx="8" fill="rgba(255,255,255,0.55)"/>
        ${[0,1,2,3].map(i=>`<g><rect x="800" y="${340+i*70}" width="480" height="48" rx="12" fill="rgba(255,255,255,0.05)"/><circle cx="828" cy="${364+i*70}" r="12" fill="${i%2?dim:a2}"/></g>`).join("")}`;
    case "image":
      return `
        ${[[190,330],[520,330],[850,330],[1180,330],[190,490],[520,490],[850,490],[1180,490]].map((c,i)=>`<rect x="${c[0]}" y="${c[1]}" width="270" height="130" rx="14" fill="${i%3===0?a1:hsl(h+i*8,55,30,0.6)}" opacity="${i%3===0?0.9:0.7}"/>`).join("")}
        <circle cx="1330" cy="395" r="46" fill="none" stroke="${a2}" stroke-width="5" stroke-dasharray="6 8"><animateTransform attributeName="transform" type="rotate" from="0 1330 395" to="360 1330 395" dur="8s" repeatCount="indefinite"/></circle>`;
    case "auth":
      return `
        <rect x="560" y="320" width="480" height="320" rx="22" fill="rgba(255,255,255,0.04)" stroke="${line}"/>
        <circle cx="800" cy="392" r="40" fill="none" stroke="${a1}" stroke-width="6"/>
        <path d="M780 392 l14 14 l26 -30" fill="none" stroke="${a2}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="610" y="468" width="380" height="44" rx="12" fill="rgba(255,255,255,0.06)"/>
        <rect x="610" y="528" width="380" height="44" rx="12" fill="rgba(255,255,255,0.06)"/>
        <rect x="610" y="588" width="380" height="44" rx="12" fill="${a1}" opacity="0.92"/>`;
    case "map":
      return `
        <path d="M180 600 Q 420 360 620 470 T 1080 380 T 1300 460" fill="none" stroke="${a2}" stroke-width="6" stroke-dasharray="2 16" stroke-linecap="round"/>
        ${[[180,600],[620,470],[1080,380],[1300,460]].map((p,i)=>`<g><circle cx="${p[0]}" cy="${p[1]}" r="16" fill="${a1}"/><circle cx="${p[0]}" cy="${p[1]}" r="6" fill="#fff"/></g>`).join("")}
        ${[[300,360],[820,560],[1180,520]].map(p=>`<rect x="${p[0]}" y="${p[1]}" width="200" height="80" rx="14" fill="rgba(255,255,255,0.05)"/>`).join("")}`;
    case "voice":
      return `
        <g>
          <circle cx="242" cy="398" r="48" fill="${a1}" opacity="0.95"/>
          <rect x="230" y="372" width="24" height="36" rx="12" fill="${hsl(h, 30, 9)}"/>
          <path d="M222 398 a20 20 0 0 0 40 0" fill="none" stroke="${hsl(h, 30, 9)}" stroke-width="4" stroke-linecap="round"/>
          <line x1="242" y1="420" x2="242" y2="430" stroke="${hsl(h, 30, 9)}" stroke-width="4" stroke-linecap="round"/>
        </g>
        ${Array.from({ length: 14 }, (_, i) => {
          const bh = 18 + ((i * 37) % 72);
          const hot = i % 3 !== 1;
          return `<rect x="${330 + i * 29}" y="${398 - bh / 2}" width="12" height="${bh}" rx="6" fill="${hot ? a1 : "rgba(255,255,255,0.16)"}" opacity="${hot ? 0.5 + ((i * 11) % 5) * 0.1 : 1}"/>`;
        }).join("")}
        <rect x="170" y="486" width="560" height="144" rx="16" fill="rgba(255,255,255,0.04)" stroke="${line}"/>
        <circle cx="204" cy="518" r="9" fill="${a2}"/>
        <rect x="226" y="512" width="300" height="12" rx="6" fill="rgba(255,255,255,0.4)"/>
        <rect x="204" y="548" width="440" height="11" rx="5" fill="${dim}" opacity="0.55"/>
        <rect x="204" y="576" width="380" height="11" rx="5" fill="${dim}" opacity="0.4"/>
        <g>
          <rect x="812" y="334" width="372" height="206" rx="18" fill="rgba(255,255,255,0.05)"/>
          <rect x="790" y="354" width="380" height="212" rx="18" fill="${hsl(h, 55, 28, 0.55)}" stroke="${line}"/>
          <circle cx="826" cy="394" r="13" fill="${a1}"/>
          <rect x="852" y="386" width="250" height="13" rx="6" fill="rgba(255,255,255,0.5)"/>
          <line x1="810" y1="446" x2="1150" y2="446" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
          <circle cx="826" cy="486" r="13" fill="${a2}"/>
          <rect x="852" y="470" width="280" height="11" rx="5" fill="rgba(255,255,255,0.32)"/>
          <rect x="852" y="494" width="220" height="11" rx="5" fill="rgba(255,255,255,0.22)"/>
        </g>
        ${[0, 1, 2].map(i => `<rect x="${790 + i * 100}" y="592" width="86" height="26" rx="13" fill="${i === 0 ? hsl(h, 70, 45, 0.8) : "rgba(255,255,255,0.06)"}"/>`).join("")}
        <g>
          <rect x="1212" y="352" width="118" height="214" rx="14" fill="rgba(255,255,255,0.03)" stroke="${a2}" stroke-width="2" stroke-dasharray="7 8"/>
          <rect x="1240" y="386" width="62" height="76" rx="8" fill="rgba(255,255,255,0.08)"/>
          ${[0, 1, 2].map(i => `<rect x="1250" y="${400 + i * 18}" width="${42 - i * 8}" height="7" rx="3.5" fill="rgba(255,255,255,0.25)"/>`).join("")}
          <line x1="1271" y1="530" x2="1271" y2="490" stroke="${a1}" stroke-width="5" stroke-linecap="round"/>
          <path d="M1256 504 L1271 486 L1286 504" fill="none" stroke="${a1}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>`;
    case "carshop":
      return `
        <rect x="170" y="320" width="420" height="48" rx="12" fill="rgba(255,255,255,0.05)"/>
        <circle cx="198" cy="344" r="8" fill="none" stroke="${dim}" stroke-width="3"/>
        <line x1="204" y1="350" x2="212" y2="358" stroke="${dim}" stroke-width="3" stroke-linecap="round"/>
        <rect x="226" y="338" width="180" height="12" rx="6" fill="rgba(255,255,255,0.14)"/>
        <rect x="614" y="320" width="130" height="48" rx="24" fill="${a1}" opacity="0.95"/>
        <rect x="648" y="338" width="62" height="12" rx="6" fill="${hsl(h, 30, 10)}" opacity="0.8"/>
        <rect x="170" y="392" width="700" height="208" rx="14" fill="rgba(255,255,255,0.03)" stroke="${line}"/>
        ${[0, 1, 2].map(c => `<rect x="${196 + c * 210}" y="410" width="${110 - c * 16}" height="11" rx="5" fill="rgba(255,255,255,0.28)"/>`).join("")}
        ${[0, 1, 2].map(r => `
        <g>
          ${r === 1 ? `<rect x="182" y="${446 + r * 46}" width="676" height="38" rx="10" fill="${hsl(h, 55, 30, 0.5)}"/>` : ""}
          ${[0, 1, 2].map(c => `<rect x="${196 + c * 210}" y="${459 + r * 46}" width="${130 - c * 22 - (r % 2) * 14}" height="12" rx="6" fill="${r === 1 ? "rgba(255,255,255,0.5)" : dim}" opacity="${r === 1 ? 1 : 0.55}"/>`).join("")}
          <circle cx="820" cy="${465 + r * 46}" r="7" fill="${r === 1 ? a2 : "rgba(255,255,255,0.15)"}"/>
        </g>`).join("")}
        <g>
          <rect x="910" y="330" width="420" height="270" rx="18" fill="${hsl(h, 28, 9, 0.97)}" stroke="rgba(255,255,255,0.14)" stroke-width="1.5"/>
          <path d="M958 428 h56 l32 -36 h88 l42 36 h74 a14 14 0 0 1 14 14 v12 h-320 v-12 a14 14 0 0 1 14 -14 z" fill="${a1}" opacity="0.92"/>
          <circle cx="1030" cy="456" r="17" fill="${hsl(h, 25, 8)}" stroke="${a2}" stroke-width="4"/>
          <circle cx="1226" cy="456" r="17" fill="${hsl(h, 25, 8)}" stroke="${a2}" stroke-width="4"/>
          ${[0, 1, 2].map(i => `
          <g>
            <rect x="946" y="${498 + i * 32}" width="96" height="11" rx="5" fill="rgba(255,255,255,0.22)"/>
            <rect x="1070" y="${498 + i * 32}" width="${210 - i * 40}" height="11" rx="5" fill="${i === 0 ? a2 : dim}" opacity="${i === 0 ? 0.9 : 0.5}"/>
          </g>`).join("")}
        </g>
        <rect x="170" y="614" width="700" height="22" rx="11" fill="rgba(255,255,255,0.04)"/>
        <circle cx="192" cy="625" r="6" fill="#34d399"/>
        <rect x="208" y="620" width="130" height="10" rx="5" fill="${dim}" opacity="0.5"/>`;
    case "crash":
      return `
        <g>
          <rect x="215" y="335" width="190" height="290" rx="48" fill="rgba(255,255,255,0.06)" stroke="${line}" stroke-width="2"/>
          <rect x="250" y="398" width="120" height="82" rx="14" fill="rgba(255,255,255,0.08)"/>
          <rect x="250" y="504" width="120" height="60" rx="12" fill="rgba(255,255,255,0.05)"/>
          <circle cx="242" cy="362" r="36" fill="${a1}" opacity="0.5"/>
          <circle cx="242" cy="362" r="16" fill="${a1}"/>
          <path d="M132 296 L218 348" stroke="${a2}" stroke-width="6" stroke-linecap="round"/>
          <path d="M206 328 L224 352 L198 354 z" fill="${a2}"/>
        </g>
        ${[0, 1, 2].map(i => `
        <g>
          <rect x="446" y="${346 + i * 48}" width="22" height="22" rx="7" fill="rgba(255,255,255,0.08)"/>
          <rect x="482" y="${349 + i * 48}" width="${210 - i * 62}" height="16" rx="8" fill="${i === 0 ? a1 : dim}" opacity="${i === 0 ? 0.95 : 0.5}"/>
        </g>`).join("")}
        <g>
          <path d="M1090 498 A110 110 0 0 1 1310 498" fill="none" stroke="rgba(255,255,255,0.10)" stroke-width="16" stroke-linecap="round"/>
          <path d="M1090 498 A110 110 0 0 1 1244 404" fill="none" stroke="${a1}" stroke-width="16" stroke-linecap="round"/>
          <line x1="1200" y1="498" x2="1254" y2="418" stroke="${a2}" stroke-width="6" stroke-linecap="round"/>
          <circle cx="1200" cy="498" r="10" fill="${a2}"/>
          <rect x="1140" y="522" width="120" height="34" rx="17" fill="${hsl(h, 55, 28, 0.6)}"/>
          <rect x="1162" y="534" width="76" height="10" rx="5" fill="rgba(255,255,255,0.5)"/>
        </g>
        ${[0, 1, 2].map(i => `
        <g>
          <rect x="470" y="${520 + i * 40}" width="560" height="28" rx="10" fill="rgba(255,255,255,0.045)"/>
          <circle cx="492" cy="${534 + i * 40}" r="7" fill="${i === 1 ? a1 : i === 2 ? "rgba(255,255,255,0.35)" : a2}"/>
          <rect x="512" y="${528 + i * 40}" width="${380 - (i % 2) * 70}" height="12" rx="6" fill="${dim}"/>
          <rect x="960" y="${528 + i * 40}" width="50" height="12" rx="6" fill="${i === 1 ? a1 : "rgba(255,255,255,0.18)"}"/>
        </g>`).join("")}`;
    case "gym":
      return `
        ${[0, 1].map(i => `
        <g>
          <rect x="${170 + i * 310}" y="320" width="290" height="92" rx="14" fill="${i === 0 ? hsl(h, 55, 30, 0.55) : "rgba(255,255,255,0.05)"}"/>
          <rect x="${192 + i * 310}" y="344" width="100" height="10" rx="5" fill="${dim}"/>
          <rect x="${192 + i * 310}" y="368" width="${132 - i * 28}" height="20" rx="10" fill="${i === 0 ? a1 : "rgba(255,255,255,0.14)"}"/>
        </g>`).join("")}
        <rect x="170" y="440" width="460" height="190" rx="16" fill="rgba(255,255,255,0.04)" stroke="${line}"/>
        ${[0, 1, 2].map(i => `
        <g>
          <circle cx="206" cy="${480 + i * 56}" r="14" fill="${i === 0 ? a1 : dim}"/>
          <rect x="234" y="${472 + i * 56}" width="${180 - (i % 2) * 34}" height="14" rx="7" fill="rgba(255,255,255,0.3)"/>
          <rect x="520" y="${470 + i * 56}" width="84" height="20" rx="10" fill="${i === 2 ? "rgba(255,255,255,0.10)" : hsl(h, 70, 45, 0.85)}"/>
        </g>`).join("")}
        <rect x="660" y="320" width="420" height="310" rx="16" fill="rgba(255,255,255,0.03)" stroke="${line}"/>
        ${Array.from({ length: 28 }, (_, k) => {
          const c = k % 7, r = Math.floor(k / 7);
          const hot = (k * 5) % 9 < 4;
          return `<rect x="${692 + c * 54}" y="${352 + r * 66}" width="38" height="38" rx="9" fill="${hot ? a1 : "rgba(255,255,255,0.07)"}" opacity="${hot ? 0.55 + ((k * 7) % 4) * 0.15 : 1}"/>`;
        }).join("")}
        <rect x="1110" y="320" width="220" height="92" rx="14" fill="${hsl(h, 55, 28, 0.5)}"/>
        <rect x="1134" y="344" width="120" height="10" rx="5" fill="rgba(255,255,255,0.35)"/>
        <rect x="1134" y="368" width="90" height="20" rx="10" fill="${a2}"/>
        <g>
          <rect x="1130" y="540" width="180" height="14" rx="7" fill="${dim}"/>
          <rect x="1118" y="512" width="20" height="70" rx="8" fill="${a1}"/>
          <rect x="1140" y="522" width="16" height="50" rx="7" fill="${hsl(h, 60, 38)}"/>
          <rect x="1302" y="512" width="20" height="70" rx="8" fill="${a1}"/>
          <rect x="1284" y="522" width="16" height="50" rx="7" fill="${hsl(h, 60, 38)}"/>
        </g>`;
    case "os":
      return `
        <rect x="170" y="320" width="150" height="310" rx="16" fill="rgba(255,255,255,0.04)" stroke="${line}"/>
        ${[0, 1, 2, 3, 4].map(i => `<rect x="192" y="${352 + i * 46}" width="${106 - (i % 2) * 26}" height="12" rx="6" fill="${i === 0 ? a1 : dim}" opacity="${i === 0 ? 0.95 : 0.55}"/>`).join("")}
        ${[0, 1, 2].map(i => `
        <g>
          <rect x="${350 + i * 250}" y="320" width="230" height="92" rx="14" fill="${i === 0 ? hsl(h, 55, 30, 0.55) : "rgba(255,255,255,0.05)"}"/>
          <rect x="${370 + i * 250}" y="344" width="90" height="10" rx="5" fill="${dim}"/>
          <rect x="${370 + i * 250}" y="368" width="${124 - i * 18}" height="20" rx="10" fill="${i === 0 ? a1 : "rgba(255,255,255,0.14)"}"/>
        </g>`).join("")}
        ${[0, 1, 2].map(col => `
        <g>
          <rect x="${350 + col * 250}" y="438" width="230" height="192" rx="14" fill="rgba(255,255,255,0.03)" stroke="${line}"/>
          ${[0, 1].map(r => `<rect x="${366 + col * 250}" y="${464 + r * 64}" width="198" height="48" rx="10" fill="${(col + r) % 2 ? hsl(h, 45, 30, 0.7) : a1}" opacity="${(col + r) % 2 ? 0.6 : 0.9}"/>`).join("")}
        </g>`).join("")}
        <rect x="1110" y="320" width="220" height="310" rx="16" fill="${hsl(h, 55, 28, 0.45)}"/>
        ${[0, 1, 2, 3].map(i => `<g><circle cx="1140" cy="${362 + i * 72}" r="7" fill="${i % 2 ? a2 : "rgba(255,255,255,0.5)"}"/><rect x="1160" y="${355 + i * 72}" width="${146 - (i % 3) * 22}" height="12" rx="6" fill="rgba(255,255,255,0.35)"/></g>`).join("")}`;
    case "shop":
      return `
        ${[[190, 320], [510, 320], [830, 320]].map((c, i) => `
        <g>
          <rect x="${c[0]}" y="${c[1]}" width="280" height="222" rx="16" fill="rgba(255,255,255,0.04)" stroke="${line}"/>
          <path d="M${c[0] + 140} ${c[1] + 34} c-54 0 -84 46 -84 98 v44 h168 v-44 c0 -52 -30 -98 -84 -98 z" fill="${i === 1 ? a1 : hsl(h, 45, 32, 0.75)}" opacity="${i === 1 ? 0.95 : 0.85}"/>
          <circle cx="${c[0] + 140}" cy="${c[1] + 96}" r="27" fill="${hsl(h, 25, 10)}"/>
          <rect x="${c[0] + 26}" y="${c[1] + 186}" width="110" height="12" rx="6" fill="${dim}"/>
          <rect x="${c[0] + 188}" y="${c[1] + 182}" width="66" height="20" rx="10" fill="${i === 1 ? a2 : "rgba(255,255,255,0.10)"}"/>
        </g>`).join("")}
        <g>
          <rect x="1150" y="320" width="180" height="222" rx="16" fill="${hsl(h, 55, 28, 0.5)}"/>
          <rect x="1174" y="352" width="132" height="12" rx="6" fill="rgba(255,255,255,0.4)"/>
          <rect x="1174" y="384" width="100" height="10" rx="5" fill="rgba(255,255,255,0.22)"/>
          <rect x="1174" y="412" width="112" height="10" rx="5" fill="rgba(255,255,255,0.22)"/>
          <rect x="1174" y="480" width="132" height="36" rx="18" fill="${a1}"/>
        </g>
        <rect x="190" y="580" width="780" height="58" rx="16" fill="rgba(255,255,255,0.05)"/>
        <circle cx="226" cy="609" r="13" fill="${a2}"/>
        <path d="M220 609 l5 5 l9 -11" fill="none" stroke="${hsl(h, 30, 8)}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="256" y="602" width="240" height="14" rx="7" fill="${dim}"/>
        <rect x="1010" y="580" width="320" height="58" rx="29" fill="${a1}" opacity="0.95"/>
        <rect x="1052" y="602" width="180" height="14" rx="7" fill="${hsl(h, 30, 10)}" opacity="0.8"/>
        <circle cx="1290" cy="609" r="10" fill="rgba(255,255,255,0.55)"/>`;
    default:
      return "";
  }
}

for (const t of themes) {
  const { h, n, label, motif: m, slug } = t;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900" role="img" aria-label="${title[slug]} cover">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${hsl(h, 32, 8)}"/>
      <stop offset="0.55" stop-color="${hsl(h, 28, 5)}"/>
      <stop offset="1" stop-color="#040406"/>
    </linearGradient>
    <radialGradient id="orbA" cx="0.18" cy="0.2" r="0.6">
      <stop offset="0" stop-color="${hsl(h, 90, 60, 0.55)}"/>
      <stop offset="1" stop-color="${hsl(h, 90, 60, 0)}"/>
    </radialGradient>
    <radialGradient id="orbB" cx="0.9" cy="0.95" r="0.7">
      <stop offset="0" stop-color="${hsl(h + 12, 85, 58, 0.4)}"/>
      <stop offset="1" stop-color="${hsl(h + 12, 85, 58, 0)}"/>
    </radialGradient>
    <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="rgba(255,255,255,0.07)"/>
      <stop offset="1" stop-color="rgba(255,255,255,0.02)"/>
    </linearGradient>
    <pattern id="grid" width="46" height="46" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(255,255,255,0.05)"/>
    </pattern>
    <linearGradient id="title" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="${hsl(h, 70, 82)}"/>
    </linearGradient>
  </defs>

  <rect width="1600" height="900" fill="url(#bg)"/>
  <rect width="1600" height="900" fill="url(#grid)"/>
  <rect width="1600" height="900" fill="url(#orbA)"/>
  <rect width="1600" height="900" fill="url(#orbB)"/>

  <!-- glass app window -->
  <g>
    <rect x="120" y="170" width="1360" height="600" rx="28" fill="url(#glass)" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
    <rect x="120" y="170" width="1360" height="64" rx="28" fill="rgba(255,255,255,0.03)"/>
    <circle cx="168" cy="202" r="8" fill="${hsl(h, 80, 62)}"/>
    <circle cx="198" cy="202" r="8" fill="rgba(255,255,255,0.22)"/>
    <circle cx="228" cy="202" r="8" fill="rgba(255,255,255,0.22)"/>
    <rect x="640" y="188" width="320" height="28" rx="14" fill="rgba(255,255,255,0.05)"/>
    ${motif(m, h)}
  </g>

  <!-- label + title -->
  <g font-family="Inter, ui-sans-serif, system-ui, sans-serif">
    <text x="120" y="105" font-size="26" letter-spacing="6" fill="${hsl(h, 75, 72)}" font-weight="600">${n} — ${label.toUpperCase()}</text>
    <text x="118" y="845" font-size="96" font-weight="600" letter-spacing="-3" fill="url(#title)">${title[slug]}</text>
  </g>
</svg>`;
  const file = path.join(OUT, `${slug}.svg`);
  fs.writeFileSync(file, svg, "utf8");
  console.log("wrote", file);
}
console.log("Done. Generated", themes.length, "covers.");
