
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="bg-red-200 text-center p-4 hover:text-green-500">Country App</h1>
      <div className="flex items-center justify-center min-h-screen bg-red-100 overflow-hidden">
        <div className="bg-pink-500 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <Link 
            href="/country" 
            className="text-white font-bold text-lg hover:text-yellow-200"
          >
            Explore Countries
          </Link>
        </div>
      </div>
    </div>
  );
}








