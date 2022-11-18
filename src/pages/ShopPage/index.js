//import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import "./style.css";
import ProductFilters from "../../components/CategoryFilter";

const Prices = [
  { down: 0.0, up: 30.0 },
  { down: 30.0, up: 60.0 },
  { down: 60.0, up: 100.0 },
  { down: 100.0, up: 300.0 },
  { down: 500.0, up: 800.0 },
];

const ShopPage = () => {
  // const routeParams = useParams();
  const [products, setProducts] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [priceFilters, setPriceFilters] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const productsResponse = await axios.get(
        "http://localhost:4000/products/"
      );
      console.log(productsResponse.data);
      setProducts(productsResponse.data);
      setProductsToShow(productsResponse.data);
    }
    getProducts();
  }, []);

  const categories = products.map((product) => product.category.title);
  const categoriesSet = new Set();
  categories.forEach((category) => {
    categoriesSet.add(category);
  });

  const handleCategoryFilterChange = (event) => {
    let newFilters = new Set(categoryFilters);

    if (event.target.checked) {
      newFilters.add(event.target.value);
    } else {
      newFilters.delete(event.target.value);
    }
    setCategoryFilters(newFilters);
    filterProducts(newFilters, priceFilters);
  };

  const handlePriceFilterChange = (event) => {
    let newFilters = new Set(priceFilters);
    if (event.target.checked) {
      newFilters.add(event.target.value);
    } else {
      newFilters.delete(event.target.value);
    }
    setPriceFilters(newFilters);
    filterProducts(categoryFilters, newFilters);
  };

  const filterProducts = (categoryFilter, priceFilter) => {
    let newProducts = [...products];
    if (categoryFilter.size) {
      newProducts = newProducts.filter((product) => {
        return categoryFilter.has(product.category.title);
      });
    }
    let minValue = 0;
    let maxValue = Infinity;

    if (priceFilter.size) {
      const downValues = [...priceFilter].map((range) =>
        parseFloat(range.split("-")[0])
      );
      const upperValues = [...priceFilter].map((range) =>
        parseFloat(range.split("-")[1])
      );
      minValue = Math.min(...downValues);
      maxValue = Math.max(...upperValues);

      newProducts = newProducts.filter((product) => {
        return product.price >= minValue && product.price < maxValue;
      });
    }

    setProductsToShow(newProducts);
  };

  return (
    <div>
      <div className="container">
        <div className="container-FilterBar">
          <ProductFilters
            categories={[...categoriesSet]}
            prices={Prices}
            onCategoryFilterChange={handleCategoryFilterChange}
            onPriceFilterChange={handlePriceFilterChange}
          />
        </div>

        <div className="container-ShowProducts">
          <ul>
            {productsToShow.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { ShopPage };
