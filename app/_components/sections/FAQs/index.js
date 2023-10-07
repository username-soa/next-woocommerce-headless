"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./FAQs.module.scss";
import { Accordion } from "@/components/ui";

const FAQs = ({ content }) => {
  const accordionIds = [
    {
      question: "How long will it take for my order to get to me?",
      answer: `<p>
      We pride ourselves on our fast turn around times! All our
      orders ship within 1-3 business days. If you chose free
      shipping, your order will be sent via USPS standard shipping,
      which usually takes around 2-5 days domestically and 1-2 weeks
      internationally. This is an estimate, as USPS often becomes busy
      around holidays.
    </p>
    <p>
      If you need your order sooner, please feel welcome to choose one
      of our upgraded shipping options at checkout.
    </p>
    <p>
      Feel free to <a href="/contact">reach out to us</a> with any
      questions about your order.
    </p>`,
    },
    {
      question: "My order says it was delivered, but it's not here.",
      answer: `<p>We're sorry to hear that you haven't received your order yet! If the tracking information shows delivered, please allow 24 hours for it to arrive. Packages can show as delivered even though they are still in transit.</p>
      <p>Please also make sure to check with household members and neighbors, who may have recieved your package by mistake.</p>
      <p>Still not there? For further assistance, <a href="/contact">reach out to us</a>.</p>
      `,
    },
    {
      question: "My order has damaged or missing items.",
      answer: `<p>We apologize if your order was received incomplete or if items were damaged in transit. Please contact us so we can make it right.</p>`,
    },
    {
      question: "Where do your items ship from?",
      answer: `<p>All of our items ship from our warehouse in Torrance, California.</p>`,
    },
  ];
  const [expand, setExpand] = useState(false | 0);
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Frequently Asked Questions</h1>
      <p className={styles.p}>
        If you cannot find what you’re looking for, feel free to{" "}
        <Link href={"/contact"}>contact us</Link>.
      </p>

      <div className={styles.content}>
        {accordionIds.map((i, index) => (
          <Accordion
            i={index}
            expand={expand}
            answer={i.answer}
            question={i.question}
            setExpand={setExpand}
            key={`Accordion-${index}`}
          />
        ))}
      </div>
      <button
        type="button"
        title="back to top"
        className={styles.back_to_top}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        back to top
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5">
          <path d="M4 5 0 0l4 2.5L8 0 4 5Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default FAQs;
