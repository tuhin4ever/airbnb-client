import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";
const CategoryBox = ({ label, icon: Icon }) => {
  const [params, setParams] = useSearchParams();
  // const value = params.get("category");
  const navigate = useNavigate();
  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery = {
      ...currentQuery,
      category: label,
    };
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipEmptyString: true }
    );
    navigate(url)
  };
  // console.log(value);
  return (
    <div
      onClick={handleClick}
      className={`
          flex 
          flex-col 
          items-center 
          justify-center 
          gap-2
          p-3
          border-b-2
          hover:text-neutral-900
          border-transparent
          text-neutral-500
          cursor-pointer
        `}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
