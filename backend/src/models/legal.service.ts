import { LegalModel } from "./legal.model";

export const searchLegalDocs = async (query: string) => {
  const q = query.trim();
  const docs = await LegalModel.find({
    $or: [
      { title: { $regex: q, $options: "i" } },
      { content: { $regex: q, $options: "i" } },
      { tags: { $regex: q, $options: "i" } },
    ],
  }).limit(10);

  const results = docs.map((doc) => {
    const snippetIndex = doc.content.toLowerCase().indexOf(q.toLowerCase());
    const summary =
      snippetIndex >= 0
        ? doc.content.slice(Math.max(0, snippetIndex - 40), snippetIndex + 200)
        : doc.content.slice(0, 250);

    return {
      id: doc._id,
      title: doc.title,
      jurisdiction: doc.jurisdiction,
      date: doc.date,
      summary: summary + "...",
      tags: doc.tags,
    };
  });

  return results;
};
