/* eslint-disable @typescript-eslint/no-explicit-any */
 

const LegalCard = ({ doc }: { doc: any }) => {
  return (
    <div className="border border-gray-200 p-5 rounded-xl bg-gray-50 hover:shadow-lg transition-all duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-1">
        {doc.title}
      </h2>
      <p className="text-sm text-gray-500">
        {doc.jurisdiction} —{" "}
        <span className="italic">{new Date(doc.date).toDateString()}</span>
      </p>

      <p className="mt-3 text-gray-700 leading-relaxed">{doc.content}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {doc.tags.map((tag: string, i: number) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LegalCard;
