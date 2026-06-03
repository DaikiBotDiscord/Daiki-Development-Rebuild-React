import React, { useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { ThreeDot } from 'react-loading-indicators'

import NavBarLI from '../../components/nav-bar-li'
import Footer from '../../components/footer'
import './music.css'

const REFRESH_SECONDS = 10

const formatTime = (seconds) => {
  if (seconds == null || Number.isNaN(seconds)) {
    return '--:--'
  }

  const totalSeconds = Number(seconds)
  const minutes = Math.floor(totalSeconds / 60)
  const remainder = totalSeconds % 60
  return `${minutes}:${String(remainder).padStart(2, '0')}`
}

const musicActions = [
  { type: 'music.skip', label: 'Skip', icon: 'SKIP' },
  { type: 'music.pause', label: 'Pause', icon: 'PAUSE' },
  { type: 'music.resume', label: 'Resume', icon: 'PLAY' },
  { type: 'music.stop', label: 'Stop', icon: 'STOP' },
  { type: 'music.shuffle', label: 'Shuffle', icon: 'SHUF' },
  { type: 'music.disconnect', label: 'Disconnect', icon: 'DISC' },
]

const Music = () => {
  const [userData, setUserData] = useState(null)
  const [musicData, setMusicData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [musicError, setMusicError] = useState(null)
  const [requestMessage, setRequestMessage] = useState(null)
  const [requestError, setRequestError] = useState(null)
  const [sendingType, setSendingType] = useState(null)
  const [query, setQuery] = useState('')
  const [volume, setVolume] = useState(75)
  const [secondsUntilRefresh, setSecondsUntilRefresh] = useState(REFRESH_SECONDS)

  const guilds = useMemo(() => userData?.manageable_guilds || [], [userData])
  const activeGuildId = useMemo(() => {
    const player = musicData?.player || {}
    const state = musicData?.music_state || {}

    return state.guild_id || player.guild_id || player.server?.id || musicData?.guild_id || ''
  }, [musicData])
  const activeGuild = guilds.find((guild) => guild.id === activeGuildId)
  const hasActiveMusic = Boolean(musicData?.in_voice_channel || musicData?.player || musicData?.music_state)

  const fetchMusicState = useCallback(async () => {
    try {
      const response = await fetch('https://dash.api.daiki-bot.xyz/api/users/@me/music-state', {
        credentials: 'include',
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`)
      }

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.message || 'Unable to load music state')
      }

      setMusicData(data)
      setMusicError(null)
    } catch (fetchError) {
      setMusicError(fetchError.message || 'Unable to load music state')
    } finally {
      setLoading(false)
      setSecondsUntilRefresh(REFRESH_SECONDS)
    }
  }, [])

  useEffect(() => {
    axios.get('https://dash.api.daiki-bot.xyz/api/users/@me', {
      withCredentials: true,
      })
      .then((res) => {
        setUserData(res.data)
      })
      .catch((err) => {
        console.error('Error fetching user data:', err)
        window.location.href = 'https://daiki-bot.xyz/dashboard-sync'
      })
  }, [])

  useEffect(() => {
    let mounted = true

    const load = async () => {
      if (mounted) {
        await fetchMusicState()
      }
    }

    load()
    const refreshInterval = setInterval(load, REFRESH_SECONDS * 1000)
    const countdownInterval = setInterval(() => {
      setSecondsUntilRefresh((currentSeconds) => (
        currentSeconds > 1 ? currentSeconds - 1 : REFRESH_SECONDS
      ))
    }, 1000)

    return () => {
      mounted = false
      clearInterval(refreshInterval)
      clearInterval(countdownInterval)
    }
  }, [fetchMusicState])

  useEffect(() => {
    if (!requestMessage) {
      return undefined
    }

    const messageTimer = setTimeout(() => {
      setRequestMessage(null)
    }, 5000)

    return () => clearTimeout(messageTimer)
  }, [requestMessage])

  const sendMusicRequest = async (type, payload = {}) => {
    if (!activeGuildId) {
      setRequestError('No active music server was found. Join a voice channel and start music before sending controls.')
      setRequestMessage(null)
      return
    }

    const requesterId = userData?.discordId || userData?.id
    if (!requesterId) {
      setRequestError('Unable to identify the requester. Refresh the page and try again.')
      setRequestMessage(null)
      return
    }

    setSendingType(type)
    setRequestError(null)
    setRequestMessage('Request sent.')

    try {
      await axios.post(
        `https://dash.api.daiki-bot.xyz/api/guilds/${activeGuildId}/bot-requests`,
        {
          type,
          payload,
          requestedById: requesterId,
          waitForResult: false,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      await fetchMusicState()
    } catch (err) {
      console.error('Unable to complete music command request:', err)
    } finally {
      setSendingType(null)
    }
  }

  const handleAddSong = (event) => {
    event.preventDefault()

    const trimmedQuery = query.trim()
    if (!trimmedQuery) {
      setRequestError('Enter a song URL or search term first.')
      setRequestMessage(null)
      return
    }

    const payload = {
      query: trimmedQuery,
      source: 'website',
    }

    sendMusicRequest('music.add_song', payload)
    setQuery('')
  }

  const handleSetVolume = (event) => {
    event.preventDefault()
    const normalizedVolume = Number(volume)

    if (!Number.isInteger(normalizedVolume) || normalizedVolume < 0 || normalizedVolume > 100) {
      setRequestError('Volume must be a whole number from 0 to 100.')
      setRequestMessage(null)
      return
    }

    sendMusicRequest('music.set_volume', { volume: normalizedVolume })
  }

  const renderMusicCommandPanel = () => (
    <div className="music-command-panel">
      <div className="music-command-header">
        <div>
          <p className="daiki-eyebrow">Bot requests</p>
          <h2>Send music controls</h2>
          <p className="music-active-server">
            Sending to {activeGuild?.name || activeGuildId || 'the active music server'}.
          </p>
        </div>
      </div>

      <form className="music-add-form" onSubmit={handleAddSong}>
        <label className="music-field music-field--wide">
          <span>Song URL or search term</span>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="never gonna give you up"
          />
        </label>
        <button type="submit" className="music-control-button music-control-button--primary" disabled={sendingType === 'music.add_song'}>
          {sendingType === 'music.add_song' ? 'Adding...' : 'Add Song'}
        </button>
      </form>

      <div className="music-actions-grid">
        {musicActions.map((action) => (
          <button
            key={action.type}
            type="button"
            className="music-control-button"
            disabled={Boolean(sendingType)}
            onClick={() => sendMusicRequest(action.type)}
          >
            <span>{action.icon}</span>
            {sendingType === action.type ? 'Sending...' : action.label}
          </button>
        ))}
      </div>

      <form className="music-volume-form" onSubmit={handleSetVolume}>
        <label className="music-field music-volume-range">
          <span>Volume: {volume}%</span>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={volume}
            onChange={(event) => setVolume(event.target.value)}
          />
        </label>
        <button type="submit" className="music-control-button" disabled={sendingType === 'music.set_volume'}>
          {sendingType === 'music.set_volume' ? 'Setting...' : 'Set Volume'}
        </button>
      </form>

      {requestMessage && <div className="music-request-message">{requestMessage}</div>}
      {requestError && <div className="music-request-error">{requestError}</div>}
    </div>
  )

  const renderMusicOverview = () => {
    if (loading) {
      return (
        <div className="music-status-empty">
          <ThreeDot variant="bounce" color={['#ff00ff', '#5865f2', '#00d4ff']} size="small" text="" textColor="" />
        </div>
      )
    }

    if (musicError) {
      return <div className="music-status-error">Unable to load music state: {musicError}</div>
    }

    if (!musicData) {
      return <div className="music-status-empty">No music state available.</div>
    }

    if (!musicData.in_voice_channel && !musicData.player && !musicData.music_state) {
      return (
        <div className="music-empty-state">
          <span className="daiki-feature-card__icon">NO ACTIVE MUSIC</span>
          <h2>No voice channel or music session found</h2>
          <p>
            Join a voice channel and start playing music with Daiki before the
            live player, queue, and controls have anything active to show.
          </p>
          <p>
            Music controls are only sent to the server that currently has an
            active music session, so start music in Discord first and this page
            will pick up the active server on the next refresh.
          </p>
        </div>
      )
    }

    const player = musicData.player || {}
    const state = musicData.music_state || {}
    const track = state.current_track || player.current_track || {}
    const queue = state.queue_snapshot || []
    const currentSeconds = state.current_time_seconds ?? player.current_song_position ?? 0
    const totalSeconds = track.durationSeconds ?? 0
    const progress = totalSeconds ? Math.min(100, Math.max(0, (currentSeconds / totalSeconds) * 100)) : 0
    const loop = state.loop_mode || player.loop || 'off'
    const currentVolume = state.volume ?? player.volume ?? 0

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
                  <p>{player.server?.name || activeGuild?.name || state.guild_id || 'Unknown server'}</p>
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
                  <p>{currentVolume}%</p>
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

        {renderMusicCommandPanel()}

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
                        {item.duration} - requested by {item.requestedBy?.username || 'unknown'}
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
          <span className="music-refresh-note">
            Playback overview refreshes in {secondsUntilRefresh}s.
          </span>
        </section>

        <section className="daiki-content-panel music-panel">
          {renderMusicOverview()}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Music
