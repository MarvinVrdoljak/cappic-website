'use client'

import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'

const ImprintContent = () => {
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
            <h1>Impressum</h1>

            <p>
              <strong>Angaben gemäß § 5 TMG:</strong>
            </p>
            <p>
              Empressia d.o.o
              <br />
              Zweigniederlassung Deutschland
              <br />
              Diemshoff 38
              <br />
              48282 Emsdetten
              <br />
              Deutschland
            </p>

            <p>
              <strong>E-Mail:</strong> info@cappic.app
              <br />
              <strong>Website:</strong> cappic.app
            </p>

            <p>
              <strong>Registereintrag:</strong>
              <br />
              Eingetragen im Handelsregister des Handelsgerichts Split (Kroatien)
              <br />
              Registernummer: (HR) 060305839
            </p>

            <p>
              <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
              <br />
              Marvin Vrdoljak
              <br />
              Diemshoff 38
              <br />
              48282 Emsdetten
            </p>
          </>
        )}
        {locale === 'en' && (
          <>
            <h1>Imprint</h1>

            <p>
              <strong>Information in accordance with Section 5 TMG:</strong>
            </p>
            <p>
              Empressia d.o.o
              <br />
              German Branch Office
              <br />
              Diemshoff 38
              <br />
              48282 Emsdetten
              <br />
              Germany
            </p>

            <p>
              <strong>Email:</strong> info@cappic.app
              <br />
              <strong>Website:</strong> cappic.app
            </p>

            <p>
              <strong>Commercial Register Entry:</strong>
              <br />
              Registered in the Court Register of the Commercial Court in Split (Croatia)
              <br />
              Registration Number: (HR) 060305839
            </p>

            <p>
              <strong>Responsible for content according to Section 55 (2) RStV:</strong>
              <br />
              Marvin Vrdoljak
              <br />
              Diemshoff 38
              <br />
              48282 Emsdetten
            </p>
          </>
        )}
      </div>
    </section>
  )
}

export default ImprintContent
