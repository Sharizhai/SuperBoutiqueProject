const SideBar = () => {

  

  return (
  <>
  <div className="sb">
    <h1>SIDEBAR</h1>
    <div className="sb-filtre">
      <span style={{fontSize: '24px'}}>Prix</span>
      <div>
        <span className="sb-price-input">
          <span>€ </span>
          <input></input>
        </span>
        <span style={{margin: '0 4px', fontSize: '24px'}}> - </span>
        <span className="sb-price-input">
          <span>€ </span>
          <input></input>
        </span>
      </div>
    </div>

    <div className="sb-filtre">
      <span style={{fontSize: '24px'}}>Marque</span>
      <span className="sb-marque-input">
        <select>
          <option>--Sélectionner une marque--</option>
          <option>trucmachin</option>
        </select>
      </span>
    </div>

    <button className="sb-btn-search">Rechercher</button>
  </div>
  </>
  );
};

export default SideBar;