import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Comprehensive Guides',
    description: (
      <>
        Step-by-step tutorials covering everything from driver selection to crossover 
        design and tuning. Whether you're a first-time DIYer or an experienced enthusiast, 
        you'll find resources to help you build high-fidelity IEMs.
      </>
    ),
  },
  {
    title: 'Open-Source Design',
    description: (
      <>
        All design files, schematics, and documentation are freely available. Use these 
        files as a base for your own projects—commercial or personal. Built with the 
        open-source spirit in mind.
      </>
    ),
  },
  {
    title: 'Tools & Software',
    description: (
      <>
        Learn to use professional tools like VituixCAD for crossover simulation, KiCad 
        for PCB design, and Fusion 360 for shell modeling. Complete setup guides included 
        for all required software.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
