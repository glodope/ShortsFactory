# Shorts Factory

Local desktop app that turns long videos into vertical **Shorts / TikTok / Reels** — with
automatic speech-to-text subtitles, face-aware reframing, filters and ad banners. Free and
open source. Everything runs **on your machine** — your video is never uploaded anywhere.

## Features

- 🎙 **Offline speech recognition** (whisper.cpp) — subtitles generated locally, no cloud
- 🙂 **Face-aware vertical reframing** (MediaPipe) — the 9:16 crop follows the speaker
- 📥 **Built-in yt-dlp** — paste a video link and it downloads the source for you
- ⚡ **Parallel processing** — long videos are split into chunks and processed across all CPU cores
- 💬 **Styled subtitles** — karaoke / "hormozi" style, multiple bundled fonts
- 🎨 Filters and ad-banner overlays
- 📨 **Auto-upload to Telegram**
- 📋 Processing queue with pause / resume / retry and crash recovery
- 🖥 Hardware-encoder detection (NVENC, etc.)

## Download

Grab the latest installer or portable build from the [**Releases**](../../releases) page.

- `Shorts Factory Setup <version>.exe` — installer
- `Shorts Factory <version>.exe` — portable

Windows x64.

## Build from source

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dist      # build installer + portable into dist/
# or
npm start         # run in dev
```

> The whisper.cpp binaries + model and yt-dlp are large third-party binaries and are **not**
> stored in this repository (GitHub's 100 MB file limit). They are bundled into the release
> installers. To build locally, place them under `resources/whisper/` and `resources/ytdlp/`.

## Tech stack

Electron · FFmpeg · whisper.cpp · MediaPipe · yt-dlp · React

## License

[MIT](LICENSE) for the application code. Bundled third-party tools (FFmpeg, whisper.cpp,
yt-dlp, MediaPipe, and the fonts) are distributed under their own respective licenses.
