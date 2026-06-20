const events = [
  {
    id: "yosakoi",
    name: "第35回 YOSAKOI ソーラン祭り",
    date: "6月10日(水)〜14日(日)",
    month: 6,
    level: "大規模",
    levelRank: 3,
    area: "大通西4丁目〜10丁目",
    officialUrl: "https://www.yosakoi-soran.jp/",
    restriction: "6/13〜14は大通西4丁目〜10丁目で全面通行止め。航空連絡バス・定期観光バスの迂回に注意。",
    eventTime: "主な演舞は6/13が10:00〜21:30、6/14が10:00〜21:00頃まで。",
    carCongestion: "車の渋滞予想: 9:30〜11:00は規制開始直後、17:00〜21:30は演舞終盤・帰宅時間と重なり、大通・札幌駅前通・すすきの方面で滞留しやすいです。6/13夜はパレード系イベントもあり、夜の混雑を強めに見ています。",
    modes: ["subway", "jr", "road"],
    impacts: {
      subway: { peak: "17:00〜21:30", note: "演舞終了と帰宅ラッシュが重なりやすい" },
      jr: { peak: "18:00〜20:00", note: "札幌駅から地下鉄へ乗り換える人流が増える" },
      road: { peak: "9:30〜21:30", note: "大通公園周辺の通行止めで迂回が発生" }
    },
    stations: [
      { name: "大通駅", time: "17:00〜21:30", mode: "地下鉄", reason: "南北線・東西線・東豊線の交差駅で観覧客が集中" },
      { name: "西11丁目駅", time: "16:30〜21:30", mode: "地下鉄", reason: "大通西側会場への徒歩アクセスが増加" },
      { name: "すすきの駅", time: "19:00〜22:00", mode: "地下鉄", reason: "中心部回遊と夜の移動が重なる" },
      { name: "札幌駅", time: "18:00〜20:00", mode: "JR", reason: "JRから地下鉄への乗り換えが増える" }
    ]
  },
  {
    id: "jingu",
    name: "北海道神宮例祭（札幌まつり）",
    date: "6月14日(日)〜16日(火)",
    month: 6,
    level: "中〜大規模",
    levelRank: 2,
    area: "市内中心部・神輿渡御順路",
    officialUrl: "https://www.hokkaidojingu.or.jp/",
    restriction: "6/16は神輿渡御により市内中心部で広範囲の規制。午前から夕方の移動に注意。",
    eventTime: "神輿渡御・規制時間をもとに9:00〜夕方頃を想定。",
    carCongestion: "車の渋滞予想: 9:00〜12:00は北海道神宮方面から中心部へ向かう順路、15:00〜17:30は中心部・札幌駅・大通方面へ戻る流れで詰まりやすいです。順路周辺は短距離移動でも迂回が増える想定です。",
    modes: ["subway", "jr", "road"],
    impacts: {
      subway: { peak: "9:00〜16:30", note: "円山公園方面と中心部方面の移動が増える" },
      jr: { peak: "15:30〜18:00", note: "祭り帰りと夕方移動が重なる" },
      road: { peak: "9:00〜夕方", note: "神輿渡御順路に沿って車両規制が発生" }
    },
    stations: [
      { name: "円山公園駅", time: "9:00〜12:00", mode: "地下鉄", reason: "北海道神宮方面への参拝・見物客が集中" },
      { name: "大通駅", time: "10:00〜16:30", mode: "地下鉄", reason: "中心部の渡御ルート確認や乗り換え需要が増える" },
      { name: "西11丁目駅", time: "10:00〜16:00", mode: "地下鉄", reason: "中心部西側の徒歩移動が増加" },
      { name: "札幌駅", time: "15:30〜18:00", mode: "JR", reason: "夕方の帰宅移動と祭り帰りが重なる" }
    ]
  },
  {
    id: "hokkaido-marathon",
    name: "北海道マラソン 2026",
    date: "8月30日(日)",
    month: 8,
    level: "大規模",
    levelRank: 3,
    area: "大通公園〜市中心部〜新琴似",
    officialUrl: "https://hokkaido-marathon.com/",
    restriction: "中心部では最大9時間半の交通規制。市電・バス一部運休、マイカー利用回避の呼びかけあり。",
    eventTime: "大会は8:30〜14:45。スタートは第1ウェーブ8:30、第2ウェーブ8:45。",
    carCongestion: "車の渋滞予想: 7:30〜9:30はスタート準備と中心部流入、8:30〜15:00はコース横断・迂回で広域に渋滞しやすいです。大通・札幌駅前通・創成川通・新川通方面は特に長めに見ています。",
    modes: ["subway", "jr", "road"],
    impacts: {
      subway: { peak: "7:00〜10:00 / 12:00〜15:00", note: "スタート前とフィニッシュ後に大通周辺へ集中" },
      jr: { peak: "7:00〜9:00 / 12:30〜15:30", note: "市外からの来場・帰宅で札幌駅の乗換が増える" },
      road: { peak: "8:00〜15:30", note: "コース沿線の横断・迂回待ちが長くなりやすい" }
    },
    stations: [
      { name: "大通駅", time: "7:00〜10:00", mode: "地下鉄", reason: "スタート・フィニッシュ地点付近の動線が集中" },
      { name: "さっぽろ駅", time: "7:00〜9:00", mode: "地下鉄", reason: "JR札幌駅からの乗り換えが増える" },
      { name: "北24条駅", time: "9:00〜13:00", mode: "地下鉄", reason: "新琴似方面へ向かうコース周辺アクセス" },
      { name: "札幌駅", time: "12:30〜15:30", mode: "JR", reason: "フィニッシュ後の帰宅ピーク" }
    ]
  },
  {
    id: "snowfes",
    name: "さっぽろ雪まつり",
    date: "2月4日(水)〜11日(水)",
    month: 2,
    level: "超大規模",
    levelRank: 4,
    area: "大通・すすきの・つどーむ周辺",
    officialUrl: "https://www.snowfes.com/",
    restriction: "大通・すすきの・つどーむ周辺で終日人流が増加。空港連絡バス停留所休止に注意。",
    eventTime: "公式の会期は2/4〜2/11。サイト上の予測はCSVの10:00〜22:00想定を使用。",
    carCongestion: "車の渋滞予想: 10:00〜12:00は観光・会場入り、16:00〜20:00は夕方の来場、20:00〜22:00は夜の観覧帰りで混みやすいです。大通・すすきの・つどーむ周辺は送迎車、観光バス、タクシーの滞留も見込んでいます。",
    modes: ["subway", "jr", "road"],
    impacts: {
      subway: { peak: "10:00〜22:00", note: "会場間移動と夜のライトアップ需要が続く" },
      jr: { peak: "16:00〜20:00", note: "観光客の札幌駅発着と夕方移動が重なる" },
      road: { peak: "10:00〜22:00", note: "中心部駐車場・送迎・観光バスで混みやすい" }
    },
    stations: [
      { name: "大通駅", time: "10:00〜22:00", mode: "地下鉄", reason: "大通会場の最寄りで終日滞留が発生" },
      { name: "すすきの駅", time: "17:00〜22:00", mode: "地下鉄", reason: "すすきの会場と夜の移動が重なる" },
      { name: "栄町駅", time: "10:00〜17:00", mode: "地下鉄", reason: "つどーむ会場方面のアクセス拠点" },
      { name: "札幌駅", time: "16:00〜20:00", mode: "JR", reason: "観光客の発着と地下鉄乗り換えが増える" }
    ]
  },
  {
    id: "sapporo-marathon",
    name: "札幌マラソン（第51回）",
    date: "10月4日(日)",
    month: 10,
    level: "中規模",
    levelRank: 1,
    area: "真駒内公園〜コース沿線",
    officialUrl: "https://satumara.sapporo-sport.jp/",
    restriction: "8:35〜11:20頃にコース沿線で一部規制。市電折返し運行の可能性あり。",
    eventTime: "大会当日は9:00から10km、9:20・9:30からハーフ、13:00以降に短距離種目が順次スタート。",
    carCongestion: "車の渋滞予想: 7:30〜9:30は真駒内公園周辺への流入、9:00〜11:30は五輪通・国道453号・中の島通・駅前通などコース沿線で迂回が増えます。昼過ぎは真駒内公園周辺の帰宅車両に注意です。",
    modes: ["subway", "road"],
    impacts: {
      subway: { peak: "7:00〜9:00 / 10:30〜12:00", note: "真駒内公園への来場と終了後の帰宅が中心" },
      jr: { peak: "影響小", note: "札幌駅で地下鉄乗り換えは発生するが中心は地下鉄南北線" },
      road: { peak: "8:35〜11:20", note: "コース横断待ちと迂回が発生" }
    },
    stations: [
      { name: "真駒内駅", time: "7:00〜9:00", mode: "地下鉄", reason: "会場最寄りの移動が集中" },
      { name: "中島公園駅", time: "9:00〜11:30", mode: "地下鉄", reason: "コース沿線の観戦・移動が増える" },
      { name: "大通駅", time: "10:00〜12:00", mode: "地下鉄", reason: "中心部方面への戻り移動が増加" }
    ]
  },
  {
    id: "summer-fes",
    name: "さっぽろ夏まつり",
    date: "7月23日(木)〜8月18日(火)",
    month: 7,
    level: "中〜大規模",
    levelRank: 2,
    area: "大通公園・狸小路・すすきの",
    officialUrl: "https://www.sapporo.travel/summerfes/",
    restriction: "大通公園・狸小路・すすきの周辺で車両進入不可エリアあり。夕方以降の中心部移動に注意。",
    eventTime: "公式の主会期は7/23〜8/18。大通ビアガーデン、狸まつり、すすきの祭りなどを含む夏イベント。",
    carCongestion: "車の渋滞予想: 17:00〜23:00は仕事終わりの来場、飲食後の帰宅、タクシー待ちが重なりやすいです。大通公園周辺、狸小路、すすきの南4条〜南7条付近は送迎・駐車場待ちも含めて混雑を見ています。",
    modes: ["subway", "jr", "road"],
    impacts: {
      subway: { peak: "17:30〜22:30", note: "仕事終わりの来場と帰宅が大通・すすきのに集中" },
      jr: { peak: "17:00〜19:30", note: "札幌駅から大通方面への地下鉄乗換が増える" },
      road: { peak: "17:00〜23:00", note: "中心部の送迎・タクシー・歩行者増で流れが悪化" }
    },
    stations: [
      { name: "大通駅", time: "17:30〜22:30", mode: "地下鉄", reason: "ビアガーデン・大通公園への来場が集中" },
      { name: "すすきの駅", time: "18:00〜23:00", mode: "地下鉄", reason: "すすきの祭り・夜間回遊と重なる" },
      { name: "豊水すすきの駅", time: "18:00〜22:30", mode: "地下鉄", reason: "すすきの東側からのアクセスが増える" },
      { name: "札幌駅", time: "17:00〜19:30", mode: "JR", reason: "中心部へ向かう乗り換えが増える" }
    ]
  },
  {
    id: "no-maps",
    name: "No Maps",
    date: "9月23日(水・祝)〜27日(日)",
    month: 9,
    level: "中規模",
    levelRank: 1,
    area: "札幌駅前通り",
    officialUrl: "https://no-maps.jp/",
    restriction: "10:50〜18:10に市電の折返し運行・西4丁目〜狸小路〜すすきの運休に注意。",
    eventTime: "公式発表では9/23〜9/27に札幌市内中心部の複数会場で開催。交通影響はCSVの10:50〜18:10を使用。",
    carCongestion: "車の渋滞予想: 10:30〜18:30は札幌駅前通・大通・すすきの方面で歩行者増加と市電運休の代替移動が重なりやすいです。会場間移動が分散するため、短い渋滞が断続的に出る想定です。",
    modes: ["subway", "jr", "road"],
    impacts: {
      subway: { peak: "10:30〜18:30", note: "市電運休区間の代替として地下鉄利用が増える" },
      jr: { peak: "10:00〜12:00 / 17:00〜18:30", note: "札幌駅から駅前通り方面への徒歩・地下鉄移動が増える" },
      road: { peak: "10:50〜18:10", note: "駅前通り周辺で歩行者・市電代替移動が増える" }
    },
    stations: [
      { name: "大通駅", time: "10:30〜18:30", mode: "地下鉄", reason: "駅前通り・会場方面の中心駅" },
      { name: "すすきの駅", time: "11:00〜18:30", mode: "地下鉄", reason: "市電運休区間の代替移動が増える" },
      { name: "札幌駅", time: "10:00〜12:00", mode: "JR", reason: "駅前通り方面への来場動線" }
    ]
  }
];

