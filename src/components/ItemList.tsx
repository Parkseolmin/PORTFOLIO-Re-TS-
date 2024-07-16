import { Projects } from '../assets/data/data';

interface ItemListProps {
  items: Projects[];
  onItemClick: (item: Projects) => void;
}

export default function ItemList({ items, onItemClick }: ItemListProps) {
  return (
    <div className='items'>
      <span
        style={{
          borderBottom: '2px solid white',
          width: '140px',
          cursor: 'default',
          marginBottom: '10px',
        }}
      >
        PROJECTS WEB
      </span>
      {items.map((item, index) => (
        <div key={index} className='item' onClick={() => onItemClick(item)}>
          <div className='item-index'>{String(index + 1).padStart(2, '0')}</div>
          <div className='item-name'>{item.itemName}</div>
        </div>
      ))}
    </div>
  );
}
