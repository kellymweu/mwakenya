import { Button } from "@/components/ui/button";

export default function DownloadComponent() {
  return (
    <div className="w-full py-2">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Educate Yourself Always
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Access our library of documents in various formats to suit your
              needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-card p-6 shadow-lg">
            <FileIcon className="h-12 w-12 text-primary" />
            <h3 className="text-lg font-bold">PDF</h3>
            <p className="text-sm text-muted-foreground">
              Download our documents in PDF format.
            </p>
            <Button size="sm">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-card p-6 shadow-lg">
            <FileIcon className="h-12 w-12 text-primary" />
            <h3 className="text-lg font-bold">DOCX</h3>
            <p className="text-sm text-muted-foreground">
              Download our documents in Microsoft Word format.
            </p>
            <Button size="sm">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-card p-6 shadow-lg">
            <FileIcon className="h-12 w-12 text-primary" />
            <h3 className="text-lg font-bold">XLSX</h3>
            <p className="text-sm text-muted-foreground">
              Download our documents in Microsoft Excel format.
            </p>
            <Button size="sm">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-card p-6 shadow-lg">
            <FileIcon className="h-12 w-12 text-primary" />
            <h3 className="text-lg font-bold">PPTX</h3>
            <p className="text-sm text-muted-foreground">
              Download our documents in Microsoft PowerPoint format.
            </p>
            <Button size="sm">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-card p-6 shadow-lg">
            <FileIcon className="h-12 w-12 text-primary" />
            <h3 className="text-lg font-bold">TXT</h3>
            <p className="text-sm text-muted-foreground">
              Download our documents in plain text format.
            </p>
            <Button size="sm">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-card p-6 shadow-lg">
            <FileIcon className="h-12 w-12 text-primary" />
            <h3 className="text-lg font-bold">RTF</h3>
            <p className="text-sm text-muted-foreground">
              Download our documents in rich text format.
            </p>
            <Button size="sm">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-card p-6 shadow-lg">
            <FileIcon className="h-12 w-12 text-primary" />
            <h3 className="text-lg font-bold">ODT</h3>
            <p className="text-sm text-muted-foreground">
              Download our documents in OpenDocument Text format.
            </p>
            <Button size="sm">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-card p-6 shadow-lg">
            <FileIcon className="h-12 w-12 text-primary" />
            <h3 className="text-lg font-bold">ODS</h3>
            <p className="text-sm text-muted-foreground">
              Download our documents in OpenDocument Spreadsheet format.
            </p>
            <Button size="sm">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function FileIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
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
