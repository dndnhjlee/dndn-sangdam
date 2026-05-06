<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>상담일지 자동생성 — 법무법인 든든</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --navy: #0f1e3c; --navy-light: #253f78;
    --accent: #3d7eff; --gold: #c9a84c;
    --surface: #f7f8fc; --border: #e2e6f0;
    --text: #1a1f36; --text-muted: #6b7494;
    --success: #1a9e6e; --success-soft: #e6f7f1;
    --danger: #d63b3b; --white: #ffffff;
    --mono: 'JetBrains Mono', monospace;
    --sans: 'Noto Sans KR', sans-serif;
    --radius: 10px; --radius-lg: 16px;
  }
  body { font-family: var(--sans); background: var(--surface); color: var(--text); min-height: 100vh; font-size: 14px; line-height: 1.6; }
  header { background: var(--navy); padding: 0 2rem; height: 60px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; }
  .logo { display: flex; align-items: center; gap: 10px; color: white; font-weight: 700; font-size: 15px; }
  .logo-badge { width: 28px; height: 28px; background: var(--gold); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: var(--navy); }
  .header-label { color: rgba(255,255,255,0.4); font-size: 12px; }
  .main { max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem 4rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: start; }
  @media(max-width:860px){ .main { grid-template-columns: 1fr; } }
  .panel { background: var(--white); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
  .panel-header { padding: 1rem 1.25rem; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; }
  .panel-title { font-size: 13px; font-weight: 700; display: flex; align-items: center; gap: 7px; }
  .panel-title-icon { width: 22px; height: 22px; border-radius: 5px; display: flex; align-items: center; justify-content: center; }
  .panel-body { padding: 1.25rem; }
  .hint { font-size: 12px; color: var(--text-muted); margin-bottom: 0.875rem; display: flex; gap: 6px; line-height: 1.5; }
  textarea { width: 100%; min-height: 360px; border: 1px solid var(--border); border-radius: var(--radius); padding: 1rem; font-family: var(--sans); font-size: 13px; line-height: 1.7; color: var(--text); resize: vertical; outline: none; background: var(--surface); transition: border-color .15s; }
  textarea:focus { border-color: var(--accent); background: var(--white); }
  textarea::placeholder { color: var(--text-muted); }
  .char-count { text-align: right; font-size: 11px; color: var(--text-muted); margin-top: 6px; font-family: var(--mono); }
  .btn-generate { width: 100%; margin-top: 1rem; padding: .875rem; background: var(--navy); color: white; border: none; border-radius: var(--radius); font-family: var(--sans); font-size: 14px; font-weight: 700; cursor: pointer; transition: background .15s; display: flex; align-items: center; justify-content: center; gap: 8px; }
  .btn-generate:hover { background: var(--navy-light); }
  .btn-generate:active { transform: scale(0.99); }
  .btn-generate:disabled { background: var(--border); color: var(--text-muted); cursor: not-allowed; transform: none; }
  .spinner { width: 16px; height: 16px; border: 2px solid rgba(255,255,255,.3); border-top-color: white; border-radius: 50%; animation: spin .7s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .output-placeholder { min-height: 400px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; padding: 2rem; text-align: center; }
  .placeholder-icon { width: 48px; height: 48px; background: var(--surface); border-radius: 12px; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; }
  .placeholder-text { font-size: 13px; color: var(--text-muted); line-height: 1.6; }
  .placeholder-text strong { color: var(--text); display: block; margin-bottom: 4px; font-weight: 500; }
  .loading-state { display: none; padding: 3rem 1.25rem; text-align: center; }
  .loading-dots { display: flex; justify-content: center; gap: 6px; margin-bottom: 1rem; }
  .loading-dots span { width: 8px; height: 8px; background: var(--accent); border-radius: 50%; animation: bounce 1.2s infinite; }
  .loading-dots span:nth-child(2) { animation-delay: .2s; }
  .loading-dots span:nth-child(3) { animation-delay: .4s; }
  @keyframes bounce { 0%,80%,100%{transform:translateY(0);opacity:.4} 40%{transform:translateY(-8px);opacity:1} }
  .loading-text { font-size: 13px; color: var(--text-muted); }
  .loading-step { font-size: 12px; color: var(--accent); margin-top: 6px; font-weight: 500; }
  .error-box { display: none; margin: 1rem 1.25rem; padding: .875rem 1rem; background: #fff5f5; border: 1px solid #fecaca; border-radius: var(--radius); font-size: 13px; color: var(--danger); }
  .output-result { display: none; }
  .result-meta { display: flex; align-items: center; justify-content: space-between; padding: .75rem 1.25rem; background: var(--success-soft); border-bottom: 1px solid #c2e8d9; }
  .result-meta-label { font-size: 12px; color: var(--success); font-weight: 700; display: flex; align-items: center; gap: 6px; }
  .result-actions { display: flex; gap: 6px; }
  .btn-sm { padding: 5px 12px; font-size: 12px; font-weight: 500; border-radius: 6px; border: 1px solid var(--border); background: var(--white); color: var(--text); cursor: pointer; font-family: var(--sans); transition: all .1s; display: flex; align-items: center; gap: 5px; }
  .btn-sm:hover { background: var(--surface); }
  .btn-sm.copied { background: var(--success-soft); color: var(--success); border-color: #c2e8d9; }
  .result-content { font-family: var(--mono); font-size: 12.5px; line-height: 1.85; padding: 1.25rem; white-space: pre-wrap; color: var(--text); background: var(--white); max-height: 680px; overflow-y: auto; }
  .result-content::-webkit-scrollbar { width: 4px; }
  .result-content::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
  .info-strip { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: var(--border); border-top: 1px solid var(--border); }
  .info-item { background: var(--white); padding: .75rem 1rem; text-align: center; }
  .info-label { font-size: 10px; color: var(--text-muted); text-transform: uppercase; letter-spacing: .5px; margin-bottom: 2px; }
  .info-value { font-size: 13px; font-weight: 700; font-family: var(--mono); }
  .badge { font-size: 11px; padding: 2px 8px; border-radius: 20px; font-weight: 500; }
  .badge-navy { background: var(--navy); color: white; }
  .badge-muted { background: var(--surface); color: var(--text-muted); border: 1px solid var(--border); }
  .badge-success { background: var(--success-soft); color: var(--success); }
  .tip-list { display: flex; flex-direction: column; gap: 6px; margin-top: .75rem; }
  .tip-item { display: flex; align-items: flex-start; gap: 7px; font-size: 12px; color: var(--text-muted); padding: 7px 10px; background: var(--surface); border-radius: 7px; border: 1px solid var(--border); line-height: 1.5; }
  .tip-dot { width: 5px; height: 5px; background: var(--gold); border-radius: 50%; margin-top: 6px; flex-shrink: 0; }
  .section-divider { margin: 1.25rem 0 .75rem; font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: .8px; display: flex; align-items: center; gap: 6px; padding-bottom: .5rem; border-bottom: 1px dashed var(--border); }
</style>
</head>
<body>
<header>
  <div class="logo">
    <div class="logo-badge">든</div>
    법무법인 든든
  </div>
  <span class="header-label">상담일지 자동생성 시스템 v1.0</span>
</header>

<div class="main">
  <div>
    <div class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <div class="panel-title-icon" style="background:var(--navy)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          녹취 텍스트 입력
        </div>
        <span class="badge badge-navy">STT 변환본</span>
      </div>
      <div class="panel-body">
        <div class="hint">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;margin-top:1px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          Clova Note 등에서 변환한 녹취 텍스트를 아래에 붙여넣으세요.
        </div>
        <textarea id="transcriptInput" placeholder="참석자 1 00:00&#10;네 여보세요.&#10;&#10;참석자 2 00:02&#10;안녕하세요. 법무법인 든든인데요..." oninput="updateCount()"></textarea>
        <div class="char-count"><span id="charCount">0</span>자</div>
        <button class="btn-generate" id="generateBtn" onclick="generateLog()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          상담일지 자동 생성
        </button>
        <div class="section-divider" style="margin-top:1.5rem">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          사용 팁
        </div>
        <div class="tip-list">
          <div class="tip-item"><div class="tip-dot"></div><span>동일 고객의 연속 통화를 한 번에 붙여넣으면 더 정확합니다</span></div>
          <div class="tip-item"><div class="tip-dot"></div><span>생성 후 수임료·법비용·메모는 반드시 직접 검토·수정하세요</span></div>
          <div class="tip-item"><div class="tip-dot"></div><span>녹취 원본은 사내 보안 지침에 따라 별도 보관하세요</span></div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <div class="panel-title-icon" style="background:var(--gold)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="2.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          </div>
          생성된 상담일지
        </div>
        <span class="badge badge-muted" id="statusBadge">대기 중</span>
      </div>

      <div class="output-placeholder" id="placeholder">
        <div class="placeholder-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        </div>
        <div class="placeholder-text">
          <strong>아직 생성된 일지가 없습니다</strong>
          녹취 텍스트를 붙여넣고 버튼을 누르세요
        </div>
      </div>

      <div class="loading-state" id="loadingState">
        <div class="loading-dots"><span></span><span></span><span></span></div>
        <div class="loading-text">녹취를 분석하고 있습니다</div>
        <div class="loading-step" id="loadingStep">고객 정보 추출 중...</div>
      </div>

      <div class="error-box" id="errorBox"></div>

      <div class="output-result" id="outputResult">
        <div class="result-meta">
          <div class="result-meta-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            생성 완료
          </div>
          <div class="result-actions">
            <button class="btn-sm" id="copyBtn" onclick="copyResult()">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>복사
            </button>
            <button class="btn-sm" onclick="resetAll()">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.01"/></svg>초기화
            </button>
          </div>
        </div>
        <pre class="result-content" id="resultContent"></pre>
        <div class="info-strip">
          <div class="info-item"><div class="info-label">생성 시각</div><div class="info-value" id="genTime">—</div></div>
          <div class="info-item"><div class="info-label">입력 길이</div><div class="info-value" id="genChars">—</div></div>
          <div class="info-item"><div class="info-label">소요 시간</div><div class="info-value" id="genDuration">—</div></div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
let startTime;

function updateCount() {
  document.getElementById('charCount').textContent =
    document.getElementById('transcriptInput').value.length.toLocaleString();
}

async function generateLog() {
  const input = document.getElementById('transcriptInput').value.trim();
  if (!input || input.length < 100) { alert('녹취 텍스트를 더 입력해주세요.'); return; }

  startTime = Date.now();
  setUI('loading');

  const steps = ['고객 기본 정보 추출 중...','채무 현황 분석 중...','소득·재산 정보 파악 중...','상담일지 작성 중...'];
  let si = 0;
  const stepInterval = setInterval(() => {
    document.getElementById('loadingStep').textContent = steps[++si % steps.length];
  }, 2000);

  try {
    // ← 여기가 핵심: 브라우저가 /api/generate (자체 서버)로 요청
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ transcript: input })
    });

    clearInterval(stepInterval);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || '서버 오류');

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    const now = new Date();

    document.getElementById('resultContent').textContent = data.result;
    document.getElementById('genTime').textContent =
      `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
    document.getElementById('genChars').textContent = input.length.toLocaleString() + '자';
    document.getElementById('genDuration').textContent = elapsed + 's';
    document.getElementById('statusBadge').textContent = '생성 완료';
    document.getElementById('statusBadge').className = 'badge badge-success';
    setUI('result');

  } catch (err) {
    clearInterval(stepInterval);
    document.getElementById('errorBox').textContent = '⚠ 오류: ' + err.message;
    setUI('error');
  }
}

function setUI(state) {
  document.getElementById('placeholder').style.display = state === 'idle' ? 'flex' : 'none';
  document.getElementById('loadingState').style.display = state === 'loading' ? 'block' : 'none';
  document.getElementById('errorBox').style.display = state === 'error' ? 'block' : 'none';
  document.getElementById('outputResult').style.display = state === 'result' ? 'block' : 'none';
  const btn = document.getElementById('generateBtn');
  btn.disabled = state === 'loading';
  btn.innerHTML = state === 'loading'
    ? '<div class="spinner"></div> 분석 중...'
    : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg> 상담일지 자동 생성';
}

function copyResult() {
  navigator.clipboard.writeText(document.getElementById('resultContent').textContent).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.classList.add('copied');
    btn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg> 복사됨';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>복사';
    }, 2000);
  });
}

function resetAll() {
  document.getElementById('transcriptInput').value = '';
  document.getElementById('charCount').textContent = '0';
  document.getElementById('statusBadge').textContent = '대기 중';
  document.getElementById('statusBadge').className = 'badge badge-muted';
  document.getElementById('errorBox').style.display = 'none';
  setUI('idle');
}
</script>
</body>
</html>
