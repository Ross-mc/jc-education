import Link from "next/link"

const DropdownLink = ({ href, text }) => {
  return (
    <Link href={href}>
      <a>
        <div style={{ height: "100%" }} className="dropdown-link">
          {text}
        </div>
      </a>
    </Link>
  );
};

export default DropdownLink;
