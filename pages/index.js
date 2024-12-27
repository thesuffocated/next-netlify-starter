import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Solo T9 單人天九 Privacy Notice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="HARALD DOG FOOD COMPANY’S PRIVACY NOTICE FOR Solo T9 單人天九" />
        <p className="description">
          This privacy notice (<b>“Privacy Notice”</b>) sets out the ways in which we, Harald Dog Food Company, collect and use your personal information in connection with Solo T9 單人天九 (<b>our “App”</b>, package name: com.haralddogfood.solo_t9.android).
        </p>
        <p className="description"><b>ABOUT US</b></p>
        <p className="description">
          You can contact Harald Dog Food Company as follows:
        </p>
        <p className="description">
          Address: PO Box 262, Yuen Long Post Office, Yuen Long, New Territories, Hong Kong SAR, China.
        </p>
        <p className="description">
          Email: <a href="mailto:haralddogfood@gmail.com</a>
        </p>
        <p className="description"><b>INFORMATION WE COLLECT ABOUT YOU AND WHO WE MIGHT SHARE YOUR INFORMATION WITH</b></p>
        <p className="description">
          This App does not collect any personal information. Nor does it share any of your information with us (Harald Dog Food Company) or any third party.
        </p>
        <p className="description">
          When you install an application (including this App, or any other application developed by us or any other parties) via Google Play, Google Play may collect some personal data. We do not control how Google Play collects user data, and this Privacy Notice does not apply to it. 
To find out how Google Play collects and uses your information, please consult its privacy policy: <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>.
        </p>
        <p className="description"><b>COOKIES AND TRACKING</b></p>
        <p className="description">
          We do not use cookies, web beacons, device IDs, or other tracking mechanisms for any purposes.
        </p>
        <p className="description">
          Our App and websites may contain content and links to other sites that are operated by third parties that may also operate cookies and other tracking mechanisms, such as the web page for ratings and reviews on Google Play. We do not control these third-party sites or their tracking activities, and this Privacy Notice does not apply to them. Please consult the terms, conditions, and Privacy Notice of the relevant third-party site to find out how that site collects and uses your information and to establish whether and for what purpose it uses cookies.
        </p>
      </main>

      <Footer />
    </div>
  )
}
