import React, { useState, useEffect, useRef } from 'react';
// vanilla-extract/css はビルド時にCSSファイルを生成するライブラリのため、
// このCanvas環境で直接実行することはできません。
// ここでは、vanilla-extractのAPIで定義されるであろうCSSを直接<style>タグ内に記述することで、
// その動作をシミュレートしています。

// Keyframes (vanilla-extractのkeyframes関数を模倣)
const wave = 'waveAnimationKeyframes'; // 実際のvanilla-extractではユニークなハッシュが生成されます
const floatAndFade = 'floatAndFadeKeyframes'; // 同上

// Component Styles (vanilla-extractのstyle関数を模倣し、クラス名として使用)

const headerNav = 'headerNav';
const headerLogo = 'headerLogo';
const menuToggle = 'menuToggle';
const navLinks = 'navLinks';
const navLinkItem = 'navLinkItem';

const heroHeader = 'heroHeader';
const heroTitle = 'heroTitle';
const heroSubtitle = 'heroSubtitle';
const heroButton = 'heroButton';
const waveAnimation = 'waveAnimation';
const waveAnimation2 = 'waveAnimation2';
const particlesContainer = 'particlesContainer';
const particle = 'particle';

const sectionTitleStyle = 'sectionTitleStyle';
const sectionWrapper = 'sectionWrapper';
const sectionContentWrapper = 'sectionContentWrapper';

const aboutSectionContent = 'aboutSectionContent';
const eventDetailsBg = 'eventDetailsBg';
const artistSectionContent = 'artistSectionContent';
const venueAccessSectionContent = 'venueAccessSectionContent';
const ticketInfoBg = 'ticketInfoBg';
const notesBg = 'notesBg';
const socialMediaSectionContent = 'socialMediaSectionContent';

const textGray700 = 'textGray700';
const textCyan700Bold = 'textCyan700Bold';
const gridContainer = 'gridContainer';
const detailItem = 'detailItem';
const detailIcon = 'detailIcon';
const detailTextBold = 'detailTextBold';
const detailText = 'detailText';

const artistCard = 'artistCard';
const artistCardTitle = 'artistCardTitle';
const artistCardDescription = 'artistCardDescription';
const artistMoreText = 'artistMoreText';

const venueMapContainer = 'venueMapContainer';
const venueMapIframe = 'venueMapIframe';
const venueAccessTitle = 'venueAccessTitle';
const venueAccessList = 'venueAccessList';

const ticketInfoSubtitle = 'ticketInfoSubtitle';
const ticketInfoList = 'ticketInfoList';
const ticketInfoLink = 'ticketInfoLink';

const socialMediaLink = 'socialMediaLink';
const socialMediaIcon = 'socialMediaIcon';
const socialMediaHashtag = 'socialMediaHashtag';

const footerStyle = 'footerStyle';


// --- React Components ---

// Header Component: 固定ヘッダーとハンバーガーメニューを管理
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // メニュー開閉の状態
  const headerRef = useRef(null); // ヘッダー要素への参照

  // ハンバーガーメニューの開閉を切り替える
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // セクションへのスムーズスクロール処理
  const scrollToSection = (id) => {
    const targetElement = document.getElementById(id); // スクロール先の要素を取得
    if (targetElement && headerRef.current) { // headerRef.current が存在することを確認
      const headerOffset = headerRef.current.offsetHeight; // ヘッダーの高さを取得
      // セクションタイトルがヘッダーの下に適切に表示されるように、追加のオフセットを設定
      const extraScrollPadding = 20; // 20pxの追加余白 (必要に応じて調整)

      const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset - extraScrollPadding;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // スムーズスクロール
      });
      setIsMenuOpen(false); // リンククリック後にメニューを閉じる
    }
  };

  return (
    <nav ref={headerRef} className={headerNav}>
      {/* サイトロゴ/タイトル - クリックでページトップへ */}
      <a href="#top" onClick={(e) => { e.preventDefault(); scrollToSection('top'); }} className={headerLogo}>
        夏の! <br/> 高専FES!!
      </a>

      {/* ハンバーガーメニューアイコン (モバイル時のみ表示、メニューが閉じている場合) */}
      <div className="md:hidden">
        {!isMenuOpen && (
          <div className={menuToggle} onClick={toggleMenu}>
            ☰
          </div>
        )}
      </div>

      {/* ナビゲーションリンク - デスクトップでは常に表示、モバイルでは出し入れ */}
      <div className={`${navLinks} ${isMenuOpen ? 'active' : ''}`}>
        {/* クローズボタン (モバイルメニューが開いている場合のみ) */}
        {isMenuOpen && (
          <div className="md:hidden text-right w-full mb-4">
            <button onClick={toggleMenu} className={menuToggle}>✕</button>
          </div>
        )}
        <a href="#about-section" onClick={(e) => { e.preventDefault(); scrollToSection('about-section'); }} className={navLinkItem}>イベント概要</a>
        <a href="#details-section" onClick={(e) => { e.preventDefault(); scrollToSection('details-section'); }} className={navLinkItem}>開催詳細</a>
        <a href="#artist-section" onClick={(e) => { e.preventDefault(); scrollToSection('artist-section'); }} className={navLinkItem}>アーティスト</a>
        <a href="#venue-section" onClick={(e) => { e.preventDefault(); scrollToSection('venue-section'); }} className={navLinkItem}>会場アクセス</a>
        <a href="#ticket-info" onClick={(e) => { e.preventDefault(); scrollToSection('ticket-info'); }} className={navLinkItem}>チケット</a>
        <a href="#notes-section" onClick={(e) => { e.preventDefault(); scrollToSection('notes-section'); }} className={navLinkItem}>注意事項</a>
      </div>
    </nav>
  );
};

