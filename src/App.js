/* eslint-disable array-callback-return */
import React, { useState } from "react";
import CompanyForm from "./components/CompanyForm";
import "./App.css";

function App() {
  const [companyShares, setCompanyShares] = useState([]);
  const [assumeValueDetails, setAssumeValueDetails] = useState();
  const [sumOfDValueDetails, setSumOfDValueDetails] = useState();
  const [squareOfDValueDetails, setSquareOfDValueDetails] = useState();
  const [dSquareSummationDetails, setDSquareSummationDetails] = useState();
  const [cvDetails, setCvDetails] = useState();
  const [visible, setVisible] = useState(false);
  const companyList = [
    "Company A",
    "Company B",
    "Company C",
    "Company D",
    "Company E",
  ];
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  const handleSubmit = () => {
    Object.keys(companyShares).map((companyName) => {
      const company = companyShares[companyName];
      const shares = Object.keys(company).map((key) => {
        return Number(company[key]);
      });
      const shareLength = shares.length;
      const assumeValue = shares[9];
      setAssumeValueDetails((prev) => {
        return {
          ...prev,
          [companyName]: assumeValue,
        };
      });
      const dValue = shares.map((e) => e - assumeValue);

      const sumOfDValue = dValue.reduce((a, b) => a + b, 0);
      setSumOfDValueDetails((prev) => {
        return {
          ...prev,
          [companyName]: sumOfDValue,
        };
      });

      const squareOfDValue = dValue.map((e) => e ** 2);
      setSquareOfDValueDetails((prev) => {
        return {
          ...prev,
          [companyName]: squareOfDValue,
        };
      });

      const dSquareSummation = squareOfDValue.reduce((a, b) => a + b, 0);
      setDSquareSummationDetails((prev) => {
        return {
          ...prev,
          [companyName]: dSquareSummation,
        };
      });

      const sigma =
        dSquareSummation / shareLength - (sumOfDValue / shareLength) ** 2;
      const finalSigma = Math.sqrt(sigma).toFixed(2);

      const xNot = (assumeValue + sumOfDValue / shareLength).toFixed(2);

      const cv = ((finalSigma / xNot) * 100).toFixed(2);
      setCvDetails((prev) => {
        return {
          ...prev,
          [companyName]: cv,
        };
      });
    });
    setVisible(true);
  };

  const compareShares = () => {
    let sortListOfCompany = [];
    const cvList = Object.keys(cvDetails).map((key) => {
      return Number(cvDetails[key]);
    });

    const sortCvList = cvList.sort((a, b) => a - b);
    // push into sortListOfCompany from the sortCvList values

    sortCvList.map((cv) => {
      const companyName = Object.keys(cvDetails).find(
        (key) => Number(cvDetails[key]) === cv
      );
      sortListOfCompany.push(companyName);
    });

    return `${sortListOfCompany[4]}: ${sortCvList[4]}% > ${sortListOfCompany[3]}: ${sortCvList[3]}% > ${sortListOfCompany[2]}: ${sortCvList[2]}% > ${sortListOfCompany[1]}: ${sortCvList[1]}% > ${sortListOfCompany[0]}: ${sortCvList[0]}%, So the investor should purchase the shares of ${sortListOfCompany[0]}.`;
  };
  return (
    <div className="App p-6">
      <div className="w-full md:w-auto">
        <div className="px-4 py-5 sm:p-6">
          <p className="text-center">
            <b>Question:</b> Collect: 5 companies 20 shares Comparison Both calculate
            by manually and MAT lab or any other programming
          </p>
          {companyList.map((company, index) => (
            <CompanyForm
              key={index}
              companyName={company}
              shares={companyShares}
              setCompanyShares={setCompanyShares}
            />
          ))}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
          {visible && (
            <div className="mt-4 flex flex-col">
              <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle">
                  <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                    <table
                      className="min-w-full border-separate"
                      style={{ borderSpacing: 0 }}
                    >
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                          >
                            Assume Value
                          </th>
                          <th
                            scope="col"
                            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                          >
                            Sum of D Value
                          </th>
                          <th
                            scope="col"
                            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                          >
                            Square of D Value
                          </th>
                          <th
                            scope="col"
                            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                          >
                            D Square Summation
                          </th>
                          <th
                            scope="col"
                            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                          >
                            CV
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {companyList.map((company, index) => (
                          <tr key={index}>
                            <td
                              className={classNames(
                                index !== 4 ? "border-b border-gray-200" : "",
                                "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                              )}
                            >
                              {company}
                            </td>
                            <td
                              className={classNames(
                                index !== 4 ? "border-b border-gray-200" : "",
                                "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                              )}
                            >
                              {assumeValueDetails[company]}
                            </td>
                            <td
                              className={classNames(
                                index !== 4 ? "border-b border-gray-200" : "",
                                "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                              )}
                            >
                              {sumOfDValueDetails[company]}
                            </td>
                            <td
                              className={classNames(
                                index !== 4 ? "border-b border-gray-200" : "",
                                "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                              )}
                            >
                              {squareOfDValueDetails[company]}
                            </td>
                            <td
                              className={classNames(
                                index !== 4 ? "border-b border-gray-200" : "",
                                "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                              )}
                            >
                              {dSquareSummationDetails[company]}
                            </td>
                            <td
                              className={classNames(
                                index !== 4 ? "border-b border-gray-200" : "",
                                "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                              )}
                            >
                              {cvDetails[company]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <p className="mt-5">
                Comments: From our Calculation we find that the Prices of Shares
                of Company A shows the {compareShares()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
