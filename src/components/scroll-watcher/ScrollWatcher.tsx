import './ScrollWatcher.scss';

interface ScrollWatcherProps {
  axis: 'x' | 'y';
}

function ScrollWatcher({ axis }: ScrollWatcherProps) {
  const isXAxis = axis === 'x';

  return (
    <div
      className={`scroll-watcher ${isXAxis ? 'scroll-x' : 'scroll-y'}`}
    ></div>
  );
}

export default ScrollWatcher;
