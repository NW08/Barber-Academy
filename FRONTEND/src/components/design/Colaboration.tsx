import left_curve from "../../assets/design/collaboration/curve-1.svg";
import right_curve from "../../assets/design/collaboration/curve-2.svg";

export function RightCurve() {
  return (
    <div className="hidden absolute top-1/2 left-full w-40.5 -mt-1 ml-10 pointer-events-none xl:block">
      <img src={right_curve} width={162} height={76} alt="Curve 2" />
    </div>
  );
}

export function LeftCurve() {
  return (
    <div className="hidden absolute top-1/2 right-full w-130.5 -mt-1 mr-10 pointer-events-none xl:block">
      <img src={left_curve} width={522} height={182} alt="Curve 1" />
    </div>
  );
}
