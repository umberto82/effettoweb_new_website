import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy Policy | EffettoWeb",
  description:
    "Informativa sulla privacy e trattamento dei dati personali secondo il GDPR. Come raccogliamo e proteggiamo i tuoi dati.",
};

export default function Privacy() {
  return (
    <>
      <Header />
      <section
        style={{
          width: 860,
          maxWidth: "100%",
          margin: "130px auto 0",
          padding: "24px 24px 80px",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 400,
            color: "#0f0f1a",
            marginBottom: 8,
            textAlign: "center",
          }}
        >
          Privacy Policy
        </h1>
        <p
          style={{
            color: "#888888",
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 14,
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          Ultimo aggiornamento: 10 Luglio 2026
        </p>

        <div
          style={{
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 15,
            lineHeight: 1.8,
            color: "#444",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontSize: 22,
              fontWeight: 400,
              color: "#0f0f1a",
              marginTop: 32,
              marginBottom: 12,
            }}
          >
            1. Titolare del Trattamento
          </h2>
          <p>
            EffettoWeb di Umberto Furlan
            <br />
            Email: umberto@effettoweb.com
            <br />
            Sito web: www.effettoweb.com
          </p>

          <h2
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontSize: 22,
              fontWeight: 400,
              color: "#0f0f1a",
              marginTop: 32,
              marginBottom: 12,
            }}
          >
            2. Dati Raccolti
          </h2>
          <p>
            Attraverso il form di contatto raccogliamo: nome, indirizzo email e
            il contenuto del messaggio che ci invii volontariamente. Non
            raccogliamo dati sensibili o di navigazione.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontSize: 22,
              fontWeight: 400,
              color: "#0f0f1a",
              marginTop: 32,
              marginBottom: 12,
            }}
          >
            3. Finalità del Trattamento
          </h2>
          <p>
            I dati raccolti vengono utilizzati esclusivamente per rispondere
            alla tua richiesta di contatto e per fornirti un preventivo. Non
            utilizziamo i tuoi dati per finalità di marketing senza il tuo
            consenso esplicito.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontSize: 22,
              fontWeight: 400,
              color: "#0f0f1a",
              marginTop: 32,
              marginBottom: 12,
            }}
          >
            4. Conservazione dei Dati
          </h2>
          <p>
            I dati vengono conservati per il tempo necessario a rispondere alla
            richiesta e per eventuali comunicazioni successive legate al
            servizio richiesto, e comunque non oltre 24 mesi dall&apos;ultimo
            contatto.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontSize: 22,
              fontWeight: 400,
              color: "#0f0f1a",
              marginTop: 32,
              marginBottom: 12,
            }}
          >
            5. Cookie
          </h2>
          <p>
            Questo sito utilizza esclusivamente cookie tecnici necessari al
            funzionamento. Non utilizziamo cookie di profilazione, analytics
            o tracciamento pubblicitario.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontSize: 22,
              fontWeight: 400,
              color: "#0f0f1a",
              marginTop: 32,
              marginBottom: 12,
            }}
          >
            6. I Tuoi Diritti
          </h2>
          <p>
            In qualsiasi momento puoi richiedere l&apos;accesso, la modifica o
            la cancellazione dei tuoi dati personali scrivendo a
            umberto@effettoweb.com. Hai diritto di proporre reclamo al Garante
            per la Protezione dei Dati Personali.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontSize: 22,
              fontWeight: 400,
              color: "#0f0f1a",
              marginTop: 32,
              marginBottom: 12,
            }}
          >
            7. Modifiche
          </h2>
          <p>
            Questa informativa può essere aggiornata nel tempo. Ti invitiamo a
            consultarla periodicamente. La data dell&apos;ultimo aggiornamento è
            indicata in alto.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
