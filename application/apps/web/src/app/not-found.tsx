import Link from 'next/link';
import { Button } from '@persofin/shadcn';
export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center gap-4">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
