import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div className="mx-auto mt-16 max-w-7xl text-center">
        <Link
          to="/chats"
          className="text-xl text-blue-600 underline"
        >
          Chats
        </Link>
      </div>
    </div>
  );
}
