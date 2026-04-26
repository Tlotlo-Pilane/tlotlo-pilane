import { useRef, useEffect } from "react";

const ResumeModal = ({ onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 pt-20 backdrop-blur-sm"
      role="presentation"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label="Resume preview"
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl border bg-gray-100 p-6 text-black shadow-2xl dark:border-gray-700 dark:bg-black dark:text-white"
      >
        {/* Header with Action Buttons */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">My Resume</h2>
          <div className="flex space-x-4">
            <a
              href="/TLOTLO_PILANE - CV.pdf"
              download
              className="text-[#4ca771] hover:text-[#013237] px-4 py-2 transition"
            >
              Download
            </a>
            <button
              onClick={onClose}
              className="text-red-500 hover:text-red-800"
            >
              Close
            </button>
          </div>
        </div>

        {/* PDF Preview */}
        <iframe
          src="/TLOTLO_PILANE - CV.pdf"
          title="Resume"
          className="w-full h-[70vh] border rounded"
          onError={() => {
            window.open("/TLOTLO_PILANE - CV.pdf", "_blank", "noopener,noreferrer");
            onClose();
          }}
        ></iframe>

      </div>
    </div>
  );
};

export default ResumeModal;
