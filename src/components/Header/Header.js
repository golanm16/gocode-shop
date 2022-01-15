import { AddProduct } from "../AddProduct/AddProduct";
import "./Header.css";
export const Header = ({
  categories,
  setChosenCategory,
  setSortBy,
  sortValues,
}) => {
  return (
    <nav className="product-filter">
      <h1>Shop</h1>
      <AddProduct categories={categories} />
      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select
            onChange={(e) => {
              setChosenCategory(e.target.value);
            }}
          >
            {categories.map((cat) => (
              <option key={`cat-${cat}`}>{cat}</option>
            ))}
          </select>
        </div>{" "}
        <div className="collection-sort">
          <label>Sort by:</label>
          <select onChange={(e) => setSortBy(e.target.value)}>
            {sortValues.map((sv) => (
              <option key={`cat-${sv.title}`} value={sv.value}>
                {sv.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
};
