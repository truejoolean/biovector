import Link from 'next/link'

export default function FourOhFour() {
  return <div className="flex flex-col w-1/2 mx-auto">
    <h1 className="text-5xl">404 - Page Not Found :(</h1>
    <span className="mt-8">Sorry, this page doesn't seem to exist. Why don't you head back to the</span>
    <Link href="/">
      <a>
        <span className="text-4xl">Home page</span>
      </a>
    </Link>
  </div>
}