const LoadMoreButton = ({ onClick }) => {
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={onClick}
        className="rounded-lg bg-[var(--terracotta-400)] px-6 py-3 text-white hover:bg-[var(--terracotta-500)] transition-all cursor-pointer"
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