const modeLabels = {
  subway: "地下鉄",
  jr: "JR",
  road: "道路"
};

const modeStyles = {
  subway: { bg: "#e8f2ff", color: "#1d66d1" },
  jr: { bg: "#eaf7ef", color: "#198754" },
  road: { bg: "#fff3df", color: "#a66500" }
};

const levelColors = {
  "超大規模": "#cc3340",
  "大規模": "#d06920",
  "中〜大規模": "#b7791f",
  "中規模": "#1d66d1"
};

let selectedId = events[0].id;

const eventList = document.querySelector("#eventList");
const eventDetail = document.querySelector("#eventDetail");
const stationBoard = document.querySelector("#stationBoard");
const searchInput = document.querySelector("#searchInput");
const monthFilter = document.querySelector("#monthFilter");
const modeFilter = document.querySelector("#modeFilter");
const severityFilter = document.querySelector("#severityFilter");
const resultCount = document.querySelector("#resultCount");
const highImpactCount = document.querySelector("#highImpactCount");
const topArea = document.querySelector("#topArea");

function getFilteredEvents() {
  const query = searchInput.value.trim().toLowerCase();
  const month = monthFilter.value;
  const mode = modeFilter.value;
  const level = severityFilter.value;

  return events.filter((event) => {
    const searchText = [
      event.name,
      event.area,
      event.restriction,
      ...event.stations.map((station) => `${station.name} ${station.reason}`)
    ].join(" ").toLowerCase();

    const matchesQuery = !query || searchText.includes(query);
    const matchesMonth = month === "all" || String(event.month) === month;
    const matchesMode = mode === "all" || event.modes.includes(mode);
    const matchesLevel = level === "all" || event.level === level;

    return matchesQuery && matchesMonth && matchesMode && matchesLevel;
  });
}

