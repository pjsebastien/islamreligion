export default function MedicalDisclaimer() {
  return (
    <div className="my-8 rounded-xl border border-amber-200 bg-amber-50 px-6 py-5">
      <div className="flex items-start gap-3">
        <svg
          className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
        <div>
          <p className="text-sm font-semibold text-amber-800">Avertissement</p>
          <p className="mt-1 text-sm leading-relaxed text-amber-700">
            Les informations présentées sur cette page sont données à titre informatif
            et ne remplacent en aucun cas un avis médical professionnel.
            Consultez toujours un médecin ou un professionnel de santé qualifié
            avant de commencer tout traitement.
          </p>
        </div>
      </div>
    </div>
  );
}
