

interface Props {
  phoneNumber: string;
}

export default function WhatsAppButton({ phoneNumber }: Props) {
  return (
    <a
      className="inline-flex items-center justify-center rounded-md bg-[#25D366] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      href={`https://web.whatsapp.com/send?phone=${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <SmartphoneIcon className="mr-2 h-5 w-5" />
      WhatsApp
    </a>
  );
}

function SmartphoneIcon(props: any) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