function renderMetrics(filtered) {
  highImpactCount.textContent = events.filter((event) => event.levelRank >= 3).length;

  const areaScores = new Map();
  events.forEach((event) => {
    event.stations.forEach((station) => {
      areaScores.set(station.name, (areaScores.get(station.name) || 0) + 1);
    });
  });

  const [topStation] = [...areaScores.entries()].sort((a, b) => b[1] - a[1])[0];
  topArea.textContent = topStation.replace("駅", "");
  resultCount.textContent = `${filtered.length}件表示中`;
}

function isMobileLayout() {
  return window.matchMedia("(max-width: 920px)").matches;
}

function animateScrollTo(targetY, duration = 500) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, targetY);
    return;
  }

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

function scrollSelectedEventIntoView() {
  if (!isMobileLayout()) {
    return;
  }

  requestAnimationFrame(() => {
    const selectedCard = eventList.querySelector(`.event-card[data-id="${selectedId}"]`);

    if (!selectedCard) {
      return;
    }

    const targetY = selectedCard.getBoundingClientRect().top + window.scrollY - 12;
    animateScrollTo(Math.max(targetY, 0), 500);
  });
}

function buildEventDetailMarkup(event) {
  const impacts = ["subway", "jr", "road"].map((mode) => {
    const impact = event.impacts[mode];
    const style = modeStyles[mode];
    return `
      <article class="impact-card">
        <span class="mode-pill" style="--mode-bg:${style.bg};--mode-color:${style.color}">${modeLabels[mode]}</span>
        <span class="time-label">混雑予想時間</span>
        <strong>${impact.peak}</strong>
        <p>${impact.note}</p>
      </article>
    `;
  }).join("");

  const stations = event.stations.map((station) => {
    const modeKey = station.mode === "地下鉄" ? "subway" : station.mode === "JR" ? "jr" : "road";
    return `
      <article class="station-item">
        <div>
          <span class="station-name">${station.name}</span>
          <div class="mode-pill" style="--mode-bg:${modeStyles[modeKey].bg};--mode-color:${modeStyles[modeKey].color}">${station.mode}</div>
        </div>
        <p class="station-reason">${station.reason}</p>
        <span class="time-chip"><small>混雑予想</small>${station.time}</span>
      </article>
    `;
  }).join("");

  return `
    <div style="--level-color:${levelColors[event.level]}">
      <div class="detail-hero">
        <div>
          <span class="level-pill">${event.level}</span>
          <h2>${event.name}</h2>
          <div class="meta-row">
            <span class="meta-pill">${event.date}</span>
            <span class="meta-pill">${event.area}</span>
          </div>
          <a class="official-link" href="${event.officialUrl}" target="_blank" rel="noreferrer">公式サイトを開く</a>
        </div>
        <div class="mini-map" role="img" aria-label="札幌中心部の交通影響イメージ"></div>
      </div>
      <div class="impact-tabs">${impacts}</div>
      <div class="station-list">${stations}</div>
      <div class="restriction-box">
        <h3>交通規制メモ</h3>
        <p><strong>イベント時間:</strong> ${event.eventTime}</p>
        <p><strong>規制:</strong> ${event.restriction}</p>
        <p><strong>${event.carCongestion}</strong></p>
      </div>
    </div>
  `;
}

