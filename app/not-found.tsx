import Link from "next/link";
import { CrtScreen } from "@/components/crt-screen";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-8">
      <CrtScreen modelLabel="ERROR · ?FILE NOT FOUND">
        <div className="space-y-4 font-display">
          <p className="text-xl opacity-90">RUN</p>
          <h1 className="text-5xl leading-tight tracking-wide sm:text-6xl">
            ?FILE NOT FOUND
            <br />
            ERROR IN 404
          </h1>
          <p className="text-lg opacity-85">
            THE PAGE YOU REQUESTED IS NOT ON THIS DISK.
          </p>
          <p className="text-lg opacity-85">
            CHECK CABLE AND TRY AGAIN.
            <span className="cursor-block" />
          </p>

          <hr className="crt-hr" />

          <p className="text-lg">
            <Link
              href="/"
              className="font-display tracking-wide hover:text-apple-yellow"
            >
              ] HOME
            </Link>
          </p>
        </div>
      </CrtScreen>
    </div>
  );
}
