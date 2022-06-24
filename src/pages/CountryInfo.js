import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCountries } from '../redux/AllCountries';

export default function CountryInfo() {
  const { data } = useSelector((state) => state.allCountries);
  const { name } = useParams();
  const countryToDisplay = data.filter(
    (country) => country.name.common === name,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  const country = countryToDisplay[0];
  const borders = country?.borders ? country?.borders : [];

  return (
    <div className=" p-10 md:p-20 text-white md:h-screen">
      <Link to="/">
        <button
          type="button"
          className="w-28 shadow-lg bg-[#2d4474] rounded p-1 mb-10"
        >
          Back
        </button>
      </Link>
      <div className="flex flex-col gap-y-16 md:flex-row md:gap-x-20 ">
        <img src={country?.flags.png} alt="country-flag" />
        <div>
          <h2 className="font-bold mb-6">{country?.name?.common}</h2>
          <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-20">
            <div>
              <p>
                <span className="font-bold">Native Name</span>
                :Belge
              </p>
              <p>
                <span className="font-bold"> Population:</span>
                <span className="pl-2">{country?.population}</span>
              </p>
              <p>
                <span className="font-bold">Region:</span>
                <span className="pl-2">{country?.region}</span>
              </p>
              <p>
                <span className="font-bold">SubRegion:</span>
                <span className="pl-2">{country?.subregion}</span>
              </p>
              <p>
                <span className="font-bold">Capital:</span>
                <span className="pl-2">{country?.capital}</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex-col gap-y-3 md:flex-row md:gap-x-3">
            <h4>Border Countries:</h4>
            <div className="mt-2">
              {borders.map((border) => (
                <button
                  key={border}
                  type="button"
                  className="w-20 shadow-lg bg-[#2d4474] mr-3 rounded"
                >
                  {border}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
