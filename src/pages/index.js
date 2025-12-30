import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const marinaImage = useBaseUrl('/img/marina/8_22_25__FLOATING_FRONT_AND_BACK_MARINA.png');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{
      backgroundImage: `url(${marinaImage})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode: 'overlay',
      backgroundColor: 'rgba(37, 194, 160, 0.85)',
      minHeight: '600px',
      padding: '4rem 0'
    }}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Explore Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Open-Source IEM Design`}
      description="Project Resonator: A comprehensive knowledge base for in-ear monitor engineering. Complete resources for driver selection, crossover design, PCB development, and shell manufacturing.">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--xl">
          
          {/* Introduction Section */}
          <section className="margin-vert--xl">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <div className="card shadow--md">
                  <div className="card__header">
                    <Heading as="h2">What is Project Resonator?</Heading>
                  </div>
                  <div className="card__body">
                    <p className="text--lg">
                      Project Resonator is a comprehensive knowledge base and resource repository for the complete design 
                      cycle and engineering development of in-ear monitors (IEMs). The project bridges the gap between 
                      hobbyist curiosity and professional-grade IEM development by providing both technical resources and 
                      educational foundations needed to understand and create high-fidelity audio devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          
          <section>
            <HomepageFeatures />
          </section>


          {/* Open-Source Collaboration Section */}
          <section className="margin-vert--xl">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <div className="card shadow--md">
                  <div className="card__header">
                    <Heading as="h2">Open-Source Collaboration</Heading>
                  </div>
                  <div className="card__body">
                    <p>
                      The open-source nature of this project allows the community to contribute to a centralized knowledge 
                      base, helping others in the same pursuit by:
                    </p>
                    <ul className="text--lg">
                      <li>Improving and expanding existing documentation</li>
                      <li>Contributing additional design files and measurement data</li>
                      <li>Sharing novel tuning approaches and manufacturing techniques</li>
                      <li>Building supplementary tools and resources for IEM development</li>
                    </ul>
                    <p>
                      Project Resonator serves as a living resource that evolves with the IEM community, fostering 
                      innovation through shared knowledge and collaborative development.
                    </p>
                    <p className="margin-top--md">
                      To learn more about contributing, see the <Link to="/docs/Contribution">Contribution Guide</Link>. 
                      For licensing information, visit <Link to="/docs/Project-Licensing-and-Usage">Project Licensing and Usage</Link> (CERN-OHL-W).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Closing Section */}
          <section className="margin-vert--xl">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <div className="card shadow--md">
                  <div className="card__body">
                    <p className="text--center text--lg">
                      Project Resonator represents a love letter to the IEM/CIEM hobby and community—an effort to 
                      demystify high-fidelity audio engineering and empower the next generation of audio enthusiasts 
                      and innovators.
                    </p>
                    <p className="text--center margin-top--md">
                      <strong>— Daksh Kaul (DriftingOtter)</strong>
                    </p>
                    <p className="text--center margin-top--sm">
                      <em>Special thanks to the Head-Fi DIY community, Kozh, Kirby Meets Audio, and Crinacle for the inspiration.</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </Layout>
  );
}
