import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function CountryList({ countries }) {
  const countryListmap = countries.map((country) => (
    <Link to={`countryInfo/${country.name.common}`} key={country.id}>
      <div>
        <div className="bg-[#2d4474] text-white shadow-lg">
          <img
            src={country.flags.png}
            className="object-fill h-48 w-96"
            alt="countryflag"
          />
          <div className="px-6 pt-6 pb-10">
            <p className="font-bold mb-6">{country.name.common}</p>
            <p>
              Population:
              <span className="font-light pl-2">
                {country.population}
              </span>
            </p>
            <p>
              Region:
              <span className="font-light pl-2">
                {country.region}
              </span>
            </p>
            <p>
              Capital:
              <span className="font-light  pl-2">
                {country.capital}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  ));

  return <>{countryListmap}</>;
}

CountryList.propTypes = {
  countries: PropTypes.arrayOf.isRequired,
};

export default CountryList;
