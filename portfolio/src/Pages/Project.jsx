<div className="flex flex-col md:flex-row md:gap-32 items-center justify-center px-4">
  <div className="w-full md:w-1/2 mb-6 md:mb-0">
    <img
      src={d.image}
      alt={d.name}
      className="h-auto max-h-[500px] w-full object-contain"
    />
  </div>
  <div className="w-full md:w-1/2">
    <h3 className="text-3xl md:text-5xl font-serif mb-4 text-Custom-gray">
      {d.name}
    </h3>
    <p className="text-lg text-gray-600 leading-relaxed mb-4">
      {d.description}
    </p>
    <div className="text-sm text-gray-500 font-mono mb-2">Tech: {d.Languages}</div>
    <div className="flex gap-4 text-sm text-blue-600 underline">
      <a href={d.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={d.Link} target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  </div>
</div>
