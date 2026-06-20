const questions = [
  {
    id: "field",
    text: "自分に近い入口は？",
    options: [
      { label: "文系", tags: ["writing", "study", "career"] },
      { label: "理系", tags: ["coding", "study", "analysis"] },
      { label: "デザイン寄り", tags: ["creative", "visual", "sns"] },
      { label: "まだ不明", tags: ["starter", "life", "study"] }
    ]
  },
  {
    id: "spark",
    text: "一番ワクワクするのは？",
    options: [
      { label: "作品ができる", tags: ["creative", "visual", "music"] },
      { label: "作業が速くなる", tags: ["productivity", "life", "analysis"] },
      { label: "就活に効く", tags: ["career", "writing"] },
      { label: "アプリが作れる", tags: ["coding", "starter"] }
    ]
  },
  {
    id: "study",
    text: "今、学びたいことは？",
    options: [
      { label: "授業・レポート", tags: ["study", "writing"] },
      { label: "資格・試験", tags: ["study", "productivity"] },
      { label: "プログラミング", tags: ["coding", "analysis"] },
      { label: "趣味を深める", tags: ["creative", "life"] }
    ]
  },
  {
    id: "cook",
    text: "料理する？",
    options: [
      { label: "よくする", tags: ["cooking", "life"] },
      { label: "たまにする", tags: ["cooking", "starter"] },
      { label: "ほぼしない", tags: ["life", "productivity"] },
      { label: "始めたい", tags: ["cooking", "starter"] }
    ]
  },
  {
    id: "career",
    text: "就活・キャリアの状況は？",
    options: [
      { label: "就活中", tags: ["career", "writing"] },
      { label: "そろそろ準備", tags: ["career", "starter"] },
      { label: "まだ先", tags: ["study", "productivity"] },
      { label: "副業に興味", tags: ["creative", "coding", "sns"] }
    ]
  },
  {
    id: "living",
    text: "生活スタイルは？",
    options: [
      { label: "一人暮らし", tags: ["life", "cooking", "productivity"] },
      { label: "実家暮らし", tags: ["study", "creative"] },
      { label: "忙しめ", tags: ["productivity", "career"] },
      { label: "時間は作れる", tags: ["creative", "coding", "study"] }
    ]
  },
  {
    id: "output",
    text: "AIで最初に作りたいものは？",
    options: [
      { label: "文章", tags: ["writing", "study", "career"] },
      { label: "画像・動画", tags: ["visual", "creative", "sns"] },
      { label: "音楽・企画", tags: ["music", "creative"] },
      { label: "ツール", tags: ["coding", "analysis"] }
    ]
  },
  {
    id: "blocker",
    text: "AIに対して一番ひっかかることは？",
    options: [
      { label: "何を聞けばいいか不明", tags: ["starter", "prompt"] },
      { label: "間違いが怖い", tags: ["study", "analysis"] },
      { label: "難しそう", tags: ["starter", "life"] },
      { label: "続かなそう", tags: ["productivity", "prompt"] }
    ]
  }
];

