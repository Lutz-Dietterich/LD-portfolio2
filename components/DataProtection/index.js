import styled from "styled-components";
import { keyframes } from "styled-components";

import { AiOutlineClose } from "react-icons/ai";

export default function DataProtection({
  handleDataProtectionClick,
  handleCheckBox,
  handleCheckBoxFalse,
}) {
  return (
    <StyledDataProtectionPopup>
      <StyledDataProtectionWrapper>
        <StyledDataProtectionContent>
          <CloseButton onClick={handleDataProtectionClick}>
            <AiOutlineClose />
          </CloseButton>
          <h1>Datenschutz&shy;erkl&auml;rung</h1>
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>{" "}
          <p>
            Die folgenden Hinweise geben einen einfachen &Uuml;berblick
            dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn
            Sie diese Website besuchen. Personenbezogene Daten sind alle Daten,
            mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
            Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie
            unserer unter diesem Text aufgef&uuml;hrten
            Datenschutzerkl&auml;rung.
          </p>
          <h3>Datenerfassung auf dieser Website</h3>{" "}
          <h4>
            Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
            Website?
          </h4>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt
            &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser
            Datenschutzerkl&auml;rung entnehmen.
          </p>
          <h4>Wie erfassen wir Ihre Daten?</h4>{" "}
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
            in ein Kontaktformular eingeben.
          </p>
          <p>
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
            Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
            allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem
            oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
            automatisch, sobald Sie diese Website betreten.
          </p>{" "}
          <h4>Wof&uuml;r nutzen wir Ihre Daten?</h4>{" "}
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur
            Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>
          <h4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
            Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
            personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
            Recht, die Berichtigung oder L&ouml;schung dieser Daten zu
            verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
            haben, k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die
            Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter
            bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung
            Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
            ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde
            zu.
          </p>{" "}
          <p>
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen
            Sie sich jederzeit an uns wenden.
          </p>
          <h2>2. Hosting</h2>
          <p>
            Unsere Website wird von Vercel, Inc. gehostet. Vercel ist ein
            Anbieter von Cloud Hosting-Diensten, der unsere
            Website-Infrastruktur bereitstellt und somit eine schnelle und
            sichere Zugriffsweise ermöglicht. Die Nutzung von Vercel dient der
            Zuverlässigkeit und der Verbesserung der Leistung unserer Website.
          </p>
          <h3>Datenerfassung und Verarbeitung</h3>
          <p>
            Durch den Besuch unserer Website können Informationen über den
            Zugriff (Datum, Uhrzeit, betrachtete Seite) auf den Servern von
            Vercel gespeichert werden. Diese Daten gehören nicht zu den
            personenbezogenen Daten, sondern sind anonymisiert. Sie werden
            ausschließlich zur Verbesserung unseres Angebotes ausgewertet. Eine
            Weitergabe an Dritte, zu kommerziellen oder nichtkommerziellen
            Zwecken, findet nicht statt. Vercel kann jedoch technische Daten
            erfassen (z.B. Browser-Typ, Betriebssystem, Uhrzeit des
            Seitenaufrufs) als Teil seiner logistischen Dienstleistungen. Diese
            Informationen werden nicht verwendet, um den Besucher dieser Website
            persönlich zu identifizieren.
          </p>
          <h3>Datenübermittlung in Drittländer</h3>
          <p>
            Vercel Inc. hat seinen Sitz in den USA und die Datenverarbeitung
            kann auch außerhalb der Europäischen Union oder des Europäischen
            Wirtschaftsraumes stattfinden. Wir haben mit Vercel
            Standardvertragsklauseln vereinbart, die ein angemessenes
            Datenschutzniveau sicherstellen und den Anforderungen der DSGVO
            entsprechen.
          </p>
          <h3>Kontakt und Ihre Rechte</h3>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, ein Widerspruchsrecht gegen die
            Verarbeitung sowie das Recht auf Datenübertragbarkeit. Bei Fragen
            zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen
            Daten, bei Auskünften, Berichtigung, Sperrung oder Löschung von
            Daten sowie Widerruf erteilter Einwilligungen oder Widerspruch gegen
            eine bestimmte Datenverwendung wenden Sie sich bitte direkt an uns
            über die im Impressum angegebenen Kontaktdaten.
          </p>
          <h3>Kontaktdaten von Vercel:</h3>
          <p>Vercel Inc.</p>
          <p>340 S Lemon Ave #4133</p>
          <p>Walnut, CA 91789</p>
          <p>USA</p>
          <p>
            Website:{" "}
            <a href="https://vercel.com" target="_blank">
              https://vercel.com
            </a>
          </p>
          <p>
            Die Domain ist vom folgendem Anbieter gehostest und wird an Vercel
            umgeleitet:
          </p>
          <h3>IONOS</h3>{" "}
          <p>
            Anbieter ist die IONOS SE, Elgendorfer Str. 57, 56410 Montabaur
            (nachfolgend IONOS). Wenn Sie unsere Website besuchen, erfasst IONOS
            verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen
            Sie der Datenschutzerkl&auml;rung von IONOS:{" "}
            <a
              href="https://www.ionos.de/terms-gtc/terms-
privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ionos.de/terms-gtc/terms-privacy
            </a>
            .
          </p>
          <p>
            Die Verwendung von IONOS erfolgt auf Grundlage von Art. 6 Abs. 1
            lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
            m&ouml;glichst zuverl&auml;ssigen Darstellung unserer Website.
            Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
            Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1
            lit. a DSGVO und &sect; 25 Abs. 1 TTDSG, soweit die Einwilligung die
            Speicherung von Cookies oder den Zugriff auf Informationen im
            Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im
            Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p>
          <h4>Auftragsverarbeitung</h4>{" "}
          <p>
            Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur
            Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es
            sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der
            gew&auml;hrleistet, dass dieser die personenbezogenen Daten unserer
            Websitebesucher nur nach unseren Weisungen und unter Einhaltung der
            DSGVO verarbeitet.
          </p>
          <h2>3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>
          <h3>Datenschutz</h3>{" "}
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer
            pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend den
            gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerkl&auml;rung.
          </p>{" "}
          <p>
            Wenn Sie diese Website benutzen, werden verschiedene
            personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
            mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die
            vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten
            wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch,
            wie und zu welchem Zweck das geschieht.
          </p>{" "}
          <p>
            Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet
            (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken
            aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem
            Zugriff durch Dritte ist nicht m&ouml;glich.
          </p>
          <h3>Hinweis zur verantwortlichen Stelle</h3>{" "}
          <p>
            Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser
            Website ist:
          </p>{" "}
          <p>
            Lutz Dietterich
            <br />
            Gl&uuml;singer Weg 2<br />
            21481 Lauenburg
          </p>
          <p>
            Telefon: 0157 80992549
            <br />
            E-Mail: job@lutz-dietterich.de
          </p>
          <p>
            Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
            Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke
            und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B.
            Namen, E-Mail- Adressen o. &Auml;.) entscheidet.
          </p>
          <h3>Speicherdauer</h3>{" "}
          <p>
            Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere
            Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
            bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt.
            Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder
            eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre
            Daten gel&ouml;scht, sofern wir keine anderen rechtlich
            zul&auml;ssigen Gr&uuml;nde f&uuml;r die Speicherung Ihrer
            personenbezogenen Daten haben (z.&nbsp;B. steuer- oder
            handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
            erfolgt die L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
          </p>
          <h3>
            Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
            auf dieser Website
          </h3>{" "}
          <p>
            Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
            wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1
            lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
            Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im
            Falle einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung
            personenbezogener Daten in Drittstaaten erfolgt die
            Datenverarbeitung au&szlig;erdem auf Grundlage von Art. 49 Abs. 1
            lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den
            Zugriff auf Informationen in Ihr Endger&auml;t (z.&nbsp;B. via
            Device-Fingerprinting) eingewilligt haben, erfolgt die
            Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1
            TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten
            zur Vertragserf&uuml;llung oder zur Durchf&uuml;hrung
            vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre
            Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren
            verarbeiten wir Ihre Daten, sofern diese zur Erf&uuml;llung einer
            rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6
            Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage
            unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO
            erfolgen. &Uuml;ber die jeweils im Einzelfall einschl&auml;gigen
            Rechtsgrundlagen wird in den folgenden Abs&auml;tzen dieser
            Datenschutzerkl&auml;rung informiert.
          </p>
          <h3>Empfänger von personenbezogenen Daten</h3>{" "}
          <p>
            Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit
            verschiedenen externen Stellen zusammen. Dabei ist teilweise auch
            eine &Uuml;bermittlung von personenbezogenen Daten an diese externen
            Stellen erforderlich. Wir geben personenbezogene Daten nur dann an
            externe Stellen weiter, wenn dies im Rahmen einer
            Vertragserf&uuml;llung erforderlich ist, wenn wir gesetzlich hierzu
            verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an
            Steuerbeh&ouml;rden), wenn wir ein berechtigtes Interesse nach Art.
            6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine
            sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz
            von Auftragsverarbeitern geben wir personenbezogene Daten unserer
            Kunden nur auf Grundlage eines g&uuml;ltigen Vertrags &uuml;ber
            Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung
            wird ein Vertrag &uuml;ber gemeinsame Verarbeitung geschlossen.
          </p>
          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>{" "}
          <p>
            Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
            ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine
            bereits erteilte Einwilligung jederzeit widerrufen. Die
            Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
            Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
          </p>
          <h3>
            Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen
            sowie gegen Direktwerbung (Art. 21 DSGVO)
          </h3>{" "}
          <p>
            WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E
            ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
            GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN
            DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
            EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN
            GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN
            EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
            DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
            IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
            SEI DENN, WIR K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE
            F&Uuml;R DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE
            UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER
            GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON
            RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
          </p>{" "}
          <p>
            WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
            BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
            VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
            DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS
            PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT.
            WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
            ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
            (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
          </p>
          <h3>
            Beschwerde&shy;recht bei der zust&auml;ndigen
            Aufsichts&shy;beh&ouml;rde
          </h3>{" "}
          <p>
            Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
            Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
            insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
            Aufenthalts, ihres Arbeitsplatzes oder des Orts des
            mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht
            unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
            Rechtsbehelfe.
          </p>
          <h3>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h3>{" "}
          <p>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
            oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an
            sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren
            Format aush&auml;ndigen zu lassen. Sofern Sie die direkte
            &Uuml;bertragung der Daten an einen anderen Verantwortlichen
            verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </p>
          <h3>Auskunft, Berichtigung und L&ouml;schung</h3>{" "}
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
            jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und
            Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein
            Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie
            zu weiteren Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie
            sich jederzeit an uns wenden.
          </p>
          <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3>{" "}
          <p>
            Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich
            jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der
            Verarbeitung besteht in folgenden F&auml;llen:
          </p>{" "}
          <ul>
            {" "}
            <li>
              Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
              personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der
              Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer
              der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>{" "}
            <li>
              Wenn die Verarbeitung Ihrer personenbezogenen Daten
              unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt
              der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung
              verlangen.
            </li>{" "}
            <li>
              Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen,
              Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung
              von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht,
              statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung
              Ihrer personenbezogenen Daten zu verlangen.
            </li>{" "}
            <li>
              Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
              haben, muss eine Abw&auml;gung zwischen Ihren und unseren
              Interessen vorgenommen werden. Solange noch nicht feststeht,
              wessen Interessen &uuml;berwiegen, haben Sie das Recht, die
              Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten
              zu verlangen.
            </li>{" "}
          </ul>
          <p>
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
            eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer
            Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur
            Geltendmachung, Aus&uuml;bung oder Verteidigung von
            Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
            nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden
            eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen
            Union oder eines Mitgliedstaats verarbeitet werden.
          </p>
          <h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3>{" "}
          <p>
            Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
            &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel
            Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
            senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine
            verschl&uuml;sselte Verbindung erkennen Sie daran, dass die
            Adresszeile des Browsers von &bdquo;http://&ldquo; auf
            &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer
            Browserzeile.
          </p>{" "}
          <p>
            Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist,
            k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von
            Dritten mitgelesen werden.
          </p>
          <h2>4. Datenerfassung auf dieser Website</h2>
          <h3>Server-Log-Dateien</h3>{" "}
          <p>
            Der Provider der Seiten erhebt und speichert automatisch
            Informationen in so genannten Server-Log-Dateien, die Ihr Browser
            automatisch an uns &uuml;bermittelt. Dies sind:
          </p>{" "}
          <ul>
            <li>Browsertyp und Browserversion</li>{" "}
            <li>verwendetes Betriebssystem</li> <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>{" "}
            <li>Uhrzeit der Serveranfrage</li> <li>IP-Adresse</li>{" "}
          </ul>
          <p>
            Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird
            nicht vorgenommen.
          </p>{" "}
          <p>
            Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
            lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an
            der technisch fehlerfreien Darstellung und der Optimierung seiner
            Website &ndash; hierzu m&uuml;ssen die Server-Log-Files erfasst
            werden.
          </p>
          <h3>Kontaktformular</h3>{" "}
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&uuml;r
            den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
            wir nicht ohne Ihre Einwilligung weiter.
          </p>{" "}
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
            1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines
            Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung
            vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
            &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem
            berechtigten Interesse an der effektiven Bearbeitung der an uns
            gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
            wurde; die Einwilligung ist jederzeit widerrufbar.
          </p>{" "}
          <p>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
            uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur
            Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung
            entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer
            Anfrage). Zwingende gesetzliche Bestimmungen &ndash; insbesondere
            Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
          </p>
          <h2>5. Analyse-Tools und Werbung</h2>
          <h3>IONOS WebAnalytics</h3>{" "}
          <p>
            Diese Website nutzt die Analysedienste von IONOS WebAnalytics (im
            Folgenden: IONOS). Anbieter ist die 1&amp;1 IONOS SE, Elgendorfer
            Stra&szlig;e 57, D &ndash; 56410 Montabaur. Im Rahmen der Analysen
            mit IONOS k&ouml;nnen u.&nbsp;a. Besucherzahlen und &ndash;verhalten
            (z.&nbsp;B. Anzahl der Seitenaufrufe, Dauer eines Webseitenbesuchs,
            Absprungraten), Besucherquellen (d. h., von welcher Seite der
            Besucher kommt), Besucherstandorte sowie technische Daten (Browser-
            und Betriebssystemversionen) analysiert werden. Zu diesem Zweck
            speichert IONOS insbesondere folgende Daten:
          </p>{" "}
          <ul>
            {" "}
            <li>Referrer (zuvor besuchte Webseite)</li>{" "}
            <li>angeforderte Webseite oder Datei</li>{" "}
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>{" "}
            <li>verwendeter Ger&auml;tetyp</li> <li>Uhrzeit des Zugriffs</li>{" "}
            <li>
              IP- Adresse in anonymisierter Form (wird nur zur Feststellung des
              Orts des Zugriffs verwendet)
            </li>{" "}
          </ul>{" "}
          <p>
            Die Datenerfassung erfolgt laut IONOS vollst&auml;ndig anonymisiert,
            sodass sie nicht zu einzelnen Personen zur&uuml;ckverfolgt werden
            kann. Cookies werden von IONOS WebAnalytics nicht gespeichert.
          </p>{" "}
          <p>
            Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art.
            6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
            Interesse an der statistischen Analyse des Nutzerverhaltens, um
            sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern
            eine entsprechende Einwilligung abgefragt wurde, erfolgt die
            Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1
            lit. a DSGVO und &sect; 25 Abs. 1 TTDSG, soweit die Einwilligung die
            Speicherung von Cookies oder den Zugriff auf Informationen im
            Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im
            Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p>
            Weitere Informationen zur Datenerfassung und Verarbeitung durch
            IONOS WebAnalytics entnehmen Sie der Datenschutzerklaerung von IONOS
            unter folgendem Link:{" "}
            <a
              href="https://www.ionos.de/terms-
gtc/datenschutzerklaerung/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ionos.de/terms- gtc/datenschutzerklaerung/
            </a>
          </p>
          <h4>Auftragsverarbeitung</h4>{" "}
          <p>
            Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur
            Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es
            sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der
            gew&auml;hrleistet, dass dieser die personenbezogenen Daten unserer
            Websitebesucher nur nach unseren Weisungen und unter Einhaltung der
            DSGVO verarbeitet.
          </p>
          <p>
            Quelle:{" "}
            <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
          </p>
          <>
            {handleCheckBox ? (
              <>
                <CloseButton2
                  style={{ backgroundColor: "green", color: "white" }}
                  onClick={() => {
                    handleDataProtectionClick();
                    handleCheckBox(true);
                  }}
                >
                  Alles gelesen und einverstanden
                </CloseButton2>
                <CloseButton2
                  style={{ backgroundColor: "red", color: "white" }}
                  onClick={() => {
                    handleDataProtectionClick();
                    handleCheckBoxFalse(false);
                  }}
                >
                  Alles gelesen und nicht einverstanden
                </CloseButton2>{" "}
              </>
            ) : (
              <CloseButton2
                style={{ backgroundColor: "gray", color: "white" }}
                onClick={() => {
                  handleDataProtectionClick();
                }}
              >
                Alles verstanden und schließen!
              </CloseButton2>
            )}
          </>
        </StyledDataProtectionContent>
      </StyledDataProtectionWrapper>
    </StyledDataProtectionPopup>
  );
}

