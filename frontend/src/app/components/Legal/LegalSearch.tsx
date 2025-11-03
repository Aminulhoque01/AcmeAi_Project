/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
 
import LegalCard from "../LegalCard/LegalCard";
import { useSearchLegalDocsQuery } from "../../../features/legal/legalApi";
import { setQuery } from "../../../features/legal/legalSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
 
const LegalSearch: React.FC = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state:any) => state.legal.query);
  const { data, isFetching } = useSearchLegalDocsQuery(query, {
    skip: !query,
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
           Legal Document Search
        </h1>

        <input
          type="text"
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          placeholder="Enter keyword (e.g., termination, contract, IP)"
          className="border border-gray-300 focus:ring-2 focus:ring-blue-400 w-full p-3 rounded-lg outline-none"
        />

        {isFetching && (
          <p className="mt-4 text-blue-500 animate-pulse text-center">
            Searching...
          </p>
        )}

        {data && data.results?.length > 0 ? (
          <div className="mt-6 space-y-4">
            {data.results.map((doc: any) => (
              <LegalCard key={doc._id} doc={doc} />
            ))}
          </div>
        ) : (
          query &&
          !isFetching && (
            <p className="mt-6 text-center text-gray-600 italic">
              No matching documents found.
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default LegalSearch;