const usecases = [
  {
    title: "課題・レポートの論点出しAI",
    icon: "📚",
    tags: ["study", "writing", "starter"],
    description: "白紙から始めず、テーマ、論点、構成案まで一気に作る入口。",
    prompt: "大学のレポート課題について相談します。テーマは「{ここを消して情報を入れてね！ レポートのテーマ}」です。初学者でも書き始められるように、論点を5つ、結論候補を3つ、レポート構成を序論・本論・結論で提案してください。最後に、調べるべきキーワードも出してください。"
  },
  {
    title: "就活ESの言語化AI",
    icon: "💼",
    tags: ["career", "writing"],
    description: "経験をそのまま強みに変換して、ESや面接の材料にする。",
    prompt: "就活の自己PRを作りたいです。私の経験は「{ここを消して情報を入れてね！ 自分の経験}」です。この経験から伝わる強みを3つに分け、企業に伝わる自己PR文を400字で作ってください。さらに、面接で深掘りされそうな質問と答え方も出してください。"
  },
  {
    title: "一人暮らし献立AI",
    icon: "🍳",
    tags: ["cooking", "life"],
    description: "冷蔵庫の中身、予算、時間から今日のごはんを決める。",
    prompt: "冷蔵庫にある食材は「{ここを消して情報を入れてね！ 冷蔵庫にある食材}」です。予算は{ここを消して情報を入れてね！ 予算}円、調理時間は{ここを消して情報を入れてね！ 調理時間}分以内です。一人暮らし向けに、主菜・副菜・汁物の献立を提案し、手順を短く教えてください。余った食材の使い道も出してください。"
  },
  {
    title: "旅行プラン作成AI",
    icon: "✈️",
    tags: ["life", "creative", "productivity"],
    description: "行き先、予算、好みを入れるだけで、1日の回り方を作る。",
    prompt: "旅行プランを作ってください。行き先は「{ここを消して情報を入れてね！ 行き先}」、人数は{ここを消して情報を入れてね！ 人数}人、予算は{ここを消して情報を入れてね！ 予算}円、好きな雰囲気は「{ここを消して情報を入れてね！ 好きな雰囲気}」です。午前・昼・午後・夜に分けて、移動しやすい順番で提案してください。雨の日の代替案もください。"
  },
  {
    title: "趣味の画像アイデアAI",
    icon: "🎨",
    tags: ["creative", "visual", "sns"],
    description: "絵、サムネ、ポスターの方向性を一緒に決める。",
    prompt: "画像生成AIに入れるプロンプトを作りたいです。テーマは「{ここを消して情報を入れてね！ 作りたい画像のテーマ}」、雰囲気は「{ここを消して情報を入れてね！ 好きな雰囲気}」、使い道は「{ここを消して情報を入れてね！ 使い道}」です。初心者でも使いやすい日本語プロンプトと英語プロンプトをそれぞれ3案出してください。"
  },
  {
    title: "作曲・歌詞アイデアAI",
    icon: "🎵",
    tags: ["creative", "music"],
    description: "曲調、テーマ、感情から歌詞やメロディの種を作る。",
    prompt: "曲作りのアイデアがほしいです。ジャンルは「{ここを消して情報を入れてね！ 音楽ジャンル}」、テーマは「{ここを消して情報を入れてね！ 曲のテーマ}」、感情は「{ここを消して情報を入れてね！ 表現したい感情}」です。曲のコンセプト、Aメロ・Bメロ・サビの歌詞案、使えそうなコード進行を提案してください。"
  },
  {
    title: "勉強計画コーチAI",
    icon: "🗓️",
    tags: ["study", "productivity"],
    description: "試験日から逆算して、毎日の勉強を小さく分ける。",
    prompt: "勉強計画を立てたいです。試験日は「{ここを消して情報を入れてね！ 試験日}」、科目は「{ここを消して情報を入れてね！ 科目}」、今の理解度は10段階中{ここを消して情報を入れてね！ 今の理解度}です。今日から試験日までの計画を週単位と1日単位に分けて作ってください。サボった日の復帰プランもください。"
  },
  {
    title: "プログラミング相棒AI",
    icon: "🤖",
    tags: ["coding", "starter", "analysis"],
    description: "作りたいものを説明して、ファイル構成や最初のコードに落とす。",
    prompt: "プログラミング初心者です。「{ここを消して情報を入れてね！ 作りたいアプリやツール}」を作りたいです。必要な機能を分解し、最小構成のファイル一覧、作る順番、つまずきやすいポイントを教えてください。コードを書く前に確認すべき質問も出してください。"
  },
  {
    title: "SNS投稿・企画AI",
    icon: "📣",
    tags: ["sns", "creative", "writing"],
    description: "イベント告知、活動紹介、作品投稿の文章を整える。",
    prompt: "SNS投稿を作りたいです。目的は「{ここを消して情報を入れてね！ 投稿の目的}」、伝えたい内容は「{ここを消して情報を入れてね！ 伝えたい内容}」、対象は「{ここを消して情報を入れてね！ 誰に届けたいか}」です。X向け、Instagram向け、短い告知文の3パターンを作ってください。ハッシュタグ案も10個ください。"
  },
  {
    title: "家計・買い物相談AI",
    icon: "🛒",
    tags: ["life", "analysis", "productivity"],
    description: "買うか迷うものを、予算と優先度で冷静に判断する。",
    prompt: "買い物を相談したいです。買いたいものは「{ここを消して情報を入れてね！ 買いたいもの}」、価格は{ここを消して情報を入れてね！ 価格}円、今月の予算は{ここを消して情報を入れてね！ 今月の予算}円です。買うメリット・待つメリット・代替案を比較して、後悔しにくい判断基準を出してください。"
  },
  {
    title: "AIプロンプト添削AI",
    icon: "🎟️",
    tags: ["prompt", "starter", "productivity"],
    description: "うまく聞けない問題を、AIに聞く前に整える。",
    prompt: "次のプロンプトを改善してください。「{ここを消して情報を入れてね！ 改善したいプロンプト}」。目的、前提条件、出力形式、制約条件が伝わる形に書き換えてください。初心者向けに、なぜ改善されたのかも短く説明してください。"
  },
  {
    title: "データ読み取りAI",
    icon: "📊",
    tags: ["analysis", "study", "coding"],
    description: "CSVやアンケート結果から、見るべきポイントを出す。",
    prompt: "データ分析の相談です。データの列は「{ここを消して情報を入れてね！ データの列名}」です。このデータから分かりそうな問いを10個出し、初心者でも試せる集計方法とグラフ案を提案してください。注意すべきデータの偏りも教えてください。"
  },
  {
    title: "恋愛・人間関係相談AI",
    icon: "💗",
    tags: ["life", "writing", "starter"],
    description: "送る文章や相談内容を、相手に伝わる形へ整える。",
    prompt: "人間関係の相談です。状況は「{ここを消して情報を入れてね！ 今の状況}」です。相手を責めずに伝える文章を3パターン作ってください。やわらかい表現、はっきりした表現、短文の表現でお願いします。"
  }
];

