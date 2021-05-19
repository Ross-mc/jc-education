import Link from "next/link"

const DropdownLink = ({ href, text }) => {
  return (
    <Link href={href}>
      <a>
          {text}
      </a>
    </Link>
  );
};

export default DropdownLink;
