import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center md:pl-20 py-50">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="font-bold text-pink-500">
        Return Home
      </Link>
    </div>
  );
}
