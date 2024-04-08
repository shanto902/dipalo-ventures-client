interface SelectedFilterButtonsProps {
    items: string[];
    onClick: (item: string) => void;
  }

export const SelectedFilterButtons = ({ items, onClick }:SelectedFilterButtonsProps) => (
    <>
      {items.map((item, index) => (
        <button
          key={index}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          onClick={() => onClick(item)}
        >
          {item}
        </button>
      ))}
    </>
  );