import { DotIcon } from "./Icons";

const ExperienceCard = ({ item }) => {
  const dateText = `${item.startDate} – ${item.endDate || 'Present'}`;

  return (
    <div className="relative pl-8 border-l-2 border-gray-200 dark:border-white/50 pb-8 last:pb-0 group">
      {/* The Dot on the timeline */}
      <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white bg-gray-300 group-hover:bg-blue-500 group-hover:border-blue-200 transition-colors duration-300" />

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
        <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">{item.role}</h3>
        <span className="text-sm font-medium text-text-main-light dark:text-text-main-dark sm:ml-4 shrink-0">
          {dateText}
        </span>
      </div>

      <div className="text-lg text-gray-700 dark:text-white/90 font-medium mb-3 flex items-center gap-4">
        {item.company}
        {item.location && <span className="text-sm text-gray-400 font-normal mt-0.5">• {item.location}</span>}
      </div>

      <ul className="list-disc list-outside ml-4 mb-4 space-y-2 text-text-secundary-light dark:text-text-secundary-dark">
        {item.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>

      {item.technologies && (
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech, index) => (
            <span
              key={index}
              className="flex text-sm items-center gap-2 rounded-md shadow-light dark:shadow-dark border-1 border-border-light dark:border-border-dark p-2 py-1 text-text-main-light dark:text-text-main-dark"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

// 3. The Main Component
export default function Experience({ experiences, lang }) {
  
  return (
    <section className="py-16 px-main-container">
      <div className="max-w-maxw mx-auto">
        <h2 className='flex items-center gap-1 text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-10 border-b border-gray-200 dark:border-white/50 pb-4'>
          <DotIcon className='size-3 flex items-center justify-center text-text-secundary-light dark:text-text-secundary-dark' />
          {lang ? "Professional Experience" : "Experiencia Profesional"}
        </h2>

        <div className="space-y-0">
          {experiences.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}