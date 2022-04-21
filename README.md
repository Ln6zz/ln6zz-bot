# SelfBotXzn
Recode By XZN Base Ori Aqulzz
# Requirements

* [Node.js](https://nodejs.org/en/)

* [Git](https://git-scm.com/downloads)

* [Libwebp](https://developers.google.com/speed/webp/download)

* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases)

* [Visual Code](https://code.visualstudio.com)

# Instalasi

## Clone Repo & Instalasi dependencies

```bash

> git clone https://github.com/xznsenpai/SelfBotXzn

> cd SelfBotXzn

> bash install.sh / npm install

> node udin

```

## For Termux

```bash

> termux-setup-storage

> apt update && apt upgrade

> pkg install nodejs

> pkg install git

> pkg install bash

> git clone https://github.com/xznsenpai/SelfBotXzn

> cd SelfBotXzn

> bash install.sh

> node udin

```

## Installing the FFmpeg

* Unduh salah satu versi FFmpeg yang tersedia dengan mengklik [di sini](https://www.gyan.dev/ffmpeg/builds/).

* Extract file ke `C:\` path.

* Ganti nama folder yang telah di-extract menjadi `ffmpeg`.

* Run Command Prompt as Administrator.

* Jalankan perintah berikut::

```cmd

> setx /m PATH "C:\ffmpeg\bin;%PATH%"

```

Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.

* Sekarang setelah Anda menginstal FFmpeg, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:

```cmd

> ffmpeg -version

```

## Installing the libwebp

* Unduh salah satu versi libwebp yang tersedia dengan mengklik [di sini](https://developers.google.com/speed/webp/download).

* Extract file ke `C:\` path.

* Ganti nama folder yang telah di-extract menjadi `libwebp`.

* Run Command Prompt as Administrator.

* Jalankan perintah berikut::

```cmd

> setx /m PATH "C:\libwebp\bin;%PATH%"

```

Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.

* Sekarang setelah Anda menginstal libwebp, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:

```cmd

> webpmux -version

```

## Menjalankan bot

```

> cd SelfBotXzn

> node udin

atau bisa juga

> npm start

```

 Setelah itu, akan ada QR-CODE, buka WhatsApp-mu yg ingin dijadikan bot, lalu scan code-qr nya!

# Thanks To

* [`Base Aqul`](https://github.com/zennn08/BaseSelfBot)

