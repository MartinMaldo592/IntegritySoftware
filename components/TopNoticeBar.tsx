"use client";

export default function TopNoticeBar() {
  return (
    <div className="bg-slate-900 text-slate-400 py-2 text-xs md:text-sm border-b border-white/10">
      <div className="w-[95%] max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <div>
          <i className="fas fa-building text-sky-400 mr-1.5"></i>{" "}
          <strong className="text-white">INTEGRITY SOFTWARE S.A.C.</strong> | RUC: <strong className="text-white">20609874125</strong>
        </div>
      </div>
    </div>
  );
}
