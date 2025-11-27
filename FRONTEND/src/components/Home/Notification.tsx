import type { FC } from "react";
import { notificationImages } from "../../assets/pages/Home/HomeConstants.ts";
import rate from "../../assets/pages/Home/rate.jpeg";

interface NotificationProps {
  className?: string;
  title: string;
}

const Notification: FC<NotificationProps> = ({ className = "", title }) => {
  return (
    <div
      className={`${className} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={rate}
        width={62}
        height={62}
        alt="Notification icon"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item) => (
              <li
                key={item} // Usamos el valor de la imagen como key
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={`Contributor image`}
                />
              </li>
            ))}
          </ul>

          <div className="body-2 text-n-13 pl-2">10m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
