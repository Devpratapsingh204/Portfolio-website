/* ==========================================================================
   VISUAL STORYTELLING COVER BUILDER
   Generates domain-specific SVG/HTML visual compositions for project covers
   ========================================================================== */

export function buildProjectVisual(projectId) {
  switch (projectId) {
    case "agri-pulse":
      return `
        <div class="visual-container agri-visual" style="width: 100%; height: 100%; min-height: 260px; display: flex; flex-direction: column; justify-content: space-between; padding: 1.25rem; background: radial-gradient(circle at top right, rgba(16, 185, 129, 0.15), rgba(15, 23, 42, 0.95)); border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.2); font-family: var(--font-body);">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 10px #10b981;"></span>
              <span style="font-size: 0.75rem; font-weight: 700; color: #10b981; letter-spacing: 0.05em; text-transform: uppercase;">MANDI MARKET INTELLIGENCE</span>
            </div>
            <span style="font-size: 0.7rem; padding: 0.2rem 0.5rem; background: rgba(245, 158, 11, 0.15); color: #f59e0b; border-radius: 4px; border: 1px solid rgba(245, 158, 11, 0.3);">LIVE ANOMALY DETECTED</span>
          </div>

          <!-- Market Price & Arrival Chart SVG Mockup -->
          <div style="position: relative; margin: 1rem 0;">
            <svg viewBox="0 0 400 140" style="width: 100%; height: auto; overflow: visible;">
              <defs>
                <linearGradient id="agriGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#10b981" stop-opacity="0.4"/>
                  <stop offset="100%" stop-color="#10b981" stop-opacity="0.0"/>
                </linearGradient>
              </defs>
              <!-- Grid Lines -->
              <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4"/>
              <line x1="0" y1="70" x2="400" y2="70" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4"/>
              <line x1="0" y1="110" x2="400" y2="110" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4"/>
              
              <!-- Price Trend Area & Line -->
              <path d="M0,110 Q50,90 100,50 T200,75 T300,35 T400,60 L400,130 L0,130 Z" fill="url(#agriGrad)" />
              <path d="M0,110 Q50,90 100,50 T200,75 T300,35 T400,60" fill="none" stroke="#10b981" stroke-width="3" />
              
              <!-- Data Points -->
              <circle cx="100" cy="50" r="5" fill="#f59e0b" stroke="#0f172a" stroke-width="2"/>
              <circle cx="300" cy="35" r="5" fill="#10b981" stroke="#0f172a" stroke-width="2"/>

              <!-- Value Tooltip Overlay -->
              <rect x="250" y="5" width="100" height="24" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
              <text x="300" y="21" font-size="10" fill="#f8fafc" text-anchor="middle" font-weight="bold">Wheat: ₹2,450/qtl</text>
            </svg>
          </div>

          <!-- Commodity Arrival Badges -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; font-size: 0.75rem;">
            <div style="background: rgba(255,255,255,0.03); padding: 0.4rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.05);">
              <div style="color: var(--text-muted); font-size: 0.65rem;">Commodity</div>
              <div style="font-weight: 700; color: #f8fafc;">Wheat (Kanak)</div>
            </div>
            <div style="background: rgba(255,255,255,0.03); padding: 0.4rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.05);">
              <div style="color: var(--text-muted); font-size: 0.65rem;">Arrival Volume</div>
              <div style="font-weight: 700; color: #10b981;">14,250 Qtl ↑</div>
            </div>
            <div style="background: rgba(255,255,255,0.03); padding: 0.4rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.05);">
              <div style="color: var(--text-muted); font-size: 0.65rem;">Variance</div>
              <div style="font-weight: 700; color: #f59e0b;">-3.2% Crash Risk</div>
            </div>
          </div>
        </div>
      `;

    case "ai-interview-simulator":
      return `
        <div class="visual-container ai-visual" style="width: 100%; height: 100%; min-height: 260px; display: flex; flex-direction: column; justify-content: space-between; padding: 1.25rem; background: radial-gradient(circle at top right, rgba(6, 182, 212, 0.15), rgba(15, 23, 42, 0.95)); border-radius: 12px; border: 1px solid rgba(6, 182, 212, 0.2); font-family: var(--font-body);">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="width: 8px; height: 8px; border-radius: 50%; background: #06b6d4; box-shadow: 0 0 10px #06b6d4;"></span>
              <span style="font-size: 0.75rem; font-weight: 700; color: #06b6d4; letter-spacing: 0.05em; text-transform: uppercase;">AI INTERVIEW ENGINE</span>
            </div>
            <span style="font-size: 0.7rem; padding: 0.2rem 0.5rem; background: rgba(99, 102, 241, 0.2); color: #818cf8; border-radius: 4px; border: 1px solid rgba(99, 102, 241, 0.3);">EVALUATING RESPONSES</span>
          </div>

          <!-- Video Candidate Frame & Waveform Mockup -->
          <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 1rem; align-items: center; margin: 0.5rem 0;">
            <!-- Simulated Candidate Box -->
            <div style="background: rgba(2, 6, 23, 0.8); border-radius: 8px; border: 1px solid rgba(6, 182, 212, 0.3); padding: 0.75rem; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 110px; position: relative;">
              <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #06b6d4, #6366f1); display: flex; align-items: center; justify-content: center; font-weight: bold; color: #fff; font-size: 0.8rem;">CAND</div>
              <div style="font-size: 0.7rem; color: #06b6d4; margin-top: 0.5rem; font-weight: 600;">Speech Analysis Active</div>
              <!-- Pulse Ring -->
              <span style="position: absolute; top: 10px; right: 10px; width: 6px; height: 6px; border-radius: 50%; background: #22c55e;"></span>
            </div>

            <!-- Score Metrics Radar / Bars -->
            <div style="display: flex; flex-direction: column; gap: 0.4rem;">
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 2px;">
                  <span style="color: var(--text-muted);">Technical Accuracy</span>
                  <span style="color: #06b6d4; font-weight: bold;">88%</span>
                </div>
                <div style="height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden;">
                  <div style="width: 88%; height: 100%; background: linear-gradient(90deg, #06b6d4, #38bdf8);"></div>
                </div>
              </div>

              <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 2px;">
                  <span style="color: var(--text-muted);">Speech Clarity</span>
                  <span style="color: #818cf8; font-weight: bold;">92%</span>
                </div>
                <div style="height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden;">
                  <div style="width: 92%; height: 100%; background: linear-gradient(90deg, #6366f1, #818cf8);"></div>
                </div>
              </div>

              <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.7rem; margin-bottom: 2px;">
                  <span style="color: var(--text-muted);">Keyword Relevance</span>
                  <span style="color: #34d399; font-weight: bold;">85%</span>
                </div>
                <div style="height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden;">
                  <div style="width: 85%; height: 100%; background: linear-gradient(90deg, #10b981, #34d399);"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Active Question Prompt Box -->
          <div style="background: rgba(255,255,255,0.03); padding: 0.5rem 0.75rem; border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); font-size: 0.75rem; color: var(--text-muted);">
            <strong style="color: #f8fafc;">Prompt:</strong> "Explain how Python handles memory allocation and garbage collection."
          </div>
        </div>
      `;

    case "pathlight-dijkstra":
      return `
        <div class="visual-container dijkstra-visual" style="width: 100%; height: 100%; min-height: 260px; display: flex; flex-direction: column; justify-content: space-between; padding: 1.25rem; background: radial-gradient(circle at top right, rgba(245, 158, 11, 0.15), rgba(15, 23, 42, 0.95)); border-radius: 12px; border: 1px solid rgba(245, 158, 11, 0.2); font-family: var(--font-body);">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="width: 8px; height: 8px; border-radius: 50%; background: #f59e0b; box-shadow: 0 0 10px #f59e0b;"></span>
              <span style="font-size: 0.75rem; font-weight: 700; color: #f59e0b; letter-spacing: 0.05em; text-transform: uppercase;">GRAPH PATHFINDING VISUALIZER</span>
            </div>
            <span style="font-size: 0.7rem; padding: 0.2rem 0.5rem; background: rgba(20, 184, 166, 0.15); color: #14b8a6; border-radius: 4px; border: 1px solid rgba(20, 184, 166, 0.3);">SHORTEST PATH COMPUTED</span>
          </div>

          <!-- Animated Graph Nodes SVG -->
          <div style="position: relative; margin: 0.5rem 0;">
            <svg viewBox="0 0 380 130" style="width: 100%; height: auto; overflow: visible;">
              <!-- Graph Edges -->
              <line x1="50" y1="65" x2="140" y2="30" stroke="#f59e0b" stroke-width="3"/>
              <line x1="50" y1="65" x2="140" y2="100" stroke="rgba(255,255,255,0.15)" stroke-width="2" stroke-dasharray="4"/>
              <line x1="140" y1="30" x2="250" y2="30" stroke="#f59e0b" stroke-width="3"/>
              <line x1="140" y1="100" x2="250" y2="100" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
              <line x1="250" y1="30" x2="330" y2="65" stroke="#14b8a6" stroke-width="4"/>
              <line x1="140" y1="30" x2="250" y2="100" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>

              <!-- Edge Weights -->
              <text x="90" y="40" fill="#f59e0b" font-size="11" font-weight="bold">w=2</text>
              <text x="195" y="22" fill="#f59e0b" font-size="11" font-weight="bold">w=3</text>
              <text x="295" y="40" fill="#14b8a6" font-size="11" font-weight="bold">w=1</text>
              <text x="90" y="95" fill="var(--text-dim)" font-size="10">w=7</text>

              <!-- Node Circles -->
              <!-- Start Node A -->
              <circle cx="50" cy="65" r="16" fill="#0f172a" stroke="#f59e0b" stroke-width="3"/>
              <text x="50" y="69" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">A</text>

              <!-- Node B -->
              <circle cx="140" cy="30" r="16" fill="#0f172a" stroke="#f59e0b" stroke-width="3"/>
              <text x="140" y="34" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">B</text>

              <!-- Node C -->
              <circle cx="140" cy="100" r="14" fill="#0f172a" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
              <text x="140" y="104" fill="var(--text-muted)" font-size="10" text-anchor="middle">C</text>

              <!-- Node D -->
              <circle cx="250" cy="30" r="16" fill="#0f172a" stroke="#14b8a6" stroke-width="3"/>
              <text x="250" y="34" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">D</text>

              <!-- Goal Node E -->
              <circle cx="330" cy="65" r="18" fill="#14b8a6" stroke="#ffffff" stroke-width="2"/>
              <text x="330" y="69" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">GOAL</text>
            </svg>
          </div>

          <!-- Min-Priority Queue Status Footer -->
          <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.03); padding: 0.4rem 0.75rem; border-radius: 6px; font-size: 0.75rem;">
            <span style="color: var(--text-muted);">Min-Priority Queue: <strong style="color: #f59e0b;">[(A,0), (B,2), (D,5), (GOAL,6)]</strong></span>
            <span style="color: #14b8a6; font-weight: bold;">Cost = 6</span>
          </div>
        </div>
      `;

    case "saas-analytics-dashboard":
  return `
    <div style="
      width: 100%;
      height: 100%;
      min-height: 260px;
      padding: 1.25rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background:
        radial-gradient(circle at top right, rgba(6, 182, 212, 0.16), transparent 45%),
        linear-gradient(145deg, #0f172a, #111827);
      border-radius: 12px;
      border: 1px solid rgba(6, 182, 212, 0.20);
      font-family: var(--font-body);
      overflow: hidden;
    ">

      <!-- Header -->
      <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
      ">
        <div style="
          display: flex;
          align-items: center;
          gap: 0.5rem;
        ">
          <span style="
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #06b6d4;
            box-shadow: 0 0 10px #06b6d4;
          "></span>

          <span style="
            font-size: 0.75rem;
            font-weight: 700;
            color: #06b6d4;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          ">
            SAAS BUSINESS INTELLIGENCE
          </span>
        </div>

        <span style="
          font-size: 0.68rem;
          padding: 0.25rem 0.55rem;
          background: rgba(245, 158, 11, 0.12);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.25);
          border-radius: 5px;
          font-weight: 700;
        ">
          POWER BI
        </span>
      </div>

      <!-- Chart -->
      <div style="
        position: relative;
        margin: 1rem 0;
        height: 150px;
      ">
        <svg
          viewBox="0 0 400 150"
          preserveAspectRatio="none"
          style="width:100%; height:100%;"
        >

          <!-- Grid -->
          <line x1="0" y1="30" x2="400" y2="30"
            stroke="rgba(148,163,184,0.10)" stroke-dasharray="5 5"/>
          <line x1="0" y1="75" x2="400" y2="75"
            stroke="rgba(148,163,184,0.10)" stroke-dasharray="5 5"/>
          <line x1="0" y1="120" x2="400" y2="120"
            stroke="rgba(148,163,184,0.10)" stroke-dasharray="5 5"/>

          <!-- Revenue area -->
          <path
            d="
              M0 118
              C45 112, 65 96, 105 101
              C145 106, 160 72, 205 78
              C245 84, 265 52, 305 58
              C345 64, 360 32, 400 22
              L400 150
              L0 150 Z
            "
            fill="rgba(6,182,212,0.12)"
          />

          <!-- Revenue line -->
          <path
            d="
              M0 118
              C45 112, 65 96, 105 101
              C145 106, 160 72, 205 78
              C245 84, 265 52, 305 58
              C345 64, 360 32, 400 22
            "
            fill="none"
            stroke="#06b6d4"
            stroke-width="4"
            stroke-linecap="round"
          />

          <!-- Data points -->
          <circle cx="105" cy="101" r="5"
            fill="#f59e0b"/>
          <circle cx="205" cy="78" r="5"
            fill="#06b6d4"/>
          <circle cx="305" cy="58" r="5"
            fill="#f59e0b"/>
          <circle cx="400" cy="22" r="5"
            fill="#06b6d4"/>

        </svg>

        <!-- Revenue label -->
        <div style="
          position:absolute;
          top: 8px;
          right: 4px;
          padding: 0.45rem 0.65rem;
          background: rgba(15,23,42,0.92);
          border: 1px solid rgba(6,182,212,0.55);
          border-radius: 7px;
          color: white;
          font-size: 0.8rem;
          font-weight: 800;
        ">
          $2.30M Revenue
        </div>
      </div>

      <!-- KPI Cards -->
      <div style="
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.6rem;
      ">

        <div style="
          padding: 0.75rem;
          background: rgba(30,41,59,0.65);
          border: 1px solid rgba(148,163,184,0.12);
          border-radius: 8px;
        ">
          <div style="
            font-size: 0.68rem;
            color: #94a3b8;
          ">
            Profit
          </div>
          <div style="
            margin-top: 0.25rem;
            font-size: 1rem;
            font-weight: 800;
            color: #06b6d4;
          ">
            $286.40K
          </div>
        </div>

        <div style="
          padding: 0.75rem;
          background: rgba(30,41,59,0.65);
          border: 1px solid rgba(148,163,184,0.12);
          border-radius: 8px;
        ">
          <div style="
            font-size: 0.68rem;
            color: #94a3b8;
          ">
            Orders
          </div>
          <div style="
            margin-top: 0.25rem;
            font-size: 1rem;
            font-weight: 800;
            color: #f59e0b;
          ">
            5K
          </div>
        </div>

        <div style="
          padding: 0.75rem;
          background: rgba(30,41,59,0.65);
          border: 1px solid rgba(148,163,184,0.12);
          border-radius: 8px;
        ">
          <div style="
            font-size: 0.68rem;
            color: #94a3b8;
          ">
            Margin
          </div>
          <div style="
            margin-top: 0.25rem;
            font-size: 1rem;
            font-weight: 800;
            color: #10b981;
          ">
            12% ↑
          </div>
        </div>

      </div>

    </div>
  `;


    case "hotel-intelligence":
  return `
    <div
      class="visual-container hotel-visual"
      style="
        width:100%;
        height:100%;
        min-height:260px;
        padding:1.15rem;
        box-sizing:border-box;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        background:
          radial-gradient(circle at 85% 10%, rgba(59,130,246,0.20), transparent 38%),
          radial-gradient(circle at 15% 90%, rgba(139,92,246,0.12), transparent 38%),
          linear-gradient(145deg,#0f172a 0%,#111827 55%,#0b1120 100%);
        border-radius:12px;
        border:1px solid rgba(59,130,246,0.22);
        font-family:var(--font-body);
        overflow:hidden;
      "
    >

      <!-- Header -->
      <div style="
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:1rem;
      ">

        <div style="
          display:flex;
          align-items:center;
          gap:0.5rem;
        ">
          <span style="
            width:8px;
            height:8px;
            border-radius:50%;
            background:#3b82f6;
            box-shadow:0 0 12px rgba(59,130,246,0.85);
          "></span>

          <span style="
            font-size:0.74rem;
            font-weight:800;
            color:#3b82f6;
            letter-spacing:0.06em;
            text-transform:uppercase;
          ">
            HOTEL MARKET INTELLIGENCE
          </span>
        </div>

        <span style="
          padding:0.25rem 0.55rem;
          border-radius:5px;
          background:rgba(139,92,246,0.12);
          border:1px solid rgba(139,92,246,0.28);
          color:#a78bfa;
          font-size:0.67rem;
          font-weight:800;
        ">
          BI DASHBOARD
        </span>

      </div>

      <!-- Main Analytics Area -->
      <div style="
        position:relative;
        margin:0.85rem 0;
        height:135px;
        border-radius:10px;
        background:rgba(15,23,42,0.55);
        border:1px solid rgba(148,163,184,0.10);
        overflow:hidden;
      ">

        <!-- Grid lines -->
        <div style="
          position:absolute;
          inset:0;
          background:
            repeating-linear-gradient(
              to bottom,
              rgba(148,163,184,0.07) 0,
              rgba(148,163,184,0.07) 1px,
              transparent 1px,
              transparent 34px
            );
        "></div>

        <svg
          viewBox="0 0 400 135"
          preserveAspectRatio="none"
          style="width:100%;height:100%;position:relative;z-index:1;"
        >

          <!-- Occupancy trend -->
          <path
            d="
              M0 105
              C35 100, 55 82, 85 88
              C120 94, 138 60, 170 67
              C205 74, 220 45, 252 54
              C285 62, 300 38, 335 45
              C365 51, 382 27, 400 20
            "
            fill="none"
            stroke="#3b82f6"
            stroke-width="4"
            stroke-linecap="round"
          />

          <!-- RevPAR trend -->
          <path
            d="
              M0 116
              C38 110, 55 99, 88 103
              C125 108, 145 82, 174 88
              C208 95, 232 67, 260 74
              C294 81, 310 66, 340 62
              C370 57, 386 50, 400 43
            "
            fill="none"
            stroke="#8b5cf6"
            stroke-width="3"
            stroke-linecap="round"
            stroke-dasharray="6 5"
          />

          <circle cx="252" cy="54" r="5" fill="#3b82f6"/>
          <circle cx="335" cy="45" r="5" fill="#8b5cf6"/>
          <circle cx="400" cy="20" r="5" fill="#3b82f6"/>

        </svg>

        <!-- Floating KPI label -->
        <div style="
          position:absolute;
          top:0.65rem;
          right:0.7rem;
          padding:0.45rem 0.6rem;
          background:rgba(15,23,42,0.94);
          border:1px solid rgba(59,130,246,0.45);
          border-radius:7px;
          z-index:2;
        ">
          <div style="
            font-size:0.61rem;
            color:#94a3b8;
          ">
            OCCUPANCY
          </div>

          <div style="
            font-size:0.9rem;
            font-weight:900;
            color:#3b82f6;
          ">
            84.6% ↑
          </div>
        </div>

        <!-- Legend -->
        <div style="
          position:absolute;
          left:0.7rem;
          bottom:0.55rem;
          display:flex;
          gap:0.8rem;
          z-index:2;
          font-size:0.61rem;
          color:#94a3b8;
        ">
          <span>
            <b style="color:#3b82f6;">●</b> Occupancy
          </span>
          <span>
            <b style="color:#8b5cf6;">●</b> RevPAR
          </span>
        </div>

      </div>

      <!-- KPI Cards -->
      <div style="
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:0.55rem;
      ">

        <div style="
          padding:0.72rem;
          border-radius:8px;
          background:rgba(30,41,59,0.68);
          border:1px solid rgba(59,130,246,0.12);
        ">
          <div style="
            font-size:0.64rem;
            color:#94a3b8;
          ">
            Occupancy
          </div>

          <div style="
            margin-top:0.25rem;
            font-size:1rem;
            font-weight:900;
            color:#3b82f6;
          ">
            84.6%
          </div>
        </div>

        <div style="
          padding:0.72rem;
          border-radius:8px;
          background:rgba(30,41,59,0.68);
          border:1px solid rgba(139,92,246,0.12);
        ">
          <div style="
            font-size:0.64rem;
            color:#94a3b8;
          ">
            RevPAR
          </div>

          <div style="
            margin-top:0.25rem;
            font-size:1rem;
            font-weight:900;
            color:#a78bfa;
          ">
            $142.50
          </div>
        </div>

        <div style="
          padding:0.72rem;
          border-radius:8px;
          background:rgba(30,41,59,0.68);
          border:1px solid rgba(16,185,129,0.12);
        ">
          <div style="
            font-size:0.64rem;
            color:#94a3b8;
          ">
            Performance
          </div>

          <div style="
            margin-top:0.25rem;
            font-size:1rem;
            font-weight:900;
            color:#10b981;
          ">
            +12.8%
          </div>
        </div>

      </div>

    </div>
  `;


    case "cpu-scheduler":
  return `
    <div
      class="visual-container cpu-visual"
      style="
        width:100%;
        height:100%;
        min-height:260px;
        padding:1.15rem;
        box-sizing:border-box;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        background:
          radial-gradient(circle at 85% 10%, rgba(139,92,246,0.20), transparent 38%),
          radial-gradient(circle at 15% 90%, rgba(236,72,153,0.10), transparent 38%),
          linear-gradient(145deg,#0f172a,#111827 55%,#0b1120);
        border-radius:12px;
        border:1px solid rgba(139,92,246,0.22);
        font-family:var(--font-body);
        overflow:hidden;
      "
    >

      <!-- Header -->
      <div style="
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:1rem;
      ">

        <div style="
          display:flex;
          align-items:center;
          gap:0.5rem;
        ">
          <span style="
            width:8px;
            height:8px;
            border-radius:50%;
            background:#8b5cf6;
            box-shadow:0 0 12px rgba(139,92,246,0.85);
          "></span>

          <span style="
            font-size:0.74rem;
            font-weight:800;
            color:#a78bfa;
            letter-spacing:0.06em;
            text-transform:uppercase;
          ">
            CPU SCHEDULING SIMULATOR
          </span>
        </div>

        <span style="
          padding:0.25rem 0.55rem;
          border-radius:5px;
          background:rgba(236,72,153,0.10);
          border:1px solid rgba(236,72,153,0.25);
          color:#f472b6;
          font-size:0.67rem;
          font-weight:800;
        ">
          ROUND ROBIN
        </span>

      </div>

      <!-- Process Queue -->
      <div style="
        margin:0.75rem 0 0.6rem;
        display:flex;
        align-items:center;
        gap:0.5rem;
      ">

        <span style="
          font-size:0.62rem;
          color:#64748b;
          font-weight:700;
          text-transform:uppercase;
          width:58px;
        ">
          READY QUEUE
        </span>

        <div style="
          display:flex;
          gap:0.35rem;
          flex:1;
        ">

          <div style="
            padding:0.35rem 0.55rem;
            border-radius:5px;
            background:rgba(139,92,246,0.16);
            border:1px solid rgba(139,92,246,0.3);
            color:#c4b5fd;
            font-size:0.67rem;
            font-weight:800;
          ">
            P1
          </div>

          <div style="
            padding:0.35rem 0.55rem;
            border-radius:5px;
            background:rgba(236,72,153,0.14);
            border:1px solid rgba(236,72,153,0.25);
            color:#f9a8d4;
            font-size:0.67rem;
            font-weight:800;
          ">
            P2
          </div>

          <div style="
            padding:0.35rem 0.55rem;
            border-radius:5px;
            background:rgba(59,130,246,0.13);
            border:1px solid rgba(59,130,246,0.24);
            color:#93c5fd;
            font-size:0.67rem;
            font-weight:800;
          ">
            P3
          </div>

          <div style="
            padding:0.35rem 0.55rem;
            border-radius:5px;
            background:rgba(16,185,129,0.13);
            border:1px solid rgba(16,185,129,0.24);
            color:#6ee7b7;
            font-size:0.67rem;
            font-weight:800;
          ">
            P4
          </div>

        </div>

      </div>

      <!-- Gantt Chart -->
      <div style="
        padding:0.8rem;
        border-radius:9px;
        background:rgba(15,23,42,0.58);
        border:1px solid rgba(148,163,184,0.10);
      ">

        <div style="
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-bottom:0.55rem;
        ">
          <span style="
            color:#94a3b8;
            font-size:0.64rem;
            font-weight:700;
            text-transform:uppercase;
          ">
            GANTT TIMELINE
          </span>

          <span style="
            color:#64748b;
            font-size:0.61rem;
          ">
            Time → 
          </span>
        </div>

        <div style="
          display:flex;
          gap:3px;
          height:32px;
        ">

          <div style="
            flex:4;
            background:linear-gradient(135deg,#8b5cf6,#7c3aed);
            border-radius:5px 0 0 5px;
            display:flex;
            align-items:center;
            justify-content:center;
            color:#fff;
            font-size:0.68rem;
            font-weight:900;
          ">
            P1
          </div>

          <div style="
            flex:2;
            background:linear-gradient(135deg,#ec4899,#db2777);
            border-radius:3px;
            display:flex;
            align-items:center;
            justify-content:center;
            color:#fff;
            font-size:0.68rem;
            font-weight:900;
          ">
            P2
          </div>

          <div style="
            flex:3;
            background:linear-gradient(135deg,#3b82f6,#2563eb);
            border-radius:3px;
            display:flex;
            align-items:center;
            justify-content:center;
            color:#fff;
            font-size:0.68rem;
            font-weight:900;
          ">
            P3
          </div>

          <div style="
            flex:2;
            background:linear-gradient(135deg,#10b981,#059669);
            border-radius:3px;
            display:flex;
            align-items:center;
            justify-content:center;
            color:#fff;
            font-size:0.68rem;
            font-weight:900;
          ">
            P1
          </div>

          <div style="
            flex:3;
            background:linear-gradient(135deg,#f59e0b,#d97706);
            border-radius:3px;
            display:flex;
            align-items:center;
            justify-content:center;
            color:#fff;
            font-size:0.68rem;
            font-weight:900;
          ">
            P4
          </div>

        </div>

        <!-- Timeline labels -->
        <div style="
          display:flex;
          justify-content:space-between;
          margin-top:0.3rem;
          color:#64748b;
          font-size:0.55rem;
        ">
          <span>0</span>
          <span>4</span>
          <span>6</span>
          <span>9</span>
          <span>11</span>
          <span>14</span>
        </div>

      </div>

      <!-- Metrics -->
      <div style="
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:0.55rem;
        margin-top:0.65rem;
      ">

        <div style="
          padding:0.65rem;
          border-radius:8px;
          background:rgba(30,41,59,0.66);
          border:1px solid rgba(139,92,246,0.13);
        ">
          <div style="
            color:#94a3b8;
            font-size:0.61rem;
          ">
            Avg Waiting
          </div>

          <div style="
            margin-top:0.2rem;
            color:#a78bfa;
            font-size:0.95rem;
            font-weight:900;
          ">
            6.25 ms
          </div>
        </div>

        <div style="
          padding:0.65rem;
          border-radius:8px;
          background:rgba(30,41,59,0.66);
          border:1px solid rgba(236,72,153,0.13);
        ">
          <div style="
            color:#94a3b8;
            font-size:0.61rem;
          ">
            Avg Turnaround
          </div>

          <div style="
            margin-top:0.2rem;
            color:#f472b6;
            font-size:0.95rem;
            font-weight:900;
          ">
            10.75 ms
          </div>
        </div>

        <div style="
          padding:0.65rem;
          border-radius:8px;
          background:rgba(30,41,59,0.66);
          border:1px solid rgba(16,185,129,0.13);
        ">
          <div style="
            color:#94a3b8;
            font-size:0.61rem;
          ">
            Processes
          </div>

          <div style="
            margin-top:0.2rem;
            color:#34d399;
            font-size:0.95rem;
            font-weight:900;
          ">
            4 Active
          </div>
        </div>

      </div>

    </div>
  `;


    case "ott-platform":
  return `
    <div
      class="visual-container ott-visual"
      style="
        width: 100%;
        height: 100%;
        min-height: 260px;
        padding: 1.15rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background:
          radial-gradient(circle at 85% 10%, rgba(239,68,68,0.20), transparent 38%),
          radial-gradient(circle at 10% 90%, rgba(245,158,11,0.10), transparent 35%),
          linear-gradient(145deg, #0f172a 0%, #111827 55%, #0b1120 100%);
        border-radius: 12px;
        border: 1px solid rgba(239,68,68,0.22);
        font-family: var(--font-body);
        overflow: hidden;
      "
    >

      <!-- TOP BAR -->
      <div style="
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:1rem;
      ">

        <div style="
          display:flex;
          align-items:center;
          gap:0.55rem;
        ">
          <span style="
            width:8px;
            height:8px;
            border-radius:50%;
            background:#ef4444;
            box-shadow:0 0 12px rgba(239,68,68,0.85);
          "></span>

          <span style="
            font-size:0.74rem;
            font-weight:800;
            letter-spacing:0.06em;
            color:#ef4444;
            text-transform:uppercase;
          ">
            OTT STREAMING PORTAL
          </span>
        </div>

        <span style="
          padding:0.25rem 0.55rem;
          border-radius:5px;
          background:rgba(245,158,11,0.12);
          border:1px solid rgba(245,158,11,0.28);
          color:#f59e0b;
          font-size:0.67rem;
          font-weight:800;
          letter-spacing:0.04em;
        ">
          CINEMATIC UI
        </span>

      </div>

      <!-- FEATURED CONTENT -->
      <div style="
        position:relative;
        margin:0.9rem 0;
        height:145px;
        border-radius:10px;
        overflow:hidden;
        border:1px solid rgba(148,163,184,0.12);
        background:
          linear-gradient(90deg, rgba(2,6,23,0.92) 0%, rgba(15,23,42,0.42) 60%, rgba(239,68,68,0.12) 100%),
          linear-gradient(135deg, #1e293b, #111827);
      ">

        <!-- Decorative cinematic glow -->
        <div style="
          position:absolute;
          width:170px;
          height:170px;
          right:-30px;
          top:-65px;
          border-radius:50%;
          background:rgba(239,68,68,0.18);
          filter:blur(3px);
        "></div>

        <div style="
          position:absolute;
          left:1rem;
          top:1rem;
          max-width:65%;
        ">
          <div style="
            font-size:0.62rem;
            color:#f59e0b;
            font-weight:800;
            letter-spacing:0.08em;
            text-transform:uppercase;
            margin-bottom:0.35rem;
          ">
            FEATURED NOW
          </div>

          <div style="
            color:#fff;
            font-size:1.15rem;
            font-weight:900;
            line-height:1.1;
          ">
            Discover your next watch
          </div>

          <div style="
            margin-top:0.45rem;
            color:#94a3b8;
            font-size:0.72rem;
            line-height:1.45;
          ">
            Browse movies, explore genres and preview trailers.
          </div>
        </div>

        <!-- Play button -->
        <div style="
          position:absolute;
          right:1.15rem;
          bottom:1rem;
          width:42px;
          height:42px;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          background:#ef4444;
          color:white;
          font-size:1rem;
          padding-left:2px;
          box-shadow:0 8px 25px rgba(239,68,68,0.35);
        ">
          ▶
        </div>

        <!-- Progress line -->
        <div style="
          position:absolute;
          left:1rem;
          right:1rem;
          bottom:0.55rem;
          height:3px;
          border-radius:999px;
          background:rgba(255,255,255,0.12);
        ">
          <div style="
            width:64%;
            height:100%;
            border-radius:999px;
            background:#ef4444;
          "></div>
        </div>

      </div>

      <!-- GENRE / CONTENT TAGS -->
      <div style="
        display:flex;
        gap:0.45rem;
        flex-wrap:wrap;
        margin-bottom:0.75rem;
      ">

        <span style="
          padding:0.32rem 0.55rem;
          border-radius:5px;
          background:rgba(239,68,68,0.10);
          border:1px solid rgba(239,68,68,0.18);
          color:#fca5a5;
          font-size:0.66rem;
          font-weight:700;
        ">
          Action
        </span>

        <span style="
          padding:0.32rem 0.55rem;
          border-radius:5px;
          background:rgba(245,158,11,0.09);
          border:1px solid rgba(245,158,11,0.18);
          color:#fcd34d;
          font-size:0.66rem;
          font-weight:700;
        ">
          Drama
        </span>

        <span style="
          padding:0.32rem 0.55rem;
          border-radius:5px;
          background:rgba(148,163,184,0.08);
          border:1px solid rgba(148,163,184,0.14);
          color:#cbd5e1;
          font-size:0.66rem;
          font-weight:700;
        ">
          Trending
        </span>

        <span style="
          padding:0.32rem 0.55rem;
          border-radius:5px;
          background:rgba(148,163,184,0.08);
          border:1px solid rgba(148,163,184,0.14);
          color:#cbd5e1;
          font-size:0.66rem;
          font-weight:700;
        ">
          New Releases
        </span>

      </div>

      <!-- MOVIE CARDS -->
      <div style="
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:0.55rem;
      ">

        <div style="
          height:65px;
          border-radius:7px;
          border:1px solid rgba(148,163,184,0.12);
          background:linear-gradient(145deg,#1e293b,#0f172a);
          position:relative;
          overflow:hidden;
        ">
          <div style="
            position:absolute;
            inset:0;
            background:linear-gradient(135deg,rgba(239,68,68,0.24),transparent 60%);
          "></div>
          <div style="
            position:absolute;
            left:0.45rem;
            bottom:0.35rem;
            color:#fff;
            font-size:0.6rem;
            font-weight:800;
          ">
            MOVIE 01
          </div>
        </div>

        <div style="
          height:65px;
          border-radius:7px;
          border:1px solid rgba(148,163,184,0.12);
          background:linear-gradient(145deg,#334155,#111827);
          position:relative;
          overflow:hidden;
        ">
          <div style="
            position:absolute;
            inset:0;
            background:linear-gradient(135deg,rgba(245,158,11,0.20),transparent 60%);
          "></div>
          <div style="
            position:absolute;
            left:0.45rem;
            bottom:0.35rem;
            color:#fff;
            font-size:0.6rem;
            font-weight:800;
          ">
            MOVIE 02
          </div>
        </div>

        <div style="
          height:65px;
          border-radius:7px;
          border:1px solid rgba(148,163,184,0.12);
          background:linear-gradient(145deg,#1f2937,#0f172a);
          position:relative;
          overflow:hidden;
        ">
          <div style="
            position:absolute;
            inset:0;
            background:linear-gradient(135deg,rgba(239,68,68,0.14),rgba(245,158,11,0.08));
          "></div>
          <div style="
            position:absolute;
            left:0.45rem;
            bottom:0.35rem;
            color:#fff;
            font-size:0.6rem;
            font-weight:800;
          ">
            MOVIE 03
          </div>
        </div>

      </div>

    </div>
  `;

    default:
      return `<div style="padding: 2rem; color: var(--text-muted);">Visual Storytelling Cover</div>`;
  }
}