// Hero Section Component: イベントのメインビジュアルとキャッチコピー
const HeroSection = () => (
  <header id="top" className={`${heroHeader}`}>
    {/* 波のアニメーション要素 */}
    <div className={`${waveAnimation} absolute bottom-0 left-0 w-full h-1/3 z-0`}></div>
    <div className={`${waveAnimation} ${waveAnimation2} absolute bottom-0 left-0 w-full h-1/3 z-0 opacity-75`}></div>

    {/* 光のパーティクルアニメーション要素 */}
    <div className={`${particlesContainer}`}>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`${particle}`}
          style={{
            width: `${Math.random() * 5 + 2}px`, // 2pxから7pxのランダムなサイズ
            height: `${Math.random() * 5 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`, // ランダムな開始遅延
            animationDuration: `${Math.random() * 10 + 5}s`, // 5sから15sのランダムな持続時間
          }}
        ></div>
      ))}
    </div>

    {/* コンテンツをz-indexで前面に配置 */}
    <div className="relative z-10">
      <h1 className={heroTitle}>
        夏の! <br/> 高専FES!!
      </h1>
      <p className={heroSubtitle}>
        🌊 この夏、最高の思い出を！熱狂の波に乗れ！ 🌊
      </p>
      <a href="#ticket-info" className={heroButton}>
        チケットをゲット！
      </a>
    </div>
  </header>
);

// Section Title Component: 統一されたセクションタイトルスタイル
const SectionTitle = ({ children }) => (
  <h2 className={sectionTitleStyle}>
    {children}
  </h2>
);

// About Section Component: イベントの概要説明
const AboutSection = () => (
  <section id="about-section" className={sectionWrapper}>
    <SectionTitle>イベント概要</SectionTitle>
    <div className={`${sectionContentWrapper} ${aboutSectionContent}`}>
      <p className={textGray700}>
        鈴鹿高専が贈る、今年初めての夏のライブイベント「夏の! 高専FES!!」の開催が決定！<br />
        この夏を最高に盛り上げるアーティストたちが大集結します。特に、今年秋に開催される高専祭のライブにも多数の出演者が参加しており、一足先に彼らの熱いパフォーマンスを体感できるチャンスです！<br />
        <span className={textCyan700Bold}>大音量のサウンド、まばゆい照明、そして会場を埋め尽くす観客の熱気！</span> 音楽と夏の最高のコラボレーションを全身で体験しに来てください！
      </p>
    </div>
  </section>
);

