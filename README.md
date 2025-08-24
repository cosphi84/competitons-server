# Competitions Timers

Competiton Timers adalah timer untuk sebuah kompetisi. dirancang khsusus untuk kompetisi AC Installer Sharp.

APlikasi ini terdiri dari 2 bagian:

- Server (aplikasi ini)
- Remote-Device, sebuah ESP32 based device yang di fungsikan sebagai remote untuk Stop Timer.

## Install Server

Pastikan PC server sudah terinstall [https://nodejs.org/en/download](NodeJS)

Clone repository ini dengan peritah:

```git
git clone 
```

Kemduian, cd ke directory Competitions, lalu:

```bash
npm install

npm run build

npx prisma generate

npx prisma migrate

npm run start
```

server akan berlajan di localhost:3000 atau ip-Server:3000
