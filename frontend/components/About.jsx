import Link from "next/link";

export default function AboutComponent() {
  return (
    <main className="container mx-auto px-14 py-2">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center">
                <GitlabIcon className="w-6 h-6" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight">Mwakenya</h1>
            </div>
            <p className="text-muted-foreground mt-2">
              Mwakenya is a leading technology company that specializes in
              creating innovative software solutions. Founded in 2010, we have a
              team of passionate developers and designers who are dedicated to
              pushing the boundaries of possible in the digital world.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              At Mwakenya, we believe in the power of technology to transform
              businesses and improve lives. Our mission is to develop
              cutting-edge products that solve real-world problems and empower
              our clients to achieve their goals. From custom web applications
              to mobile apps, we have the expertise to bring your ideas to life.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="bg-muted p-6 rounded-lg w-full">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center">
                <GitlabIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Visit our GitHub</h3>
                <p className="text-muted-foreground text-sm">
                  Check out our open-source projects and contribute to our
                  community.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="https://github.com/kellymweu/mwakenya"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
                target="_blank"
              >
                <svg
                  className="mr-2 w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.475 2 2 6.475 2 12c0 4.417 2.865 8.178 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.137 20.178 22 16.417 22 12c0-5.525-4.475-10-10-10z"
                  />
                </svg>
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function GitlabIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
