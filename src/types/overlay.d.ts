import { Projects } from '../assets/data/data';

export interface OverlayComponentProps {
  item: Projects | null;
}

export interface OverlayHeaderProps extends OverlayComponentProps {
  onClose: () => void;
}
