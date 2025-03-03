const Announcements = () => {
  return (
    <div className="ng-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="flex-xl font-semibold">Announcements</h1>
        <span className="text-xl text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-starSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            velit facilis, consectetur consequatur provident dolore eos officia
            qui! Nisi voluptas fuga id alias ad neque repellendus assumenda quo
            nostrum excepturi!
          </p>
        </div>
        <div className="bg-starPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            velit facilis, consectetur consequatur provident dolore eos officia
            qui! Nisi voluptas fuga id alias ad neque repellendus assumenda quo
            nostrum excepturi!
          </p>
        </div>
        <div className="bg-starYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            velit facilis, consectetur consequatur provident dolore eos officia
            qui! Nisi voluptas fuga id alias ad neque repellendus assumenda quo
            nostrum excepturi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
