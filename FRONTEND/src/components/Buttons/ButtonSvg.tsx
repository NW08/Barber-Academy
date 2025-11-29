import React, { useId } from "react";

interface ButtonSvgProps {
  borderColor?: string;
  backgroundColor?: string;
}

const ButtonSvg: React.FC<ButtonSvgProps> = ({
  backgroundColor,
  borderColor,
}) => {
  const gradientId = useId();
  const backgroundFill = backgroundColor || "none";
  const borderFill = borderColor || null;

  return (
    <>
      {/* GRADIENT DEFINITIONS */}
      {!borderFill && (
        <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none">
          <defs>
            <linearGradient
              id={`${gradientId}-btn-left`}
              x1="50%"
              x2="50%"
              y1="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#E88D0E" />
              <stop offset="100%" stopColor="#E8B90E" />
            </linearGradient>

            <linearGradient
              id={`${gradientId}-btn-top`}
              x1="100%"
              x2="0%"
              y1="50%"
              y2="50%"
            >
              <stop offset="0%" stopColor="#BF8915" />
              <stop offset="100%" stopColor="#BF8000" />
            </linearGradient>

            <linearGradient
              id={`${gradientId}-btn-bottom`}
              x1="100%"
              x2="0%"
              y1="50%"
              y2="50%"
            >
              <stop offset="0%" stopColor="#DA9100" />
              <stop offset="100%" stopColor="#FFD15C" />
            </linearGradient>

            <linearGradient
              id={`${gradientId}-btn-right`}
              x1="50%"
              x2="50%"
              y1="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#BF8000" />
              <stop offset="100%" stopColor="#E69100" />
            </linearGradient>
          </defs>
        </svg>
      )}

      {/* LEFT SVG */}
      <svg
        className="absolute top-0 left-0 h-full w-[21px] pointer-events-none"
        viewBox="0 0 21 44"
      >
        <path
          fill={backgroundFill}
          stroke={borderFill || `url(#${gradientId}-btn-left)`}
          strokeWidth="2"
          d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
        />
      </svg>

      {/* CENTER SVG */}
      <svg
        className="absolute top-0 left-[21px] w-[calc(100%-42px)] h-full pointer-events-none"
        viewBox="0 0 100 44"
        preserveAspectRatio="none"
      >
        {/* Background */}
        {backgroundColor && (
          <polygon
            fill={backgroundFill}
            fillRule="nonzero"
            points="100 0 100 44 0 44 0 0"
          />
        )}

        {/* Top Border (Y=0 area) */}
        <polygon
          fill={borderFill || `url(#${gradientId}-btn-top)`}
          points="100 0 100 2 0 2 0 0"
        />

        {/* Bottom Border (Y=44 area) */}
        <polygon
          fill={borderFill || `url(#${gradientId}-btn-bottom)`}
          points="100 42 100 44 0 44 0 42"
        />
      </svg>

      {/* RIGHT SVG */}
      <svg
        className="absolute top-0 right-0 h-full w-[21px] pointer-events-none"
        viewBox="0 0 21 44"
      >
        <path
          fill={backgroundFill}
          stroke={borderFill || `url(#${gradientId}-btn-right)`}
          strokeWidth="2"
          d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855
             C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
        />
      </svg>
    </>
  );
};

export default ButtonSvg;
