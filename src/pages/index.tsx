import Head from "next/head";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import PostCard from "../components/PostCard";

import styles from "../styles/components/PostCard.module.scss";
import CommonStyles from "../styles/Common.module.scss";

export default function Home() {
  const [itemData, setitemData] = useState<any[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("/api/favorites");
      const data = await response.json();
      setitemData(data);
    };
    fetchItems();
  }, []);

  return (
    <>
      <section className={CommonStyles.item_wrapper}>
        <div className="container">
          <div className="row">
            {itemData.map((itemDataVal) => (
              <div
                className={`col-lg-4 ${styles.post_card} ${
                  itemDataVal.status === true ? styles.favorite : ""
                }`}
                key={itemDataVal.id}
              >
                <PostCard buttonID={itemDataVal.id} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
