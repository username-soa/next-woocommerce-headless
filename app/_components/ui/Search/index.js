"use client";
import styles from "./Search.module.scss";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useContext, useEffect } from "react";
import { SearchHistoryContext } from "@/utils/SearchHistoryContext";
import useBodyLockScroll from "@/hooks/useBodyLockScroll";

const Search = ({ handleClose }) => {
  let isMounted = true;
  const HeaderSearchBarVariants = {
    hidden: { y: "-100vh" },
    visible: {
      y: 0,
      //   transition: {
      //     type: "Inertia",
      //   },
    },
  };
  const parentAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };
  const childAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };
  const route = useRouter();
  const [search, setSearch] = useState("");
  const [searchArr, setSearchArr] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const { saveSearchTermsToBrowser, searchTerms, removeSearchTerm } =
    useContext(SearchHistoryContext);

  const handleSearch = (e) => {
    const t = e.target.value.trim();
    if (e.key === "Enter" && t.length !== 0) {
      saveSearchTermsToBrowser(t);
      setShowHistory(false);
      setState(false);
      route.push(`/search/${t}`);
    }
  };
  const handleSearchV2 = (term) => {
    const t = term.trim();
    if (t.trim().length !== 0) {
      saveSearchTermsToBrowser(t);
      setShowHistory(false);
      setState(false);
      route.push(`/search/${t}`);
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
      className={styles.container}
      initial="hidden"
      animate="show"
      variants={parentAnimations}
      exit={{ opacity: 0, transition: { duration: 0.5, type: "Inertia" } }}
    >
      <div className={styles.content}>
        <div className={styles.search_top}>
          <div className={styles.input_wrp}>
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
              onChange={(e) => {
                setSearch(e.target.value);
                filterSearchHistory(e.target.value);
              }}
              placeholder="Search Products, Collections..."
              className={styles.search_input}
              autoFocus
              onKeyDown={handleSearch}
              onFocus={() => setShowHistory(true)}
            />
          </div>

          <svg
            onClick={handleClose}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
          </svg>
        </div>
        <div className={styles.search_body}>
          <AnimatePresence mode="wait">
            {showHistory && searchArr?.length !== 0 && (
              <motion.div
                initial="hidden"
                animate="show"
                variants={parentAnimations}
                className="saved-search-terms"
              >
                <ul>
                  {searchArr?.map((i, index) => {
                    return (
                      <motion.li
                        variants={childAnimations}
                        className="saved-term hover-grid"
                        key={`saved-term-${index}`}
                      >
                        <span
                          className="saved-term-span"
                          onClick={() => handleSearchV2(i)}
                        >
                          {i}
                        </span>
                        <svg
                          onClick={() => removeSearchTerm(i)}
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0 0 50 50"
                        >
                          <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                        </svg>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Search;
