interface NavProps {
  onAboutClick: () => void;
  showAbout: boolean;
}

export default function Nav({ onAboutClick, showAbout }: NavProps) {
  return (
    <nav className='nav'>
      <p>PORTFOLIO .</p>
      <p onClick={onAboutClick} style={{ cursor: 'pointer' }}>
        ABOUT
        {showAbout ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={4.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={4.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25'
            />
          </svg>
        )}
      </p>
    </nav>
  );
}
