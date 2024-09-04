import InsightAI from "./assets/InsightAI.png";
import SmartVision from "./assets/SmartVision.png";
import VoiceFlow from "./assets/VoiceFlow.png";
import AutoBrain from "./assets/AutoBrain.png";

export const COMPANY_INTRODUCTION = [
  {
    image: InsightAI,
    title: "Insight AI",
    description: "データ分析と予測に特化したAIで、ビジネスの未来を見通します。",
  },
  {
    image: SmartVision,
    title: "Smart Vision",
    description: "画像認識AIで、セキュリティや品質管理を強化します。",
  },
  {
    image: VoiceFlow,
    title: "Voice Flow",
    description: "自然な対話型AIで、カスタマーサポートの効率を最大化します。",
  },
  {
    image: AutoBrain,
    title: "Auto Brain",
    description: "自動化されたAIプロセスで、日常業務を簡素化・効率化します。",
  },
];

export const USECASES = {
  InsightAI: {
    title: "Insight AI",
    usecase:
      "InSightAIは、大量のデータを迅速に分析し、将来の傾向や予測を提供するのに最適です。具体的なユースケースとしては、マーケティングキャンペーンの効果測定、需要予測、リスク管理などが挙げられます。",
    subTitle: "お客様事例の紹介",
    successStory:
      "小売企業A社は、膨大な販売データから需要予測を行うことに苦労していました。InSightAIを活用することで、過去の販売データを分析し、将来の需要を予測。これにより、在庫管理の効率化と売上の最大化が実現しました。",
  },
  SmartVision: {
    title: "Smart Vision",
    usecase:
      "SmartVisionは、画像認識技術を活用した品質管理やセキュリティ向上に最適です。例として、製造業での製品の品質チェック、医療分野での画像診断、顔認証システムの導入が挙げられます。",
    subTitle: "お客様事例の紹介",
    successStory:
      "B重工業メーカーは製品の品質検査に時間とコストがかかるという課題がありました。SmartVisionを導入することで、自動化された画像認識システムが不良品を迅速に検出し、生産ラインの効率を大幅に改善しました。",
  },
  VoiceFlow: {
    title: "Voice Flow",
    usecase:
      "VoiceFlowは、自然言語処理を活用したカスタマーサポートやバーチャルアシスタントに最適です。具体的には、コールセンターでの問い合わせ対応、音声入力による情報検索、AIによる予約システムなどが考えられます。",
    subTitle: "お客様事例の紹介",
    successStory:
      "C銀行では、膨大な数の顧客問い合わせに迅速に対応することが課題でした。VoiceFlowを導入することで、音声アシスタントが顧客の問い合わせを自動で処理し、担当者の負担を大幅に軽減しました。また、顧客満足度の向上にも寄与しました。",
  },
  AutoBrain: {
    title: "Auto Brain",
    usecase:
      "AutoBrainは、業務の自動化に最適です。RPA（ロボティック・プロセス・オートメーション）による反復作業の自動化、AIによる業務プロセスの最適化が主なユースケースです。",
    subTitle: "お客様事例の紹介",
    successStory:
      "D損保では、膨大な書類処理や手続きに時間がかかっていました。AutoBrainを活用してこれらのプロセスを自動化し、手続きの迅速化とエラーの削減を実現しました。また、従業員はより付加価値の高い業務に集中できるようになりました。",
  },
};
