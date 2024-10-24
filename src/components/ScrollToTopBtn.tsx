interface HandleClick {
  handleClick: () => void;
}

export default function ScrollToTopBtn({ handleClick }: HandleClick) {
  return (
    <div className='arrowbox' onClick={handleClick}>
      <button
        className='overlayArrow'
        aria-label='button for raising the screen'
      >
        <svg
          width='40'
          height='40'
          strokeWidth='1.5'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15.5 16.5L12 13L8.5 16.5'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M15.5 10.5L12 7L8.5 10.5'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </div>
  );
}
