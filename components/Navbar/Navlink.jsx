import Link from "next/link";

const Navlink = ({ linkObj, styleObj, className }) => {
  return (
    <li className={className}>
      <Link  href={linkObj.link} style={{ ...styleObj }}>
        {linkObj.title}
      </Link>
    </li>
  );
};

export default Navlink;