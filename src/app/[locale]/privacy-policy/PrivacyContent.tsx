'use client'

import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'

const PrivacyContent = () => {
  const locale = useLocale()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="section">
      <div className="grid">
        {locale === 'de' && (
          <>
            <h1>Datenschutzerklärung</h1>
            <p>
              <strong>Stand:</strong> Mai 2025
            </p>
            <p>
              Wir freuen uns über dein Interesse an unserer App und Webseite „cappic“. Der Schutz
              deiner personenbezogenen Daten ist uns ein wichtiges Anliegen. Im Folgenden
              informieren wir dich über die Verarbeitung deiner Daten gemäß der
              Datenschutz-Grundverordnung (DSGVO).
            </p>
            <h2>1. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung im Rahmen der Nutzung der App und Webseite
              ist:
            </p>
            <p>
              Empressia d.o.o.
              <br />
              Zweigniederlassung Deutschland
              <br />
              Diemshoff 38
              <br />
              48282 Emsdetten, Deutschland
              <br />
              E-Mail: <a href="mailto:info@cappic.app">info@cappic.app</a>
              <br />
              Vertreten durch: Marvin Vrdoljak
            </p>
            <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <h3>2.1 Rechtsgrundlagen der Datenverarbeitung</h3>
            <p>
              Die Verarbeitung personenbezogener Daten erfolgt auf Basis folgender Rechtsgrundlagen
              gemäß DSGVO:
            </p>
            <ul>
              <li>
                Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung): Verarbeitung, die für die Nutzung
                der App erforderlich ist.
              </li>
              <li>
                Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse): Analyse der App-Nutzung zur
                Verbesserung der Benutzerfreundlichkeit.
              </li>
              <li>
                Art. 6 Abs. 1 lit. a DSGVO (Einwilligung): Falls eine ausdrückliche Zustimmung zur
                Verarbeitung (z. B. für Tracking) gegeben wird.
              </li>
            </ul>
            <h3>2.2 Nutzerkonto</h3>
            <p>Für die Nutzung der App ist eine Registrierung erforderlich. Dabei erheben wir:</p>
            <ul>
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Passwort (verschlüsselt gespeichert)</li>
              <li>Optional: Alter</li>
            </ul>
            <p>
              Alternativ ist eine Anmeldung über Drittanbieter möglich. Zur Verfügung stehen
              derzeit:
            </p>
            <h4>Google</h4>
            <ul>
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Profilbild (optional, je nach Google-Einstellungen)</li>
            </ul>
            <p>
              Weitere Informationen zur Datenverarbeitung durch Google findest du unter:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy
              </a>
            </p>
            <h4>Apple</h4>
            <p>
              Bei der Anmeldung über Apple erhalten wir – abhängig von den von dir gewählten
              Einstellungen – insbesondere:
            </p>
            <ul>
              <li>
                E-Mail-Adresse (diese kann bei Nutzung der E-Mail-Relay-Funktion eine
                Weiterleitungsadresse von Apple sein)
              </li>
              <li>Name (nur bei der erstmaligen Anmeldung übermittelt, sofern angegeben)</li>
            </ul>
            <p>
              Weitere Informationen zur Datenverarbeitung durch Apple findest du unter:{' '}
              <a
                href="https://www.apple.com/legal/privacy/de-ww/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.apple.com/legal/privacy/de-ww/
              </a>
            </p>
            <p>
              Die übermittelten Daten werden ausschließlich zur Einrichtung und Verwaltung deines
              Nutzerkontos in unserer App verwendet. Die Datenverarbeitung erfolgt gemäß Art. 6 Abs.
              1 lit. b DSGVO (Vertragserfüllung).
            </p>
            <p>
              Das Nutzerkonto kann jederzeit gelöscht werden. Mit der Löschung werden alle
              personenbezogenen Daten entfernt.
            </p>
            <h3>2.3 Hochgeladene Inhalte</h3>
            <p>In unserer App können folgende Inhalte hochgeladen werden:</p>
            <ul>
              <li>
                <h4>Profilbilder</h4>
                <p>
                  Profilbilder werden auf Supabase Storage gespeichert. Sie sind technisch
                  öffentlich zugänglich, jedoch in der App nur für Nutzer:innen sichtbar, mit denen
                  du gemeinsam in einem Deck bist.
                </p>
              </li>
              <li>
                <h4>Deck-Titelbilder und Challengebilder</h4>
                <p>
                  Diese Bilder werden ebenfalls auf Supabase Storage gespeichert und sind nur für
                  aktive Mitglieder eines gemeinsamen Decks einsehbar. Der Zugriff ist durch
                  serverseitige Sicherheitsregeln (RLS – Row-Level Security) geschützt und erfolgt
                  nur nach Authentifizierung über dein Nutzerkonto.
                </p>
              </li>
            </ul>
            <h4>Speicherung und Infrastruktur</h4>
            <p>
              Alle gespeicherten Inhalte und personenbezogenen Daten werden über{' '}
              <strong>Supabase</strong>, einem Backend-as-a-Service-Anbieter, verarbeitet und
              gespeichert. Für unsere Anwendung wurde ein
              <strong>Serverstandort in Frankfurt am Main (Deutschland)</strong> gewählt, wodurch
              die Speicherung innerhalb der EU erfolgt. Supabase nutzt die Infrastruktur von Amazon
              Web Services (AWS) oder Google Cloud, wobei stets europäische Rechenzentren verwendet
              werden.
              <br />
              <br />
              Supabase verarbeitet Daten gemäß der DSGVO und bietet entsprechende
              Standardvertragsklauseln (SCCs) sowie technische und organisatorische Maßnahmen (z. B.
              Zugriffskontrollen, Verschlüsselung) zum Schutz der gespeicherten Daten an.
              <br />
              Weitere Informationen zur Datenverarbeitung durch Supabase findest du hier: <br />
              <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
                https://supabase.com/privacy
              </a>
            </p>
            <h2>3. Speicherung und Löschung von Daten</h2>
            <p>
              Daten werden gespeichert, solange das Nutzerkonto aktiv ist.
              <br />
              Nach einer Löschung des Kontos werden alle personenbezogenen Daten vollständig
              entfernt.
              <br />
              Backups können temporär bestehen bleiben, bevor sie automatisch gelöscht werden.
              <br />
              Bestelldaten (Fotobuchkäufe) werden mindestens 6 Jahre gespeichert (steuerliche &
              gesetzliche Aufbewahrungspflichten).
            </p>
            <p>
              Eine Weitergabe deiner personenbezogenen Daten an Dritte erfolgt nur, wenn dies zur
              Erfüllung vertraglicher Pflichten erforderlich ist (z. B. Zahlungsdienstleister oder
              Versandpartner), du ausdrücklich eingewilligt hast oder eine gesetzliche Verpflichtung
              besteht. Eine Übermittlung in Drittländer findet nur unter Einhaltung der gesetzlichen
              Vorgaben und geeigneter Garantien statt.
            </p>
            <h2>4. Tracking und Analysetools</h2>
            <p>
              Unsere App und Webseite verwenden <strong>Vexo</strong>, um das Nutzerverhalten zu
              analysieren und die Benutzerfreundlichkeit zu verbessern.
            </p>
            <ul>
              <li>
                Opt-in erforderlich: Tracking wird erst aktiviert, wenn Nutzer:innen ausdrücklich
                zustimmen.
              </li>
              <li>
                Datenschutzkonform: Vexo ist ein datenschutzfreundliches Analysetool, das keine
                personenbezogenen Daten wie vollständige IP-Adressen speichert.
              </li>
              <li>
                Erhobene Daten: Besuchte Seiten, Verweildauer, Geräteinformationen, anonymisierte
                Nutzungsstatistiken.
              </li>
              <li>
                Speicherort: Die Datenverarbeitung erfolgt über Vexo in Übereinstimmung mit der
                DSGVO.
              </li>
              <li>
                Deaktivierungsmöglichkeit: Tracking kann jederzeit über die Cookie-Einstellungen
                oder in den App-Einstellungen deaktiviert werden.
              </li>
              <li>
                Weitere Informationen zur Datenverarbeitung durch Vexo findest du unter:{' '}
                <a href="https://vexo.co/privacy" target="_blank" rel="noopener noreferrer">
                  https://vexo.co/privacy
                </a>
              </li>
            </ul>

            <h2>5. Zahlung & Bestellungen von Fotobüchern</h2>

            <h3>5.1 Zahlungsabwicklung über Stripe / Peecho</h3>
            <p>
              Wenn Nutzer:innen ein Fotobuch bestellen, wird die Zahlung über{' '}
              <strong>Peecho</strong> (oder dessen Zahlungsdienstleister, z. B. Stripe) abgewickelt.
              <strong>cappic</strong> speichert keine vollständigen Kreditkarten- oder Zahlungsdaten
              direkt.
            </p>
            <ul>
              <li>
                Zahlungsdaten (z. B. Kartennummer, Rechnungsadresse) werden von Peecho oder Stripe
                gemäß deren jeweiligen Datenschutzrichtlinien verarbeitet.
              </li>
              <li>
                Peecho verarbeitet personenbezogene Daten von Kund:innen in Übereinstimmung mit der
                EU-Datenschutz-Grundverordnung (DSGVO).
              </li>
              <li>
                Weitere Informationen zur Datenverarbeitung durch Stripe finden Sie unter:{' '}
                <a href="https://stripe.com/de/privacy" target="_blank">
                  https://stripe.com/de/privacy
                </a>
                .
              </li>
              <li>
                <strong>cappic</strong> übermittelt an Peecho nur die minimal erforderlichen Daten
                (z. B. Bestell-ID, Betrag, Name, Nutzerkennung), um die Bestellung zu erstellen und
                abzuwickeln. Wir selbst fungieren nicht als Zahlungsabwickler.
              </li>
            </ul>

            <h3>5.2 Bestelldaten & Speicherung</h3>
            <p>
              Wir speichern Bestelldaten (z. B. bestelltes Produkt, Preis, Zeitstempel,
              Nutzerkennung, Rechnungsname und -adresse) zu steuerlichen, buchhalterischen und
              rechtlichen Zwecken. Diese Daten werden mindestens sechs Jahre aufbewahrt, sofern
              keine längere gesetzliche Aufbewahrungsfrist besteht.
              <br />
              Nutzer:innen können jederzeit Rechnungen oder Bestellhistorien anfordern, indem sie
              uns unter <a href="mailto:info@cappic.app">info@cappic.app</a>
              kontaktieren.
            </p>

            <h2>6. Versand & Druck der Fotobücher</h2>

            <h3>6.1 Datenweitergabe an Peecho</h3>
            <p>
              Zur Abwicklung der Bestellung werden die erforderlichen personenbezogenen Daten (Name,
              Lieferadresse, E-Mail-Adresse und die hochgeladenen Bestelldateien) an
              <strong>Peecho B.V.</strong> und ggf. deren Druckpartner übermittelt. Diese Daten
              werden ausschließlich zur Produktion, Verpackung und Lieferung des Fotobuchs
              verwendet.
              <br />
              Weitere Informationen finden Sie in der Datenschutzerklärung von Peecho:{' '}
              <a href="https://www.peecho.com/privacy-policy" target="_blank">
                https://www.peecho.com/privacy-policy
              </a>
              .
            </p>

            <h3>6.2 Dateispeicherung & Nachdrucke</h3>
            <p>
              Peecho kann die übermittelten Dateien (z. B. das Fotobuch-PDF und das Coverbild)
              vorübergehend speichern, um die Produktion oder mögliche Nachdrucke zu ermöglichen.
              Sobald die Dateien nicht mehr benötigt werden, kann Peecho sie gemäß den eigenen
              Aufbewahrungsrichtlinien löschen.
              <br />
              Siehe hierzu auch die Allgemeinen Geschäftsbedingungen von Peecho:{' '}
              <a href="https://www.peecho.com/buyer-terms-conditions" target="_blank">
                https://www.peecho.com/buyer-terms-conditions
              </a>
              .
            </p>

            <h3>6.3 Lieferung, Versand & Sendungsverfolgung</h3>
            <p>
              Nach Abschluss der Produktion übernimmt Peecho den Versand des Fotobuchs über Post-
              oder Kurierdienste. Eine Versandbestätigung mit Sendungsverfolgung wird in der Regel
              direkt von Peecho per E-Mail versendet.
              <br />
              Die Lieferzeiten variieren je nach Zielort. Innerhalb Europas beträgt die Lieferzeit
              in der Regel 2–7 Werktage, außerhalb Europas bis zu 10 Werktage oder länger.
              <br />
              Falls Ihre Bestellung nicht innerhalb der erwarteten Zeit eintrifft, wenden Sie sich
              bitte direkt an den Peecho-Support:{' '}
              <a href="https://support.peecho.com" target="_blank">
                https://support.peecho.com
              </a>
              .
            </p>

            <h3>6.4 Mängel, Reklamationen & Gewährleistung</h3>
            <p>
              Sollte Ihr Fotobuch beschädigt oder fehlerhaft geliefert werden, wenden Sie sich bitte
              an den Peecho-Support oder schreiben Sie uns an{' '}
              <a href="mailto:info@cappic.app">info@cappic.app</a>, damit wir Sie bei der
              Reklamation unterstützen können.
              <br />
              Zur Bearbeitung einer Reklamation kann Peecho Fotos des Mangels, die Bestellnummer und
              die Versanddaten anfordern. Je nach Fall stellt Peecho entweder ein Ersatzexemplar
              bereit oder erstattet den Kaufpreis gemäß den Buyer Terms and Conditions:{' '}
              <a href="https://www.peecho.com/buyer-terms-conditions" target="_blank">
                https://www.peecho.com/buyer-terms-conditions
              </a>
              .
            </p>

            <h2>7. Altersbeschränkung</h2>
            <p>
              Die Nutzung der App ist ab 12 Jahren erlaubt (je nach App-Store-Richtlinien).
              <br />
              Kinder unter 16 Jahren benötigen die Zustimmung der Erziehungsberechtigten, wenn
              personenbezogene Daten verarbeitet werden.
              <br />
              Eltern und Erziehungsberechtigte sind verantwortlich für die Nutzung durch
              minderjährige Personen.
            </p>

            <h2>8. Push-Benachrichtigungen</h2>
            <p>
              Unsere App kann Push-Benachrichtigungen senden, sofern du beim ersten Start der App
              zugestimmt hast (Art. 6 Abs. 1 lit. a DSGVO). Du kannst den Empfang von
              Push-Benachrichtigungen jederzeit in den Systemeinstellungen deines Geräts oder in den
              App-Einstellungen deaktivieren.
            </p>

            <h2>9. Nutzerrechte nach DSGVO</h2>
            <p>Nutzer:innen haben folgende Rechte:</p>
            <ul>
              <li>Auskunft über gespeicherte Daten erhalten</li>
              <li>Berichtigung unrichtiger Daten verlangen</li>
              <li>Löschung der Daten beantragen</li>
              <li>Widerspruch gegen die Verarbeitung einlegen</li>
              <li>Datenübertragbarkeit verlangen</li>
            </ul>
            <p>
              Anfragen hierzu können per E-Mail an{' '}
              <a href="mailto:info@cappic.app">info@cappic.app</a> gestellt werden.
            </p>

            <h2>10. Cookies und lokale Speicherung</h2>
            <p>
              Unsere Webseite verwendet Cookies zur Analyse und Speicherung von Nutzereinstellungen.
              <br />
              Tracking-Cookies werden erst nach Zustimmung (Opt-in) gesetzt.
              <br />
              Die App nutzt keine eigenen Tracking-Cookies, aber das Betriebssystem kann
              Analysefunktionen enthalten, die deaktiviert werden können.
            </p>
            <h2>11. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung kann bei Bedarf aktualisiert werden, um neue gesetzliche
              Anforderungen oder App-Funktionen zu berücksichtigen. Die aktuelle Version ist
              jederzeit auf unserer Webseite abrufbar.
            </p>
            <h2>12. Allgemeine Geschäftsbedingungen (AGB)</h2>
            <p>
              Die Nutzung der App „cappic“ unterliegt unseren Allgemeinen Geschäftsbedingungen
              (AGB).
              <br />
              Die AGB enthalten Informationen zu:
            </p>
            <ul>
              <li>Nutzungsvoraussetzungen der App</li>
              <li>Regelungen für kostenpflichtige Inhalte (Fotobücher)</li>
              <li>Haftungsausschluss</li>
              <li>Widerrufsrecht & Stornierungen</li>
              <li>Rechte & Pflichten der Nutzer:innen</li>
            </ul>
            <p>
              Die vollständigen AGB sind jederzeit <Link href="/terms-and-conditions">hier</Link>{' '}
              abrufbar.
            </p>
            <h2>13. Kontaktaufnahme</h2>
            <p>
              Wenn du mit uns Kontakt aufnimmst – z. B. per E-Mail an{' '}
              <a href="mailto:info@cappic.app">info@cappic.app</a> oder über ein Kontaktformular –,
              werden deine Angaben (z. B. Name, E-Mail-Adresse, Nachricht) zur Bearbeitung deiner
              Anfrage und für den Fall von Anschlussfragen gespeichert. Die Datenverarbeitung
              erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO (zur Durchführung vorvertraglicher Maßnahmen)
              oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Kommunikation).
            </p>
          </>
        )}
        {locale === 'en' && (
          <>
            <h1>Privacy Policy</h1>
            <p>
              <strong>Last updated:</strong> May 2025
            </p>

            <p>
              We appreciate your interest in our app and website “cappic.” Protecting your personal
              data is important to us. Below, we inform you about how your data is processed in
              accordance with the General Data Protection Regulation (GDPR).
            </p>

            <h2>1. Responsible Entity</h2>
            <p>
              The entity responsible for data processing in connection with the use of the app and
              website is:
            </p>
            <p>
              Empressia d.o.o.
              <br />
              German Branch Office
              <br />
              Diemshoff 38
              <br />
              48282 Emsdetten, Germany
              <br />
              E-mail: <a href="mailto:info@cappic.app">info@cappic.app</a>
              <br />
              Represented by: Marvin Vrdoljak
            </p>

            <h2>2. Collection and Processing of Personal Data</h2>
            <h3>2.1 Legal Basis for Data Processing</h3>
            <p>
              The processing of personal data is carried out based on the following legal grounds
              under GDPR:
            </p>
            <ul>
              <li>
                Article 6(1)(b) GDPR (Contract Performance): Processing necessary for using the app.
              </li>
              <li>
                Article 6(1)(f) GDPR (Legitimate Interest): Analyzing app usage to improve user
                experience.
              </li>
              <li>
                Article 6(1)(a) GDPR (Consent): If explicit consent is given for processing (e.g.,
                tracking).
              </li>
            </ul>
            <h3>2.2 User Account</h3>
            <p>To use the app, registration is required. We collect the following data:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Password (stored in encrypted form)</li>
              <li>Optional: Age</li>
            </ul>
            <p>Alternatively, you may sign in using third-party providers. Currently available:</p>
            <h4>Google</h4>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Profile picture (optional, depending on your Google settings)</li>
            </ul>
            <p>
              For more information on how Google processes data, please visit:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy
              </a>
            </p>
            <h4>Apple</h4>
            <p>
              When signing in with Apple, we receive the following information, depending on the
              settings you have chosen:
            </p>
            <ul>
              <li>
                Email address (this may be a relay address provided by Apple if you use their email
                relay feature)
              </li>
              <li>Name (only provided during initial sign-in, if shared)</li>
            </ul>
            <p>
              For more information on how Apple processes data, please visit:{' '}
              <a
                href="https://www.apple.com/legal/privacy/de-ww/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.apple.com/legal/privacy/de-ww/
              </a>
            </p>
            <p>
              The provided data is used exclusively to set up and manage your user account in our
              app. Data processing is carried out in accordance with Art. 6(1)(b) GDPR (performance
              of a contract).
            </p>
            <p>
              The user account can be deleted at any time. Upon deletion, all personal data will be
              removed.
            </p>
            <h3>2.3 Uploaded Content</h3>
            <p>The following types of content can be uploaded in our app:</p>
            <ul>
              <li>
                <h4>Profile Pictures</h4>
                <p>
                  Profile pictures are stored on Supabase Storage. While they are technically
                  publicly accessible, they are only visible within the app to other users with whom
                  you share a deck.
                </p>
              </li>
              <li>
                <h4>Deck Cover Images and Challenge Images</h4>
                <p>
                  These images are also stored on Supabase Storage and are only accessible to active
                  members of the same deck. Access is protected by server-side security rules (RLS –
                  Row-Level Security) and is granted only after authentication via your user
                  account.
                </p>
              </li>
            </ul>
            <h4>Storage and Infrastructure</h4>
            <p>
              All stored content and personal data are processed and stored using{' '}
              <strong>Supabase</strong>, a backend-as-a-service provider. For our application, we
              have selected a<strong>server location in Frankfurt am Main (Germany)</strong>,
              ensuring that all data is stored within the EU. Supabase relies on infrastructure
              provided by Amazon Web Services (AWS) or Google Cloud, always using European data
              centres.
              <br />
              <br />
              Supabase processes data in compliance with the GDPR and implements appropriate
              Standard Contractual Clauses (SCCs), as well as technical and organisational measures
              (e.g. access controls, encryption) to safeguard stored data.
              <br />
              For more information on how Supabase processes data, please visit: <br />
              <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
                https://supabase.com/privacy
              </a>
            </p>
            <h2>3. Data Storage and Deletion</h2>
            <p>
              Data is stored as long as the user account is active.
              <br />
              Upon account deletion, all personal data is completely removed.
              <br />
              Backups may temporarily persist before being automatically deleted.
              <br />
              Order data (photo book purchases) is stored for at least six years due to tax and
              legal retention requirements.
            </p>
            <p>
              Your personal data will only be shared with third parties if this is necessary to
              fulfil contractual obligations (e.g. payment service providers or shipping partners),
              if you have given your explicit consent, or if there is a legal obligation to do so.
              Any transfer to third countries takes place only in accordance with legal requirements
              and with appropriate safeguards in place.
            </p>
            <h2>4. Tracking and Analytics</h2>
            <p>
              Our app and website use <strong>Vexo</strong> to analyze user behavior and improve the
              user experience.
            </p>
            <ul>
              <li>Opt-in required: Tracking is only activated with explicit user consent.</li>
              <li>
                Privacy-compliant: Vexo is a privacy-focused analytics tool that does not store
                personal data such as full IP addresses.
              </li>
              <li>
                Collected data: Visited pages, time spent, device information, anonymized usage
                statistics.
              </li>
              <li>
                Storage location: Data processing is carried out by Vexo in compliance with GDPR.
              </li>
              <li>
                Opt-out option: Tracking can be disabled at any time via cookie settings or in the
                app settings.
              </li>
              <li>
                For more information on how Vexo processes data, please visit:{' '}
                <a href="https://vexo.co/privacy" target="_blank" rel="noopener noreferrer">
                  https://vexo.co/privacy
                </a>
              </li>
            </ul>

            <h2>5. Payment & Photo Book Orders</h2>

            <h3>5.1 Payment Processing via Stripe / Peecho</h3>
            <p>
              When a user orders a photo book, payment is processed by Peecho (or its payment
              service providers, such as Stripe).
              <strong>cappic</strong> does not store full credit card or payment credentials
              directly.
            </p>
            <ul>
              <li>
                Payment data (e.g. card number, billing address) is handled by Peecho or Stripe in
                accordance with their respective privacy policies.
              </li>
              <li>
                Peecho processes customers’ personal data in compliance with the EU General Data
                Protection Regulation (GDPR).
              </li>
              <li>
                For details on Stripe's data handling and privacy, see:{' '}
                <a href="https://stripe.com/privacy" target="_blank">
                  https://stripe.com/privacy
                </a>
                .
              </li>
              <li>
                <strong>cappic</strong> only transmits the minimal data required to Peecho (e.g.
                order ID, total amount, buyer name, user identifier) in order to create and fulfil
                the order. We do not act as a payment processor.
              </li>
            </ul>

            <h3>5.2 Order Data & Storage</h3>
            <p>
              We store order metadata (e.g. ordered product, price, timestamp, purchaser identifier,
              billing name and address) in our system for legal, tax, and accounting purposes. This
              data is retained for at least six years, unless a longer period is required by law.
              <br />
              Users may request copies of invoices or order history at any time by contacting{' '}
              <a href="mailto:info@cappic.app">info@cappic.app</a>.
            </p>

            <h2>6. Shipping & Printing of Photo Books</h2>

            <h3>6.1 Data Sharing with Peecho</h3>
            <p>
              To fulfil your order, we share the necessary personal data (name, shipping address,
              email, and order file content) with <strong>Peecho B.V.</strong> and, where
              applicable, its printing partners. This information is used solely for the production,
              packaging, and delivery of your photo book.
              <br />
              For details, please refer to Peecho's Privacy Policy:{' '}
              <a href="https://www.peecho.com/privacy-policy" target="_blank">
                https://www.peecho.com/privacy-policy
              </a>
              .
            </p>

            <h3>6.2 File Retention & Reprints</h3>
            <p>
              Peecho may temporarily store submitted files (such as the photo book PDF and cover
              image) to enable production or potential reprints. Once files are no longer required,
              Peecho may delete them at its discretion, in accordance with its own data retention
              practices.
              <br />
              See also Peecho's Terms and Conditions:{' '}
              <a href="https://www.peecho.com/buyer-terms-conditions" target="_blank">
                https://www.peecho.com/buyer-terms-conditions
              </a>
              .
            </p>

            <h3>6.3 Delivery, Shipping & Tracking</h3>
            <p>
              After production, Peecho arranges shipment of the photo book via postal or courier
              services. A shipping confirmation email, including tracking details, is usually sent
              directly by Peecho.
              <br />
              Delivery times vary depending on the destination. Within Europe, deliveries generally
              take 2–7 business days, while shipments outside Europe may take up to 10 business days
              or longer.
              <br />
              If your order has not arrived within the expected timeframe, please contact Peecho
              support directly for assistance:{' '}
              <a href="https://support.peecho.com" target="_blank">
                https://support.peecho.com
              </a>
              .
            </p>

            <h3>6.4 Defects, Complaints & Warranty Claims</h3>
            <p>
              If your photo book arrives damaged or defective, please contact Peecho's support team
              or email us at <a href="mailto:info@cappic.app">info@cappic.app</a>
              so we can assist you in resolving the issue.
              <br />
              To process a complaint, Peecho may require photos of the defect, your order number,
              and the shipping details. Depending on the situation, Peecho may provide a replacement
              or a refund in accordance with its Buyer Terms and Conditions:{' '}
              <a href="https://www.peecho.com/buyer-terms-conditions" target="_blank">
                https://www.peecho.com/buyer-terms-conditions
              </a>
              .
            </p>

            <h2>7. Age Restrictions</h2>
            <p>
              The app is available for users aged 12+ (subject to app store policies).
              <br />
              Users under 16 require parental consent if personal data is processed.
              <br />
              Parents/guardians are responsible for supervising minors’ app usage.
            </p>

            <h2>8. Push Notifications</h2>
            <p>
              Our app may send push notifications if you have granted permission when first using
              the app (Art. 6 para. 1 lit. a GDPR). You can disable push notifications at any time
              in your device settings or within the app's settings.
            </p>

            <h2>9. User Rights under GDPR</h2>
            <p>Users have the following rights:</p>
            <ul>
              <li>
                <strong>Access:</strong> Request information about stored data.
              </li>
              <li>
                <strong>Correction:</strong> Request rectification of incorrect data.
              </li>
              <li>
                <strong>Deletion:</strong> Request data removal.
              </li>
              <li>
                <strong>Objection:</strong> Object to data processing.
              </li>
              <li>
                <strong>Data portability:</strong> Request transfer of data to another provider.
              </li>
            </ul>
            <p>
              Requests can be sent via email to <a href="mailto:info@cappic.app">info@cappic.app</a>
              .
            </p>

            <h2>10. Cookies and Local Storage</h2>
            <p>
              Our website uses cookies for analytics and user preference storage.
              <br />
              Tracking cookies are only set with explicit consent (opt-in).
              <br />
              The app does not use its own tracking cookies, but the operating system may have
              analytics features that can be disabled.
            </p>

            <h2>11. Changes to this Privacy Policy</h2>
            <p>
              This privacy policy may be updated to reflect new legal requirements or app features.
              The latest version is always available on our website.
            </p>

            <h2>12. Terms & Conditions (T&C)</h2>
            <p>
              Using the “cappic” app is subject to our Terms & Conditions (T&C).
              <br />
              The T&C cover:
            </p>
            <ul>
              <li>Conditions for app usage</li>
              <li>Rules for paid content (photo books)</li>
              <li>Liability disclaimers</li>
              <li>Withdrawal & cancellation policies</li>
              <li>User rights & obligations</li>
            </ul>
            <p>
              The full T&C can be accessed <Link href="/terms-and-conditions">here</Link>.
            </p>

            <h3>13. Contact</h3>
            <p>
              If you contact us – for example, by email at{' '}
              <a href="mailto:info@cappic.app">info@cappic.app</a> or via a contact form – the
              information you provide (e.g. name, email address, message) will be stored for the
              purpose of processing your enquiry and in case of follow-up questions. The data
              processing is carried out in accordance with Art. 6 para. 1 lit. b GDPR (for the
              performance of pre-contractual measures) or Art. 6 para. 1 lit. f GDPR (legitimate
              interest in communication).
            </p>
          </>
        )}
      </div>
    </section>
  )
}

export default PrivacyContent
