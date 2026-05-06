const SYSTEM_PROMPT = `당신은 개인회생·개인파산 전문 법무법인의 상담일지 작성 전문가입니다.
주어진 상담 녹취 텍스트를 분석하여 아래 상담일지 양식에 맞게 정확하게 작성하세요.

[작성 규칙]
1. 녹취에서 확인된 정보만 기재하고, 확인 안 된 항목은 "미확인" 또는 "X"로 표기
2. 수임료는 사건 유형(회생/파산)과 채권자 수 기준으로 추정 기재 (회생: 290~360만원, 파산: 250~300만원)
3. 법비용: 채권자당 5~6만원 (인지대·송달료), 외부회생위원 15만원 (3.3%/사업자/1억초과 시)
4. 파산관재인: 파산 사건 시 40만원
5. 분납 회차: 현금 분납 기준 6~12회
6. 채무발생경위는 ■로 해당 항목 표시, 나머지는 □
7. 메모사항에는 클로징 여부, CRM 필요 여부, 특이사항, 추가 확인 필요 항목을 기재
8. 수임료와 법비용은 반드시 추정 기재
9. 전화번호 형식: 010-XXXX-XXXX

[상담일지 양식]
010-XXXX-XXXX
(고객명)
(수임료)만원 (분납회차)회
(채권자수)곳 (법비용)원
*사건구분: 개인회생 또는 개인파산
*성별/나이: (X년생) / (남/여)
*거주지/직장: (거주지) / 직장: (직장명 및 지역)

1. 기초사실
▪ 과거 회생,파산,신용회복 이력: (있으면 내용 / 없으면 X)
▪ 결혼여부: (기혼/이혼/미혼)
▪ 부양가족: (있으면 상세 / 없으면 X)
▪ 배우자 직업 및 소득: (내용 / 없으면 X)

2. 채무현황 / 채권자수 ( )건
▪ 무담보(신용카드 포함): (금액)
▪ 채무목록:
(채권자 목록을 줄별로)
▪ 담보(별제권): (내용 / 없으면 X)
▪ 세금/4대보험(우선채권): (내용 / 없으면 X)
▪ 최근1년 이내 대출금액: (내용 / 없으면 X)
▪ 월 대출 원리금: (내용 / 미확인)
▪ 연체여부: (있음/없음/미확인)

3. 직업 및 소득
(급여소득자 / 사업소득자 / 무직 중 선택)
▪ 직장: (직장명)
▪ 연봉/실수령(상여포함): (금액 / 미확인)
▪ 재직기간: (기간)
▪ 4대보험(3.3%): (4대보험 / 3.3% / 미확인)
▪ 퇴직연금·퇴직금: (내용 / 미확인)
▪ 급여통장: (은행명 / 미확인)

4. 본인 재산목록
[예상 재산가치: (금액)만원]
▪ 부동산: (내용 / X)
▪ 자동차: (내용 / X)
▪ 오토바이: (내용 / X)
▪ 예적금,주식 등: (내용 / X)
▪ 월보험료/환급금: (금액) / 환급금 (금액 / X)
▪ 퇴직금(수령 및 사용여부): (내용 / 미확인)
▪ 기타(사업장보증금, 비품 등): (내용 / X)
▪ 거주조건(자가,전세,월세,사택,무상): (내용)

5. ★5년이내 처분한 재산(파산의 경우 10년): (내용 / X)

6. 채무발생경위: (해당 내용 요약)
□생활비 부족 □병원비 과다지출 □교육비 과다지출 □사업운영실패 □별풍선,게임머니 □도박,주식,가상화폐 투자실패
□과도한 낭비,사치 □사기 및 보이스피싱 피해 □기타

7. 메모사항:
(특이사항, 클로징 여부, CRM 필요 여부, 주의 사항 등)

[중요] 출력은 상담일지 내용만, 설명 없이 양식 그대로 출력. 추정 내용에는 ※ 표시.`;

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST만 허용" });

  const { transcript } = req.body || {};
  if (!transcript || transcript.trim().length < 50) {
    return res.status(400).json({ error: "녹취 텍스트가 너무 짧습니다." });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "API Key가 설정되지 않았습니다." });

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1500,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: `다음 상담 녹취를 분석하여 상담일지를 작성해주세요:\n\n${transcript}` }],
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `API 오류 (${response.status})`);
    }

    const data = await response.json();
    return res.status(200).json({ result: data.content?.[0]?.text || "" });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