// Event Details Section Component: 開催日時、場所、チケット料金などの詳細
const EventDetailsSection = () => (
  <section id="details-section" className={sectionWrapper}>
    <SectionTitle>開催詳細</SectionTitle>
    <div className={`${sectionContentWrapper} ${eventDetailsBg}`}>
      <div className={gridContainer}>
        <div className={detailItem}>
          <span className={detailIcon}>📅</span>
          <div>
            <p className={detailTextBold}>日程:</p>
            <p className={detailText}>2025年8月24日(土)</p>
          </div>
        </div>
        <div className={detailItem}>
          <span className={detailIcon}>⏰</span>
          <div>
            <p className={detailTextBold}>時間:</p>
            <p className={detailText}>開場 14:00 / 開演 15:00 / 終演 20:00 (予定)</p>
          </div>
        </div>
        <div className={detailItem}>
          <span className={detailIcon}>📍</span>
          <div>
            <p className={detailTextBold}>会場:</p>
            <p className={detailText}>SUZUKA Sound Stage</p>
          </div>
        </div>
        <div className={detailItem}>
          <span className={detailIcon}>🎫</span>
          <div>
            <p className={detailTextBold}>チケット:</p>
            <p className={detailText}>前売り: ¥7,500 / 当日: ¥8,500 (ドリンク代別途 ¥600)</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Artist Card Component: 各アーティストの紹介カード
const ArtistCard = ({ name, description }) => (
  <div className={artistCard}>
    <h3 className={artistCardTitle}>{name}</h3>
    <p className={artistCardDescription}>{description}</p>
  </div>
);

// Artist Lineup Section Component: 出演アーティスト一覧
const ArtistSection = () => (
  <section id="artist-section" className={sectionWrapper}>
    <SectionTitle>🎤 出演アーティスト (第一弾発表！)</SectionTitle>
    <div className={`${sectionContentWrapper} ${artistSectionContent}`}>
      <div className={`${gridContainer} lg:grid-cols-3`}> {/* Tailwind class for specific breakpoint */}
        <ArtistCard name="🌊 サマーウェーブス" description="夏にぴったりの、疾走感あふれるサウンドが魅力のバンド！" />
        <ArtistCard name="🌅 夕焼けメロディ" description="心地よい歌声で、夏の夕暮れを彩るシンガーソングライター。" />
        <ArtistCard name="🔥 ビーチロッカーズ" description="会場を熱狂させること間違いなし！ パワフルなパフォーマンスに注目！" />
        <ArtistCard name="🎶 シーサイド・ハーモニー" description="アコースティックな音色と美しいハーモニーが、夏の夜に心地よいグルーヴを奏でる。" />
        <ArtistCard name="✨ スターライト・ビーツ" description="光と音の融合！幻想的なステージ演出で、観客を異次元の空間へと誘う。" />
        <ArtistCard name="☀️ サンシャイン・グルーヴ" description="全身で感じるファンキーなリズムとソウルフルな歌声で、会場はダンスフロアに！" />
      </div>
      <p className={artistMoreText}>...and more! (追加アーティストは随時発表！)</p>
    </div>
  </section>
);

// Venue Access Section Component: 会場情報とアクセス方法
const VenueAccessSection = () => (
  <section id="venue-section" className={sectionWrapper}>
    <SectionTitle>📍 会場アクセス</SectionTitle>
    <div className={`${sectionContentWrapper} ${venueAccessSectionContent}`}>
      <div className={textGray700}>
        <p className="mb-4">
          **会場:** **SUZUKA Sound Stage**<br />
          〒510-0256 三重県鈴鹿市磯山１丁目９−８
        </p>
        <div className={venueMapContainer}>
          {/* Google Maps Embed Code */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.832207903498!2d136.5658603152146!3d34.8690949803975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003ff5421c97a79%3A0x603a1114d5e0a0a!2sSUZUKA%20Sound%20Stage!5e0!3m2!1sja!2sjp!4v1678912345678!5m2!1sja!2sjp" // Google Mapsの埋め込みURLをここに指定
            width="600"
            height="450"
            className={venueMapIframe}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <h3 className={venueAccessTitle}>公共交通機関をご利用の場合</h3>
        <ul className={venueAccessList}>
          <li>**近鉄 白子駅** からシャトルバス運行予定 (詳細は後日発表)</li>
          <li>近鉄 白子駅よりタクシーで約20分</li>
          <li>イベント専用駐車場は限りがございます。公共交通機関のご利用をおすすめします。</li>
        </ul>
      </div>
    </div>
  </section>
);

// Ticket Information Section Component: チケット販売情報
const TicketInfoSection = () => (
  <section id="ticket-info" className={sectionWrapper}>
    <SectionTitle>🎟️ チケット情報</SectionTitle>
    <div className={`${sectionContentWrapper} ${ticketInfoBg}`}>
      <div className="mb-8">
        <h3 className={ticketInfoSubtitle}>先行抽選販売 (オフィシャル最速先行)</h3>
        <ul className={ticketInfoList}>
          <li><span className="font-semibold">受付期間:</span> 2025年5月30日(金) 12:00 〜 2025年6月8日(日) 23:59</li>
          <li><span className="font-semibold">当落発表:</span> 2025年6月12日(木) 18:00 (予定)</li>
          <li><span className="font-semibold">受付URL:</span> <a href="#" className={ticketInfoLink}>チケット販売サイトはこちら</a></li>
          <li>※お一人様4枚までお申し込みいただけます。</li>
          <li>※未就学児童入場不可。小学生以上はチケットが必要です。</li>
        </ul>
      </div>
      <div>
        <h3 className={ticketInfoSubtitle}>一般販売</h3>
        <ul className={ticketInfoList}>
          <li><span className="font-semibold">販売開始:</span> 2025年7月1日(火) 10:00 〜</li>
          <li><span className="font-semibold">販売プレイガイド:</span> 各種プレイガイドにて販売予定 (詳細は後日発表)</li>
        </ul>
      </div>
    </div>
  </section>
);

// Important Notes Section Component: イベント参加における注意事項
const NotesSection = () => (
  <section id="notes-section" className={sectionWrapper}>
    <SectionTitle>💡 注意事項</SectionTitle>
    <div className={`${sectionContentWrapper} ${notesBg}`}>
      <ul className={ticketInfoList}> {/* Reusing ticketInfoList for general lists */}
        <li>会場内での飲食物の持ち込みはご遠慮ください。</li>
        <li>イベント専用駐車場は限りがございます。公共交通機関をご利用ください。</li>
        <li>その他、イベントに関する詳細は公式サイトにて随時更新いたします。</li>
        <li>主催者都合によるイベント中止の場合を除き、チケットの払い戻しはいたしません。</li>
        <li>会場内での喫煙は指定の場所でお願いします。</li>
        <li>モッシュ、ダイブ等の危険行為は固く禁止いたします。係員の指示に従い、安全にお楽しみください。</li>
      </ul>
    </div>
  </section>
);

// Social Media Section Component: 公式サイトやSNSへのリンク
const SocialMediaSection = () => (
  <section id="social-section" className={sectionWrapper}>
    <SectionTitle>📢 最新情報はこちら！</SectionTitle>
    <div className={`${sectionContentWrapper} ${socialMediaSectionContent}`}>
      <div className="flex flex-wrap justify-center gap-6 text-lg">
        <a href="#" className={socialMediaLink}>
          <span className={socialMediaIcon}>🌐</span> 公式サイト
        </a>
        <a href="#" className={socialMediaLink}>
          <span className={socialMediaIcon}>✖️</span> 公式X (旧Twitter)
        </a>
        <a href="#" className={socialMediaLink}>
          <span className={socialMediaIcon}>📸</span> 公式Instagram
        </a>
      </div>
      <p className={`${textGray700} mt-6`}>
        ハッシュタグ <span className={socialMediaHashtag}>#高専FES</span> をつけて、今年の夏を一緒に盛り上げよう！
      </p>
    </div>
  </section>
);

// Footer Component: フッター情報
const Footer = () => (
  <footer className={footerStyle}>
    <p>© 2025 夏の! 高専FES!!. All Rights Reserved.</p>
  </footer>
);

// Main App Component: 全てのコンポーネントを統合
export default function App() {
  // body要素にグローバルスタイルを適用 (Reactのライフサイクルに合わせて)
  // vanilla-extractのglobalStyle関数を模倣
  const globalCss = `
    body {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(to bottom right, #81D4FA, #4FC3F7, #29B6F6); /* 青系のグラデーション */
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding-top: 4rem; /* ヘッダーの高さに合わせて調整 */
    }

    /* Hero Section Animations */
    @keyframes ${wave} {
        0% { transform: translateX(-50%) translateY(0%) scale(2, 1.5); }
        50% { transform: translateX(0%) translateY(5%) scale(2, 1.5); }
        100% { transform: translateX(-50%) translateY(0%) scale(2, 1.5); }
    }

    @keyframes ${floatAndFade} {
        0% {
            transform: translateY(0) translateX(0) scale(0.5);
            opacity: 0;
        }
        25% {
            opacity: 0.8;
        }
        50% {
            transform: translateY(-50px) translateX(20px) scale(1);
            opacity: 1;
        }
        75% {
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100px) translateX(-10px) scale(0.5);
            opacity: 0;
        }
    }
  `;

  // vanilla-extractのstyle関数で生成されるCSSを模倣
  const componentCss = `
    .${headerNav} {
      position: fixed; top: 0; left: 0; width: 100%; background-color: rgba(255, 255, 255, 0.98); box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); z-index: 1000; padding: 0.5rem 2rem; display: flex; justify-content: space-between; align-items: center; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; /* paddingを低くして高さを低くする */
    }
    @media screen and (min-width: 768px) {
      .${headerNav} {
        flex-direction: row; align-items: center;
      }
    }
    .${headerLogo} {
      font-size: 1.75rem; font-weight: bold; color: #06B6D4; white-space: nowrap; /* font-sizeを小さくする */
    }
    .${menuToggle} {
      display: block; cursor: pointer; font-size: 1.8rem; color: #06B6D4; padding: 0.5rem;
    }
    @media screen and (min-width: 768px) {
      .${menuToggle} {
        display: none;
      }
    }
    .${navLinks} {
      display: none; position: absolute; top: 100%; left: 0; width: 100%; background-color: rgba(255, 255, 255, 0.98); box-shadow: 0 5px 15px rgba(0,0,0,0.1); flex-direction: column; padding: 1rem 2rem; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; gap: 0;
    }
    .${navLinks}.active {
      display: flex;
    }
    @media screen and (min-width: 768px) {
      .${navLinks} {
        display: flex !important; position: static; flex-direction: row; box-shadow: none; padding: 0; gap: 1.5rem; border-radius: 0; justify-content: flex-end; /* gapを大きくする */
      }
    }
    .${navLinkItem} {
      display: block; color: #4B5563; font-weight: 600; padding: 1rem 0; /* paddingを大きくする */ text-align: center; border-top: 1px solid #eee; white-space: nowrap; transition: color 0.2s ease-in-out;
    }
    .${navLinkItem}:hover {
      color: #0891B2;
    }
    .${navLinkItem}:first-child {
      border-top: none;
    }
    @media screen and (min-width: 768px) {
      .${navLinkItem} {
        display: inline-block; border-top: none !important; padding: 0.75rem 0; /* デスクトップのpaddingは元に戻す */
      }
    }
    .${heroHeader} {
      text-align: center; margin-bottom: 2.5rem; padding: 1.5rem; border-radius: 0.75rem; background: linear-gradient(to bottom right, #22D3EE, #3B82F6); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); position: relative; overflow: hidden;
    }
    .${heroTitle} {
      font-size: 3rem; font-weight: extrabold; color: #fff; margin-bottom: 1rem; line-height: 1.25;
    }
    @media screen and (min-width: 768px) {
      .${heroTitle} {
        font-size: 3.75rem;
      }
    }
    .${heroSubtitle} {
      font-size: 1.25rem; color: #fff; font-weight: semibold; margin-bottom: 1.5rem;
    }
    @media screen and (min-width: 768px) {
      .${heroSubtitle} {
        font-size: 1.5rem;
      }
    }
    .${heroButton} {
      display: inline-block; background: linear-gradient(to right, #2DD4BF, #06B6D4); color: #fff; padding: 0.75rem 1.5rem; border-radius: 9999px; font-weight: bold; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }
    .${heroButton}:hover {
      transform: scale(1.05);
    }
    .${waveAnimation} {
      background: linear-gradient(to right, rgba(0,255,255,0.3), rgba(0,191,255,0.3)); border-radius: 50%; animation: ${wave} 15s linear infinite;
    }
    .${waveAnimation2} {
      background: linear-gradient(to right, rgba(0,255,255,0.2), rgba(0,191,255,0.2)); animation: ${wave} 20s linear infinite reverse;
    }
    .${particlesContainer} {
      position: absolute; inset: 0; z-index: 0; pointer-events: none;
    }
    .${particle} {
      position: absolute; background-color: #fff; border-radius: 50%; opacity: 0; animation: ${floatAndFade} 10s infinite ease-in-out; box-shadow: 0 0 5px rgba(255,255,255,0.8);
    }
    .${sectionTitleStyle} {
      font-size: 1.875rem; font-weight: extrabold; color: #fff; padding: 1rem 1.5rem; position: relative; text-align: center; background: linear-gradient(to right, #06B6D4, #2563EB); border-top-left-radius: 0.75rem; border-top-right-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    .${sectionWrapper} {
      margin-bottom: 2.5rem; margin-top: 2rem;
    }
    .${sectionContentWrapper} {
      padding: 1.5rem; background-color: #fff; border-bottom-left-radius: 0.75rem; border-bottom-right-radius: 0.75rem; box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    }
    .${aboutSectionContent} {
      background-color: #fff;
    }
    .${eventDetailsBg} {
      background-color: #DBEAFE;
    }
    .${artistSectionContent} {
      background-color: #fff;
    }
    .${venueAccessSectionContent} {
      background-color: #DBEAFE;
    }
    .${ticketInfoBg} {
      background-color: #D1FAE5;
    }
    .${notesBg} {
      background-color: #DBEAFE;
    }
    .${socialMediaSectionContent} {
      background-color: #fff;
    }
    .${textGray700} {
      color: #4B5563; line-height: 1.625; font-size: 1.125rem; text-align: center;
    }
    .${textCyan700Bold} {
      font-weight: bold; color: #0891B2;
    }
    .${gridContainer} {
      display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 1.5rem; font-size: 1.125rem;
    }
    @media screen and (min-width: 768px) {
      .${gridContainer} {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
    .${detailItem} {
      display: flex; align-items: center; padding: 1rem; background-color: #fff; border-radius: 0.5rem; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    .${detailIcon} {
      color: #06B6D4; font-size: 1.5rem; margin-right: 1rem;
    }
    .${detailTextBold} {
      font-weight: semibold; color: #374151;
    }
    .${detailText} {
      color: #4B5563;
    }
    .${artistCard} {
      background-color: #F9FAFB; border-radius: 0.75rem; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); transition: transform 0.2s ease-in-out;
    }
    .${artistCard}:hover {
      transform: scale(1.05);
    }
    .${artistCardTitle} {
      font-size: 1.25rem; font-weight: bold; color: #111827; margin-bottom: 0.5rem;
    }
    .${artistCardDescription} {
      color: #4B5563;
    }
    .${artistMoreText} {
      text-align: center; color: #4B5563; margin-top: 1.5rem; font-size: 0.875rem;
    }
    .${venueMapContainer} {
      position: relative; width: 100%; max-width: 32rem; margin: 0 auto; margin-bottom: 1.5rem; padding-bottom: 56.25%;
    }
    .${venueMapIframe} {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    .${venueAccessTitle} {
      font-weight: bold; color: #111827; margin-bottom: 0.5rem;
    }
    .${venueAccessList} {
      list-style-type: disc; list-style-position: inside; text-align: left; margin: 0 auto; max-width: 28rem;
    }
    .${ticketInfoSubtitle} {
      font-size: 1.5rem; font-weight: bold; color: #111827; margin-bottom: 1rem; text-align: center;
    }
    .${ticketInfoList} {
      list-style-type: disc; list-style-position: inside; color: #4B5563; font-size: 1.125rem;
    }
    .${ticketInfoList} > li {
      margin-bottom: 0.5rem;
    }
    .${ticketInfoLink} {
      color: #2563EB;
    }
    .${ticketInfoLink}:hover {
      text-decoration: underline;
    }
    .${socialMediaLink} {
      display: flex; align-items: center; background: linear-gradient(to right, #2DD4BF, #06B6D4); color: #fff; padding: 0.75rem 1.5rem; border-radius: 9999px; font-weight: bold; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); transition: transform 0.2s duration-200;
    }
    .${socialMediaLink}:hover {
      transform: scale(1.05);
    }
    .${socialMediaIcon} {
      font-size: 1.5rem; margin-right: 0.5rem;
    }
    .${socialMediaHashtag} {
      font-weight: bold; color: #06B6D4;
    }
    .${footerStyle} {
      text-align: center; color: #4B5563; margin-top: 2.5rem; font-size: 0.875rem;
    }
  `;

  return (
    <>
      {/* Vanilla Extract CSSの出力シミュレーション */}
      {/* 注意: これはvanilla-extractの実際のビルドプロセスをシミュレートしたものです。 */}
      {/* 通常の開発では、vanilla-extractはビルド時にCSSファイルを生成します。 */}
      {/* この環境ではビルドプロセスがないため、CSSを直接埋め込んでいます。 */}
      <style>{globalCss}</style>
      <style>{componentCss}</style>

      <Header /> {/* ヘッダーコンポーネント */}
      <div className="container max-w-4xl bg-white bg-opacity-95 rounded-xl shadow-2xl overflow-hidden p-8 m-4">
        {/* 各セクションコンポーネント */}
        <HeroSection />
        <AboutSection />
        <EventDetailsSection />
        <ArtistSection />
        <VenueAccessSection />
        <TicketInfoSection />
        <NotesSection />
        <SocialMediaSection />
        <Footer /> {/* フッターコンポーネント */}
      </div>
    </>
  );
}
