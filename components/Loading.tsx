// components/Loading.tsx
const Loading: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-gray-300 z-[999]">
      <div className="text-4xl text-gray-900">Loading...</div>
    </div>
  );
};

export default Loading;
