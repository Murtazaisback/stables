import { useInView } from 'react-intersection-observer';

const useAnimateOnView = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return [ref, inView];
};

export default useAnimateOnView;