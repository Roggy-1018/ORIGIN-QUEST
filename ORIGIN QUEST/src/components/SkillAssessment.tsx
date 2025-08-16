import React, { useState } from 'react';
import { TrendingUp, Star, BarChart3, Target, ChevronDown, ChevronUp, Info } from 'lucide-react';

const SkillAssessment = () => {
  const [scores, setScores] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});
  const [showScoreGuide, setShowScoreGuide] = useState(false);

  const skillCategories = [
    {
      id: 'vision',
      title: 'ビジョン・戦略策定力',
      description: '事業の方向性を定め、戦略的思考で価値を創造する能力',
      color: 'blue',
      skills: [
        {
          id: 'Q1',
          ability: '事業機会の洞察',
          question: 'マクロ経済や業界動向を定期的に分析し、新たなビジネス機会を発見している。',
          category: 'vision'
        },
        {
          id: 'Q2',
          ability: '価値仮説設計',
          question: 'TAM/SAM/SOMを自ら試算し、事業の市場規模を根拠をもって提示できる。',
          category: 'vision'
        },
        {
          id: 'Q3',
          ability: '価値仮説設計',
          question: 'Lean Canvasを用いて、仮説→検証のフレームワークを自立的に作成できる。',
          category: 'vision'
        },
        {
          id: 'Q4',
          ability: '価値仮説設計',
          question: '他社との差別化ポイントを明確化し、文書化してステークホルダに説明できる。',
          category: 'vision'
        }
      ]
    },
    {
      id: 'discovery',
      title: '顧客発見・検証力',
      description: '顧客の真のニーズを発見し、仮説を検証する能力',
      color: 'green',
      skills: [
        {
          id: 'Q5',
          ability: '顧客インタビュー',
          question: 'ソリューションを未提示のまま、顧客課題を深掘りする対話ができる。',
          category: 'discovery'
        },
        {
          id: 'Q6',
          ability: '顧客インタビュー',
          question: '顧客の課題深刻度を0-10スケールで定量化し、その結果を報告に活用している。',
          category: 'discovery'
        },
        {
          id: 'Q7',
          ability: '仮説検証の実行',
          question: 'ペーパープロトタイプやNo-Codeツールを使ったMVPを短期間で構築した経験がある。',
          category: 'discovery'
        },
        {
          id: 'Q8',
          ability: '仮説検証の実行',
          question: 'MVPを用いて顧客テストを実施し、得られた学びを次の設計に反映している。',
          category: 'discovery'
        }
      ]
    },
    {
      id: 'agility',
      title: '実験・学習アジリティ',
      description: '高速でPDCAを回し、データに基づいて意思決定する能力',
      color: 'purple',
      skills: [
        {
          id: 'Q9',
          ability: '高速PDCA運用',
          question: '1〜2週サイクルで仮説→検証→改善を繰り返す仕組みを自律的に回せている。',
          category: 'agility'
        },
        {
          id: 'Q10',
          ability: '高速PDCA運用',
          question: 'DevinなどのAIツールを用いて検証フェーズの工数を大幅に削減できている。',
          category: 'agility'
        },
        {
          id: 'Q11',
          ability: 'データ駆動意思決定',
          question: 'KPIダッシュボードを設計・運用し、意思決定に生データを活用している。',
          category: 'agility'
        },
        {
          id: 'Q12',
          ability: 'データ駆動意思決定',
          question: '因果分析やA/Bテストを企画・実行し、仮説の検証精度を高めたことがある。',
          category: 'agility'
        }
      ]
    },
    {
      id: 'team',
      title: 'チーム組成・連携力',
      description: '多様なメンバーと協働し、チームの力を最大化する能力',
      color: 'red',
      skills: [
        {
          id: 'Q13',
          ability: '多様性マネジメント',
          question: 'スキル・バックグラウンドの異なるメンバーを意図的に編成できる。',
          category: 'team'
        },
        {
          id: 'Q14',
          ability: '多様性マネジメント',
          question: 'チーム内の文化的ギャップを調整し、メンバーが安心して発言できる環境を整えた経験がある。',
          category: 'team'
        },
        {
          id: 'Q15',
          ability: 'コラボレーション',
          question: 'Shared Leadershipを実践し、メンバーがリーダーシップを分担できる場を作った。',
          category: 'team'
        },
        {
          id: 'Q16',
          ability: 'コラボレーション',
          question: 'クロスファンクショナルなプロジェクトで円滑に情報共有・同期を行った経験がある。',
          category: 'team'
        }
      ]
    },
    {
      id: 'technical',
      title: '技術・プロダクト開発力',
      description: 'プロトタイプ作成から技術実装まで、プロダクト開発を推進する能力',
      color: 'indigo',
      skills: [
        {
          id: 'Q17',
          ability: 'プロトタイピング',
          question: 'UX/UI設計ツールを使い、迅速にワイヤーフレームを作成したことがある。',
          category: 'technical'
        },
        {
          id: 'Q18',
          ability: 'プロトタイピング',
          question: 'コード/ノーコードでMVPを1週間以内にテスト可能な形で構築したことがある。',
          category: 'technical'
        },
        {
          id: 'Q19',
          ability: '技術実装・自動化',
          question: 'フルスタック開発スキルを活かし、プロトタイプを自律的にデプロイした経験がある。',
          category: 'technical'
        },
        {
          id: 'Q20',
          ability: '技術実装・自動化',
          question: 'DevinなどのAIエージェント連携を通じて、開発ワークフローを自動化したことがある。',
          category: 'technical'
        }
      ]
    },
    {
      id: 'resource',
      title: 'リソースマネジメント力',
      description: '資金調達から人材配置まで、限られたリソースを最適化する能力',
      color: 'orange',
      skills: [
        {
          id: 'Q21',
          ability: '資金調達・予算管理',
          question: '投資家との交渉経験があり、シード〜シリーズラウンドをサポートできる。',
          category: 'resource'
        },
        {
          id: 'Q22',
          ability: '資金調達・予算管理',
          question: 'プロジェクト予算を立案・管理し、コスト超過を未然に防いだ実績がある。',
          category: 'resource'
        },
        {
          id: 'Q23',
          ability: '人材配置最適化',
          question: 'タレントアセスメント結果を基に、最適チーム編成を行ったことがある。',
          category: 'resource'
        },
        {
          id: 'Q24',
          ability: '人材配置最適化',
          question: 'GAアルゴリズム等を用いて人員配置を再構成し、チームパフォーマンスを向上させた。',
          category: 'resource'
        }
      ]
    },
    {
      id: 'growth',
      title: '成長・拡張マネジメント力',
      description: 'Go-to-Market戦略から組織スケールまで、事業成長を牽引する能力',
      color: 'pink',
      skills: [
        {
          id: 'Q25',
          ability: 'Go-to-Market戦略',
          question: 'ターゲットチャネルを選定し、営業/マーケティングロードマップを策定した経験がある。',
          category: 'growth'
        },
        {
          id: 'Q26',
          ability: 'Go-to-Market戦略',
          question: '効果測定のためのKPIを定義し、チャネルごとのROIを分析したことがある。',
          category: 'growth'
        },
        {
          id: 'Q27',
          ability: '組織化・スケール',
          question: 'KPIツリーを設計し、組織の各階層に目標をブレイクダウンしたことがある。',
          category: 'growth'
        },
        {
          id: 'Q28',
          ability: '組織化・スケール',
          question: 'SRE体制やガバナンスモデルを構築し、サービス品質をスケールした経験がある。',
          category: 'growth'
        }
      ]
    }
  ];

  const scoreGuide = [
    { score: 1, label: '未経験', description: '該当する経験や知識がない', color: 'red' },
    { score: 2, label: '初級', description: '基本的な理解があり、指導があれば実行できる', color: 'orange' },
    { score: 3, label: '中級', description: '一人で実行でき、標準的な成果を出せる', color: 'yellow' },
    { score: 4, label: '上級', description: '高い成果を出し、他者に指導できる', color: 'green' },
    { score: 5, label: '専門家', description: '業界トップレベルの専門性を持ち、革新を生み出せる', color: 'blue' }
  ];

  const handleScoreChange = (questionId, score) => {
    setScores(prev => ({ ...prev, [questionId]: score }));
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const getCategoryScore = (categoryId) => {
    const categorySkills = skillCategories.find(cat => cat.id === categoryId)?.skills || [];
    const categoryScores = categorySkills.map(skill => scores[skill.id] || 0);
    const total = categoryScores.reduce((sum, score) => sum + score, 0);
    return categoryScores.length > 0 ? (total / categoryScores.length).toFixed(1) : '0.0';
  };

  const getTotalScore = () => {
    const allScores = Object.values(scores);
    return allScores.length > 0 ? (allScores.reduce((sum, score) => sum + score, 0) / allScores.length).toFixed(1) : '0.0';
  };

  const getScoreColor = (score) => {
    if (score >= 4) return 'text-green-600 dark:text-green-400';
    if (score >= 3) return 'text-yellow-600 dark:text-yellow-400';
    if (score >= 2) return 'text-orange-600 dark:text-orange-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
            <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          事業創出スキルアセスメント
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          7つのカテゴリ・28項目で事業創出に必要なスキルを詳細評価
        </p>
        
        {/* Score Guide Toggle */}
        <button
          onClick={() => setShowScoreGuide(!showScoreGuide)}
          className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors"
        >
          <Info className="h-4 w-4 mr-2" />
          評価基準を確認
        </button>
      </div>

      {/* Score Guide */}
      {showScoreGuide && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">評価基準</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {scoreGuide.map((guide) => (
              <div key={guide.score} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold bg-${guide.color}-500`}>
                  {guide.score}
                </div>
                <div className="font-medium text-gray-900 dark:text-white mb-1">{guide.label}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{guide.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Overall Score */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
          <BarChart3 className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {getTotalScore()}/5.0
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">総合スコア</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
          <Target className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {Object.values(scores).filter(score => score >= 4).length}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">上級以上スキル</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
          <Star className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {Object.keys(scores).length}/28
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">評価完了項目</div>
        </div>
      </div>

      {/* Skill Categories */}
      <div className="space-y-4">
        {skillCategories.map((category) => (
          <div key={category.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors rounded-xl"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg bg-${category.color}-100 dark:bg-${category.color}-900/20`}>
                  <TrendingUp className={`h-6 w-6 text-${category.color}-600 dark:text-${category.color}-400`} />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className={`text-lg font-bold ${getScoreColor(parseFloat(getCategoryScore(category.id)))}`}>
                  {getCategoryScore(category.id)}/5.0
                </div>
                {expandedCategories[category.id] ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </div>
            </button>

            {/* Category Skills */}
            {expandedCategories[category.id] && (
              <div className="px-6 pb-6 space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.id} className="border-l-4 border-gray-200 dark:border-gray-600 pl-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                            {skill.id}
                          </span>
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {skill.ability}
                          </span>
                        </div>
                        <p className="text-gray-900 dark:text-white font-medium mb-2">
                          {skill.question}
                        </p>
                      </div>
                      <div className={`ml-4 text-lg font-semibold ${getScoreColor(scores[skill.id] || 0)}`}>
                        {scores[skill.id] || 0}/5
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((score) => (
                        <button
                          key={score}
                          onClick={() => handleScoreChange(skill.id, score)}
                          className={`w-10 h-10 rounded-full border-2 transition-all duration-200 font-medium ${
                            scores[skill.id] >= score
                              ? `bg-${category.color}-500 border-${category.color}-500 text-white shadow-lg transform scale-110`
                              : `border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 hover:border-${category.color}-300 hover:text-${category.color}-400`
                          }`}
                        >
                          {score}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Progress Summary */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          カテゴリ別スコア概要
        </h3>
        <div className="space-y-4">
          {skillCategories.map((category) => (
            <div key={category.id} className="flex items-center space-x-4">
              <div className="w-32 text-sm text-gray-600 dark:text-gray-400">
                {category.title}
              </div>
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all duration-300 bg-${category.color}-500`}
                  style={{ width: `${(parseFloat(getCategoryScore(category.id)) / 5) * 100}%` }}
                />
              </div>
              <div className={`text-sm font-medium ${getScoreColor(parseFloat(getCategoryScore(category.id)))}`}>
                {getCategoryScore(category.id)}/5.0
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillAssessment;