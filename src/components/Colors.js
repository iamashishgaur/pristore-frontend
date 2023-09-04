import React from "react";

const Colors = (props) => {
  const { colorData, setColor } = props;
  return (
    <>
      <ul className="colors ps-0">
        {colorData &&
          colorData.map((item, index) => {
            return (
              <li
                className="cursor-pointer"
                onClick={() => setColor(item?._id)}
                key={index}
                style={{ backgroundColor: item?.title }}
              ></li>
            );
          })}
      </ul>
    </>
  );
};

export default Colors;
