'use client'

import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'

const TermsContent = () => {
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
            <h1>Allgemeine Geschäftsbedingungen</h1>
            <p>
              <strong>Stand:</strong> Mai 2025
            </p>

            <h2>1. Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Nutzung der App „cappic“ sowie
              aller damit verbundenen Dienstleistungen. Sie gelten für alle Nutzer:innen der App.
            </p>
            <p>Mit der Registrierung und Nutzung der App erkennen Sie diese AGB an.</p>

            <h2>2. Begriffsdefinitionen</h2>
            <p>In diesen AGB haben die folgenden Begriffe die jeweils angegebene Bedeutung:</p>
            <p>
              „Nutzer“ / „Sie“ bezeichnet jede natürliche Person, die sich für die App registriert
              oder deren Inhalte nutzt.
              <br />
              „Anbieter“ / „wir“ bezeichnet den Betreiber der App „cappic“.
              <br />
              „Inhalte“ bezeichnet alle durch Nutzer:innen erstellten oder hochgeladenen Bilder,
              Texte oder sonstige Daten.
              <br />
              „Fotobücher“ bezeichnet die über die App bestellbaren physischen Produkte.
            </p>

            <h2>3. Registrierung und Nutzerkonto</h2>
            <h3>3.1 Registrierung</h3>
            <p>
              Die Nutzung der App erfordert eine Registrierung. Dabei sind der vollständige Name und
              eine gültige E-Mail-Adresse anzugeben.
            </p>

            <h3>3.2 Altersbeschränkung</h3>
            <p>
              Die Nutzung der App ist ab 12 Jahren gestattet. Nutzer:innen unter 16 Jahren benötigen
              die Zustimmung ihrer Erziehungsberechtigten.
            </p>

            <h3>3.3 Zugangsdaten</h3>
            <p>
              Sie sind verpflichtet, Ihre Zugangsdaten vertraulich zu behandeln und vor dem Zugriff
              Dritter zu schützen.
            </p>

            <h3>3.4 Kündigung</h3>
            <p>Nutzer:innen können ihr Konto jederzeit ohne Angabe von Gründen löschen.</p>

            <h2>4. Nutzungsrechte und Verhaltensregeln</h2>
            <h3>4.1 Inhalte hochladen</h3>
            <p>
              Sie dürfen eigene Inhalte (z. B. Fotos) hochladen, sofern diese nicht gegen geltendes
              Recht oder diese AGB verstoßen.
            </p>

            <h3>4.2 Verbotene Inhalte</h3>
            <p>Es ist untersagt, Inhalte hochzuladen, die:</p>
            <ul>
              <li>Rechte Dritter verletzen (z. B. Urheberrechte).</li>
              <li>Gewaltverherrlichend, pornografisch, rassistisch oder diskriminierend sind.</li>
              <li>Persönlichkeitsrechte Dritter verletzen.</li>
            </ul>

            <h3>4.3 Verhalten</h3>
            <p>
              Nutzer:innen verpflichten sich, respektvoll mit anderen zu kommunizieren.
              Beleidigende, belästigende oder irreführende Inhalte sind untersagt.
            </p>

            <h3>4.4 Sperrung des Kontos</h3>
            <p>
              Bei Verstößen gegen diese Verhaltensregeln behalten wir uns das Recht vor, das
              Nutzerkonto vorübergehend oder dauerhaft zu sperren.
            </p>

            <h2>5. Käufe von Fotobüchern</h2>

            <h3>5.1 Angebot & Vertragsabschluss</h3>
            <p>
              Der Kauf von Fotobüchern erfolgt über die App <strong>cappic</strong>. Nach der
              Erstellung eines Fotobuchs wird der Bestellprozess über unseren Druck- und
              Vertriebspartner <strong>Peecho B.V.</strong> (
              <a href="https://www.peecho.com" target="_blank">
                www.peecho.com
              </a>
              ) abgewickelt.
              <br />
              Die Bestellung erfolgt über ein in die App eingebettetes Bestellformular von Peecho.
              Nutzer:innen geben dort ihre Lieferadresse an und schließen den Kauf direkt mit Peecho
              B.V. ab.
              <br />
              Mit Abschluss der Bestellung und Erhalt der Bestellbestätigung per E-Mail von Peecho
              kommt der Kaufvertrag ausschließlich zwischen der/dem Nutzer:in und Peecho B.V.
              zustande.
              <br />
              <strong>cappic</strong> fungiert hierbei lediglich als technischer Vermittler und ist
              nicht Verkäufer oder Vertragspartner im Sinne des Kaufvertrags.
              <br />
              Es gelten zusätzlich die Allgemeinen Geschäftsbedingungen von Peecho B.V., einsehbar
              unter:{' '}
              <a href="https://www.peecho.com/buyer-terms-conditions" target="_blank">
                https://www.peecho.com/buyer-terms-conditions
              </a>
            </p>

            <h3>5.2 Preise & Zahlung</h3>
            <p>
              Alle Preise werden von Peecho im Rahmen des Bestellvorgangs angezeigt und verstehen
              sich inklusive der gesetzlichen Mehrwertsteuer, sofern nicht anders angegeben.
              <br />
              Die Zahlung erfolgt ausschließlich über die von Peecho angebotenen Zahlungsmethoden
              (z. B. Kreditkarte, PayPal oder andere über Stripe oder Partnerdienste bereitgestellte
              Zahlungsanbieter).
              <br />
              Es gelten die Zahlungsbedingungen und Datenschutzbestimmungen von Peecho sowie
              gegebenenfalls der jeweiligen Zahlungsdienstleister:{' '}
              <a href="https://stripe.com/de/privacy" target="_blank">
                https://stripe.com/de/privacy
              </a>
            </p>

            <h3>5.3 Produktion & Versand</h3>
            <p>
              Die Produktion und der Versand der Fotobücher erfolgen durch Peecho oder deren
              Produktionspartner. Die Produktionszeit beträgt in der Regel 1–4 Werktage. Die
              Versanddauer variiert je nach Lieferadresse und Versandart.
              <br />
              Detaillierte Informationen zu Versandzeiten und -kosten finden Sie auf der Webseite
              von Peecho unter:{' '}
              <a href="https://www.peecho.com/buyer-terms-conditions" target="_blank">
                https://www.peecho.com/buyer-terms-conditions
              </a>
            </p>

            <h3>5.4 Lieferverzögerungen & Erstattungen</h3>
            <p>
              Die angegebenen Lieferzeiten sind unverbindlich. Verzögerungen, die auf Umstände
              außerhalb des Einflussbereichs von cappic oder Peecho zurückzuführen sind (z. B. Zoll,
              Transportverzögerungen, höhere Gewalt), begründen keinen Anspruch auf Schadenersatz.
              <br />
              Falls sich die Lieferung um mehr als 14 Tage über die angegebene Lieferzeit hinaus
              verzögert, können Käufer:innen sich direkt an Peecho wenden, um eine Klärung oder
              Erstattung zu veranlassen.
              <br />
              Eine Erstattung erfolgt ausschließlich gemäß den Rückerstattungsrichtlinien von
              Peecho.
            </p>

            <h3>5.5 Rückgabe & Reklamation</h3>
            <p>
              Da Fotobücher individuell nach Kundenvorgaben angefertigt werden, besteht kein
              Widerrufsrecht nach Beginn der Produktion (§ 312g Abs. 2 Nr. 1 BGB).
              <br />
              Sollte ein Fotobuch fehlerhaft oder beschädigt geliefert werden, können Nutzer:innen
              sich direkt an den Peecho-Support wenden oder uns unter{' '}
              <a href="mailto:info@cappic.app">info@cappic.app</a>
              kontaktieren, damit wir die Reklamation weiterleiten.
              <br />
              Die Bearbeitung von Reklamationen, Ersatzlieferungen oder Erstattungen erfolgt
              ausschließlich über Peecho gemäß deren Bedingungen:{' '}
              <a href="https://www.peecho.com/buyer-terms-conditions" target="_blank">
                https://www.peecho.com/buyer-terms-conditions
              </a>
            </p>

            <h2>6. Haftung</h2>
            <h3>6.1 Inhalte</h3>
            <p>
              Sie sind für die von Ihnen hochgeladenen Inhalte selbst verantwortlich. Wir übernehmen
              keine Haftung für diese Inhalte.
            </p>

            <h3>6.2 Challenges</h3>
            <p>
              Die Teilnahme an Challenges erfolgt auf eigene Gefahr. Wir haften nicht für
              Verletzungen oder Schäden, die durch die Teilnahme entstehen.
            </p>

            <h3>6.3 Technische Fehler</h3>
            <p>
              Wir übernehmen keine Haftung für Systemausfälle, Datenverluste oder andere technische
              Probleme.
            </p>

            <h3>6.4 Ausschluss einfacher Fahrlässigkeit</h3>
            <p>
              Wir haften nur für vorsätzlich oder grob fahrlässig verursachte Schäden. Eine Haftung
              für einfache Fahrlässigkeit ist ausgeschlossen, soweit keine wesentlichen
              Vertragspflichten verletzt werden.
            </p>

            <h3>6.5 Haftungsausschluss bei der Nutzung der App</h3>
            <p>
              Die Nutzung der App "cappic" und die Durchführung von Challenges erfolgt auf eigene
              Gefahr. Wir übernehmen keine Haftung für Verletzungen, Schäden oder andere negative
              Konsequenzen, die durch die Nutzung der App oder durch das Absolvieren von Challenges
              entstehen.
            </p>
            <p>
              Nutzer:innen sind verpflichtet, ihre eigene Sicherheit sowie die Sicherheit Dritter
              jederzeit zu gewährleisten und auf mögliche Risiken zu achten. Die Challenges sind als
              spielerische Inspiration gedacht und sollten nur im Rahmen der persönlichen
              Möglichkeiten und unter sicheren Bedingungen ausgeführt werden.
            </p>

            <h2>7. Datenschutz</h2>
            <p>
              Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer{' '}
              <Link href={'/privacy-policy'}>Datenschutzerklärung</Link>.<br />
              Nutzer:innen stimmen zu, dass personenbezogene Daten zur Vertragsabwicklung
              gespeichert und verarbeitet werden.
            </p>

            <h2>8. Kundenservice & Beschwerden</h2>
            <p>
              Für Fragen oder Beschwerden erreichen Sie uns per E-Mail unter{' '}
              <a href="mailto:info@cappic.app">info@cappic.app</a>.<br />
              Wir bemühen uns, alle Anfragen innerhalb von 48 Stunden zu beantworten.
            </p>

            <h2>9. Änderungen der AGB</h2>
            <p>
              Wir behalten uns das Recht vor, diese AGB jederzeit zu ändern.
              <br />
              Änderungen treten in Kraft, sobald sie in der App oder auf unserer Webseite
              veröffentlicht werden.
              <br />
              Falls Nutzer:innen mit den Änderungen nicht einverstanden sind, müssen sie ihr
              Nutzerkonto innerhalb von 14 Tagen kündigen. Die weitere Nutzung der App gilt als
              Zustimmung zu den neuen Bedingungen.
            </p>

            <h2>10. Anwendbares Recht & Gerichtsstand</h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland, unter Ausschluss des UN-Kaufrechts.
              <br />
              Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesen AGB ist der
              Sitz des Anbieters, sofern es sich bei dem Nutzer um eine juristische Person oder
              einen Kaufmann handelt.
            </p>

            <h2>11. Nutzungsrechte an Inhalten </h2>
            <p>
              Mit dem Hochladen von Inhalten (z. B. Fotos) räumen Nutzer:innen dem Anbieter das
              nicht-exklusive, räumlich und zeitlich unbegrenzte Recht ein, diese Inhalte im Rahmen
              der App bereitzustellen, zu vervielfältigen, technisch zu verarbeiten (z. B.
              Komprimierung, Vorschaubilder) und zur Durchführung von Funktionen (z. B. Deckansicht,
              Fotobucherstellung) zu nutzen. Eine Veröffentlichung außerhalb der App oder Weitergabe
              an Dritte erfolgt nicht ohne ausdrückliche Zustimmung.
            </p>

            <h2>12. Geistiges Eigentum </h2>
            <p>
              Alle Inhalte der App „cappic“, einschließlich Logos, Designs, Texte, Software und
              Funktionen, sind geistiges Eigentum des Anbieters oder seiner Lizenzgeber und dürfen
              ohne vorherige schriftliche Zustimmung nicht vervielfältigt, verbreitet oder
              anderweitig verwendet werden.
            </p>

            <h2>13. Verfügbarkeit </h2>
            <p>
              Der Anbieter ist bemüht, die App möglichst unterbrechungsfrei zur Verfügung zu
              stellen. Es kann jedoch zu temporären Einschränkungen oder Unterbrechungen aufgrund
              von Wartungsarbeiten, Updates oder technischen Störungen kommen. Ein Anspruch auf
              ständige Verfügbarkeit besteht nicht.
            </p>

            <h2>14. Unzulässige Nutzung </h2>
            <p>
              Die Nutzung automatisierter Skripte, Bots oder externer Programme zur Steuerung,
              Analyse oder Manipulation der App ist untersagt. Das Nutzerkonto darf nur von der
              registrierten Person verwendet werden.
            </p>
          </>
        )}
        {locale === 'en' && (
          <>
            <h1>Terms & Conditions</h1>
            <p>
              <strong>Last updated:</strong> May 2025
            </p>

            <h2>1. Scope</h2>
            <p>
              These Terms & Conditions (T&C) govern the use of the "cappic" app and all associated
              services. They apply to all users of the app.
            </p>
            <p>By registering and using the app, you agree to these T&C.</p>

            <h2>2. Definitions</h2>
            <p>In these T&C, the following terms have the specified meanings:</p>
            <p>
              "User" / "You" refers to any natural person who registers for the app or uses its
              content.
              <br />
              "Provider" / "We" refers to the operator of the "cappic" app.
              <br />
              "Content" refers to all images, texts, or other data created or uploaded by users.
              <br />
              "Photo books" refers to the physical products that can be ordered through the app.
            </p>

            <h2>3. Registration and User Account</h2>
            <h3>3.1 Registration</h3>
            <p>
              Using the app requires registration, including the full name and a valid email
              address.
            </p>

            <h3>3.2 Age Restriction</h3>
            <p>
              The app is available for users aged 12 and older. Users under 16 require parental
              consent.
            </p>

            <h3>3.3 Account Credentials</h3>
            <p>
              You are responsible for keeping your login credentials confidential and preventing
              third-party access.
            </p>

            <h3>3.4 Termination</h3>
            <p>Users can delete their account at any time without providing a reason.</p>

            <h2>4. Usage Rights and Conduct Rules</h2>
            <h3>4.1 Uploading Content</h3>
            <p>
              You may upload your own content (e.g., photos) as long as it does not violate
              applicable laws or these T&C.
            </p>

            <h3>4.2 Prohibited Content</h3>
            <p>Uploading content that meets any of the following criteria is prohibited:</p>
            <ul>
              <li>Violates third-party rights (e.g., copyrights).</li>
              <li>Contains violent, pornographic, racist, or discriminatory material.</li>
              <li>Violates the personal rights of third parties.</li>
            </ul>

            <h3>4.3 Conduct</h3>
            <p>
              Users must communicate respectfully. Offensive, harassing, or misleading content is
              not allowed.
            </p>

            <h3>4.4 Account Suspension</h3>
            <p>
              We reserve the right to temporarily or permanently suspend user accounts in case of
              violations of these rules.
            </p>

            <h2>5. Purchases of Photo Books</h2>

            <h3>5.1 Offer & Conclusion of Contract</h3>
            <p>
              Purchases of photo books are made via the <strong>cappic</strong> app. After creating
              a photo book, the ordering process is handled by our printing and fulfilment partner{' '}
              <strong>Peecho B.V.</strong> (
              <a href="https://www.peecho.com" target="_blank">
                www.peecho.com
              </a>
              ).
              <br />
              The order is placed through an order form (iFrame) embedded in the app and operated by
              Peecho. Users enter their delivery details and complete the purchase directly with
              Peecho B.V.
              <br />
              The sales contract is concluded exclusively between the user and Peecho B.V. upon
              completion of the order and receipt of the order confirmation email from Peecho.
              <br />
              <strong>cappic</strong> acts solely as a technical intermediary and is not the seller
              or contractual partner within the meaning of the purchase contract.
              <br />
              In addition, the Buyer Terms and Conditions of Peecho B.V. apply and can be found at:{' '}
              <a href="https://www.peecho.com/buyer-terms-conditions" target="_blank">
                https://www.peecho.com/buyer-terms-conditions
              </a>
            </p>

            <h3>5.2 Prices & Payment</h3>
            <p>
              All prices are displayed by Peecho during the order process and include statutory VAT
              unless otherwise stated.
              <br />
              Payment is made exclusively via the payment methods offered by Peecho (e.g. credit
              card, PayPal or other payment services provided via Stripe or partner providers).
              <br />
              The payment terms and privacy policies of Peecho and, where applicable, the respective
              payment service providers apply:{' '}
              <a href="https://stripe.com/privacy" target="_blank">
                https://stripe.com/privacy
              </a>
            </p>

            <h3>5.3 Production & Shipping</h3>
            <p>
              Production and shipping of the photo books are carried out by Peecho or its production
              partners. The production time is usually 1–4 working days. Delivery times vary
              depending on the delivery address and shipping method.
              <br />
              Detailed information about shipping times and costs can be found on Peecho's website
              at:{' '}
              <a href="https://www.peecho.com/buyer-terms-conditions" target="_blank">
                https://www.peecho.com/buyer-terms-conditions
              </a>
            </p>

            <h3>5.4 Delivery Delays & Refunds</h3>
            <p>
              The stated delivery times are non-binding. Delays caused by circumstances beyond the
              control of cappic or Peecho (e.g. customs delays, transport issues, force majeure) do
              not entitle the buyer to claim damages.
              <br />
              If delivery is delayed by more than 14 days beyond the estimated delivery period,
              buyers may contact Peecho directly to request clarification or a refund.
              <br />
              Refunds are processed exclusively in accordance with Peecho’s refund policy.
            </p>

            <h3>5.5 Returns & Complaints</h3>
            <p>
              As photo books are individually produced according to customer specifications, there
              is no right of withdrawal once production has started (Section 312g (2) No. 1 of the
              German Civil Code – BGB).
              <br />
              If a photo book is delivered defective or damaged, users may contact Peecho's customer
              support directly or email us at <a href="mailto:info@cappic.app">info@cappic.app</a>
              so that we can forward the complaint.
              <br />
              All complaints, replacements or refunds are handled exclusively by Peecho in
              accordance with their terms and conditions:{' '}
              <a href="https://www.peecho.com/buyer-terms-conditions" target="_blank">
                https://www.peecho.com/buyer-terms-conditions
              </a>
            </p>

            <h2>6. Liability</h2>
            <h3>6.1 Content</h3>
            <p>
              You are solely responsible for any content you upload. We assume no liability for
              user-generated content.
            </p>

            <h3>6.2 Challenges</h3>
            <p>
              Participation in challenges is at your own risk. We are not liable for injuries or
              damages resulting from challenge participation.
            </p>

            <h3>6.3 Technical Issues</h3>
            <p>We assume no liability for system failures, data loss, or other technical issues.</p>

            <h3>6.4 Exclusion of Simple Negligence</h3>
            <p>
              We are only liable for damages caused by intentional or gross negligence. Liability
              for simple negligence is excluded unless essential contractual obligations are
              breached.
            </p>

            <h3>6.5 Disclaimer for App Usage</h3>
            <p>
              Using the "cappic" app and participating in challenges is at your own risk. We assume
              no liability for injuries, damages, or other negative consequences resulting from app
              usage or challenge participation.
            </p>
            <p>
              Users must ensure their own safety and the safety of others at all times. Challenges
              are intended for entertainment and should only be performed within personal
              capabilities and under safe conditions.
            </p>

            <h2>7. Data Protection</h2>
            <p>
              The processing of personal data is governed by our{' '}
              <Link href={'/privacy-policy'}>Privacy Policy</Link>.<br />
              Users agree that personal data may be stored and processed for contract fulfillment.
            </p>

            <h2>8. Customer Service & Complaints</h2>
            <p>
              For questions or complaints, contact us at{' '}
              <a href="mailto:info@cappic.app">info@cappic.app</a>.<br />
              We aim to respond to all inquiries within 48 hours.
            </p>

            <h2>9. Changes to the T&C</h2>
            <p>
              We reserve the right to amend these T&C at any time.
              <br />
              Changes take effect as soon as they are published in the app or on our website.
              <br />
              If users do not agree with the changes, they must delete their account within 14 days.
              <br />
              Continued use of the app constitutes acceptance of the updated terms.
            </p>

            <h2>10. Governing Law & Jurisdiction</h2>
            <p>
              German law applies, excluding the UN Convention on Contracts for the International
              Sale of Goods (CISG).
              <br />
              The place of jurisdiction for disputes related to these T&C is the registered office
              of the provider, if the user is a legal entity or merchant.
            </p>

            <h2>11. Rights of Use for Uploaded Content</h2>
            <p>
              By uploading content (e.g. photos), users grant the provider a non-exclusive,
              geographically and temporally unrestricted right to make this content available within
              the app, to reproduce it, to process it technically (e.g. compression, preview
              images), and to use it for the execution of features (e.g. deck views, photo book
              creation). Publication outside the app or sharing with third parties will only take
              place with the user's explicit consent.
            </p>

            <h2>12. Intellectual Property</h2>
            <p>
              All content within the "cappic" app, including logos, designs, texts, software, and
              functions, is the intellectual property of the provider or its licensors and may not
              be reproduced, distributed, or otherwise used without prior written permission.
            </p>

            <h2>13. Availability</h2>
            <p>
              The provider endeavours to make the app available without interruptions. However,
              temporary limitations or outages may occur due to maintenance work, updates, or
              technical issues. There is no entitlement to continuous availability.
            </p>

            <h2>14. Prohibited Use</h2>
            <p>
              The use of automated scripts, bots, or external programs to control, analyse, or
              manipulate the app is prohibited. The user account may only be used by the registered
              individual.
            </p>
          </>
        )}
      </div>
    </section>
  )
}

export default TermsContent
