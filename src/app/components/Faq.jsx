"use client"
import { useState } from 'react';
import { HiArrowCircleDown, HiArrowCircleUp } from "react-icons/hi";
import styles from "../style/faq.module.css";

const questions = [
  {
    id: 1,
    question: 'What is Winners Circle?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: 2,
    question: 'How Long is the Bootcamp?',
    answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    id: 3,
    question: 'Why is it called Reprogram?',
    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
  },
  {
    id: 4,
    question: "What's the Science Behind the Tools used in the Bootcamp?",
    answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
  },
  {
    id: 5,
    question: "When does the Bootcamp Launch?",
    answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
  },
  {
    id: 6,
    question: "What’s the Money Back Guarantee Policy?",
    answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
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
      }} className={styles.heading}>FAQ's</h2>

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
        }}>
          {answer}
        </div>
      )}
    </div >
  );
};

export default FAQ;