function renderList(filtered) {
  if (!filtered.some((event) => event.id === selectedId) && filtered[0]) {
    selectedId = filtered[0].id;
  }

  eventList.innerHTML = filtered.map((event) => {
    const modePills = event.modes.map((mode) => {
      const style = modeStyles[mode];
      return `<span class="mode-pill" style="--mode-bg:${style.bg};--mode-color:${style.color}">${modeLabels[mode]}</span>`;
    }).join("");

    const inlineDetail = event.id === selectedId
      ? `<div class="mobile-inline-detail">${buildEventDetailMarkup(event)}</div>`
      : "";

    return `
      <button class="event-card ${event.id === selectedId ? "is-active" : ""}" style="--level-color:${levelColors[event.level]}" data-id="${event.id}">
        <h3>${event.name}</h3>
        <div class="meta-row">
          <span class="meta-pill">${event.date}</span>
          <span class="level-pill">${event.level}</span>
        </div>
        <p>${event.area}</p>
        <div class="tag-row">${modePills}</div>
      </button>
      ${inlineDetail}
    `;
  }).join("");

  if (!filtered.length) {
    eventList.innerHTML = `<div class="empty-state">条件に合うイベントがありません。</div>`;
  }

  eventList.querySelectorAll(".event-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedId = card.dataset.id;
      render({ scrollToSelected: true });
    });
  });
}