const routes = [
  {
    name: "クリエイティブ・ワンダーランド",
    icon: "🎨",
    tags: ["creative", "visual", "music", "sns"],
    description: "作品づくりから入ると火がつきやすいタイプ。まずは画像、音楽、投稿文で完成体を見てみよう。"
  },
  {
    name: "キャリア・クエスト港",
    icon: "💼",
    tags: ["career", "writing"],
    description: "就活や自己PRに直結するタイプ。AIを、自分の経験を言葉にする編集者として使うのが近道。"
  },
  {
    name: "ライフハック・キッチン街",
    icon: "🍳",
    tags: ["life", "cooking", "productivity"],
    description: "生活の小さな困りごとから試すと続くタイプ。献立、買い物、予定整理でAIを日常に入れてみよう。"
  },
  {
    name: "ラーニング・アカデミー",
    icon: "📚",
    tags: ["study", "analysis"],
    description: "学習や課題で効果を感じやすいタイプ。論点出し、計画、データ読み取りから始めるのがおすすめ。"
  },
  {
    name: "ビルド・ラボ",
    icon: "🤖",
    tags: ["coding", "prompt", "starter"],
    description: "作れる体験で一気にハマるタイプ。小さなアプリや便利ツールをAIと一緒に形にしよう。"
  }
];

const questionList = document.querySelector("#questionList");
const progressCount = document.querySelector("#progressCount");
const progressBar = document.querySelector("#progressBar");
const diagnosis = document.querySelector("#diagnosis");
const results = document.querySelector("#results");
const usecaseGrid = document.querySelector("#usecaseGrid");
const routeBadge = document.querySelector("#routeBadge");
const routeName = document.querySelector("#routeName");
const routeDescription = document.querySelector("#routeDescription");
const resetButton = document.querySelector("#resetButton");
const sampleResultButton = document.querySelector("#sampleResultButton");
const copyAllButton = document.querySelector("#copyAllButton");
const toast = document.querySelector("#toast");

