import React, { useState } from 'react';
import {
  Gamepad2,
  Trophy,
  ExternalLink,
  Copy,
  Check,
  Share2,
  Flame,
  Code2,
  Heart,
  Smile,
  Moon,
  Utensils,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  Zap,
  Coffee,
  RotateCcw
} from 'lucide-react';

// Path to generated avatar
const AVATAR_IMG = '/src/assets/images/brast_gamer_avatar_1794456109013.jpg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedTikTok, setCopiedTikTok] = useState(false);

  // Pusrank Interactive Simulator
  const rankTiers = [
    { name: 'Bronze', color: 'from-amber-700 to-amber-900', textColor: 'text-amber-400', pointsReq: 0 },
    { name: 'Silver', color: 'from-slate-400 to-slate-600', textColor: 'text-slate-300', pointsReq: 100 },
    { name: 'Gold', color: 'from-yellow-400 to-amber-600', textColor: 'text-yellow-400', pointsReq: 250 },
    { name: 'Platinum', color: 'from-cyan-400 to-blue-600', textColor: 'text-cyan-400', pointsReq: 450 },
    { name: 'Diamond', color: 'from-purple-400 to-indigo-600', textColor: 'text-purple-400', pointsReq: 700 },
    { name: 'Master', color: 'from-pink-500 to-purple-700', textColor: 'text-pink-400', pointsReq: 1000 },
    { name: 'Mythic / Challenger', color: 'from-orange-500 via-amber-400 to-purple-600', textColor: 'text-orange-400', pointsReq: 1400 },
  ];

  const [rankPoints, setRankPoints] = useState(760); // Starts at Diamond
  const [matchesPlayed, setMatchesPlayed] = useState(48);
  const [matchWins, setMatchWins] = useState(36);
  const [lastMatchResult, setLastMatchResult] = useState<string | null>(null);

  // Determine current tier
  const currentTier = [...rankTiers].reverse().find(t => rankPoints >= t.pointsReq) || rankTiers[0];
  const nextTierIndex = rankTiers.findIndex(t => t.name === currentTier.name) + 1;
  const nextTier = nextTierIndex < rankTiers.length ? rankTiers[nextTierIndex] : null;

  const handlePushRank = () => {
    // 75% win rate simulation for brast
    const won = Math.random() < 0.75;
    const gained = won ? Math.floor(Math.random() * 15) + 20 : -(Math.floor(Math.random() * 10) + 10);
    const newPoints = Math.max(0, rankPoints + gained);
    
    setRankPoints(newPoints);
    setMatchesPlayed(prev => prev + 1);
    if (won) setMatchWins(prev => prev + 1);
    setLastMatchResult(won ? `+${gained} Poin (Victory! ⭐)` : `${gained} Poin (Defeat)` );
  };

  const handleResetRank = () => {
    setRankPoints(760);
    setMatchesPlayed(48);
    setMatchWins(36);
    setLastMatchResult(null);
  };

  // Interactive Pou Simulator for "dev pou" showcase
  const [pouStats, setPouStats] = useState({
    hunger: 80,
    fun: 85,
    energy: 90,
    cleanliness: 75,
  });
  const [pouReaction, setPouReaction] = useState<'normal' | 'happy' | 'eating' | 'playing' | 'sleeping' | 'bathing'>('normal');
  const [pouLog, setPouLog] = useState<string>('Pou siap diajak berinteraksi.');

  const updatePouStat = (stat: keyof typeof pouStats, delta: number) => {
    setPouStats(prev => ({
      ...prev,
      [stat]: Math.min(100, Math.max(0, prev[stat] + delta))
    }));
  };

  const handleFeedPou = () => {
    updatePouStat('hunger', 20);
    updatePouStat('cleanliness', -5);
    setPouReaction('eating');
    setPouLog('Yum! Pou memakan camilan lezat.');
    setTimeout(() => setPouReaction('normal'), 1200);
  };

  const handlePlayPou = () => {
    updatePouStat('fun', 25);
    updatePouStat('energy', -15);
    updatePouStat('cleanliness', -10);
    setPouReaction('playing');
    setPouLog('Seru! Pou bermain bola bersama Anda.');
    setTimeout(() => setPouReaction('normal'), 1200);
  };

  const handleCleanPou = () => {
    updatePouStat('cleanliness', 30);
    setPouReaction('bathing');
    setPouLog('Segar! Pou sudah bersih dan wangi.');
    setTimeout(() => setPouReaction('normal'), 1200);
  };

  const handleSleepPou = () => {
    updatePouStat('energy', 35);
    updatePouStat('hunger', -10);
    setPouReaction('sleeping');
    setPouLog('Zzz... Pou istirahat memulihkan energi.');
    setTimeout(() => setPouReaction('normal'), 1400);
  };

  // Public Links
  const tiktokUrl = 'https://vt.tiktok.com/ZSpu4W8cf/';

  const copyToClipboard = (text: string, type: 'tiktok' | 'share') => {
    navigator.clipboard.writeText(text);
    if (type === 'tiktok') {
      setCopiedTikTok(true);
      setTimeout(() => setCopiedTikTok(false), 2000);
    } else {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0914] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Top Bar Navigation (Strict 3-zone contract) */}
      <header className="sticky top-0 z-50 bg-[#0b0914]/90 backdrop-blur-md border-b border-[#241c3d]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single element brand wordmark */}
          <a href="#pembuka" className="text-xl font-black tracking-tight text-white flex items-center gap-2 group whitespace-nowrap shrink-0">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center text-white text-sm font-black shadow-md shadow-purple-900/40">
              b
            </span>
            <span className="font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-orange-400 transition-all">
              brast
            </span>
          </a>

          {/* Zone 2: 4 single-line concise navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#pembuka" className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0">
              Pembuka
            </a>
            <a href="#tentang" className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0">
              Tentang Saya
            </a>
            <a href="#karya" className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0">
              Karya
            </a>
            <a href="#tautan" className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0">
              Tautan Publik
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="#tautan"
              className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-orange-500 rounded-lg hover:from-purple-500 hover:to-orange-400 shadow-md shadow-purple-950/50 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Hubungi / Tautan</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-[#181329] border border-[#2b2149] focus-visible:outline-none"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#241c3d] bg-[#100c21] px-4 pt-2 pb-4 space-y-1">
            <a
              href="#pembuka"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-[#1f1738] hover:text-orange-400"
            >
              Pembuka
            </a>
            <a
              href="#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-[#1f1738] hover:text-purple-400"
            >
              Tentang Saya
            </a>
            <a
              href="#karya"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-[#1f1738] hover:text-orange-400"
            >
              Karya
            </a>
            <a
              href="#tautan"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-[#1f1738] hover:text-purple-400"
            >
              Tautan Publik
            </a>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* ========================================================
            BAGIAN PEMBUKA (HERO)
           ======================================================== */}
        <section id="pembuka" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
          {/* Subtle background ambient lights (Ungu & Oren) */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-900/20 blur-[130px] rounded-full pointer-events-none -z-10" />
          <div className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-orange-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Typographic Hierarchy */}
              <div className="lg:col-span-7 space-y-6">
                {/* Clean unboxed metadata separator */}
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  <span className="text-purple-400">Personal Portfolio</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-orange-400">Game & Pusrank</span>
                  <span aria-hidden="true">·</span>
                  <span>Indonesia</span>
                </div>

                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                    Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-orange-400">brast</span>.
                  </h1>
                  <p className="text-xl sm:text-2xl font-medium text-slate-300">
                    Fokus di dunia <span className="text-orange-400 font-semibold">game</span>, dedikasi penuh di <span className="text-purple-400 font-semibold">pusrank</span>.
                  </p>
                </div>

                <p className="text-base text-slate-300 leading-relaxed max-w-xl">
                  Selamat datang di website personal saya. Di sini saya membagikan profil diri, fokus minat di ranah gaming kompetitif, dedikasi dalam menembus peringkat, serta karya pengembangan game independen bertajuk <strong className="text-white font-semibold">dev pou</strong>.
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#karya"
                    className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl shadow-lg shadow-purple-950/60 transition-all flex items-center gap-2"
                  >
                    <Code2 className="w-4 h-4 text-orange-300" />
                    <span>Lihat Karya (dev pou)</span>
                  </a>
                  <a
                    href="#tautan"
                    className="px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-[#171329] hover:bg-[#201a3b] border border-[#2e2452] hover:border-orange-500/50 rounded-xl transition-all flex items-center gap-2"
                  >
                    <span>Tautan Publik</span>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </a>
                </div>

                {/* Quick Data Indicators (Clean, no pill sandwiches) */}
                <div className="pt-6 border-t border-[#1f1836] grid grid-cols-3 gap-4 text-left">
                  <div>
                    <span className="block text-xs text-slate-400">Fokus Utama</span>
                    <span className="text-base font-bold text-white flex items-center gap-1.5 mt-0.5">
                      <Gamepad2 className="w-4 h-4 text-orange-400" />
                      game
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Bio Singkat</span>
                    <span className="text-base font-bold text-white flex items-center gap-1.5 mt-0.5">
                      <Flame className="w-4 h-4 text-purple-400" />
                      pusrank
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Karya Utama</span>
                    <span className="text-base font-bold text-white flex items-center gap-1.5 mt-0.5">
                      <Code2 className="w-4 h-4 text-orange-400" />
                      dev pou
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Anchor */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md">
                  {/* Glowing backdrop framing */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-orange-500 opacity-30 blur-lg" />
                  
                  <div className="relative rounded-2xl overflow-hidden bg-[#141026] border border-[#312557] shadow-2xl">
                    {/* Media Slot: Avatar with graceful fallback */}
                    <div className="aspect-square w-full relative bg-[#17132e] overflow-hidden">
                      <img
                        src={AVATAR_IMG}
                        alt="Potret brast gamer dan developer"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {/* Gradient scrim for legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b1c] via-transparent to-transparent opacity-80" />
                      
                      {/* Overlay card info */}
                      <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#110e24]/90 backdrop-blur-md border border-[#2c224e] flex items-center justify-between">
                        <div>
                          <p className="text-sm font-bold text-white">brast</p>
                          <p className="text-xs text-slate-400">Gamer & Game Developer</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold text-orange-400 bg-orange-950/60 border border-orange-500/30 px-2 py-0.5 rounded">
                            Pusrank Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            BAGIAN TENTANG SAYA
           ======================================================== */}
        <section id="tentang" className="py-20 bg-[#0e0b1a] border-t border-[#1d1633] relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-2xl mb-12">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
                <span>Profil Diri</span>
                <span aria-hidden="true">·</span>
                <span>Tentang Saya</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Mengenal <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">brast</span> Lebih Dekat
              </h2>
              <p className="text-slate-300 mt-3 text-base">
                Kombinasi antara dedikasi kompetitif di arena game dan rasa ingin tahu mendalam terhadap mekanik pembuatan game.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left description cards */}
              <div className="lg:col-span-7 space-y-6">
                {/* Card Fokus: Game */}
                <div className="p-6 rounded-2xl bg-[#141026] border border-[#2b2149] hover:border-purple-500/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center shrink-0 text-purple-400">
                      <Gamepad2 className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">Fokus: Game</h3>
                        <span className="text-xs text-purple-300 font-mono-nums">Pilar 01</span>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Bagi saya, game lebih dari sekadar pengisi waktu luang. Game adalah ruang eksplorasi strategi, refleks motorik, adaptasi terhadap sistem kompetitif, dan pengalaman interaktif yang menantang.
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Fokus saya mencakup pemahaman mekanik mikro & makro dalam game, analisis meta pembaruan berkala, serta bagaimana sebuah game dirancang agar adiktif, adil, dan memuaskan saat dimainkan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Bio: Pusrank */}
                <div className="p-6 rounded-2xl bg-[#141026] border border-[#2b2149] hover:border-orange-500/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-950/60 border border-orange-500/30 flex items-center justify-center shrink-0 text-orange-400">
                      <Flame className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">Bio: Pusrank</h3>
                        <span className="text-xs text-orange-300 font-mono-nums">Pilar 02</span>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Satu kata bio saya adalah <strong className="text-orange-400 font-semibold">pusrank</strong> (push rank). Ini mencerminkan mentalitas pantang menyerah untuk terus meningkatkan tier, menguji ketangguhan mental di bawah tekanan, dan konsistensi bermain bersama tim maupun solo grind.
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Setiap kekalahan dijadikan bahan evaluasi, dan setiap kemenangan adalah anak tangga menuju puncak leaderboard. Mentalitas pusrank ini juga saya terapkan saat mempelajari logika pemrograman dan membangun karya.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Karya: dev pou connection */}
                <div className="p-6 rounded-2xl bg-[#141026] border border-[#2b2149] hover:border-purple-500/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-900/50 to-orange-900/50 border border-purple-500/30 flex items-center justify-center shrink-0 text-white">
                      <Code2 className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">Evolusi: Developer</h3>
                        <span className="text-xs text-slate-400 font-mono-nums">Pilar 03</span>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Bermain game melahirkan ketertarikan untuk membuat game. Proyek karya saya adalah <strong className="text-purple-400 font-semibold">dev pou</strong>, sebuah eksplorasi modern terhadap konsep virtual pet klasik yang melegenda dengan sentuhan kustomisasi interaktif.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Pusrank Simulator */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-[#141026] border border-[#312557] shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#241c3d]">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-orange-400" />
                      <h4 className="text-base font-bold text-white">Simulasi Pusrank brast</h4>
                    </div>
                    <button
                      onClick={handleResetRank}
                      title="Reset simulasi rank"
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset</span>
                    </button>
                  </div>

                  <p className="text-xs text-slate-400 mb-5">
                    Uji coba simulasi push rank brast. Klik tombol tanding di bawah untuk melihat fluktuasi poin & kenaikan tier.
                  </p>

                  {/* Tier Display */}
                  <div className="p-5 rounded-xl bg-[#0c0919] border border-[#261e40] text-center space-y-3 mb-5">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-900/70 to-orange-950/70 border-2 border-purple-500/50 shadow-inner">
                      <Trophy className={`w-8 h-8 ${currentTier.textColor}`} />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400">Tier Saat Ini</span>
                      <h5 className={`text-2xl font-black ${currentTier.textColor}`}>
                        {currentTier.name}
                      </h5>
                    </div>

                    <div className="flex justify-between items-center text-xs text-slate-400 px-2 pt-2">
                      <span>Total Poin Rank:</span>
                      <span className="font-mono-nums font-bold text-white text-sm">{rankPoints} PTS</span>
                    </div>

                    {/* Progress Bar towards next tier */}
                    {nextTier ? (
                      <div className="space-y-1.5 px-2">
                        <div className="w-full bg-[#1e1736] h-2.5 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-orange-500 h-full rounded-full transition-all duration-300"
                            style={{
                              width: `${Math.min(100, Math.max(5, ((rankPoints - currentTier.pointsReq) / (nextTier.pointsReq - currentTier.pointsReq)) * 100))}%`
                            }}
                          />
                        </div>
                        <div className="flex justify-between text-[11px] text-slate-400">
                          <span>{currentTier.name}</span>
                          <span>Menuju {nextTier.name} ({nextTier.pointsReq} PTS)</span>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs text-orange-400 font-semibold">Tier Maksimal Tercapai! Mythic Master.</p>
                    )}
                  </div>

                  {/* Stat counter */}
                  <div className="grid grid-cols-2 gap-3 text-center mb-5">
                    <div className="p-2.5 rounded-lg bg-[#100d21] border border-[#231b3b]">
                      <span className="block text-[11px] text-slate-400">Total Match</span>
                      <span className="text-base font-bold font-mono-nums text-white">{matchesPlayed}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#100d21] border border-[#231b3b]">
                      <span className="block text-[11px] text-slate-400">Win Rate</span>
                      <span className="text-base font-bold font-mono-nums text-orange-400">
                        {matchesPlayed > 0 ? Math.round((matchWins / matchesPlayed) * 100) : 0}%
                      </span>
                    </div>
                  </div>

                  {/* Push Rank Match Button */}
                  <button
                    onClick={handlePushRank}
                    className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-400 hover:to-purple-500 shadow-md shadow-orange-950/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <Zap className="w-4 h-4 text-yellow-300" />
                    <span>Mulai Push Rank (+1 Pertandingan)</span>
                  </button>

                  {/* Match Result Toast */}
                  {lastMatchResult && (
                    <div className="mt-3 p-2.5 rounded-lg bg-[#1b1531] border border-purple-500/30 text-center text-xs font-semibold text-slate-200 animate-fadeIn">
                      Hasil Pertandingan Terakhir: <span className="text-orange-400">{lastMatchResult}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            BAGIAN KARYA
           ======================================================== */}
        <section id="karya" className="py-20 relative">
          {/* Ambient lighting */}
          <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-purple-900/15 blur-[140px] rounded-full pointer-events-none -z-10" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-2xl mb-12">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
                <span>Portofolio Proyek</span>
                <span aria-hidden="true">·</span>
                <span>Karya</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Karya Unggulan: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">dev pou</span>
              </h2>
              <p className="text-slate-300 mt-3 text-base">
                Sesuai data proyek, karya ini belum memiliki tautan URL publik live dan disajikan sebagai <strong className="text-white font-semibold">dokumentasi teks komprehensif</strong> serta prototipe mekanik interaktif di bawah ini.
              </p>
            </div>

            {/* Comprehensive Showcase Bento Card for "dev pou" */}
            <div className="rounded-3xl bg-[#130f24] border border-[#2e2350] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
              {/* Card top banner */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#241c3d]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-900/40">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">dev pou</h3>
                    <p className="text-xs text-slate-400">Game Development & Virtual Pet Experience</p>
                  </div>
                </div>

                {/* Status Notice (Transparent: Rendered as Text as instructed) */}
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#1c1633] border border-[#392c63] text-xs text-slate-300">
                  <ShieldAlert className="w-4 h-4 text-orange-400" />
                  <span>Format: <strong>Presentasi Teks</strong> (URL belum publik)</span>
                </div>
              </div>

              {/* Grid: Left Technical Text & Right Interactive Pou Simulator */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-start">
                {/* Left: Deep Architectural & Conceptual Text */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-orange-400" />
                      Ringkasan Konsep Proyek
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white">dev pou</strong> merupakan proyek eksperimen rekayasa game yang diinisiasi oleh brast. Terinspirasi dari fenomena game legendaris <em>Pou</em>, proyek ini mengeksplorasi pembuatan ulang <em>virtual pet simulation loop</em> dengan teknologi web dan mesin logika modern.
                    </p>
                  </div>

                  {/* 4 Key Pillars of dev pou */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#0e0a1c] border border-[#261d42]">
                      <span className="text-xs font-mono-nums text-purple-400 font-bold">01 / MEKANIK INTI</span>
                      <h5 className="text-sm font-bold text-white mt-1">State Machine Kebutuhan</h5>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        Sistem kebutuhan dinamis: Rasa lapar (Hunger), Kebahagiaan (Fun), Stamina (Energy), dan Kebersihan (Cleanliness) yang saling mempengaruhi.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0e0a1c] border border-[#261d42]">
                      <span className="text-xs font-mono-nums text-orange-400 font-bold">02 / INTERAKSI</span>
                      <h5 className="text-sm font-bold text-white mt-1">Fisika Interaktif & Sentuhan</h5>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        Respons visual instan saat Pou diberi makan, dimandikan, diajak bermain bola mini, atau dibiarkan istirahat.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0e0a1c] border border-[#261d42]">
                      <span className="text-xs font-mono-nums text-purple-400 font-bold">03 / PERFORMA</span>
                      <h5 className="text-sm font-bold text-white mt-1">Ringan & Tanpa Dependensi Berat</h5>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        Dioptimalkan untuk berjalan mulus di browser perangkat mobile maupun desktop tanpa membebani memori.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0e0a1c] border border-[#261d42]">
                      <span className="text-xs font-mono-nums text-orange-400 font-bold">04 / PENGEMBANGAN</span>
                      <h5 className="text-sm font-bold text-white mt-1">Rencana Mini-Game Ekstensi</h5>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        Tahap perancangan mini-games seperti sky jump, refleks tangkap makanan, dan kostum kustomisasi karakter.
                      </p>
                    </div>
                  </div>

                  {/* Text statement explaining URL status */}
                  <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-slate-300 leading-relaxed">
                    <p>
                      <strong>Catatan Status Karya:</strong> Karena URL rilis publik untuk <em>dev pou</em> saat ini belum dipublikasikan ke repositori/domain eksternal, brast menyajikan karya ini dalam bentuk dokumentasi tekstual serta demo interaktif yang dapat langsung dicoba pada panel di sebelah kanan.
                    </p>
                  </div>
                </div>

                {/* Right: Functional Interactive Prototype of "Pou" */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-[#0c0919] border border-[#34275a] shadow-xl">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#211938]">
                      <div className="flex items-center gap-2">
                        <Smile className="w-5 h-5 text-orange-400" />
                        <span className="text-sm font-bold text-white">Prototipe Interaktif: Pou</span>
                      </div>
                      <span className="text-[11px] text-purple-300 font-mono-nums">Live Test</span>
                    </div>

                    {/* Pou Character Container */}
                    <div className="py-8 px-4 rounded-xl bg-gradient-to-b from-[#16112c] to-[#0d091a] border border-[#271d44] flex flex-col items-center justify-center relative overflow-hidden">
                      {/* Pou Body (Stylized triangular organic blob) */}
                      <div className="relative group cursor-pointer transition-transform duration-200 active:scale-95" onClick={handlePlayPou}>
                        {/* Pou Silhouette */}
                        <div
                          className={`w-32 h-28 rounded-[50%_50%_45%_45%] bg-gradient-to-b from-[#c4976a] via-[#a67443] to-[#805327] shadow-lg shadow-black/60 relative flex flex-col items-center justify-center border-2 border-[#543313] transition-all duration-300 ${
                            pouReaction === 'eating' ? 'scale-110' : ''
                          } ${pouReaction === 'playing' ? '-translate-y-2' : ''}`}
                        >
                          {/* Eyes */}
                          <div className="flex items-center gap-5 -mt-2">
                            {pouReaction === 'sleeping' ? (
                              <>
                                <div className="w-5 h-1 bg-[#2b1706] rounded-full" />
                                <div className="w-5 h-1 bg-[#2b1706] rounded-full" />
                              </>
                            ) : (
                              <>
                                <div className="w-6 h-7 bg-white rounded-full flex items-center justify-center shadow-inner relative">
                                  <div className="w-3.5 h-3.5 bg-[#1b1005] rounded-full" />
                                </div>
                                <div className="w-6 h-7 bg-white rounded-full flex items-center justify-center shadow-inner relative">
                                  <div className="w-3.5 h-3.5 bg-[#1b1005] rounded-full" />
                                </div>
                              </>
                            )}
                          </div>

                          {/* Mouth */}
                          <div className="mt-2">
                            {pouReaction === 'eating' && (
                              <div className="w-4 h-4 bg-[#4a2107] rounded-full animate-bounce" />
                            )}
                            {pouReaction === 'playing' && (
                              <div className="w-6 h-3 bg-[#4a2107] rounded-b-full border-t border-transparent" />
                            )}
                            {pouReaction === 'sleeping' && (
                              <div className="text-[10px] text-purple-300 font-mono font-bold animate-pulse">zzz</div>
                            )}
                            {pouReaction === 'bathing' && (
                              <div className="w-5 h-2 bg-[#4a2107] rounded-full" />
                            )}
                            {pouReaction === 'normal' && (
                              <div className="w-5 h-1.5 bg-[#4a2107] rounded-full" />
                            )}
                          </div>

                          {/* Bubbles if bathing */}
                          {pouReaction === 'bathing' && (
                            <div className="absolute -top-2 text-base">🫧🫧</div>
                          )}
                        </div>
                      </div>

                      {/* Status Log */}
                      <p className="mt-4 text-xs font-medium text-slate-300 text-center">
                        {pouLog}
                      </p>
                    </div>

                    {/* Stats Progress Bars */}
                    <div className="space-y-2 mt-4">
                      {/* Hunger */}
                      <div>
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span className="flex items-center gap-1">
                            <Utensils className="w-3 h-3 text-orange-400" /> Kenyang
                          </span>
                          <span className="font-mono-nums font-semibold">{pouStats.hunger}%</span>
                        </div>
                        <div className="w-full bg-[#1b1433] h-2 rounded-full overflow-hidden">
                          <div className="bg-orange-500 h-full rounded-full transition-all" style={{ width: `${pouStats.hunger}%` }} />
                        </div>
                      </div>

                      {/* Fun */}
                      <div>
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span className="flex items-center gap-1">
                            <Heart className="w-3 h-3 text-purple-400" /> Kesenangan
                          </span>
                          <span className="font-mono-nums font-semibold">{pouStats.fun}%</span>
                        </div>
                        <div className="w-full bg-[#1b1433] h-2 rounded-full overflow-hidden">
                          <div className="bg-purple-500 h-full rounded-full transition-all" style={{ width: `${pouStats.fun}%` }} />
                        </div>
                      </div>

                      {/* Energy */}
                      <div>
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span className="flex items-center gap-1">
                            <Zap className="w-3 h-3 text-yellow-400" /> Energi
                          </span>
                          <span className="font-mono-nums font-semibold">{pouStats.energy}%</span>
                        </div>
                        <div className="w-full bg-[#1b1433] h-2 rounded-full overflow-hidden">
                          <div className="bg-yellow-500 h-full rounded-full transition-all" style={{ width: `${pouStats.energy}%` }} />
                        </div>
                      </div>

                      {/* Cleanliness */}
                      <div>
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span className="flex items-center gap-1">
                            <Coffee className="w-3 h-3 text-cyan-400" /> Kebersihan
                          </span>
                          <span className="font-mono-nums font-semibold">{pouStats.cleanliness}%</span>
                        </div>
                        <div className="w-full bg-[#1b1433] h-2 rounded-full overflow-hidden">
                          <div className="bg-cyan-500 h-full rounded-full transition-all" style={{ width: `${pouStats.cleanliness}%` }} />
                        </div>
                      </div>
                    </div>

                    {/* Interaction Buttons */}
                    <div className="grid grid-cols-4 gap-2 mt-5">
                      <button
                        onClick={handleFeedPou}
                        className="p-2.5 rounded-xl bg-[#1b1531] hover:bg-orange-600/30 border border-[#312554] hover:border-orange-500/50 text-xs font-semibold text-slate-200 transition-all flex flex-col items-center gap-1"
                      >
                        <Utensils className="w-4 h-4 text-orange-400" />
                        <span>Makan</span>
                      </button>

                      <button
                        onClick={handlePlayPou}
                        className="p-2.5 rounded-xl bg-[#1b1531] hover:bg-purple-600/30 border border-[#312554] hover:border-purple-500/50 text-xs font-semibold text-slate-200 transition-all flex flex-col items-center gap-1"
                      >
                        <Gamepad2 className="w-4 h-4 text-purple-400" />
                        <span>Main</span>
                      </button>

                      <button
                        onClick={handleCleanPou}
                        className="p-2.5 rounded-xl bg-[#1b1531] hover:bg-cyan-600/30 border border-[#312554] hover:border-cyan-500/50 text-xs font-semibold text-slate-200 transition-all flex flex-col items-center gap-1"
                      >
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span>Mandi</span>
                      </button>

                      <button
                        onClick={handleSleepPou}
                        className="p-2.5 rounded-xl bg-[#1b1531] hover:bg-indigo-600/30 border border-[#312554] hover:border-indigo-500/50 text-xs font-semibold text-slate-200 transition-all flex flex-col items-center gap-1"
                      >
                        <Moon className="w-4 h-4 text-indigo-400" />
                        <span>Tidur</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            BAGIAN TAUTAN PUBLIK
           ======================================================== */}
        <section id="tautan" className="py-20 bg-[#0e0b1a] border-t border-[#1d1633] relative">
          {/* Subtle Orange Glow */}
          <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-2xl mb-12">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
                <span>Konektivitas</span>
                <span aria-hidden="true">·</span>
                <span>Tautan Publik</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Hubungi & Ikuti <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">brast</span>
              </h2>
              <p className="text-slate-300 mt-3 text-base">
                Berikut adalah tautan publik resmi yang tersedia. Klik untuk membuka langsung atau salin tautan untuk disimpan.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Primary Public Links Cards */}
              <div className="lg:col-span-7 space-y-4">
                {/* TikTok Public Link Card (Provided by User) */}
                <div className="p-6 rounded-2xl bg-[#141026] border border-[#2f2352] hover:border-orange-500/50 transition-all shadow-lg group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center text-white shrink-0 shadow-md">
                        <Share2 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                            TikTok Resmi brast
                          </h3>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5 break-all font-mono-nums">
                          {tiktokUrl}
                        </p>
                        <p className="text-xs text-slate-300 mt-2">
                          Konten gameplay, klip pusrank, cuplikan game dev, dan update terbaru dari brast.
                        </p>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex sm:flex-col gap-2 shrink-0">
                      <a
                        href={tiktokUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
                      >
                        <span>Buka TikTok</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => copyToClipboard(tiktokUrl, 'tiktok')}
                        className="flex-1 sm:flex-initial px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-[#1b1531] hover:bg-[#231b3e] border border-[#332657] rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
                      >
                        {copiedTikTok ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Tersalin!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Salin URL</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Share Portfolio Link Card */}
                <div className="p-6 rounded-2xl bg-[#141026] border border-[#2f2352] hover:border-purple-500/50 transition-all shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                        <Flame className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Bagikan Profil brast</h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Tautan satu halaman resmi: Fokus game, bio pusrank, karya dev pou
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => copyToClipboard(window.location.href, 'share')}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#221a3d] hover:bg-[#2e2354] border border-purple-500/30 rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
                    >
                      {copiedLink ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Tautan Web Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-purple-400" />
                          <span>Salin Link Website</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Information Box */}
                <div className="p-4 rounded-xl bg-[#100d21] border border-[#261d44] text-xs text-slate-400 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                  <p>
                    Daftar tautan publik diperbarui secara berkala sesuai dengan perilisan platform streaming atau repositori game brast berikutnya.
                  </p>
                </div>
              </div>

              {/* Right: Message or Contact Card */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-[#141026] border border-[#312557] shadow-xl">
                  <h3 className="text-lg font-bold text-white mb-1">Ajak Mabar atau Kolaborasi</h3>
                  <p className="text-xs text-slate-400 mb-5">
                    Punya ide seputar game dev atau ingin mabar pusrank bersama brast? Sampaikan pesan Anda di sini.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert('Pesan simulasi terkirim! Terima kasih telah menghubungi brast.');
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Nama / In-Game Nickname
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: PlayerOne"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e0a1c] border border-[#2e2450] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Topik
                      </label>
                      <select
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e0a1c] border border-[#2e2450] text-sm text-white focus:outline-none focus:border-purple-500"
                      >
                        <option value="pusrank">Ajak Mabar / Pusrank</option>
                        <option value="dev-pou">Diskusi Game Dev / dev pou</option>
                        <option value="general">Pertanyaan Umum</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Pesan
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Tulis pesan Anda untuk brast..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e0a1c] border border-[#2e2450] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-500 hover:to-orange-400 transition-all shadow-md shadow-purple-950/50 flex items-center justify-center gap-2"
                    >
                      <span>Kirim Pesan</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#08060f] border-t border-[#1b1430] py-8 text-center text-xs text-slate-400">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white font-display">brast</span>
            <span aria-hidden="true">·</span>
            <span>Fokus: Game</span>
            <span aria-hidden="true">·</span>
            <span>Bio: Pusrank</span>
            <span aria-hidden="true">·</span>
            <span>Karya: dev pou</span>
          </div>

          <div className="text-slate-400">
            © {new Date().getFullYear()} brast. Website Personal Satu Halaman.
          </div>
        </div>
      </footer>
    </div>
  );
}