const fadeIn = keyframes`
  from {
    height: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.0);
  }

  99% {
    background-color: rgba(0, 0, 0, 0.0);
  }

  to {
    height: 100%;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const StyledDataProtectionPopup = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.5s ease-in-out;
  overflow: auto;
  border-radius: 5px;
  padding: 20px;
  z-index: 2;
`;

const StyledDataProtectionWrapper = styled.div`
  position: absolute;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    min-width: 100%;
    padding: 5px;
  }
`;

const StyledDataProtectionContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  max-width: 900px;
  align-items: center;
  background-color: white;
  margin: 5% auto 0 auto;
  padding: 50px;
  border-radius: 5px;
  color: var(--color-text);
  line-height: 1;
  overflow: auto;

  h2 {
    text-align: center;
    color: var(--color-text);
  }

  p {
    text-align: center;
  }

  @media (max-width: 1000px) {
    width: 90%;
    padding: 20px;
  }

  @media (max-width: 768px) {
    min-width: 95%;
    text-align: center;
    padding: 10px;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

const CloseButton = styled.button`
  cursor: pointer;
  margin-top: 10px;
  align-self: flex-end;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  font-weight: 700;
`;

const CloseButton2 = styled.button`
  cursor: pointer;
  margin-top: 10px;
  align-self: center;
  background-color: var(--color-button);
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
  padding: 5px 20px;
  font-size: 1.3rem;
  font-weight: 400;

  &:hover {
    background-color: var(--color-button-hover);
  }
`;
