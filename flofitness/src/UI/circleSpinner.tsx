import Loader from 'react-loader-spinner';

const CircleLoader = () => {
  return (
    <div style={{ padding: '5px' }}>
      <Loader type="Watch" color="#00BFFF" height={50} width={50} />
    </div>
  );
};

export default CircleLoader;
