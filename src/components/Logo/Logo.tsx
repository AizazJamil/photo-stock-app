import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width="32"
        height="32"
      >
        <defs>
          <mask id="starMask">
            <rect width="200" height="200" fill="currentColor" />
            <path
              d="M 100 30 Q 100 100 30 100 Q 100 100 100 170 Q 100 100 170 100 Q 100 100 100 30 Z"
              fill="#000000"
            />
          </mask>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="currentColor"
          mask="url(#starMask)"
        />
      </svg>
      {/* <Icon name="logos" size={32} className="text-white" /> */}
      <span className="self-center text-xl text-white font-semibold whitespace-nowrap">
        Photo Stock
      </span>
    </Link>
  );
};

export default Logo;
