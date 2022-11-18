import ReactStars from "react-rating-stars-component";
import "./style.css";

export default function ProductFilters(props) {
  const { categories, onCategoryFilterChange, prices, onPriceFilterChange } =
    props;

  return (
    <div ClassName="container-filters">
      <div>
        <div className="filter-category-item">
          <h3>Categories:</h3>
          {categories.map((category) => (
            <p key={category}>
              <label>
                <input
                  onChange={onCategoryFilterChange}
                  type="checkbox"
                  value={category}
                />
                {category}
              </label>
            </p>
          ))}
        </div>{" "}
      </div>
      <div>
        <div className="filter-price-item">
          <h3>Price Filter:</h3>
          {prices.map((range) => (
            <p key={range.down}>
              <label>
                <input
                  onChange={onPriceFilterChange}
                  type="checkbox"
                  value={`${range.down}-${range.up}`}
                />
                {range.down} - {range.up}
              </label>
            </p>
          ))}
        </div>
        <div className="filter-rating-item">
          <h3>Rating Item:</h3>
          <ReactStars value={1} edit={false} />
          <ReactStars value={2} edit={false} />
          <ReactStars value={3} edit={false} />
          <ReactStars value={4} edit={false} />
          <ReactStars value={5} edit={false} />
        </div>
      </div>
    </div>
  );
}
