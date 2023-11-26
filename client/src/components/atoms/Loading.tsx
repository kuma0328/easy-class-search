export const Loading = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-purple-50 p-20">
        <div className="mb-4">
          <div className="w-10 h-10 border-t-4 border-gray-500 border-solid rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-600">Loading</p>
      </div>
    </>
  );
};

export default Loading;
