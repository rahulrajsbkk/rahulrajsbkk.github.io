import styles from '../static/scss/home.module.scss';
import Layout from '../layout';

export default function Home() {
  return (
    <Layout>
      <div className={styles.home}>
        <section className={styles.introSection}>
          <div className={styles.introSectionName}>
            <div className={styles.introSectionNameHello}>Hello, I'm</div>
            <div className={styles.introSectionNameFullName}>Rahul Raj</div>
            <div className={styles.introSectionNameDesignation}>
              Software Developer
            </div>
          </div>
          <div className={styles.images}></div>
        </section>
        {/* <section className={styles.mainSection1}></section> */}
      </div>
    </Layout>
  );
}
