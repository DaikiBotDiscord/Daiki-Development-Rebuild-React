import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import NavBarLI from '../../components/nav-bar-li'
import Footer from '../../components/footer'
import './music.css'

const formatTime = (seconds) => {
  if (seconds == null || Number.isNaN(seconds)) {
    return '--:--'
  }

  const totalSeconds = Number(seconds)
  const minutes = Math.floor(totalSeconds / 60)
  const remainder = totalSeconds % 60
  return `${minutes}:${String(remainder).padStart(2, '0')}`
}

const Music = () => {
  const [musicData, setMusicData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    const fetchMusicState = async () => {
      try {
        const response = await fetch('https://dash.api.daiki-bot.xyz/api/users/@me/music-state', {
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})`)
        }

        const data = await response.json()

        if (!data.success) {
          throw new Error(data.message || 'Unable to load music state')
        }

        if (mounted) {
          setMusicData(data)
          setError(null)
        }
      } catch (fetchError) {
        if (mounted) {
          setError(fetchError.message || 'Unable to load music state')
        }
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    fetchMusicState()
    const interval = setInterval(fetchMusicState, 15000)

    return () => {
      mounted = false
      clearInterval(interval)
    }
  }, [])

  const renderMusicControlPanel = () => {
    if (loading) {
      return <div className="music-status-empty">Loading music state…</div>
    }

    if (error) {
      return <div className="music-status-error">Unable to load music state: {error}</div>
    }

    if (!musicData) {
      return <div className="music-status-empty">No music state available.</div>
    }

    const player = musicData.player || {}
    const state = musicData.music_state || {}
    const track = state.current_track || player.current_track || {}
    const queue = state.queue_snapshot || []
    const currentSeconds = state.current_time_seconds ?? player.current_song_position ?? 0
    const totalSeconds = track.durationSeconds ?? 0
    const progress = totalSeconds ? Math.min(100, Math.max(0, (currentSeconds / totalSeconds) * 100)) : 0
    const loop = state.loop_mode || player.loop || 'off'
    const volume = state.volume ?? player.volume ?? 0

    return (
      <>
        <div className="music-controls-grid">
          <article className="music-card music-card--summary">
            <div className="music-card__header">
              <p className="daiki-eyebrow">Voice and player</p>
              <h2>Live playback overview</h2>
            </div>

            <div className="music-card__body">
              <div className="music-tracker-row">
                <div>
                  <span className="music-label">Server</span>
                  <p>{player.server?.name || state.guild_id || 'Unknown server'}</p>
                </div>
                <div>
                  <span className="music-label">Status</span>
                  <p>{player.status || state.status || 'offline'}</p>
                </div>
                <div>
                  <span className="music-label">Voice</span>
                  <p>{musicData.in_voice_channel ? 'Connected' : 'Disconnected'}</p>
                </div>
              </div>

              <div className="music-tracker-row">
                <div>
                  <span className="music-label">Volume</span>
                  <p>{volume}%</p>
                </div>
                <div>
                  <span className="music-label">Loop</span>
                  <p>{loop}</p>
                </div>
                <div>
                  <span className="music-label">Queue</span>
                  <p>{state.queue_length ?? queue.length ?? 0} tracks</p>
                </div>
              </div>
            </div>
          </article>

          <article className="music-card music-card--current-track">
            <div className="music-card__header">
              <p className="daiki-eyebrow">Now playing</p>
              <h2>{track.name || 'No track playing'}</h2>
            </div>

            <div className="music-track-content">
              {track.thumbnail && (
                <img
                  className="music-track-thumbnail"
                  src={track.thumbnail}
                  alt={track.name || 'Current track'}
                />
              )}

              <div className="music-track-meta">
                <div>
                  <span className="music-label">Requested by</span>
                  <p className="music-meta-value">{track.requestedBy?.username || 'Unknown'}</p>
                </div>
                <div>
                  <span className="music-label">Duration</span>
                  <p className="music-meta-value">{track.duration || formatTime(totalSeconds)}</p>
                </div>
                <div>
                  <span className="music-label">Position</span>
                  <p className="music-meta-value">{formatTime(currentSeconds)}</p>
                </div>
              </div>
            </div>

            <div className="music-progress">
              <div className="music-progress-bar">
                <div className="music-progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <div className="music-progress-labels">
                <span>{formatTime(currentSeconds)}</span>
                <span>{formatTime(totalSeconds)}</span>
              </div>
            </div>
          </article>
        </div>

        <section className="music-queue-panel">
          <div className="music-queue-header">
            <h3>Queue snapshot</h3>
            <p>{queue.length ? `${queue.length} queued track${queue.length === 1 ? '' : 's'}` : 'No tracks queued'}</p>
          </div>

          <div className="music-queue-list">
            {queue.length ? (
              queue.map((item) => (
                <div
                  key={`${item.position}-${item.url}`}
                  className={`music-queue-item ${item.isCurrent ? 'music-queue-item--current' : ''}`}
                >
                  <div>
                    <span className="music-queue-position">{item.position}</span>
                    <div>
                      <p className="music-queue-title">{item.name}</p>
                      <p className="music-queue-subtitle">
                        {item.duration} • requested by {item.requestedBy?.username || 'unknown'}
                      </p>
                    </div>
                  </div>
                  {item.isCurrent && <span className="music-queue-badge">Playing</span>}
                </div>
              ))
            ) : (
              <p className="music-status-empty">Queue is empty.</p>
            )}
          </div>
        </section>
      </>
    )
  }

  return (
    <div className="music-container1 daiki-page">
      <Helmet>
        <title>Music - Daiki Development</title>
        <meta property="og:title" content="Music - Daiki Development" />
      </Helmet>
      <NavBarLI />

      <main className="daiki-page-shell">
        <section className="daiki-panel-hero">
          <p className="daiki-eyebrow">Audio controls</p>
          <h1>Music</h1>
          <p>Manage music playback, queues, and server audio settings for Daiki.</p>
        </section>

        <section className="daiki-content-panel music-panel">
          {renderMusicControlPanel()}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Music
