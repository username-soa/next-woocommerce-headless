"use client";
import styles from "./Search.module.scss";
import { createUrl } from "@/utils/functions";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useContext, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchHistoryContext } from "@/contexts/SearchHistoryContext";

const Search = ({ handleClose }) => {
  let isMounted = true;
  const backgroundAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
    exit: { opacity: 0, transition: { duration: 0.3, type: "Inertia" } },
  };

  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
        delayChildren: 0.15,
        staggerChildren: 0.5,
      },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0, y: "10px" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0, 1.5, 1, 1.5],
        type: "spring",
      },
    },
  };
  const searchHistoryVariables = {
    hidden: { opacity: 0, y: "10px" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        delayChildren: 0.6,
        staggerChildren: 0.25,
      },
    },
  };
  const searchHistoryChildAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: [0, 1.5, 1, 1.5],
        type: "spring",
      },
    },
  };
  const route = useRouter();
  const searchParams = useSearchParams();
  const [searchArr, setSearchArr] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const { saveSearchTermsToBrowser, searchTerms, removeSearchTerm } =
    useContext(SearchHistoryContext);

  const handleSearch = (e) => {
    const term = e.target.value.trim();
    const newParams = new URLSearchParams(searchParams.toString());
    if (e.key === "Enter" && term.length !== 0) {
      newParams.set("q", term);
      saveSearchTermsToBrowser(term);
      handleClose();
      route.push(createUrl("/search", newParams));
    } else {
      newParams.delete("q");
    }
  };
  const handleSearchV2 = (value) => {
    const term = value.trim();
    const newParams = new URLSearchParams(searchParams.toString());
    if (term.trim().length !== 0) {
      newParams.set("q", term);
      saveSearchTermsToBrowser(term);
      handleClose();
      route.push(createUrl("/search", newParams));
    }
  };

  const filterSearchHistory = (term) => {
    if (term.length === 0) {
      setSearchArr(searchTerms);
      return -1;
    }
    const arr = searchTerms?.filter((item) => {
      return item?.toLocaleLowerCase().includes(term?.toLocaleLowerCase());
    });
    setSearchArr(arr);
  };

  useEffect(() => {
    if (isMounted && searchTerms) {
      setSearchArr(searchTerms);
    }
    return () => {
      isMounted = false;
    };
  }, [searchTerms]);
  return (
    <motion.div
      exit="exit"
      animate="show"
      initial="hidden"
      className={styles.container}
      variants={backgroundAnimation}
    >
      <div className={styles.content}>
        <motion.div
          exit="exit"
          animate="show"
          initial="hidden"
          variants={parentAnimations}
          className={styles.search_top}
        >
          <motion.div variants={childAnimations} className={styles.input_wrp}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className={styles.input_svg}
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              ></path>
            </svg>
            <input
              type="text"
              autoFocus
              autoComplete="off"
              onKeyDown={handleSearch}
              className={styles.search_input}
              onFocus={() => setShowHistory(true)}
              defaultValue={searchParams?.get("q") || ""}
              placeholder="Search Products, Collections..."
              onChange={(e) => filterSearchHistory(e.target.value)}
            />
          </motion.div>

          <motion.svg
            variants={childAnimations}
            onClick={handleClose}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
          </motion.svg>
        </motion.div>
        <div className={styles.search_body}>
          <AnimatePresence mode="wait">
            {showHistory && searchArr?.length !== 0 && (
              <div className={styles.saved_search_terms}>
                <motion.ul
                  exit="exit"
                  animate="show"
                  initial="hidden"
                  variants={searchHistoryVariables}
                >
                  {searchArr?.map((i, index) => {
                    return (
                      <motion.li
                        key={`saved-term-${index}`}
                        className={styles.hover_grid}
                        variants={searchHistoryChildAnimations}
                      >
                        <svg className={styles.history_svg} viewBox="0 0 20 20">
                          <path d="M5.757 14.243A6 6 0 1 0 5.527 6H7v2H2V3h2v1.708a8 8 0 1 1 .343 10.949l1.414-1.414z"></path>
                          <path d="m11 10.414 1.707-1.707-1.414-1.414L9 9.586V14h2v-3.586z"></path>
                        </svg>
                        <p
                          className={styles.saved_term_span}
                          onClick={() => handleSearchV2(i)}
                        >
                          {i}
                        </p>
                        <button
                          onClick={() => removeSearchTerm(i)}
                          className={styles.clear_btn}
                        >
                          <svg
                            className={styles.delete_svg}
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="100"
                            height="100"
                            viewBox="0 0 50 50"
                          >
                            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                          </svg>
                        </button>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Search;
