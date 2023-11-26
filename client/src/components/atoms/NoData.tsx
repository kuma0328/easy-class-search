export const NoData = () => {
  return (
    <div className="text-center bg-purple-50 p-20">
      <img
        src="/logo.svg"
        alt=""
        className="w-50 h-50 object-contain mx-auto" // アスペクト比を維持し、中央寄せ
      />
      <div className="mt-10 text-gray-600 text-xl">データがありません</div>
    </div>
  );
};

export default NoData;
