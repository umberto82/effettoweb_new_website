---
title: "Gestione di più applicazioni in una singola configurazione VPS"
date: "2024-10-24"
excerpt: "Scopri come gestire più applicazioni Node.js su una singola VPS utilizzando PM2 e Nginx per il proxy delle richieste."
cover: "https://effettoweb.com/wp-content/uploads/2024/10/female-programmer-working-on-coding-software-development-and-web-design--1024x681.jpg"
---

In questo articolo vedremo una configurazione **VPS** con un file PM2 per avviare più applicazioni Node.js contemporaneamente sulla stessa VPS.

## Requisiti di Base

1. VPS operativa con accesso SSH.
2. Node.js installato.
3. Nginx configurato per gestire il proxy delle richieste verso le diverse applicazioni in esecuzione su porte differenti.
4. PM2 installato.

## Configurazione di PM2 per Avviare Più Applicazioni

Quando gestite più applicazioni su una VPS, è importante avere un sistema affidabile. PM2 offre tutte queste funzionalità in modo semplice:

```javascript
module.exports = {
  apps: [
    {
      name: "App1",
      cwd: "./app1",
      script: "pnpm run start",
      instances: 1,
      exec_mode: "fork"
    },
    {
      name: "App2",
      cwd: "./app2",
      script: "pnpm run start",
      instances: 1,
      exec_mode: "fork"
    }
  ]
};
```

## Spiegazione del File di Configurazione

- **apps**: Array che contiene le configurazioni delle applicazioni.
- **name**: Nome univoco per identificare l'applicazione.
- **cwd**: Directory di lavoro corrente dell'applicazione.
- **script**: Comando eseguito per avviare l'applicazione.
- **instances**: Numero di istanze da avviare.
- **exec_mode**: Modalità di esecuzione (fork o cluster).

## Gestire le Applicazioni

Una volta creato il file di configurazione `pm2.config.js`:

```bash
pm2 start pm2.config.js   # avvia tutte le app
pm2 stop pm2.config.js    # ferma tutte le app
```

## Conclusioni

Con PM2 è possibile gestire più applicazioni su una VPS senza complicazioni, mentre Nginx funge da proxy per instradare correttamente il traffico ai diversi servizi.
