import React, { useState } from "react";

const Index = ({ companyName, companyShares, setCompanyShares }) => {
  const [share, setShare] = useState([]);
  const onChange = (e) => {
    const { value, name } = e.target;
    setShare((prev) => {
      setCompanyShares((pre) => {
        return { ...pre, [companyName]: { ...prev, [name]: value } };
      });
      return { ...prev, [name]: value };
    });
    

  }
  return (
    <form className="bg-white shadow-lg sm:rounded-lg p-4 mt-5 mb-5">
      <p className="mt-5 mb-5">Company Name: {companyName}</p>
      <div className="grid grid-cols-1 gap-4 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share1"
          >
            Share 1
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share1}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share1"
            name="share1"
            placeholder="Please Enter Share 1 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share2"
          >
            Share 2
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share2}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share2"
            name="share2"
            placeholder="Please Enter Share 2 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share3"
          >
            Share 3
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share3}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share3"
            name="share3"
            placeholder="Please Enter Share 3 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share4"
          >
            Share 4
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share4}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share4"
            name="share4"
            placeholder="Please Enter Share 4 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share5"
          >
            Share 5
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share5}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share5"
            name="share5"
            placeholder="Please Enter Share 5 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share6"
          >
            Share 6
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share6}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share6"
            name="share6"
            placeholder="Please Enter Share 6 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share7"
          >
            Share 7
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share7}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share7"
            name="share7"
            placeholder="Please Enter Share 7 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share8"
          >
            Share 8
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share8}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share8"
            name="share8"
            placeholder="Please Enter Share 8 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share9"
          >
            Share 9
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share9}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share9"
            name="share9"
            placeholder="Please Enter Share 9 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share10"
          >
            Share 10
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share10}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share10"
            name="share10"
            placeholder="Please Enter Share 10 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share11"
          >
            Share 11
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share11}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share11"
            name="share11"
            placeholder="Please Enter Share 11 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share12"
          >
            Share 12
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share12}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share12"
            name="share12"
            placeholder="Please Enter Share 12 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share13"
          >
            Share 13
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share13}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share13"
            name="share13"
            placeholder="Please Enter Share 13 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share14"
          >
            Share 14
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share14}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share14"
            name="share14"
            placeholder="Please Enter Share 14 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share15"
          >
            Share 15
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share15}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share15"
            name="share15"
            placeholder="Please Enter Share 15 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share16"
          >
            Share 16
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share16}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share16"
            name="share16"
            placeholder="Please Enter Share 16 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share17"
          >
            Share 17
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share17}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share17"
            name="share17"
            placeholder="Please Enter Share 17 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share18"
          >
            Share 18
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share18}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share18"
            name="share18"
            placeholder="Please Enter Share 18 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share19"
          >
            Share 19
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share19}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share19"
            name="share19"
            placeholder="Please Enter Share 19 value"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="share20"
          >
            Share 20
          </label>
          <input
            type="number"
            onChange={onChange}
            value={share?.share20}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            id="share20"
            name="share20"
            placeholder="Please Enter Share 20 value"
          />
        </div>
      </div>
    </form>
  );
};

export default Index;
