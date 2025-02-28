import { Projects } from '../assets/data/data';

interface ItemListProps {
  items: Projects[];
  onItemClick: (item: Projects) => void;
}

export default function ItemList({ items, onItemClick }: ItemListProps) {
  return (
    <div className='items'>
      <span>PROJECTS WEB</span>
      {items.map((item, index) => (
        <div key={index} className='item' onClick={() => onItemClick(item)}>
          <div className='item-index'>{String(index + 1).padStart(2, '0')}</div>
          <div className='item-name'>{item.projectName}</div>
        </div>
      ))}
    </div>
  );
}
