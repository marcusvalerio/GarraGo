import { useState } from 'react'
import { C, F } from '../theme'
import { user, streakDays, crewEvents, myWorkouts } from '../data'

export default function HomeScreen() {
  const [confirmed, setConfirmed] = useState(
    Object.fromEntries(crewEvents.map(e => [e.id, e.confirmed]))
  )
  const [rated, setRated] = useState(null)
  const unrated = myWorkouts.find(w => !w.rated)

  const s = {
    root:    { flex: 1, overflowY: 'auto', paddingBottom: 100 },
    header:  { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '20px 22px 0' },
    greeting:{ fontFamily: F.body, color: C.textSecondary, fontSize: 11, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 4 },
    name:    { fontFamily: F.heading, color: C.textPrimary, fontSize: 30, fontWeight: 700, letterSpacing: '-1px' },
    avatarWrap: { position: 'relative' },
    avatar:  { width: 46, height: 46, borderRadius: 15, background: C.blue, border: `2px solid ${C.accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: F.heading, fontWeight: 700, color: C.accent, fontSize: 13 },
    dot:     { position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderRadius: '50%', background: C.accent, border: `2px solid ${C.bg}`, boxShadow: `0 0 8px ${C.accent}` },

    streakCard: { margin: '14px 14px 0', background: C.surface, border: `1px solid ${C.border}`, borderRadius: 22, padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
    streakL:    { display: 'flex', alignItems: 'center', gap: 12 },
    streakBox:  { width: 44, height: 44, borderRadius: 14, background: C.accentSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 },
    streakNum:  { fontFamily: F.heading, color: C.accent, fontSize: 20, fontWeight: 700, letterSpacing: '-0.5px' },
    streakLbl:  { fontFamily: F.body, color: C.textSecondary, fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.8px', marginTop: 2 },
    dots:       { display: 'flex', gap: 6 },
    dotWrap:    { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 },
    dotOn:      { width: 9, height: 9, borderRadius: '50%', background: C.accent, boxShadow: `0 0 8px ${C.accent}` },
    dotOff:     { width: 9, height: 9, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' },
    dotLbl:     { fontFamily: F.body, color: C.textMuted, fontSize: 8, textTransform: 'uppercase' },

    rateCard: { margin: '10px 14px 0', background: C.surface, border: `1px solid ${C.accent}22`, borderRadius: 20, padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
    rateL:    { display: 'flex', alignItems: 'center', gap: 10 },
    rateStar: { color: C.accent, fontSize: 18 },
    rateT:    { fontFamily: F.heading, color: C.textPrimary, fontSize: 13, fontWeight: 600 },
    rateS:    { fontFamily: F.body, color: C.textSecondary, fontSize: 11, marginTop: 1 },
    rateBtns: { display: 'flex', gap: 6 },
    btnGood:  { background: C.accentSoft, color: C.accent, border: `1px solid ${C.accent}44`, borderRadius: 10, padding: '6px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: F.body },
    btnBad:   { background: 'rgba(255,92,92,0.1)', color: C.danger, border: '1px solid rgba(255,92,92,0.3)', borderRadius: 10, padding: '6px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: F.body },
    ratedOk:  { margin: '10px 14px 0', background: C.accentSoft, border: `1px solid ${C.accent}22`, borderRadius: 20, padding: '12px 16px', textAlign: 'center', fontFamily: F.body, color: C.accent, fontSize: 13 },

    sec:     { marginTop: 20, padding: '0 22px' },
    secHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 },
    secT:    { fontFamily: F.heading, color: C.textPrimary, fontSize: 17, fontWeight: 700, letterSpacing: '-0.3px' },
    secL:    { fontFamily: F.body, color: C.accent, fontSize: 12, cursor: 'pointer', opacity: 0.85 },

    eventsRow: { display: 'flex', gap: 10, overflowX: 'auto', marginLeft: -22, paddingLeft: 22, paddingRight: 22 },
    evCard:    { minWidth: 162, background: C.surface, border: `1px solid ${C.border}`, borderRadius: 20, padding: 14, flexShrink: 0 },
    evCardOn:  { borderColor: `${C.accent}44` },
    evTop:     { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
    badge:     { background: C.accentSoft, borderRadius: 6, padding: '3px 7px', fontFamily: F.body, color: C.accent, fontSize: 9, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' },
    cDot:      { width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' },
    cDotOn:    { width: 8, height: 8, borderRadius: '50%', background: C.accent, boxShadow: `0 0 8px ${C.accent}` },
    evName:    { fontFamily: F.heading, color: C.textPrimary, fontSize: 14, fontWeight: 700, letterSpacing: '-0.3px', marginBottom: 3, lineHeight: 1.3 },
    evDist:    { fontFamily: F.body, color: C.textSecondary, fontSize: 11, marginBottom: 12, opacity: 0.7 },
    evBot:     { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' },
    evDate:    { fontFamily: F.body, color: C.textMuted, fontSize: 10 },
    evTime:    { fontFamily: F.heading, color: C.textPrimary, fontSize: 20, fontWeight: 700, letterSpacing: '-0.5px', marginTop: 2 },
    cfBtn:     { border: `1px solid ${C.textSecondary}44`, borderRadius: 10, padding: '6px 10px', fontSize: 10, fontWeight: 600, cursor: 'pointer', fontFamily: F.body, textTransform: 'uppercase', letterSpacing: '0.4px', background: 'transparent', color: C.textSecondary, transition: 'all 0.2s' },
    cfBtnOn:   { background: C.accent, border: 'none', color: C.bg },
    evSpots:   { fontFamily: F.body, color: C.textMuted, fontSize: 10, marginTop: 8, opacity: 0.5 },

    wList:   { background: C.surface, border: `1px solid ${C.border}`, borderRadius: 20, overflow: 'hidden' },
    wRow:    { display: 'flex', alignItems: 'center', gap: 12, padding: '13px 15px', borderBottom: `1px solid ${C.border}` },
    wRowLast:{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 15px' },
    wIcon:   { width: 42, height: 42, borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 },
    wInfo:   { flex: 1 },
    wTitle:  { fontFamily: F.heading, color: C.textPrimary, fontSize: 14, fontWeight: 700, letterSpacing: '-0.2px' },
    wMeta:   { fontFamily: F.body, color: C.textSecondary, fontSize: 11, marginTop: 2 },
    rBadge:  { width: 30, height: 30, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 },
  }

  return (
    <div style={s.root}>
      {/* Header */}
      <div style={s.header}>
        <div>
          <div style={s.greeting}>Bom dia</div>
          <div style={s.name}>{user.name} 👋</div>
        </div>
        <div style={s.avatarWrap}>
          <div style={s.avatar}>{user.initials}</div>
          <div style={s.dot} />
        </div>
      </div>

      {/* Streak */}
      <div style={s.streakCard}>
        <div style={s.streakL}>
          <div style={s.streakBox}>🔥</div>
          <div>
            <div style={s.streakNum}>{user.streak} dias</div>
            <div style={s.streakLbl}>sequência ativa</div>
          </div>
        </div>
        <div style={s.dots}>
          {streakDays.map((d, i) => (
            <div key={i} style={s.dotWrap}>
              <div style={d.on ? s.dotOn : s.dotOff} />
              <div style={s.dotLbl}>{d.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Rate */}
      {unrated && rated === null && (
        <div style={s.rateCard}>
          <div style={s.rateL}>
            <span style={s.rateStar}>✦</span>
            <div>
              <div style={s.rateT}>Como foi {unrated.title}?</div>
              <div style={s.rateS}>Avalie a sessão de hoje</div>
            </div>
          </div>
          <div style={s.rateBtns}>
            <button onClick={() => setRated('boa')}    style={s.btnGood}>boa</button>
            <button onClick={() => setRated('pesada')} style={s.btnBad}>pesada</button>
          </div>
        </div>
      )}
      {rated && (
        <div style={s.ratedOk}>✓ Sessão registrada como <strong>{rated}</strong></div>
      )}

      {/* Eventos */}
      <div style={s.sec}>
        <div style={s.secHead}>
          <div style={s.secT}>Próximos eventos</div>
          <div style={s.secL}>ver todos →</div>
        </div>
        <div style={s.eventsRow}>
          {crewEvents.map(ev => (
            <div key={ev.id} style={{ ...s.evCard, ...(confirmed[ev.id] ? s.evCardOn : {}) }}>
              <div style={s.evTop}>
                <div style={s.badge}>{ev.crew}</div>
                <div style={confirmed[ev.id] ? s.cDotOn : s.cDot} />
              </div>
              <div style={s.evName}>{ev.event}</div>
              <div style={s.evDist}>📍 {ev.distance}</div>
              <div style={s.evBot}>
                <div>
                  <div style={s.evDate}>{ev.date} {ev.day}/06</div>
                  <div style={s.evTime}>{ev.time}</div>
                </div>
                <button
                  onClick={() => setConfirmed(c => ({ ...c, [ev.id]: !c[ev.id] }))}
                  style={{ ...s.cfBtn, ...(confirmed[ev.id] ? s.cfBtnOn : {}) }}
                >
                  {confirmed[ev.id] ? '✓' : '+ ir'}
                </button>
              </div>
              <div style={s.evSpots}>{ev.spots} confirmados</div>
            </div>
          ))}
        </div>
      </div>

      {/* Treinos */}
      <div style={s.sec}>
        <div style={s.secHead}>
          <div style={s.secT}>Meus treinos</div>
          <div style={s.secL}>histórico →</div>
        </div>
        <div style={s.wList}>
          {myWorkouts.map((w, i) => (
            <div key={w.id} style={i < myWorkouts.length - 1 ? s.wRow : s.wRowLast}>
              <div style={{ ...s.wIcon, background: w.type === 'Corrida' ? `${C.blueMid}88` : C.accentSoft }}>
                {w.type === 'Corrida' ? '🏃' : '🏋️'}
              </div>
              <div style={s.wInfo}>
                <div style={s.wTitle}>{w.title}</div>
                <div style={s.wMeta}>
                  {w.date} · {w.duration}
                  {w.volume   ? ` · ${w.volume}`   : ''}
                  {w.distance ? ` · ${w.distance}` : ''}
                </div>
              </div>
              {w.rated && (
                <div style={{ ...s.rBadge, background: w.rating === 'boa' ? C.accentSoft : 'rgba(255,92,92,0.1)', color: w.rating === 'boa' ? C.accent : C.danger }}>
                  {w.rating === 'boa' ? '✦' : '↓'}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
