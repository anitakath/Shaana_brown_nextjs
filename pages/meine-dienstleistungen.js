
import Link from "next/link";


//COMPONENTS
import Layout from "@/components/Layout";


//STYLES 
import styles from '../styles/MyWork.module.css'
import layout from '../styles/Section_Layout.module.css'

//IMAGES
//IMAGES 
import firstImg from '../components/Images/abc.jpg'
import secondImg from "../components/Images/def.jpg";
import thirdImg from "../components/Images/ghi.jpg";
import fourthImg from "../components/Images/jkl.jpg";
import Image from "next/image";

const MyWork = () =>{

    return (
      <Layout>
        <div className={layout.container}>
          <div className={styles.myWorkContainer}>
            <h1
              className={styles.myWorkTitle}
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              Gerne begleite ich Dich in der Schwangerschaft, im Wochenbett und
              in der Stillzeit
            </h1>
            <p
              className={styles.myWorkSubtitle}
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              Von Schwangerschaftsbeginn an begleite und berate ich Dich
              fachkundig rund um Schwangerschaft, Geburt und Wochenbett. Ich
              unterstütze Dich bei körperlichen Veränderungen in der
              Schwangerschaft, gebe Dir Hilfe bei Beschwerden, fördere Deine
              Gesundheit und die Deines Babys. 
            </p>

            <div className={styles.fieldA}>
              <div
                className={styles.text}
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <h1> Schwangerenvorsorge </h1>
                <p
                  id="first_Paragraph"
                  className={layout.paragraph}
                  style={{ padding: "10px" }}
                >
                  Ich führe eigenständig und in Zusammenarbeit mit der
                  betreuenden Gynäkologin oder dem betreuenden Gynäkologen
                  Schwangerenvorsorgen durch. Dabei lege ich großen Wert auf
                  eine ganzheitliche Betreuung, die sowohl den
                  Mutterschaftsrichtlinien als auch internationalen Leitlinien
                  entspricht.
                  <br />
                  <br />
                  Zu jeder Hebammenvorsorge gehört eine körperliche
                  Untersuchung, die Folgendes beinhaltet:
                </p>
                <ul>
                  <li> Ertasten der Lage und Größe des Babys </li>
                  <li>
                    Messen deines Bauchumfangs und des Symphysen-Fundus-Abstands{" "}
                  </li>
                  <li> Hören der Herztöne des Babys </li>
                  <li> Messung deines Blutdrucks </li>
                  <li> Untersuchungen des Urins </li>
                  <li> Blutuntersuchungen </li>
                  <li> Beobachtung des Allgemeinbefindens </li>
                </ul>
                <br />
                <br />
              </div>
              <div className={styles.imgContainer}>
                <Image
                  src={firstImg}
                  className={styles.firstImage}
                  alt="something"
                  aria-label="something"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                  priority={true}
                />
              </div>
            </div>

            <div className={styles.fieldB}>
              <div className={styles.imgContainer}>
                <Image
                  src={secondImg}
                  className={styles.secondImage}
                  alt="something"
                  aria-label="something"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  priority={true}
                />
              </div>

              <div
                className={styles.text}
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <h1> Wochenbett und Stillzeit </h1>

                <p className={layout.paragraph} style={{ padding: "10px" }}>
                  Das Wochenbett ist eine bedeutende Phase, die unmittelbar nach
                  der Geburt Deines Kindes beginnt und 8 Wochen andauert. In
                  dieser Zeit des Ankommens, der Regeneration, des Kennenlernens
                  und Bindungsaufbaus zwischen Dir und Deinem Baby stehe ich als
                  Hebamme zur Seite. <br />
                  Während des Wochenbetts liegt mein Fokus darauf, sowohl die
                  physische als auch die emotionale Gesundheit von Dir als
                  Mutter und Deinem Neugeborenen zu fördern.
                </p>
              </div>
            </div>

            <div className={styles.fieldA}>
              <div
                className={styles.text}
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <p className={layout.paragraph} style={{ padding: "10px" }}>
                  Während eines Hausbesuches beurteile ich die Rückbildung der
                  Gebärmutter, die Wundheilung einer Naht, untersuche die Brüste
                  bei Bedarf und ich arbeite auch gerne mit Massagen im
                  Wochenbett. Ein weiterer wichtiger Aspekt meiner Betreuung im
                  Wochenbett ist die Unterstützung beim Stillen und die
                  Förderung einer erfolgreichen Stillbeziehung zwischen Dir und
                  Deinem Baby. Darüber hinaus begleite ich Dich in dieser
                  besonderen Zeit auch auf emotionaler Ebene. <br /> <br />
                  Im Wochenbett stehe ich als Ansprechpartnerin zur Verfügung
                  und unterstütze Dich dabei, Dich in Deine neue Rolle als
                  Mutter einzufinden. Zudem berate ich zu den
                  unterschiedlichsten Themen:
                </p>

                <ul>
                  <li> Stillen und Ernährung </li>
                  <li> Begleitung und Tragen des Babys </li>
                  <li> Babypflege </li>
                  <li> Schlafverhalten </li>
                  <li> Rückbildungsgymnastik </li>
                  <li> Verhütung </li>
                  <li>
                    und viele weitere Beratungsthemen, die fließend in die Zeit
                    nach dem Wochenbett übergehen, wie zum Beispiel Beikost,
                    Abstillen, ...
                  </li>
                </ul>
              </div>
              <div className={styles.imgContainer}>
                <Image
                  src={thirdImg}
                  className={styles.thirdImage}
                  alt="something"
                  aria-label="something"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  priority={true}
                />
              </div>
            </div>

            <div className={styles.fieldB}>
              <div className={styles.imgContainer}>
                <Image
                  src={fourthImg}
                  className={styles.thirdImage}
                  alt="something"
                  aria-label="something"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  priority={true}
                />
              </div>

              <div
                className={styles.text}
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <p className={layout.paragraph} style={{ padding: "10px" }}>
                  Ich freue mich, ein Teil dieses großen Abenteuers sein zu
                  dürfen! Zögere nicht, mich zu kontaktieren, um weitere
                  Informationen zu erhalten.
                </p>
                <Link href="/kontakt" className={styles.contactLink}>
                  Zum Kontaktformular
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
}

export default MyWork;