function renderQuestions() {
  questionList.innerHTML = questions.map((question, index) => {
    const options = question.options.map((option, optionIndex) => `
      <label class="option">
        <input type="radio" name="${question.id}" value="${optionIndex}" ${optionIndex === 0 ? "required" : ""}>
        <span>${option.label}</span>
      </label>
    `).join("");

    return `
      <fieldset class="question">
        <legend class="question-title">
          <span class="question-number">${index + 1}</span>
          <span>${question.text}</span>
        </legend>
        <div class="option-grid">${options}</div>
      </fieldset>
    `;
  }).join("");
}

function getSelectedAnswers(useSample = false) {
  return questions.map((question, index) => {
    if (useSample) {
      const sampleIndexes = [3, 0, 0, 3, 1, 2, 3, 0];
      return question.options[sampleIndexes[index]];
    }

    const checked = diagnosis.querySelector(`input[name="${question.id}"]:checked`);
    return checked ? question.options[Number(checked.value)] : null;
  });
}

function scoreTags(answers) {
  const scores = {};

  answers.filter(Boolean).forEach((answer) => {
    answer.tags.forEach((tag) => {
      scores[tag] = (scores[tag] || 0) + 1;
    });
  });

  return scores;
}

function scoreItem(item, scores) {
  const base = item.tags.reduce((sum, tag) => sum + (scores[tag] || 0), 0);
  const starterBoost = item.tags.includes("starter") ? 1 : 0;
  return base + starterBoost;
}

function pickRoute(scores) {
  return routes
    .map((route) => ({
      ...route,
      score: route.tags.reduce((sum, tag) => sum + (scores[tag] || 0), 0)
    }))
    .sort((a, b) => b.score - a.score)[0];
}

function buildResults(answers) {
  const scores = scoreTags(answers);
  const route = pickRoute(scores);
  const ranked = [...usecases]
    .map((item) => ({ ...item, score: scoreItem(item, scores) }))
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "ja"))
    .slice(0, 10);

  routeBadge.textContent = route.icon;
  routeName.textContent = route.name;
  routeDescription.textContent = route.description;

  usecaseGrid.innerHTML = ranked.map((item, index) => `
    <article class="usecase-card">
      <div class="usecase-top">
        <div class="usecase-icon">${item.icon}</div>
        <div>
          <div class="rank">No.${index + 1}</div>
          <h3>${item.title}</h3>
        </div>
        <button class="copy-button" type="button" data-copy="${index}">コピー</button>
      </div>
      <p>${item.description}</p>
      <pre class="prompt-box">${item.prompt}</pre>
    </article>
  `).join("");

  usecaseGrid.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = ranked[Number(button.dataset.copy)];
      copyText(`${item.title}\n${item.prompt}`);
    });
  });

  copyAllButton.onclick = () => {
    const text = ranked.map((item, index) => (
      `No.${index + 1} ${item.title}\n${item.description}\n${item.prompt}`
    )).join("\n\n");
    copyText(text);
  };

  results.hidden = false;
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 1300);
}

function updateProgress() {
  const answered = getSelectedAnswers().filter(Boolean).length;
  progressCount.textContent = answered;
  progressBar.style.width = `${(answered / questions.length) * 100}%`;
}

renderQuestions();
updateProgress();

questionList.addEventListener("change", updateProgress);

diagnosis.addEventListener("submit", (event) => {
  event.preventDefault();
  const answers = getSelectedAnswers();
  if (answers.some((answer) => !answer)) return;
  buildResults(answers);
});

resetButton.addEventListener("click", () => {
  diagnosis.reset();
  results.hidden = true;
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

sampleResultButton.addEventListener("click", () => {
  const answers = getSelectedAnswers(true);
  buildResults(answers);
});
