import React from 'react';
import { OverlayComponentProps } from '../../../types/overlay';

const OverlayLinks = React.memo(function OverlayLinks({
  item,
}: OverlayComponentProps) {
  return (
    <div className='overlay-section'>
      <p>
        <a href={item?.projectLink} target='_blank' rel='noopener noreferrer'>
          <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='m0 0h24v24h-24z'
              fill='#fff'
              opacity='0'
              transform='matrix(-1 0 0 -1 24 24)'
            />
            <path
              d='m18 7.05a1 1 0 0 0 -1-1l-8-.05a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l8.29-8.29v5.58a1 1 0 0 0 1 1 1 1 0 0 0 1-1z'
              fill='#231f20'
            />
          </svg>
          View Site
        </a>
        <a href={item?.projectBlog} target='_blank' rel='noopener noreferrer'>
          {' '}
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M15.6 18.196c-.777.371-1.48.631-2.109.781a8.92 8.92 0 0 1-2.043.223c-.831 0-1.566-.107-2.205-.318a4.757 4.757 0 0 1-1.635-.908c-.451-.395-.764-.812-.938-1.254-.174-.443-.261-1.086-.261-1.926V8.339H4.4V5.735c.714-.234 1.326-.57 1.835-1.01a5.04 5.04 0 0 0 1.227-1.58c.308-.613.519-1.396.636-2.345h2.585v4.652h4.314v2.887h-4.314v4.719c0 1.066.056 1.752.168 2.055.111.303.319.545.622.725.403.244.863.367 1.381.367.92 0 1.836-.303 2.746-.908v2.899z' />
          </svg>
          Blog Doc
        </a>
        <a href={item?.projectGit} target='_blank' rel='noopener noreferrer'>
          <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='m0 0h24v24h-24z'
              fill='#fff'
              opacity='0'
              transform='matrix(-1 0 0 -1 24 24)'
            />
            <path
              d='m12 1a10.89 10.89 0 0 0 -11 10.77 10.79 10.79 0 0 0 7.52 10.23c.55.1.75-.23.75-.52s0-.93 0-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0 -1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84 4.15 4.15 0 0 1 1.17 2.89c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95s.2.63.75.52a10.8 10.8 0 0 0 7.5-10.22 10.89 10.89 0 0 0 -11-10.77'
              fill='#231f20'
            />
          </svg>
          GitHub
        </a>
      </p>
      <p>
        <span>- Project Intro</span>
        <br />
        {item?.projectIntro}
      </p>
    </div>
  );
});

export default OverlayLinks;
