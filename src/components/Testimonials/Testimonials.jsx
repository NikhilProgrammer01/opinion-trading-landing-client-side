import React, { useState } from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  const [activeCard, setActiveCard] = useState(null);
  const [circlePos, setCirclePos] = useState({});

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Crypto Investor",
      image: "URL_PROFILE1",
      quote:
        "OpinionTrade has completely changed how I approach market sentiment. The blockchain integration gives me confidence that the data is transparent and reliable.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Day Trader",
      image: "URL_PROFILE2",
      quote:
        "I've been using OpinionTrade for three months and the real-time data has given me an edge in my trading decisions. The platform is intuitive and powerful.",
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Financial Analyst",
      image: "URL_PROFILE3",
      quote:
        "As someone who analyzes market trends professionally, I find the opinion markets on this platform to be incredibly valuable for gauging true market sentiment.",
    },
  ];


  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>What Our Users Say</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              e.currentTarget.style.setProperty('--circle-x', `${x}px`);
              e.currentTarget.style.setProperty('--circle-y', `${y}px`);
            }}
              key={testimonial.id}
              className={`${styles.testimonialCard} ${
                activeCard === testimonial.id ? styles.active : ""
              }`}
              style={
                activeCard === testimonial.id
                  ? {
                      "--circle-x": `${circlePos.x}px`,
                      "--circle-y": `${circlePos.y}px`,
                    }
                  : {}
              }
            >
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialQuote}>
                  "{testimonial.quote}"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>
                    {["URL_PROFILE1", "URL_PROFILE2", "URL_PROFILE3"].includes(
                      testimonial.image
                    ) ? (
                      <div
                        className={styles.avatarPlaceholder}
                    
                        
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                    ) : (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className={styles.avatarImage}
                      />
                    )}
                  </div>
                  <div className={styles.authorInfo}>
                    <h3 className={styles.authorName}>{testimonial.name}</h3>
                    <p className={styles.authorRole}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
