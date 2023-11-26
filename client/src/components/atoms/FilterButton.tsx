interface FilterButtonProps {
  onFilterClick: () => void;
}

export const FilterButton = ({ onFilterClick }: FilterButtonProps) => {
  return (
    <>
      <button
        className="border p-3 rounded-full hover:opacity-50 bg-white"
        onClick={onFilterClick}
      >
        <span>絞り込み</span>
      </button>
    </>
  );
};

export default FilterButton;