function renderDetail(filtered) {
  const event = events.find((item) => item.id === selectedId) || filtered[0];

  if (!event) {
    eventDetail.innerHTML = `<div class="empty-state">イベントを選択してください。</div>`;
    return;
  }

  eventDetail.innerHTML = buildEventDetailMarkup(event);
}

function renderStationBoard(filtered) {
  const rows = filtered.flatMap((event) =>
    event.stations.map((station) => ({ event, station }))
  );

  stationBoard.innerHTML = rows.slice(0, 12).map(({ event, station }) => `
    <article class="board-card" style="border-left:6px solid ${levelColors[event.level]}">
      <h3>${station.name}</h3>
      <p>${event.name}</p>
      <span>${station.time}</span>
    </article>
  `).join("");

  if (!rows.length) {
    stationBoard.innerHTML = `<div class="empty-state">表示できる駅情報がありません。</div>`;
  }
}

function render(options = {}) {
  const filtered = getFilteredEvents();
  renderMetrics(filtered);
  renderList(filtered);
  renderDetail(filtered);
  renderStationBoard(filtered);

  if (options.scrollToSelected) {
    scrollSelectedEventIntoView();
  }
}

[searchInput, monthFilter, modeFilter, severityFilter].forEach((control) => {
  control.addEventListener("input", render);
});

render();
