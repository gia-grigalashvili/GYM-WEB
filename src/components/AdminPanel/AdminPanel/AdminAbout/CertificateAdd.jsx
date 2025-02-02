import React from "react";

export default function CertificateAdd() {
  const [error, setError] = useState("");

  const isValidDate = (date) => !isNaN(new Date(date).getTime());
  const handleStartDateChange = (e) => {
    const startDate = e.target.value;

    if (isValidDate(startDate) && isValidDate(certificateEnd)) {
      if (new Date(startDate) > new Date(certificateEnd)) {
        setError("Start date cannot be later than the end date.");
        return;
      }
    }
    setError("");
    setCertificateStart(startDate);
  };

  const handleEndDateChange = (e) => {
    const endDate = e.target.value;
    if (isValidDate(endDate) && isValidDate(certificateStart)) {
      if (new Date(endDate) < new Date(certificateStart)) {
        setError("End date cannot be earlier than the start date.");
        return;
      }
    }
    setError("");
    setCertificateEnd(endDate);
  };
  return (
    <div>
      <input
        value={certificateText}
        onChange={(e) => setCertificateText(e.target.value)}
        placeholder="Add Your Certificate..."
        type="text"
        name="name"
        className="w-full p-[0.625rem] rounded-2xl bg-[#323232] text-white font-light placeholder:text-[#C4C4C4]"
      />

      <div className="flex gap-10 mt-3">
        <input
          type="date"
          onChange={handleStartDateChange}
          value={certificateStart}
          className="w-full p-[0.625rem] rounded-2xl bg-[#323232] text-white font-light placeholder:text-green-200"
          placeholder="Certification Start Date:"
        />
        <input
          type="date"
          onChange={handleEndDateChange}
          value={certificateEnd}
          className="w-full p-[0.625rem] rounded-2xl bg-[#323232] text-white font-light placeholder:text-red-200"
          placeholder="Certification End Date:"
        />
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
