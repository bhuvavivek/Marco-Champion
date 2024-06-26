"use client"
import { useState } from 'react';
import { HiArrowCircleDown, HiArrowCircleUp } from "react-icons/hi";
import styles from "../style/faq.module.css";

const questions = [
  {
    id: 1,
    question: 'What is Winners Circle?',
    answer: "The Winners Circle is a community designed to foster success and growth. At its heart lies our inner circle, comprised of accomplished multi-millionaires dedicated to supporting and empowering one another. Surrounding this core is our outer circle, consisting of individuals seeking to reprogram their minds and receive mentorship to elevate their success. Together, we embody our core values of PASSION, PURPOSE, and PROGRESS, uniting us in our pursuit of excellence and achievement."
  },
  {
    id: 2,
    question: 'How Long is the Bootcamp?',
    answer: '90 days',
  },
  {
    id: 3,
    question: 'Why is it called Reprogram?',
    answer: 'The name "Reprogram" reflects the transformative nature of our program. Through daily habits and practices, Reprogram works to rewire your mind, instilling a pattern of positive, success-driven thoughts. By reshaping your mindset, you pave the way for increased success and fulfillment in all areas of your life.'
  },
  {
    id: 4,
    question: "What's the Science Behind the Tools used in the Bootcamp?",
    answer: `The tools utilized in the bootcamp are grounded in scientific principles aimed at optimizing human potential. Each tool is carefully designed to leverage insights from fields such as neuroscience, psychology, and behavioral science to facilitate personal growth and development.
    <br> <br>For example: 
    <br> <br>Affirmations and Auto-Suggestion: These techniques draw upon principles of neuroplasticity and cognitive-behavioral therapy (CBT). By consistently reinforcing positive beliefs and thoughts, individuals can rewire their neural pathways, leading to lasting changes in behavior and mindset.
    <br> <br>Journaling: Journaling is supported by research in cognitive psychology and self-reflection. It provides a structured framework for exploring thoughts and emotions, enhancing self-awareness, and identifying patterns that may be hindering personal growth.
    <br> <br>Meditation: Techniques such as mindfulness meditation have been shown to modulate brain activity, reduce stress, and improve focus and attention.
    <br> <br>Visualization: Visualization techniques capitalize on the brain's ability to simulate experiences mentally. By vividly imagining desired outcomes, individuals activate neural networks associated with goal pursuit, increasing motivation and confidence.
    <br> <br>Goal Setting and Action Planning: These tools are grounded in principles of goal theory and behavioral economics. By setting specific, measurable, achievable, relevant, and time-bound (SMART) goals and creating action plans, individuals increase their likelihood of success by providing clarity, direction, and accountability.
    <br> <br>Overall, the tools used in the bootcamp are informed by scientific research and theory, empowering participants to unlock their full potential and achieve meaningful personal and professional growth.`},
  {
    id: 5,
    question: "When does the Bootcamp Launch?",
    answer: '2024'
  },
  {
    id: 6,
    question: "What’s the Money Back Guarantee Policy?",
    answer: "We stand behind our program and are committed to your success. If, after diligently following the program for 45 days, you haven't seen the results you expected, you can request a refund. Your refund will be processed promptly within 5 business days of receiving your refund request. We believe in the effectiveness of our program and want to ensure your satisfaction and success."
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className={styles.mainContainer} style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start',
      alignItems: 'center'
    }}>
      <h2 style={{
        textTransform: 'uppercase',
        fontSize: '40px',
        fontFamily: 'Blanka !important',
        color: 'white'
      }} className={styles.heading}>FAQs</h2>

      <div className={styles.container}>
        <section className={styles.faq}>
          {questions.map(item => (
            <Question key={item.id} {...item} isActive={activeId === item.id} onClick={handleClick} />
          ))}
        </section>
      </div>
    </div>
  );
};

const Question = ({ id, question, answer, isActive, onClick }) => {
  const handleQuestionClick = () => {
    onClick(id);
  };

  return (
    <div className={styles.questionmain}>
      <div className={`${styles.question} ${styles.outerBorder}`} onClick={handleQuestionClick}>
        <h3 style={{
          marginBottom: '0px !important',
          fontSize: '22px'
        }}>{question}</h3>
        {isActive ? <HiArrowCircleUp className={styles.arrowIcon} /> : <HiArrowCircleDown className={styles.arrowIcon} />}
      </div>
      {isActive && (
        <div className={styles.answer} style={{
          fontSize: '18px'
        }} dangerouslySetInnerHTML={{ __html: answer }} />
      )}
    </div >
  );
};

export default FAQ;
