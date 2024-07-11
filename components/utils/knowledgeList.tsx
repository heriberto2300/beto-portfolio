const KnowledgeList = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <li className="text-sm">
      <article className="flex flex-col gap-5 items-center md:items-start justify-center">
        <p className="font-bold">{title}</p>
        <ul className="list-disc">
          {children}
        </ul>
      </article>
    </li>
  );
};

export default KnowledgeList;