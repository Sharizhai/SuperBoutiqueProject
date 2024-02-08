import { faker } from '@faker-js/faker/locale/fr';

const ProductCard = () => {

  return (
    <div >
      <div className="product-row"
      style={{ 
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        border: '4px solid black'
      }}>
        <div className="product-item" 
        style={{ 
          marginLeft: '20px',
          maxWidth: '250px',
        }}>
          <a>
            <p>IMAGE ICI</p>
            <div className="product-desc">
              <h3>{faker.commerce.productName()} </h3>
              <p>{faker.commerce.price({min: 1, max: 100, symbol: '€', dec:2 })} </p>
              <p>{faker.commerce.productDescription()} </p>
            </div>
          </a>
        </div>
        <div className="product-item" 
        style={{ 
          marginLeft: '20px',
          maxWidth: '250px',
        }}>
          <a>
            <p>IMAGE ICI</p>
            <div className="product-desc">
              <h3>{faker.commerce.productName()} </h3>
              <p>{faker.commerce.price({min: 1, max: 100, symbol: '€', dec:2 })} </p>
              <p>{faker.commerce.productDescription()} </p>
            </div>
          </a>
        </div>
        <div className="product-item" 
        style={{ 
          marginLeft: '20px',
          maxWidth: '250px',
        }}>
          <a>
            <p>IMAGE ICI</p>
            <div className="product-desc">
              <h3>{faker.commerce.productName()} </h3>
              <p>{faker.commerce.price({min: 1, max: 100, symbol: '€', dec:2 })} </p>
              <p>{faker.commerce.productDescription()} </p>
            </div>
          </a>
        </div>
        <div className="product-item" 
        style={{ 
          marginLeft: '20px',
          maxWidth: '250px',
        }}>
          <a>
            <p>IMAGE ICI</p>
            <div className="product-desc">
              <h3>{faker.commerce.productName()} </h3>
              <p>{faker.commerce.price({min: 1, max: 100, symbol: '€', dec:2 })} </p>
              <p>{faker.commerce.productDescription()} </p>
            </div>
          </a>
        </div>
        <div className="product-item" 
        style={{ 
          marginLeft: '20px',
          maxWidth: '250px',
        }}>
          <a>
            <p>IMAGE ICI</p>
            <div className="product-desc">
              <h3>{faker.commerce.productName()} </h3>
              <p>{faker.commerce.price({min: 1, max: 100, symbol: '€', dec:2 })} </p>
              <p>{faker.commerce.productDescription()} </p>
            </div>
          </a>
        </div>
        <div className="product-item" 
        style={{ 
          marginLeft: '20px',
          maxWidth: '250px',
        }}>
          <a>
            <p>IMAGE ICI</p>
            <div className="product-desc">
              <h3>{faker.commerce.productName()} </h3>
              <p>{faker.commerce.price({min: 1, max: 100, symbol: '€', dec:2 })} </p>
              <p>{faker.commerce.productDescription()} </p>
            </div>
          </a>
        </div>
        <div className="product-item" 
        style={{ 
          marginLeft: '20px',
          maxWidth: '250px',
        }}>
          <a>
            <p>IMAGE ICI</p>
            <div className="product-desc">
              <h3>{faker.commerce.productName()} </h3>
              <p>{faker.commerce.price({min: 1, max: 100, symbol: '€', dec:2 })} </p>
              <p>{faker.commerce.productDescription()} </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;