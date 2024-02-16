/* eslint-disable react/prop-types */
import svg from "../loops/svg";
const SvgContainer = ({ main = false }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="94.456"
        height="79.156"
        viewBox="0 0 94.456 79.156"
      >
        <g
          id="Group_454"
          data-name="Group 454"
          transform="translate(-913.538 -535.755)"
        >
          {svg.map((item) => {
            return (
              <path
                key={item.id}
                id={item.id}
                d={item.d}
                data-name={item.data_name?.data_name}
                transform={item.transform}
                fill={main ? item.fill : "#fff"}
                opacity={item.opacity}
              ></path>
            );
          })}
        </g>
      </svg>
    </>
  );
};

export default SvgContainer;
