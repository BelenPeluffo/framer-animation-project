import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ItemsContainer from "../components/CategoryContainer";
import { getItems } from "../services/MockServices";

const Home = () => {
  const navigate = useNavigate();
  const categoryIndex = useMotionValue(0);
  const categories = [
    "{카테고리}",
    "{category}",
    "그룹",
    "group",
    "아이돌",
    "idol",
    "배우",
    "actor",
    "소속사",
    "company",
  ];
  const baseText = useTransform(
    categoryIndex,
    (currentIndex) => categories[currentIndex]
  );
  const count = useMotionValue(0);
  const rounded = useTransform(count, (index) => Math.round(index));
  const displayCategory = useTransform(rounded, (index) =>
    baseText.get().slice(0, index)
  );
  const updateCategory = useMotionValue(true);
  const lastSearchedItems = getItems();

  useEffect(() => {
    animate(count, 30, {
      type: "tween",
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(index) {
        if (updateCategory.get() === true && index > 0) {
          updateCategory.set(false);
        } else if (updateCategory.get() === false && index === 0) {
          if (categoryIndex.get() === categories.length - 1) {
            categoryIndex.set(0);
          } else {
            categoryIndex.set(categoryIndex.get() + 1);
          }
          updateCategory.set(true);
        }
      },
    });
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <div
        style={{
          height: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <div style={{ marginBottom: 30 }}>
          <div
            className="title"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              marginBottom: 5,
              justifyContent: "center",
              alignItems: "baseline",
            }}
          >
            What <motion.div>{displayCategory}</motion.div>
          </div>
          <div className="subtitle">are you looking for today?</div>
        </div>
        <div>
          <input
            className="search-bar"
            type="search"
            placeholder="Let's look it up!"
          />
        </div>
        <div style={{ marginBottom: 5, marginTop: 5, display: "flex", gap: 5 }}>
          <button onClick={() => navigate("/groups")}>GROUPS</button>
          <button onClick={() => navigate("/idols")}>IDOLS</button>
        </div>
      </div>
      <div style={{ height: "40%", margin: 20, padding: 5 }}>
        <ItemsContainer items={lastSearchedItems} />
      </div>
    </div>
  );
};

export default Home;
