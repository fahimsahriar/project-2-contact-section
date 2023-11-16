import styles from './Hero.module.css';

function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_content}>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className={styles.buttons}>
            <button>Shop Now</button>
            <button className={styles.Category_btn}>Category</button>
        </div>
        <div className={styles.available}>
            <p>Also Available On</p>
            <div className={styles.available_platform}>
                <img src="/images/amazon.png" alt="" />
                <img src="/images/flipkart.png" alt="" />
            </div>
        </div>
      </div>
      <div className={styles.hero_image}>
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
