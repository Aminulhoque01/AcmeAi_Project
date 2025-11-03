 

export const getMockResults = async (query: string) => {
  const docs = [
    { title: "Contract Law Basics", content: "A contract is an agreement..." },
    { title: "Intellectual Property Act", content: "This act defines IP..." },
    { title: "Company Registration Rules", content: "Every company must..." }
  ];
  return docs.filter(d => d.title.toLowerCase().includes(query.toLowerCase()));
};
