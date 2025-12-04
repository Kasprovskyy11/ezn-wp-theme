import type React from "react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  text: string;
  link: string;
  linkComponent?: React.ElementType;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  text,
  link,
  linkComponent: LinkComponent,
  icon,
  onClick,
}: ButtonProps) {
  if (!icon) {
    icon = <FontAwesomeIcon icon={faArrowUpRightFromSquare} />;
  }
  const buttonClasses =
    "flex items-center justify-center text-white bg-[#0CBDBD] rounded-[15px] text-md sm:text-xl gap-2 px-5 py-2 scale-[0.9] hover:scale-[1] transition-transform duration-300 ease-in-out";

  if (LinkComponent) {
    return (
      <LinkComponent to={link} className={buttonClasses} onClick={onClick}>
        <p>{text}</p>
        {icon}
      </LinkComponent>
    );
  }

  return (
    <a href={link} className={buttonClasses} onClick={onClick}>
      <p>{text}</p>
      {icon}
    </a>
  );
}
